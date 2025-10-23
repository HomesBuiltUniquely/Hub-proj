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



      

      

      {/* Desktop Version */}

      <div className="desktop-1440">

        <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/bh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
            <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button className="bg-orange-100 text-black px-4 py-2 rounded-4xl manrope-medium shadow  mr-15 mt-3">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30 pr-200">
            <h1 className="w-[800px] text-5xl lg:text-6xl manrope mb-6 drop-shadow-lg ml-68">Bedroom interior design</h1>
            <p className="text-xl manrope-medium mb-8 drop-shadow-lg ">Any questions you have can be resolved here.</p>
            <div className="flex gap-4">
              <button className="bg-yellow-300 text-black px-6 py-3 rounded-full manrope-medium shadow mr-70">Lets connect</button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[1000px] text-lg manrope-medium text-center mt-20 rounded-3xl relative mx-auto">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>

      </div>




      {/* 1280 version */}

      <div className="desktop-1280">
        <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
            style={{ backgroundImage: "url('/bh.png')" }}
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
              <button className="bg-orange-100 text-black px-5 py-2 rounded-3xl manrope-medium shadow -mt-12 hover:bg-yellow-200 transition">
                GET FREE ESTIMATE
              </button>
            </div>

            {/* Hero content */}
            <div className="flex flex-col text-white text-left mt-75 pl-12 space-y-6 max-w-[950px]">
              <h1 className="text-6xl lg:text-7xl font-semibold manrope drop-shadow-lg">
                Bedroom interior design
              </h1>

              <p className="text-2xl manrope-medium drop-shadow-lg">
                Any questions you have can be resolved here.
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
        <div className="hidden md:block w-[1000px] text-lg manrope-medium text-center mt-20 rounded-3xl relative mx-auto">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>
      </div>




      {/* ===== MOBILE VERSION ===== */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus mt-3">
        <div className="relative h-[450] w-[full] ">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/bh1.png"
              alt="Bedroom Background"
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
            <h2 className="manrope text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
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
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
        </div>

        <div className="manrope-medium  h-[300px] w-full max-w-[480px] mt-15 mb-10 m-3 desc">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>
      </div>


      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden p-3 mb-5 mk-mobile-300 mobile-300 ">
        <div className="relative h-[450] w-[100%]  mt-3">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/bh1.png"
              alt="Bedroom Background"
              fill
              priority
              className="object-cover"
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
            <h2 className="manrope  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
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
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>

        </div>
        <div className="manrope-medium  h-[300px] w-full max-w-[480px] mt-10  desc">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>
      </div>



    </div>




  );
};

export default BedroomHeroSimple;