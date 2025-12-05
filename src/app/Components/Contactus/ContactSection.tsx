'use client'

import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div>
      <style jsx>{`
        /* Hide all sections by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560,
        .mobile-small,
        .mobile-large {
          display: none;
        }

        
            /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1920px layout for large desktops (1440px–1920px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        /* Show 2560px layout for ultra-wide (>1920px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 479px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 480px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          } 
        }
      `}</style>

      
      {/* 2560 Version */}

      <div className="desktop-2560 w-full">
        <div className="min-h-[750px] w-[1440px] mx-auto pt-20 ">
          {/* Top Section: Headline + Form */}
          <div className="max-w-[1440] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 pt-15 pb-8 rounded-3xl bg-white">
            {/* Left: Heading and subtext */}
            <div className="md:w-1/2 mb-10 md:mb-0 ml-10 -mt-5">
              <h1 className="text-5xl md:text-7xl manrope-medium text-black mb-3 leading-tight">
                Still Have<br />A Question ?<br />Lets Talk
              </h1>
              <p className="w-[360px] text-gray-700 manrope-medium">
                Reach out to explore designs tailored to your lifestyle and space.
              </p>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="md:w-[550px] bg-transparent space-y-8 -mt-10 mr-10">
              {/* First & Last Name */}
              <div className="flex gap-6">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">First Name*</p>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Last Name</p>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex gap-6">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Email*</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Phone Number*</p>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-gray-700 mb-1 manrope-medium text-sm">Tell Us More</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md px-3 py-2 bg-white border border-gray-300 h-32 resize-none focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit px-10 py-2 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg manrope-medium transition disabled:bg-gray-400 disabled:cursor-not-allowed ${isSubmitting ? "opacity-75" : ""
                  }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Bottom Section: Office and Social */}
          <div className="max-w-[1440px] mx-auto mt-20 mb-8 bg-[#DDCDC1] rounded-3xl px-16 py-20 flex flex-col md:flex-row justify-between items-start gap-120">
            {/* Corporate Office */}
            <div className="flex-1 space-y-5">
              <h2 className="text-4xl manrope text-black mb-8">Corporate Office</h2>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m8-14v2a2 2 0 1 1-4 0V5" />
                </svg>
                <span className="max-w-[380px]">
                  1st Floor, 6th Cross Rd, 1st Stage, HBR Layout 4th Block, Bengaluru, Karnataka 560044
                </span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                <span>hello@hubinterior.com</span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 17.92V21a1 1 0 0 1-1.11 1A19.8 19.8 0 0 1 3 4.11 1 1 0 0 1 4 3h3.09A1 1 0 0 1 8 4a16 16 0 0 0 .66 2.3 1 1 0 0 1-.25 1L6.13 8.27a16 16 0 0 0 6.58 6.58l1-1.28a1 1 0 0 1 1-.26A16 16 0 0 0 20 19a1 1 0 0 1 .92 1z" />
                </svg>
                <span>+91 889 889 1117 / 889 889 2223</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl manrope text-black mb-4">
                Follow us for daily design drama
              </h3>

              <div className="flex space-x-8">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/hubinterior/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.103 1 2.5 1s2.483 1.12 2.483 2.5zM.25 8.5h4.5v15H.25v-15zM8.75 8.5h4.3v2.1h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.2v8h-4.5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8v7.2h-4.4v-15z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hubinterior_?igsh=MWNyOWYza3NiMnowag=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-2.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hubinteriorofficial"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.676 0H1.326A1.326 1.326 0 000 1.326v21.348A1.326 1.326 0 001.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.465.099 2.797.143v3.246l-1.919.001c-1.504 0-1.795.716-1.795 1.765v2.31h3.588l-.467 3.626h-3.12V24h6.116A1.326 1.326 0 0024 22.674V1.326A1.326 1.326 0 0022.676 0z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/hubinterior1?t=3dhY9T6Zu0IRz_C5DKv0bg&s=09"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24h21c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0zM17.5 6.7l-3.6 4.3 4.5 6.3h-3.6l-2.8-3.9-3.2 3.9H5.3l4.3-5.2L5.9 6.7h3.6l2.4 3.4L15 6.7h2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>



      {/* 1920 Version */}

      <div className="desktop-1920 w-full">
        <div className="min-h-[750px] w-full mx-auto px-20 pt-20 ">
          {/* Top Section: Headline + Form */}
          <div className="w-full mx-auto px-15 flex flex-col md:flex-row items-start justify-between gap-12 pt-15 pb-8 rounded-3xl bg-white">
            {/* Left: Heading and subtext */}
            <div className="md:w-1/2 mb-10 md:mb-0  -mt-5">
              <h1 className="text-5xl md:text-7xl manrope-medium text-black mb-3 leading-tight">
                Still Have<br />A Question ?<br />Lets Talk
              </h1>
              <p className="w-[360px] text-gray-700 manrope-medium">
                Reach out to explore designs tailored to your lifestyle and space.
              </p>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="md:w-[550px] bg-transparent space-y-8 -mt-10">
              {/* First & Last Name */}
              <div className="flex gap-6">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">First Name*</p>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Last Name</p>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex gap-6">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Email*</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Phone Number*</p>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-gray-700 mb-1 manrope-medium text-sm">Tell Us More</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md px-3 py-2 bg-white border border-gray-300 h-32 resize-none focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit px-10 py-2 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg manrope-medium transition disabled:bg-gray-400 disabled:cursor-not-allowed ${isSubmitting ? "opacity-75" : ""
                  }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Bottom Section: Office and Social */}
          <div className="max-w-[1440px] mx-auto mt-20 mb-8 bg-[#DDCDC1] rounded-3xl px-16 py-20 flex flex-col md:flex-row justify-between items-start gap-120">
            {/* Corporate Office */}
            <div className="flex-1 space-y-5">
              <h2 className="text-4xl manrope text-black mb-8">Corporate Office</h2>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m8-14v2a2 2 0 1 1-4 0V5" />
                </svg>
                <span className="max-w-[380px]">
                  1st Floor, 6th Cross Rd, 1st Stage, HBR Layout 4th Block, Bengaluru, Karnataka 560044
                </span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                <span>hello@hubinterior.com</span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 17.92V21a1 1 0 0 1-1.11 1A19.8 19.8 0 0 1 3 4.11 1 1 0 0 1 4 3h3.09A1 1 0 0 1 8 4a16 16 0 0 0 .66 2.3 1 1 0 0 1-.25 1L6.13 8.27a16 16 0 0 0 6.58 6.58l1-1.28a1 1 0 0 1 1-.26A16 16 0 0 0 20 19a1 1 0 0 1 .92 1z" />
                </svg>
                <span>+91 889 889 1117 / 889 889 2223</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl manrope text-black mb-4">
                Follow us for daily design drama
              </h3>

              <div className="flex space-x-8">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/hubinterior/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.103 1 2.5 1s2.483 1.12 2.483 2.5zM.25 8.5h4.5v15H.25v-15zM8.75 8.5h4.3v2.1h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.2v8h-4.5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8v7.2h-4.4v-15z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hubinterior_?igsh=MWNyOWYza3NiMnowag=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-2.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hubinteriorofficial"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.676 0H1.326A1.326 1.326 0 000 1.326v21.348A1.326 1.326 0 001.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.465.099 2.797.143v3.246l-1.919.001c-1.504 0-1.795.716-1.795 1.765v2.31h3.588l-.467 3.626h-3.12V24h6.116A1.326 1.326 0 0024 22.674V1.326A1.326 1.326 0 0022.676 0z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/hubinterior1?t=3dhY9T6Zu0IRz_C5DKv0bg&s=09"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24h21c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0zM17.5 6.7l-3.6 4.3 4.5 6.3h-3.6l-2.8-3.9-3.2 3.9H5.3l4.3-5.2L5.9 6.7h3.6l2.4 3.4L15 6.7h2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>




      {/* 1280 Version */}

      <div className="desktop-1280 w-full">
        <div className="min-h-[750px] max-w-[1280px] mx-auto pt-20 px-15">
          {/* Top Section: Headline + Form */}
          <div className="max-w-[1280px] px-10 mx-auto flex flex-col md:flex-row items-start justify-between gap-12 pt-12 pb-8 bg-white rounded-3xl">
            {/* Left: Heading and subtext */}
            <div className="md:w-1/2 mb-10 md:mb-0 mt-10">
              <h1 className="text-5xl md:text-6xl manrope-medium text-black mb-3 leading-tight">
                Still Have<br />A Question ?<br />Lets Talk
              </h1>
              <p className="w-[320px] text-gray-700 manrope-medium">
                Reach out to explore designs tailored to your lifestyle and space.
              </p>
            </div>

            {/* Right: Form */}
            <form
              onSubmit={handleSubmit}
              className="md:w-[500px] bg-transparent space-y-8 -mt-8"
            >
              {/* First & Last Name */}
              <div className="flex gap-5">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">First Name*</p>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Last Name</p>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex gap-5">
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Email*</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-700 mb-1 manrope-medium text-sm">Phone Number*</p>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md px-3 bg-white border border-gray-300 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-gray-700 mb-1 manrope-medium text-sm">Tell Us More</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md px-3 py-2 bg-white border border-gray-300 h-32 resize-none focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit px-10 py-2 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg manrope-medium transition disabled:bg-gray-400 disabled:cursor-not-allowed ${isSubmitting ? "opacity-75" : ""
                  }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Bottom Section: Office and Social */}
          <div className="max-w-[1280px] mx-auto mt-16 mb-8 bg-[#DDCDC1] rounded-3xl px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-80">
            {/* Corporate Office */}
            <div className="flex-1 space-y-5">
              <h2 className="text-4xl manrope text-black mb-6">Corporate Office</h2>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m8-14v2a2 2 0 1 1-4 0V5" />
                </svg>
                <span className="max-w-[350px]">
                  1st Floor, 6th Cross Rd, 1st Stage, HBR Layout 4th Block, Bengaluru, Karnataka 560044
                </span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                <span>hello@hubinterior.com</span>
              </div>

              <div className="text-xl flex items-start gap-4 text-black manrope-medium">
                <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 17.92V21a1 1 0 0 1-1.11 1A19.8 19.8 0 0 1 3 4.11 1 1 0 0 1 4 3h3.09A1 1 0 0 1 8 4a16 16 0 0 0 .66 2.3 1 1 0 0 1-.25 1L6.13 8.27a16 16 0 0 0 6.58 6.58l1-1.28a1 1 0 0 1 1-.26A16 16 0 0 0 20 19a1 1 0 0 1 .92 1z" />
                </svg>
                <span>+91 889 889 1117 / 889 889 2223</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex-1 space-y-5">
              <h3 className="text-2xl manrope text-black mb-4">
                Follow us for daily design drama
              </h3>

              <div className="flex space-x-8">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/hubinterior/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.103 1 2.5 1s2.483 1.12 2.483 2.5zM.25 8.5h4.5v15H.25v-15zM8.75 8.5h4.3v2.1h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.2v8h-4.5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8v7.2h-4.4v-15z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hubinterior_?igsh=MWNyOWYza3NiMnowag=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-2.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hubinteriorofficial"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.676 0H1.326A1.326 1.326 0 000 1.326v21.348A1.326 1.326 0 001.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.465.099 2.797.143v3.246l-1.919.001c-1.504 0-1.795.716-1.795 1.765v2.31h3.588l-.467 3.626h-3.12V24h6.116A1.326 1.326 0 0024 22.674V1.326A1.326 1.326 0 0022.676 0z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/hubinterior1?t=3dhY9T6Zu0IRz_C5DKv0bg&s=09"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                    <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24h21c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0zM17.5 6.7l-3.6 4.3 4.5 6.3h-3.6l-2.8-3.9-3.2 3.9H5.3l4.3-5.2L5.9 6.7h3.6l2.4 3.4L15 6.7h2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Small (320px - 479px) */}
      <section className="mobile-small my-6 mx-4 mb-20">
        <div>
          <div className="">
            <div className="flex relative">
              <div className="w-[2px] h-[80px] bg-[#ebd457]"></div>
            </div>
            <div className="-mt-10">
              <h1 className="h-10 text-[28px] wulkan-display-bold text-gray-800 ml-3 -mt-21"> Still Have Questions ?<br />Lets Talk<br /></h1>

            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[425px] mx-auto bg-transparent mt-10 manrope-medium px-4"
          >
            <div className="flex flex-col items-center space-y-6 border-2 border-[#ddcdc1] rounded-3xl p-6 mt-20 shadow-sm bg-white/40 backdrop-blur-sm">
              {/* First Name */}
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name*"
                disabled={isSubmitting}
                required
                className="w-full h-[50px] rounded-full border-2 border-[#ddcdc1] pl-4 manrope-medium focus:border-[#ef0101] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />

              {/* Last Name */}
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                disabled={isSubmitting}
                className="w-full h-[50px] rounded-full border-2 border-[#ddcdc1] pl-4 manrope-medium focus:border-[#ef0101] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
                disabled={isSubmitting}
                required
                className="w-full h-[50px] rounded-full border-2 border-[#ddcdc1] pl-4 manrope-medium focus:border-[#ef0101] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number*"
                disabled={isSubmitting}
                required
                className="w-full h-[50px] rounded-full border-2 border-[#ddcdc1] pl-4 manrope-medium focus:border-[#ef0101] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more..."
                disabled={isSubmitting}
                className="w-full rounded-3xl border-2 border-[#ddcdc1] manrope-medium  px-4 py-3 h-32 resize-none focus:border-[#ef0101] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-full text-sm text-center w-full manrope-medium ${submitStatus === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[90px] h-[30px] rounded-full text-[15px] flex items-center justify-center transition-all duration-300 manrope-medium text-white ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#ef0101] hover:bg-red-700'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 
              0 0 5.373 0 12h4zm2 
              5.291A7.962 7.962 
              0 014 12H0c0 3.042 1.135 
              5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>



        </div>
      </section>

    </div>
  );

};

export default ContactSection;