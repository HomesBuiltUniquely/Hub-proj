'use client';

import React, { useState, useRef } from 'react';
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
            link: "/"
        },
        {
            title: "BedRoom",
            image: "/bed3.jpg",
            link: "/Bedroom"
        },
        {
            title: "Living Room",
            image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg",
            link: "/"
        },
        {
            title: "Devotional Room",
            image: "/temple2.jpg",
            link: "/"
        }
    ];

    // DESKTOP: 3 cards per view
    const desktopCardsPerView = 3;
    const desktopMaxSlide = Math.ceil(roomCards.length / desktopCardsPerView) - 1.5;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < desktopMaxSlide ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : desktopMaxSlide));
    };

    // MOBILE: 2 cards per view
    const mobileCardsPerView = 1;
    const mobileMaxSlide = Math.ceil(roomCards.length / mobileCardsPerView) - 1;

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
            setCurrentSlide((prev) => (prev < mobileMaxSlide ? prev + 1 : 0));
        }
        if (isRightSwipe) {
            setCurrentSlide((prev) => (prev > 0 ? prev - 1 : mobileMaxSlide));
        }
    };


    return (

        <div>

            <style jsx>{`
     /* Hide both by default */
        .desktop-1440,
        .desktop-1280,
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

            <div>
                {/* Desktop Carousel */}

                {/* desktop-1920 */}

                <div className="desktop-1920 hidden md:block bg-[#F1F2F6] min-h-[580px] pt-14 pb-8 ">
                    <div className="w-full mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8 px-5">
                            <div className="flex-1">
                                <h1 className="text-5xl wulkan-display-bold text-gray-800 mt-3 ">
                                    Every space has a story, start yours here
                                </h1>
                            </div>
                            <Link href="/GetEstimate">
                                <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 mt-5 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2">
                                    Book consultation
                                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>

                        {/* Carousel */}
                        <div className="relative px-5">
                            {/* Controls */}
                            <div className="flex gap-6 mb-8  mb-10">
                                <button onClick={prevSlide} className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={nextSlide} className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cards */}
                            <div className="overflow-hidden w-[full] ">
                                <div
                                    className="flex gap-5 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentSlide * (200)}px)`
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
                                                <div className="absolute bottom-0 left-0 p-6">
                                                    <h3 className="text-white text-xl manrope mb-2">{room.title}</h3>
                                                </div>
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
                        </div>

                        {/* Progress bar and gallery button */}
                        <div className="flex justify-between items-center mt-8 px-5 gap-6">
                            <div className="flex items-center gap-4 flex-1 max-w-lg">
                                <div className="w-full h-1 bg-gray-300 rounded-full relative overflow-hidden">
                                    <div
                                        className="h-1 bg-gray-600 rounded-full transition-all duration-300 absolute top-0 left-0"
                                        style={{
                                            width: `${Math.min(100, ((currentSlide + 1) / (desktopMaxSlide + 1)) * 100)}%`
                                        }}
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max={desktopMaxSlide}
                                        value={currentSlide}
                                        onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <Link href="/">
                                <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex-shrink-0">
                                    Explore Gallery
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* 1440 version */}

                <div className="desktop-1440  w- hidden md:block bg-[#F1F2F6] min-h-[580px] pt-14 pb-8 px-8">
                    <div className="max-w-8xl mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-12 mx-auto">
                            <div className="flex-1">
                                <h1 className="text-5xl wulkan-display-bold text-gray-800 mt-3 -ml-3">
                                    Every space has a story, start yours here
                                </h1>
                            </div>
                            <Link href="/GetEstimate">
                                <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] -mr-3 transition-colors text-black px-4 py-2 mt-5 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2">
                                    Book consultation
                                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>

                        {/* Carousel */}
                        <div className="relative ">
                            {/* Controls */}
                            <div className="flex gap-6 mb-8 -ml-3 mb-10">
                                <button onClick={prevSlide} className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={nextSlide} className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cards */}
                            <div className="overflow-hidden w-[1400px] mx-auto -ml-4">
                                <div
                                    className="flex gap-5 transition-transform duration-500 ease-in-out"
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
                                                <div className="absolute bottom-0 left-0 p-6">
                                                    <h3 className="text-white text-xl manrope mb-2">{room.title}</h3>
                                                </div>
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
                        </div>

                        {/* Progress bar and gallery button */}
                        <div className="flex justify-between items-center mt-8 gap-6">
                            <div className="flex items-center gap-4 flex-1 max-w-lg">
                                <div className="w-full h-1 bg-gray-300 rounded-full relative overflow-hidden">
                                    <div
                                        className="h-1 bg-gray-600 rounded-full transition-all duration-300 absolute top-0 left-0"
                                        style={{
                                            width: `${Math.min(100, ((currentSlide + 1) / (desktopMaxSlide + 1)) * 100)}%`
                                        }}
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max={desktopMaxSlide}
                                        value={currentSlide}
                                        onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <Link href="/">
                                <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex-shrink-0">
                                    Explore Gallery
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='desktop-1280'>

                    <div className="hidden md:block bg-[#F1F2F6] min-h-[560px] pt-12 pb-8 px-4">
                        <div className="max-w-[1280px] mx-auto">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="flex-1">
                                    <h1 className="text-5xl leading-tight wulkan-display-bold text-gray-800 mt-2">
                                        Every space has a story, start yours here
                                    </h1>
                                </div>
                                <Link href="/GetEstimate">
                                    <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 mt-4 rounded-4xl  shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex items-center gap-2">
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
                                </Link>
                            </div>

                            {/* Carousel */}
                            <div className="relative">
                                {/* Controls */}
                                <div className="flex gap-5 mb-8">
                                    <button
                                        onClick={prevSlide}
                                        className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4 text-gray-600"
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
                                    <button
                                        onClick={nextSlide}
                                        className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4 text-gray-600"
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

                                {/* Cards */}
                                <div className="overflow-hidden w-[1240px] ">
                                    <div
                                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentSlide * (300 + 28)}px)`,
                                        }}
                                    >
                                        {roomCards.map((room, index) => (
                                            <Link key={index} href={room.link} className="group flex-shrink-0">
                                                <div className="relative w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                    <Image
                                                        src={room.image}
                                                        alt={room.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute bottom-0 left-0 p-5">
                                                        <h3 className="text-white text-lg manrope mb-1">
                                                            {room.title}
                                                        </h3>
                                                    </div>
                                                    <div className="absolute bottom-5 right-5">
                                                        <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                            <svg
                                                                className="w-4 h-4 text-white"
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
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Progress bar and gallery button */}
                            <div className="flex justify-between items-center mt-8 gap-5">
                                <div className="flex items-center gap-4 flex-1 max-w-md">
                                    <div className="w-full h-1 bg-gray-300 rounded-full relative overflow-hidden">
                                        <div
                                            className="h-1 bg-gray-600 rounded-full transition-all duration-300 absolute top-0 left-0"
                                            style={{
                                                width: `${Math.min(
                                                    100,
                                                    ((currentSlide + 1) / (desktopMaxSlide + 1)) * 100
                                                )}%`,
                                            }}
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max={desktopMaxSlide}
                                            value={currentSlide}
                                            onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <Link href="/">
                                    <button className="manrope-medium bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl  shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex-shrink-0 mr-5">
                                        Explore Gallery
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>


                {/* Mobile Carousel */}
                <div className="block md:hidden">
                    <div className="bg-[#F1F2F6] py-8 px-4">
                        <div className="mb-8">
                            <div className="w-[2px] h-[38px] bg-[#ebd457] ml-"></div>
                            <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-4 -mt-9">
                                Every space has a story, <div className='text-3xl'>start yours here</div>
                            </h1>
                        </div>

                        <div
                            ref={carouselRef}
                            className="relative overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-300 ease-out gap-4"
                                style={{
                                    transform: `translateX(-${currentSlide * (280 + 16)}px)`
                                }}
                            >

                                {roomCards.map((room, index) => (
                                    <div key={index} className="flex-shrink-0 w-[295px]">
                                        <Link href={room.link} className="block">
                                            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl">
                                                <Image
                                                    src={room.image}
                                                    alt={room.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                                <div className="absolute bottom-6 left-6">
                                                    <h2 className="text-white text-xl font-bold wulkan-display-bold">
                                                        {room.title}
                                                    </h2>
                                                </div>
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

                            <div className="flex justify-center mt-6 gap-2">
                                {roomCards.slice(0, mobileMaxSlide + 1).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-800 w-8' : 'bg-gray-400'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Link href="/">
                                <button className="manrope-medium bg-[#ef0101] text-white px-8 py-3 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                    Explore Gallery
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
