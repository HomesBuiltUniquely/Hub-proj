'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";

const OverlapNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'gallery',
      label: 'Explore',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'calculator',
      label: 'Calculator',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'menu',
      label: 'More',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ];

  const exploreItems = [
    { label: "Modular Kitchen", path: "/ModularKitchen" },
    { label: "Bedroom", path: "/Bedroom" },
    { label: "Living Room", path: "/LivingRoom" },
    { label: "Kids Room", path: "/KidsRoom" },
    { label: "Pooja Unit", path: "/PoojaUnit" },
    { label: "TV Unit", path: "/TvUnit" },
    { label: "Wardrobe Design", path: "/Wardrobe" },
    { label: "Dining Room Design", path: "/DiningSpace" },
    { label: "False Ceiling Design", path: "/FalseCeiling" },
    { label: "Wall Decor Design", path: "/WallInterior" },
    { label: "Study Room Design", path: "/StudyRoom" },
    { label: "Bar Unit Design", path: "/" },
    { label: "Flooring Design", path: "/" },
    { label: "Bathroom Design", path: "/" },
  ];

  const handleTabClick = (tabId: string) => {
    setIsExploreOpen(false);
    setIsMobileMenuOpen(false);

    if (tabId === 'home') {
      setActiveTab('home');
      router.push('/');
    }
    if (tabId === 'gallery') {
      setActiveTab('gallery');
      setIsExploreOpen(true);
    }
    if (tabId === 'calculator') {
      setActiveTab('calculator');
      router.push('/Calculator');
    }
    if (tabId === 'menu') {
      setActiveTab('menu');
      setIsMobileMenuOpen(true);
    }
  };

  const handleLetsBeginClick = () => router.push('/GetEstimate');

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-300 ease-out
        ${showNav ? "translate-y-0" : "translate-y-[180px]"}`}
      >
        <div className="relative w-[340px] h-[80px]">

          {/* Background pill */}
          <svg className="absolute inset-0 drop-shadow-md" width="340" height="68" viewBox="0 0 340 70">
            <defs>
              <mask id="cutoutMask">
                <rect width="340" height="68" fill="white" />
                <path d="M125,0 Q170,60 215,0 Z" fill="black" />
              </mask>
            </defs>
            <rect width="340" height="68" rx="40" fill="white" mask="url(#cutoutMask)" />
          </svg>


          {/* Floating red button */}
          <button
            onClick={handleLetsBeginClick}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#ef0101]
            text-white w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center
            shadow-xl text-sm leading-tight manrope-medium"
          >
            <span>Let&#39;s</span>
            <span>begin</span>
          </button>

          {/* Icons */}
          <div className="absolute inset-0 flex justify-between items-center px-8">
            <div className="flex gap-6">
              {navItems.slice(0, 2).map(item => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex flex-col items-center text-xs
                    ${item.id === 'gallery'
                      ? isExploreOpen ? 'text-red-600' : 'text-gray-700'
                      : activeTab === item.id ? 'text-red-600' : 'text-gray-700'
                    }`}
                >
                  {item.icon}
                  <span className="mt-1 manrope-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-6">
              {navItems.slice(2).map(item => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex flex-col items-center text-xs
                    ${activeTab === item.id ? 'text-red-600' : 'text-gray-700'}`}
                >
                  {item.icon}
                  <span className="mt-1 manrope-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Explore rooms bottom sheet */}

      {isExploreOpen && (
        <div
          className="
      fixed bottom-0 left-1/2
      w-[340px] min-w-[340px] max-w-[340px]
      bg-white/95 backdrop-blur-xl
      rounded-t-[25px] shadow-xl z-[999]
      animate-riseUp
      max-h-[75vh] overflow-y-auto
    "
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="p-5 relative text-black">

            {/* Close */}
            <button
              onClick={() => setIsExploreOpen(false)}
              className="absolute top-3 right-3 p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <h3 className="text-lg manrope mb-4">Explore Rooms</h3>

            {/* Options */}
            <div className="space-y-3">
              {exploreItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsExploreOpen(false);
                    router.push(item.path);
                  }}
                  className="block text-left w-full manrope-medium  text-gray-700 hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}



      {/* ==================== BOTTOM MENU SHEET ==================== */}
      {isMobileMenuOpen && (
        <div
          className="
      fixed bottom-0
      left-1/2 
      w-[340px] min-w-[340px] max-w-[340px]
bg-white/95 backdrop-blur-xl
      bg-white/95 backdrop-blur-xl
      rounded-t-[25px] shadow-xl z-[999]
      animate-riseUp
      max-h-[75vh] overflow-y-auto
    "
          style={{ transform: "translateX(-50%)" }} // Lock X transform
        >

          <div className="p-4 relative">

            {/* Close */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-3 right-3 text-gray-600 p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* MENU CONTENT */}
            <div className="space-y-6 mt-6">

              {/* OFFERINGS */}
              <div>
                <h3 className="text-base manrope mb-2">OFFERINGS</h3>
                <div className="space-y-2 pl-3 manrope-medium">
                  <Link href="/" className="block text-gray-700">Full Home Interior</Link>
                  <Link href="/" className="block text-gray-700">Modular Interior</Link>
                  <Link href="/" className="block text-gray-700">Home Renovation</Link>
                  <Link href="/" className="block text-gray-700">Space Management</Link>
                </div>
              </div>

              {/* EXPLORE */}
              <div>
                <h3 className="text-base manrope mb-3">EXPLORE ROOMS</h3>
                <div className="space-y-2 pl-3 manrope-medium">
                  <Link href="/ModularKitchen" className="block text-gray-700">Modular Kitchen</Link>
                  <Link href="/Bedroom" className="block text-gray-700">Bedroom</Link>
                  <Link href="/LivingRoom" className="block text-gray-700">Living Room</Link>
                  <Link href="/KidsRoom" className="block text-gray-700">Kids Room</Link>
                </div>
              </div>

              {/* MORE */}
              <div>
                <h3 className="text-base manrope mb-3">MORE</h3>
                <div className="space-y-2 pl-3 manrope-medium">
                  <Link href="/AboutUs" className="block text-gray-700">About Us</Link>
                  <Link href="/Project" className="block text-gray-700">Projects</Link>
                  <Link href="/Blog" className="block text-gray-700">Blog</Link>
                  <Link href="/ContactUs" className="block text-gray-700">Contact Us</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
  @keyframes riseUp {
    from {
      transform: translateX(-50%) translateY(100%);
    }
    to {
      transform: translateX(-50%) translateY(0%);
    }
  }

  .animate-riseUp {
    animation: riseUp 0.35s ease-out;
  }
`}</style>

    </>
  );
};

export default OverlapNavBar;
