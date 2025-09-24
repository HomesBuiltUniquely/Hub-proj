"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouFranchisee() {
  const router = useRouter();

  useEffect(() => {
    // Reload the page once when component mounts (simulates form submission reload)
    const hasReloaded = sessionStorage.getItem('franchiseThankYouReloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('franchiseThankYouReloaded', 'true');
      window.location.reload();
      return;
    }

    // Auto redirect to home page after 10 seconds
    const timer = setTimeout(() => {
      // Clear the reload flag when leaving
      sessionStorage.removeItem('franchiseThankYouReloaded');
      router.push('/');
    }, 10000);

    return () => {
      clearTimeout(timer);
      // Clean up the reload flag if component unmounts
      sessionStorage.removeItem('franchiseThankYouReloaded');
    };
  }, [router]);

  const handleGoHome = () => {
    // Clear the reload flag when manually navigating
    sessionStorage.removeItem('franchiseThankYouReloaded');
    router.push('/');
  };

  const handleGoBack = () => {
    // Clear the reload flag when manually navigating
    sessionStorage.removeItem('franchiseThankYouReloaded');
    router.push('/interior-design-franchise');
  };

  return (
    <>
      <style jsx>{`
        /* Hide regular section on ultra-wide screens */
        @media (min-width: 2560px) {
          .thankyou-regular {
            display: none !important;
          }
        }
        
        /* Ultra-wide layout for 2560px+ */
        .thankyou-ultrawide {
          display: none !important;
        }
        
        @media (min-width: 2560px) {
          .thankyou-ultrawide {
            display: block !important;
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #f1f2f6 0%, #f1f2f6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem;
          }
          
          .thankyou-ultrawide-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            background: white;
            border-radius: 3rem;
            padding: 6rem 4rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          }
          
          .thankyou-ultrawide-icon {
            width: 120px;
            height: 120px;
            margin: 0 auto 3rem;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
          }
          
          .thankyou-ultrawide-title {
            font-size: 4rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .thankyou-ultrawide-subtitle {
            font-size: 2rem;
            color: #374151;
            margin-bottom: 3rem;
            font-weight: 500;
          }
          
          .thankyou-ultrawide-message {
            font-size: 1.5rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .thankyou-ultrawide-buttons {
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin-bottom: 3rem;
          }
          
          .thankyou-ultrawide-button {
            padding: 1.5rem 3rem;
            border-radius: 1.5rem;
            font-weight: 600;
            font-size: 1.25rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            text-decoration: none;
            display: inline-block;
          }
          
          .thankyou-ultrawide-button-primary {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
          }
          
          .thankyou-ultrawide-button-primary:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -10px rgba(239, 68, 68, 0.4);
          }
          
          .thankyou-ultrawide-button-secondary {
            background: white;
            color: #374151;
            border: 2px solid #e5e7eb;
          }
          
          .thankyou-ultrawide-button-secondary:hover {
            background: #f9fafb;
            border-color: #d1d5db;
            transform: translateY(-2px);
          }
          
          .thankyou-ultrawide-timer {
            font-size: 1.125rem;
            color: #9ca3af;
            font-style: italic;
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        }
      `}</style>

      {/* Ultra-wide layout for 2560px+ */}
      <div className="thankyou-ultrawide">
        <div className="thankyou-ultrawide-container">
          <div className="thankyou-ultrawide-icon">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="thankyou-ultrawide-title">Thank You!</h1>
          <h2 className="thankyou-ultrawide-subtitle">Franchise Application Submitted Successfully</h2>
          
          <p className="thankyou-ultrawide-message">
            Thank you for your interest in becoming a HUB Interior franchisee! We have received your application and our team will review it carefully. 
            We&#39;ll contact you within 24-48 hours to discuss the next steps and answer any questions you may have about our franchise opportunities.
          </p>
          
          <div className="thankyou-ultrawide-buttons">
            <button onClick={handleGoHome} className="thankyou-ultrawide-button thankyou-ultrawide-button-primary">
              Go to Homepage
            </button>
            <button onClick={handleGoBack} className="thankyou-ultrawide-button thankyou-ultrawide-button-secondary">
              Back to Franchise Page
            </button>
          </div>
          
          <p className="thankyou-ultrawide-timer">
            You will be automatically redirected to the homepage in 10 seconds...
          </p>
        </div>
      </div>

      {/* Regular layout for screens below 2560px */}
      <div className="thankyou-regular min-h-screen bg-[#f1f2f6] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Thank You!
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 font-medium">
            Franchise Application Submitted Successfully
          </h2>
          
          {/* Message */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            Thank you for your interest in becoming a HUB Interior franchisee! We have received your application and our team will review it carefully. 
            We&#39;ll contact you within 24-48 hours to discuss the next steps and answer any questions you may have about our franchise opportunities.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
            <button 
              onClick={handleGoHome}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Go to Homepage
            </button>
            <button 
              onClick={handleGoBack}
              className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Back to Franchise Page
            </button>
          </div>
          
          {/* Auto-redirect notice */}
          <p className="text-xs sm:text-sm text-gray-500 italic">
            You will be automatically redirected to the homepage in 10 seconds...
          </p>
        </div>
      </div>
    </>
  );
}