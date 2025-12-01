'use client'
import { useState, useEffect } from "react";
import PopUp from "./PopUp";

export default function PopUpModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reopenCount, setReopenCount] = useState(0); // how many times reopened


  // On mount — check if already submitted
  useEffect(() => {
    const saved = localStorage.getItem("popupSubmitted");

    if (saved === "true") {
      setSubmitted(true);
      return;
    }

    // first open after 1.5s
    const timer = setTimeout(() => setOpen(true), 1500);

    return () => clearTimeout(timer);
  }, []);


  // Auto-reopen every 15s (max 3 times)
  useEffect(() => {
    if (submitted) return;

    if (reopenCount >= 1) return;   // ✅ FIXED (was 1 earlier)

    const interval = setInterval(() => {
      setOpen(true);
      setReopenCount(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, [submitted, reopenCount]);


  const handleFormSuccess = () => {
    setSubmitted(true);
    localStorage.setItem("popupSubmitted", "true");
    setOpen(false);
  };


  // Do not show popup after submission or when closed
  if (!open || submitted) return null;


  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* =================== DESKTOP =================== */}
        <div className="desktop-modal w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative">
            <PopUp onFormSuccess={handleFormSuccess} />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-12 -right-4 bg-black/60 text-white rounded-full px-3 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>


        {/* =================== MOBILE =================== */}
        <div className="mobile-modal w-full h-screen flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative">
            <PopUp onFormSuccess={handleFormSuccess} />

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-23 right-2 bg-black/70 text-white rounded-full px-3 py-1 text-base"
            >
              ✕
            </button>
          </div>
        </div>

      </div>


      {/* DEVICE VISIBILITY ONLY */}
      <style jsx>{`
        .desktop-modal {
          display: flex;
        }
        .mobile-modal {
          display: none;
        }

        @media (max-width: 767px) {
          .desktop-modal {
            display: none;
          }
          .mobile-modal {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
