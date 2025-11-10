
'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const OverlapNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'gallery',
      label: 'Explore',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'calculator',
      label: 'Calculator',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'menu',
      label: 'More',
      icon: (
        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') router.push('/');
    if (tabId === 'gallery') router.push('/ModularKitchen');
  };

  const handleLetsBeginClick = () => router.push('/GetEstimate');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative w-[340px] h-[80px]">
        
        {/* ✅ White pill-shaped background with transparent curved notch */}
        <svg
          className="absolute inset-0 drop-shadow-md"
          width="340"
          height="68"
          viewBox="0 0 340 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="cutoutMask">
              <rect width="340" height="68" fill="white" />
              {/* smooth shallow curve matching 80px circle */}
              <path d="M125,0 Q170,60 215,0 Z" fill="black" />
            </mask>
          </defs>

          <rect
            width="340"
            height="68"
            rx="40"
            ry="40"
            fill="white"
            mask="url(#cutoutMask)"
          />
        </svg>

        {/* ✅ Floating red circle */}
        <button
          onClick={handleLetsBeginClick}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#e53935] hover:bg-[#d32f2f] text-white w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center shadow-xl text-sm manrope-medium leading-tight"
        >
          <span>Let's</span>
          <span>begin</span>
        </button>

        {/* ✅ Icon set (nav items) */}
        <div className="absolute inset-0 flex justify-between items-center px-8">
          {/* Left icons */}
          <div className="flex gap-6">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center text-xs transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'text-red-600 manrope-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span className="mt-1 manrope-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex gap-6">
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center text-xs transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'text-red-600 manrope-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span className="mt-1 manrope-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlapNavBar;



