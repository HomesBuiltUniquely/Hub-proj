"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from '../OfferingsDropdown';
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";


const BedroomHeroSimple: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  return (
    <div>
      <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/bh.png')" }}>
        {/* Navbar */}
        <div className="flex items-center justify-between -mt-15">
          <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white ml-80 mt-4">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button className="bg-orange-100 text-black px-4 py-2 rounded-4xl font-semibold shadow  mr-15 mt-3">GET FREE ESTIMATE</button>
        </div>
        {/* Hero content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30 pr-200">
          <h1 className="w-[800px] text-5xl lg:text-5xl manrope mb-6 drop-shadow-lg ml-30">Bedroom Interior Design</h1>
          <p className="text-xl manrope-medium mb-8 drop-shadow-lg ">Any questions you have can be resolved here.</p>
          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow mr-70">Lets Connect</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[1000px] text-lg text-center mt-20 rounded-3xl relative mx-auto">
        Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
      </div>

      {/* ===== MOBILE VERSION ===== */}

     <div className="md:hidden w-[360px] mx-auto pb-20 pt-10">
      <div className="relative h-[460] w-[340px] ml-2">
        {/* Rounded image only */}
        <div className="absolute inset-0 rounded-4xl overflow-hidden">
          <Image
            src="/bh1.png"
            alt="Modular Kitchen Background"
            fill
            priority
            className="object-cover"
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
          <h2 className="manrope font-bold text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Bedroom
            <br />
            Interior
          </h2>
          <p className="mt-2 text-[13px] manrope-medium opacity-90">
           Designed for rest, styled for you
          </p>
        </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button className="bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
      </div>
    </div>

    </div>

  );
};

export default BedroomHeroSimple;