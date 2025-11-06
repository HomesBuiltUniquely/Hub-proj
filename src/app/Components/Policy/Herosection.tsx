"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import Link from 'next/link';


const PolicyHeroSimple: React.FC = () => {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  function handleClick() {
    router.push("/");
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      <div
        className="desktop-1440 w-[1400px] h-[900px] mx-auto mt-3 rounded-3xl overflow-hidden bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20H.png')" }}
      >
        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between -mt-23 -ml-3">
          <div onClick={handleClick}> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] ml-5 mt-5" /></div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-6 ">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101] manrope-medium hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium mr-15 mt-6 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
          <h1 className="text-7xl mb-6 drop-shadow-lg manrope">
            Policy Center
          </h1>
          <p className="text-lg  mb-8 drop-shadow-lg w-[600px] manrope-medium">
            Everything You Need to Know.
          </p>
        </div>
      </div>

      {/* 1280px Desktop Layout */}
      <div
        className="desktop-1280 max-w-[1280px] h-[800px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20H.png')" }}
      >
        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between -mt-15">
          {/* Logo */}
          <div onClick={handleClick} className="cursor-pointer">
            <Image
              src="/redlogo.png"
              alt="HUB Interior Logo"
              width={230}
              height={250}
              className="w-[full] h-[full] -mt-3 ml-"
            />
          </div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 -mt-1">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-[#ef0101]  hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt- shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center mt-40 pb-10 text-white text-center">
          <h1 className="text-6xl  manrope mb-5 drop-shadow-lg">
            Policy Center
          </h1>
          <p className="text-base manrope-medium mb-6 drop-shadow-lg w-[500px] max-w-[90%]">
            Everything You Need to Know.
          </p>
        </div>
      </div>



      {/* Mobile Version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 mt-3 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}
            <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Policy%20MH.png" alt="" />

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
                <div className="fixed top-0 right-0 w-64 h-140 bg-white/95 backdrop-blur-sm z-50 rounded-l-[25px] overflow-hidden shadow-lg">
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
                        <div>
                          <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                            OFFERINGS
                          </h3>
                          <div className="space-y-2 pl-3"> {/* Increased spacing here */}
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Full Home Interior
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Modular Interior
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Home Renovation
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Space Management
                            </Link>
                          </div>
                        </div>

                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-3 manrope">
                          EXPLORE ROOMS
                        </h3>
                        <div className="space-y-2 pl-3"> {/* increased vertical spacing */}
                          <Link href="/ModularKitchen" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Modular Kitchen
                          </Link>
                          <Link href="/Bedroom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Bedroom
                          </Link>
                          <Link href="/LivingRoom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Living Room
                          </Link>
                          <Link href="/LivingRoom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Kids Room
                          </Link>
                        </div>


                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-3 manrope">
                          MORE
                        </h3>
                        <div className="space-y-2 pl-3"> {/* increased vertical spacing */}
                          <Link href="/AboutUs" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            About Us
                          </Link>
                          <Link href="/Project" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Projects
                          </Link>
                          <Link href="/Blog" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Blog
                          </Link>
                          <Link href="/ContactUs" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Contact Us
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>


            {/* Overlay text + CTA */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="manrope text-3xl text-white leading-tight">
                Policy Center
              </h2>
              <p className="manrope-medium text-sm sm:text-md text-white  mb-4 drop-shadow-lg max-w-[90%]">
                Everything You Need to Know.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PolicyHeroSimple;
