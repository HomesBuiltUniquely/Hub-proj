"use client"

import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import { useRouter } from "next/navigation";
import OverlapNavBar from "../OverlapNavBar";


const ContactHeader: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  return (

    <div>
      <style jsx>{`
        /* Visibility controls for mobile variants */
        .mobile-360plus,
        .mobile-300 { display: none; }

        /* Show 360–480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus { display: block; }
          /* Center the floating menu */
          .mk-mobile-360 .menu { left: 50%; transform: translateX(-50%) ; width: 90%; height: 12% }
        }

        /* Show 300–359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 { display: block; }
          /* Center the floating menu */
          .mk-mobile-300 .menu { left: 50%; transform: translateX(-50%); width: 90% }
        }
      `}</style>


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

         /* Show 1920px layout for large desktops (1440px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

           /* Show 1920px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>




      {/* Desktop Version */}

      {/* 2560 Version */}

      <div className="desktop-2560 hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
        {/* Navbar */}
        <div className="flex items-center justify-between -mt-15">
          <div onClick={handleClick} className="cursor-pointer">
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-2 -ml-2" />
          </div>
          <div className="hidden bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope  mr-15 mt-5 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>


        {/* Hero content */}

        <div className="flex flex-col items-start justify-start  pb-20 text-white text-left mt-70 ml-15">
          <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
            Modular kitchen interior
          </h1>

          <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
            Modular kitchen design for style, comfort & everyday living

          </p>

          <div className="flex gap-4">
            <button
              onClick={handleGetEstimate}
              className="bg-yellow-300 text-black px-6 py-3 rounded-full manrope shadow"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>


      {/* 1920 Version */}

      <div className="desktop-1920">

        <div className="hidden md:block w-[full] max-w-[1920px] h-[950px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-3 ml-2" />
            </div>
            <div className="hidden bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope  mr-15 mt-5 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-start justify-start  pb-20 text-white text-left mt-70 ml-20">
            <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
              Modular kitchen interior
            </h1>

            <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
              Modular kitchen design for style, comfort & everyday living
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleGetEstimate}
                className="bg-yellow-300 text-black px-4 py-2 rounded-full manrope shadow"
              >
                Get Free Quote
              </button>
            </div>
          </div>

        </div>

      </div>



      {/* 1280 version */}

      <div className="desktop-1280">
        <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
            style={{ backgroundImage: "url('/kh.png')" }}
          >
            {/* Navbar */}
            <div className="flex items-center justify-between px-8">
              {/* Logo */}
              <div onClick={handleClick} className="cursor-pointer">
                <Image
                  src="/redlogo.png"
                  alt="HUB Interior Logo"
                  width={230}
                  height={250}
                  className="w-[full] h-[full] -mt-12 -ml-8"
                />
              </div>

              {/* Center Navigation */}
              <div className="hidden bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center md:flex gap-10 text-[18px] manrope -mt-12 ml-25 text-white tracking-widest">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* Right CTA */}
              <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope  mr-15 -mt-12 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
            </div>

            {/* Hero content */}
            <div className="flex flex-col text-white text-left mt-75 pl-12 space-y-6 max-w-[950px]">
              <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
                Modular kitchen interior
              </h1>

              <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
                Modular kitchen design for style, comfort & everyday living
              </p>

              <button
                onClick={handleGetEstimate}
                className="bg-yellow-300 text-black w-48 py-2 rounded-3xl manrope hover:bg-yellow-400 transition text-center"
              >
                Get Free Quote
              </button>
            </div>


          </div>
        </div>
      </div>




      {/* ===== MOBILE VERSION ===== */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus mt-3">
        <div className="relative h-[450] w-[full] ">
          {/* Rounded image only */}


          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/Mkh1.png"
              alt="Modular Kitchen Background"
              fill
              priority
              className="object-center"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>


          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={90} height={50} className="cursor-pointer" />
          </div>


          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h1 className="wulkan-display-bold  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Modular
              <br />
              kitchen
            </h1>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Modular kitchen design for style, comfort & everyday living
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
          <OverlapNavBar />
        </div>
      </div>



      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden p-3 mk-mobile-300 mobile-300 ">
        <div className="relative h-[450] w-[100%]  mt-3">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/Mkh1.png"
              alt="Modular Kitchen Background"
              fill
              priority
              className="object-center"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={82} height={50} className="cursor-pointer" />
          </div>


          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h1 className="wulkan-display-bold   text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Modular
              <br />
              kitchen
            </h1>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Modular kitchen design for style, comfort & everyday living
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
        </div>

        <OverlapNavBar />

      </div>



    </div>

  )
};

export default ContactHeader;
