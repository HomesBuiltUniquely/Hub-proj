"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  const heroSlides = [
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/ProjH2.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/ProjH3.png",

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
              className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>







        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between -mt-23 -ml-3">
          <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] ml-9 mt-5" /></div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5 ">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope-medium hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>


        {/* Hero content */}
        <div className="flex w-[600px] flex-col items-center justify-center pt-55 pb-20 text-white text-center pr-30">
          <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-65">HUB Interior Portfolio </div>
          <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-3">Elegant, Functional & Timeless Designs</p>
        </div>
      </div>



      {/* 1280 Version */}

      <div className="desktop-1280  w-[1280px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" >

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
        <div className="relative z-10 flex items-center justify-between -mt-23 -ml-3">
          <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] ml-9 mt-5" /></div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5 ">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope-medium hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>

        {/* Hero content */}
        <div className="flex w-[600px] flex-col items-center justify-center pt-45 pb-20 text-white text-center pr-30">
          <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-60">HUB Interior Portfolio </div>
          <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-8">Elegant, Functional & Timeless Designs</p>
        </div>

      </div>



      {/* mobile version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}

            <img
              className="w-[350px] h-[430px] rounded-4xl relative mt- mx-auto"
              src={`https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/ProjMH${currentSlide + 1}.png`}
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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-50">
              <h2 className="manrope text-2xl sm:text-3xl  text-white leading-tight">
                HUB Interior Portfolio
              </h2>
              <p className="manrope-medium text-sm sm:text-md text-white mt-3 mb-4 drop-shadow-lg max-w-[90%]">
                Elegant, Functional & Timeless Designs
              </p>

            </div>
          </div>
        </div>

      </div>




    </>
  )
};

export default ContactHeader;


