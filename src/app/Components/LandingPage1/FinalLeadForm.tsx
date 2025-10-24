'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Pincode } from './Pincode';
import { budgetOptions } from './DropDown2';

interface CalculatorData {
  bhkType?: string;
  rooms?: Record<string, number>;
  wardrobe?: {
    type?: string;
    height?: string;
    measurements?: {
      width?: number;
      height?: number;
      depth?: number;
    };
  };
  kitchen?: {
    layout?: string;
    size?: string;
    units?: string[];
  };
  collections?: {
    selections?: string[];
  };
  material?: {
    type?: string;
    finish?: string;
  };
}

type FinalLeadFormProps = { calculatorData?: CalculatorData };

const FinalLeadForm: React.FC<FinalLeadFormProps> = ({ calculatorData }) => {
  const router = useRouter();

  const [selectedPincode, setSelectedPincode] = useState('');
  const [selectedPossession, setSelectedPossession] = useState('');
  const [possessionOpen, setPossessionOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  
  // OTP related states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePossessionSelect = (option: string) => {
    setSelectedPossession(option);
    setPossessionOpen(false);
  };

  const sendOTP = async () => {
    if (!formData.phone) {
      setOtpError('Please enter a phone number first');
      return;
    }

    try {
      const response = await fetch('/api/send-twilio-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone }),
      });

      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        setOtpError('');
      } else {
        setOtpError(data.message || 'Failed to send OTP');
      }
    } catch {
      setOtpError('Failed to send OTP. Please try again.');
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setOtpError('Please enter the OTP');
      return;
    }

    setIsVerifying(true);
    try {
      const response = await fetch('/api/verify-twilio-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone, otp }),
      });

      const data = await response.json();
      if (data.success) {
        setIsVerified(true);
        setOtpError('');
      } else {
        setOtpError(data.message || 'Invalid OTP');
      }
    } catch {
      setOtpError('Failed to verify OTP. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleFinalSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const currentUrl = window.location.href;
      const c = calculatorData || {};
      console.log('[FinalLeadForm] Received calculatorData:', c);
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        possession: selectedPossession,
        pincode: selectedPincode,
        pageUrl: currentUrl,
        verificationStatus: isVerified ? 'Verified User' : 'No OTP',
        // Include calculator data both nested and flattened for backend email processing
        calculator: c,
        bhkType: c.bhkType ?? '',
        rooms: c.rooms ? JSON.stringify(c.rooms) : '',
        wardrobe: c.wardrobe ? JSON.stringify(c.wardrobe) : '',
        kitchen: c.kitchen ? JSON.stringify(c.kitchen) : '',
        collections: c.collections ? JSON.stringify(c.collections) : '',
        material: c.material ? JSON.stringify(c.material) : '',
      };
      console.log('[FinalLeadForm] Submitting payload to /api/contact:', requestData);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestData), signal: controller.signal });
      clearTimeout(timeoutId);
      const data = await res.json();
      console.log('[FinalLeadForm] API status:', res.status, 'response:', data);
      if (res.ok && data.success) {
        setSelectedPincode('');
        setSelectedPossession('');
        setFormData({ name: '', email: '', phone: '' });
        // Set flag to trigger reload on thank you page for GTM tracking
        sessionStorage.setItem('formSubmitted', 'true');
        
        // Store user data for thank you page
        sessionStorage.setItem('userEmail', formData.email);
        sessionStorage.setItem('userPhone', formData.phone);
        sessionStorage.setItem('userName', formData.name);
        
        router.push('/Form-Submit-Thank-You');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    } 
  }, [formData, selectedPossession, selectedPincode, isVerified, calculatorData, router]);

  const performSubmitFlow = useCallback(async () => {
    if (!formData.name || !formData.email || !formData.phone || !selectedPossession || !selectedPincode) {
      return;
    }
    
    if (!isVerified) {
      setOtpError('Please verify your phone number with OTP first');
      return;
    }
    
    await handleFinalSubmit();
  }, [formData, selectedPossession, selectedPincode, isVerified, handleFinalSubmit]);

  useEffect(() => {
    const handler = () => { performSubmitFlow(); };
    window.addEventListener('calculator:submit-final', handler);
    return () => { window.removeEventListener('calculator:submit-final', handler); };
  }, [performSubmitFlow]);

  return (
    <div>
      <div className="bg-white w-full rounded-3xl shadow-2xl p-4 sm:p-6">
        <div className="text-2xl sm:text-3xl manrope-semibold text-center mb-6 text-amber-950">Get Your Free Estimate</div>

        {/* Stacked inputs, one after another */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name *"
            required
            className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            required
            className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            required
            className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          
          {/* OTP Section */}
          {formData.phone && (
            <div className="space-y-3">
              {!otpSent ? (
                <button
                  type="button"
                  onClick={sendOTP}
                  className="w-full h-[50px] bg-blue-500 text-white rounded-3xl text-base sm:text-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Send OTP
                </button>
              ) : !isVerified ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP *"
                    className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
                  />
                  <button
                    type="button"
                    onClick={verifyOTP}
                    disabled={isVerifying}
                    className="w-full h-[50px] bg-green-500 text-white rounded-3xl text-base sm:text-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                  >
                    {isVerifying ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </div>
              ) : (
                <div className="w-full h-[50px] bg-green-100 text-green-700 rounded-3xl text-base sm:text-lg pl-6 flex items-center font-medium">
                  ✅ Phone Number Verified
                </div>
              )}
              
              {otpError && (
                <div className="text-red-500 text-sm text-center">{otpError}</div>
              )}
            </div>
          )}
          
          <div className="relative w-full">
            <div
              onClick={() => {
                setPossessionOpen(!possessionOpen);
              }}
              className={`w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl text-base sm:text-lg flex items-center justify-between px-6 cursor-pointer ${!selectedPossession && 'text-gray-400'}`}
            >
              <span>
                {selectedPossession || "Possession In *"}
              </span>
              <span className="text-gray-500">&#9662;</span>
            </div>
            {possessionOpen && (
              <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-[9999] text-left max-h-60 overflow-y-auto font-medium">
                {budgetOptions.map((option: string) => (
                  <li
                    key={option}
                    onClick={() => handlePossessionSelect(option)}
                    className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-full">
            <select
              name="pincode"
              required
              value={selectedPincode}
              onChange={e => setSelectedPincode(e.target.value)}
              className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
            >
              <option className="text-gray-400" value="" disabled>Property Pincode *</option>
              {Pincode.map((pin, idx) => (<option key={idx} value={pin}>{pin}</option>))}
            </select>
            <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
          </div>
        </div>

        {/* Status row (no submit or WhatsApp checkbox) */}
        <div className="flex items-center justify-end mt-6">
          <div className="text-sm text-gray-500">{isSubmitting ? 'Submitting...' : ''}</div>
        </div>

        <div className="text-xs mt-4 font-medium text-center">
        By submitting, you agree to our Privacy Policy & Terms & Conditions

        </div>
      </div>
    </div>
  );
};

export default FinalLeadForm;