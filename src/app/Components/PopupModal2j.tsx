'use client'
import { useState, useEffect } from "react";
import PopUp2j from "./PopUp2j";


export default function PopUpModal2j() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reopenCount, setReopenCount] = useState(0); // reopen count

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

   // Reopen every 15s but only 3 times (reopenCount < 3)
useEffect(() => {
  if (submitted) return;

  if (reopenCount >= 3) return; // ❌ Stop reopening after 3 times

  const interval = setInterval(() => {
    setOpen(true);
    setReopenCount(prev => prev + 1); // 🔥 increment
  }, 15000);

  return () => clearInterval(interval);
}, [submitted, reopenCount]);

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
            <PopUp2j onFormSuccess={handleFormSuccess} onClose={() => setOpen(false)} />
          </div>
        </div>

        {/* ========== MOBILE VERSION ========== */}
        <div className="mobile-modal w-full h-screen flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-[92%] mx-auto">
            <PopUp2j onFormSuccess={handleFormSuccess} onClose={() => setOpen(false)} />
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
