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
            link: "/"
        },
        {
            title: "Modern Living",
            subtitle: "3 BHK",
            image: "/bed1.jpg",
            link: "/"
        },
        {
            title: "Contemporary Style",
            subtitle: "2 BHK",
            image: "/kids1.jpg",
            link: "/"
        },
        {
            title: "Luxury Design",
            subtitle: "4 BHK",
            image: "/1.png",
            link: "/"
        },
        {
            title: "Elegant Space",
            subtitle: "2 BHK",
            image: "/img5.jpg",
            link: "/"
        }
    ];

    const cardsPerView = 4;
    const maxSlide = Math.ceil(projects.length / cardsPerView) - 1;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
    };

    const nextMobileSlide = () => {
        setMobileSlide((prev) => (prev + 1) % projects.length);
    };

    const prevMobileSlide = () => {
        setMobileSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

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
        } else if (isRightSwipe) {
            prevMobileSlide();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div>

            <style jsx>{`
     /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        

         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }


         /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }


    `}</style>




            {/* Desktop Version */}


            {/* 2560 version  */}


            <div className="desktop-2560 hidden md:block bg-[#F1F2F6] min-h-[600px] -mt-30 px-85">
                <div className="max-w-8xl mx-auto">
                    {/* Header & Navigation */}
                    <div className="flex justify-between items-start mb-12">
                        <h1 className="typography-h1 wulkan-display-bold text-gray-800 text-nowrap max-w-md">
                            Recent interior design projects
                        </h1>
                       
                    </div>

                    {/* Carousel */}
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
                                        <div className="w-80 h-95 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
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

                    {/* CTA */}
                    <div className="flex justify-end gap-3 items-center mt-8">

                         <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <Link href="/Project">
                            <button className="manrope bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl shadow  hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                Explore all projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>





            {/* 1920 Version */}

            <div className="desktop-1920 hidden md:block bg-[#F1F2F6] min-h-[600px] -mt-25 px-20">
                <div className="max-w-8xl mx-auto">
                    {/* Header & Navigation */}
                    <div className="flex justify-between items-start mb-12">
                        <h1 className="typography-h1 wulkan-display-bold text-gray-800 text-nowrap max-w-md">
                            Recent interior design projects
                        </h1>
                    </div>



                    {/* Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex gap-6 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * (120 + 24)}px)`,
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

                    {/* CTA */}
                    <div className="flex justify-end gap-3 items-center mt-10">

                         <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>            


                        <Link href="/Project">
                            <button className="manrope bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow  hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                Explore all projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* 1280 Version */}

            <div className="desktop-1280 hidden md:block bg-[#F1F2F6] min-h-[600px] -mt-35 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header & Navigation */}
                    <div className="flex justify-between items-start mb-12">
                        <h1 className="typography-h1 wulkan-display-bold text-gray-800 text-nowrap max-w-md">
                            Recent interior design projects
                        </h1>
                        
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex gap-6 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * (450 + 4)}px)`,
                                    width: `${projects.length * (450 + 4)}px`
                                }}
                            >
                                {projects.map((project, index) => (
                                    <Link key={index} href={project.link} className="group flex-shrink-0">
                                        <div className="w-75 h-85 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
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

                     {/* CTA */}
                    <div className="flex justify-end items-center mt-8 gap-3">
                        <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/Project">
                            <button className="manrope bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl shadow  hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                Explore all projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <div className="bg-[#F1F2F6] py-8 px-4 w-full">
                    <div className="mb-8">
                        <div className="w-[2px] h-[33px] bg-[#ebd457] "></div>
                        <h1 className="typography-h2 wulkan-display-bold text-gray-800 text-left pl-3 -mt-8">
                            Recent interior design projects
                        </h1>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="relative overflow-hidden px-4">
                        <div
                            className="flex transition-transform duration-300 ease-out"
                            style={{
                                transform: `translateX(-${mobileSlide * 74}%)`,
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
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                                                <p className="text-white/80 text-sm">{project.subtitle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Indicators */}
                        <div className="flex justify-center mt-6 mb-2 gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMobileSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === mobileSlide
                                            ? 'bg-red-600 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-8">
                        <Link href="/Project">
                            <button className="manrope bg-red-600 text-white px-4 py-2 rounded-4xl  shadow  hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                Explore Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
