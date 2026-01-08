"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { normalizePhoneNumber } from "@/lib/utils";

const EstimateForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    pincode: '',
    tellUsMore: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // OTP related states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      const normalized = normalizePhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: normalized
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const sendOTP = async () => {
    if (!formData.phoneNumber) {
      setOtpError('Please enter a phone number first');
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      setOtpError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSendingOTP(true);
    setOtpError('');

    try {
      console.log('Sending OTP request for phone:', formData.phoneNumber);
      const response = await fetch('/api/send-msg91-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phoneNumber }),
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
        body: JSON.stringify({ phone: formData.phoneNumber, otp }),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      setOtpError('Please verify your phone number with OTP first');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
      const response = await fetch('/api/get-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: pageUrl
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phoneNumber: '', pincode: '', tellUsMore: '' });
        // Reset OTP states
        setOtpSent(false);
        setOtp('');
        setIsVerified(false);
        setOtpError('');
        // Redirect to thank you page after successful submission
        router.push('/Form-Submit-Thank-You');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-[450px] mx-auto border border-white/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base"
            placeholder="Name*"
          />
        </div>

        <div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData(prev => ({ ...prev, phoneNumber: value }));
            }}
            required
            className="w-full px-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base"
            placeholder="Phone Number*"
          />
        </div>
        
        {/* OTP Section */}
        {formData.phoneNumber && formData.phoneNumber.length > 0 && (
          <div className="space-y-3">
            {!otpSent ? (
            <button
              type="button"
              onClick={sendOTP}
              disabled={formData.phoneNumber.length !== 10 || isSendingOTP}
              className="w-full bg-blue-500 text-white rounded-xl py-3 px-4 font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="w-full px-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base"
              />
              <button
                type="button"
                onClick={verifyOTP}
                disabled={isVerifying}
                className="w-full bg-green-500 text-white rounded-xl py-3 px-4 font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
          ) : (
            <div className="w-full bg-green-100 text-green-700 rounded-xl py-3 px-4 flex items-center font-medium">
              ✅ Phone Number Verified
            </div>
          )}
          
          {otpError && (
            <div className="text-red-500 text-sm text-center">{otpError}</div>
          )}
          </div>
        )}

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base"
            placeholder="Email*"
          />
        </div>

        <div>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base"
            placeholder="Pincode*"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed text-base"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Thank you! We&apos;ll get back to you soon with your estimate.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;