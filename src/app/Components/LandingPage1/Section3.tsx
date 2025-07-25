'use client'

import { useState, useEffect } from 'react';

export default function Section3() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//3.jpg",
            type: "4 BHK",
            price: "Starting @ 5.5L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//2.jpg",
            type: "3 BHK",
            price: "Starting @ 4.5L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//4.jpg",
            type: "2 BHK",
            price: "Starting @ 3.5L*"
        },
        {
            img: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1.jpg",
            type: "2 BHK",
            price: "Starting @ 3.5L*"
        }
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
    const gap = 96; // px, for gap-x-24
    // const containerWidth = cardWidth + cardWidth / 2 + gap / 2; // 1.5 cards + half gap

    return (
        <>
            {/* desktop */}
            <div className="hidden lg:block">
                <div className="flex w-screen h-[680px] bg-[#f1f2f6]">
                    <div className='w-[850px]'>
                        <div className="text-[72px] mt-10 ml-10 tracking-wide manrope-medium w-[490px]">Homes For Every Budget</div>
                        <div className="ml-10 mt-10">
                            <p className="text-[28px] tracking-wide">Whether you dream of a stylish modular</p>
                            <p className="text-[28px] tracking-wide">kitchen or a stunning home interior </p>
                            <p className="text-[28px] tracking-wide">designed for comfort and elegance we</p>
                            <p className="text-[28px] tracking-wide">create spaces you&#39ll love within your</p>
                            <p className="text-[28px] tracking-wide">budget</p>
                            <button className="text-white bg-red-500 mt-12 w-[300px] h-[50px] font-bold rounded-full text-[20px]">Book A Free Design Session</button>
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
            <div className="lg:hidden w-screen min-h-[850px] bg-[#f1f2f6]">
                <div className="flex">
                    <div className="w-1 h-25 bg-amber-300 mt-10 ml-4"></div>
                    <h1 className="text-5xl pl-3 pt-10 tracking-wide font-light">Homes For Every Budget</h1>
                </div>
                <div className="ml-5 mt-5">
                    <div>Whether you dream of a stylish modular kitchen or a</div>
                    <div>stunning home interior designed for comfort and</div>
                    <div>elegance we create spaces you&#39ll love within your budget</div>
                </div>
                {/* Stacked Card Carousel */}
                <div className='flex'>
                <div className="w-1 h-30 bg-amber-300 mt-50 ml-5"></div>
                <div className="mt-10 px-4 relative h-[400px] w-full ml-40" style={{ maxWidth: 340 }}>
                    {slides.map((slide, idx) => {
                        // Show only the top 3 cards in the stack for performance
                        const isTop = idx === currentSlide;
                        const isSecond = idx === (currentSlide + 1) % slides.length;
                        const isThird = idx === (currentSlide + 2) % slides.length;
                        if (!(isTop || isSecond || isThird)) return null;
                        let offset = 0;
                        let scale = 1;
                        let z = 10;
                        let opacity = 1;
                        if (isSecond) {
                            offset = 50;
                            scale = 0.96;
                            z = 5;
                            opacity = 0.8;
                        } else if (isThird) {
                            offset = 100;
                            scale = 0.92;
                            z = 1;
                            opacity = 0.6;
                        }
                        return (
                            <div
                                key={idx}
                                className="absolute left-0 top-0 w-[320px] h-[420px] bg-white rounded-3xl shadow-lg flex-shrink-0"
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
                                    className="w-full h-[220px] object-cover rounded-t-3xl"
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
                <div className='mt-20 ml-20 w-[280px] h-[40px] bg-red-500 pt-2 pl-8 text-white rounded-4xl font-bold'>Book A Free Design Session</div>
            </div>
        </>
    )
}