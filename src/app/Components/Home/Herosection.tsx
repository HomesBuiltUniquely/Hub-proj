'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import OverlapNavBar from "../OverlapNavBar";
import MagneticButton from "./MagneticButton";

const MuteIcon: React.FC<{ muted: boolean }> = ({ muted }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
  >
    {/* Mic body */}
    <rect
      x="9"
      y="3"
      width="6"
      height="10"
      rx="3"
      className={muted ? "fill-white/60" : "fill-white"}
    />
    {/* Stand */}
    <path
      d="M8 11a4 4 0 0 0 8 0"
      className={muted ? "stroke-white/60" : "stroke-white"}
      strokeWidth="1.5"
      fill="none"
    />
    <line
      x1="12"
      y1="15"
      x2="12"
      y2="19"
      className={muted ? "stroke-white/60" : "stroke-white"}
      strokeWidth="1.5"
    />
    <line
      x1="9"
      y1="19"
      x2="15"
      y2="19"
      className={muted ? "stroke-white/60" : "stroke-white"}
      strokeWidth="1.5"
    />
    {/* Mute slash */}
    {muted && (
      <line
        x1="6"
        y1="4"
        x2="18"
        y2="16"
        className="stroke-red-400"
        strokeWidth="1.5"
      />
    )}
  </svg>
);

