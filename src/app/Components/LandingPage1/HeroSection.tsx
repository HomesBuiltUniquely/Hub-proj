'use client';

import { useEffect, useRef, useState } from "react";
import {Pincode} from "./Pincode"

const carouselImages = [
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//2.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//4.png",
];

export default function HeroSections() {
  const [cityOpen, setCityOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const cityRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const cityOptions = [
    "2BHK Essential Interiors [ Starting at 2.8 Lakhs (Including Modular kitchen, wardrobes, TV unit, Crockery units) ]",
    "3 BHK Essential Interiors [ Starting at 3.8 Lakhs (Including Modular kitchen, wardrobes, TV unit, Crockery units) ]",
    "4BHK Essential Interiors [ Starting at 5.5 Lakhs (Including Modular kitchen, wardrobes, TV unit, Crockery units) ]",
    "2 BHK End-to-End Interiors [3 - 5 Lakhs]",
    "3 BHK End-to-End Interiors [5 - 7 Lakhs]",
    "4 BHK End-to-End Interiors [7 - 9 Lakhs]",
  ];

  const budgetOptions = [
    "Immediately",
    "0-3 Months",
    "3-6 Months",
  ];

  const handleCitySelect = (value: string) => {
    setSelectedCity(value);
    setCityOpen(false);
  };

  const handleBudgetSelect = (value: string) => {
    setSelectedBudget(value);
    setBudgetOpen(false);
  };

  const handlePrev = () => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const handleNext = () => setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setCityOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setBudgetOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCity || !selectedBudget || !selectedPincode || !whatsappConsent) {
      alert("Please fill out all required fields.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      {/* Mobile/Tablet Hero Section Redesigned */}
      <div className="block lg:hidden relative w-full h-[370px] sm:h-[420px] mb-0">
        {/* Background image */}
        <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-b-3xl" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-b-3xl"></div>
        {/* Logo and Button Row */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <img src="/hub.png" alt="Logo" className="h-[38px]" />
          <button type="button" className="bg-[#DDCDC1] text-amber-950 rounded-full px-5 py-2 text-sm font-semibold shadow-md">GET FREE QUOTE</button>
        </div>
        <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-b-3xl" />

        {/* Centered Heading and Subheading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-white text-4xl font-bold leading-tight mb-2 drop-shadow-lg">Best Interior<br/>Designers</h1>
          <p className="text-white text-base font-medium drop-shadow mb-2">Transforming Bangalore homes with personalized<br/>interiors that reflect your lifestyle.</p>
        </div>
      </div>
      {/* Overlapping Form Card */}
      <div className="block lg:hidden relative z-20 -mt-10 px-2">
        <div className="bg-white w-full rounded-3xl shadow-2xl pt-8 pb-4 px-3">
          <div className="text-2xl font-semibold text-center mb-6 text-amber-950">Interiors For Every Budget</div>
          {/* Place the rest of the form here (inputs, dropdowns, checkbox, button, etc.) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              required 
              className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-6 sm:mt-10 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
            />
            {/* Unified Pincode Dropdown - styled like other dropdowns, mobile and desktop */}
            <div className="relative w-full sm:w-[250px] mt-4 sm:mt-10">
              <select
                name="pincode"
                required
                value={selectedPincode}
                onChange={e => setSelectedPincode(e.target.value)}
                className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
              >
                <option className="text-gray-400" value="" disabled>Property Pincode</option>
                {Pincode.map((pin, idx) => (
                  <option key={idx} value={pin}>{pin}</option>
                ))}
              </select>
              {/* Custom dropdown arrow icon */}
              <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
            </div>
          </div>
          {/* Restore City and Budget Dropdowns */}
          <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10 space-y-4 sm:space-y-6">
            {/* City Dropdown */}
            <div ref={cityRef}>
              <div
                onClick={() => {
                  setCityOpen(!cityOpen);
                  setBudgetOpen(false);
                }}
                className={`w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && 'text-gray-400'}`}
              >
                <span className="truncate">
                  {selectedCity || "Choose Interior Setup"}
                </span>
                <span className="text-gray-500">&#9662;</span>
              </div>
              {cityOpen && (
                <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-10 text-left max-h-60 overflow-y-auto font-medium">
                  {cityOptions.map((option) => (
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
            {/* Budget Dropdown */}
            <div ref={budgetRef}>
              <div
                onClick={() => {
                  setBudgetOpen(!budgetOpen);
                  setCityOpen(false);
                }}
                className={`w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] mt-6 sm:mt-10 flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedBudget && 'text-gray-400'}`}
              >
                <span>
                  {selectedBudget || "Possession In"}
                </span>
                <span className="text-gray-500">&#9662;</span>
              </div>
              {budgetOpen && (
                <ul className="absolute top-[110px] sm:top-[130px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-10 text-left max-h-60 overflow-y-auto font-medium">
                  {budgetOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleBudgetSelect(option)}
                      className="px-4 sm:px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs sm:text-sm"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* Checkbox and Button Container */}
          <div className="flex flex-col items-start mt-6 sm:mt-8 gap-3">
            {/* WhatsApp Checkbox */}
            <div className="flex items-center w-full sm:w-auto justify-start mb-3 lg:mb-0 lg:ml-2">
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
            </div>
            {/* Next Button */}
            <button
              type="submit"
              className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-2"
            >
              <p>Submit</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          {/* Legal Text */}
          <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 font-medium text-center sm:text-left mr-0 sm:mr-26 lg:ml-2">
            By Submitting This Form, You Agree To The{" "}
            <span className="text-[#DDCDC1]">Privacy Policy</span> &{" "}
            <span className="text-[#DDCDC1]">Terms & Conditions</span>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet Layout */}
      <div className="hidden lg:block bg-[#f1f2f6]  min-h-screen p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto lg:mr-30">
          {/* Left side - Form */}
          <div className="w-full lg:w-auto">
            <div className="flex justify-center lg:justify-start">
              <img src="/hub.png" alt="Logo" className="h-[40px] sm:h-[50px] lg:h-[60px] mt-2" />
            </div>
            <div className="bg-white w-full lg:min-w-[570px] h-auto lg:h-[670px] mt-6 lg:mt-12 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-6 sm:p-8 lg:p-10 shadow-2xl">
              <p className="lg:mr-20 mb-6 lg:mb-0">Interiors For Every Budget</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  required 
                  className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  required 
                  className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-6 sm:mt-10 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                />
                {/* Unified Pincode Dropdown - styled like other dropdowns, mobile and desktop */}
                <div className="relative w-full sm:w-[250px] mt-4 sm:mt-10">
                  <select
                    name="pincode"
                    required
                    value={selectedPincode}
                    onChange={e => setSelectedPincode(e.target.value)}
                    className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                  >
                    <option className="text-gray-400" value="" disabled>Property Pincode</option>
                    {Pincode.map((pin, idx) => (
                      <option key={idx} value={pin}>{pin}</option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow icon */}
                  <span className="text-gray-500 absolute mt-4 -ml-8 text-[16px]">&#9662;</span>
                </div>
              </div>
              {/* Restore City and Budget Dropdowns */}
              <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10 space-y-4 sm:space-y-6">
                {/* City Dropdown */}
                <div ref={cityRef}>
                  <div
                    onClick={() => {
                      setCityOpen(!cityOpen);
                      setBudgetOpen(false);
                    }}
                    className={`w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedCity && 'text-gray-400'}`}
                  >
                    <span className="truncate">
                      {selectedCity || "Choose Interior Setup"}
                    </span>
                    <span className="text-gray-500">&#9662;</span>
                  </div>
                  {cityOpen && (
                    <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-10 text-left max-h-60 overflow-y-auto font-medium">
                      {cityOptions.map((option) => (
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
                {/* Budget Dropdown */}
                <div ref={budgetRef}>
                  <div
                    onClick={() => {
                      setBudgetOpen(!budgetOpen);
                      setCityOpen(false);
                    }}
                    className={`w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] mt-6 sm:mt-10 flex items-center justify-between px-4 sm:px-6 cursor-pointer ${!selectedBudget && 'text-gray-400'}`}
                  >
                    <span>
                      {selectedBudget || "Possession In"}
                    </span>
                    <span className="text-gray-500">&#9662;</span>
                  </div>
                  {budgetOpen && (
                    <ul className="absolute top-[110px] sm:top-[130px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-10 text-left max-h-60 overflow-y-auto font-medium">
                      {budgetOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => handleBudgetSelect(option)}
                          className="px-4 sm:px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs sm:text-sm"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {/* Checkbox and Button Container */}
              <div className=" sm:flex-row items-center justify-between mt-6 sm:mt-8 gap-4">
                {/* WhatsApp Checkbox */}
                <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start lg:ml-2">
                  <input
                    type="checkbox"
                    required
                    checked={whatsappConsent}
                    onChange={() => setWhatsappConsent(!whatsappConsent)}
                    className="size-4 sm:size-5 accent-[#DDCDC1] flex-shrink-0"
                  />
                  <label className="text-sm sm:text-[16px] font-light ml-2 sm:ml-3 whitespace-nowrap">
                    Send Me Updates On WhatsApp
                  </label>
                </div>
                {/* Next Button */}
                <button
                  type="submit"
                  className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-8"
                >
                  <p>Submit</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>
              {/* Legal Text */}
              <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 font-medium text-center sm:text-left mr-0 sm:mr-26 lg:ml-2">
                By Submitting This Form, You Agree To The{" "}
                <span className="text-[#DDCDC1]">Privacy Policy</span> &{" "}
                <span className="text-[#DDCDC1]">Terms & Conditions</span>
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
              <h1 className="text-white text-6xl font-bold leading-tight mb-0 drop-shadow-lg">Best Interior<p className="mb-1">Designers</p></h1>
              <p className="text-white text-xl font-medium drop-shadow mb-2">Transforming Bangalore homes with personalized<br/>interiors that reflect your lifestyle.</p>
            </div>
            <div className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 font-bold absolute -mt-190 ml-132 tracking-wider text-[18px] z-20"> GET FREE QUOTE</div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}