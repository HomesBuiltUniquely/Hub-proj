'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface OfferingsDropdownProps {
  textColor?: string;
  className?: string;
}

const ExploreRoomsDropdown: React.FC<OfferingsDropdownProps> = ({ 
  textColor = "text-amber-950", 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLockedOpen, setIsLockedOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLockedOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsLockedOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const offerings = [
    'Pooja Unit',
    'TV Unit',
    'Wardrobe Design',
    'Dining Room Design',
    'False Ceiling Design',
    'Wall Decor Design',
    'Study Room Design'
  ];

  const cards = [
    {
      title: 'Bedroom',
      image: '/img3.jpg',
      link: '/Bedroom'
    },
    {
      title: 'Kitchen',
      image: '/img5.jpg',
      link: '/ModularKitchen'
    },
    {
      title: 'Living Room',
      image: '/1.png',
      link: '/LivingRoom'
    },
    {
      title:'Kids Room',
      image: '/Slide.jpg',
      link: '/KidsRoom'
    }
  ];

  return (
    <div 
    className="relative" 
    ref={dropdownRef}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => { if (!isLockedOpen) setIsOpen(false); }}
  >
      <button
        onClick={() => {
          if (isLockedOpen) {
            setIsLockedOpen(false);
            setIsOpen(false);
          } else {
            setIsLockedOpen(true);
            setIsOpen(true);
          }
        }}
        className={`hover:text-[#edb457] font-medium transition-colors py-4 text-xm manrope ${textColor} ${className}`}
      >
        EXPLORE ROOMS
      </button>

      {isOpen && (
              <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] max-w-[800px] bg-white rounded-4xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => { if (!isLockedOpen) setIsOpen(false); }}
            >
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Offerings List */}
            
            {/* Right Section - Image Cards */}
              <div className="w-full lg:w-1/2 p-4 lg:p-6">
              <div className="grid grid-cols-2 gap-3 lg:gap-4 ">
                {cards.map((card, index) => (
                  <Link key={index} href={card.link} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                      <div className="relative h-24 lg:h-37">
                        <Image
                          src={card.image}
                          alt={card.title}
                            fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300 "
                        />
                      </div>
                      <h4 className="text-sm lg:text-[20px] font-medium text-white absolute top-0 ml-3 mt-4 manrope  ">{card.title}</h4>
                      <div className="p-2 lg:p-3 flex items-center justify-between absolute  bottom-0 right-0">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                          <svg className="w-2 h-2 lg:w-3 lg:h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>





            <div className="w-full lg:w-1/2 p-4 lg:p-4s bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore rooms</h3>
              <ul className="space-y-3">
                {offerings.map((offering, index) => (
                  <li key={index}>
                    <button className="text-left text-gray-700 hover:text-[#DDCCC1] transition-colors w-full text-sm manrope">
                      {offering}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreRoomsDropdown;
