'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ThankUPage() {
  useEffect(() => {
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
  }, []);

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
      <div className="bg-[#ef0101] w-[650px] h-[70px] left-105 top-130 absolute rounded-3xl flex justify-between pt-6 manrope-medium">
        <div className="flex text-white pl-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <h1 className="pl-1">+91 889 889 1117</h1>
        </div>
        <div className="flex text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 pr-2 pb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

          <h1 className="pr-4">hello@hubinterior.com</h1>
        </div>
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
            <div className="w-[350px] h-[220px] mx-auto bg-red-600 mt-8 rounded-2xl text-white flex-row items-center">
            <div className="pt-7 text-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <h1 className="text-center pt-2 ">+91 889 889 1117</h1>
            </div>
            <div className="pt-6 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
             <h1 className="text-center pt-2">hello@hubinterior.com</h1>
             </div>
            </div>
          </div>
        </div>
    </div>
  );
}