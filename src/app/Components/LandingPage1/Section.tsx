'use client';

// import { useState, useEffect } from "react";

export default function Section1() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//fast-delivery.png",
      title: "34 Days Delivery",
      description: "Fast and reliable project completion"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//CALENDER.png",
      title: "10 Years Warranty",
      description: "Long-term protection for your investment"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//QUALITYU.png",
      title: "150+ Quality Checks",
      description: "Rigorous quality control processes"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//EMI.png",
      title: "0% EMI Options",
      description: "Flexible payment plans available"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//FACTORY.png",
      title: "Factory Finish",
      description: "Premium materials and craftsmanship"
    }
  ];

  // Auto-rotate carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  // };

  return (
    <div className="w-full min-h-[410px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 overflow-x-hidden">
      <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-12 ml-8 manrope-medium">
        Why We&#39;re Different.
      </h1>

      {/* Desktop Grid View */}
      <div className="hidden lg:flex justify-between lg:m-20 lg:mt-20 mt-15">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="w-[200px] h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all"
          >
            <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
            <div className="text-center text-[16px] font-medium">{feature.title}</div>
          </div>
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="lg:hidden w-full overflow-x-hidden mt-16 mb-10 ">
        <div className="relative w-full">
          <div
            className="flex items-center gap-6 animate-marquee"
            style={{
              width: `calc(${features.length} * 190px)`
            }}
          >
            {features.concat(features).map((feature, index) => (
              <div
                key={index}
                className="w-[200px] h-[190px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-6 mx-2 bg-white"
              >
                <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
                <div className="text-center text-lg font-medium">{feature.title}</div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}