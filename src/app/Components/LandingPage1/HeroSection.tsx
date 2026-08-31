"use client";

import React, { useState, useEffect, useRef } from "react";
import { Pincode } from "./Pincode";
import cityOptions from "./DropDown1";
import { normalizePhoneNumber } from "@/lib/utils";
import {
  POST_LEAD_SUCCESS_PATH,
  saveLeadContactToSession,
} from "@/lib/postLeadSubmitRedirect";

const carouselImages = [
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/LP_DESKTOP/header_section_desktop_version/modular_litchen.jpg",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/LP_DESKTOP/header_section_desktop_version/relaxing_space.jpg",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/LP_DESKTOP/header_section_desktop_version/TvUnit_room.jpg",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/LP_DESKTOP/header_section_desktop_version/bedroom.jpg",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/LP_DESKTOP/header_section_desktop_version/dining_unit.jpg",
];
const carouselImages1 = [
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/living_room_1.png",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/modular_kitchen_2.png",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/Modular_kitchen_3.png",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/living_room_4.png",
  "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/modular_kitchen_2.png",
];

type HeroSectionsProps = {
  submitApiUrl?: string;
};

export default function HeroSections({
  submitApiUrl = "/api/contact",
}: HeroSectionsProps) {
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtpAuto, setIsSendingOtpAuto] = useState(false);
  /** True while MSG91 send/resend is in flight */
  const [isPendingOtpSms, setIsPendingOtpSms] = useState(false);
  const [shouldHideForm, setShouldHideForm] = useState(false);

  // Inline OTP state
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // 2 min OTP timer (resend only)
  const [otpTimerSeconds, setOtpTimerSeconds] = useState(0);
  const heroSubmitLockRef = useRef(false);

  // Function to scroll to calculator section
  const scrollToCalculator = () => {
    if (typeof window !== "undefined") {
      const calculatorElement = document.getElementById("calculator-section");
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // OTP States
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);

  // Add state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Check for gad_source=5 parameter to hide form
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const gadSource = urlParams.get("gad_source");
      if (gadSource === "5") {
        setShouldHideForm(true);
      }
    }
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Refs for 2560 version
  const cityRef2560 = useRef<HTMLDivElement>(null);
  // const budgetRef2560 = useRef<HTMLDivElement>(null);

  // Refs for 1920 version
  const cityRef1920 = useRef<HTMLDivElement>(null);
  // const budgetRef1920 = useRef<HTMLDivElement>(null);

  // Refs for 1280 version
  const cityRef1280 = useRef<HTMLDivElement>(null);
  // const budgetRef1280 = useRef<HTMLDivElement>(null);

  const handleCitySelect = (value: string) => {
    console.log("City selected:", value);
    setSelectedCity(value);
    setTimeout(() => setCityOpen(false), 100);
  };

  // const handleBudgetSelect = (value: string) => {
  //   console.log('Budget selected:', value);
  //   setSelectedBudget(value);
  //   setTimeout(() => setBudgetOpen(false), 100);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "phone") {
      const normalized = normalizePhoneNumber(e.target.value);
      setFormData({
        ...formData,
        [e.target.name]: normalized,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideCity =
        (cityRef2560.current && cityRef2560.current.contains(target)) ||
        (cityRef1920.current && cityRef1920.current.contains(target)) ||
        (cityRef1280.current && cityRef1280.current.contains(target));

      if (!clickedInsideCity) setCityOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-send OTP when phone reaches exactly 10 digits
  useEffect(() => {
    const cleaned = normalizePhoneNumber(formData.phone);
    if (cleaned.length === 10 && !otpSent && !otpVerified && !isSendingOtpAuto) {
      handleSendOtp();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.phone]);

  // Auto-verify OTP when user has typed 4+ digits
  useEffect(() => {
    if (otpSent && !otpVerified && otp.length >= 4 && !isPendingOtpSms && !isOtpVerifying) {
      handleOtpSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  // 2 min timer: on expiry show Resend
  useEffect(() => {
    if (!otpSent || otpTimerSeconds <= 0) return;
    const id = setInterval(() => {
      setOtpTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [otpSent, otpTimerSeconds]);

  const handleOtpSubmit = async () => {
    if (!otp || otp.length === 0) {
      alert("Please enter the OTP");
      return;
    }

    setIsOtpVerifying(true);
    try {
      const cleanedPhone = normalizePhoneNumber(formData.phone);

      const response = await fetch("/api/verify-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone, otp }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setOtpVerified(true);
        setOtp("");
      } else {
        if (data?.reason === "MAX_ATTEMPTS") {
          setOtpTimerSeconds(0);
          setOtp("");
        }
        alert(data?.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
    } finally {
      setIsOtpVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSubmitLockRef.current) return;

    // Guard: OTP must be verified before submitting
    if (!otpVerified) {
      alert("Please verify your phone number with OTP first.");
      return;
    }

    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.phone) {
      alert("Please enter your phone number.");
      return;
    }
    if (!selectedPincode) {
      alert("Please select your property pincode.");
      return;
    }
    if (!selectedCity) {
      alert("Please select your interior package.");
      return;
    }

    heroSubmitLockRef.current = true;
    setIsSubmitting(true);
    try {
      handleFinalSubmit();
    } finally {
      heroSubmitLockRef.current = false;
    }
  };

  // Send OTP button handler — only requires phone number
  const handleSendOtp = async () => {
    if (!formData.phone) {
      alert("Please enter your phone number.");
      return;
    }

    if (formData.phone.length < 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    const cleanedPhone = normalizePhoneNumber(formData.phone);
    if (cleanedPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSendingOtpAuto(true);
    setIsPendingOtpSms(true);
    setOtpSent(true);
    setOtpTimerSeconds(0);
    setOtpVerified(false);
    setOtp("");

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
        setOtpTimerSeconds(120);
      } else {
        alert(data.message || "Failed to send OTP. Tap Resend to try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsPendingOtpSms(false);
      alert(
        error instanceof Error && error.name === "TimeoutError"
          ? "OTP request timed out. Tap Resend to try again."
          : "Failed to send OTP. Tap Resend to try again.",
      );
    } finally {
      setIsSendingOtpAuto(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setIsSendingOtpAuto(true);
      setIsPendingOtpSms(true);
      setOtpTimerSeconds(0);
      const cleanedPhone = normalizePhoneNumber(formData.phone);
      const response = await fetch("/api/resend-msg91-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      setIsPendingOtpSms(false);
      if (response.ok && data.success) {
        setOtpTimerSeconds(120);
      } else {
        alert(data.message || "Resend failed. Please try again.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setIsPendingOtpSms(false);
      alert(
        error instanceof Error && error.name === "TimeoutError"
          ? "Resend timed out. Please try again."
          : "Resend failed. Please try again.",
      );
    } finally {
      setIsSendingOtpAuto(false);
    }
  };

  /** Redirect immediately; CRM/email POST runs in background so Ads conversion isn't delayed. */
  const handleFinalSubmit = () => {
    setIsSubmitting(true);

    const currentUrl = window.location.href;
    const requestData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: selectedCity,
      budget: "",
      pincode: selectedPincode,
      whatsappConsent: whatsappConsent,
      pageUrl: currentUrl,
      verificationStatus: "VERIFIED" as const,
      otpSuccess: true,
    };

    saveLeadContactToSession({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      pincode: selectedPincode,
    });
    sessionStorage.setItem("formSubmitted", "true");
    sessionStorage.removeItem("hubThankYouAdsConversionSent");

    // Fire-and-forget — keepalive so the request survives navigation
    fetch(submitApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
      keepalive: true,
    }).catch((error) => {
      console.error("Background lead submit failed:", error);
    });

    setSelectedCity("");
    setSelectedPincode("");
    setWhatsappConsent(true);
    setFormData({ name: "", email: "", phone: "" });
    setOtpSent(false);
    setOtpVerified(false);
    setOtp("");
    setIsSubmitting(false);

    window.location.assign(POST_LEAD_SUCCESS_PATH);
  };

  return (
    <div>
      <style jsx>{`
        /* Hide all by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* 1920px layout for large desktops (1440px–1920px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        /* 2560px layout for extra large desktops (>1920px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }
      `}</style>

      {shouldHideForm ? (
        // Display without form when gad_source=5
        <>
          {/* ===== MOBILE VERSION WITHOUT FORM ===== */}
          <div className="w-[full] mx-auto block lg:hidden">
            {/* Mobile Navbar */}
            <div className="bg-white w-full py-4 px-4 shadow-sm">
              <div className="flex items-center justify-between">
                <img src="/hub.png" alt="Logo" className="h-[38px]" />
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="bg-[#DDCDC1] text-amber-950 rounded-xl px-5 py-2 text-sm manrope shadow-md hover:bg-[#c4b5a8] transition-colors"
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>

            {/* Mobile Hero Section - Carousel */}
            <div className="relative w-full h-[420px] sm:h-[420px] mb-0 overflow-hidden">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages1.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Hero ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-b-3xl transition-opacity duration-1000 ${
                      index === carouselIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-60 rounded-b-3xl"></div>

              {/* Centered Heading and Subheading */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-64 pr-10">
                <h1 className="text-white text-[24px] manrope text-left leading-tight drop-shadow-lg mt-6 w-full h-full">
                  Best Interior Designers in{" "}
                  <span className="text-red-500  manrope-semibold">
                    Bangalore
                  </span>
                </h1>
                <p className="text-white text-1 text-left manrope-medium drop-shadow top-3 pt-1 pr-3 w-full h-full">
                  Transforming Bangalore homes with personalized interiors that
                  reflect your lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* ===== DESKTOP VERSION WITHOUT FORM ===== */}
          <div className="hidden lg:block bg-[#f1f2f6] min-h-screen p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto lg:mr-30">
              {/* Left side - Logo only */}
              <div className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[40px] sm:h-[50px] lg:h-[60px] mt-2"
                  />
                </div>
              </div>

              {/* Right side - Image/Placeholder */}
              <div className="hidden lg:block min-w-[400px] lg:min-w-[750px] h-[500px] lg:h-[785px] rounded-r-3xl lg:rounded-r-4xl relative overflow-hidden">
                {/* Carousel Image */}
                <img
                  className="min-w-[400px] lg:min-w-[750px] h-[500px] lg:h-[785px] rounded-r-3xl lg:rounded-r-4xl object-cover transition-all duration-500"
                  src={carouselImages[carouselIndex]}
                  alt={`Carousel ${carouselIndex + 1}`}
                />
                {/* Overlayed Headings and Button */}
                <div className="absolute left-10 bottom-10 text-left z-10">
                  <h1 className="text-white text-6xl manrope-medium leading-tight mb-0 drop-shadow-lg">
                    Best Interior
                    <p className="mb-1">
                      Designers In{" "}
                      <span className="text-red-500">Bangalore</span>
                    </p>
                  </h1>
                  <p className="text-white text-xl manrope-medium drop-shadow mb-1 pt-2">
                    Transforming Bangalore homes with personalized
                    <br />
                    interiors that reflect your lifestyle.
                  </p>
                </div>
                <button
                  onClick={scrollToCalculator}
                  className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 absolute -mt-190 ml-132 manrope tracking-wider text-[18px] z-20 hover:bg-[#c4b5a8] transition-colors cursor-pointer"
                >
                  {" "}
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} id="hero-form">
          {/* ===== MOBILE VERSION ===== */}
          <div className=" w-[full] mx-auto   block lg:hidden">
            {/* Mobile Navbar - Separate Row with White Background */}
            <div className="bg-white w-full py-4 px-4 shadow-sm">
              <div className="flex items-center justify-between">
                <img src="/hub.png" alt="Logo" className="h-[38px]" />
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="bg-[#DDCDC1] text-amber-950 rounded-xl px-5 py-2 text-sm manrope shadow-md hover:bg-[#c4b5a8] transition-colors"
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>

            {/* Mobile Hero Section - Carousel */}
            <div className="relative w-full h-[420px] sm:h-[420px] mb-0 overflow-hidden">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages1.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Hero ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-b-3xl transition-opacity duration-1000 ${
                      index === carouselIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-60 rounded-b-3xl"></div>

              {/* Centered Heading and Subheading */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-64 pr-10">
                <h1 className="text-white text-[24px] manrope text-left leading-tight drop-shadow-lg mt-6 w-full h-full">
                  Best Interior Designers in{" "}
                  <span className="text-red-500  manrope-semibold">
                    Bangalore
                  </span>
                </h1>
                <p className="text-white text-1 text-left manrope-medium drop-shadow top-3 pt-1 pr-3 w-full h-full">
                  Transforming Bangalore homes with personalized interiors that
                  reflect your lifestyle.
                </p>
              </div>
            </div>

            {/* Mobile Form Card */}
            <div className="relative z-20 -mt-10 ">
              <div className="bg-white w-full rounded-3xl shadow-2xl pt-8 pb-4 px-3 ">
                <div className="text-[21px] min-[375px]:text-[23px] sm:text-[26px] manrope-semibold text-center mb-6 text-black-950 whitespace-nowrap">
                  Get a Free Home <span className="text-red-600">Interior Quote</span>
                </div>

                {/* Name Input */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name *"
                    required
                    className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] mt-4 sm:mt-12 rounded-2xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                  />
                </div>

                {/* Email Input — hidden */}
                <div className="hidden">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *"
                    className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] rounded-2xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col justify-center mt-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full h-[50px] bg-[#f1f2f6] rounded-2xl text-base pl-6 placeholder-gray-400 manrope-medium"
                  />
                </div>

                {/* Pincode Dropdown */}
                <div className="relative w-full mt-4">
                  <select
                    name="pincode"
                    required
                    value={selectedPincode}
                    onChange={(e) => setSelectedPincode(e.target.value)}
                    className="w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-2xl text-base pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
                  >
                    <option className="text-gray-400" value="" disabled>
                      Property Pincode ( Bangalore Only ) *
                    </option>
                    {Pincode.map((pin, idx) => (
                      <option key={idx} value={pin}>
                        {pin}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-500 absolute top-[16px] right-4 text-[16px] pointer-events-none">
                    &#9662;
                  </span>
                </div>

                {/* City Dropdown */}
                <div className="relative w-full mt-4">
                  <select
                    name="city"
                    required
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="manrope-medium w-full h-[50px] bg-[#f1f2f6] rounded-2xl text-base pl-6 pr-10 text-gray-400 appearance-none cursor-pointer"
                  >
                    <option
                      className="text-gray-400 manrope-medium"
                      value=""
                      disabled
                    >
                      What is the Budget for your Home Interiors ?*
                    </option>
                    {cityOptions.map((option: string) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-500 absolute top-[16px] right-4 text-[16px] pointer-events-none">
                    &#9662;
                  </span>
                </div>

                {/* OTP Block — Mobile (shown after all fields, before Submit) */}
                {isSendingOtpAuto && !otpSent && (
                  <p className="text-sm text-gray-500 manrope-medium text-left mt-4">Sending OTP…</p>
                )}
                {otpSent && !otpVerified && (
                  <div className="mt-4 flex flex-col gap-2">
                    <p className="text-sm text-gray-700 manrope-medium text-left">
                      Enter the 4-digit OTP sent to {normalizePhoneNumber(formData.phone)}
                    </p>
                    <div className="flex gap-3 items-center">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 4-digit OTP"
                        maxLength={6}
                        disabled={isPendingOtpSms || isOtpVerifying}
                        className="flex-1 h-[50px] bg-[#f1f2f6] rounded-2xl text-base pl-4 placeholder-gray-400 manrope-medium disabled:opacity-50"
                      />
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isSendingOtpAuto || isPendingOtpSms || otpTimerSeconds > 0}
                        className="h-[50px] px-5 bg-[#DDCDC1] text-amber-950 rounded-2xl text-base manrope-medium disabled:opacity-60 hover:bg-[#c4b5a8] transition-colors whitespace-nowrap"
                      >
                        {isSendingOtpAuto || isPendingOtpSms ? "Sending…" : "Resend"}
                      </button>
                    </div>
                    {otpTimerSeconds > 0 && (
                      <p className="text-xs text-gray-500 manrope text-left">
                        Resend OTP in {Math.floor(otpTimerSeconds / 60)}:{(otpTimerSeconds % 60).toString().padStart(2, "0")}
                      </p>
                    )}
                  </div>
                )}
                {otpVerified && (
                  <p className="text-sm text-green-600 manrope-medium mt-3 text-left">
                    ✓ Phone verified
                  </p>
                )}
                {/* Submit Button — always visible */}
                <div className="flex flex-col items-start mt-6 gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="manrope flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-2xl text-xl sm:text-2xl font-medium justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p>{isSubmitting ? "Sending..." : "Submit"}</p>
                    {!isSubmitting && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 sm:size-6 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Legal Text */}
                <div className="text-xs sm:text-sm mt-3 font-medium text-black-0 text-center px-2">
                  By submitting, you agree to Privacy Policy, Terms and Conditions
                </div>
              </div>
            </div>
          </div>

          {/* ===== DESKTOP VERSION ===== */}

          {/* 2560 Version */}
          <div className=" desktop-2560 hidden lg:block bg-[#f1f2f6] justify-center min-h-screen p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start max-w-7xl mx-auto lg:mr-30">
              {/* Left side - Form */}
              <div className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[44px] sm:h-[50px] lg:h-[56px]"
                  />
                </div>
                <div className="bg-white w-full lg:min-w-[570px] h-auto mt-3 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-7 sm:p-9 lg:p-10 shadow-2xl">
                  <p className="lg:mr-20 mb-5 manrope lg:mb-3 whitespace-nowrap text-xl sm:text-2xl lg:text-[32px] font-semibold">
                    Get a Free Home{" "}
                    <span className="text-red-600">Interior Quote</span>
                  </p>

                  {/* Name Input */}
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Email Input — hidden */}
                  <div className="hidden">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Pincode Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-5">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="w-full h-[56px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                    >
                      <option
                        className="text-gray-400 manrope-medium"
                        value=""
                        disabled
                      >
                        Property Pincode ( Bangalore Only ) *
                      </option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow icon */}
                    <span className="pointer-events-none absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 text-[16px] leading-none text-gray-500">
                      &#9662;
                    </span>
                  </div>

                  {/* City Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-5">
                    <div ref={cityRef2560}>
                      <div
                        onClick={() => {
                          setCityOpen(!cityOpen);
                          // setBudgetOpen(false);
                        }}
                        className={`w-full h-[56px] manrope-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate">
                          {selectedCity ||
                            "What is the Budget for your Home Interiors ?"}
                        </span>
                        <span className="text-gray-500">&#9662;</span>
                      </div>
                      {cityOpen && (
                        <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-[9999] text-left max-h-60 overflow-y-auto manrope-medium">
                          {cityOptions.map((option: string) => (
                            <li
                              key={option}
                              onClick={() => handleCitySelect(option)}
                              className="px-4 sm:px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs sm:text-sm"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* OTP Block — 2560 (shown after all fields, before Submit) */}
                  {isSendingOtpAuto && !otpSent && (
                    <p className="text-sm text-gray-500 manrope-medium text-left mt-4">Sending OTP…</p>
                  )}
                  {otpSent && !otpVerified && (
                    <div className="flex flex-col gap-2 mt-4 w-full sm:w-[520px]">
                      <p className="text-sm text-gray-700 manrope-medium text-left">
                        Enter the 4-digit OTP sent to {normalizePhoneNumber(formData.phone)}
                      </p>
                      <div className="flex gap-3 items-center">
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 4-digit OTP"
                          maxLength={6}
                          disabled={isPendingOtpSms || isOtpVerifying}
                          className="flex-1 h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 placeholder-gray-400 manrope-medium disabled:opacity-50"
                        />
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          disabled={isSendingOtpAuto || isPendingOtpSms || otpTimerSeconds > 0}
                          className="h-[50px] px-6 bg-[#DDCDC1] text-amber-950 rounded-3xl text-base manrope-medium disabled:opacity-60 hover:bg-[#c4b5a8] transition-colors whitespace-nowrap"
                        >
                          {isSendingOtpAuto || isPendingOtpSms ? "Sending…" : "Resend"}
                        </button>
                      </div>
                      {otpTimerSeconds > 0 && (
                        <p className="text-xs text-gray-500 manrope text-left">
                          Resend OTP in {Math.floor(otpTimerSeconds / 60)}:{(otpTimerSeconds % 60).toString().padStart(2, "0")}
                        </p>
                      )}
                    </div>
                  )}
                  {otpVerified && (
                    <p className="text-sm text-green-600 manrope-medium mt-3 text-left w-full sm:w-[520px]">
                      ✓ Phone verified
                    </p>
                  )}
                  {/* Button Container (centered) */}
                  <div className="flex items-center justify-center mt-6">
                    {/* Submit Button — always visible */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="manrope flex w-[180px] sm:w-[200px] h-[48px] sm:h-[54px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>{isSubmitting ? "Sending..." : "Submit"}</p>
                      {!isSubmitting && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 sm:size-6 lg:size-7 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Legal Text */}
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-4 manrope-medium text-center px-4">
                    By submitting, you agree to Privacy Policy, Terms and Conditions
                  </div>
                </div>
              </div>

              {/* Right side - Image/Placeholder */}
              <div className="hidden lg:block min-w-[400px] lg:min-w-[750px] h-[500px] lg:h-[785px] rounded-r-3xl lg:rounded-r-4xl relative overflow-hidden">
                {/* Carousel Image */}
                <img
                  className="min-w-[400px] lg:min-w-[750px] h-[500px] lg:h-[785px] rounded-r-3xl lg:rounded-r-4xl object-cover transition-all duration-500"
                  src={carouselImages[carouselIndex]}
                  alt={`Carousel ${carouselIndex + 1}`}
                />
                {/* Overlayed Headings and Button */}
                <div className="absolute left-10 bottom-10 text-left z-10">
                  <h1 className="text-white text-6xl manrope-medium leading-tight mb-0 drop-shadow-lg">
                    Best Interior
                    <p className="mb-1">
                      Designers In{" "}
                      <span className="text-red-500">Bangalore</span>
                    </p>
                  </h1>
                  <p className="text-white text-xl manrope-medium drop-shadow mb-1 pt-2">
                    Transforming Bangalore homes with personalized
                    <br />
                    interiors that reflect your lifestyle.
                  </p>
                </div>
                <button
                  onClick={scrollToCalculator}
                  className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 absolute -mt-190 ml-132 manrope tracking-wider text-[18px] z-20 hover:bg-[#c4b5a8] transition-colors cursor-pointer"
                >
                  {" "}
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* 1920 Version */}

          <div className=" desktop-1920 hidden lg:block bg-[#f1f2f6] justify-center mx-auto p-4 px-5 mt-0">
            <div className="flex flex-col lg:flex-row gap-6 items-start mx-auto ">
              {/* Left side - Form */}
              <div className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[44px] sm:h-[50px] lg:h-[56px]"
                  />
                </div>
                <div className="bg-white w-full lg:min-w-[570px] h-auto mt-3 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-7 sm:p-9 lg:p-10 shadow-2xl">
                  <p className="lg:mr-20 mb-5 manrope lg:mb-3 whitespace-nowrap text-xl sm:text-2xl lg:text-[30px] font-semibold">
                    Get a Free Home{" "}
                    <span className="text-red-600">Interior Quote</span>
                  </p>

                  {/* Name Input */}
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Email Input — hidden */}
                  <div className="hidden">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full sm:w-[520px] h-[56px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Pincode Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-5">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="w-full h-[56px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                    >
                      <option
                        className="text-gray-400 manrope-medium"
                        value=""
                        disabled
                      >
                        Property Pincode ( Bangalore Only ) *
                      </option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow icon */}
                    <span className="pointer-events-none absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 text-[16px] leading-none text-gray-500">
                      &#9662;
                    </span>
                  </div>

                  {/* City Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-5">
                    <div ref={cityRef1920}>
                      <div
                        onClick={() => {
                          setCityOpen(!cityOpen);
                          // setBudgetOpen(false);
                        }}
                        className={`w-full h-[56px] manrope-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate whitespace-nowrap overflow-hidden max-w-[430px]">
                          {selectedCity ||
                            "What is the Budget for your Home Interiors ?"}
                        </span>
                        <span className="text-gray-500">&#9662;</span>
                      </div>
                      {cityOpen && (
                        <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-[9999] text-left max-h-60 overflow-y-auto manrope-medium">
                          {cityOptions.map((option: string) => (
                            <li
                              key={option}
                              onClick={() => handleCitySelect(option)}
                              className="px-4 sm:px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs sm:text-sm"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* OTP Block — 1920 (shown after all fields, before Submit) */}
                  {isSendingOtpAuto && !otpSent && (
                    <p className="text-sm text-gray-500 manrope-medium text-left mt-4">Sending OTP…</p>
                  )}
                  {otpSent && !otpVerified && (
                    <div className="flex flex-col gap-2 mt-4 w-full sm:w-[520px]">
                      <p className="text-sm text-gray-700 manrope-medium text-left">
                        Enter the 4-digit OTP sent to {normalizePhoneNumber(formData.phone)}
                      </p>
                      <div className="flex gap-3 items-center">
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 4-digit OTP"
                          maxLength={6}
                          disabled={isPendingOtpSms || isOtpVerifying}
                          className="flex-1 h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 placeholder-gray-400 manrope-medium disabled:opacity-50"
                        />
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          disabled={isSendingOtpAuto || isPendingOtpSms || otpTimerSeconds > 0}
                          className="h-[50px] px-6 bg-[#DDCDC1] text-amber-950 rounded-3xl text-base manrope-medium disabled:opacity-60 hover:bg-[#c4b5a8] transition-colors whitespace-nowrap"
                        >
                          {isSendingOtpAuto || isPendingOtpSms ? "Sending…" : "Resend"}
                        </button>
                      </div>
                      {otpTimerSeconds > 0 && (
                        <p className="text-xs text-gray-500 manrope text-left">
                          Resend OTP in {Math.floor(otpTimerSeconds / 60)}:{(otpTimerSeconds % 60).toString().padStart(2, "0")}
                        </p>
                      )}
                    </div>
                  )}
                  {otpVerified && (
                    <p className="text-sm text-green-600 manrope-medium mt-3 text-left w-full sm:w-[520px]">
                      ✓ Phone verified
                    </p>
                  )}
                  {/* Button Container (centered) */}
                  <div className="flex items-center justify-center mt-6">
                    {/* Submit Button — always visible */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="manrope flex w-[180px] sm:w-[200px] h-[48px] sm:h-[54px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>{isSubmitting ? "Sending..." : "Submit"}</p>
                      {!isSubmitting && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 sm:size-6 lg:size-7 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Legal Text */}
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-4 manrope-medium text-center px-4">
                    By submitting, you agree to Privacy Policy, Terms and Conditions
                  </div>
                </div>
              </div>

              {/* Right side - Image/Placeholder */}
              <div className="hidden lg:block w-full h-[500px] lg:h-[785px] rounded-r-3xl relative overflow-hidden">
                {/* Carousel Image */}
                <img
                  className="w-full h-[500px] lg:h-[785px]  object-cover transition-all duration-500"
                  src={carouselImages[carouselIndex]}
                  alt={`Carousel ${carouselIndex + 1}`}
                />
                {/* Overlayed Headings and Button */}
                <div className="absolute left-10 bottom-10 text-left z-10">
                  <h1 className="text-white text-6xl manrope-medium leading-tight mb-0 drop-shadow-lg">
                    Best Interior
                    <p className="mb-1">
                      Designers In{" "}
                      <span className="text-red-500">Bangalore</span>
                    </p>
                  </h1>
                  <p className="text-white text-xl manrope-medium drop-shadow mb-1 pt-2">
                    Transforming Bangalore homes with personalized
                    <br />
                    interiors that reflect your lifestyle.
                  </p>
                </div>
                <button
                  onClick={scrollToCalculator}
                  className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 absolute -mt-190 ml-132 manrope tracking-wider text-[18px] z-20 hover:bg-[#c4b5a8] transition-colors cursor-pointer"
                >
                  {" "}
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* 1280 Version */}
          <div className=" desktop-1280 hidden lg:block bg-[#f1f2f6] min-h-screen p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start max-w-7xl mx-auto">
              {/* Left side - Form */}
              <div className="w-full lg:w-[520px]">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[44px] sm:h-[50px] lg:h-[56px]"
                  />
                </div>
                {/* Form Card */}
                <div className="bg-white w-[500px] h-auto mt-3 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl text-center p-7 sm:p-9 lg:p-10 shadow-2xl">
                  {/* Heading */}
                  <p className="mb-5 whitespace-nowrap manrope mt-1 text-xl sm:text-2xl lg:text-[26px] font-semibold">
                    Get a Free Home{" "}
                    <span className="text-red-600">Interior Quote</span>
                  </p>

                  {/* Name Input */}
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full sm:w-[500px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Email Input — hidden */}
                  <div className="hidden">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className="w-full sm:w-[500px] h-[56px] bg-[#f1f2f6] mt-5 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full sm:w-[500px] h-[56px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Pincode Dropdown */}
                  <div className="relative w-full flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-4">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="w-full sm:w-[500px] h-[56px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                    >
                      <option className="text-gray-400" value="" disabled>
                        Property Pincode ( Bangalore Only ) *
                      </option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 text-[16px] leading-none text-gray-500">
                      &#9662;
                    </span>
                  </div>

                  {/* City Dropdown */}
                  <div className="relative w-full mx-auto mt-5">
                    <div ref={cityRef1280} className="relative">
                      <div
                        onClick={() => {
                          setCityOpen(!cityOpen);
                          // setBudgetOpen(false);
                        }}
                        className={`w-full h-[56px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-6 cursor-pointer manrope-medium ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate">
                          {selectedCity ||
                            "What is the Budget for your Home Interiors ?"}
                        </span>
                        <span className="text-gray-500">&#9662;</span>
                      </div>

                      {cityOpen && (
                        <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-[9999] max-h-60 overflow-y-auto manrope-medium">
                          {cityOptions.map((option: string) => (
                            <li
                              key={option}
                              onClick={() => handleCitySelect(option)}
                              className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* OTP Block — 1280 (shown after all fields, before Submit) */}
                  {isSendingOtpAuto && !otpSent && (
                    <p className="text-sm text-gray-500 manrope-medium text-left mt-4">Sending OTP…</p>
                  )}
                  {otpSent && !otpVerified && (
                    <div className="flex flex-col gap-2 mt-4 w-full sm:w-[500px]">
                      <p className="text-sm text-gray-700 manrope-medium text-left">
                        Enter the 4-digit OTP sent to {normalizePhoneNumber(formData.phone)}
                      </p>
                      <div className="flex gap-3 items-center">
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 4-digit OTP"
                          maxLength={6}
                          disabled={isPendingOtpSms || isOtpVerifying}
                          className="flex-1 h-[50px] bg-[#f1f2f6] rounded-3xl text-base sm:text-[18px] pl-6 placeholder-gray-400 manrope-medium disabled:opacity-50"
                        />
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          disabled={isSendingOtpAuto || isPendingOtpSms || otpTimerSeconds > 0}
                          className="h-[50px] px-6 bg-[#DDCDC1] text-amber-950 rounded-3xl text-base manrope-medium disabled:opacity-60 hover:bg-[#c4b5a8] transition-colors whitespace-nowrap"
                        >
                          {isSendingOtpAuto || isPendingOtpSms ? "Sending…" : "Resend"}
                        </button>
                      </div>
                      {otpTimerSeconds > 0 && (
                        <p className="text-xs text-gray-500 manrope text-left">
                          Resend OTP in {Math.floor(otpTimerSeconds / 60)}:{(otpTimerSeconds % 60).toString().padStart(2, "0")}
                        </p>
                      )}
                    </div>
                  )}
                  {otpVerified && (
                    <p className="text-sm text-green-600 manrope-medium mt-3 text-left w-full sm:w-[500px]">
                      ✓ Phone verified
                    </p>
                  )}
                  {/* Submit — always visible */}
                  <div className="mt-5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="manrope flex w-[200px] h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-2xl justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>{isSubmitting ? "Sending..." : "Submit"}</p>
                      {!isSubmitting && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Legal */}
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-4 manrope-medium text-center px-4">
                    By submitting, you agree to Privacy Policy, Terms and Conditions
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="hidden lg:block w-[720px] h-[785px] rounded-r-3xl lg:rounded-r-4xl relative overflow-hidden">
                <img
                  className="w-[720px] h-[785px] object-cover transition-all duration-500"
                  src={carouselImages[carouselIndex]}
                  alt={`Carousel ${carouselIndex + 1}`}
                />

                {/* Overlays */}
                <div className="absolute left-10 bottom-10 text-left z-10">
                  <h1 className="text-white text-6xl manrope-medium leading-tight mb-0 drop-shadow-lg">
                    Best Interior
                    <p className="mb-1">
                      Designers In{" "}
                      <span className="text-red-500">Bangalore</span>
                    </p>
                  </h1>
                  <p className="text-white text-xl manrope-medium drop-shadow mb-1 pt-2">
                    Transforming Bangalore homes with personalized
                    <br />
                    interiors that reflect your lifestyle.
                  </p>
                </div>

                <button
                  onClick={scrollToCalculator}
                  className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 absolute -mt-190 ml-115 manrope tracking-wider text-[18px] z-20 hover:bg-[#c4b5a8] transition-colors cursor-pointer"
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
