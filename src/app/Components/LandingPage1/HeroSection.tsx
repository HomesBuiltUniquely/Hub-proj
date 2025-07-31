'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {Pincode} from "./Pincode"
import cityOptions from "./DropDown1"
import {budgetOptions} from "./DropDown2"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { app } from '../../config';
import { FirebaseError } from "firebase/app";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier | null | undefined;
  }
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // OTP States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

  // Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const auth = getAuth(app);

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

  // const handlePrev = () => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  // const handleNext = () => setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

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

  // Initialize reCAPTCHA
  useEffect(() => {
    if (showOtpModal) {
      // Clear any existing reCAPTCHA
      if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }

      // Wait for DOM to be ready
      setTimeout(() => {
    try {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': () => {
              console.log('reCAPTCHA verified');
              setRecaptchaCompleted(true);
            },
            'expired-callback': () => {
              console.log('reCAPTCHA expired');
              setRecaptchaCompleted(false);
            }
          });
          
          // Render the reCAPTCHA
          window.recaptchaVerifier.render();
        } catch (error) {
          console.error('Error initializing reCAPTCHA:', error);
          }
      }, 100);
    } else {
      // Cleanup when modal closes
      if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    }
  }, [showOtpModal, auth]);

  // Auto-close modal and submit as unverified after 3 minutes if OTP was sent but not verified
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (otpSent && !isVerified && !isOtpVerifying) {
      timeoutId = setTimeout(async () => {
        console.log('Auto-closing modal and submitting as unverified after timeout');
        await handleModalClose();
      }, 180000); // 3 minutes
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [otpSent, isVerified, isOtpVerifying]);

  const handleSendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        alert('reCAPTCHA not initialized. Please try again.');
        return;
      }

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
      console.log('Sending OTP to:', formattedPhoneNumber);
      console.log('Auth instance:', auth);
      console.log('reCAPTCHA verifier:', window.recaptchaVerifier);
      
      // Check if reCAPTCHA is completed
      if (!recaptchaCompleted) {
        alert('Please complete the reCAPTCHA verification first.');
        return;
      }
      
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      alert('OTP has been sent to your phone number');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("Error sending OTP:", error);
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
    
        if (error.code === "auth/invalid-app-credential") {
          alert("Firebase configuration error. Please check your Firebase settings and authorized domains.");
        } else if (error.code === "auth/invalid-phone-number") {
          alert("Invalid phone number format. Please enter a valid 10-digit Indian phone number.");
        } else if (error.code === "auth/too-many-requests") {
          alert("Too many OTP requests. Please wait a few minutes before trying again.");
        } else if (error.code === "auth/invalid-recaptcha-token") {
          alert("reCAPTCHA verification failed. Please try again.");
        } else {
          alert("Error sending OTP. Please try again. Make sure you complete the reCAPTCHA.");
        }
      } else {
        console.error("Unknown error sending OTP:", error);
        alert("An unknown error occurred while sending OTP.");
      }
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    if (!confirmationResult) {
      alert('No confirmation result available. Please try again.');
      return;
    }

    setIsOtpVerifying(true);
    try {
      await confirmationResult.confirm(otp);
      setIsVerified(true);
      setOtp('');
      alert('Phone number verified successfully! Submitting your form...');
      setOtpSent(false);
      setConfirmationResult(null);
      
      // Automatically submit the form as verified user
      await handleFinalSubmit('Verified User');
      
      // Close the modal after successful submission
      setShowOtpModal(false);
      setIsVerified(false);
      setRecaptchaCompleted(false);
      
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP. Please try again.');
      // After wrong OTP, give user option to try again or close modal
      const shouldClose = window.confirm('Invalid OTP. Would you like to try again or close and submit as unverified?');
      if (!shouldClose) {
        await handleModalClose();
      }
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
    
    // Then show OTP modal for verification
    setShowOtpModal(true);
  };

  // Function to handle modal close and auto-submit as unverified
  const handleModalClose = async () => {
    if (otpSent && !isVerified) {
      // User started OTP process but didn't complete it - submit as unverified
      console.log('Modal closed with unverified OTP - submitting as unverified');
      await handleFinalSubmit('Unverified User');
    } else if (!otpSent) {
      // User never clicked "Send OTP" - submit as unverified
      console.log('Modal closed without sending OTP - submitting as unverified');
      await handleFinalSubmit('Unverified User');
    }
    
    setShowOtpModal(false);
    setOtpSent(false);
    setOtp('');
    setConfirmationResult(null);
    setIsVerified(false);
    setRecaptchaCompleted(false);
  };

  const handleFinalSubmitWithoutReset = async (verificationStatus = 'Unverified User') => {
    console.log('handleFinalSubmitWithoutReset called with status:', verificationStatus);
    console.log('formData:', formData);
    console.log('selectedCity:', selectedCity);
    console.log('selectedBudget:', selectedBudget);
    console.log('selectedPincode:', selectedPincode);
    
    setIsSubmitting(true);
    setSubmitStatus('');

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
        setSubmitStatus('success');
        
        if (verificationStatus === 'Verified User') {
          alert('Form submitted successfully! We will contact you soon.');
        } else {
          alert('Form submitted! Please verify your phone number for faster response.');
        }
      } else {
        setSubmitStatus('error');
        alert(responseData.message || 'Failed to submit form. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    
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
    setSubmitStatus('');

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
        setSubmitStatus('success');
        
        if (verificationStatus === 'Verified User') {
          alert('Form submitted successfully! We will contact you soon.');
          // Redirect to thank you page after successful verified submission
          router.push('/ThankUpage');
        } else {
          alert('Form submitted! Please verify your phone number for faster response.');
        }
        
        // Reset form
        setSelectedCity("");
        setSelectedBudget("");
        setSelectedPincode("");
        setWhatsappConsent(true);
        setFormData({ name: '', email: '', phone: '' });
        setIsVerified(false);
        setShowOtpModal(false);
      } else {
        setSubmitStatus('error');
        alert(responseData.message || 'Failed to submit form. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    
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
              <h1 className="text-white text-[28px] manrope top-4 pt-4 text-left leading-tight drop-shadow-lg">Best Interior Designers in <span className="text-red-500">Banglore</span></h1>
              <p className="text-white text-base text-left font-medium drop-shadow top-3 pt-1 pr-3">Transforming Bangalore homes with personalized interiors that reflect your lifestyle.</p>
            </div>
          </div>

        {/* Mobile Form Card */}
          <div className="relative z-20 -mt-10 px-2">
            <div className="bg-white w-full rounded-3xl shadow-2xl pt-8 pb-4 px-3 ">
            <div className="text-2xl font-semibold text-center mb-6 text-amber-950">Interiors For Every Budget</div>
            
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
                  disabled={isSubmitting}
                  className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  <p>{isSubmitting ? 'Sending...' : 'Submit'}</p>
                  {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  )}
              </button>
            </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center text-sm mt-4 font-medium">
                  Thank you! We&#39;ll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center text-sm mt-4 font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
              
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
                    disabled={isSubmitting}
                    className="flex w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] bg-[#DDCDC1] rounded-3xl lg:rounded-4xl text-xl sm:text-2xl lg:text-[24px] font-medium justify-center items-center lg:mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p>{isSubmitting ? 'Sending...' : 'Submit'}</p>
                    {!isSubmitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 lg:size-7 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    )}
                  </button>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center text-sm mt-4 font-medium">
                    Thank you! We&#39;ll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center text-sm mt-4 font-medium">
                    Something went wrong. Please try again.
                  </div>
                )}
                
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
                <h1 className="text-white text-6xl font-bold leading-tight mb-0 drop-shadow-lg">Best Interior<p className="mb-1">Designers</p></h1>
                <p className="text-white text-xl font-medium drop-shadow mb-2">Transforming Bangalore homes with personalized<br/>interiors that reflect your lifestyle.</p>
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

            {!otpSent ? (
              <div>
                <p className="text-gray-600 mb-4">
                  Please verify your phone number to continue. We&#39;ll send an OTP to {formData.phone}
                </p>
                <div id="recaptcha-container" className="mb-4"></div>
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-[#DDCDC1] text-amber-950 py-3 rounded-xl font-semibold hover:bg-[#c4b5a8] transition-colors"
                >
                  Send OTP
                </button>
              </div>
            ) : (
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
                    onClick={handleSendOtp}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Resend
                  </button>
                </div>
              </div>
            )}




          </div>
        </div>
      )}
    </div>
  );
}