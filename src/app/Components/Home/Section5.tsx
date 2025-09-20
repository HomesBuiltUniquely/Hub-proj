'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Section5() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        let isAnimating = false;

        const handleScroll = () => {
            if (sectionRef.current && !isAnimating) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const windowHeight = window.innerHeight;

                // Start animation only when title is fully visible (section top reaches viewport)
                if (sectionTop <= windowHeight * 0.5 && sectionTop + sectionHeight >= 0) {
                    // Calculate progress from when title becomes visible
                    const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - sectionTop) / (sectionHeight * 0.8)));
                    
                    // Divide scroll progress into 4 equal parts with delays
                    let newActiveStep = 0;
                    if (scrollProgress >= 0.2) newActiveStep = 1;
                    if (scrollProgress >= 0.4) newActiveStep = 2;
                    if (scrollProgress >= 0.6) newActiveStep = 3;
                    
                    if (newActiveStep !== activeStep) {
                        isAnimating = true;
                        setActiveStep(newActiveStep);
                        
                        // Slow down scrolling during step animations
                        clearTimeout(scrollTimeout);
                        scrollTimeout = setTimeout(() => {
                            isAnimating = false;
                        }, 1200); // Longer delay to ensure step completion
                    }
                } else if (sectionTop > windowHeight * 0.5) {
                    // Reset to first step if scrolled back up
                    setActiveStep(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: false });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [activeStep, steps.length]);

    return (
        <div>
        <div ref={sectionRef} className="hidden md:block bg-[#F1F2F6] min-h-[740px] py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl wulkan-display-bold text-gray-800 max-w-md">
                        Your dream space in just four steps
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex gap-16 items-start">
                    {/* Left Side - Progress Steps */}
                    <div className="w-1/2 relative">
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-6 relative">
                                    {/* Step Circle */}
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                                            index <= activeStep 
                                                ? 'bg-[#32261c] text-white shadow-lg' 
                                                : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            <Image src={step.icon} alt={step.title} width={24} height={24} />
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-2">
                                        <h3 className={`text-2xl manrope mb-2 transition-colors duration-500 ${
                                            index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                                        }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-lg manrope-medium leading-relaxed transition-colors duration-500 ${
                                            index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                                        }`}>
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Connecting Line */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300">
                                            <div 
                                                className={`w-full bg-[#32261c] transition-all duration-500 ${
                                                    index < activeStep ? 'h-full' : 'h-0'
                                                }`}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-1/2">
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
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
        {/* Mobile Version - Progress Bar Design */}
        <div className="block md:hidden ml-3" ref={sectionRef}>
          <div className="bg-[#F1F2F6] py-8 px-4">
            {/* Mobile Title */}
            <div className="mb-8">
              <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left pl-2">
                Your dream space in just four steps
              </h1>
            </div>

            {/* Mobile Layout - Steps Top, Image Bottom */}
            <div className="space-y-8">
              {/* Top - Progress Steps */}
              <div className="relative">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                      {/* Step Circle */}
                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-500 ${
                          index <= activeStep 
                            ? 'bg-[#32261c] text-white shadow-lg' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          <Image src={step.icon} alt={step.title} width={20} height={20} />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-2">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-500 ${
                          index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                          index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>

                      {/* Connecting Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-300">
                          <div 
                            className={`w-full bg-[#32261c] transition-all duration-500 ${
                              index < activeStep ? 'h-full' : 'h-0'
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom - Image Card */}
              <div className="w-full max-w-sm mx-auto">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
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
    );
};