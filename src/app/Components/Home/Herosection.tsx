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
      image: "/img1HH.jpg",
      title: "From floor plan to lifestyle home, uniquely built",
      subtitle: "Innovative interior design",
      buttonText: "Book Free Consultation"
    },
    {
      image: "/img2HH.jpg",
      title: "Get your home interior cost estimate today",
      subtitle: "a Kitchen that inspires",
      buttonText: "Calculate Now"
    },

    // hh3.png,img3HH.jpg

    {
      image: "/img3HH.jpg",
      title: "From vision to reality, Interiors in 34 days",
      subtitle: "Living space today",
      buttonText: "Book Free Consultation"
    }
  ];


  const mobileTexts = [
    "From floor plan to lifestyle home, uniquely built",
    "Get your home interior cost estimate today",
    "From vision to reality, Interiors in 34 days"
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  function handleClick() {
    router.push("/");
  }


  return (
    <div>
      <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560,
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

       
         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1921px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1922px) {
          .desktop-2560 {
            display: block !important;
          }
        }
          

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 360px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 361px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>



      {/* 2560 Version */}

      <div className="hidden md:block  desktop-2560 w-full max-w-[1440px] h-[900px] mx-auto overflow-hidden relative ">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full max-w-8xl h-[full]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between -mt-15">
          <div onClick={handleClick}> <Image src="/whitelogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-9" /></div>

          <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[48px] md:flex hidden items-center justify-center gap-12 text-[18px] text-sm manrope text-white tracking-widest ml-70 mt-4">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>

          <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-[18px] tracking-wide text-white px-4 py-2 rounded-4xl manrope  mr-5 mt-4 shadow-lg  hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">BOOK CONSULTATION</button>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
          <h1 className="text-5xl lg:text-6xl  mb-6 drop-shadow-lg transition-all duration-1000">
            {heroSlides[currentSlide].title}
          </h1>
          <button onClick={handleGetEstimate} className="bg-[#ddcdc1] w-56 text-black px-4 py-2 rounded-4xl manrope  mr-145 mt-2  duration-1000 shadow-lg  hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-[#ebd657] active:translate-y-0 active:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
            {heroSlides[currentSlide].buttonText}
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full  transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/60'
                }`}
            />
          ))}
        </div>
      </div>



      {/* 1920 version  */}
      <div className="hidden md:block  desktop-1920 w-full max-w-[1920px] h-[900px]  rounded-3xl overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full h-[900px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between -mt-15">
          <div onClick={handleClick}> <Image src="/whitelogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-9" /></div>
          {/* whitelogo.png / redlogo.png */}

          <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] md:flex hidden text-[18px] items-center justify-center gap-12   manrope text-white tracking-widest ml-70 mt-4">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>

          <div className="relative flex items-center justify-center  transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200">

            <div className="absolute inline-block ml-40 mb-8">
              {/* Light Image */}
              <img
                src="/light.png"
                alt="Light"
                className=" top-0 right-0 w-[60px] h-[60px] pointer-events-none"
              />

              {/* FREE text on image */}
              <p className="absolute top-0 right-0 w-[60px] h-[60px] flex items-center justify-center z-20 manrope text-white text-[14px]">
                FREE
              </p>
            </div>

            {/* Button Text */}
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope  mr-15 mt-5 shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">BOOK CONSULTATION</button>
          </div>
        </div>


        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
          <h1 className="text-5xl lg:text-6xl  mb-6 drop-shadow-lg transition-all duration-1000">
            {heroSlides[currentSlide].title}
          </h1>
          <button onClick={handleGetEstimate} className="bg-[#ddcdc1] w-56 text-black px-4 py-2 rounded-4xl manrope  mr-145 mt-2  duration-1000 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-[#ebd657] active:translate-y-0 active:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
            {heroSlides[currentSlide].buttonText}
          </button>
        </div>


        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/60'
                }`}
            />
          ))}
        </div>
      </div>


      {/* 1280 version */}
      <div>
        <div className="desktop-1280 max-w-[1280px] h-[800px] mx-auto overflow-hidden relative">
          {/* Background Image Carousel */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000  ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            ))}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

          {/* Navbar */}
          <div className="relative z-10 flex items-center justify-between  -mt-15">
            <Image src="/whitelogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[250px] h-full -mt-5 mr-3" />
            <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] md:flex hidden items-center justify-center gap-12 text-[18px] hidden md:flex gap-12 manrope text-white tracking-widest ml-30 mt-5">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl text-[18px] tracking-wide  mr-5 mt-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">BOOK CONSULTATION</button>
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-20 wulkan-display-bold">
            <h1 className=" w-[1000px] text-5xl lg:text-6xl mb-drop-shadow-lg transition-all ml-45 duration-1000">
              {heroSlides[currentSlide].title}
            </h1>
            <button onClick={handleGetEstimate} className="bg-[#ddcdc1] w-56 text-black px-4 py-2 rounded-4xl  mr-150 mt-4  duration-1000 manrope shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 hover:bg-[#ebd657] active:translate-y-0 active:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
              {heroSlides[currentSlide].buttonText}
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>



      {/* Mobile Version - Different Design for below */}
      <div className="block md:hidden">

        {/* Mobile Version 1 - Small Mobile (320px to 360px) */}
        <div className="mobile-small w-full max-w-[360px] h-[610px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto px-3 -mt-7">
          {/* Mobile Header */}
          <div className="w-full max-w-[360px] relative bg-gray-100 mt-1 rounded-[35px] overflow-hidden mx-auto">

            <div className="relative z-20 flex items-center justify-between ">
              <img src="/redlogo.png" className="w-[110px] h-[95px] -mb-2 "></img>
            </div>
          </div>


          <img className="w-full max-w-[360px] h-auto rounded-4xl relative -mt-14 mx-auto" src={`/hh1${currentSlide + 1}.png`} />
          <div className="-mt-55 w-[300px] text-left text-4xl manrope text-white mx-auto wulkan-display-bold absolute ml-7">{mobileTexts[currentSlide]}</div>
          {/* Horizontal line above button */}
          <div className="w-[295px] h-[1px] bg-gray-300 absolute -mt-23 ml-7"></div>
          <button onClick={handleGetEstimate} className="bg-[#FF0000] text-nowrap text-white px-7 py-2 rounded-4xl -mt-20 ml-7 manrope text-sm absolute h-[38px] w-[210px] shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[currentSlide].buttonText}</button>
        </div>



        {/* Mobile Version 2 - Large Mobile (361px to 767px) */}
        <div className="mobile-large max-w-[425px] h-auto relative bg-gray-100 rounded-[35px] px-3 overflow-hidden mx-auto">
          {/* Mobile Header */}
          <div className="w-[340px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto ">

            <div className="relative z-20 flex items-center justify-start">
              <Image src="/redlogo.png"
                alt="HUB Interior Logo"
                width={90}
                height={25}
                className="cursor-pointer w-[100px] h-[90px] -ml-1 -mt-5 mb-2" />
            </div>
          </div>
          <img className="max-w-[425px]h-[500px] rounded-4xl relative -mt-18 mx-auto" src={`/hh1${currentSlide + 1}.png`} />
          <div className="-mt-62 w-[250px] text-left text-3xl manrope text-white mx-auto wulkan-display-bold absolute ml-8">{mobileTexts[currentSlide]}</div>
          {/* Horizontal line above button */}
          <div className="w-[300px]  h-[1px] bg-gray-300 absolute -mt-32 ml-8"></div>
          <button className="bg-[#FF0000] text-white  text-nowrap px-7 py-2 rounded-4xl -mt-28 ml-8 manrope absolute shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[currentSlide].buttonText}</button>
        </div>
        <OverlapNavBar />
      </div>
    </div>
  );
};

export default Herosection;
