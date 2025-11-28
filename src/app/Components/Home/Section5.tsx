'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/**
 * Safely extend global Window interface for our accumulator.
 * This avoids TS errors when we set/read window.__stepScrollAcc
 */
declare global {
    interface Window {
        __stepScrollAcc?: number;
    }
}

type Step = {
    title: string;
    description: string;
    image: string;
    icon: string;
};



type MobileLayoutProps = {
    steps: Step[];
    activeStep: number;
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
};

export default function Section5() {

    const [activeStep, setActiveStep] = useState<number>(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Refs used inside listeners
    const activeStepRef = useRef<number>(activeStep);
    const lockedRef = useRef<boolean>(false);
    const cooldownRef = useRef<boolean>(false);
    const sectionVisibleRef = useRef<boolean>(false);

    const BASE_THRESHOLD = 130;

    useEffect(() => {
        activeStepRef.current = activeStep;
    }, [activeStep]);

    const steps: Step[] = [
        {
            title: 'Meet our designers',
            description: 'Connect with our experts to share your ideas.',
            image: '/img3.jpg',
            icon: '/discussion.png',
        },
        {
            title: 'Get your quote',
            description: 'Receive a transparent estimate tailored to you.',
            image: '/bed1.jpg',
            icon: '/file.png',
        },
        {
            title: 'Customize your home',
            description: 'Pick layouts, finishes, and designs.',
            image: '/kids1.jpg',
            icon: '/home-repair.png',
        },
        {
            title: 'Hassle-free execution',
            description: 'Enjoy on-time delivery with quality assurance.',
            image: '/bed5.jpg',
            icon: '/execute.png',
        },
    ];

    /* ------------------------
       Mobile swipe handlers
       ------------------------ */
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (touchStart == null || touchEnd == null) {
            setTouchStart(null);
            setTouchEnd(null);
            return;
        }
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance && activeStep < steps.length - 1) {
            setActiveStep((s) => s + 1);
        }
        if (distance < -minSwipeDistance && activeStep > 0) {
            setActiveStep((s) => s - 1);
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    /* ------------------------
       IntersectionObserver -> section visible state
       ------------------------ */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionVisibleRef.current = entry.isIntersecting;

                    if (entry.isIntersecting) {
                        // When section enters viewport, lock and reset to first step
                        lockedRef.current = true;
                        activeStepRef.current = 0;
                        setActiveStep(0);
                        if (typeof window !== 'undefined') window.__stepScrollAcc = 0;
                    } else {
                        // When leaving viewport, unlock
                        lockedRef.current = false;
                        if (typeof window !== 'undefined') window.__stepScrollAcc = 0;
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* ------------------------
       Desktop wheel hijack (virtual scroll accumulator)
       ------------------------ */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        if (typeof window === 'undefined') return;

        // Only enable for desktop widths
        if (window.innerWidth < 1024) return;

        // initialize accumulator
        if (typeof window !== 'undefined' && typeof window.__stepScrollAcc === 'undefined') {
            window.__stepScrollAcc = 0;
        }

        const last = steps.length - 1;
        const CLAMP = 80;

        const handleWheel = (e: WheelEvent) => {
            // If not visible at all, bail and reset acc
            if (!sectionVisibleRef.current) {
                window.__stepScrollAcc = 0;
                lockedRef.current = false;
                return;
            }

            const rect = el.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // Require roughly center alignment to activate lock
            const isCentered = rect.top <= viewportH * 0.25 && rect.bottom >= viewportH * 0.75;
            if (!isCentered) {
                // Do not change stepping if not centered
                return;
            }

            lockedRef.current = true;

            // clamp delta to avoid huge spikes
            let delta = e.deltaY;
            delta = Math.max(-CLAMP, Math.min(CLAMP, delta));

            // allow exit if user actively tries to scroll out at boundaries
            if (activeStepRef.current === 0 && delta < 0) {
                lockedRef.current = false;
                window.__stepScrollAcc = 0;
                return;
            }
            if (activeStepRef.current === last && delta > 0) {
                lockedRef.current = false;
                window.__stepScrollAcc = 0;
                return;
            }

            // prevent native page scroll while processing
            e.preventDefault();

            if (cooldownRef.current) {
                window.__stepScrollAcc = (window.__stepScrollAcc || 0) + delta;
                return;
            }

            window.__stepScrollAcc = (window.__stepScrollAcc || 0) + delta;

            const dynamicThreshold = Math.max(BASE_THRESHOLD, Math.round(viewportH * 0.2));

            // Move down a step
            if (window.__stepScrollAcc > dynamicThreshold && activeStepRef.current < last) {
                window.__stepScrollAcc = 0;
                cooldownRef.current = true;
                setTimeout(() => (cooldownRef.current = false), 350);
                setActiveStep((s) => s + 1);
                return;
            }

            // Move up a step
            if (window.__stepScrollAcc < -dynamicThreshold && activeStepRef.current > 0) {
                window.__stepScrollAcc = 0;
                cooldownRef.current = true;
                setTimeout(() => (cooldownRef.current = false), 350);
                setActiveStep((s) => s - 1);
                return;
            }

            // keep accumulator bounded
            const cap = Math.max(BASE_THRESHOLD * 3, viewportH);
            if (window.__stepScrollAcc > cap) window.__stepScrollAcc = cap;
            if (window.__stepScrollAcc < -cap) window.__stepScrollAcc = -cap;
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (typeof window !== 'undefined') window.__stepScrollAcc = 0;
        };
    }, [steps.length]);

    /* ------------------------
       Escape key to unlock
       ------------------------ */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                lockedRef.current = false;
                if (typeof window !== 'undefined') window.__stepScrollAcc = 0;
            }
        };
        if (typeof window !== 'undefined') window.addEventListener('keydown', onKey);
        return () => {
            if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
        };
    }, []);

    return (
        <div>
            <style jsx>{`
                .desktop-1280,
                .desktop-1920,
                .desktop-2560 {
                    display: none !important;
                }

                @media (min-width: 1024px) and (max-width: 1439px) {
                    .desktop-1280 {
                        display: block !important;
                    }
                }
                @media (min-width: 1440px) and (max-width: 1920px) {
                    .desktop-1920 {
                        display: block !important;
                    }
                }
                @media (min-width: 1921px) {
                    .desktop-2560 {
                        display: block !important;
                    }
                }
            `}</style>

            {/* Desktop wrapper (single ref across breakpoints) */}
            <div ref={sectionRef} className="hidden md:block">
                <div className="desktop-2560">
                    <div className="bg-[#F1F2F6] min-h-[740px] -mt-10 px-85">
                        <div className="max-w-8xl mx-auto">
                            <h1 className="text-5xl mb-16 wulkan-display-bold text-gray-800">
                                Your dream space in just four steps
                            </h1>

                            <div className="flex gap-16 items-center">
                                <div className="w-1/2 space-y-12">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-6 relative">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center ${index <= activeStep ? 'bg-amber-950 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                                                    }`}
                                            >
                                                <Image src={step.icon} alt={step.title} width={25} height={25} />
                                            </div>

                                            <div className="pt-2 manrope-medium">
                                                <h3 className={`text-2xl ${index <= activeStep ? 'text-amber-950' : 'text-gray-500'}`}>{step.title}</h3>
                                                <p className={`text-lg ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'}`}>{step.description}</p>
                                            </div>

                                            {index < steps.length - 1 && (
                                                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                    <div className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'}`} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image src={steps[activeStep].image} alt={steps[activeStep].title} fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 1920 Version */}


                <div className="desktop-1920 ">
                    <div className="bg-[#F1F2F6] min-h-[740px] px-20 ">
                        <div className="max-w-8xl mx-auto">
                            <h1 className="text-5xl mb-16 wulkan-display-bold text-gray-800">
                                Your dream space in just four steps
                            </h1>

                            <div className="flex gap-16 items-center manrope-medium">
                                <div className="w-1/2 space-y-12">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-6 relative">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center ${index <= activeStep ? 'bg-amber-950 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                                                    }`}
                                            >
                                                <Image src={step.icon} alt={step.title} width={25} height={25} />
                                            </div>

                                            <div className="pt-2 manrope-medium">
                                                <h3 className={`text-2xl ${index <= activeStep ? 'text-amber-950' : 'text-gray-500'}`}>{step.title}</h3>
                                                <p className={`text-lg ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'}`}>{step.description}</p>
                                            </div>

                                            {index < steps.length - 1 && (
                                                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                    <div className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'}`} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image src={steps[activeStep].image} alt={steps[activeStep].title} fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1280 Version */}

                <div className="desktop-1280">
                    <div className="bg-[#F1F2F6] min-h-[740px] -mt-10 px-15">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-5xl mb-10 wulkan-display-bold text-gray-800">
                                Your dream space in just four steps
                            </h1>

                            <div className="flex gap-16 items-center">
                                <div className="w-1/2 space-y-12">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-6 relative manrope-medium">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center ${index <= activeStep ? 'bg-amber-950 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                                                    }`}
                                            >
                                                <Image src={step.icon} alt={step.title} width={25} height={25} />
                                            </div>

                                            <div className="pt-2 manrope-medium">
                                                <h3 className={`text-2xl ${index <= activeStep ? 'text-amber-950' : 'text-gray-500'}`}>{step.title}</h3>
                                                <p className={`text-lg ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'}`}>{step.description}</p>
                                            </div>

                                            {index < steps.length - 1 && (
                                                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                    <div className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'}`} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image src={steps[activeStep].image} alt={steps[activeStep].title} fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <MobileLayout
                steps={steps}
                activeStep={activeStep}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            />
        </div>
    );
}

/*
/* ------------------------
   Mobile layout component
   ------------------------ */
function MobileLayout({ steps, activeStep, onTouchStart, onTouchMove, onTouchEnd }: MobileLayoutProps) {

    return (
        <div className="block md:hidden bg-[#F1F2F6] py-5 px-4">
            <div className="mb-8">
                <div className="w-[2px] h-[33px] bg-[#ebd457]" />
                <h1 className="text-3xl wulkan-display-bold text-gray-800 ml-3 -mt-8">Your dream space in just four steps</h1>
            </div>

            <div className="relative overflow-hidden px-4 pt-5">
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(-${activeStep * 258}px)`,
                        touchAction: 'pan-y',
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {steps.map((step, index) => (
                        <div key={index} className="w-[260px] h-[270px] flex-shrink-0 px-2">
                            <div className="bg-white h-[240px] rounded-2xl p-6 shadow-sm border-2 border-[#ddcdc1] relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl manrope text-gray-800 text-center mt-8">{step.title}</h3>
                                <p className="text-gray-600 text-center manrope-medium leading-relaxed">{step.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
