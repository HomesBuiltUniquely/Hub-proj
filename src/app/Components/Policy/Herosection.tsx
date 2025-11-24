"use client"

import React  from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import OverlapNavBar from "../OverlapNavBar";



const PolicyHeroSimple: React.FC = () => {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  function handleClick() {
    router.push("/");
  }


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


      <div className="desktop-1440">

        <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20H.png')" }}>
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
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
            <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-2 drop-shadow-lg ">
              Policy center
            </h1>
            <p className="text-lg  mb-4 drop-shadow-lg w-[600px] manrope-medium">
              Everything you need to know.
            </p>
          </div>

        </div>
        <div className="hidden md:block w-[1000px] text-lg manrope-medium text-center mt-20 rounded-3xl relative mx-auto">
          Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
        </div>

      </div>



      {/* 1280px Desktop Layout */}

      <div className="desktop-1280">
        <div className="hidden md:flex justify-center">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
            style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20H.png')" }}
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

            <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
              <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-2 drop-shadow-lg ">
                Policy center
              </h1>
              <p className="text-lg  mb-4 drop-shadow-lg w-[600px] manrope-medium">
                Everything you need to know.
              </p>
            </div>

          </div>
        </div>

      </div>



      {/* Mobile Version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5  overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}
            <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20MH.png" className="rounded-4xl" alt="" />




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

            {/* Overlay text + CTA */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="manrope text-3xl text-white leading-tight">
                Policy center
              </h2>
              <p className="manrope-medium text-sm sm:text-md text-white  mb-4 drop-shadow-lg max-w-[90%]">
                Everything you need to know.
              </p>
            </div>
          </div>
        </div>
        <OverlapNavBar />
      </div>

    </div>
  );
};

export default PolicyHeroSimple;
