'use client';

import React from "react";

const ContactHeader: React.FC = () => (

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


    <div className="desktop-1440  w-[1400px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <div className="hidden md:flex gap-12 text-sm manrope text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div>
        <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="flex w-[600px] flex-col items-center justify-center pt-90 pb-20 text-white text-center pr-30">
        <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-55">HUB Interior Portfolio </div>
        <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-12">Elegant, Functional & Timeless Designs</p>
      </div>
    </div>



    {/* 1280 Version */}

    <div className="desktop-1280  w-[1280px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>

      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <div className="hidden md:flex gap-12 text-md manrope text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div>
        <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="flex w-[600px] flex-col items-center justify-center pt-90 pb-20 text-white text-center pr-30">
        <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-55">HUB Interior Portfolio </div>
        <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-12">Elegant, Functional & Timeless Designs</p>
      </div>

    </div>



    {/* mobile version */}


    <div className="block md:hidden px-4 py-6 w-[320px] w-max-[425px] mx-auto" style={{ backgroundImage: "url('/bn.jpg')" }}>


      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <div className="hidden md:flex gap-12 text-md manrope text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div>
        <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
      </div>

      {/* Hero content */}
      <div className="flex w-[600px] flex-col items-center justify-center pt-90 pb-20 text-white text-center pr-30">
        <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-55">HUB Interior Portfolio </div>
        <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-12">Elegant, Functional & Timeless Designs</p>
      </div>

    </div>




  </>

);

export default ContactHeader;
