"use client";
import React from "react";

const ContactHeader: React.FC = () => {  
  
 return (

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

  <div className="desktop-1440 w-[1400px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between px-8 py-4">
      <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
      <div className="hidden md:flex gap-12 text-sm manrope text-white tracking-widest">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">EXPLORE ROOMS</a>
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-4xl lg:text-6xl mb-6 wulkan-display tracking-wide">Together,</h1>
      <p className="text-6xl marope-medium mb-8 ">We Build Better.</p>
      <div className="w-[400px]">Be part of a culture that values innovation, growth, and the power of good design.</div>
      <div className="flex gap-4 mt-6">
        <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl font-semibold shadow ">Current Openings</button>
      </div>
    </div>
  </div>



  

<div className="desktop-1280 w-[1280px] h-[800px] mx-auto mt-4  rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between px-8 py-4">
      <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
      <div className="hidden md:flex gap-12 text-sm font-semibold text-white tracking-widest">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">EXPLORE ROOMS</a>
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-4xl lg:text-6xl mb-6 wulkan-display tracking-wide">Together,</h1>
      <p className="text-6xl marope-medium mb-8 ">We Build Better.</p>
      <div className="w-[400px]">Be part of a culture that values innovation, growth, and the power of good design.</div>
      <div className="flex gap-4 mt-6">
        <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl font-semibold shadow ">Current Openings</button>
      </div>
    </div>
  </div>





  </div>
);
};

export default ContactHeader;
