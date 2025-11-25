'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Section5() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // uploaded video for reference:
    // /mnt/data/5ac35bb1-b206-4247-b0f3-bb160bcef81e.mp4

    // Refs for latest values inside event listeners
    const activeStepRef = useRef(activeStep);
    const lockedRef = useRef(false);
    const cooldownRef = useRef(false);
    const sectionVisibleRef = useRef(false);

    // Virtual accumulator threshold base (px)
    const BASE_THRESHOLD = 130; // your requested 130px

    useEffect(() => {
        activeStepRef.current = activeStep;
    }, [activeStep]);

    const steps = [
        {
            title: "Meet our designers",
            description: "Connect with our experts to share your ideas and vision.",
            image: "/img3.jpg",
            icon: "/discussion.png"
        },
        {
            title: "Get your quote",
            description: "Receive a transparent, personalized estimate tailored to your needs.",
            image: "/bed1.jpg",
            icon: "/file.png"
        },
        {
            title: "Customize your home",
            description: "Select layouts, finishes, and designs that reflect your personal style and lifestyle.",
            image: "/kids1.jpg",
            icon: "/home-repair.png"
        },
        {
            title: "Hassle-free execution",
            description: "Enjoy on-time delivery with quality assurance and end-to-end support.",
            image: "/bed5.jpg",
            icon: "/execute.png"
        }
    ];

    // TOUCH SWIPE handlers (for mobile swipe cards)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeStep < steps.length - 1) {
            setActiveStep((s) => Math.min(steps.length - 1, s + 1));
        }
        if (isRightSwipe && activeStep > 0) {
            setActiveStep((s) => Math.max(0, s - 1));
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // IntersectionObserver: when Section5 wrapper enters the viewport, activate lock and set step 0
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Section entered viewport -> start lock behavior
                        sectionVisibleRef.current = true;
                        // Activate first step immediately
                        setActiveStep(0);
                        activeStepRef.current = 0;
                        lockedRef.current = true;
                        // reset accumulator when section becomes visible
                        if (typeof window !== 'undefined') (window as any).__stepScrollAcc = 0;
                    } else {
                        // Section left viewport -> ensure unlocking
                        sectionVisibleRef.current = false;
                        lockedRef.current = false;
                        if (typeof window !== 'undefined') (window as any).__stepScrollAcc = 0;
                    }
                });
            },
            {
                // Trigger when section is at least partly visible
                threshold: 0.15
            }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Wheel handler that hijacks scroll while locked (applies to desktop only)
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
        if (!isDesktop) return; // prevent scroll hijack on mobile/tablet

        // initialize accumulator
        if (typeof window !== 'undefined' && !(window as any).__stepScrollAcc) {
            (window as any).__stepScrollAcc = 0;
        }

        const last = steps.length - 1;

        const handleWheel = (e: WheelEvent) => {
            // If Section5 wrapper is not visible at all, do nothing
            if (!sectionVisibleRef.current) {
                (window as any).__stepScrollAcc = 0;
                lockedRef.current = false;
                return;
            }

            const rect = el.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // Section locks ONLY when centered inside viewport
            const isCentered =
                rect.top <= viewportH * 0.25 &&
                rect.bottom >= viewportH * 0.75;

            // IMPORTANT: do NOT unlock just because section left center due to burst scroll.
            // Keep the lock active until user explicitly tries to exit at step boundaries.
            if (!isCentered) {
                // keep lock active, but don't process step-change based on center loss
                // This prevents fast scrolling from escaping the locked section.
                return;
            }

            // Centered → lock
            lockedRef.current = true;

            // Compute delta but clamp it to avoid huge inertia bursts
            let delta = e.deltaY;
            const CLAMP = 80; // clamp individual wheel delta to 80px per event
            if (delta > CLAMP) delta = CLAMP;
            if (delta < -CLAMP) delta = -CLAMP;

            // If trying to exit upward at step 0, unlock and reset accumulator only when actual exit intent (strong upward)
            if (activeStepRef.current === 0 && delta < 0) {
                // if user is at step 0 and actively scrolling up, allow exit
                lockedRef.current = false;
                (window as any).__stepScrollAcc = 0;
                // allow native scroll by not preventing default
                return;
            }

            // If trying to exit downward after last step, unlock and reset accumulator only when actual exit intent (strong downward)
            if (activeStepRef.current === last && delta > 0) {
                lockedRef.current = false;
                (window as any).__stepScrollAcc = 0;
                return;
            }

            // Prevent page scroll while we accumulate virtual scroll
            e.preventDefault();

            // If cooldown is active, still accumulate but ignore triggers
            if (cooldownRef.current) {
                (window as any).__stepScrollAcc += delta;
                // bound accumulator
                const cap = Math.max(BASE_THRESHOLD * 3, viewportH); // allow larger cap on big viewports
                if ((window as any).__stepScrollAcc > cap) (window as any).__stepScrollAcc = cap;
                if ((window as any).__stepScrollAcc < -cap) (window as any).__stepScrollAcc = -cap;
                return;
            }

            // Accumulate wheel deltas (virtual scroll)
            (window as any).__stepScrollAcc += delta;

            // Determine dynamic threshold: require either BASE_THRESHOLD px OR 20% of viewport height, whichever is larger
            const dynamicThreshold = Math.max(BASE_THRESHOLD, Math.round(viewportH * 0.20));

            // Down movement
            if ((window as any).__stepScrollAcc > dynamicThreshold && activeStepRef.current < last) {
                // reset accumulator before changing step
                (window as any).__stepScrollAcc = 0;

                // set cooldown to avoid double triggers
                cooldownRef.current = true;
                setTimeout(() => {
                    cooldownRef.current = false;
                }, 350); // longer cooldown for fast-scroll protection

                setActiveStep((s) => Math.min(last, s + 1));
                return;
            }

            // Up movement
            if ((window as any).__stepScrollAcc < -dynamicThreshold && activeStepRef.current > 0) {
                (window as any).__stepScrollAcc = 0;

                cooldownRef.current = true;
                setTimeout(() => {
                    cooldownRef.current = false;
                }, 350);

                setActiveStep((s) => Math.max(0, s - 1));
                return;
            }

            // keep accumulator bounded so it doesn't grow indefinitely
            const cap = Math.max(BASE_THRESHOLD * 3, viewportH);
            if ((window as any).__stepScrollAcc > cap) (window as any).__stepScrollAcc = cap;
            if ((window as any).__stepScrollAcc < -cap) (window as any).__stepScrollAcc = -cap;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            // reset accumulator on cleanup
            if (typeof window !== 'undefined') (window as any).__stepScrollAcc = 0;
        };
    }, [steps.length]);

    // Optional: keyboard escape to unlock
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                lockedRef.current = false;
                if (typeof window !== 'undefined') (window as any).__stepScrollAcc = 0;
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

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
                @media (min-width: 1440px) and (max-width: 1920px) {
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

            {/* DESKTOP WRAPPER (single ref for all desktop breakpoints) */}
            <div ref={sectionRef} className="hidden md:block">

                {/* 2560 Version */}
                <div className='desktop-2560'>
                    <div className="bg-[#F1F2F6] min-h-[740px] py-10 px-85">
                        <div className="max-w-8xl mx-auto -mt-5">
                            {/* Header */}
                            <div className="mb-16">
                                <h1 className="text-5xl wulkan-display-bold text-gray-800 max-w-md">
                                    Your dream space in just four steps
                                </h1>
                            </div>

                            {/* Main Content */}
                            <div className="flex gap-16 items-center">
                                {/* Left Side - Progress Steps */}
                                <div className="w-1/2 relative">
                                    <div className="space-y-12">
                                        {steps.map((step, index) => (
                                            <div key={index} className="flex items-start gap-6 relative">
                                                {/* Step Circle */}
                                                <div className="relative z-10">
                                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${index <= activeStep
                                                        ? 'bg-[#32261c] text-white shadow-lg'
                                                        : 'bg-gray-300 text-gray-600'
                                                        }`}>
                                                        <Image src={step.icon} alt={step.title} width={25} height={25} />
                                                    </div>
                                                </div>

                                                {/* Step Content */}
                                                <div className="flex-1 pt-2 ">
                                                    <h3 className={`text-2xl manrope mb-2 transition-colors duration-500 ${index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                                                        }`}>
                                                        {step.title}
                                                    </h3>
                                                    <p className={`text-lg manrope-medium leading-relaxed transition-colors duration-500 ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                                                        }`}>
                                                        {step.description}
                                                    </p>
                                                </div>

                                                {/* Connecting Line */}
                                                {index < steps.length - 1 && (
                                                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                        <div
                                                            className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'
                                                                }`}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="w-1/2 flex justify-end">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            fill
                                            className="object-cover transition-opacity duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1920 version */}
                <div className='desktop-1920 hidden'>
                    <div className="md:block bg-[#F1F2F6] min-h-[740px] py-10 mx-20">
                        <div className="max-w-8xl mx-auto -mt-5">
                            {/* Header */}
                            <div className="mb-16">
                                <h1 className="text-5xl wulkan-display-bold text-gray-800 max-w-md">
                                    Your dream space in just four steps
                                </h1>
                            </div>

                            {/* Main Content */}
                            <div className="flex gap-16 items-center">

                                {/* Left Side - Progress Steps */}
                                <div className="w-1/2 relative">
                                    <div className="space-y-12">

                                        {steps.map((step, index) => (
                                            <div
                                                key={index}
                                                className="step-item flex items-start gap-6 relative"
                                            >
                                                {/* Step Circle */}
                                                <div className="relative z-10">
                                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${index <= activeStep
                                                        ? 'bg-[#32261c] text-white shadow-lg'
                                                        : 'bg-gray-300 text-gray-600'
                                                        }`}>
                                                        <Image src={step.icon} alt={step.title} width={25} height={25} />
                                                    </div>
                                                </div>

                                                {/* Step Content */}
                                                <div className="flex-1 pt-2">
                                                    <h3 className={`text-2xl manrope mb-2 transition-colors duration-500 ${index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                                                        }`}>{step.title}</h3>
                                                    <p className={`text-lg manrope-medium leading-relaxed transition-colors duration-500 ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                                                        }`}>{step.description}</p>
                                                </div>

                                                {/* Connecting Line */}
                                                {index < steps.length - 1 && (
                                                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                        <div
                                                            className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'
                                                                }`}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="w-1/2 flex justify-end -mt-30 ">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            fill
                                            className="object-cover transition-opacity duration-500"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                {/* 1280 Version */}
                <div className='desktop-1280'>
                    <div className="hidden md:block bg-[#F1F2F6] min-h-[740px] py-10 px-8 -ml-3">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="mb-16">
                                <h1 className="text-5xl wulkan-display-bold text-gray-800 max-w-md">
                                    Your dream space in just four steps
                                </h1>
                            </div>

                            {/* Main Content */}
                            <div className="flex gap-16 items-center">
                                {/* Left Side - Progress Steps */}
                                <div className="w-1/2 relative">
                                    <div className="space-y-12">
                                        {steps.map((step, index) => (
                                            <div key={index} className="flex items-start gap-6 relative">
                                                {/* Step Circle */}
                                                <div className="relative z-10">
                                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${index <= activeStep
                                                        ? 'bg-[#32261c] text-white shadow-lg'
                                                        : 'bg-gray-300 text-gray-600'
                                                        }`}>
                                                        <Image src={step.icon} alt={step.title} width={25} height={25} />
                                                    </div>
                                                </div>

                                                {/* Step Content */}
                                                <div className="flex-1 pt-2 ">
                                                    <h3 className={`text-2xl manrope mb-2 transition-colors duration-500 ${index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                                                        }`}>{step.title}</h3>
                                                    <p className={`text-lg manrope-medium leading-relaxed transition-colors duration-500 ${index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                                                        }`}>{step.description}</p>
                                                </div>

                                                {/* Connecting Line */}
                                                {index < steps.length - 1 && (
                                                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                                        <div
                                                            className={`w-full bg-[#32261c] transition-all duration-500 ${index < activeStep ? 'h-full' : 'h-0'
                                                                }`}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="w-1/2 flex justify-center">
                                    <div className="relative h-96 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
                                        <Image
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            fill
                                            className="object-cover transition-opacity duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Version - Swipeable Cards Design */}
            <div className="block md:hidden bg-[#F1F2F6] py-5 px-4">
                {/* Mobile Title */}
                <div className="mb-8">
                    <div className="w-[2px] h-[33px] bg-[#ebd457] "></div>
                    <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left ml-3 -mt-8">
                        Your dream space in just four steps
                    </h1>
                </div>

                {/* Swipeable Cards Container */}
                <div className="relative overflow-hidden px-4 pt-5">
                    <div
                        className="flex transition-transform duration-300 ease-out"
                        style={{
                            transform: `translateX(-${activeStep * 258}px)`,
                            touchAction: 'pan-y'
                        }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {steps.map((step, index) => (
                            <div key={index} className="w-[260px] h-[270px] flex-shrink-0 px-2">
                                <div className="bg-white h-[240px] rounded-2xl p-6 shadow-sm border-2 border-[#ddcdc1] relative">
                                    {/* Step Number Circle - Positioned to overlap border */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                            <span className="text-white font-bold text-lg">{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Step Title */}
                                    <h3 className="text-xl manrope text-gray-800 text-center mt-8">
                                        {step.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="text-gray-600 text-center manrope-medium  leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
