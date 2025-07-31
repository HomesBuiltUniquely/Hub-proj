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
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.jpg",
            type: "4 BHK",
            price: "Starting @ 5.5L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//2.jpg",
            type: "3 BHK",
            price: "Starting @ 3.8L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//4.jpg",
            type: "2 BHK",
            price: "Starting @ 2.8L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1000064686.jpeg",
            type: "Modular Kitchen",
            price: "Starting @ 1.25L*"
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
    const gap = 96; 

    return (
        <>
            {/* desktop */}
            <div className="hidden lg:block">
                <div className="flex w-screen h-[680px] bg-[#f1f2f6]">
                    <div className='w-[850px]'>
                        <div className="text-[56px] mt-10 ml-10 tracking-wide manrope-medium w-[490px]">Homes For Every Budget</div>
                        <div className="ml-10 mt-10">
                            <p className="text-[28px] tracking-wide">Whether you dream of a stylish modular</p>
                            <p className="text-[28px] tracking-wide">kitchen or a stunning home interior </p>
                            <p className="text-[28px] tracking-wide">designed for comfort and elegance we</p>
                            <p className="text-[28px] tracking-wide">create spaces you&#39;ll love within your</p>
                            <p className="text-[28px] tracking-wide">budget</p>
                            <button 
                                onClick={scrollToForm}
                                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] font-bold rounded-full text-[20px] hover:bg-red-600 transition-colors"
                            >
                                Book A Free Design Session
                            </button>
                        </div>
                    </div>
                    <div className="w-[1200px] h-[720px] mt-18 ml-40 relative overflow-hidden flex items-center">
                        {/* Slider container: 1.5 cards visible */}
                        <div
                            className="flex gap-x-24 transition-transform duration-500 ease-in-out h-full"
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
                                        <div className="text-[30px] font-semibold">{slide.type}</div>
                                        <div className="mt-1 text-2xl manrope-medium">{slide.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Overlay to create the half-card effect */}
                        <div
                            className="pointer-events-none absolute top-0 right-0 h-full"
                            style={{ width: cardWidth / 4, background: '#f1f2f6' }}
                        />
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden w-full max-w-[400px] mx-auto max-h-[900px] bg-[#f1f2f6]">
                <div className="flex">
                    <div className="w-1 h-25 bg-amber-300 mt-10 ml-4"></div>
                    <h1 className="text-4xl pl-3 pt-12 tracking-wide manrope-medium">Homes For Every Budget</h1>
                </div>
                <div className="ml-5 mt-5">
                    <p>Whether you dream of a stylish modular kitchen or a
                       stunning home interior designed for comfort and
                       elegance we create spaces you&#39;ll love within your budget</p>
                </div>
                {/* Stacked Card Carousel */}
                <div className='flex justify-center'>
                  <div className="mt-10 relative h-[400px] w-full max-w-[280px]">
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
                                className="absolute left-1/2 top-0 w-full max-w-[260px] h-[410px] bg-white rounded-3xl shadow-lg flex-shrink-0 transform -translate-x-1/2 ml-20"
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
                                    className="w-full h-[300px] object-cover rounded-t-3xl "
                                />
                                <div className="p-6">
                                    <div className="text-2xl font-bold text-[#3A2C19] mb-2">{slide.type}</div>
                                    <div className="text-lg text-[#3A2C19]">{slide.price}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
                <button 
                    onClick={scrollToForm}
                    className='mt-20 mx-auto text-[16px] w-[250px] h-[50px] bg-red-500 px-auto text-white rounded-4xl font-bold hover:bg-red-600 ml-14 transition-colors'
                >
                    Book A Free Design Session
                </button>
            </div>
        </>
    )
}