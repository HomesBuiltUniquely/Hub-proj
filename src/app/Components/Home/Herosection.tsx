'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const mobileTexts = [
    "From Vision To Reality Interiors in 34 Days",
    "Get Your Home Interior Cost Estimate Today", 
    "From Floor Plan to Lifestyle Home, Uniquely Built"
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div>
      <style jsx>{`
        /* Hide both sections by default on mobile */
        .desktop-1440,
        .desktop-1280 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }
      `}</style>
      {/* Desktop Version - For screens 1440px and above */}
      <div className="desktop-1440 w-[1440px] h-[900px] mx-auto rounded-4xl overflow-hidden relative ">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-[1440px]">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between -mt-15">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-9" />
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
                : 'bg-white/50 hover:bg-white/60'
            }`}
          />
        ))}
        </div>
      </div>

{/* laptop */}
      <div>

      <div className="desktop-1280 max-w-[1280px] h-[800px] mx-auto rounded-3xl overflow-hidden relative">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000  ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between -mt-15">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[250px] h-full -mt-5 ml-3" />
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5">
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
                : 'bg-white/50 hover:bg-white/60'
            }`}
          />
        ))}
        </div>
      </div>
        
      </div>

       {/* Mobile Version - Different Design */}
       <div className="block md:hidden">
          <div>
           <div className="w-auto h-[540px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto">
             {/* Mobile Header */}
             <div className="relative z-20 flex items-center justify-between p-4">
               <img src="/redlogo.png" className="w-[135px] h-[140px] pb-6 -mt-8 pr-14 "></img>
               
               {/* Hamburger Menu Button */}
               <button 
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 className="text-white pr-10 mb-10"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               </button>
             </div>

             {/* Mobile Navigation Menu */}
             {isMobileMenuOpen && (
               <div className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-sm z-30 rounded-[35px] overflow-hidden">
                 <div className="p-6 pt-20">
                   {/* Close Button */}
                   <button 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="absolute top-4 right-4 text-gray-600 p-2"
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>

                   {/* Navigation Items */}
                   <div className="space-y-6">
                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">OFFERINGS</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Full Home Interior</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Interior</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Home Renovation</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Space Management</p>
                       </div>
                     </div>

                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">EXPLORE ROOMS</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Kitchen</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Bedroom</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Living Room</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Kids Room</p>
                       </div>
                     </div>

                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">MORE</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">About Us</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Projects</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Blog</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Contact</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
             
             <img className="w-full h-[550px] rounded-4xl relative -mt-40" src={`/hh1${currentSlide + 1}.png`} />
             <div className="-mt-60 w-[350px] text-left text-4xl font-semibold text-white ml-10 wulkan-display-bold absolute">{mobileTexts[currentSlide]}</div>
             <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-4xl -mt-12 ml-10 manrope-medium absolute">Explore Models</button>
           </div>
          </div>
       </div>
    </div>
  );
};

export default Herosection;
