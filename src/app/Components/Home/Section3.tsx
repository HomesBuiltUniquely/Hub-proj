'use client';

import Link from 'next/link';
import React, { useState, useRef } from 'react';

export default function Section3() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    
    const serviceCards = [
        {
            title: "Modular Interiors for Every Home",
            description: "Efficient layouts and space-saving designs crafted to fit kitchens, wardrobes, and storage — blending style with everyday functionality.",
            image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Kitchen5.jpg",
            link: "/GetEstimate",
            borderColor: ""
        },
        {
            title: "End-to-End Home Interior Solutions",
            description: "From concept to completion, we provide complete interior solutions — covering every room with design, execution, and finishing.",
            image: "/bed1.jpg",
            link: "/GetEstimate",
            borderColor: ""
        },
        {
            title: "Luxury Interiors Thoughtfully Crafted",
            description: "Luxury interiors thoughtfully built to balance modern design, comfort, and personal expression. elevating everyday lifestyle",
            image: "/bed4.jpg",
            link: "/GetEstimate",
            borderColor: ""
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % serviceCards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + serviceCards.length) % serviceCards.length);
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

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    
    return (
        <div>
            <div className="hidden lg:block bg-[#F1F2F6] h-auto pt-8 pb-20 px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-row justify-between items-center mb-12">
                        <h1 className="text-4xl wulkan-display-bold text-gray-800 ">All interior service, one destination</h1>
                        <a href="/GetEstimate">
                            <button className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium flex items-center gap-2">
                                Book consultation
                                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </a>
                    </div>

                    {/* Carousel Section */}
                    <div className="relative mt-20 mx-auto w-full max-w-[1300px] px-4">
                        {/* Navigation Controls */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -translate-x-1/2">
                            <button 
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 translate-x-1/2">
                            <button 
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Service Cards */}
                        <div className="overflow-hidden w-full -ml-2">
                            <div 
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${currentSlide * 33.33}%)`,
                                }}
                            >
                                {serviceCards.map((service, index) => (
                                    <div key={index} className="flex-shrink-0 w-104 ">
                                        <div className={`bg-white rounded-3xl overflow-hidden hover:shadow-xl duration-300 h-auto flex flex-col`}>
                                            <div className="relative h-96">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col text-center">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-4 manrope-semibold">{service.title}</h3>
                                                <p className="text-gray-600 mb-6 leading-relaxed manrope-medium flex-grow">{service.description}</p>
                                                <a href={service.link} className="mt-auto block">
                                                    <button className="w-full bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium">
                                                        Request service
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {serviceCards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-[#ddcdc1]' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
        {/* Mobile Overlapping Carousel */}
        <div className="block md:hidden bg-[#F1F2F6] py-12">
            <h1 className="text-3xl sm:text-3xl wulkan-display-bold text-left px-5 -mt-5 pl-8">All Interior Service, One Destination</h1>
            
            <div className="relative px-4 pt-8">
                <div 
                    className="flex gap-4 transition-transform duration-300 ease-out py-8 overflow-visible"
                    style={{ transform: `translateX(-${currentSlide * 60}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {serviceCards.map((service, index) => (
                        <div key={index} className="flex-shrink-0 w-[60%] relative">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-auto flex flex-col">
                                <div className="relative h-48">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 manrope-semibold">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed manrope-medium flex-grow">{service.description}</p>
                                    <a href={service.link} className="mt-auto">
                                        <button className="w-full bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-2xl font-semibold text-sm manrope-medium">
                                            Request service
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 bg-[#ddcdc1] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                <span className="text-black font-bold text-sm">{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Mobile Dot Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {serviceCards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-[#ddcdc1]' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}