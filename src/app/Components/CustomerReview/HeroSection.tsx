"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
  <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15">
      <div onClick={handleClick} className="cursor-pointer">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={220} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
      </div>
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-70 pr-220">
      <h1 className="w-[1200px] text-5xl lg:text-7xl manrope mb-6 drop-shadow-lg ml-120">HUB Customers&#39; Stories</h1>
      <p className="w-[1280px] text-xl manrope-medium mb-8 drop-shadow-lg pl-110 ml-20">From design to delivery, every review reflects our uniquely built home stories and promise.
      </p>
     
    </div>
  </div>
  );
};

export default ContactHeader;
