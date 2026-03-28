"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Pincode } from "./Pincode";
import cityOptions from "./DropDown1";
import { normalizePhoneNumber } from "@/lib/utils";

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

export default function HeroSections() {
  const router = useRouter();
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtpAuto, setIsSendingOtpAuto] = useState(false);
  const [isPendingOtpSms, setIsPendingOtpSms] = useState(false);
  const [shouldHideForm, setShouldHideForm] = useState(false);

  // 2 min timer + single CRM hit logic
  const [otpTimerSeconds, setOtpTimerSeconds] = useState(0);
  const [resendVisible, setResendVisible] = useState(false);
  const [leadSentToCrm, setLeadSentToCrm] = useState<"none" | "VERIFIED" | "UNVERIFIED">("none");
  const leadSentToCrmRef = useRef<"none" | "VERIFIED" | "UNVERIFIED">("none");
  const leadPayloadRef = useRef<Record<string, unknown> | null>(null);
  const heroSubmitLockRef = useRef(false);

  useEffect(() => {
    leadSentToCrmRef.current = leadSentToCrm;
  }, [leadSentToCrm]);

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

  // Keep old behavior for email only: send immediate UNVERIFIED mail on submit.
  const sendImmediateUnverifiedMail = async () => {
    try {
      const currentUrl = window.location.href;
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: selectedCity,
          budget: "",
          pincode: selectedPincode,
          whatsappConsent: whatsappConsent,
          pageUrl: currentUrl,
          verificationStatus: "UNVERIFIED",
          otpSuccess: false,
          mailOnly: true,
        }),
      });
    } catch (error) {
      console.warn("Immediate unverified mail failed:", error);
    }
  };

  // Modal close = fallback: send UNVERIFIED only if not already sent (2 min / verify)
  const handleModalClose = async () => {
    if (leadSentToCrmRef.current === "none") {
      console.log("Modal closed before 2 min / verify - sending UNVERIFIED");
      await handleFinalSubmit("UNVERIFIED");
    }
    setShowOtpModal(false);
    setOtp("");
    setOtpTimerSeconds(0);
    setResendVisible(false);
    setIsPendingOtpSms(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideCity =
        (cityRef2560.current && cityRef2560.current.contains(target)) ||
        (cityRef1920.current && cityRef1920.current.contains(target)) ||
        (cityRef1280.current && cityRef1280.current.contains(target));

      // const clickedInsideBudget =
      //   (budgetRef2560.current && budgetRef2560.current.contains(target)) ||
      //   (budgetRef1920.current && budgetRef1920.current.contains(target)) ||
      //   (budgetRef1280.current && budgetRef1280.current.contains(target));

      if (!clickedInsideCity) setCityOpen(false);
      // if (!clickedInsideBudget) setBudgetOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // beforeunload: send UNVERIFIED on page reload if not already sent
  useEffect(() => {
    const handler = () => {
      if (leadSentToCrmRef.current !== "none" || !leadPayloadRef.current)
        return;
      const payload = leadPayloadRef.current;
      const requestData = {
        ...payload,
        budget: "",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        verificationStatus: "UNVERIFIED",
        otpSuccess: false,
        skipEmail: true,
      };
      // Only /api/contact — it already POSTs MetaLead for best-interior URLs (avoid duplicate MetaLead)
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
        keepalive: true,
      }).catch(() => {});
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  // 2 min timer: on expiry send UNVERIFIED and show Resend (same as HeroSection LandingPage1)
  useEffect(() => {
    if (!showOtpModal || otpTimerSeconds <= 0) return;
    const id = setInterval(() => {
      setOtpTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          if (leadSentToCrmRef.current === "none") {
            handleFinalSubmit("UNVERIFIED").catch(console.error);
            setLeadSentToCrm("UNVERIFIED");
            leadSentToCrmRef.current = "UNVERIFIED";
          }
          setResendVisible(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [showOtpModal, otpTimerSeconds]);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: cleanedPhone,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setOtp("");
        // Removed alert - no interruption during verification

        // Automatically submit the form as verified user
        await handleFinalSubmit("VERIFIED");
      } else {
        // Removed alert - no interruption during verification
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Removed alert - no interruption during verification
    } finally {
      setIsOtpVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSubmitLockRef.current) return;
    console.log("Form submitted with data:", {
      name: formData.name,
      phone: formData.phone,
      city: selectedCity,
      pincode: selectedPincode,
      whatsappConsent: whatsappConsent,
    });

    // Check each required field individually for better user feedback
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.email) {
      alert("Please enter your email.");
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
      alert("Please choose your interior setup.");
      return;
    }
    if (!whatsappConsent) {
      alert("Please agree to receive WhatsApp updates.");
      return;
    }

    heroSubmitLockRef.current = true;
    setIsSendingOtpAuto(true);
    try {
      void sendImmediateUnverifiedMail();
      await handleAutoSendOtp();
    } finally {
      heroSubmitLockRef.current = false;
    }
  };

  // New function to automatically send OTP
  const handleAutoSendOtp = async () => {
    try {
      setIsSendingOtpAuto(true);

      if (!formData.phone || formData.phone.length < 10) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }

      const cleanedPhone = normalizePhoneNumber(formData.phone);
      if (cleanedPhone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }

      setLeadSentToCrm("none");
      leadSentToCrmRef.current = "none";
      leadPayloadRef.current = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: selectedCity,
        pincode: selectedPincode,
        whatsappConsent: whatsappConsent,
      };

      setShowOtpModal(true);
      setOtpTimerSeconds(0);
      setResendVisible(false);
      setIsPendingOtpSms(true);
      setIsSendingOtpAuto(false);

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
        setResendVisible(false);
      } else {
        alert(data.message || "Failed to send OTP. Tap Resend to try again.");
        setResendVisible(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsPendingOtpSms(false);
      setShowOtpModal(true);
      setOtpTimerSeconds(0);
      setResendVisible(true);
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
        setResendVisible(false);
      } else {
        alert(data.message || "Resend failed. Please try again.");
        setResendVisible(true);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setIsPendingOtpSms(false);
      setResendVisible(true);
      alert(
        error instanceof Error && error.name === "TimeoutError"
          ? "Resend timed out. Please try again."
          : "Resend failed. Please try again.",
      );
    } finally {
      setIsSendingOtpAuto(false);
    }
  };

  const handleFinalSubmit = async (
    verificationStatus: "VERIFIED" | "UNVERIFIED" = "UNVERIFIED",
  ) => {
    setLeadSentToCrm(verificationStatus);
    leadSentToCrmRef.current = verificationStatus;

    console.log("handleFinalSubmit called with status:", verificationStatus);
    setIsSubmitting(true);

    try {
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
        verificationStatus: verificationStatus,
        otpSuccess: verificationStatus === "VERIFIED",
        // Avoid duplicate UNVERIFIED emails from timer/close/reload.
        skipEmail: verificationStatus === "UNVERIFIED",
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseData = await response.json();

      // MetaLead is sent inside POST /api/contact for best-interior URLs — do not duplicate here

      if (response.ok && responseData.success) {
        if (verificationStatus === "VERIFIED") {
          // Removed alert - redirect happens silently

          // Set flag to trigger reload on Thank You page
          sessionStorage.setItem("formSubmitted", "true");

          // Store user data for thank you page
          sessionStorage.setItem("userEmail", formData.email);
          sessionStorage.setItem("userPhone", formData.phone);
          sessionStorage.setItem("userName", formData.name);

          // Reset form
          setSelectedCity("");
          // setSelectedBudget("");
          setSelectedPincode("");
          setWhatsappConsent(true);
          setFormData({ name: "", email: "", phone: "" });
          setShowOtpModal(false);

          // Redirect to thank you page
          router.push("/Form-Submit-Thank-You");
        } else {
          // Removed alert - OTP modal will appear directly
        }
      } else {
        alert(
          responseData.message || "Failed to submit form. Please try again.",
        );
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);

      if (error instanceof Error && error.name === "AbortError") {
        alert(
          "Request timed out. Please check your internet connection and try again.",
        );
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="text-3xl manrope-semibold text-center mb-6 text-black-950 text-nowrap">
                  Interiors For Every <span className="text-red-600">Home</span>
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

                {/* Email Input */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *"
                    required
                    className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] mt-5 rounded-2xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                  />
                </div>

                {/* Phone and Pincode Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] mt-6 sm:mt-10 rounded-2xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                  />
                  {/* Pincode Dropdown */}
                  <div className="relative w-full sm:w-[250px] mt-2 sm:mt-10">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-2xl lg:rounded-2xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                    >
                      <option className="text-gray-400" value="" disabled>
                        Property Pincode ( Bangalore Only )*
                      </option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow icon */}
                    <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">
                      &#9662;
                    </span>
                  </div>
                </div>

                {/* City Dropdown */}
                <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10">
                  <div className="relative w-full sm:w-[520px] mx-auto">
                    <select
                      name="city"
                      required
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="manrope-medium w-full h-[50px] font-medium bg-[#f1f2f6] rounded-2xl lg:rounded-3xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                    >
                      <option
                        className="text-gray-400 manrope-medium"
                        value=""
                        disabled
                      >
                        Choose Your Interior Setup *
                      </option>
                      {cityOptions.map((option: string) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow icon */}
                    <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">
                      &#9662;
                    </span>
                  </div>
                </div>

                {/* Checkbox and Button Container */}
                <div className="flex flex-col items-start mt-6 sm:mt-8 gap-3">
                  {/* WhatsApp Checkbox */}
                  {/* <div className="flex items-center w-full sm:w-auto justify-start mb-3 lg:mb-0 lg:ml-2">
                <input
                  type="checkbox"
                  required
                  checked={whatsappConsent}
                  onChange={() => setWhatsappConsent(!whatsappConsent)}
                  className="size-4 sm:size-5 accent-[#DDCDC1] flex-shrink-0"
                />
                <label className="text-sm sm:text-[16px] font-light ml-2 sm:ml-6 whitespace-normal break-words">
                  Send Me Updates On WhatsApp
                </label>
              </div> */}
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSendingOtpAuto}
                    className="manrope flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-2xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[27px] font-medium justify-center items-center lg:mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p>
                      {isSubmitting || isSendingOtpAuto
                        ? "Sending..."
                        : "Submit"}
                    </p>
                    {!isSubmitting && !isSendingOtpAuto && (
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
                <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 font-medium text-black-0 text-center sm:text-left mr-0 sm:mr-26 lg:ml-2 px-2">
                  By submitting, you agree to our Privacy Policy, Terms and
                  Conditions
                </div>
              </div>
            </div>
          </div>

          {/* ===== DESKTOP VERSION ===== */}

          {/* 2560 Version */}
          <div className=" desktop-2560 hidden lg:block bg-[#f1f2f6] justify-center min-h-screen p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto lg:mr-30">
              {/* Left side - Form */}
              <div className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[40px] sm:h-[50px] lg:h-[60px] mt-2"
                  />
                </div>
                <div className="bg-white w-full lg:min-w-[570px] h-auto mt-6 lg:mt-12 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-6 sm:p-8 lg:p-10 shadow-2xl">
                  <p className="lg:mr-20 mb-6 manrope lg:mb-0">
                    Interiors For Every{" "}
                    <span className="text-red-600">Home</span>
                  </p>

                  {/* Name, Email, Phone & Pincode – full-width inside card */}
                  <div className="flex flex-col gap-4 justify-center mt-4 sm:mt-12">
                    {/* Name */}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    {/* Phone */}
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    {/* Pincode */}
                    <div className="relative w-full">
                      <select
                        name="pincode"
                        required
                        value={selectedPincode}
                        onChange={(e) => setSelectedPincode(e.target.value)}
                        className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                      >
                        <option
                          className="text-gray-400 manrope-medium"
                          value=""
                          disabled
                        >
                          Property Pincode ( Bangalore Only )*
                        </option>
                        {Pincode.map((pin, idx) => (
                          <option key={idx} value={pin}>
                            {pin}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow icon */}
                      <span className="text-gray-500 absolute mt-4 -ml-8 text-[16px]">
                        &#9662;
                      </span>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10">
                    <div ref={cityRef2560}>
                      <div
                        onClick={() => {
                          setCityOpen(!cityOpen);
                          // setBudgetOpen(false);
                        }}
                        className={`w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate">
                          {selectedCity || "Choose Your Interior Setup"}
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

                  {/* Button Container (centered) */}
                  <div className="flex items-center justify-center mt-6 sm:mt-8">
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || isSendingOtpAuto}
                      className="manrope flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px]  justify-center items-center lg:mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>
                        {isSubmitting || isSendingOtpAuto
                          ? "Sending..."
                          : "Submit"}
                      </p>
                      {!isSubmitting && !isSendingOtpAuto && (
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
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 manrope-medium text-center sm:text-left mr-0 sm:mr-26 lg:ml-2 px-2">
                    By submitting, you agree to Privacy Policy, Terms and
                    Conditions{" "}
                    <span className="text-[#000000] manrope-medium"></span>{" "}
                    {"  "}
                    <span className="text-[#000000] manrope-medium"></span>
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

          <div className=" desktop-1920 hidden lg:block bg-[#f1f2f6] justify-center mx-auto px-5 mt-3">
            <div className="flex flex-col lg:flex-row gap-6  mx-auto ">
              {/* Left side - Form */}
              <div className="w-full lg:w-auto">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[40px] sm:h-[50px] lg:h-[60px] "
                  />
                </div>
                <div className="bg-white w-full lg:min-w-[570px] h-auto mt-6 lg:mt-12 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-6 sm:p-8 lg:p-10 shadow-2xl">
                  <p className="lg:mr-20 mb-6 manrope lg:mb-0 pt-2 mt-6">
                    Interiors For Every{" "}
                    <span className="text-red-600">Home</span>
                  </p>

                  {/* Name, Email, Phone & Pincode – full-width inside card */}
                  <div className="flex flex-col gap-4 justify-center mt-4 sm:mt-10">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                    <div className="relative w-full">
                      <select
                        name="pincode"
                        required
                        value={selectedPincode}
                        onChange={(e) => setSelectedPincode(e.target.value)}
                        className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                      >
                        <option
                          className="text-gray-400 manrope-medium"
                          value=""
                          disabled
                        >
                          Property Pincode ( Bangalore Only )*
                        </option>
                        {Pincode.map((pin, idx) => (
                          <option key={idx} value={pin}>
                            {pin}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow icon */}
                      <span className="text-gray-500 absolute mt-4 -ml-8 text-[16px]">
                        &#9662;
                      </span>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-8">
                    <div ref={cityRef1920}>
                      <div
                        onClick={() => {
                          setCityOpen(!cityOpen);
                          // setBudgetOpen(false);
                        }}
                        className={`w-full h-[50px] manrope-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate whitespace-nowrap overflow-hidden max-w-[430px]">
                          {selectedCity || "Choose Your Interior Setup"}
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

                  {/* Button Container (centered) */}
                  <div className="flex items-center justify-center mt-6 sm:mt-8">
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || isSendingOtpAuto}
                      className="manrope flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px]  justify-center items-center lg:mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>
                        {isSubmitting || isSendingOtpAuto
                          ? "Sending..."
                          : "Submit"}
                      </p>
                      {!isSubmitting && !isSendingOtpAuto && (
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
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 manrope-medium text-center sm:text-left mr-0 sm:mr-26 lg:ml-2 px-2">
                    By submitting, you agree to Privacy Policy, Terms and
                    Conditions{" "}
                    <span className="text-[#000000] manrope-medium"></span>{" "}
                    {"  "}
                    <span className="text-[#000000] manrope-medium"></span>
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
            <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
              {/* Left side - Form */}
              <div className="w-full lg:w-[520px]">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/hub.png"
                    alt="Logo"
                    className="h-[40px] sm:h-[50px] lg:h-[60px] mt-2"
                  />
                </div>

                {/* Form Card */}
                <div className="bg-white w-[500px] h-auto mt-6 lg:mt-12 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl text-center p-6 sm:p-8 lg:p-10 shadow-2xl">
                  {/* Heading */}
                  <p className="mb-6 whitespace-nowrap manrope mt-5">
                    Interiors For Every{" "}
                    <span className="text-red-600">Home</span>
                  </p>

                  {/* Name Input */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-1 ">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      required
                      className="w-full sm:w-[500px] h-[50px] bg-[#f1f2f6] mt-4 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      required
                      className="w-full sm:w-[500px] h-[50px] bg-[#f1f2f6] mt-4 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-5">
                    <input
                      id="e2"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full sm:w-[500px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 manrope-medium h-[50px]"
                    />
                  </div>

                  {/* Pincode */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-5">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={(e) => setSelectedPincode(e.target.value)}
                      className="w-full sm:w-[500px] h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer manrope-medium"
                    >
                      <option className="text-gray-400" value="" disabled>
                        Property Pincode ( Bangalore Only )*
                      </option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>

                    <span className="text-gray-500 absolute top-[14px] right-6 text-[16px]">
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
                        className={`w-full h-[50px] bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-6 cursor-pointer manrope-medium ${!selectedCity && "text-gray-400"}`}
                      >
                        <span className="truncate">
                          {selectedCity || "Choose Your Interior Setup"}
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

                  {/* Submit */}
                  <div className="mt-5">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSendingOtpAuto}
                      className="manrope flex w-[200px] h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-2xl justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p>
                        {isSubmitting || isSendingOtpAuto
                          ? "Sending..."
                          : "Submit"}
                      </p>
                      {!isSubmitting && !isSendingOtpAuto && (
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
                  <div className="text-xs sm:text-sm lg:text-[14px] mt-6 manrope-medium text-center sm:text-left px-2">
                    By submitting, you agree to Privacy Policy, Terms and
                    Conditions
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
                  className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 absolute -mt-190 ml-117 manrope tracking-wider text-[18px] z-20 hover:bg-[#c4b5a8] transition-colors cursor-pointer"
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Phone Verification
              </h3>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div>
              {isPendingOtpSms ? (
                <p className="text-gray-700 mb-4 manrope-medium">
                  Sending OTP to {formData.phone}… Please wait.
                </p>
              ) : (
                <p className="text-gray-600 mb-4">
                  Enter the 4-digit OTP sent to {formData.phone}
                </p>
              )}
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4-digit OTP"
                maxLength={4}
                disabled={isPendingOtpSms}
                className="w-full border border-gray-300 rounded-xl p-3 mb-4 text-center text-lg font-medium manrope-medium disabled:bg-gray-100 disabled:text-gray-400"
              />
              {!resendVisible && otpTimerSeconds > 0 && !isPendingOtpSms && (
                <p className="text-sm text-gray-500 mb-2">
                  Resend OTP in {Math.floor(otpTimerSeconds / 60)}:
                  {(otpTimerSeconds % 60).toString().padStart(2, "0")}
                </p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={handleOtpSubmit}
                  disabled={
                    isPendingOtpSms || isOtpVerifying || otp.length !== 4
                  }
                  className={`${resendVisible ? "flex-1" : "w-full"} bg-[#DDCDC1] text-amber-950 py-3 rounded-xl font-manrope hover:bg-[#c4b5a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed manrope-medium`}
                >
                  {isOtpVerifying ? "Verifying..." : "Verify OTP"}
                </button>
                {resendVisible && (
                  <button
                    onClick={handleResendOtp}
                    disabled={isSendingOtpAuto || isPendingOtpSms}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed manrope-medium"
                  >
                    {isSendingOtpAuto || isPendingOtpSms
                      ? "Sending..."
                      : "Resend OTP"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
