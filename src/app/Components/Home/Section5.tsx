'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Section5() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll logic refs
    const activeStepRef = useRef(0);
    const lockedRef = useRef(false);
    const cooldownRef = useRef(false);
    const sectionVisibleRef = useRef(false);

    const BASE_THRESHOLD = 130;

    useEffect(() => {
        activeStepRef.current = activeStep;
    }, [activeStep]);

    const steps = [
        {
            title: "Meet our designers",
            description: "Connect with our experts to share your ideas.",
            image: "/img3.jpg",
            icon: "/discussion.png",
        },
        {
            title: "Get your quote",
            description: "Receive a transparent estimate tailored to you.",
            image: "/bed1.jpg",
            icon: "/file.png",
        },
        {
            title: "Customize your home",
            description: "Pick layouts, finishes, and designs.",
            image: "/kids1.jpg",
            icon: "/home-repair.png",
        },
        {
            title: "Hassle-free execution",
            description: "Enjoy on-time delivery with quality assurance.",
            image: "/bed5.jpg",
            icon: "/execute.png",
        },
    ];

    /* ------------------------------------
       MOBILE: TOUCH SWIPE  
    ------------------------------------ */
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
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance && activeStep < steps.length - 1)
            setActiveStep((s) => s + 1);
        if (distance < -minSwipeDistance && activeStep > 0)
            setActiveStep((s) => s - 1);

        setTouchStart(null);
        setTouchEnd(null);
    };

    /* ------------------------------------
       SECTION VISIBILITY
    ------------------------------------ */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionVisibleRef.current = entry.isIntersecting;

                    if (entry.isIntersecting) {
                        lockedRef.current = true;
                        activeStepRef.current = 0;
                        setActiveStep(0);
                        (window as any).__stepScrollAcc = 0;
                    } else {
                        lockedRef.current = false;
                        (window as any).__stepScrollAcc = 0;
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* ------------------------------------
       DESKTOP SCROLL LOGIC
    ------------------------------------ */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        if (window.innerWidth < 1024) return;

        (window as any).__stepScrollAcc = 0;

        const last = steps.length - 1;

        const handleWheel = (e: WheelEvent) => {
            if (!sectionVisibleRef.current) return;

            const rect = el.getBoundingClientRect();
            const viewportH = window.innerHeight;
            const centered =
                rect.top <= viewportH * 0.25 &&
                rect.bottom >= viewportH * 0.75;

            if (!centered) return;

            lockedRef.current = true;

            let delta = e.deltaY;
            const CLAMP = 80;
            delta = Math.max(-CLAMP, Math.min(CLAMP, delta));

            if (activeStepRef.current === 0 && delta < 0) {
                lockedRef.current = false;
                return;
            }

            if (activeStepRef.current === last && delta > 0) {
                lockedRef.current = false;
                return;
            }

            e.preventDefault();

            if (cooldownRef.current) {
                (window as any).__stepScrollAcc += delta;
                return;
            }

            (window as any).__stepScrollAcc += delta;

            const threshold = Math.max(BASE_THRESHOLD, viewportH * 0.2);

            if ((window as any).__stepScrollAcc > threshold && activeStepRef.current < last) {
                (window as any).__stepScrollAcc = 0;
                cooldownRef.current = true;

                setTimeout(() => (cooldownRef.current = false), 350);
                setActiveStep((s) => s + 1);
                return;
            }

            if ((window as any).__stepScrollAcc < -threshold && activeStepRef.current > 0) {
                (window as any).__stepScrollAcc = 0;
                cooldownRef.current = true;

                setTimeout(() => (cooldownRef.current = false), 350);
                setActiveStep((s) => s - 1);
                return;
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [steps.length]);

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

            {/* DESKTOP */}
            <div ref={sectionRef} className="hidden md:block">
                {/* 2560 */}
                <div className="desktop-2560">
                    <DesktopLayout activeStep={activeStep} steps={steps} />
                </div>

                {/* 1920 */}
                <div className="desktop-1920">
                    <DesktopLayout activeStep={activeStep} steps={steps} />
                </div>

                {/* 1280 */}
                <div className="desktop-1280">
                    <DesktopLayout activeStep={activeStep} steps={steps} />
                </div>
            </div>

            {/* MOBILE */}
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

/* -----------------------------------------
   REUSABLE DESKTOP LAYOUT (cleaned)
----------------------------------------- */
function DesktopLayout({ activeStep, steps }: any) {
    return (
        <div className="bg-[#F1F2F6] min-h-[740px] py-10 px-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl mb-16 wulkan-display-bold text-gray-800">
                    Your dream space in just four steps
                </h1>

                <div className="flex gap-16 items-center">
                    <div className="w-1/2 space-y-12">
                        {steps.map((step: any, index: number) => (
                            <div key={index} className="flex items-start gap-6 relative">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${index <= activeStep
                                        ? "bg-[#32261c] text-white shadow-lg"
                                        : "bg-gray-300 text-gray-600"
                                    }`}>
                                    <Image src={step.icon} alt={step.title} width={25} height={25} />
                                </div>

                                <div className="pt-2">
                                    <h3 className={`text-2xl ${index <= activeStep ? "text-gray-800" : "text-gray-500"}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-lg ${index <= activeStep ? "text-gray-600" : "text-gray-400"}`}>
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                        <div
                                            className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? "h-full" : "h-0"
                                                }`}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={steps[activeStep].image}
                                alt={steps[activeStep].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* -----------------------------------------
   MOBILE LAYOUT
----------------------------------------- */
function MobileLayout({ steps, activeStep, onTouchStart, onTouchMove, onTouchEnd }: any) {
    return (
        <div className="block md:hidden bg-[#F1F2F6] py-5 px-4">
            <h1 className="text-3xl mb-8 wulkan-display-bold">
                Your dream space in just four steps
            </h1>

            <div className="relative overflow-hidden px-4 pt-5">
                <div
                    className="flex transition-transform duration-300"
                    style={{
                        transform: `translateX(-${activeStep * 258}px)`
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {steps.map((step: any, index: number) => (
                        <div key={index} className="w-[260px] flex-shrink-0 px-2">
                            <div className="bg-white h-[240px] rounded-2xl p-6 shadow-sm border-2 border-[#ddcdc1] relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-4 border-white">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl text-center mt-8">{step.title}</h3>
                                <p className="text-gray-600 text-center">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
