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
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl1.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl2.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl3.png",

    },
    {
      image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl4.png",

    },
    // {
    //   image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl5.png",

    // },
    // {
    //   image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Proj%20sl6.png",

    // },


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
      <div className="desktop-1440 hidden md:block w-[1440] h-[900px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center">


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

        {/* Navbar — fixed position inside hero */}
         <div className="relative flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
          <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-2 -ml-2" /> 
            </div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt-5 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>

        

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-left z-10 px-15">
          
          <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
            HUB Interior Portfolio
          </h1>
          <p className="text-lg manrope-medium drop-shadow-lg">
            Elegant, Functional & Timeless Designs
          </p>
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
              <div className="hidden md:flex gap-10 text-[18px] manrope -mt-12 ml-25 text-white tracking-widest">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* Right CTA */}
              <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 -mt-12 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
            </div>
            {/* Hero content */}
            <div className="flex w-[600px] flex-col items-center justify-center pt-45 pb-20 text-white text-center pr-35">
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
          <OverlapNavBar />
        </div>

      </div>

    </>
  )
};

export default ContactHeader;


