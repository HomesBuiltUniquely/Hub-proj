"use client";
import React from "react";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import Image from "next/image";
import { useRouter } from "next/navigation";


const ContactHeader: React.FC = () => {

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

        <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/career%20H.png')" }}>
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
            <h1 className="text-4xl lg:text-6xl mb-6 wulkan-display tracking-wide">Together,</h1>
            <p className="text-6xl marope-medium mb-8 ">We Build Better.</p>
            <div className="w-[400px]">Be part of a culture that values innovation, growth, and the power of good design.</div>
            <div className="flex gap-4 mt-6">
              <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl font-semibold shadow ">Current Openings</button>
            </div>
          </div>

        </div>


      </div>




      {/* 1280 Version */}



      <div className="desktop-1280">
        <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
            style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/career%20H.png')" }}
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
            <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-15">
              <h1 className="text-4xl lg:text-6xl mb-6 wulkan-display tracking-wide">Together,</h1>
              <p className="text-6xl marope-medium mb-8 ">We Build Better.</p>
              <div className="w-[400px]">Be part of a culture that values innovation, growth, and the power of good design.</div>
              <div className="flex gap-4 mt-6">
                <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl font-semibold shadow ">Current Openings</button>
              </div>
            </div>

          </div>


        </div>

      </div>


    </div>
  );
};

export default ContactHeader;
