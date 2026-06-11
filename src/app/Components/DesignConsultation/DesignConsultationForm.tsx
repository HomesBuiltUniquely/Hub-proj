"use client";

import React, { useState, useEffect } from "react";
import { normalizePhoneNumber } from "@/lib/utils";
import { Pincode } from "../LandingPage1/Pincode";

type ConsultationMode = "experience-center" | "video-call";

const preferredSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

const carouselImages = [
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/discount_images/25%25discount_home_interior.jpeg",
];

const carouselImages1 = [
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/discount_images/25%25discount_home_interior.jpeg",
];

function ConsultationCard({
  active,
  title,
  icon,
  onClick,
}: {
  active: boolean;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full flex-col items-center justify-center rounded-[20px] border-2 min-h-[110px] transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-95 ${
        active
          ? "border-[#EF2B2D] bg-white text-[#EF2B2D] ring-4 ring-[#EF2B2D]/10"
          : "border-transparent bg-[#F4F6F9] text-[#202329] hover:bg-white hover:border-gray-200"
      }`}
    >
      <span className={`mb-2.5 transition-transform duration-300 ${active ? "scale-110" : ""}`}>
        {icon}
      </span>
      <span className="text-[14px] font-[700] manrope">{title}</span>
    </button>
  );
}

function FormSection({
  fullName,
  setFullName,
  phoneNumber,
  setPhoneNumber,
  selectedPincode,
  setSelectedPincode,
  isPhoneVerified,
  otpSent,
  otp,
  setOtp,
  otpError,
  isPendingOtpSms,
  isOtpVerifying,
  isSendingOtp,
  otpTimerSeconds,
  resendVisible,
  onSendOtp,
  onVerifyOtp,
  onResendOtp,
  consultationMode,
  setConsultationMode,
  selectedDate,
  setSelectedDate,
  preferredSlot,
  setPreferredSlot,

  onSubmit,
  isSubmitting,
}: {
  fullName: string;
  setFullName: (v: string) => void;
  phoneNumber: string;
  setPhoneNumber: (v: string) => void;
  selectedPincode: string;
  setSelectedPincode: (v: string) => void;
  isPhoneVerified: boolean;
  otpSent: boolean;
  otp: string;
  setOtp: (v: string) => void;
  otpError: string;
  isPendingOtpSms: boolean;
  isOtpVerifying: boolean;
  isSendingOtp: boolean;
  otpTimerSeconds: number;
  resendVisible: boolean;
  onSendOtp: () => void;
  onVerifyOtp: () => void;
  onResendOtp: () => void;
  consultationMode: ConsultationMode;
  setConsultationMode: (v: ConsultationMode) => void;
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  preferredSlot: string;
  setPreferredSlot: (v: string) => void;

  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const inputClass =
    "h-[58px] w-full rounded-[14px] border-2 border-transparent bg-[#F4F6F9] px-5 text-[15px] font-medium text-[#24262B] transition-all duration-300 focus:border-[#EF2B2D] focus:bg-white focus:ring-4 focus:ring-[#EF2B2D]/10 outline-none placeholder:text-[#9AA1AE] shadow-sm hover:bg-[#EAEFF5] manrope";

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {/* STEP 1 — Personal Details */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] text-[15px] font-[800] text-white shadow-[0_4px_10px_rgba(239,43,45,0.3)]">
          1
        </div>
        <h2 className="text-[20px] font-[800] text-[#1C1F26] manrope tracking-tight">Personal Details</h2>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className={inputClass}
        />
        <div className="relative">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(normalizePhoneNumber(e.target.value))}
            placeholder="Phone Number"
            className={inputClass}
          />
          {isPhoneVerified && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-green-600 manrope">
              Verified
            </span>
          )}
        </div>
        {phoneNumber.length === 10 && !isPhoneVerified && (
          <div className="flex flex-col gap-3">
            {!otpSent ? (
              <button
                type="button"
                onClick={onSendOtp}
                disabled={isSendingOtp || isPendingOtpSms}
                className="h-[50px] w-full rounded-[14px] bg-[#EF2B2D] text-[15px] font-[700] text-white manrope transition-all hover:bg-[#D92123] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSendingOtp || isPendingOtpSms ? "Sending OTP..." : "Send OTP"}
              </button>
            ) : (
              <>
                {isOtpVerifying ? (
                  <div className="rounded-xl bg-gray-100 p-4">
                    <div className="mb-2 h-3 w-32 animate-pulse rounded bg-gray-300" />
                    <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                    <p className="mt-3 text-sm text-[#6A7280] manrope">Verifying your OTP, please wait...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-[13px] text-[#6A7280] manrope">
                      Enter the 4-digit OTP sent to {phoneNumber}
                    </p>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="Enter 4-digit OTP"
                      maxLength={4}
                      disabled={isPendingOtpSms || isOtpVerifying}
                      className={`${inputClass} text-center`}
                    />
                    {!resendVisible && otpTimerSeconds > 0 && !isPendingOtpSms && (
                      <p className="text-[12px] text-[#9AA1AE] manrope">
                        Resend OTP in {Math.floor(otpTimerSeconds / 60)}:
                        {(otpTimerSeconds % 60).toString().padStart(2, "0")}
                      </p>
                    )}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={onVerifyOtp}
                        disabled={isPendingOtpSms || isOtpVerifying || otp.length !== 4}
                        className={`${resendVisible ? "flex-1" : "w-full"} h-[50px] rounded-[14px] bg-[#DDCDC1] text-[15px] font-[700] text-amber-950 manrope transition-all hover:bg-[#c4b5a8] disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isOtpVerifying ? "Verifying..." : "Verify OTP"}
                      </button>
                      {resendVisible && (
                        <button
                          type="button"
                          onClick={onResendOtp}
                          disabled={isSendingOtp || isPendingOtpSms}
                          className="flex-1 h-[50px] rounded-[14px] bg-[#ECEFF4] text-[15px] font-[600] text-[#24262B] manrope transition-all hover:bg-[#E2E6ED] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSendingOtp || isPendingOtpSms ? "Sending..." : "Resend OTP"}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
            {otpError && (
              <p className="text-[12px] text-red-500 manrope text-center">{otpError}</p>
            )}
          </div>
        )}

        <div className="relative group">
          <select
            value={selectedPincode}
            onChange={(e) => setSelectedPincode(e.target.value)}
            className={`${inputClass} appearance-none cursor-pointer ${!selectedPincode ? "text-[#9AA1AE]" : ""}`}
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
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9AA1AE]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>

      {/* STEP 2 — Consultation Mode */}
      <div className="mt-8 mb-5 flex items-center gap-3 border-t border-[#ECEFF4] pt-8">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] text-[15px] font-[800] text-white shadow-[0_4px_10px_rgba(239,43,45,0.3)]">
          2
        </div>
        <h2 className="text-[20px] font-[800] text-[#1C1F26] manrope tracking-tight">Consultation Mode</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ConsultationCard
          active={consultationMode === "experience-center"}
          title="Experience Center Visit"
          icon={
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20h16" />
              <path d="M7 20v-7h10v7" />
              <path d="M5 13h14" />
              <path d="M6 8h12" />
              <path d="M8 8V5h8v3" />
            </svg>
          }
          onClick={() => setConsultationMode("experience-center")}
        />
        <ConsultationCard
          active={consultationMode === "video-call"}
          title="Video Conference"
          icon={
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M15 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8Z" />
              <path d="m21 8-4 2.5v3L21 16V8Z" />
            </svg>
          }
          onClick={() => setConsultationMode("video-call")}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`${inputClass} [color-scheme:light]`}
          />
          {!selectedDate && (
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[15px] font-medium text-[#9AA1AE] manrope lg:hidden">
              Select Date
            </span>
          )}
        </div>
        <div className="relative group">
          <select
            value={preferredSlot}
            onChange={(e) => setPreferredSlot(e.target.value)}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Preferred Slot</option>
            {preferredSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9AA1AE]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>



      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-[60px] w-full mt-10 items-center justify-center gap-2 bg-[#EF2B2D] hover:bg-[#D92123] shadow-[0_12px_24px_-8px_rgba(239,43,45,0.6)] hover:shadow-[0_16px_32px_-8px_rgba(239,43,45,0.7)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-[18px] font-[800] text-white manrope rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Book Now"}
        <svg viewBox="0 0 24 24" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      </button>

      <p className="mx-auto mt-4 text-center text-[12px] leading-[1.6] text-[#9AA1AE] manrope">
        By booking, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
}

function BenefitsSection({
  wrapperClassName,
  titleClassName,
  textClassName,
}: {
  wrapperClassName: string;
  titleClassName: string;
  textClassName: string;
}) {
  return (
    <div className={wrapperClassName}>
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-[22px] bg-gradient-to-b from-[#F8FAFC] to-[#F1F4F9] px-5 py-8 text-center transition-transform hover:-translate-y-1 hover:shadow-sm duration-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E8] text-[#EF2B2D] mx-auto shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="m12 2 2.1 4.26 4.7.69-3.4 3.32.8 4.68L12 12.77 7.8 14.95l.8-4.68L5.2 6.95l4.7-.69L12 2Z" />
            </svg>
          </div>
          <h3 className={titleClassName}>Expert Designers</h3>
          <p className={textClassName}>10+ years experience</p>
        </div>
        <div className="rounded-[22px] bg-gradient-to-b from-[#F8FAFC] to-[#F1F4F9] px-5 py-8 text-center transition-transform hover:-translate-y-1 hover:shadow-sm duration-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E8] text-[#EF2B2D] mx-auto shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M15.7 3.3a2 2 0 0 1 2.83 2.83l-1.55 1.55-2.83-2.83 1.55-1.55Z" />
              <path d="m13.44 5.56 2.83 2.83-7.9 7.9-3.64.8.8-3.64 7.9-7.9Z" />
            </svg>
          </div>
          <h3 className={titleClassName}>Unique Styles</h3>
          <p className={textClassName}>Bespoke lifestyle designs curated for your taste.</p>
        </div>
      </div>
    </div>
  );
}

export default function DesignConsultationForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [consultationMode, setConsultationMode] = useState<ConsultationMode>("experience-center");
  const [selectedDate, setSelectedDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("");

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [isPendingOtpSms, setIsPendingOtpSms] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpTimerSeconds, setOtpTimerSeconds] = useState(0);
  const [resendVisible, setResendVisible] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!otpSent || otpTimerSeconds <= 0) return;
    const id = setInterval(() => {
      setOtpTimerSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [otpSent, otpTimerSeconds]);

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setIsPhoneVerified(false);
    setOtpSent(false);
    setOtp("");
    setOtpError("");
    setResendVisible(false);
    setOtpTimerSeconds(0);
  };

  const validateForm = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!phoneNumber || phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!selectedPincode) {
      alert("Please select your property pincode.");
      return false;
    }
    if (!consultationMode) {
      alert("Please select a consultation mode.");
      return false;
    }
    if (!selectedDate) {
      alert("Please select a preferred date.");
      return false;
    }
    if (!preferredSlot) {
      alert("Please select a preferred time slot.");
      return false;
    }
    return true;
  };

  const sendOtp = async () => {
    const cleanedPhone = normalizePhoneNumber(phoneNumber);
    if (cleanedPhone.length !== 10) {
      setOtpError("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSendingOtp(true);
    setIsPendingOtpSms(true);
    setOtpError("");
    setOtpTimerSeconds(0);
    setResendVisible(false);

    try {
      const response = await fetch("/api/send-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      setIsPendingOtpSms(false);

      if (response.ok && data.success) {
        setOtpSent(true);
        setOtpTimerSeconds(120);
        return;
      }

      setOtpSent(true);
      setResendVisible(true);
      setOtpError(data.message || "Failed to send OTP. Tap Resend to try again.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsPendingOtpSms(false);
      setOtpSent(true);
      setResendVisible(true);
      setOtpError(
        error instanceof Error && error.name === "TimeoutError"
          ? "OTP request timed out. Tap Resend to try again."
          : "Failed to send OTP. Tap Resend to try again.",
      );
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleResendOtp = async () => {
    setOtp("");
    await sendOtp();
  };

  const handleOtpSubmit = async () => {
    if (!otp || otp.length !== 4) {
      setOtpError("Please enter the 4-digit OTP.");
      return;
    }

    setIsOtpVerifying(true);
    setOtpError("");
    try {
      const cleanedPhone = normalizePhoneNumber(phoneNumber);
      const response = await fetch("/api/verify-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone, otp }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setIsPhoneVerified(true);
        setOtp("");
        setOtpSent(false);
        setOtpError("");
        return;
      }

      if (data?.reason === "MAX_ATTEMPTS") {
        setResendVisible(true);
        setOtpTimerSeconds(0);
        setOtp("");
      }
      setOtpError(data?.message || "Invalid OTP. Please try again.");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOtpError("Failed to verify OTP. Please try again.");
    } finally {
      setIsOtpVerifying(false);
    }
  };

  const submitConsultation = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          formSource: "design-consultation",
          phoneVerified: isPhoneVerified,
          firstFormDetails: {
            name: fullName.trim(),
            email: "",
            phone: phoneNumber,
            pincode: selectedPincode,
          },
          consultationDetails: {
            consultationMode,
            selectedDate,
            preferredSlot,
          },
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        alert("Thank you for your submission.");
        setFullName("");
        setPhoneNumber("");
        setSelectedPincode("");
        setSelectedDate("");
        setPreferredSlot("");
        setConsultationMode("experience-center");
        setIsPhoneVerified(false);
        setOtpSent(false);
        setOtp("");
        setOtpError("");
      } else {
        alert(data.message || "Failed to submit consultation details.");
      }
    } catch (error) {
      console.error("Design consultation submission failed:", error);
      alert("Failed to submit consultation details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookNow = async () => {
    if (!validateForm()) return;

    if (!isPhoneVerified) {
      setOtpError("Please verify your phone number with OTP first.");
      return;
    }

    await submitConsultation();
  };

  const formProps = {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber: handlePhoneChange,
    selectedPincode,
    setSelectedPincode,
    isPhoneVerified,
    otpSent,
    otp,
    setOtp,
    otpError,
    isPendingOtpSms,
    isOtpVerifying,
    isSendingOtp,
    otpTimerSeconds,
    resendVisible,
    onSendOtp: sendOtp,
    onVerifyOtp: handleOtpSubmit,
    onResendOtp: handleResendOtp,
    consultationMode,
    setConsultationMode,
    selectedDate,
    setSelectedDate,
    preferredSlot,
    setPreferredSlot,
    onSubmit: handleBookNow,
    isSubmitting: isSubmitting || isSendingOtp,
  };

  return (
    <div className="bg-[#F1F2F6] min-h-screen manrope">
      <div className="block lg:hidden">
        <div className="relative w-full h-[260px] sm:h-[310px] overflow-hidden">
          <img
            src={carouselImages1[0]}
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-5 pt-8 pb-6 text-center">
          <h1 className="text-[32px] sm:text-[38px] font-[800] text-[#181B21] tracking-tight leading-[1.12]">
            Book Your Free <span className="text-[#EF2B2D]">Design Consultation</span>
          </h1>
          <p className="text-[15px] mt-3 text-[#5F6672] font-medium max-w-[380px] mx-auto">
            Start your interior journey with an expert designer.
          </p>
        </div>

        <div className="px-4 sm:px-6 pt-6 pb-4">
          <div className="bg-white rounded-[28px] shadow-[0_16px_40px_rgba(15,23,42,0.06)] border border-gray-100 p-6 sm:p-8">
            <FormSection {...formProps} />
          </div>
        </div>

        <div className="px-4 sm:px-6 py-8">
          <BenefitsSection
            wrapperClassName="w-full max-w-[500px] mx-auto"
            titleClassName="text-[16px] font-[800] text-[#1E2128] mt-2"
            textClassName="text-[13px] text-[#6A7280] mt-1 leading-relaxed max-w-[140px] mx-auto"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="text-center pt-16 pb-10 px-8">
          <h1 className="text-[40px] xl:text-[50px] 2xl:text-[56px] font-[800] text-[#181B21] tracking-tight leading-[1.1]">
            Book Your Free <span className="text-[#EF2B2D]">Design Consultation</span>
          </h1>
          <p className="text-[16px] xl:text-[17px] font-medium text-[#5F6672] mt-4 max-w-[580px] mx-auto leading-relaxed">
            Start your interior journey with an expert designer. Get personalized advice and expert guidance to bring your dream home to life.
          </p>
        </div>

        <div className="px-8 xl:px-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.15fr] gap-6 xl:gap-8 items-stretch">
            <div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgba(15,23,42,0.08)] border border-gray-100/80 p-8 xl:p-10 flex flex-col">
              <FormSection {...formProps} />
            </div>

            {/* Right: Image — same layout as book-consultation */}
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_8px_40px_rgba(15,23,42,0.12)] min-h-[520px]">
              {carouselImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Interior ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === carouselIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === carouselIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 xl:px-12 pt-12 pb-16">
          <div className="max-w-[800px] mx-auto">
            <BenefitsSection
              wrapperClassName="w-full"
              titleClassName="text-[20px] xl:text-[22px] font-[800] text-[#1E2128] mt-2"
              textClassName="text-[15px] xl:text-[16px] text-[#6A7280] mt-2 leading-relaxed max-w-[220px] mx-auto"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
