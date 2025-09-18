'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            image: "/img3.jpg",
            quote: "HUB turned our dream home into reality. Thoughtful design, smooth process HUB turned our dream home into reality. Thoughtful design, smooth process.",
            name: "George, Royal Tulip",
            avatar: "/1.png"
        },
        {
            image: "/bed1.jpg",
            quote: "Amazing work by HUB team. They understood our vision perfectly and delivered beyond expectations. Professional service throughout.",
            name: "Sarah, Green Valley",
            avatar: "/2.png"
        },
        {
            image: "/kids1.jpg",
            quote: "Outstanding interior design services. The attention to detail and quality of work exceeded our expectations completely.",
            name: "Michael, Downtown",
            avatar: "/3.png"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-[#F1F2F6] min-h-[650px] py-16 px-8">
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
                            <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                                "{testimonials[currentSlide].quote}"
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
                                    <h4 className="text-xl font-bold text-gray-800">{testimonials[currentSlide].name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
}