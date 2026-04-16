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
    let fromQuery = { name: '', email: '', phone: '' };
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      fromQuery = {
        name: params.get('name')?.trim() || '',
        email: params.get('email')?.trim() || '',
        phone: params.get('phone')?.trim() || '',
      };
      if (fromQuery.name || fromQuery.email || fromQuery.phone) {
        if (fromQuery.name) sessionStorage.setItem('userName', fromQuery.name);
        if (fromQuery.email) sessionStorage.setItem('userEmail', fromQuery.email);
        if (fromQuery.phone) sessionStorage.setItem('userPhone', fromQuery.phone);
      }
    }

    const userName =
      sessionStorage.getItem('userName') || fromQuery.name || '';
    const userEmail =
      sessionStorage.getItem('userEmail') || fromQuery.email || '';
    const userPhone =
      sessionStorage.getItem('userPhone') || fromQuery.phone || '';
    setUserData({ name: userName, email: userEmail, phone: userPhone });

    // Check if this is a fresh redirect from form submission
    const isFreshRedirect = sessionStorage.getItem('formSubmitted') === 'true';
    
    if (isFreshRedirect && !hasReloaded) {
      // Clear the flag to prevent infinite reloads
      sessionStorage.removeItem('formSubmitted');
      
      // Force a reload to ensure proper page load and conversion tracking
      setTimeout(() => {
        window.location.reload();
      }, 100);
      
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
      
      // Cleanup timer
      return () => clearTimeout(retryTimer);
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
     
      <div className="lg:block hidden">
      <div className="w-auto h-auto relative">
      <img src="Tq.png" className="w-auto h-auto"></img>
      <img src="Ani.gif" className="absolute top-40 left-1/2 w-[90px] h-[90px] transform -translate-x-1/2 -translate-y-1/2 "></img>
      <h1 className="text-[90px] absolute top-60 left-136 font-light tracking-wide">Thank You</h1>
      <div className="text-[20px] absolute top-100 pl-80 manrope-medium">Your appointment is confirmed! Our talented Interior Designer will contact you shortly to<p className="pl-46">explore your design aspirations and requirements.</p> </div>
      {(userData.email || userData.phone) && (
        <div className="absolute top-[26rem] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg max-w-md w-[90%] manrope-medium text-center z-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Your details</h3>
          {userData.name && (
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Name:</span> {userData.name}
            </p>
          )}
          {userData.email && (
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Email:</span> {userData.email}
            </p>
          )}
          {userData.phone && (
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> +91 {userData.phone}
            </p>
          )}
        </div>
      )}
      <div className="absolute left-1/2 top-[32rem] z-10 w-[650px] max-w-[90%] -translate-x-1/2 rounded-3xl bg-[#ef0101] px-4 py-4 manrope-medium shadow-lg">
        {userData.phone || userData.email ? (
          <div className="flex flex-col gap-3 text-white">
            {userData.phone && (
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-lg">+91 {userData.phone}</span>
              </div>
            )}
            {userData.email && (
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="break-all text-center text-base">{userData.email}</span>
              </div>
            )}
            <p className="border-t border-white/30 pt-2 text-center text-xs text-white/90">
              HUB Interior: +91 889 889 1117 · hello@hubinterior.com
            </p>
          </div>
        ) : (
          <div className="flex justify-between pt-2 text-white">
            <div className="flex pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <h1 className="pl-1 text-xl">+91 889 889 1117</h1>
            </div>
            <div className="flex pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 pr-2 pb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <h1 className="pr-2 text-xl">hello@hubinterior.com</h1>
            </div>
          </div>
        )}
      </div>
      </div>
      </div>
      <div className="lg:hidden">
          <div className="w-auto h-[400px] bg-[#f1f2f6] relative">
            <img
              src="Ani.gif"
              alt="Animation"
              className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px]"
            />
            <h1 className="text-[50px] manrope-medium pt-50 text-center">Thank You</h1>
            <div className="p-4 text-center">
              Your appointment is confirmed! Our talented Interior Designer will contact you shortly to explore your design aspirations and requirements.
            </div>
            {(userData.email || userData.phone) && (
              <div className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-md manrope-medium text-center text-gray-800">
                <h3 className="mb-2 text-base font-semibold">Your details</h3>
                {userData.name && (
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Name:</span> {userData.name}
                  </p>
                )}
                {userData.email && (
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Email:</span> {userData.email}
                  </p>
                )}
                {userData.phone && (
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> {userData.phone}
                  </p>
                )}
              </div>
            )}
            <div className="mx-auto mt-8 w-[350px] max-w-[90%] rounded-2xl bg-red-600 p-6 text-white">
              {userData.phone || userData.email ? (
                <div className="space-y-4">
                  {userData.phone && (
                    <div className="text-center text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto mb-2 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      +91 {userData.phone}
                    </div>
                  )}
                  {userData.email && (
                    <div className="break-all text-center text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto mb-2 size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      {userData.email}
                    </div>
                  )}
                  <p className="border-t border-white/30 pt-3 text-center text-xs text-white/90">
                    HUB Interior: +91 889 889 1117 · hello@hubinterior.com
                  </p>
                </div>
              ) : (
                <>
                  <div className="pt-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <h2 className="pt-2 text-center">+91 889 889 1117</h2>
                  </div>
                  <div className="pt-6 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <h2 className="pt-2 text-center">hello@hubinterior.com</h2>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}