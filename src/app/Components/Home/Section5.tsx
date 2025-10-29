'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function Section5() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

    // Removed automatic scroll-based carousel functionality
    // Now only manual swipe control is available

    // Touch handlers for swipe functionality
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault();
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
        if (isRightSwipe && activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
        
        // Reset touch states
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div>
        <div ref={sectionRef} className="hidden md:block bg-[#F1F2F6] min-h-[740px] py-10 px-8">
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
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                                            index <= activeStep 
                                                ? 'bg-[#32261c] text-white shadow-lg' 
                                                : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            <Image src={step.icon} alt={step.title} width={25} height={25} />
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-2 ">
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
        {/* Mobile Version - Swipeable Cards Design */}
        <div className="block md:hidden bg-[#F1F2F6] py-8 px-4">
          {/* Mobile Title */}
          <div className="mb-8">
            <h1 className="text-3xl wulkan-display-bold text-gray-800 text-left ml-4">
              Your dream space in just four steps
            </h1>
          </div>

          {/* Swipeable Cards Container */}
          <div className="relative overflow-hidden px-4 pt-8">
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