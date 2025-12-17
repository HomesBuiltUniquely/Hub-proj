'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";


const OverlapNavBar: React.FC = () => {


  const router = useRouter();



  /* ==================== YOUTUBE STYLE SCROLL (ADDED) ==================== */
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Always show near top
      if (currentY < 60) {
        setShowNav(true);
        lastScrollY.current = currentY;
        ticking.current = false;
        return;
      }

      // Scroll down → hide
      if (diff > 8) setShowNav(false);

      // Scroll up → show
      if (diff < -4) setShowNav(true);

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleLetsBeginClick = () => router.push('/GetEstimate');

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-300 ease-out
        ${showNav ? "translate-y-0" : "translate-y-[180px]"}`}
      >


        {/* Background pill */}
        <div className="relative w-[425px] bg-#E5D6C9 h-[110px] mx-auto">

          <svg
            viewBox="0 0 30 80"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="
      M0 24
      H90
      C120 24 135 14 160 14
      C185 14 200 24 230 24
      H320
      V80
      H0
      Z
    "
              fill="#E5D6C9"
            />
          </svg>


          {/* Floating white button */}
        <button
          onClick={handleLetsBeginClick}
          className="absolute bottom-2  left-1/2 -translate-x-1/2 bg-white
            text-white w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center
            shadow-xl text-sm leading-tight manrope-medium"
        >
          <img src="redlogo.png" alt="" />

        </button>


     
        </div>


        
      </div>

      {/* Explore rooms bottom sheet */}





    </>
  );
};

export default OverlapNavBar;
