'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const OverlapNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const router = useRouter();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-[50px] h-[25px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: (
        <svg className="w-[50px] h-[25px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'calculator',
      label: 'Calculator',
      icon: (
        <svg className="w-[50px] h-[25px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: (
        <svg className="w-[50px] h-[25px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Navigating to: ${tabId}`);

    // Navigate when home is clicked
    if (tabId === 'home') {
      router.push('/');
    }

    // Fixed: toggle mobile menu when menu icon is clicked
    if (tabId === 'menu') {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    if (tabId === 'gallery') {
      router.push("/ModularKitchen");
    }
  };

  const handleLetsBeginClick = () => {
    router.push('/GetEstimate');

  };

  // Close on Escape for accessibility
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', onKey);
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Main White Pill-Shaped Navigation Bar */}
        <div className={`bg-white w-[340px] h-[60px] rounded-full px-5 py-4 shadow-lg flex items-center justify-between relative transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Home Icon */}
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center p-2 transition-colors duration-200 ${activeTab === 'home' ? 'text-red-600' : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            {navItems[0].icon}
            <span className="text-[10px] mt-1">{navItems[0].label}</span>
          </button>

          {/* Gallery Icon */}
          <button
            onClick={() => handleTabClick('gallery')}
            className={`flex flex-col items-center p-2 transition-colors duration-200 ${activeTab === 'gallery' ? 'text-red-600' : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            {navItems[1].icon}
            <span className="text-[10px] mt-1">{navItems[1].label}</span>
          </button>

          {/* Spacer under the red button to push icons away */}
          <div className="pointer-events-none w-20" aria-hidden="true"></div>

          {/* Calculator Icon */}
          <button
            onClick={() => handleTabClick('calculator')}
            className={`flex flex-col items-center p-2 transition-colors duration-200 ${activeTab === 'calculator' ? 'text-red-600' : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            {navItems[2].icon}
            <span className="text-[10px] mt-1">{navItems[2].label}</span>
          </button>

          {/* Menu Icon */}
          <button
            onClick={() => handleTabClick('menu')}
            className={`flex flex-col items-center p-2 transition-colors duration-200 ${activeTab === 'menu' ? 'text-red-600' : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            {navItems[3].icon}
            <span className="text-[10px] mt-1">{navItems[3].label}</span>
          </button>
        </div>


        {/* Mobile Navigation Menu - Bottom Sheet */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Bottom sheet panel */}
            <div
              className="relative w-full bg-white rounded-t-[28px] shadow-2xl h-[85vh] overflow-y-auto"
              onTouchStart={(e) => setTouchStartY(e.touches[0].clientY)}
              onTouchMove={(e) => {
                if (touchStartY == null) return;
                const deltaY = e.touches[0].clientY - touchStartY;
                if (deltaY > 70) {
                  setIsMobileMenuOpen(false);
                  setTouchStartY(null);
                }
              }}
              onTouchEnd={() => setTouchStartY(null)}
            >
              {/* Drag handle */}
              <div
                className="mx-auto mt-2 mb-3 h-1.5 w-12 rounded-full bg-gray-300"
                aria-label="Drag handle"
              ></div>

              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-3 right-4 text-gray-600 p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Items */}
              <div className="p-6 space-y-6 pb-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">OFFERINGS</h3>
                  <div className="space-y-2 pl-4">
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Full Home Interior</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Interior</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Home Renovation</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Space Management</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">EXPLORE ROOMS</h3>
                  <div className="space-y-2 pl-4">
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Kitchen</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Bedroom</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Living Room</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Kids Room</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">MORE</h3>
                  <div className="space-y-2 pl-4">
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">About Us</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Projects</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Blog</p>
                    <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Contact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Red Circular Button - Overlapping the white bar */}
        <button
          onClick={handleLetsBeginClick}
          className={` -mt-6 manrope-medium bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-[10px] transition-colors duration-200 absolute left-1/2 transform -translate-x-1/2 -top-2 shadow-lg ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span>Let&#39;s</span>
          <span>begin</span>


        </button>
      </div>
    </div>
  );
};

export default OverlapNavBar;
