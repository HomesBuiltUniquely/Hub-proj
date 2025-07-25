'use client';

import { useState, useEffect } from "react";

export default function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  // };

  return (
    <div className="w-screen min-h-[410px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10">
      <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-16 ml-8 manrope-medium">
        Why We&#39re Different.
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

      {/* Mobile Carousel */}
      <div className="lg:hidden relative overflow-hidden mt-10 mx-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-[200px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="w-full h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-6">
                <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
                <div className="text-center text-lg font-medium">{feature.title}</div>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-12 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#DDCDC1]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}