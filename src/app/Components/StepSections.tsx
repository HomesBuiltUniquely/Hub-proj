'use client';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

export function Stepsection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Meet Our Designer",
      description: "Visit our Experience Centre or consult with us online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Get Your Quote",
      description: "Receive a detailed design quote. Pay just 10% to start your project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
          <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Customize Your Home",
      description: "Choose from 500+ materials and finishes to match your style.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Hassle-Free Execution",
      description: "Quick, error-free installation with expert project management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      // Don't go beyond last item
      if (currentIndex < steps.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      // Don't go before first item
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-play will still loop infinitely
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-[700px] bg-[#F1F2F6] py-20 px-4 sm:px-6 lg:px-10 xl:px-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[35px] text-amber-950 mb-4 wulkan-display-bold">
            Get Your Dream Home Interiors in 4 Simple Steps
          </h2>
          <p className="text-xl text-amber-950/80 max-w-4xl mx-auto manrope-semibold">
            Our seamless process ensures your vision becomes reality with minimal effort on your part
          </p>
        </div>

        <div {...swipeHandlers} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-full px-2 sm:px-4">
                <div className="bg-[#F1F2F6] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col border border-[#DDCDC1] min-h-[400px]">
                  <div className="p-12 flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-full bg-[#DDCDC1]/30 flex items-center justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-[#DDCDC1]/50 flex items-center justify-center text-amber-950">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl manrope-semibold text-amber-950 mb-6">{step.title}</h3>
                    <p className="text-xl sm:text-xl text-amber-950/80 max-w-2xl manrope-medium">
                      {step.description}
                    </p>
                  </div>
                  <div className="bg-[#DDCDC1]/30 px-8 py-6 text-center border-t border-[#DDCDC1]">
                    <span className="text-base font-medium text-amber-950/70">
                      Step {step.number} of {steps.length}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 mx-2 ${
                  currentIndex === index ? 'bg-[#DDCDC1] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}