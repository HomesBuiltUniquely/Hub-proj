'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import OverlapNavBar from "../OverlapNavBar";
import MagneticButton from "./MagneticButton";



const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  const heroSlides = [
    {
      video: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Final%20Video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2UHGCZDIDBGPCJCR%2F20260115%2Fap-south-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T142043Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTIiSDBGAiEA3w1RHMTi8xfK4NDGTXHWZxwSnCL9PMRAj91nxcvEygUCIQDsH95WAGPwZoRsKMvGp7X78GErurxmu70rRTAxU%2B1GuyraAgg3EAAaDDczMDYyNjk2Nzc2MCIM4tjd4TdmXqaHPUqOKrcCpCsnklSmOQaJDlTOmWrD8vqfpQ6ocN5bZUzpODlCw%2FC9p36a5bKtAK9oXmSoRMUdM2X%2B57hu86GFnxiTBJsC5RPlXRHLWyenVyKT%2FpmU6wVR0S7RD2fWaJpeXV%2BgTmEXlOkJtY7yb7AWB0Ls30gEDXM2jBcxRrBrj40lNdnINTQ9Mw3inLox2GPWfasftQTwQIKDTB%2BIJpxe6aVJcufEZsOv3o%2FZbreLM%2B0lrDggsKq8nPQHjzd%2B0wi9jRyYvYjlqmbWgWwfvsl3AKpYolNmoX7%2BVc3bqnCVG%2F6kttqWhx%2BW8vmQInucsKc%2FtufxBgZ7SZVPCDmE2L1QzGlhZl1u32ewlAgturUmgzTYTNAkegEs50Rog9QJJCrQuHXnk0ZJb%2FOAALJW1uV7bvefpzkzhbxrcd5bPDgw7IajywY6rALX38E%2F%2FXIwm65qoFWfztL72HGVXi3cpBlUoX%2BgmXGsplXrHXpi50ePKoKa21egOfyOtMr9mzBxC7wGbhbMh7DkGXNohlMHHjhjfs8s1uwFvo3te69pU4AZ%2FEqOvmcYKTbHk0MNG010HQXkDXdwHXZ6xfgClvmSSkIhmg%2FXQTYKXwD80GqxAqgR3loXs39cfOZD%2BV8L53KJG1Eb25gKgjC9%2FILk91n5dLmiRMmTFflFNvhYWM%2FYRoVb9viblv2zBJLAPcvs25dwG%2BVFc2dA2R94Yv5oPpU3D01a7KUNRqEZ02O52UJnXlzc%2Bia%2BKZlLJRj29VghkSn5co1kIRtLstQmIBIOGav8x1DMyYQ5YYp99%2BE2T8%2BuQfvQdBP%2Bz4nFEkr3EPAU697rsEi4jnE%3D&X-Amz-Signature=9a479fde1cc98babad3abb7fef9a3a75938de9f07d30e1afef5e7234de7a5fb7&X-Amz-SignedHeaders=host&response-content-disposition=inline",
      title: "From floor plan to lifestyle home, uniquely built",
      subtitle: "Innovative interior design",
      buttonText: "Book Free Consultation"
    }
  ];


  const mobileTexts = [
    "From floor plan to lifestyle home, uniquely built"
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
        {/* Background Video Carousel */}
        <div className="absolute inset-0 w-full max-w-8xl h-[full]">
          {heroSlides.map((slide, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>
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

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
          <h1 className="text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
            {heroSlides[currentSlide].title}
          </h1>
          <MagneticButton 
            text={heroSlides[currentSlide].buttonText}
            onClick={handleGetEstimate}
          />
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
      <div className="relative hidden md:block  desktop-1920 w-full max-w-[1920px] h-[900px]  overflow-hidden">
        {/* Background Video Carousel */}
        <div className="absolute inset-0 w-full h-[900px]">
          {heroSlides.map((slide, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>
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



        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
          <h1 className="text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
            {heroSlides[currentSlide].title}
          </h1>
          <MagneticButton 
            text={heroSlides[currentSlide].buttonText}
            onClick={handleGetEstimate}
          />
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
          {/* Background Video Carousel */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <video
                key={index}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.video} type="video/mp4" />
              </video>
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

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="w-[1000px] text-5xl lg:text-6xl mb-6 drop-shadow-lg transition-all duration-1000 text-left">
              {heroSlides[currentSlide].title}
            </h1>
            <MagneticButton 
              text={heroSlides[currentSlide].buttonText}
              onClick={handleGetEstimate}
            />
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


          <video
            className="w-full max-w-[360px] h-auto rounded-4xl relative -mt-14 mx-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroSlides[currentSlide].video} type="video/mp4" />
          </video>
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
          <video
            className="max-w-[425px] h-[500px] rounded-4xl relative -mt-18 mx-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroSlides[currentSlide].video} type="video/mp4" />
          </video>
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
