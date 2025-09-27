'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface OfferingsDropdownProps {
  textColor?: string;
  className?: string;
  showForm?: boolean;
}

const OfferingsDropdown: React.FC<OfferingsDropdownProps> = ({ 
  textColor = "text-amber-950", 
  className = "",
  showForm = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // When true, dropdown remains open regardless of mouse leave until toggled or closed via outside/Esc
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
    'Full Home Interior',
    'Modular Interior',
    'Home Renovation',
    'Space Management',
    'Fast Track',
    'Home Automations',
    'Home Interior Price Calculator'
  ];

  const cards = [
    {
      title: 'Project',
      image: '/img3.jpg',
      link: '/Project'
    },
    {
      title: 'Inspiration',
      image: '/img5.jpg',
      link: '/Inspiration'
    },
    {
      title: 'Customer Review',
      image: '/1.png',
      link: '/CustomerReviews'
    },
    {
      title: 'Blogs',
      image: '/Slide.jpg',
      link: '/Blog'
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
          // Toggle lock; opening if closed, closing if already locked
          if (isLockedOpen) {
            setIsLockedOpen(false);
            setIsOpen(false);
          } else {
            setIsLockedOpen(true);
            setIsOpen(true);
          }
        }}
        className={`hover:text-[#ebd457] font-medium transition-colors py-4 text-xm manrope ${textColor} ${className}`}
      >
        OFFERINGS
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[800px] bg-white rounded-4xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => { if (!isLockedOpen) setIsOpen(false); }}
        >
          {showForm ? (
            // Franchise Form Layout
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Details To Get Started</h3>
              
              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Name*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email Id*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone*</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Image Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card, index) => (
                  <Link key={index} href={card.link} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                      <div className="relative h-24 lg:h-32">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm lg:text-[20px] font-medium text-white absolute top-0 ml-3 mt-4 manrope">{card.title}</h4>
                      <div className="p-2 lg:p-3 flex items-center justify-between absolute bottom-0 right-0">
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
          ) : (
            // Regular Offerings Layout
            <div className="flex flex-col lg:flex-row">
              {/* Left Section - Offerings List */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Offerings</h3>
                <ul className="space-y-3">
                  {offerings.map((offering, index) => (
                    <li key={index}>
                      <button className="text-left text-gray-700 hover:text-[#DDCCC1] transition-colors w-full text-sm">
                        {offering}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Section - Image Cards */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8">
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
                        <h4 className="text-sm lg:text-[20px] font-medium text-white absolute top-0 ml-3 mt-4 manrope ">{card.title}</h4>
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OfferingsDropdown;
