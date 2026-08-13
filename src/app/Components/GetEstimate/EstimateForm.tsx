"use client";
import React, { useState } from "react";
import { normalizePhoneNumber } from "@/lib/utils";
import cityOptions from "../LandingPage1/DropDown1";
import { Pincode } from "../LandingPage1/Pincode";
import {
  prepareLeadThankYou,
  fireAndForgetLeadSubmit,
  redirectToLeadThankYou,
} from "@/lib/postLeadSubmitRedirect";

const inputClass =
  "w-full px-4 py-3.5 bg-white rounded-xl border-0 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-base";

const EstimateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    interiorSetup: "",
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
    if (name === "phoneNumber") {
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
    if (formData.phoneNumber.length !== 10) {
      setOtpError("Please enter a valid 10-digit phone number");
      return;
    }
    setIsSendingOTP(true);
    setOtpError("");
    try {
      const response = await fetch("/api/send-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phoneNumber }),
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
        body: JSON.stringify({ phone: formData.phoneNumber, otp }),
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
    if (!formData.email.trim()) {
      setSubmitStatus("error");
      return;
    }
    if (!Pincode.includes(formData.pincode)) {
      setOtpError("Service unavailable for this pincode");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const pageUrl =
      typeof window !== "undefined" ? window.location.href : "";

    prepareLeadThankYou({
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      pincode: formData.pincode,
    });

    fireAndForgetLeadSubmit("/api/get-estimate", {
      ...formData,
      pageUrl,
    });

    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      pincode: "",
      interiorSetup: "",
    });
    setOtpSent(false);
    setOtp("");
    setIsVerified(false);
    setOtpError("");
    redirectToLeadThankYou();
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-[450px] mx-auto border border-white/30 max-h-[85vh] overflow-y-auto">
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
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
            setFormData((prev) => ({ ...prev, phoneNumber: value }));
            setOtpSent(false);
            setIsVerified(false);
            setOtp("");
            setOtpError("");
          }}
          required
          className={inputClass}
          placeholder="Phone Number *"
        />

        {formData.phoneNumber.length === 10 && !otpSent && (
          <button
            type="button"
            onClick={sendOTP}
            disabled={isSendingOTP}
            className="w-full bg-[#DDCDC1] text-amber-950 rounded-xl py-3 px-4 font-medium hover:bg-[#c4b5a8] transition-colors disabled:opacity-50"
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
              className="w-full bg-[#DDCDC1] text-amber-950 rounded-xl py-3 px-4 font-medium hover:bg-[#c4b5a8] transition-colors disabled:opacity-50"
            >
              {isVerifying ? "Verifying…" : "Verify OTP"}
            </button>
          </div>
        )}

        {isVerified && (
          <div className="w-full bg-green-100 text-green-700 rounded-xl py-3 px-4 text-center font-medium text-sm">
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
            What is the Budget for your Home Interiors ?
          </option>
          {cityOptions.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 disabled:cursor-not-allowed text-base"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {submitStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Thank you! We&apos;ll get back to you soon with your estimate.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;
