'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const roomCards = [
        {
            title: "Kitchen",
            image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//kitchen6.jpg",
            link: "/ModularKitchen"
        },
        {
            title: "Kids Room", 
            image: "/kids2.jpg",
            link: "/Kids-Room"
        },
        {
            title: "BedRoom",
            image: "/bed3.jpg", 
            link: "/Bedroom"
        },
        {
            title: "Living Room",
            image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg", 
            link: "/LivingRoom"
        },
        {
            title: "Devotional Room",
            image: "/temple2.jpg", 
            link: "/Temple"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const maxSlide = Math.max(0, roomCards.length - 3);
            return prev < maxSlide ? prev + 1 : prev;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    // Auto-advance carousel for mobile
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % roomCards.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [roomCards.length]);

    return (
        <div>
        <div className="hidden md:block bg-[#F1F2F6] min-h-[580px] pt-14 pb-8 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    {/* Title */}
                    <div className="flex-1">
                        <h1 className="text-4xl wulkan-display-bold text-gray-800 mb-4">
                            Every space has a story, start yours here
                        </h1>
                    </div>
                    
                    {/* Book Consultation Button */}
                    <Link href="/ContactUs">
                        <button className="bg-[#DDCDC1] text-gray-800 px-6 py-3 rounded-full manrope-medium hover:bg-amber-300 transition-colors flex items-center gap-2">
                            Book consultation
                            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </Link>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    {/* Navigation Controls */}
                    <div className="flex gap-4 mb-8">
                        <button 
                            onClick={prevSlide}
                            className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Room Cards */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-8 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * (320 + 32)}px)`,
                                width: `${roomCards.length * (320 + 32)}px`
                            }}
                        >
                            {roomCards.map((room, index) => (
                                <Link key={index} href={room.link} className="group flex-shrink-0">
                                    <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <Image
                                            src={room.image}
                                            alt={room.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        
                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h3 className="text-white text-xl manrope mb-2">{room.title}</h3>
                                        </div>
                                        
                                        {/* Action Icon */}
                                        <div className="absolute bottom-6 right-6">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicator */}

                </div>

                {/* Bottom Section with Slider and Button */}
                <div className="flex justify-between items-center mt-8 gap-6">
                    {/* Progress Slider */}
                    <div className="flex items-center gap-4 flex-1 max-w-lg">
                        <div className="w-full h-1 bg-gray-300 rounded-full relative overflow-hidden">
                            <div 
                                className="h-1 bg-gray-600 rounded-full transition-all duration-300 absolute top-0 left-0"
                                style={{ 
                                    width: `${Math.min(100, ((currentSlide + 1) / Math.max(1, roomCards.length - 2)) * 100)}%` 
                                }}
                            />
                            <input
                                type="range"
                                min="0"
                                max={Math.max(0, roomCards.length - 3)}
                                value={currentSlide}
                                onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Explore Gallery Button */}
                    <Link href="/Inspiration">
                        <button className="bg-[#ddcdc1] text-gray-800 px-6 py-3 rounded-full manrope-medium hover:bg-amber-300 transition-colors flex-shrink-0">
                            Explore Gallery
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* Mobile Version - Carousel Card Design */}
        <div className="block md:hidden">
          <div className="bg-[#F1F2F6] py-8 px-4">
            {/* Mobile Title */}
            <div className="mb-8">
              <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-2">
                Every space has a story, start yours here
              </h1>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="relative w-[280px] h-[450px] mx-auto mt-10">
              {/* Card Stack - Show 3 cards stacked */}
              {roomCards.map((room, index) => {
                const isActive = index === currentSlide;
                const isNext = index === (currentSlide + 1) % roomCards.length;
                const isPrev = index === (currentSlide - 1 + roomCards.length) % roomCards.length;
                
                let zIndex = 0;
                let transform = '';
                let opacity = 0;
                
                if (isActive) {
                  zIndex = 30;
                  transform = 'translateX(0px) translateY(15px) scaleY(1.1)';
                  opacity = 1;
                } else if (isNext) {
                  zIndex = 20;
                  transform = 'translateX(25px) translateY(15px) scaleY(0.9)  scale(1.1)';
                  opacity = 1;
                } else if (isPrev) {
                  zIndex = 10;
                  transform = 'translateX(-25px) translateY(15px) scaleY(0.9) scale(1.1)';
                  opacity = 1;
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                    style={{
                      zIndex,
                      transform,
                      opacity
                    }}
                  >
                    <div className="relative h-full rounded-4xl overflow-hidden shadow-xl w-auto">
                      {/* Background Image */}
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Room Title - Only show on active card */}
                      {isActive && (
                        <div className="absolute bottom-7 left-6">
                          <h2 className="text-white text-2xl font-bold wulkan-display-bold">
                            {room.title}
                          </h2>
                        </div>
                      )}
                      
                      {/* Arrow Button - Only show on active card */}
                      {isActive && (
                        <Link href={room.link}>
                          <div className="absolute bottom-6 right-6">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explore Gallery Button */}
            <div className="flex justify-center mt-20">
              <Link href="/Inspiration">
                <button className="bg-[#ddcdc1] text-gray-800 px-8 py-3 rounded-full manrope-medium hover:bg-amber-300 transition-colors">
                  Explore Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
    );
}