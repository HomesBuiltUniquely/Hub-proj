"use client";
import React from "react";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OverlapNavBar from "../OverlapNavBar";


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
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }


         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>


      {/* 2560 Version */}

      <div className="desktop-2560">

        <div className="hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/career%20H.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-2 -ml-2" />
            </div>
            <div className="hidden md:flex items-center gap-12">
              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center  pb-20 text-white text-center mt-33">
            <h1 className="text-5xl lg:text-6xl wulkan-display tracking-wide">Together,</h1>
            <p className="text-6xl manrope-medium mb-2 mt-2">We Build Better</p>
            <div className="w-[400px] manrope-medium mb-2">Be part of a culture that values innovation, growth, and the power of good design.</div>
            <div className="flex gap-4">
              <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl manrope shadow ">Current Openings</button>
            </div>
          </div>



        </div>


      </div>



      {/* 1920 Version */}


      <div className="desktop-1920">

        <div className="hidden md:block w-[full] max-w-[1920px] h-[950px] mx-auto  rounded-3xl overflow-hidden  bg-cover bg-center  relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/career%20H.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-3 ml-2" />
            </div>

            <div className="hidden md:flex items-center gap-12">
              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center  pb-20 text-white text-center mt-33">
            <h1 className="text-5xl lg:text-6xl wulkan-display tracking-wide">Together,</h1>
            <p className="text-6xl manrope-medium mb-2 mt-2">We Build Better</p>
            <div className="w-[400px] manrope-medium mb-2">Be part of a culture that values innovation, growth, and the power of good design.</div>
            <div className="flex gap-4">
              <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl manrope shadow ">Current Openings</button>
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
              <div className="hidden md:flex -mt-12 items-center gap-12">


                {/* NAV BAR — unchanged */}
                <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                  <OfferingsDropdown textColor="text-white" />
                  <ExploreRoomsDropdown textColor="text-white" />
                  <NavMore textColor="text-white" />
                </div>

                {/* CTA — unchanged */}
                <button
                  onClick={handleGetEstimate}
                  className="relative bg-[#ef0101] mr-1 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
                >
                  BOOK CONSULTATION

                  <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                    <img src="/free.png" alt="Free" className="w-full h-full" />
                    <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                      FREE
                    </span>
                  </span>
                </button>

              </div>
            </div>

            {/* Hero content */}
            <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-15">
              <h1 className="text-5xl lg:text-6xl wulkan-display tracking-wide">Together,</h1>
              <p className="text-6xl manrope-medium mb-2 ">We Build Better.</p>
              <div className="w-[400px] manrope-medium">Be part of a culture that values innovation, growth, and the power of good design.</div>
              <div className="flex gap-4 mt-2">
                <button className="text-md bg-transparent border-1 border-white text-white px-6 py-4 rounded-2xl manrope shadow ">Current Openings</button>
              </div>
            </div>

          </div>


        </div>

      </div>


      {/* Mobile Version */}

      <div>

        <div className="md:hidden w-full max-w-[425px] mx-auto  mb-5 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}
            <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/CareeR%20MH.png" alt="" />

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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <div className="flex flex-col text-left items-center  mt-54 pb-20 text-white text-center mt-15">
                <h1 className="text-3xl wulkan-display mb-1 tracking-wide mr-48">Together,</h1>
                <p className="text-3xl text-nowrap manrope-medium mb-3 mr-23">We Build Better.</p>
                <div className="w-[330px] ml-5 manrope-medium">Be part of a culture that values innovation, growth, and the power of good design.</div>
              </div>
            </div>
          </div>
          <OverlapNavBar />
        </div>

      </div>

    </div>
  );
};

export default ContactHeader;
