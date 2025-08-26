'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import {Pincode} from "./Pincode"
import cityOptions from "./DropDown1"
import {budgetOptions} from "./DropDown2"

const carouselImages = [
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//2.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//4.png",
];
const carouselImages1 = [
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//HERO%20MOBILE.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//HERO%20MOBILE%202.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//HERO%20MOBILE%203.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//HERO%20MOBILE%204.png",
  "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//HERO%20MOBILE%202.png"
];

export default function HeroSections() {
  const router = useRouter();
  const [cityOpen, setCityOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtpAuto, setIsSendingOtpAuto] = useState(false);

  // OTP States
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);

  // Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const cityRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const handleCitySelect = (value: string) => {
    console.log('City selected:', value);
    setSelectedCity(value);
    setTimeout(() => setCityOpen(false), 100);
  };

  const handleBudgetSelect = (value: string) => {
    console.log('Budget selected:', value);
    setSelectedBudget(value);
    setTimeout(() => setBudgetOpen(false), 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setTimeout(() => {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setCityOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setBudgetOpen(false);
      }
      }, 10);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Auto-close modal and submit as unverified after 3 minutes if OTP was sent but not verified
  const handleModalClose = async () => {
    if (verificationStatus === 'Unverified User') {
      // User started OTP process but didn't complete it - submit as unverified
      console.log('Modal closed with unverified OTP - submitting as unverified');
      await handleFinalSubmit('Unverified User');
    } else if (verificationStatus === '') {
      // User never clicked "Send OTP" - submit as unverified
      console.log('Modal closed without sending OTP - submitting as unverified');
      await handleFinalSubmit('Unverified User');
    }
    
    setShowOtpModal(false);
    setVerificationStatus('');
    setOtp('');
    setIsVerified(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (verificationStatus === 'Unverified User' && !isVerified && !isOtpVerifying) {
      timeoutId = setTimeout(async () => {
        console.log('Auto-closing modal and submitting as unverified after timeout');
        await handleModalClose();
      }, 300000); // 5 minutes
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [verificationStatus, isVerified, isOtpVerifying]);

  const handleOtpSubmit = async () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    setIsOtpVerifying(true);
    try {
      const cleanedPhone = formData.phone.replace(/\D/g, "");
      const formattedPhone = cleanedPhone.startsWith('+') ? cleanedPhone : `+91${cleanedPhone}`;
      
      const response = await fetch('/api/verify-twilio-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phone: formattedPhone, 
          otp: otp 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsVerified(true);
        setOtp('');
        // Removed alert - no interruption during verification
        setVerificationStatus('Verified User');
        
        // Automatically submit the form as verified user
        await handleFinalSubmit('Verified User');
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
    console.log('Form submitted with data:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: selectedCity,
      budget: selectedBudget,
      pincode: selectedPincode,
      whatsappConsent: whatsappConsent
    });

    // Check each required field individually for better user feedback
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.email) {
      alert("Please enter your email address.");
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
    if (!selectedBudget) {
      alert("Please select when you need possession.");
      return;
    }
    if (!whatsappConsent) {
      alert("Please agree to receive WhatsApp updates.");
      return;
    }

    // Submit form data immediately as unverified (without resetting form)
    console.log('Submitting form data immediately as unverified');
    await handleFinalSubmitWithoutReset('Unverified User');
    
    // Automatically send OTP and show modal
    await handleAutoSendOtp();
  };

  // New function to automatically send OTP
  const handleAutoSendOtp = async () => {
    try {
      setIsSendingOtpAuto(true);
      
      // Validate phone number
      if (!formData.phone || formData.phone.length < 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }

      // Clean and format phone number
      const cleanedPhone = formData.phone.replace(/\D/g, "");
      if (cleanedPhone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }

      const formattedPhoneNumber = `+91${cleanedPhone}`;
      console.log('Automatically sending OTP to:', formattedPhoneNumber);
      
      const response = await fetch('/api/send-twilio-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: formattedPhoneNumber }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setVerificationStatus('Unverified User'); // Set status to unverified
        setShowOtpModal(true);
        // Removed alert - OTP modal appears directly
      } else {
        // Still show modal but user needs to manually send OTP
        setShowOtpModal(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Still show modal but user needs to manually send OTP
      setShowOtpModal(true);
    } finally {
      setIsSendingOtpAuto(false);
    }
  };

  const handleFinalSubmitWithoutReset = async (verificationStatus = 'Unverified User') => {
    console.log('handleFinalSubmitWithoutReset called with status:', verificationStatus);
    console.log('formData:', formData);
    console.log('selectedCity:', selectedCity);
    console.log('selectedBudget:', selectedBudget);
    console.log('selectedPincode:', selectedPincode);
    
    setIsSubmitting(true);

    try {
      const currentUrl = window.location.href;
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: selectedCity,
        budget: selectedBudget,
        pincode: selectedPincode,
        whatsappConsent: whatsappConsent,
        pageUrl: currentUrl,
        verificationStatus: verificationStatus
      };

      console.log('Sending data to API:', requestData);

      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); 

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log('API response status:', response.status);

      const responseData = await response.json();
      console.log('API response data:', responseData);

      if (response.ok && responseData.success) {
        // Form submitted successfully as unverified - no alert needed
        // OTP modal will appear directly
      } else {
        alert(responseData.message || 'Failed to submit form. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
    
      if (error instanceof Error && error.name === 'AbortError') {
        alert('Request timed out. Please check your internet connection and try again.');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    }
     finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalSubmit = async (verificationStatus = 'Unverified User') => {
    console.log('handleFinalSubmit called with status:', verificationStatus);
    console.log('formData:', formData);
    console.log('selectedCity:', selectedCity);
    console.log('selectedBudget:', selectedBudget);
    console.log('selectedPincode:', selectedPincode);
    
    setIsSubmitting(true);

    try {
      const currentUrl = window.location.href;
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: selectedCity,
        budget: selectedBudget,
        pincode: selectedPincode,
        whatsappConsent: whatsappConsent,
        pageUrl: currentUrl,
        verificationStatus: verificationStatus
      };

      console.log('Sending data to API:', requestData);

      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log('API response status:', response.status);

      const responseData = await response.json();
      console.log('API response data:', responseData);

      if (response.ok && responseData.success) {
        if (verificationStatus === 'Verified User') {
          // Removed alert - redirect happens silently

          // Set flag to trigger reload on Thank You page
          sessionStorage.setItem('formSubmitted', 'true');
          
          // Reset form
          setSelectedCity("");
          setSelectedBudget("");
          setSelectedPincode("");
          setWhatsappConsent(true);
          setFormData({ name: '', email: '', phone: '' });
          setIsVerified(false);
          setShowOtpModal(false);
          
          // Redirect to thank you page
          router.push('/Form-Submit-Thank-You');
        } else {
          // Removed alert - OTP modal will appear directly
        }
      } else {
        alert(responseData.message || 'Failed to submit form. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
    
      if (error instanceof Error && error.name === 'AbortError') {
        alert('Request timed out. Please check your internet connection and try again.');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    }
     finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="hero-form">
        
        {/* ===== MOBILE VERSION ===== */}
        <div className="block lg:hidden">
          {/* Mobile Navbar - Separate Row with White Background */}
          <div className="bg-white w-full py-4 px-4 shadow-sm">
            <div className="flex items-center justify-between">
              <img src="/hub.png" alt="Logo" className="h-[38px]" />
              <button type="button" className="bg-[#DDCDC1] text-amber-950 rounded-full px-5 py-2 text-sm font-semibold shadow-md">GET FREE QUOTE</button>
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
                    index === carouselIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-60 rounded-b-3xl"></div>

            {/* Centered Heading and Subheading */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-64 pr-10">
              <h1 className="text-white text-[28px] manrope top-4  text-left leading-tight drop-shadow-lg">Best Interior Designers in <span className="text-red-500">Bangalore</span></h1>
              <p className="text-white text-base text-left font-medium drop-shadow top-3 pt-1 pr-3">Transforming Bangalore homes with personalized interiors that reflect your lifestyle.</p>
            </div>
          </div>

        {/* Mobile Form Card */}
          <div className="relative z-20 -mt-10 px-2">
            <div className="bg-white w-full rounded-3xl shadow-2xl pt-8 pb-4 px-3 ">
            <div className="text-3xl manrope-semibold text-center mb-6 text-amber-950">Interiors For Every Budget</div>
            
              {/* Name and Email Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <input 
                type="text" 
                name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                placeholder="Name *" 
                required 
                className="w-full sm:w-[250px] h-[50px] bg-[#f1f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
              />
              <input 
                type="email" 
                name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                placeholder="Email *" 
                required 
                className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
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
                  className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-6 sm:mt-10 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                />
                {/* Pincode Dropdown */}
                <div className="relative w-full sm:w-[250px] mt-4 sm:mt-10">
                <select
                  name="pincode"
                  required
                  value={selectedPincode}
                  onChange={e => setSelectedPincode(e.target.value)}
                  className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                >
                  <option className="text-gray-400" value="" disabled>Property Pincode *</option>
                  {Pincode.map((pin, idx) => (
                    <option key={idx} value={pin}>{pin}</option>
                  ))}
                </select>
                  {/* Custom dropdown arrow icon */}
                <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
              </div>
            </div>

            {/* City and Budget Dropdowns */}
            <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10 space-y-4 sm:space-y-6">
                {/* City Dropdown */}
                <div className="relative w-full sm:w-[520px] mx-auto">
                  <select
                    name="city"
                    required
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                  >
                    <option className="text-gray-400" value="" disabled>Choose Interior Setup *</option>
                    {cityOptions.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow icon */}
                  <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
                </div>
                {/* Budget Dropdown */}
                <div className="relative w-full sm:w-[520px] mx-auto mt-6 sm:mt-10">
                  <select
                    name="budget"
                    required
                    value={selectedBudget}
                    onChange={e => setSelectedBudget(e.target.value)}
                    className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                  >
                    <option className="text-gray-400" value="" disabled>Possession In *</option>
                    {budgetOptions.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow icon */}
                  <span className="text-gray-500 mt-3 -ml-6 text-[18px] absolute">&#9662;</span>
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
                {/* Submit Button */}
              <button
                type="submit"
                  disabled={isSubmitting || isSendingOtpAuto}
                  className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  <p>{isSubmitting || isSendingOtpAuto ? 'Sending...' : 'Submit'}</p>
                  {!isSubmitting && !isSendingOtpAuto && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  )}
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
        </div>

        {/* ===== DESKTOP VERSION ===== */}
        <div className="hidden lg:block bg-[#f1f2f6] min-h-screen p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto lg:mr-30">
            {/* Left side - Form */}
            <div className="w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start">
                <img src="/hub.png" alt="Logo" className="h-[40px] sm:h-[50px] lg:h-[60px] mt-2" />
              </div>
              <div className="bg-white w-full lg:min-w-[570px] h-auto lg:h-[670px] mt-6 lg:mt-12 rounded-3xl lg:rounded-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold text-center p-6 sm:p-8 lg:p-10 shadow-2xl">
                <p className="lg:mr-20 mb-6 manrope-semibold lg:mb-0">Interiors For Every Budget</p>
                
                {/* Name and Email Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name *" 
                    required 
                    className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *" 
                    required 
                    className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-4 sm:mt-12 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
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
                    className="w-full sm:w-[250px] h-[50px] bg-[#f2f2f6] mt-6 sm:mt-10 rounded-3xl lg:rounded-4xl text-base sm:text-lg pl-6 sm:pl-8 placeholder-gray-400 font-medium" 
                  />
                  {/* Pincode Dropdown */}
                  <div className="relative w-full sm:w-[250px] mt-4 sm:mt-10">
                    <select
                      name="pincode"
                      required
                      value={selectedPincode}
                      onChange={e => setSelectedPincode(e.target.value)}
                      className="w-full h-[50px] font-medium bg-[#f1f2f6] rounded-3xl lg:rounded-4xl text-base sm:text-[18px] pl-6 sm:pl-8 pr-10 lg:pr-16 text-gray-400 appearance-none cursor-pointer"
                    >
                      <option className="text-gray-400" value="" disabled>Property Pincode *</option>
                      {Pincode.map((pin, idx) => (
                        <option key={idx} value={pin}>{pin}</option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow icon */}
                    <span className="text-gray-500 absolute mt-4 -ml-8 text-[16px]">&#9662;</span>
                  </div>
                </div>

                {/* Desktop Custom Dropdowns */}
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
                      <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-[9999] text-left max-h-60 overflow-y-auto font-medium">
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
                      <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-300 rounded-xl lg:rounded-2xl shadow-lg z-[9999] text-left max-h-60 overflow-y-auto font-medium">
                        {budgetOptions.map((option: string) => (
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
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSendingOtpAuto}
                    className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p>{isSubmitting || isSendingOtpAuto ? 'Sending...' : 'Submit'}</p>
                    {!isSubmitting && !isSendingOtpAuto && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    )}
                  </button>
                </div>

                {/* Legal Text */}
                <div className="text-xs sm:text-sm lg:text-[14px] mt-4 sm:mt-6 font-medium text-center sm:text-left mr-0 sm:mr-26 lg:ml-2 ">
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
                <h1 className="text-white text-6xl manrope leading-tight mb-0 drop-shadow-lg">Best Interior<p className="mb-1">Designers In <span className="text-red-500">Bangalore</span></p></h1>
                <p className="text-white text-xl manrope-medium drop-shadow mb-1 pt-2">Transforming Bangalore homes with personalized<br/>interiors that reflect your lifestyle.</p>
              </div>
              <div className="w-[200px] h-[50px] bg-[#DDCDC1] rounded-4xl text-center py-3 font-bold absolute -mt-190 ml-132 tracking-wider text-[18px] z-20"> GET FREE QUOTE</div>
            </div>
          </div>
        </div>
      </form>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Phone Verification</h3>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div>
              <p className="text-gray-600 mb-4">
                Enter the 6-digit OTP sent to {formData.phone}
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full border border-gray-300 rounded-xl p-3 mb-4 text-center text-lg font-medium"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleOtpSubmit}
                  disabled={isOtpVerifying || otp.length !== 6}
                  className="flex-1 bg-[#DDCDC1] text-amber-950 py-3 rounded-xl font-semibold hover:bg-[#c4b5a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isOtpVerifying ? 'Verifying...' : 'Verify OTP'}
                </button>
                <button
                  onClick={handleAutoSendOtp}
                  disabled={isSendingOtpAuto}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSendingOtpAuto ? 'Sending...' : 'Resend OTP'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}