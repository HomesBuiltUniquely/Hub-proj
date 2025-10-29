"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <div>   <style jsx>{`

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
        <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={220} height={100} className="w-[250px] h-full -mt-2 -ml-2" />
            </div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm  text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-45">
            <h1 className="w-[1000px] text-5xl text-left md:text-8xl manrope mb-3 drop-shadow-lg -ml-55">HUB Customers&#39; Stories</h1>
            <p className="w-[700px] text-xl text-left manrope-medium mb-8 drop-shadow-lg -ml-130">From design to delivery, every review reflects our uniquely built home stories and promise.
            </p>
          </div>
        </div>
      </div>




      {/* 1280 version  */}

      <div className="desktop-1280">



        <div className="w-[1240px] h-[800px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={220} height={100} className="w-[225px] h-full  -ml-2" />
            </div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm text-white tracking-widest ml-50 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>

          {/* Hero content */}
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-40">
            <h1 className="w-[800px] text-5xl text-left lg:text-8xl manrope mb-3 drop-shadow-lg -ml-70">
              HUB Customers&#39; Stories
            </h1>
            <p className="w-[550px] text-lg text-left manrope-medium mb-8 drop-shadow-lg -ml-130">
              From design to delivery, every review reflects our uniquely built home stories and promise.
            </p>
          </div>
        </div>



      </div>




      {/* mobile version */}

      <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
        <div className="relative h-full w-full p-2">
          {/* Rounded image only */}
          <img src="Mkh1.png" alt="" />

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
        </div>


        {/* Hamburger Menu Button + Mobile Menu */}
        <div className="absolute top-8 right-1 z-50 ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black pr-6"
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
        {/* Hero content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center -mt-70">
          <h1 className="w-[300px] text-3xl text-left lg:text-3xl manrope mb-2 drop-shadow-lg ">HUB Customers&#39; Stories</h1>
          <p className="w-[300px] text-xs text-left manrope-medium mb-8 drop-shadow-lg ">From design to delivery, every review reflects our uniquely built home stories and promise.
          </p>

        </div>

      </div>

    </div>
  );
};

export default ContactHeader;
