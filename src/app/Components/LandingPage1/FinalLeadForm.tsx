"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Pincode } from "./Pincode";
import { normalizePhoneNumber } from "../../../lib/utils";
import { getVerificationStatus } from "@/lib/leadVerification";
import {
  POST_LEAD_SUCCESS_PATH,
  saveLeadContactToSession,
} from "@/lib/postLeadSubmitRedirect";

const projectPossessionTimelineOptions = [
  "Ready to Move",
  "0 - 3 Months",
  "3 - 6 Months",
  "6+ Months",
  "Under Construction",
  "No Property Yet",
  "Renovation (Currently Staying Here)",
];

const HOT_TIMELINES = [
  "Ready to Move",
  "0 - 3 Months",
  "Renovation (Currently Staying Here)",
];

interface CalculatorData {
  bhkType?: string;
  rooms?: Record<string, number>;
  wardrobe?: {
    type?: string;
    height?: string;
    measurements?: { width?: number; height?: number; depth?: number };
  };
  kitchen?: { layout?: string; size?: string; units?: string[] };
  collections?: { selections?: string[] };
  material?: { type?: string; finish?: string };
}

type FinalLeadFormProps = { calculatorData?: CalculatorData };

const FinalLeadForm: React.FC<FinalLeadFormProps> = ({ calculatorData }) => {
  const router = useRouter();

  const [selectedPincode, setSelectedPincode] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "phone") {
      const value = normalizePhoneNumber(e.target.value);
      setFormData((prev) => ({ ...prev, phone: value }));
      if (value !== formData.phone) {
        setOtpSent(false);
        setOtp("");
        setIsVerified(false);
        setOtpError("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const sendOTP = async () => {
    setIsSendingOTP(true);
    setOtpError("");
    try {
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch("/api/send-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
      } else {
        setOtpError(data.message || "Failed to send OTP");
      }
    } catch (error) {
      setOtpError(
        `Failed to send OTP: ${error instanceof Error ? error.message : "Please try again."}`,
      );
    } finally {
      setIsSendingOTP(false);
    }
  };

  const resendOTP = async () => {
    setIsSendingOTP(true);
    setOtpError("");
    try {
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch("/api/resend-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone }),
      });
      const data = await response.json();
      if (!data.success) setOtpError(data.message || "Failed to resend OTP");
    } catch {
      setOtpError("Failed to resend OTP. Please try again.");
    } finally {
      setIsSendingOTP(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setOtpError("Please enter the OTP");
      return;
    }
    setIsVerifying(true);
    try {
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch("/api/verify-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone, otp }),
      });
      const data = await response.json();
      if (data.success) {
        setIsVerified(true);
        setOtpError("");
      } else {
        setOtpError(data.message || "Invalid OTP");
      }
    } catch {
      setOtpError("Failed to verify OTP. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleFinalSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const currentUrl = window.location.href;
      const c = calculatorData || {};
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
        calculator: c,
        bhkType: c.bhkType ?? "",
        rooms: c.rooms ? JSON.stringify(c.rooms) : "",
        wardrobe: c.wardrobe ? JSON.stringify(c.wardrobe) : "",
        kitchen: c.kitchen ? JSON.stringify(c.kitchen) : "",
        collections: c.collections ? JSON.stringify(c.collections) : "",
        material: c.material ? JSON.stringify(c.material) : "",
      };
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem("formSubmitted", "true");
        saveLeadContactToSession({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pincode: selectedPincode,
        });

        // Capture timeline before any state change
        const timeline = selectedTimeline;

        // Hot timelines → redirect (reset before navigating away)
        if (HOT_TIMELINES.includes(timeline)) {
          setFormData({ name: "", email: "", phone: "" });
          setSelectedPincode("");
          setSelectedTimeline("");
          setOtpSent(false);
          setOtp("");
          setIsVerified(false);
          setOtpError("");
          router.push(POST_LEAD_SUCCESS_PATH);
        } else {
          // Show popup FIRST — page content stays visible behind blur
          // Reset happens when user closes the popup
          setShowThankYouPopup(true);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    formData,
    selectedPincode,
    selectedTimeline,
    isVerified,
    calculatorData,
    router,
  ]);

  const performSubmitFlow = useCallback(async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !selectedPincode ||
      !selectedTimeline
    )
      return;
    if (!isVerified) {
      setOtpError("Please verify your phone number with OTP first");
      return;
    }
    await handleFinalSubmit();
  }, [
    formData,
    selectedPincode,
    selectedTimeline,
    isVerified,
    handleFinalSubmit,
  ]);

  useEffect(() => {
    const handler = () => {
      performSubmitFlow();
    };
    window.addEventListener("calculator:submit-final", handler);
    return () => window.removeEventListener("calculator:submit-final", handler);
  }, [performSubmitFlow]);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-5 lg:p-6 w-[300px] sm:w-[400px] lg:w-[500px] mx-auto mt-10">
        <div className="text-[24px] sm:text-2xl lg:text-3xl manrope-semibold text-center mb-4 sm:mb-5 text-amber-950">
          Get Your Free Estimate
        </div>

        {/* All fields — uniform space-y-4 gap between every element */}
        <div className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name *"
            required
            className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-4 placeholder-gray-400 font-medium border-0 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            required
            className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-4 placeholder-gray-400 font-medium border-0 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            required
            className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-4 placeholder-gray-400 font-medium border-0 outline-none"
          />

          {/* Send OTP — only appears once exactly 10 digits entered, not yet sent/verified */}
          {normalizePhoneNumber(formData.phone).length === 10 &&
            !otpSent &&
            !isVerified && (
              <button
                type="button"
                onClick={sendOTP}
                disabled={isSendingOTP}
                className="w-full h-[50px] bg-[#DDCDC1] text-amber-950 rounded-3xl text-base font-medium hover:bg-[#c4b5a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSendingOTP ? "Sending OTP…" : "Send OTP"}
              </button>
            )}

          {/* OTP input + Verify — after OTP sent */}
          {otpSent && !isVerified && (
            <>
              <p className="text-sm text-gray-500 text-center">
                OTP sent to {formData.phone}
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP *"
                maxLength={6}
                className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-4 placeholder-gray-400 font-medium border-0 outline-none"
              />
              <button
                type="button"
                onClick={verifyOTP}
                disabled={isVerifying || otp.length < 4}
                className="w-full h-[50px] bg-[#c0392b] text-white rounded-3xl text-base font-medium hover:bg-[#a93226] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? "Verifying…" : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={resendOTP}
                disabled={isSendingOTP}
                className="w-full h-[44px] bg-white border border-[#DDCDC1] text-amber-950 rounded-3xl text-sm font-medium hover:bg-[#f9f5f2] transition-colors disabled:opacity-50"
              >
                {isSendingOTP ? "Sending…" : "Resend OTP"}
              </button>
            </>
          )}

          {/* Verified badge */}
          {isVerified && (
            <p className="text-sm text-green-600 font-medium text-center">
              ✓ Phone verified
            </p>
          )}

          {otpError && (
            <p className="text-red-500 text-sm text-center">{otpError}</p>
          )}

          {/* Property Pincode */}
          <div className="relative w-full">
            <select
              name="pincode"
              required
              value={selectedPincode}
              onChange={(e) => setSelectedPincode(e.target.value)}
              className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-10 text-gray-400 appearance-none cursor-pointer border-0 outline-none"
            >
              <option value="" disabled>
                Property Pincode *
              </option>
              {Pincode.map((pin, idx) => (
                <option key={idx} value={pin}>
                  {pin}
                </option>
              ))}
            </select>
            <span className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">
              &#9662;
            </span>
          </div>

          {/* Project Possession Timeline */}
          <div className="relative w-full">
            <select
              name="projectPossessionTimeline"
              required
              value={selectedTimeline}
              onChange={(e) => setSelectedTimeline(e.target.value)}
              className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl text-base pl-6 pr-10 text-gray-400 appearance-none cursor-pointer border-0 outline-none"
            >
              <option value="" disabled>
                Project Possession Timeline ? *
              </option>
              {projectPossessionTimelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">
              &#9662;
            </span>
          </div>
        </div>

        {isSubmitting && (
          <p className="text-sm text-gray-500 text-center mt-3">Submitting…</p>
        )}

        <div className="text-xs text-left mt-4 font-medium pl-4">
          By submitting, you agree to our Privacy Policy ,{" "}
          <span>Terms & Conditions</span>
        </div>
      </div>

      {/* Thank You Popup — for non-hot timelines */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl relative">
            <button
              onClick={() => {
                setShowThankYouPopup(false);
                setFormData({ name: "", email: "", phone: "" });
                setSelectedPincode("");
                setSelectedTimeline("");
                setOtpSent(false);
                setOtp("");
                setIsVerified(false);
                setOtpError("");
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 manrope mb-2">
              Thank you!
            </h2>
            <p className="text-gray-500 font-medium mb-6">
              Your form has been submitted.
            </p>
            <button
              onClick={() => {
                setShowThankYouPopup(false);
                setFormData({ name: "", email: "", phone: "" });
                setSelectedPincode("");
                setSelectedTimeline("");
                setOtpSent(false);
                setOtp("");
                setIsVerified(false);
                setOtpError("");
              }}
              className="w-full border border-red-400 text-red-500 rounded-xl py-3 text-base font-medium hover:bg-red-50 transition-colors"
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
