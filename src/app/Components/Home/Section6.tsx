'use client';

import React, { useState } from 'react';
// ...existing code...
import Image from 'next/image';
import Link from 'next/link';

export default function Section6() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileSlide, setMobileSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    
    const projects = [
        {
            title: "Classic Minimal",
            subtitle: "2 BHK",
            image: "/img3.jpg",
            link: "/Project"
        },
        {
            title: "Modern Living",
            subtitle: "3 BHK", 
            image: "/bed1.jpg",
            link: "/Project"
        },
        {
            title: "Contemporary Style",
            subtitle: "2 BHK",
            image: "/kids1.jpg",
            link: "/Project"
        },
        {
            title: "Luxury Design",
            subtitle: "4 BHK",
            image: "/1.png",
            link: "/Project"
        },
        {
            title: "Elegant Space",
            subtitle: "2 BHK",
            image: "/img5.jpg",
            link: "/Project"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const maxSlide = Math.max(0, projects.length - 4);
            return prev < maxSlide ? prev + 1 : prev;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    // Mobile carousel functions
    const nextMobileSlide = () => {
        setMobileSlide((prev) => (prev + 1) % projects.length);
    };

    const prevMobileSlide = () => {
        setMobileSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Touch handlers for mobile carousel
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault();
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && mobileSlide < projects.length - 1) {
            nextMobileSlide();
        }
        if (isRightSwipe && mobileSlide > 0) {
            prevMobileSlide();
        }
        
        // Reset touch states
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div>
        <div className="hidden md:block bg-[#F1F2F6] min-h-[600px] py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    <h1 className="text-5xl wulkan-display-bold text-gray-800 max-w-md">
                        Recent Interior Design Projects
                    </h1>
                    
                    {/* Navigation Controls */}
                    <div className="flex gap-4">
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
                </div>

                {/* Project Cards Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * (280 + 24)}px)`,
                                width: `${projects.length * (280 + 24)}px`
                            }}
                        >
                            {projects.map((project, index) => (
                                <Link key={index} href={project.link} className="group flex-shrink-0">
                                    <div className="w-70 h-80 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        
                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                            <h3 className="text-white text-xl manrope mb-1">{project.title}</h3>
                                            <p className="text-white/80 text-sm manrope-medium">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-8">
                    {/* Explore All Projects Button */}
                    <Link href="/">
                        <button className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">Explore all projects</button>
                    </Link>
                </div>
            </div>
        </div>
        {/* Mobile Version - Swipeable Cards Design */}
        <div className="block md:hidden">
          <div className="bg-[#F1F2F6] py-8 px-4 w-full">
            {/* Mobile Title */}
            <div className="mb-8">
              <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-4">
                Recent Interior Design Projects
              </h1>
            </div>

            {/* Swipeable Cards Container */}
            <div className="relative overflow-hidden px-4">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(-${mobileSlide * 60}%)`,
                  touchAction: 'pan-y'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-[80%] flex-shrink-0 px-2">
                    <Link href={project.link} className="group">
                      <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                          <p className="text-white/80 text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 mb-2 gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === mobileSlide 
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Explore Projects Button */}
            <div className="flex justify-center mt-8">
                            <Link href="/">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">Explore Projects</button>
                            </Link>
            </div>
          </div>
        </div>
        </div>
    );
}