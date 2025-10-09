'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import OverlapNavBar from "../OverlapNavBar";

const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };
  
  const heroSlides = [
    {
      image: "/hh1.png",
      title: "From Floor Plan to Lifestyle Home, Uniquely Built",
      subtitle: "Innovative Interior Design",
      buttonText: "Book Free Consultation"
    },
    {
      image: "/hh2.png",
      title: " Get Your Home Interior Cost Estimate Today",
      subtitle: "a Kitchen That Inspires",
      buttonText: "Calculate Now"
    },
    {
      image: "/hh3.png",
      title: "From Vision to Reality — Interiors in 34 Days",
      subtitle: "Living Space Today",
      buttonText: "Book Free Consultation"
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

  function handleClick(){
    router.push("/");
  }

  return (
    <div>
      <style jsx>{`
        /* Hide all sections by default */
        .desktop-1440,
        .desktop-1280,
        .mobile-small,
        .mobile-large {
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

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 479px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 480px) and (max-width: 767px) {
          .mobile-large {
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
      <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-9" /></div>
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
          <OfferingsDropdown textColor="text-white" />
          <ExploreRoomsDropdown textColor="text-white" />
          <NavMore textColor="text-white" />
        </div>
        <button onClick={handleGetEstimate} className="bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl manrope-medium shadow mr-15 mt-4">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
        <h1 className="text-5xl lg:text-6xl  mb-6 drop-shadow-lg transition-all duration-1000">
          {heroSlides[currentSlide].title} 
        </h1>
        <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-4xl font-semibold shadow mr-160 mt-4 transition-all duration-1000 manrope-medium shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
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
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[250px] h-full -mt-5 mr-3" />
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5">
          <OfferingsDropdown textColor="text-white" />
          <ExploreRoomsDropdown textColor="text-white" />
          <NavMore textColor="text-white" />
        </div>
        <button onClick={handleGetEstimate} className="bg-[#ddcdc1]  hover:bg-[#ebd457] text-black px-4 py-2 rounded-4xl manrope-medium shadow mr-15 mt-4">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
        <h1 className=" w-[1000px] text-5xl lg:text-7xl mb-drop-shadow-lg transition-all ml-45 duration-1000">
          {heroSlides[currentSlide].title} 
        </h1>
        <button className="bg-[#ddcdc1] w-56 text-black px-4 py-2 rounded-4xl font-semibold shadow mr-150 mt-4 transition-all duration-1000 manrope-medium shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
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

          {/* Mobile Version 1 - Small Mobile (320px to 479px) */}
          <div className="mobile-small w-[350px] h-[610px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto">
             {/* Mobile Header */}
            <div className="w-[340px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto">

            <div className="relative z-20 flex items-center justify-between mt-4">
              <img src="/redlogo.png" className="w-[135px] h-[140px] pb-8 -mt-5 mb-7 pr-6"></img>
            </div>
            </div>

            
            <img className="w-[350px] h-[630px] rounded-4xl relative -mt-32 mx-auto" src={`/hh1${currentSlide + 1}.png`} />
            <div className="-mt-75 w-[300px] text-left text-4xl manrope text-white mx-auto wulkan-display-bold absolute ml-7">{mobileTexts[currentSlide]}</div>
             {/* Horizontal line above button */}
            <div className="w-[295px] h-[1px] bg-gray-300 absolute -mt-43 ml-7"></div>
            <button className="bg-[#FF0000] text-white px-7 py-2 rounded-4xl -mt-40 ml-7 manrope-medium text-sm absolute h-[38px] w-[210px] shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[currentSlide].buttonText}</button>
          </div>
             {/* Mobile Version 2 - Large Mobile (480px to 767px) */}
            <div className="mobile-large w-[350px] h-[550px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto">
             {/* Mobile Header */}
            <div className="w-[340px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto ">

            <div className="relative z-20 flex items-center justify-between mt-4 ">
              <img src="/redlogo.png" className="w-[110px] h-[120px] pb-6 -mt-5 mb-7 pr-8"></img>
            </div>
            </div>

            
            
            <img className="w-[340px] h-[500px] rounded-4xl relative -mt-32 mx-auto" src={`/hh1${currentSlide + 1}.png`} />
            <div className="-mt-62 w-[300px] text-left text-3xl manrope text-white mx-auto wulkan-display-bold absolute ml-8">{mobileTexts[currentSlide]}</div>
             {/* Horizontal line above button */}
            <div className="w-[300px] -mt-33 h-[1px] bg-gray-300 absolute -mt-8 ml-8"></div>
            <button className="bg-[#FF0000] text-white px-7 py-2 rounded-4xl -mt-28 ml-8 manrope-medium absolute shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[currentSlide].buttonText}</button>
          </div>
          <OverlapNavBar />
      </div>
    </div>
  );
};

export default Herosection;
