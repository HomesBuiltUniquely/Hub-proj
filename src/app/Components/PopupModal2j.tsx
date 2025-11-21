'use client'
import { useState, useEffect } from "react";
import PopUp2j from "./PopUp2j";


export default function PopUpModal2j() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check if submitted before
  useEffect(() => {
    const saved = localStorage.getItem("popupSubmitted");
    if (saved === "true") {
      setSubmitted(true);
      return;
    }

    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Reopen every 15s until submitted
  useEffect(() => {
    if (submitted) return;

    const interval = setInterval(() => {
      setOpen(true);
    }, 15000);

    return () => clearInterval(interval);
  }, [submitted]);

  const handleFormSuccess = () => {
    setSubmitted(true);
    localStorage.setItem("popupSubmitted", "true");
    setOpen(false);
  };

  if (!open || submitted) return null;

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* ========== DESKTOP VERSION ========== */}
        <div className="desktop-modal w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative">
            <PopUp2j onFormSuccess={handleFormSuccess} />

            {/* DESKTOP CLOSE BUTTON */}
            <button 
              onClick={() => setOpen(false)}
              className="absolute top-12 -right-4 bg-black/60 text-white rounded-full px-3 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ========== MOBILE VERSION ========== */}
        <div className="mobile-modal w-full h-screen flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative">
            <PopUp2j onFormSuccess={handleFormSuccess} />

            {/* MOBILE CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-23 right-2 bg-black/70 text-white rounded-full px-3 py-1 text-base"
            >
              ✕
            </button>
          </div>
        </div>

      </div>

      {/* ✔ ONLY VISIBILITY CONTROL IN STYLE JSX */}
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
