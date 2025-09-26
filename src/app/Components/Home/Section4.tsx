'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            image: "/CUSTOMER2.jpg",
            quote: "Royal Tulip Villa — A Timeless Blend of Story, Elegance & Comfort by HUB Interior",
            name: "George Family – Royal Tulip Villa",
            avatar: "/CUSTOMER2.jpg"
        },
        {
            image: "/CUTOMER1.jpg",
            quote: "Warmth with Function — HUB Interior’s Soulful Home Design for Mr. Rijul at Azizam",
            name: "Mr. Rijul – Azizam Home",
            avatar: "/CUTOMER1.jpg"
        },
        {
            image: "/CUSTOMER3.jpg",
            quote: "A Peaceful Retreat — HUB Interior’s Modern Home Design for Mr. Allen & Mrs. Ann",
            name: " Mr. Allen & Mrs. Ann",
            avatar: "/Customer3.jpg"
        },
        {
            image: "/CUSTOMER4.jpg",
            quote: "Quiet Luxury, Thoughtful Living — Modern Home Interiors by HUB at Bhoo Aabharana",
            name: "Mr. Akhil – Bhoo Aabharana",
            avatar: "/Customer4.jpg"
        },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-play functionality for mobile only
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div>
        <div className="hidden md:block bg-[#F1F2F6] min-h-[650px] py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    <h1 className="text-4xl wulkan-display-bold text-gray-800 max-w-md">
                        Trusted by homeowners like you
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

                {/* Testimonial Carousel */}
                <div className="relative overflow-hidden mt-20">
                    <div className="flex gap-8 items-center max-w-7xl ">
                        {/* Left Side - Image */}
                        <div className="w-[500px]">
                            <div className="relative h-96 rounded-3xl overflow-hidden">
                                <Image
                                    src={testimonials[currentSlide].image}
                                    alt="Interior Design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Testimonial */}
                        <div className="w-[1000px] h-96 p-8 bg-[#ddcdc1] rounded-3xl flex flex-col justify-center">
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <svg className="w-12 h-16 text-[#32261c] ml-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 manrope-medium">
                            &#34;{testimonials[currentSlide].quote}&#34;
                            </blockquote>

                            {/* Customer Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonials[currentSlide].avatar}
                                        alt={testimonials[currentSlide].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div> 
                                    <h4 className="text-xl font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
        {/* Mobile Version - Card Design */}
        <div className="block md:hidden bg-[#F1F2F6] py-8 px-4 mt-4">
          {/* Mobile Title */}
          <div className="mb-8">
            <h1 className="text-4xl w-auto wulkan-display-bold text-gray-800 text-left pl-2">
              Trusted by homeowners like you
            </h1>
          </div>

          {/* Mobile Testimonial Cards */}
          <div className="space-y-6 w-[300px]  mx-auto rounded-4xl bg-[#ddcdc1]">
            {/* Image Card */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative w-[280px] h-80 rounded-4xl overflow-hidden shadow-xl mx-auto ">
                <Image
                  src={testimonials[currentSlide].image}
                  alt="Interior Design"
                  fill
                  className="object-cover mt-3 rounded-4xl"
                />
              </div>
            </div>

            {/* Testimonial Content Card */}
            <div className="bg-[#ddcdc1] rounded-3xl p-6  max-w-sm mx-auto">
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#32261c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 manrope-medium">
              &#34;{testimonials[currentSlide].quote}&#34;
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center mt-8 ml-50 gap-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
    </div>
    );
}