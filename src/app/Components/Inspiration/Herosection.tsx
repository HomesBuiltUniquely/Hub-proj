"use client";

import React from "react";
import Image from "next/image";

const ContactHeader: React.FC = () => (
  <div>
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
      <div
        className="w-[1400px] h-[900px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSDH.png')" }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-0 z-20">
          <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="-mt-18" />
          <div className="hidden md:flex gap-6 manrope-medium text-white tracking-widest ml-108 -mt-20">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">EXPLORE ROOMS</a>
          </div>
          <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow -mt-20">
            GET FREE ESTIMATE
          </button>
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col   h-full text-white mt-125 px-8">
          <h1 className="text-5xl lg:text-7xl manrope  drop-shadow-lg mb-6">
            Interior Inspirations
          </h1>
          <p className="text-2xl font-manrope manrope-medium drop-shadow-lg max-w-3xl">
            Every corner of your home holds a story - let’s design it beautifully.
          </p>
        </div>
      </div>
    </div>



    <div className="desktop-1280 px-4">
      <div className="w-[1280px] h-[900px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSDH.png')" }}>
        {/* Logo */}
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="-mt-18 -ml-4" />
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-20 rounded-t-3xl">



          {/* Navigation */}
          <nav className="hidden md:flex space-x-12 text-white manrope-medium tracking-widest text-xl text-nowrap ml-130 mt-3">
            <a href="#" className="hover:underline">HOME</a>
            <a href="#" className="hover:underline">SERVICES</a>
            <a href="#" className="hover:underline">EXPLORE ROOMS</a>
          </nav>

          {/* Button */}
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition mt-3">
            GET FREE ESTIMATE
          </button>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-8 left-8 text-white max-w-3xl z-20 mb-20">
          <h1 className="text-7xl manrope drop-shadow-lg">Interior Inspirations</h1>
          <p className="mt-4 mb-20 text-xl manrope-medium drop-shadow-md">
            Every corner of your home holds a story - let’s design it beautifully.
          </p>
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
            className="cursor-pointer"
          />
        </div>

        {/* text + cta */}
        <h2 className="manrope leading-tight">
          <div className="absolute top-40 text-white w-full px-3 mt-5">
            <div className="text-3xl manrope drop-shadow-lg w-[20px] text-nowrap mt-15 ml-3">
              Interior <div>Inspirations</div>
            </div>
            <p className="manrope-medium w-[300px] shadow-lg  mt-2 ml-3">
              Every corner of your home holds a story, let’s design it beautifully.
            </p>
          </div>
        </h2>
      </div>
    </div>


  </div>

);

export default ContactHeader;