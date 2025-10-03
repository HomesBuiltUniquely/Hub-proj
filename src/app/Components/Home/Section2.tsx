'use client';

import React, { useState, useRef } from 'react';
// ...existing code...
import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    
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
            return prev < maxSlide ? prev + 1 : 0; // loop to first when reaching the end
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            const maxSlide = Math.max(0, roomCards.length - 3);
            return prev > 0 ? prev - 1 : maxSlide; // loop to last when going backward from first
        });
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        // For mobile multi-card layout, we show 2.5 cards at a time
        const maxSlide = Math.max(0, roomCards.length - 2);
        
        if (isLeftSwipe) {
            setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
        }
        if (isRightSwipe) {
            setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
        }
    };

    // Auto-advance carousel for mobile - DISABLED (swipe-only)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const maxSlide = Math.max(0, roomCards.length - 2);
    //         setCurrentSlide((prev) => prev < maxSlide ? prev + 1 : 0);
    //     }, 3000); // Change slide every 3 seconds

    //     return () => clearInterval(interval);
    // }, [roomCards.length]);

    return (
        <div>
        <div className="hidden md:block bg-[#F1F2F6] min-h-[580px] pt-14 pb-8 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    {/* Title */}
                    <div className="flex-1">
                        <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-4">
                            Every space has a story, start yours here
                        </h1>
                    </div>
                    
                    {/* Book Consultation Button */}
                    <Link href="/GetEstimate">
                        <button className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2">
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
                                transform: `translateX(-${currentSlide * (320 + 32)}px)`
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
                    <Link href="/">
                        <button className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex-shrink-0">
                            Explore Gallery
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* Mobile Version - Multi-Card Swipeable Carousel */}
        <div className="block md:hidden">
          <div className="bg-[#F1F2F6] py-8 px-4">
            {/* Mobile Title */}
            <div className="mb-8">
              <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-4">
                Every space has a story, <div className='text-3xl'>start yours here</div>
              </h1>
            </div>

            {/* Multi-Card Carousel Container */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel Cards - Show 2.5 cards */}
              <div 
                className="flex transition-transform duration-300 ease-out gap-4"
                style={{ 
                  transform: `translateX(-${currentSlide * (280 + 16)}px)`
                }}
              >
                {roomCards.map((room, index) => (
                  <div key={index} className="flex-shrink-0 w-[280px]">
                    <Link href={room.link} className="block">
                      <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl">
                        {/* Background Image */}
                        <Image
                          src={room.image}
                          alt={room.title}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        
                        {/* Room Title */}
                        <div className="absolute bottom-6 left-6">
                          <h2 className="text-white text-xl font-bold wulkan-display-bold">
                            {room.title}
                          </h2>
                        </div>
                        
                        {/* Arrow Button */}
                        <div className="absolute bottom-6 right-6">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Swipe Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {roomCards.slice(0, Math.max(1, roomCards.length - 1)).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gray-800 w-8' 
                        : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Explore Gallery Button */}
            <div className="flex justify-center mt-8">
                            <Link href="/">
                                <button className="bg-[#ef0101] text-white px-8 py-3 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                    Explore Gallery
                                </button>
                            </Link>
            </div>
          </div>
        </div>
        </div>
    );
}