'use client';

import React, { useState } from 'react';
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

        if (isLeftSwipe) {
            nextMobileSlide();
        }
        if (isRightSwipe) {
            prevMobileSlide();
        }
    };

    return (
        <div>
        <div className="hidden md:block bg-[#F1F2F6] min-h-[600px] py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    <h1 className="text-4xl wulkan-display-bold text-gray-800 max-w-md">
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
                                            <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                                            <p className="text-white/80 text-sm">{project.subtitle}</p>
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
                    <Link href="/Project">
                        <button className="bg-[#ddcdc1] text-gray-800 px-8 py-3 rounded-full manrope-medium hover:bg-amber-300 transition-colors">
                            Explore all projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* Mobile Version - Carousel */}
        <div className="block md:hidden">
          <div className="bg-[#F1F2F6] py-8 px-4 w-full">
            {/* Mobile Title */}
            <div className="mb-8">
              <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-2">
                Recent Interior Design Projects
              </h1>
            </div>

            {/* Mobile Carousel Container */}
            <div className="flex items-center gap-4">
              {/* Left Arrow - Outside */}
              <button 
                onClick={prevMobileSlide}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carousel Content */}
              <div 
                className="flex-1 relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Project Card */}
                <Link href={projects[mobileSlide].link} className="group">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                    <Image 
                      src={projects[mobileSlide].image} 
                      alt={projects[mobileSlide].title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold mb-1">{projects[mobileSlide].title}</h3>
                      <p className="text-white/80 text-sm">{projects[mobileSlide].subtitle}</p>
                    </div>
                  </div>
                </Link>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setMobileSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === mobileSlide 
                          ? 'bg-gray-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Arrow - Outside */}
              <button 
                onClick={nextMobileSlide}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Explore All Projects Button */}
            <div className="flex justify-center mt-8">
              <Link href="/Project">
                <button className="bg-[#ddcdc1] text-gray-800 px-8 py-3 rounded-full manrope-medium hover:bg-amber-300 transition-colors">
                  Explore all projects
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
    );
}