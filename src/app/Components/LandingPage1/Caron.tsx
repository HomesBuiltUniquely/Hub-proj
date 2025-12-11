
'use client'

import { useState, useEffect } from 'react';

export default function Section3() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollToForm = () => {
        const formElement = document.getElementById('hero-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const slides = [
        {
            img: "j1.webp",
            type: "Modern Contemporary Interior",

        },
        {
            img: "j2.webp",
            type: "Modern Aesthetic Interior",

        },
        {
            img: "j3.webp",
            type: "Wooden Traditional Interior",

        },
        {
            img: "j4.webp",
            type: "Art Deco Interior",

        },

    ];

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Card and container widths
    const cardWidth = 380;
    const gap = 1;

    return (
        <>
          <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
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


            {/* desktop */}

            {/* 2560 Version */}

            <div className="desktop-2560 hidden lg:block">
                <div className="flex w-full h-[680px] bg-[#f1f2f6] px-20">
                    <div className='w-full'>
                        <div className="text-[56px] mt-10 manrope leading-tight w-[490px]">Designs for Every <span className='text-red-600'>Preference</span></div>
                        <div className="mt-10">
                            <p className="text-[28px] tracking-wide manrope-medium">From sleek lines and minimal elegance to bold patterns, warm wooden finishes and luxurious detailing, our interiors achieve a seamless balance of modern charm, timeless tradition and artistic sophistication tailored to </p>
                            <p className="text-[28px] tracking-wide manrope-medium">every lifestyle.</p>
                            {/* <p className="text-[28px] tracking-wide">designed for comfort and elegance we</p>
                            <p className="text-[28px] tracking-wide">create spaces you&#39;ll love within your</p>
                            <p className="text-[28px] tracking-wide">budget</p> */}
                            <button
                                onClick={scrollToForm}
                                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
                            >
                                Book A Free Design Session
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-center">
                        {/* Slider container: 1.5 cards visible */}
                        <div
                            className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
                            style={{
                                width: `${slides.length * cardWidth + (slides.length - 1) * gap}px`,
                                transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                                >
                                    <img
                                        src={slide.img}
                                        alt=""
                                        className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                                    />
                                    <div className="row-span-2 mt-18 ml-5">
                                        <div className="text-[30px] manrope">{slide.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Overlay to create the half-card effect */}
                        
                         <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>

                    </div>
                </div>
            </div>


            {/* 1920 Version */}

             <div className="desktop-1920 hidden lg:block">
                <div className="flex w-full h-[680px] bg-[#f1f2f6] px-20">
                    <div className='w-full'>
                        <div className="text-[56px] mt-10 manrope leading-tight w-[490px]">Designs for Every <span className='text-red-600'>Preference</span></div>
                        <div className="mt-10">
                            <p className="text-[28px] tracking-wide manrope-medium">From sleek lines and minimal elegance to bold patterns, warm wooden finishes and luxurious detailing, our interiors achieve a seamless balance of modern charm, timeless tradition and artistic sophistication tailored to </p>
                            <p className="text-[28px] tracking-wide manrope-medium">every lifestyle.</p>
                            {/* <p className="text-[28px] tracking-wide">designed for comfort and elegance we</p>
                            <p className="text-[28px] tracking-wide">create spaces you&#39;ll love within your</p>
                            <p className="text-[28px] tracking-wide">budget</p> */}
                            <button
                                onClick={scrollToForm}
                                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
                            >
                                Book A Free Design Session
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-center">
                        {/* Slider container: 1.5 cards visible */}
                        <div
                            className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
                            style={{
                                width: `${slides.length * cardWidth + (slides.length - 1) * gap}px`,
                                transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                                >
                                    <img
                                        src={slide.img}
                                        alt=""
                                        className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                                    />
                                    <div className="row-span-2 mt-18 ml-5">
                                        <div className="text-[30px] manrope">{slide.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Overlay to create the half-card effect */}
                        
                         <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>

                    </div>
                </div>
            </div>


            {/* 1280 Version */}

             <div className="desktop-1280 hidden lg:block">
                <div className="flex w-full h-[680px] bg-[#f1f2f6] px-15">
                    <div className='w-full'>
                        <div className="text-[56px] mt-10 manrope leading-tight w-[490px]">Designs for Every <span className='text-red-600'>Preference</span></div>
                        <div className="mt-10">
                            <p className="text-[28px] tracking-wide manrope-medium">From sleek lines and minimal elegance to bold patterns, warm wooden finishes and luxurious detailing, our interiors achieve a seamless balance of modern charm, timeless tradition and artistic sophistication tailored to </p>
                            <p className="text-[28px] tracking-wide manrope-medium">every lifestyle.</p>
                            {/* <p className="text-[28px] tracking-wide">designed for comfort and elegance we</p>
                            <p className="text-[28px] tracking-wide">create spaces you&#39;ll love within your</p>
                            <p className="text-[28px] tracking-wide">budget</p> */}
                            <button
                                onClick={scrollToForm}
                                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
                            >
                                Book A Free Design Session
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-center">
                        {/* Slider container: 1.5 cards visible */}
                        <div
                            className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
                            style={{
                                width: `${slides.length * cardWidth + (slides.length - 1) * gap}px`,
                                transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                                >
                                    <img
                                        src={slide.img}
                                        alt=""
                                        className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                                    />
                                    <div className="row-span-2 mt-18 ml-5">
                                        <div className="text-[30px] manrope">{slide.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Overlay to create the half-card effect */}
                        
                         <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>

                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden w-[full] mx-auto max-h-[950px] bg-[#f1f2f6]">
                {/* Stacked Card Carousel */}

                <div className=''>
                    <div className="flex">
                       
                        <h1 className="text-4xl pl-5 pt-12 tracking-wide manrope-medium">Designs for Every <span className="text-red-600">Preference</span>
                        </h1>

                    </div>
                    <div className="manrope-medium ml-5 mt-4 w-[90%] sm:w-[85%] max-w-full">
                        <p>
                            From sleek minimalism to bold patterns and warm wooden finishes, our interiors balance modern charm, timeless tradition, and artistic sophistication for every lifestyle.
                        </p>
                    </div>



                    <div className="text-[56px] mt-10 ml-10 tracking-wide manrope-medium w-[400px]"></div>
                    <div className="ml-10 mt-10">

                        <div className="flex">

                        </div>

                        {/* <button 
                                onClick={scrollToForm}
                                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] font-bold rounded-full text-[20px] hover:bg-red-600 transition-colors"
                            >
                                Book A Free Design Session
                            </button> */}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className=" relative h-[400px] w-full max-w-[280px] manrope-medium ml-5">
                        {slides.map((slide, idx) => {
                            // Show only the top 3 cards in the stack for performance
                            const isTop = idx === currentSlide;
                            const isSecond = idx === (currentSlide + 1) % slides.length;
                            const isThird = idx === (currentSlide + 2) % slides.length;
                            const isFourth = idx === (currentSlide + 3) % slides.length;
                            const isFifth = idx === (currentSlide + 4) % slides.length;

                            if (!(isTop || isSecond || isThird || isFourth || isFifth)) return null;

                            let offset = 0;
                            let scale = 1;
                            let z = 5;
                            let opacity = 1;

                            if (isSecond) {
                                offset = 40;
                                scale = 0.95;
                                z = 4;
                                opacity = 1;
                            } else if (isThird) {
                                offset = 80;
                                scale = 0.9;
                                z = 3;
                                opacity = 1;
                            } else if (isFourth) {
                                offset = 120;
                                scale = 0.85;
                                z = 2;
                                opacity = 1;
                            } else if (isFifth) {
                                offset = 160;
                                scale = 0.8;
                                z = 1;
                                opacity = 1;
                            }

                            return (
                                <div
                                    key={idx}
                                    className="absolute left-1/2 top-0 w-[270px]  h-[410px] bg-white rounded-3xl shadow-lg flex-shrink-0 transform -translate-x-1/2 ml-20"
                                    style={{
                                        transform: `translateX(-${offset}px) scale(${scale})`,
                                        zIndex: z,
                                        opacity: opacity,
                                        transition: 'all 0.4s cubic-bezier(.4,2,.6,1)'
                                    }}
                                >
                                    <img
                                        src={slide.img}
                                        alt={slide.type}
                                        className="w-full h-[320px] object-cover rounded-t-3xl "
                                    />
                                    <div className="p-6">
                                        <div className="text-lg manrope text-[#3A2C19]">{slide.type}</div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}