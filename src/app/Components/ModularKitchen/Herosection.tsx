"use client"

import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import { useRouter } from "next/navigation";


const ContactHeader: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

    const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };
  

  return(
  <div>
    {/* Desktop Version */}
  <div className=" hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15">
      <div onClick={handleClick} className="cursor-pointer"> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-2" /></div>
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-70 pr-200">
      <h1 className="w-[1200px] text-5xl lg:text-7xl manrope mb-6 drop-shadow-lg ml-100">Modular Kitchen Interior</h1>
      <p className="w-[1200px] text-2xl manrope-medium mb-8 drop-shadow-lg pl-62">Modular Kitchens Design for Style, Comfort & Everyday Living
      </p>
      <div className="flex gap-4">
        <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow mr-68">Get Free Quote
        </button>
      </div>
    </div>
  </div>
    {/* Mobile Version above 360px */}
    <div className="md:hidden w-[360px] mx-auto pb-10">
      <div className="relative h-[550px] w-[360px]">
        {/* Rounded image only */}
        <div className="absolute inset-0 rounded-4xl overflow-hidden">
          <Image
            src="/Mkh1.png"
            alt="Modular Kitchen Background"
            fill
            priority
            className="object-cover"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* top logo */}
        <div className="absolute top-2 -mt-5 -mx-5" onClick={handleClick}>
          <Image src="/redlogo.png" alt="HUB Interior Logo" width={90} height={25} className="cursor-pointer" />
        </div>

        {/* text + cta */}
        <div className="absolute bottom-10 left-4 right-4 text-white">
          <h2 className="manrope font-bold text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Modular
            <br />
            Kitchen
          </h2>
          <p className="mt-2 text-[13px] manrope-medium opacity-90">
            Modular Kitchens Design for Style, Comfort & Everyday Living
          </p>
        </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
      </div>
    </div>
  </div>
)};

export default ContactHeader;
