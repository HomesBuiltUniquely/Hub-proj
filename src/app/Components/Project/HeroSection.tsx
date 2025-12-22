"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import OverlapNavBar from "../OverlapNavBar";


const ContactHeader: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  const heroSlides = [
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj1.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj2.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj3.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj4.png",
    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj5.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj6.png",
    },


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

    <>


      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }


         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>


      {/* Desktop Version - For screens 1440px and above */}


      {/* Desktop 2560 */}


      <div className="desktop-2560">

        <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  relative">


          {/* Background Carousel */}
          <div>
            <div className="absolute inset-0 w-full h-full">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              ))}
            </div>
          </div>


          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15 relative">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-2 -ml-2" />
            </div>
            <div className="hidden md:flex items-center gap-12">
            {/* NAV BAR — unchanged */}
            <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>

            {/* CTA — unchanged */}
            <button
              onClick={handleGetEstimate}
              className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            >
              BOOK CONSULTATION

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
          <div className="flex w-[600px] flex-col items-center justify-center pt-100 pb-20 text-white text-center pr-35">
            <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-60">HUB Interior Portfolio </div>
            <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-8">Elegant, Functional & Timeless Designs</p>
          </div>

        </div>
        <div className="hidden md:block w-[1000px] text-lg manrope-medium text-center mt-20 rounded-3xl relative mx-auto">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>

      </div>




      <div className="desktop-1920">

        <div className="hidden md:block w-[full] max-w-[1920px] h-[950px] mx-auto  rounded-3xl overflow-hidden  bg-cover bg-center  relative">

          {/* Background Carousel */}
          <div>
            <div className="absolute inset-0 w-full h-full">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              ))}
            </div>
          </div>

          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15 relative">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-3 ml-2" />
            </div>

            <div className="hidden md:flex items-center gap-12">
            {/* NAV BAR — unchanged */}
            <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>

            {/* CTA — unchanged */}
            <button
              onClick={handleGetEstimate}
              className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
            >
              BOOK CONSULTATION

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
          <div className="flex w-[600px] flex-col items-center justify-center pt-100 pb-20 text-white text-center pr-35">
            <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-75">HUB Interior Portfolio </div>
            <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] ml-8">Elegant, Functional & Timeless Designs</p>
          </div>

        </div>

      </div>




      {/* 1280 Version */}

      <div className="desktop-1280">
        <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"

          >
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



            {/* Navbar */}
            <div className="relative flex items-center justify-between px-8">
              {/* Logo */}
              <div onClick={handleClick} className="cursor-pointer">
                <Image
                  src="/redlogo.png"
                  alt="HUB Interior Logo"
                  width={230}
                  height={250}
                  className="w-[] h-[] -mt-12 -ml-8"
                />
              </div>

              {/* Center Navigation */}
             <div className="hidden md:flex -mt-12 items-center gap-12">


              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-1 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

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
            <div className="flex w-[600px] flex-col items-center justify-center pt-100 pb-20 text-white text-center pr-35">
              <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-60">HUB Interior Portfolio </div>
              <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-8">Elegant, Functional & Timeless Designs</p>
            </div>

          </div>
        </div>
      </div>


      {/* mobile version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}

            <img
              className="w-full max-w-[425px] h-[full] rounded-4xl relative mt- mx-auto"
              src={`https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Projm${currentSlide + 1}.png`}
            />


            {/* top logo */}
            <div className="absolute top-2 -mt-5 -ml-1">
              <Image
                src="/redlogo.png"
                alt="HUB Interior Logo"
                width={90}
                height={25}
                className="cursor-pointer"
              />
            </div>

            {/* Overlay text + CTA */}
            <div className="absolute inset-0 flex flex-col text-left px-4 mt-85">
              <h2 className="wulkan-display-bold text-3xl   text-white leading-tight">
                HUB Interior Portfolio
              </h2>
              <p className="manrope-medium text-md sm:text-md text-white mb-4 drop-shadow-lg max-w-[90%]">
                Elegant, Functional & Timeless Designs
              </p>

            </div>
          </div>
          <OverlapNavBar />
        </div>

      </div>

    </>
  )
};

export default ContactHeader;


