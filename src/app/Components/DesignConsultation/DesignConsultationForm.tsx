"use client";

import React, { useState, useEffect } from "react";

type ConsultationMode = "experience-center" | "video-call";
type PossessionTimeline = "immediately" | "0-3-months" | "3-6-months";

const preferredSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

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
  fullName, setFullName,
  emailAddress, setEmailAddress,
  phoneNumber, setPhoneNumber,
  consultationMode, setConsultationMode,
  selectedDate, setSelectedDate,
  preferredSlot, setPreferredSlot,
  propertyName, setPropertyName,
  possessionTimeline, setPossessionTimeline,
}: {
  fullName: string; setFullName: (v: string) => void;
  emailAddress: string; setEmailAddress: (v: string) => void;
  phoneNumber: string; setPhoneNumber: (v: string) => void;
  consultationMode: ConsultationMode; setConsultationMode: (v: ConsultationMode) => void;
  selectedDate: string; setSelectedDate: (v: string) => void;
  preferredSlot: string; setPreferredSlot: (v: string) => void;
  propertyName: string; setPropertyName: (v: string) => void;
  possessionTimeline: PossessionTimeline; setPossessionTimeline: (v: PossessionTimeline) => void;
}) {
  const inputClass =
    "h-[58px] w-full rounded-[14px] border-2 border-transparent bg-[#F4F6F9] px-5 text-[15px] font-medium text-[#24262B] transition-all duration-300 focus:border-[#EF2B2D] focus:bg-white focus:ring-4 focus:ring-[#EF2B2D]/10 outline-none placeholder:text-[#9AA1AE] shadow-sm hover:bg-[#EAEFF5] manrope";

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>

      {/* STEP 1 — Personal Details */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] text-[15px] font-[800] text-white shadow-[0_4px_10px_rgba(239,43,45,0.3)]">1</div>
        <h2 className="text-[20px] font-[800] text-[#1C1F26] manrope tracking-tight">Personal Details</h2>
      </div>

      <div className="flex flex-col gap-4">
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className={inputClass} />
        {/* Email field hidden per request.
        <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="Email Address" className={inputClass} />
        */}
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className={inputClass} />
      </div>

      {/* STEP 2 — Consultation Mode */}
      <div className="mt-8 mb-5 flex items-center gap-3 border-t border-[#ECEFF4] pt-8">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] text-[15px] font-[800] text-white shadow-[0_4px_10px_rgba(239,43,45,0.3)]">2</div>
        <h2 className="text-[20px] font-[800] text-[#1C1F26] manrope tracking-tight">Consultation Mode</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ConsultationCard
          active={consultationMode === "experience-center"}
          title="Experience Center Visit"
          icon={
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20h16" /><path d="M7 20v-7h10v7" /><path d="M5 13h14" /><path d="M6 8h12" /><path d="M8 8V5h8v3" />
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
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className={inputClass} />
        <div className="relative group">
          <select value={preferredSlot} onChange={(e) => setPreferredSlot(e.target.value)} className={`${inputClass} appearance-none cursor-pointer`}>
            <option value="">Preferred Slot</option>
            {preferredSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9AA1AE]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>

      {/* STEP 3 — Property & Possession */}
      <div className="mt-8 mb-5 flex items-center gap-3 border-t border-[#ECEFF4] pt-8">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF2B2D] text-[15px] font-[800] text-white shadow-[0_4px_10px_rgba(239,43,45,0.3)]">3</div>
        <h2 className="text-[20px] font-[800] text-[#1C1F26] manrope tracking-tight">Property & Possession</h2>
      </div>

      <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder="Property Name" className={inputClass} />

      <div className="mt-4 flex flex-wrap gap-3">
        {[
          { id: "immediately" as PossessionTimeline, label: "Immediately" },
          { id: "0-3-months" as PossessionTimeline, label: "0 - 3 months" },
          { id: "3-6-months" as PossessionTimeline, label: "3 - 6 months" },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setPossessionTimeline(item.id)}
            className={`flex-1 h-[58px] min-w-[110px] items-center justify-center flex rounded-[14px] border-2 text-[15px] font-medium manrope transition-all duration-300 active:scale-95 ${
              possessionTimeline === item.id
                ? "border-[#EF2B2D] bg-white text-[#EF2B2D] ring-4 ring-[#EF2B2D]/10 shadow-sm"
                : "border-transparent bg-[#F4F6F9] text-[#24262B] hover:bg-[#EAEFF5] shadow-sm"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex h-[60px] w-full mt-10 items-center justify-center gap-2 bg-[#EF2B2D] hover:bg-[#D92123] shadow-[0_12px_24px_-8px_rgba(239,43,45,0.6)] hover:shadow-[0_16px_32px_-8px_rgba(239,43,45,0.7)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-[18px] font-[800] text-white manrope rounded-full group"
      >
        Book Now
        <svg viewBox="0 0 24 24" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
        </svg>
      </button>

      <p className="mx-auto mt-4 text-center text-[12px] leading-[1.6] text-[#9AA1AE] manrope">
        By booking, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
}

function BenefitsSection({
  wrapperClassName, titleClassName, textClassName,
}: {
  wrapperClassName: string; titleClassName: string; textClassName: string;
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
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consultationMode, setConsultationMode] = useState<ConsultationMode>("experience-center");
  const [selectedDate, setSelectedDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [possessionTimeline, setPossessionTimeline] = useState<PossessionTimeline>("immediately");
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const formProps = { fullName, setFullName, emailAddress, setEmailAddress, phoneNumber, setPhoneNumber, consultationMode, setConsultationMode, selectedDate, setSelectedDate, preferredSlot, setPreferredSlot, propertyName, setPropertyName, possessionTimeline, setPossessionTimeline };

  return (
    <div className="bg-[#F1F2F6] min-h-screen manrope">

      {/* =========================================================== */}
      {/* MOBILE VERSION (< 1024px)                                    */}
      {/* =========================================================== */}
      <div className="block lg:hidden">

        {/* 1. HEADER — full width centered */}
        <div className="px-5 pt-10 pb-8 text-center">
          <h1 className="text-[32px] sm:text-[38px] font-[800] text-[#181B21] tracking-tight leading-[1.12]">
            Book Your Free <span className="text-[#EF2B2D]">Design Consultation</span>
          </h1>
          <p className="text-[15px] mt-3 text-[#5F6672] font-medium max-w-[380px] mx-auto">
            Start your interior journey with an expert designer.
          </p>
        </div>

        {/* 2. IMAGE — full width, spans between header and form */}
        <div className="relative w-full h-[260px] sm:h-[310px] overflow-hidden">
          {carouselImages1.map((image, index) => (
            <img key={index} src={image} alt={`Interior ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === carouselIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {carouselImages1.map((_, i) => (
              <button key={i} onClick={() => setCarouselIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* 3. FORM */}
        <div className="px-4 sm:px-6 pt-6 pb-4">
          <div className="bg-white rounded-[28px] shadow-[0_16px_40px_rgba(15,23,42,0.06)] border border-gray-100 p-6 sm:p-8">
            <FormSection {...formProps} />
          </div>
        </div>

        {/* 4. BENEFITS — full width centered below form */}
        <div className="px-4 sm:px-6 py-8">
          <BenefitsSection
            wrapperClassName="w-full max-w-[500px] mx-auto"
            titleClassName="text-[16px] font-[800] text-[#1E2128] mt-2"
            textClassName="text-[13px] text-[#6A7280] mt-1 leading-relaxed max-w-[140px] mx-auto"
          />
        </div>
      </div>

      {/* =========================================================== */}
      {/* DESKTOP VERSION (>= 1024px)                                  */}
      {/* =========================================================== */}
      <div className="hidden lg:block">

        {/* 1. HEADER — full width, centered at top */}
        <div className="text-center pt-16 pb-10 px-8">
          <h1 className="text-[40px] xl:text-[50px] 2xl:text-[56px] font-[800] text-[#181B21] tracking-tight leading-[1.1]">
            Book Your Free <span className="text-[#EF2B2D]">Design Consultation</span>
          </h1>
          <p className="text-[16px] xl:text-[17px] font-medium text-[#5F6672] mt-4 max-w-[580px] mx-auto leading-relaxed">
            Start your interior journey with an expert designer. Get personalized advice and expert guidance to bring your dream home to life.
          </p>
        </div>

        {/* 2. FORM + IMAGE — balanced grid with consistent padding on both sides */}
        <div className="px-8 xl:px-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.15fr] gap-6 xl:gap-8 items-stretch">

            {/* Left: Form card — fully rounded, elevated, premium */}
            <div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgba(15,23,42,0.08)] border border-gray-100/80 p-8 xl:p-10 flex flex-col">
              {/* Red left accent bar */}
              <div className="w-1 h-10 rounded-full bg-[#EF2B2D] mb-8 shadow-[0_4px_10px_rgba(239,43,45,0.3)]"></div>
              <FormSection {...formProps} />
            </div>

            {/* Right: Image Carousel — fully rounded, same shadow level */}
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_8px_40px_rgba(15,23,42,0.12)] min-h-[520px]">
              {carouselImages.map((img, i) => (
                <img key={i} src={img} alt={`Interior ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === carouselIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              {/* Gradient overlay at bottom for dots readability */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, i) => (
                  <button key={i} onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === carouselIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. BENEFITS — full width centered below */}
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
