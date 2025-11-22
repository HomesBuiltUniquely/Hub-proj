"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
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

    <div>   <style jsx>{`

  /* Hide both by default */
  .desktop-1280,
  .desktop-1440 {
    display: none !important;
  }

  /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    .desktop-1280 {
      display: block !important;
    }
  }

  /* Show 1440px layout for large desktops (>=1440px) */
  @media (min-width: 1440px) {
    .desktop-1440 {
      display: block !important;
    }
  }
`}</style>

      <div className="desktop-1440">
        <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={220} height={100} className="w-[250px] h-full -mt-2 -ml-2" />
            </div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm  text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>


          <div className="flex flex-col items-start justify-start  pb-20 text-white text-left mt-70 ml-15">
            <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
              HUB customers&#39; stories
            </h1>

            <p className="w-[800px] text-2xl manrope-medium mb-6 drop-shadow-lg">
              From design to delivery, every review reflects our uniquely built home stories and promise.

            </p>
          </div>

        </div>
      </div>




      {/* 1280 version  */}

      <div className="desktop-1280">

        <div className="w-[1240px] h-[800px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
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
            <div className="hidden md:flex gap-10 text-[18px] manrope -mt-12 ml-25 text-white tracking-widest">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>

            {/* Right CTA */}
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 -mt-12 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}



          <div className="flex flex-col text-white text-left mt-75 pl-12 space-y-6 max-w-[950px]">
            <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
              HUB customers&#39; stories
            </h1>

            <p className="w-[575px] text-2xl manrope-medium mb-6 drop-shadow-lg">
              From design to delivery, every review reflects our uniquely built home stories and promise.
            </p>

            <button
              onClick={handleGetEstimate}
              className="bg-yellow-300 text-black w-48 py-2 rounded-3xl manrope-medium hover:bg-yellow-400 transition text-center"
            >
              Get Free Quote
            </button>
          </div>
        </div>

      </div>



      {/* mobile version */}

      <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
        <div className="relative h-full w-full p-2">
          {/* Rounded image only */}
          <img src="Mkh1.png" alt="" />

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
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center -mt-70">
          <h1 className="w-[300px] text-3xl text-left lg:text-3xl manrope mb-2 drop-shadow-lg ">HUB Customers&#39; Stories</h1>
          <p className="w-[300px] text-xs text-left manrope-medium mb-8 drop-shadow-lg ">From design to delivery, every review reflects our uniquely built home stories and promise.
          </p>

        </div>
        <OverlapNavBar />
      </div>

    </div>
  );
};

export default ContactHeader;
