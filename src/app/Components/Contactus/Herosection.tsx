"use client"
import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";


const ContactHeader: React.FC = () => (
  <div className="">
     <style jsx>{`
        /* Hide all sections by default */
        .desktop-1440,
        .desktop-1280,
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

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 479px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 480px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>
  <div className="desktop-1440 w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/Contactus.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15 ">
      <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">How Can We Help You</h1>
     
    </div>
  </div>
  {/* 1280px version */}
  <div className="desktop-1280 max-w-[1280px] h-[800px] mx-auto  rounded-3xl overflow-hidden relative  bg-cover  bg-center ">
    {/* Navbar */}
    <img src={"/Contactus.png"} className=" w-full"></img>

    <div className="flex items-center justify-between -mt-15 absolute top-0 left-0 right-0">
      <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[200px] h-full  ml-4 mt-2" />
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-85 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-4xl font-semibold shadow  mr-13 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-70 absolute top-0 left-0 right-0">
      <h1 className="text-5xl lg:text-6xl manrope drop-shadow-lg">How Can We Help You</h1>
     
    </div>
  </div>

  {/* Mobile Version - Different Design */}
  <div className="block md:hidden">


    

  </div>
  </div>
  
);

export default ContactHeader;
