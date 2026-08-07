"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { normalizePhoneNumber } from "@/lib/utils";
import cityOptions from "../LandingPage1/DropDown1";
import { Pincode } from "../LandingPage1/Pincode";
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

const inputClass =
  "w-full px-4 py-4 bg-white rounded-full border border-[#DDCDC1] focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base";

const MobileFormSection: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    interiorSetup: "",
    projectPossessionTimeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({
        ...prev,
        [name]: normalizePhoneNumber(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const sendOTP = async () => {
    if (formData.phone.length !== 10) {
      setOtpError("Please enter a valid 10-digit phone number");
      return;
    }
    setIsSendingOTP(true);
    setOtpError("");
    try {
      const response = await fetch("/api/send-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone }),
      });
      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
      } else {
        setOtpError(data.message || "Failed to send OTP");
      }
    } catch {
      setOtpError("Failed to send OTP. Please try again.");
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
      const response = await fetch("/api/verify-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, otp }),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      setOtpError("Please verify your phone number with OTP first");
      return;
    }
    if (!Pincode.includes(formData.pincode)) {
      setOtpError("Service unavailable for this pincode");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const pageUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const response = await fetch("/api/get-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageUrl,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        saveLeadContactToSession({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pincode: formData.pincode,
        });
        sessionStorage.setItem("formSubmitted", "true");
        setFormData({
          name: "",
          email: "",
          phone: "",
          pincode: "",
          interiorSetup: "",
          projectPossessionTimeline: "",
        });
        setOtpSent(false);
        setOtp("");
        setIsVerified(false);
        setOtpError("");
        router.push(POST_LEAD_SUCCESS_PATH);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="block md:hidden bg-gray-100 py-10 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#DDCDC1]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={inputClass}
              placeholder="Name *"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClass}
              placeholder="Email *"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, phone: value }));
                setOtpSent(false);
                setIsVerified(false);
                setOtp("");
                setOtpError("");
              }}
              required
              className={inputClass}
              placeholder="Phone Number *"
            />

            {formData.phone.length === 10 && !otpSent && (
              <button
                type="button"
                onClick={sendOTP}
                disabled={isSendingOTP}
                className="w-full bg-[#DDCDC1] text-amber-950 rounded-full py-3 px-4 font-medium hover:bg-[#c4b5a8] transition-colors disabled:opacity-50"
              >
                {isSendingOTP ? "Sending OTP…" : "Send OTP"}
              </button>
            )}

            {otpSent && !isVerified && (
              <div className="space-y-3">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP *"
                  maxLength={6}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={verifyOTP}
                  disabled={isVerifying || otp.length < 4}
                  className="w-full bg-[#DDCDC1] text-amber-950 rounded-full py-3 px-4 font-medium hover:bg-[#c4b5a8] transition-colors disabled:opacity-50"
                >
                  {isVerifying ? "Verifying…" : "Verify OTP"}
                </button>
              </div>
            )}

            {isVerified && (
              <div className="w-full bg-green-100 text-green-700 rounded-full py-3 px-4 text-center font-medium text-sm">
                ✓ Phone Number Verified
              </div>
            )}

            {otpError && (
              <div className="text-red-500 text-sm text-center">{otpError}</div>
            )}

            <select
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className={`${inputClass} text-gray-500`}
            >
              <option value="" disabled>
                Property Pincode ( Bangalore Only ) *
              </option>
              {Pincode.map((pin) => (
                <option key={pin} value={pin}>
                  {pin}
                </option>
              ))}
            </select>

            <select
              name="interiorSetup"
              value={formData.interiorSetup}
              onChange={handleInputChange}
              required
              className={`${inputClass} text-gray-500`}
            >
              <option value="" disabled>
                Which Interior Package are you looking for?
              </option>
              {cityOptions.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              name="projectPossessionTimeline"
              value={formData.projectPossessionTimeline}
              onChange={handleInputChange}
              required
              className={`${inputClass} text-gray-500`}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white manrope py-3 px-4 rounded-full transition-all duration-200 disabled:cursor-not-allowed text-base shadow-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                Thank you! We&apos;ll get back to you soon with your estimate.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileFormSection;
