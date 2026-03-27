'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PopUp from "./PopUp";

export default function PopUpModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const pageCloseKey = `popupClosed:${pathname}`;

  // Show once per page after 30s unless already submitted or closed on that page.
  useEffect(() => {
    setOpen(false);
    const pageClosed = sessionStorage.getItem(pageCloseKey);

    if (pageClosed === "true") {
      setSubmitted(true);
      return;
    }

    setSubmitted(false);

    const timer = setTimeout(() => setOpen(true), 30000);

    return () => clearTimeout(timer);
  }, [pageCloseKey]);


  const handleFormSuccess = () => {
    setSubmitted(true);
    setOpen(false);
  };

  const handleClose = () => {
    sessionStorage.setItem(pageCloseKey, "true");
    setSubmitted(true);
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
              onClick={handleClose}
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
              onClick={handleClose}
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
