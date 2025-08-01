'use client';
import React from 'react';
import { useState, useEffect, JSX } from 'react';
import { useSwipeable } from 'react-swipeable';

export function Featurespro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) return;
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [windowWidth, isAutoPlaying]);

  const features = [
    {
      title: "10-Years Warranty",
      description: "Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "0% EMI",
      description: "Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Factory Finish Interiors",
      description: "Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "34 Days Delivery",
      description: "Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
          <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
          <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIsAutoPlaying(false);
      setCurrentIndex((prev) => (prev + 1) % features.length);
    },
    onSwipedRight: () => {
      setIsAutoPlaying(false);
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    },
    preventScrollOnSwipe: true,
    trackMouse: false
  });

  const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => (
    <div className="border-2 border-[#DDCDC1] w-full h-full min-h-[280px] rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="text-2xl font-medium mb-4 gilda-display-regular text-amber-950">{title}</div>
          <p className="tracking-wider text-base font-medium">{description}</p>
        </div>
        <div className="flex-shrink-0 ml-4">
          {React.cloneElement(icon, { className: "size-10 fill-[#DDCDC1]" })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[600px] md:min-h-[800px] py-20 px-4 sm:px-6 lg:px-8 xl:px-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-center wulkan-display-bold mb-10 sm:mb-12 lg:mb-16 xl:mb-20 text-amber-950">
        Why Choose HUB Interiors?
      </h1>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1800px] mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Mobile Carousel View with increased height */}
      <div className="lg:hidden" {...swipeHandlers}>
        <div className="relative overflow-hidden h-[320px]"> {/* Increased height */}
          <div className="flex transition-transform duration-300 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 h-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-[#DDCDC1] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
