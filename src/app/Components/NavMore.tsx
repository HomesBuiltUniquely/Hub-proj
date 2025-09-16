'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface OfferingsDropdownProps {
  textColor?: string;
  className?: string;
}

const NavMore: React.FC<OfferingsDropdownProps> = ({ 
  textColor = "text-amber-950", 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const offerings = [
   {'title':'About Us',
    link:'/AboutUs'}, 
    {'title':'Career',
    link:'/Career'},
    { 'title':'Contact Us',
    link:'/ContactUs'},
    { 'title':'Privacy Policy',
    link:'/Policy'},
    { 'title':'Life At HUB',
    link:'/Life@Hub'},
   { 'title':'Franchise',
    link:'/interior-design-franchise'},
  ];


  return (
    <div 
    className="relative" 
    ref={dropdownRef}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:text-[#ebd457] font-medium transition-colors py-4 text-xm manrope ${textColor} ${className}`}
      >
       MORE
      </button>

      {isOpen && (
              <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[600px] bg-white rounded-4xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
 
            {/* Left Section - Offerings List */}
            <div className="w-full lg:w-full p-6 lg:p-8 bg-gray-50">
              <ul className="space-y-3 grid grid-cols-3 gap-4">
                {offerings.map((offering, index) => (
                  <li key={index}>
                    <button className="text-left text-gray-700 hover:text-[#DDCCC1] transition-colors w-full text-sm">
                      <Link href={offering.link}>{offering.title}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      )}
    </div>
  );
};

export default NavMore;
