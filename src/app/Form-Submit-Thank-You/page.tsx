'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function ThankUPage() {
  const [hasReloaded, setHasReloaded] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    // Load user data from sessionStorage
    const userName = sessionStorage.getItem('userName') || '';
    const userEmail = sessionStorage.getItem('userEmail') || '';
    const userPhone = sessionStorage.getItem('userPhone') || '';
    
    setUserData({ name: userName, email: userEmail, phone: userPhone });
    
    // Check if this is a fresh redirect from form submission
    const isFreshRedirect = sessionStorage.getItem('formSubmitted') === 'true';
    
    if (isFreshRedirect && !hasReloaded) {
      // Clear the flag to prevent infinite reloads
      sessionStorage.removeItem('formSubmitted');
      
      // Force a reload to ensure proper page load and GTM conversion tracking
      setTimeout(() => {
        window.location.reload();
      }, 500); // Increased delay to ensure proper page load
      
      setHasReloaded(true);
      return;
    }

    // Function to trigger GTM events
    const triggerGTMEvents = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        // Conversion event for form submission
        window.gtag('event', 'conversion', {
          'send_to': '17366893543'
        });
        
        // Additional event for form submission tracking
        window.gtag('event', 'form_submit', {
          'event_category': 'form',
          'event_label': 'appointment_booking',
          'value': 1
        });
        
        // Page view event for Thank-You page
        window.gtag('event', 'page_view', {
          'page_title': 'Thank You - Appointment Confirmed',
          'page_location': window.location.href
        });
        
        console.log('GTM events triggered on Thank-You page');
        return true;
      }
      return false;
    };

    // Try to trigger events immediately
    if (!triggerGTMEvents()) {
      // If gtag is not available, wait a bit and try again
      const retryTimer = setTimeout(() => {
        triggerGTMEvents();
      }, 1000);
      
      // Also try after a longer delay to ensure GTM is fully loaded
      const longRetryTimer = setTimeout(() => {
        triggerGTMEvents();
      }, 3000);
      
      // Cleanup timers
      return () => {
        clearTimeout(retryTimer);
        clearTimeout(longRetryTimer);
      };
    }
  }, [hasReloaded]);

  return (
    <div>
      <Script
        id="google-conversion-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Ensure gtag is available
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': '17366893543'
              });
              
              gtag('event', 'form_submit', {
                'event_category': 'form',
                'event_label': 'appointment_booking',
                'value': 1
              });
              
              gtag('event', 'page_view', {
                'page_title': 'Thank You - Appointment Confirmed',
                'page_location': window.location.href
              });
              
              console.log('GTM conversion events fired');
            } else {
              console.log('gtag not available, will retry in useEffect');
            }
          `,
        }}
      />
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block">
        <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('Tq.png')" }}>
          {/* Animated GIF */}
          <div className="absolute top-32 md:top-40 left-1/2 transform -translate-x-1/2">
            <img src="Ani.gif" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Animation" />
          </div>
          
          {/* Thank You Title */}
          <div className="absolute top-48 md:top-60 lg:top-64 left-1/2 transform -translate-x-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide text-center text-gray-800">
              Thank You
            </h1>
          </div>
          
          {/* Main Message */}
          <div className="absolute top-72 md:top-96 lg:top-104 left-1/2 transform -translate-x-1/2 max-w-4xl px-8">
            <div className="text-base md:text-lg lg:text-xl text-center manrope-medium text-gray-700">
              Your appointment is confirmed! Our talented Interior Designer will contact you shortly to
              <br className="hidden md:block" />
              explore your design aspirations and requirements.
            </div>
          </div>
          
          {/* User Data Display - Desktop */}
          {(userData.email || userData.phone) && (
            <div className="absolute top-80 md:top-112 lg:top-120 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Appointment Details:</h3>
              {userData.name && <p className="text-gray-700 mb-2 text-center"><span className="font-medium">Name:</span> {userData.name}</p>}
              {userData.email && <p className="text-gray-700 mb-2 text-center"><span className="font-medium">Email:</span> {userData.email}</p>}
              {userData.phone && <p className="text-gray-700 text-center"><span className="font-medium">Phone:</span> {userData.phone}</p>}
            </div>
          )}
          
          {/* Contact Info Bar */}
          <div className="absolute bottom-20 md:bottom-32 lg:bottom-40 left-1/2 transform -translate-x-1/2 bg-[#ef0101] rounded-3xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 gap-4 md:gap-8 text-white manrope-medium">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-sm md:text-base">+91 889 889 1117</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm md:text-base">hello@hubinterior.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="min-h-screen bg-[#f1f2f6] px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
            {/* Animated GIF */}
            <img
              src="Ani.gif"
              alt="Animation"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            
            {/* Thank You Title */}
            <h1 className="text-3xl sm:text-4xl manrope-medium text-center text-gray-800">
              Thank You
            </h1>
            
            {/* Main Message */}
            <div className="text-center px-4 max-w-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Your appointment is confirmed! Our talented Interior Designer will contact you shortly to explore your design aspirations and requirements.
              </p>
            </div>
            
            {/* User Data Display - Mobile */}
            {(userData.email || userData.phone) && (
              <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Appointment Details:</h3>
                <div className="space-y-2">
                  {userData.name && <p className="text-gray-700 text-center"><span className="font-medium">Name:</span> {userData.name}</p>}
                  {userData.email && <p className="text-gray-700 text-center"><span className="font-medium">Email:</span> {userData.email}</p>}
                  {userData.phone && <p className="text-gray-700 text-center"><span className="font-medium">Phone:</span> {userData.phone}</p>}
                </div>
              </div>
            )}
            
            {/* Contact Info Card */}
            <div className="bg-[#ef0101] rounded-2xl text-white p-6 w-full max-w-sm shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-sm sm:text-base">+91 889 889 1117</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm sm:text-base">hello@hubinterior.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}