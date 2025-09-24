'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Section3() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const serviceCards = [
        {
            title: "Modular Interiors for Every Home",
            description: "Efficient layouts and space-saving designs crafted to fit kitchens, wardrobes, and storage — blending style with everyday functionality.",
            image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Kitchen5.jpg",
            link: "/Services",
            borderColor: ""
        },
        {
            title: "End-to-End Interior Solutions", 
            description: "From concept to completion, we provide complete interior solutions — covering every room with design, execution, and finishing under one roof.",
            image: "/bed1.jpg",
            link: "/Services",
            borderColor: ""
        },
        {
            title: "Luxury Interiors Thoughtfully Crafted",
            description: "Luxury interiors thoughtfully built to balance modern design, comfort, and personal expression. elevating everyday lifestyle",
            image: "/bed4.jpg",
            link: "/Services",
            borderColor: ""
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const totalSlides = Math.ceil(serviceCards.length / 3);
            return prev < totalSlides - 1 ? prev + 1 : prev;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    return (
        <div>
            <style jsx>{`
        /* Hide both sections by default on mobile */
        .desktop-1440,
        .desktop-1280 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }
      `}</style>
        <div className="desktop-1440 hidden md:block bg-[#F1F2F6] h-[1100px] pt-8 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-center mb-12">
                    <h1 className="text-4xl wulkan-display-bold text-gray-800">All Interior Service, One Destination</h1>
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
                <div className="relative mt-20 mx-auto">
                    {/* Navigation Controls */}
                    <div className="absolute left-0 top-[250px] transform -translate-y-1/2 z-10">
                        <button 
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors -ml-15 "
                        >
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute right-0 top-[250px] transform -translate-y-1/2 z-10 ">
                        <button 
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors -mr-10"
                        >
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Service Cards */}
                    <div className="overflow-hidden w-[1090px] ml-25">
                        <div 
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * 1000}px)`,
                                width: `${Math.ceil(serviceCards.length / 3) * 1000}px`
                            }}
                        >
                            {serviceCards.map((service, index) => (
                                <div key={index} className="flex-shrink-0 w-85">
                                    <div className={`bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300  ${service.borderColor} h-[490px] flex flex-col`}>
                                        {/* Image Section */}
                                        <div className="relative h-full flex-shrink-0">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        
                                        {/* Content Section */}

                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4 manrope-semibold text-center">{service.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-center w-[300px] manrope-medium">{service.description}</p>
                                            
                                            {/* Request Service Button */}
                                            <Link href={service.link}>
                                                <button className="w-full bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full manrope-medium hover:bg-gray-50 transition-colors mt-auto mx-auto">
                                                    Request service
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section with Slider */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Progress Slider */}
                        <div className="flex items-center gap-4 mt-3">
                            <div className="w-250 h-1 bg-gray-300 rounded-full relative">
                                <div 
                                    className="h-1 bg-gray-600 rounded-full transition-all duration-300"
                                    style={{ 
                                        width: `${((currentSlide + 1) / Math.max(1, Math.ceil(serviceCards.length / 3))) * 100}%` 
                                    }}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={Math.max(0, Math.ceil(serviceCards.length / 3) - 1)}
                                    value={currentSlide}
                                    onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>
                        <Link href="/Inspiration">
                        <button className="bg-[#ddcdc1] text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors">
                            View Services
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* 1280 version */}

        <div className="desktop-1280 hidden md:block bg-[#F1F2F6] h-[1100px] pt-8 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-center mb-12">
                    <h1 className="text-4xl wulkan-display-bold text-gray-800">All Interior Service, One Destination</h1>
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
                <div className="relative mt-16 mx-auto">
                    {/* Navigation Controls */}
                    <div className="absolute left-0 top-[250px] transform -translate-y-1/2 z-10">
                        <button 
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute right-0 top-[260px] transform -translate-y-1/2 z-10">
                        <button 
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors "
                        >
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Service Cards */}
                    <div className="overflow-hidden w-[1090px] ml-16">
                        <div 
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * 1000}px)`,
                                width: `${Math.ceil(serviceCards.length / 3) * 1000}px`
                            }}
                        >
                            {serviceCards.map((service, index) => (
                                <div key={index} className="flex-shrink-0 w-85">
                                    <div className={`bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300  ${service.borderColor} h-[490px] flex flex-col`}>
                                        {/* Image Section */}
                                        <div className="relative h-full flex-shrink-0">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        
                                        {/* Content Section */}

                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4 manrope-semibold text-center">{service.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-center w-[300px] manrope-medium">{service.description}</p>
                                            
                                            {/* Request Service Button */}
                                            <Link href={service.link}>
                                                <button className="w-full bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full manrope-medium hover:bg-gray-50 transition-colors mt-auto mx-auto">
                                                    Request service
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section with Slider */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Progress Slider */}
                        <div className="flex items-center gap-4 mt-3">
                            <div className="w-250 h-1 bg-gray-300 rounded-full relative">
                                <div 
                                    className="h-1 bg-gray-600 rounded-full transition-all duration-300"
                                    style={{ 
                                        width: `${((currentSlide + 1) / Math.max(1, Math.ceil(serviceCards.length / 3))) * 100}%` 
                                    }}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={Math.max(0, Math.ceil(serviceCards.length / 3) - 1)}
                                    value={currentSlide}
                                    onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>
                        <Link href="/Inspiration">
                        <button className="bg-[#ddcdc1] text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors">
                            View Services
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* mobile */}
        <div className="block md:hidden">

            <div className="w-auto bg-[#F1F2F6] text-left text-4xl wulkan-display-bold pt-10 pl-5">All Interior Service, One Destination</div>
           <div className="w-[300px] h-[450px] mt-10 rounded-4xl bg-[#F1F2F6] mx-auto relative" >
          <img className="w-full h-full object-cover rounded-4xl " src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Kitchen5.jpg"></img>
           <div className="absolute h-[180px] bottom-0 left-0 right-0 p-6 bg-black/40 rounded-4xl m-2">
           <div className="flex items-center gap-2">
           <div className="w-1 h-10 bg-[#ebd457]"></div>
           <div className="text-white text-xl wulkan-display-bold">Modular Interiors for Every Home</div>
           </div>
           <p className="text-white text-sm manrope-medium pt-2">Efficient layouts and space-saving designs crafted to fit kitchens, wardrobes, and storage — blending style with everyday functionality.</p>
           </div>
           </div>   
           <div className="w-[310px] h-[450px] mt-10 rounded-4xl bg-[#F1F2F6] mx-auto relative" >
          <img className="w-full h-full object-cover rounded-4xl " src="/bed1.jpg"></img>
           <div className="absolute h-[180px] bottom-0 left-0 right-0 p-5 bg-black/40 rounded-4xl m-2">
           <div className="flex items-center gap-2">
           <div className="w-1 h-10 bg-[#ebd457]"></div>
           <div className="text-white text-xl wulkan-display-bold">End-to-End Interior Solutions</div>
           </div>
           <p className="text-white text-sm manrope-medium">From concept to completion, we provide complete interior solutions — covering every room with design, execution, and finishing under one roof.</p>
           </div>
           </div>   
           <div className="w-[300px] h-[450px] mt-10 rounded-4xl bg-[#F1F2F6] mx-auto relative" >
          <img className="w-full h-full object-cover rounded-4xl " src="/bed4.jpg"></img>
           <div className="absolute h-[180px] bottom-0 left-0 right-0 p-6 bg-black/40 rounded-4xl m-2">
           <div className="flex items-center gap-2">
           <div className="w-1 h-10 bg-[#ebd457]"></div>
           <div className="text-white text-xl wulkan-display-bold">Luxury Interiors Thoughtfully Crafted</div>
           </div>
           <p className="text-white text-sm manrope-medium pt-2">Luxury interiors thoughtfully built to balance modern design, comfort, and personal expression. elevating everyday lifestyle</p>
           </div>
           </div>   
        </div>
    </div>
    )
}