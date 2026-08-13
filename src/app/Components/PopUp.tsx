'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import cityOptions from "./LandingPage1/DropDown1";
import { Pincode } from "./LandingPage1/Pincode";
import { normalizePhoneNumber } from "@/lib/utils";
import {
  prepareLeadThankYou,
  fireAndForgetLeadSubmit,
  redirectToLeadThankYou,
  buildLeadThankYouQuery,
} from "@/lib/postLeadSubmitRedirect";

type PopUpProps = {
  onFormSuccess: () => void;
  onClose?: () => void;
};

const fieldClass =
  "w-full py-2.5 px-4 manrope-medium rounded-full border border-gray-400 bg-white focus:border-red-500 focus:ring-0 focus:outline-none text-sm";

const PopUp: React.FC<PopUpProps> = ({ onFormSuccess, onClose }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [interiorPackage, setInteriorPackage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpTimerSeconds, setOtpTimerSeconds] = useState(0);
  const [resendVisible, setResendVisible] = useState(false);

  const prevPhoneRef = useRef("");

  useEffect(() => {
    if (phone !== prevPhoneRef.current && prevPhoneRef.current !== "") {
      setOtpSent(false);
      setOtp("");
      setIsVerified(false);
      setOtpError("");
      setOtpTimerSeconds(0);
      setResendVisible(false);
    }
    prevPhoneRef.current = phone;
  }, [phone]);

  useEffect(() => {
    if (!otpSent || otpTimerSeconds <= 0) return;
    const id = setInterval(() => {
      setOtpTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setResendVisible(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [otpSent, otpTimerSeconds]);

  const sendOTP = async () => {
    const cleaned = normalizePhoneNumber(phone);
    if (cleaned.length !== 10) {
      setOtpError("Please enter a valid 10-digit phone number");
      return;
    }
    setIsSendingOTP(true);
    setOtpError("");
    try {
      const response = await fetch("/api/send-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleaned }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setOtpSent(true);
        setOtpTimerSeconds(120);
        setResendVisible(false);
      } else {
        setOtpError(data.message || "Failed to send OTP");
        setResendVisible(true);
      }
    } catch {
      setOtpError("Failed to send OTP. Please try again.");
      setResendVisible(true);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const resendOTP = async () => {
    const cleaned = normalizePhoneNumber(phone);
    setIsSendingOTP(true);
    setOtpError("");
    setResendVisible(false);
    try {
      const response = await fetch("/api/resend-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleaned }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setOtpTimerSeconds(120);
        setResendVisible(false);
      } else {
        setOtpError(data.message || "Resend failed");
        setResendVisible(true);
      }
    } catch {
      setOtpError("Resend failed. Please try again.");
      setResendVisible(true);
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
        body: JSON.stringify({
          phone: normalizePhoneNumber(phone),
          otp,
        }),
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
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (!phone.trim() || normalizePhoneNumber(phone).length !== 10) {
      setError("Enter a valid 10-digit phone number");
      return;
    }
    if (!pin.trim() || pin.length !== 6) {
      setError("Enter a valid 6-digit pincode");
      return;
    }
    if (!Pincode.includes(pin)) {
      setError("Service unavailable for this pincode");
      return;
    }
    if (!interiorPackage.trim()) {
      setError("Please select your interior package");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const cleanedPhone = normalizePhoneNumber(phone);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPin = pin.trim();

    prepareLeadThankYou({
      name: trimmedName,
      email: trimmedEmail,
      phone: cleanedPhone,
      pincode: trimmedPin,
    });

    fireAndForgetLeadSubmit("/api/popup-contact", {
      name: trimmedName,
      email: trimmedEmail,
      phone: cleanedPhone,
      pincode: trimmedPin,
      interiorSetup: interiorPackage.trim(),
      pageUrl,
    });

    onFormSuccess();
    redirectToLeadThankYou(
      buildLeadThankYouQuery({
        name: trimmedName,
        email: trimmedEmail,
        phone: cleanedPhone,
      }),
    );
  };

  const formFields = (
    <>
      <input
        type="text"
        placeholder="Name *"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError("");
        }}
        className={fieldClass}
        required
      />

      <input
        type="email"
        placeholder="Email *"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        className={fieldClass}
        required
      />

      <input
        type="tel"
        placeholder="Phone Number *"
        value={phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          if (value.length > 10) return;
          setPhone(value);
          setError("");
        }}
        className={fieldClass}
        required
      />

      {normalizePhoneNumber(phone).length === 10 && !otpSent && (
        <button
          type="button"
          onClick={sendOTP}
          disabled={isSendingOTP}
          className="w-full py-2.5 px-4 rounded-full text-amber-950 manrope-medium bg-[#DDCDC1] hover:bg-[#c4b5a8] transition disabled:opacity-50 text-sm"
        >
          {isSendingOTP ? "Sending OTP…" : "Send OTP"}
        </button>
      )}

      {otpSent && !isVerified && (
        <div className="space-y-2">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP *"
            maxLength={6}
            className={fieldClass}
          />
          {!resendVisible && otpTimerSeconds > 0 && (
            <p className="text-xs text-gray-400 manrope text-center">
              Resend in {Math.floor(otpTimerSeconds / 60)}:
              {(otpTimerSeconds % 60).toString().padStart(2, "0")}
            </p>
          )}
          <button
            type="button"
            onClick={verifyOTP}
            disabled={isVerifying || otp.length < 4}
            className="w-full py-2.5 px-4 rounded-full text-amber-950 manrope-medium bg-[#DDCDC1] hover:bg-[#c4b5a8] transition disabled:opacity-50 text-sm"
          >
            {isVerifying ? "Verifying…" : "Verify OTP"}
          </button>
          {resendVisible && (
            <button
              type="button"
              onClick={resendOTP}
              disabled={isSendingOTP}
              className="w-full py-2.5 px-4 rounded-full border border-[#DDCDC1] text-amber-950 manrope-medium bg-white hover:bg-[#f9f5f2] transition disabled:opacity-50 text-sm"
            >
              {isSendingOTP ? "Sending…" : "Resend OTP"}
            </button>
          )}
        </div>
      )}

      {isVerified && (
        <p className="text-sm text-green-600 manrope-medium text-center">
          ✓ Phone verified
        </p>
      )}

      {otpError && (
        <p className="text-red-600 text-sm manrope-medium">{otpError}</p>
      )}

      <select
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          setError("");
        }}
        className={`${fieldClass} text-gray-500`}
        required
      >
        <option value="" disabled>
          Property Pincode ( Bangalore Only ) *
        </option>
        {Pincode.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        value={interiorPackage}
        onChange={(e) => {
          setInteriorPackage(e.target.value);
          setError("");
        }}
        className={`${fieldClass} text-gray-500`}
        required
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

      {error && (
        <p className="text-red-600 text-sm manrope-medium">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="py-2.5 px-4 rounded-full text-white manrope-medium bg-red-500 hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </>
  );

  return (
    <>
      <div className="desktop-wrapper">
        <div className="w-[780px] max-h-[90vh] bg-gray-100 rounded-3xl flex justify-between items-stretch mx-auto mt-10 shadow-lg overflow-hidden relative">
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-lg transition-colors shadow-md"
            >
              ✕
            </button>
          )}
          <div className="flex flex-col w-[48%] py-4 px-3 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl manrope px-3 mt-1 mb-1">
              Get your free quote
            </h2>
            <form
              className="flex flex-col gap-2.5 py-2 px-3"
              onSubmit={handleSubmit}
            >
              {formFields}
            </form>
          </div>

          <div className="w-[52%] flex-shrink-0 self-stretch min-h-[520px]">
            <Image
              src="https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/All_HeroSection/TvUnit_room.jpg"
              alt="Offer Image"
              width={550}
              height={600}
              className="w-full h-full object-cover rounded-r-3xl"
            />
          </div>
        </div>
      </div>

      <div className="mobile-wrapper -mt-25 px-1">
        <div className="w-full bg-gray-100 rounded-2xl mx-auto shadow-lg flex flex-col overflow-hidden max-h-[85vh] relative">
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-lg transition-colors shadow-md"
            >
              ✕
            </button>
          )}
          <div className="w-full shrink-0">
            <Image
              src="https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/All_HeroSection/TvUnit_room.jpg"
              alt="Offer Image"
              width={450}
              height={220}
              className="w-full h-[160px] object-cover rounded-t-2xl"
            />
          </div>

          <div className="flex flex-col gap-2 p-4 overflow-y-auto">
            <h2 className="text-2xl manrope text-center">Get your free quote</h2>
            <form className="flex flex-col gap-2.5 px-1" onSubmit={handleSubmit}>
              {formFields}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .desktop-wrapper {
          display: block;
        }
        .mobile-wrapper {
          display: none;
        }
        @media (max-width: 767px) {
          .desktop-wrapper {
            display: none;
          }
          .mobile-wrapper {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default PopUp;
