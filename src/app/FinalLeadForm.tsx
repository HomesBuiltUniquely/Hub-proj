'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Pincode } from './Pincode';
import { normalizePhoneNumber } from '@/lib/utils';
import { getVerificationStatus } from '@/lib/leadVerification';
import { POST_LEAD_SUCCESS_PATH, saveLeadContactToSession } from '@/lib/postLeadSubmitRedirect';

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

const projectPossessionTimelineOptions = [
  'Ready to Move',
  '0 - 3 Months',
  '3 - 6 Months',
  '6+ Months',
  'Under Construction',
  'No Property Yet',
  'Renovation (Currently Staying Here)',
];

// These timelines indicate high-intent leads → redirect to thank-you page
const HOT_TIMELINES = [
  'Ready to Move',
  '0 - 3 Months',
  'Renovation (Currently Staying Here)',
];

type FinalLeadFormProps = { calculatorData?: CalculatorData };

const FinalLeadForm: React.FC<FinalLeadFormProps> = ({ calculatorData }) => {
  const router = useRouter();

  const [selectedPincode, setSelectedPincode] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // OTP related states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
    setSelectedPincode('');
    setSelectedTimeline('');
    setOtpSent(false);
    setOtp('');
    setIsVerified(false);
    setOtpError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'phone') {
      const normalized = normalizePhoneNumber(e.target.value);
      setFormData(prev => ({ ...prev, phone: normalized }));
      // Reset OTP state if phone number changes
      if (normalized !== formData.phone) {
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
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch('/api/send-msg91-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanedPhone }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        setOtpError('');
      } else {
        setOtpError(data.message || 'Failed to send OTP');
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
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch('/api/verify-msg91-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanedPhone, otp }),
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
        possession: selectedTimeline,
        projectPossessionTimeline: selectedTimeline,
        pincode: selectedPincode,
        pageUrl: currentUrl,
        verificationStatus: getVerificationStatus(isVerified),
        otpSuccess: isVerified,
        // Calculator data — both nested and flattened for backend email processing
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      console.log('[FinalLeadForm] API status:', res.status, 'response:', data);

      if (res.ok && data.success) {
        sessionStorage.setItem('formSubmitted', 'true');
        saveLeadContactToSession({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pincode: selectedPincode,
        });

        // Capture timeline before any state changes
        const timeline = selectedTimeline;

        if (HOT_TIMELINES.includes(timeline)) {
          // High-intent lead → redirect to thank-you page immediately
          resetForm();
          router.push(POST_LEAD_SUCCESS_PATH);
        } else {
          // Lower-intent lead → show inline Thank You popup, stay on page
          setShowThankYouPopup(true);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, selectedTimeline, selectedPincode, isVerified, calculatorData, router]);

  const performSubmitFlow = useCallback(async () => {
    if (!formData.name || !formData.email || !formData.phone || !selectedTimeline || !selectedPincode) {
      return;
    }
    if (!isVerified) {
      setOtpError('Please verify your phone number with OTP first');
      return;
    }
    await handleFinalSubmit();
  }, [formData, selectedTimeline, selectedPincode, isVerified, handleFinalSubmit]);

  useEffect(() => {
    const handler = () => { performSubmitFlow(); };
    window.addEventListener('calculator:submit-final', handler);
    return () => { window.removeEventListener('calculator:submit-final', handler); };
  }, [performSubmitFlow]);

  return (
    <>
      <div>
        <div className="bg-white w-full rounded-3xl shadow-2xl p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl manrope-semibold text-center mb-6 text-amber-950">Get Your Free Estimate</div>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *"
              required
              className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 manrope-medium"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              required
              className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 manrope-medium"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number *"
              required
              className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 manrope-medium"
            />

            {/* OTP Section — appears once phone has exactly 10 digits */}
            {formData.phone && (
              <div className="space-y-3">
                {!otpSent ? (
                  <button
                    type="button"
                    onClick={sendOTP}
                    disabled={formData.phone.length !== 10 || isSendingOTP}
                    className="w-full h-[50px] bg-blue-500 text-white rounded-3xl text-base sm:text-lg manrope-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="w-full h-[50px] bg-[#f2f2f6] rounded-3xl text-base sm:text-lg pl-6 placeholder-gray-400 manrope-medium"
                    />
                    <button
                      type="button"
                      onClick={verifyOTP}
                      disabled={isVerifying}
                      className="w-full h-[50px] bg-green-500 text-white rounded-3xl text-base sm:text-lg manrope-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                    >
                      {isVerifying ? 'Verifying...' : 'Verify OTP'}
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-[50px] bg-green-100 text-green-700 rounded-3xl text-base sm:text-lg pl-6 flex items-center manrope-medium">
                    ✅ Phone Number Verified
                  </div>
                )}

                {otpError && (
                  <div className="text-red-500 text-sm manrope-medium text-center">{otpError}</div>
                )}
              </div>
            )}

            {/* Property Pincode */}
            <div className="relative w-full">
              <select
                name="pincode"
                required
                value={selectedPincode}
                onChange={e => setSelectedPincode(e.target.value)}
                className="w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
              >
                <option className="text-gray-400" value="" disabled>Property Pincode *</option>
                {Pincode.map((pin, idx) => (<option key={idx} value={pin}>{pin}</option>))}
              </select>
              <span className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 text-[18px] pointer-events-none">&#9662;</span>
            </div>

            {/* Project Possession Timeline */}
            <div className="relative w-full">
              <select
                name="projectPossessionTimeline"
                required
                value={selectedTimeline}
                onChange={e => setSelectedTimeline(e.target.value)}
                className="w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
              >
                <option className="text-gray-400" value="" disabled>Project Possession Timeline? *</option>
                {projectPossessionTimelineOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <span className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 text-[18px] pointer-events-none">&#9662;</span>
            </div>
          </div>

          {/* Status row */}
          <div className="flex items-center justify-end mt-6">
            <div className="text-sm text-gray-500">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : ''}
            </div>
          </div>

          <div className="text-xs mt-4 manrope-medium text-center">
            By submitting, you agree to our Privacy Policy &amp; Terms &amp; Conditions
          </div>
        </div>
      </div>

      {/* Thank You Popup — shown for non-hot timelines, stays on same page */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl relative">
            <button
              onClick={() => {
                setShowThankYouPopup(false);
                resetForm();
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
            >
              ×
            </button>
            <div className="flex items-center justify-center mb-5">
              <div className="w-16 h-16 rounded-full border-[3px] border-dashed border-red-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl manrope-semibold text-gray-800 mb-2">Thank you!</h2>
            <p className="text-gray-500 manrope-medium mb-6">Your form has been submitted.</p>
            <button
              onClick={() => {
                setShowThankYouPopup(false);
                resetForm();
              }}
              className="w-full border border-red-400 text-red-500 rounded-xl py-3 text-base manrope-medium hover:bg-red-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FinalLeadForm;
