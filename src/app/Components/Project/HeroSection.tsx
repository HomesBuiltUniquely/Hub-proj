"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  function handleClick() {
    router.push("/");
  }


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

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
        <div className="relative z-10 flex items-center justify-between -mt-23 -ml-3">
          <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] ml-9 mt-4" /></div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5 ">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope-medium hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
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
        <div className="relative z-10 flex items-center justify-between -mt-23 -ml-3">
          <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] ml-9 mt-4" /></div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5 ">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope-medium hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>

        {/* Hero content */}
        <div className="flex w-[600px] flex-col items-center justify-center pt-90 pb-20 text-white text-center pr-30">
          <div className="text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg text-nowrap ml-55">HUB Interior Portfolio </div>
          <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] -ml-12">Elegant, Functional & Timeless Designs</p>
        </div>

      </div>



      {/* mobile version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}
            <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSMH.webp" alt="" />

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




          {/* Hamburger Menu Button + Mobile Menu */}
        <div className="absolute top-8 right-1 z-50 ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white pr-6"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 right-0 w-64 h-125 bg-white/95 backdrop-blur-sm z-50 rounded-l-[25px] overflow-hidden shadow-lg">
              <div className="p-4  relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Navigation Items */}
                <div className="space-y-4 mt-5">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                      OFFERINGS
                    </h3>
                    <div className="space-y-1 pl-3">
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Full Home Interior
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Modular Interior
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Home Renovation
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Space Management
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                      EXPLORE ROOMS
                    </h3>
                    <div className="space-y-1 pl-3">
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Modular Kitchen
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Bedroom
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Living Room
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Kids Room
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                      MORE
                    </h3>
                    <div className="space-y-1 pl-3">
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        About Us
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Projects
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Blog
                      </p>
                      <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">
                        Contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>


          {/* Overlay text + CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="manrope text-2xl sm:text-3xl font-semibold text-white leading-tight">
              HUB Interior Portfolio
            </h2>
            <p className="manrope-medium text-sm sm:text-md text-white mt-3 mb-4 drop-shadow-lg max-w-[90%]">
              Elegant, Functional & Timeless Designs
            </p>

          </div>
        </div>
      </div>
   </div>

    </>
  )
};

export default ContactHeader;
