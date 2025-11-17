'use client';

import Link from 'next/link';
import React, { useState, useRef } from 'react';
// ...existing code...

// Note: Replaced Next.js specific imports with standard tags for compatibility.
// import Link from "next/link";
// import Image from 'next/image';

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
        const isLeftSwipe = distance > 50; // Swiping left (next)
        const isRightSwipe = distance < -50; // Swiping right (previous)

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };


    return (
        <div>
            <style jsx>{`
     /* Hide both by default */
        .desktop-1280,
        .desktop-1440,
        .desktop-1920 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout for large desktops (>=1440px) */
        @media (width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }

          /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1441px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

    `}</style>


            <div className="desktop-1920 hidden lg:block bg-[#F1F2F6] h-auto pt-8 pb-20 px-5">
                <div className="max-w-8xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-row justify-between items-center mb-8">
                        <h1 className="text-5xl wulkan-display-bold text-gray-800 ">All interior service, one destination</h1>
                        <a href="/GetEstimate">
                            <button className="bg-[#ddcdc1] hover:bg-[#ebd457]  text-black px-4 py-2 rounded-4xl font-semibold  shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium flex items-center gap-2">
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
                    <div className="relative mt-15 mx-auto w-full ">
                        {/* Navigation Controls */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -translate-x-1/2">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors ml-3"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 translate-x-1/2">
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors mr-3"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Service Cards */}
                        <div className="overflow-hidden w-[full] ml-1">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * (10 / serviceCards.length)}%)`,
                                }}
                            >
                                {serviceCards.map((service, index) => (
                                    <div key={index} className="flex-shrink-0 w-120 ">
                                        <div className={`bg-white rounded-3xl overflow-hidden hover:shadow-xl duration-300 h-auto flex flex-col`}>
                                            <div className="relative h-96">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover "
                                                />
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col text-center">
                                                <h3 className="text-2xl  text-gray-800 mb-4 manrope text-nowrap">{service.title}</h3>
                                                <p className="text-gray-600 mb-6 leading-relaxed manrope-medium flex-grow">{service.description}</p>
                                                <a href={service.link} className="mt-auto block">
                                                    <button className="w-full bg-[#ddcdc1] hover:bg-[#ebd457]  text-black px-4 py-2 rounded-4xl  shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium">
                                                        Request service
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1440 version */}
            <div className="desktop-1440 hidden lg:block bg-[#F1F2F6] h-auto pt-8 pb-20 px-6">
                <div className="max-w-8xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-row justify-between items-center mb-12">
                        <h1 className="text-5xl wulkan-display-bold text-gray-800 ">All interior service, one destination</h1>
                        <a href="/GetEstimate">
                            <button className="bg-[#ddcdc1] hover:bg-[#ebd457]  text-black px-4 py-2 rounded-4xl  shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium flex items-center gap-2">
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
                    <div className="relative mt-10 mx-auto w-[1400px]">
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
                                className="w-12 h-12 mr-3 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Service Cards */}

                        <div className="overflow-hidden w-[1400px]">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * (1 / serviceCards.length)}%)`,
                                }}
                            >
                                {serviceCards.map((service, index) => (
                                    <div key={index} className="flex-shrink-0 w-[455px]">

                                        <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl duration-300 flex flex-col">

                                            {/* Image */}
                                            <div className="relative h-96">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content with fixed height */}
                                            <div className="p-8 flex flex-col text-center h-[260px]">

                                                <h3 className="text-2xl font-bold text-gray-800 mb-4 manrope-semibold">
                                                    {service.title}
                                                </h3>

                                                {/* Description auto grows, but limited inside container */}
                                                <p className="text-gray-600 leading-relaxed manrope-medium flex-grow overflow-hidden">
                                                    {service.description}
                                                </p>

                                                {/* Button at bottom ALWAYS */}
                                                <a href={service.link} className="mt-auto block pt-6">
                                                    <button className="w-full bg-[#ddcdc1] hover:bg-[#ebd457] text-black px-4 py-2 rounded-4xl font-semibold shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200">
                                                        Request service
                                                    </button>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* 1280 version */}
            <div className='desktop-1280'>

                <div className="hidden lg:block bg-[#F1F2F6] h-auto pt-8 pb-20 px-2">
                    <div className="max-w-[1280px] mx-auto">
                        {/* Header Section */}
                        <div className="flex flex-row justify-between items-center mb-10">
                            <h1 className="text-5xl leading-tight wulkan-display-bold text-gray-800 ml-2">
                                All interior service, one destination
                            </h1>
                            <a href="/GetEstimate">
                                <button className="bg-[#ddcdc1] hover:bg-[#ebd457] text-black px-4 py-2 rounded-4xl font-semibold shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium flex items-center gap-2 mr-5">
                                    Book consultation
                                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </a>
                        </div>

                        {/* Carousel Section */}
                        <div className="relative mt-16 mx-auto w-full max-w-[1240px]">
                            {/* Navigation Controls */}
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -translate-x-1/2">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-800"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 translate-x-1/2">
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-800"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Service Cards */}
                            <div className="overflow-hidden w-[1240px] mx-auto relative">

                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform:
                                            serviceCards.length > 3
                                                ? `translateX(-${currentSlide * 420}px)` // 400 card + 16 gap + 4 margin
                                                : "translateX(0)",
                                    }}


                                >
                                    {serviceCards.map((service, index) => (
                                        <div key={index} className="flex-shrink-0 w-[400px] ml-1">
                                            <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl duration-300  flex flex-col h-[650px]">
                                                <div className="relative h-[360px]">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-6 flex-1 flex flex-col text-center">
                                                    <h3 className="text-xl font-bold text-gray-800 mb-3 manrope-semibold">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-5 leading-relaxed manrope-medium flex-grow">
                                                        {service.description}
                                                    </p>
                                                    <a href={service.link} className="mt-auto block">
                                                        <button className="w-full bg-[#ddcdc1] hover:bg-[#ebd457] text-black px-4 py-2 rounded-4xl font-semibold shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope-medium">
                                                            Request service
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Mobile Overlapping Carousel */}
            <div className="block md:hidden bg-[#F1F2F6] py-10">
                <div className="w-[2px] h-[38px] bg-[#ebd457] ml-5"></div>
                <h1 className="text-3xl sm:text-3xl wulkan-display-bold text-left px-5 -mt-9 pl-8">All interior service, One destination</h1>

                <div
                    ref={carouselRef}
                    className="relative h-[560px] flex justify-center items-center -mt-10"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {serviceCards.map((service, index) => {
                        const totalCards = serviceCards.length;
                        let position = (index - currentSlide + totalCards) % totalCards;
                        if (position > totalCards / 2) {
                            position -= totalCards;
                        }

                        let zIndex = 0, transform = '', opacity = 0, scale = 0.8;

                        if (position === 0) {
                            zIndex = 30; transform = 'translateX(0px) translateY(-10px)'; scale = 0.9; opacity = 1;
                        } else if (position === -1 || position === totalCards - 1) {
                            zIndex = 20; transform = 'translateX(-50px) translateY(20px)'; scale = 0.9; opacity = 1;
                        } else if (position === -2 || position === totalCards - 2) {
                            // FIX: Reduced scale for the rearmost card
                            zIndex = 10; transform = 'translateX(-90px) translateY(50px)'; scale = 0.85; opacity = 1;
                        }

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-500 ease-in-out ml-20"
                                style={{ zIndex, transform: `${transform} scale(${scale})`, opacity }}
                            >
                                <a href={service.link} className="block">
                                    <div className="w-[260px] h-[420px] rounded-3xl overflow-hidden shadow-xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                                <h3 className="text-lg font-bold text-gray-800 mb-2 wulkan-display-bold">
                                                    {service.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 manrope-medium leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        );
                    })}
                </div>
                <div className="flex justify-center -mt-4 mb-5">
                    <Link href="/">
                        <button className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 manrope">
                            Explore Services
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}