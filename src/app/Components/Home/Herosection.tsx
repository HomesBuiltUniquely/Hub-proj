'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "/hh1.png",
      title: "From Floor Plan to Lifestyle Home, Uniquely Built",
      subtitle: "Innovative Interior Design",
      buttonText: "Explore Designs"
    },
    {
      image: "/hh2.png", 
      title: " Get Your Home Interior Cost Estimate Today",
      subtitle: "a Kitchen That Inspires",
      buttonText: "Explore Models"
    },
    {
      image: "/hh3.png",
      title: "From Vision to Reality — Interiors in 34 Days",
      subtitle: "Living Space Today",
      buttonText: "Explore Designs"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="w-[1400px] h-[900px] mx-auto rounded-3xl overflow-hidden relative">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between -mt-15">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
          <OfferingsDropdown textColor="text-white" />
          <ExploreRoomsDropdown textColor="text-white" />
          <NavMore textColor="text-white" />
        </div>
        <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-4xl font-semibold shadow mr-15 mt-4">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
        <h1 className="text-5xl lg:text-6xl  mb-6 drop-shadow-lg transition-all duration-1000">
          {heroSlides[currentSlide].title} 
        </h1>
       
        <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-4xl font-semibold shadow mr-160 mt-4 transition-all duration-1000 manrope-medium">
          {heroSlides[currentSlide].buttonText}
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
