"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavMore from "../NavMore";
import ExploreRoomsDropdown from "../ExploreRooms";
import OfferingsDropdown from "../OfferingsDropdown";
import router from "next/router";
import OverlapNavBar from "../OverlapNavBar";




const ContactHeader: React.FC = () => {
  const handleClick = () => {
    router.push("/");
  };

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };




  return <div>
    <style jsx>{`
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

      <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Inspir%20RH.png')" }}>
        {/* Navbar */}
        <div className="flex items-center justify-between -mt-15">
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
        {/* Hero content */}

        <div className="flex flex-col items-start justify-start  pb-20 text-white text-left mt-85 ml-15">
          <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
            Interior inspirations
          </h1>

          <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
            Every corner of your home holds a story - let’s design it beautifully.
          </p>
        </div>

      </div>


    </div>




    <div className="desktop-1280">
      <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
        {/* Inner container with background */}
        <div
          className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
          style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Inspir%20RH.png')" }}
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
              Interior inspirations
            </h1>
            <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
              Every corner of your home holds a story - let’s design it beautifully.
            </p>
          </div>

        </div>


      </div>

    </div>


    {/* Mobile Version */}


    <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
      <div className="relative h-full w-full p-2">
        {/* Rounded image only */}
        <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSMH.webp" alt="" />

        {/* top logo */}
        <div className="absolute top-2 -mt-5 -ml-1">
          <Image
            src="/redlogo.png"
            alt="HUB Interior Logo"
            width={90}
            height={25}
            className="cursor-pointer" />
        </div>
      </div>



      {/* text + cta */}
      <h2 className="manrope leading-tight">
        <div className="absolute top-40 text-white w-full px-3 mt-3">
          <div className="text-3xl manrope drop-shadow-lg w-[20px] text-nowrap mt-15 ml-3">
            Interior <div>inspirations</div>
          </div>
          <p className="manrope-medium w-[250px] shadow-lg  mt-2 ml-3">
            Every corner of your home holds a story, let’s design it beautifully.
          </p>
        </div>
      </h2>
      <OverlapNavBar />

    </div>


  </div>

    ;
};

export default ContactHeader;