const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();
  const mountedRef = useRef(false);

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  const heroSlides = [
    {
      type: "video" as const,
      videoUrl: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/FINAL+VIDEO.mp4",
      title: "From floor plan to lifestyle home, uniquely built",
      subtitle: "Innovative interior design",
      buttonText: "Book Free Consultation"
    },
    {
      type: "image" as const,
      image: "/img1HH.jpg",
      title: "From floor plan to lifestyle home, uniquely built",
      subtitle: "Innovative interior design",
      buttonText: "Book Free Consultation"
    },
    {
      type: "image" as const,
      image: "/img2HH.jpg",
      title: "Get your home interior cost estimate today",
      subtitle: "a Kitchen that inspires",
      buttonText: "Calculate Now"
    },
    {
      type: "image" as const,
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

  // Detect desktop once on mount (used to control video-based autoplay behaviour)
  useEffect(() => {
    mountedRef.current = true;
    if (typeof window !== "undefined") {
      const checkIsDesktop = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
      checkIsDesktop();
      window.addEventListener("resize", checkIsDesktop);
      return () => window.removeEventListener("resize", checkIsDesktop);
    }
  }, []);

  // Auto-slide effect
  useEffect(() => {
    // Only run after component has mounted to prevent hydration mismatches
    if (!mountedRef.current) return;

    // If current slide is the video on desktop and it has not finished yet,
    // do NOT auto-advance to the next slide.
    const current = heroSlides[currentSlide];
    if (isDesktop && current.type === "video" && !isVideoEnded) {
      return;
    }

    const interval = setInterval(() => {
      // On mobile: 3 slides (0, 1, 2). On desktop: 4 slides (0, 1, 2, 3)
      const slideCount = isDesktop ? heroSlides.length : 3;
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4000); // Change slide every 4 seconds once allowed

    return () => clearInterval(interval);
  }, [currentSlide, heroSlides.length, isDesktop, isVideoEnded]);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  // Whenever we arrive on the video slide again, start "waiting" from scratch
  useEffect(() => {
    const current = heroSlides[currentSlide];
    if (current.type === "video") {
      setIsVideoEnded(false);
      // bump key so video element remounts and restarts
      setVideoKey((prev) => prev + 1);
    }
  }, [currentSlide]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

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
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {slide.type === "image" ? (
                <div
                  className="absolute inset-0 bg-cover"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              ) : (
                <video
                  key={videoKey}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.videoUrl}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onEnded={handleVideoEnded}
                />
              )}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

        {/* Navbar */}
         <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">

          {/* Logo */}
          <div onClick={handleClick}>
            <Image
              src="/whitelogo.png"
              alt="HUB Interior Logo"
              width={250}
              height={250}
              className="w-[230px] h-[250px] ml-9"
            />
          </div>

          {/* Nav Links */}
        
          <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] hidden md:flex items-center justify-center gap-12 manrope text-white tracking-widest ml-60">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>

          {/* CTA */}
          <div className="relative mr-15">
            <button
              onClick={handleGetEstimate}
              className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            >
              BOOK CONSULTATION

              {/* FREE Badge */}
              <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                <img src="/free.png" alt="Free" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                  FREE
                </span>
              </span>
            </button>
          </div>

        </div>

        {/* Hero content (hidden on video slide) */}
        {heroSlides[currentSlide].type !== "video" && (
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
              {heroSlides[currentSlide].title}
            </h1>
            <MagneticButton 
              text={heroSlides[currentSlide].buttonText}
              onClick={handleGetEstimate}
            />
          </div>
        )}

        {/* Mute / Unmute button on video slide */}
        {heroSlides[currentSlide].type === "video" && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute z-20 bottom-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center"
          >
            <MuteIcon muted={isMuted} />
          </button>
        )}

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
      <div className="relative hidden md:block  desktop-1920 w-full max-w-[1920px] h-[900px]  overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full h-[900px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {slide.type === "image" ? (
                <div
                  className="absolute inset-0 bg-cover"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              ) : (
                <video
                  key={videoKey}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.videoUrl}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onEnded={handleVideoEnded}
                />
              )}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

        {/* Navbar */}
        <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">

          {/* Logo */}
          <div onClick={handleClick}>
            <Image
              src="/whitelogo.png"
              alt="HUB Interior Logo"
              width={250}
              height={250}
              className="w-[230px] h-[250px] ml-9"
            />
          </div>

          {/* Nav Links */}
        
          <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] hidden md:flex items-center justify-center gap-12 manrope text-white tracking-widest ml-60">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>

          {/* CTA */}
          <div className="relative mr-15">
            <button
              onClick={handleGetEstimate}
              className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            >
              BOOK CONSULTATION

              {/* FREE Badge */}
              <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                <img src="/free.png" alt="Free" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                  FREE
                </span>
              </span>
            </button>
          </div>

        </div>



        {/* Hero content (hidden on video slide) */}
        {heroSlides[currentSlide].type !== "video" && (
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
              {heroSlides[currentSlide].title}
            </h1>
            <MagneticButton 
              text={heroSlides[currentSlide].buttonText}
              onClick={handleGetEstimate}
            />
          </div>
        )}

        {/* Mute / Unmute button on video slide */}
        {heroSlides[currentSlide].type === "video" && (
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute z-20 bottom-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center"
          >
            <MuteIcon muted={isMuted} />
          </button>
        )}

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
                className={`absolute inset-0 transition-opacity duration-1000  ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {slide.type === "image" ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                ) : (
                  <video
                    key={videoKey}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={slide.videoUrl}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onEnded={handleVideoEnded}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5]"></div>

          {/* Navbar */}
           <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">

          {/* Logo */}
          <div onClick={handleClick}>
            <Image
              src="/whitelogo.png"
              alt="HUB Interior Logo"
              width={250}
              height={250}
              className="w-[230px] h-[250px] ml-9"
            />
          </div>

          {/* Nav Links */}
        
          <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] hidden md:flex items-center justify-center gap-12 manrope text-white tracking-widest ml-15">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>

          {/* CTA */}
          <div className="relative mr-5">
            <button
              onClick={handleGetEstimate}
              className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[250px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[16px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            >
              BOOK CONSULTATION

              {/* FREE Badge */}
              <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                <img src="/free.png" alt="Free" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                  FREE
                </span>
              </span>
            </button>
          </div>

        </div>

          {/* Hero content (hidden on video slide) */}
          {heroSlides[currentSlide].type !== "video" && (
            <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
              <h1 className="w-[1000px] text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
                {heroSlides[currentSlide].title}
              </h1>
              <MagneticButton 
                text={heroSlides[currentSlide].buttonText}
                onClick={handleGetEstimate}
              />
            </div>
          )}

          {/* Mute / Unmute button on video slide */}
          {heroSlides[currentSlide].type === "video" && (
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute z-20 bottom-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center"
            >
              <MuteIcon muted={isMuted} />
            </button>
          )}

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
              <img src="/redlogo.png" className="w-[110px] h-[95px] -mb-1 -ml-3"></img>
            </div>
          </div>

          {/* Image Container with Overlay Content */}
          <div className="relative w-full max-w-[360px] mx-auto -mt-14">
            <img className="w-full max-w-[360px] h-auto rounded-4xl" src={`/hh1${Math.min(currentSlide, 2) + 1}.png`} />
            
            {/* Text Overlay */}
            <div className="absolute bottom-[140px] left-0 w-[300px] text-left text-4xl manrope text-white wulkan-display-bold ml-4">{mobileTexts[Math.min(currentSlide, 2)]}</div>
            
            {/* Horizontal line above button */}
           
            {/* Button */}
            <button onClick={handleGetEstimate} className="absolute bottom-[50px] left-0 bg-[#FF0000] text-nowrap text-white px-7 py-2 rounded-4xl ml-4 manrope text-sm h-[38px] w-[210px] shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[Math.min(currentSlide, 2)].buttonText}</button>
          </div>
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
                className="cursor-pointer w-[100px] h-[90px] ml-4 -mt-5 mb-4"/>
            </div>
          </div>
          
          {/* Image Container with Overlay Content */}
          <div className="relative max-w-[425px] mx-auto -mt-18">
            <img className="max-w-[425px] h-[500px] mx-auto rounded-4xl" src={`/hh1${Math.min(currentSlide, 2) + 1}.png`} />
            
            {/* Text Overlay */}
            <div className="absolute bottom-[140px] left-0 w-[250px] text-left text-3xl manrope text-white wulkan-display-bold ml-20">{mobileTexts[Math.min(currentSlide, 2)]}</div>
            
            {/* Horizontal line above button */}
            {/* Button */}
            <button onClick={handleGetEstimate} className="absolute bottom-[50px] left-0 bg-[#FF0000] text-white text-nowrap px-7 py-2 rounded-4xl ml-20 manrope shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">{heroSlides[Math.min(currentSlide, 2)].buttonText}</button>
          </div>
        </div>
        <OverlapNavBar />
      </div>

    </div>
  );
};

export default Herosection;
