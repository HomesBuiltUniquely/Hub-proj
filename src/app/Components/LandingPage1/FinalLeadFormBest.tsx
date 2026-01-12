'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Pincode } from './Pincode';
import { normalizePhoneNumber } from '@/lib/utils';

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

const FinalLeadFormBest: React.FC<FinalLeadFormProps> = ({ calculatorData }) => {
  const router = useRouter();

  const [selectedPincode, setSelectedPincode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  
  // OTP related states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'phone') {
      const value = normalizePhoneNumber(e.target.value);
      setFormData(prev => ({ ...prev, [e.target.name]: value }));
      // Reset OTP states when phone changes
      if (value !== formData.phone) {
        setOtpSent(false);
        setOtp('');
        setIsVerified(false);
        setOtpError('');
      }
    } else {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const sendOTP = async () => {
    if (!formData.phone) {
      setOtpError('Please enter a phone number first');
      return;
    }

    if (formData.phone.length !== 10) {
      setOtpError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSendingOTP(true);
    setOtpError('');

    try {
      console.log('Sending OTP request for phone:', formData.phone);
      const response = await fetch('/api/send-msg91-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone }),
      });

      console.log('OTP API response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('OTP API response data:', data);
      
      if (data.success) {
        setOtpSent(true);
        setOtpError('');
      } else {
        const errorMsg = data.message || 'Failed to send OTP';
        console.error('OTP send failed:', errorMsg, data);
        setOtpError(errorMsg);
      }
    } catch (error) {
      console.error('OTP send error:', error);
      setOtpError(`Failed to send OTP: ${error instanceof Error ? error.message : 'Please try again.'}`);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const resendOTP = async () => {
    setIsSendingOTP(true);
    setOtpError('');
    try {
      const response = await fetch('/api/resend-msg91-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone }),
      });

      const data = await response.json();
      if (data.success) {
        setOtpError('');
      } else {
        setOtpError(data.message || 'Failed to resend OTP');
      }
    } catch {
      setOtpError('Failed to resend OTP. Please try again.');
    } finally {
      setIsSendingOTP(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setOtpError('Please enter the OTP');
      return;
    }

    setIsVerifying(true);
    try {
      const response = await fetch('/api/verify-msg91-otp', {
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
        email: '', // Email removed from form
        phone: formData.phone,
        possession: '', // Project Type & Possession removed from form
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
        // Fire-and-forget to external endpoint (same pattern as HeroSection)
        (async () => {
          try {
            const home1Payload = {
              name: requestData.name,
              email: requestData.email,
              phoneNumber: requestData.phone,
              propertyPin: requestData.pincode,
              interiorSetup: requestData.possession || '',
              possessionIn: requestData.possession || '',
            };

            await fetch('https://hows.hubinterior.com/v1/Home1', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(home1Payload),
            });
          } catch (err) {
            console.warn('Failed to POST to https://hows.hubinterior.com/v1/Home1', err);
          }
        })();

        setSelectedPincode('');
        setFormData({ name: '', email: '', phone: '' });
        // Reset OTP states
        setOtpSent(false);
        setOtp('');
        setIsVerified(false);
        setOtpError('');
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
  }, [formData, selectedPincode, isVerified, calculatorData, router]);

  const performSubmitFlow = useCallback(async () => {
    if (!formData.name || !formData.phone || !selectedPincode) {
      return;
    }
    
    if (!isVerified) {
      setOtpError('Please verify your phone number with OTP first');
      return;
    }
    
    await handleFinalSubmit();
  }, [formData, selectedPincode, isVerified, handleFinalSubmit]);

  useEffect(() => {
    const handler = () => { performSubmitFlow(); };
    window.addEventListener('calculator:submit-final', handler);
    return () => { window.removeEventListener('calculator:submit-final', handler); };
  }, [performSubmitFlow]);

  return (
    <div>
      <div className="bg-white w-full rounded-3xl shadow-2xl p-4 sm:p-6 w-[300px] sm:w-[400px] lg:w-[500px] h-[400px] mx-auto mt-2">
        <div className="text-2xl sm:text-3xl manrope-semibold text-center mb-6 text-amber-950">Get Your Free Estimate</div>

        {/* Stacked inputs, one after another */}
        <div className="space-y-6">
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
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            required
            className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 font-medium"
          />
          
          {/* OTP Section */}
          {formData.phone && formData.phone.length > 0 && (
            <div className="space-y-3">
              {!otpSent ? (
                <button
                  type="button"
                  onClick={sendOTP}
                  disabled={formData.phone.length !== 10 || isSendingOTP}
                  className="w-full h-[50px] bg-blue-500 text-white rounded-3xl text-base sm:text-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSendingOTP ? 'Sending OTP...' : 'Send OTP'}
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
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={verifyOTP}
                      disabled={isVerifying}
                      className="flex-1 h-[50px] bg-green-500 text-white rounded-3xl text-base sm:text-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                    >
                      {isVerifying ? 'Verifying...' : 'Verify OTP'}
                    </button>
                    <button
                      type="button"
                      onClick={resendOTP}
                      disabled={isSendingOTP}
                      className="px-4 h-[50px] bg-blue-500 text-white rounded-3xl text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
                    >
                      Resend
                    </button>
                  </div>
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
        By submitting, you agree to our Privacy Policy , Terms & Conditions

        </div>
      </div>
    </div>
  );
};

export default FinalLeadFormBest;