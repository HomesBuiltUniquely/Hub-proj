"use client"

import React, { useState } from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import { useRouter } from "next/navigation";
import Link from "next/link";




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


      <div>

        {/* Desktop Version */}
        <div className="desktop-1440  hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/WallInterior%20H.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer"> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-2" /></div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button onClick={handleGetEstimate} className="bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl manrope-medium  mr-15 mt-5 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-70 ml-20">
            <h1 className="w-[1200px] text-5xl lg:text-7xl manrope mb-6 drop-shadow-lg">
              Designer Wall Interiors

            </h1>

            <p className="w-[1200px] text-2xl manrope-medium mb-8 drop-shadow-lg">
              Creative wall decor solutions that add character and uniqueness to your home.


            </p>

            <div className="flex gap-4">
              <button
                onClick={handleGetEstimate}
                className="bg-yellow-300 text-black px-6 py-3 rounded-full manrope-medium shadow"
              >
                Get Free Quote
              </button>
            </div>
          </div>

        </div>

      </div>



      {/* 1280 version */}

      <div className="desktop-1280">
        <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
          {/* Inner container with background */}
          <div
            className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
            style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/WallInterior%20H.png')" }}
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
            <div className="flex flex-col text-white text-left mt-75 pl-12 space-y-6 max-w-[950px]">
              <h1 className="text-6xl lg:text-7xl font-semibold manrope drop-shadow-lg">
                Designer Wall Interiors

              </h1>

              <p className="text-2xl manrope-medium drop-shadow-lg">
                Creative wall decor solutions that add character and uniqueness to your home.


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
      </div>








      {/* ===== MOBILE VERSION ===== */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus mt-3 mb-10">
        <div className="relative h-[450] w-[full] ">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/WallInterior%20MH.png"
              alt="Wall Decor"
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


          {/* text + cta */}

          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="manrope text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Designer Wall Interiors

            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Creative wall decor solutions that add character and uniqueness to your home.


            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden p-3 mk-mobile-300 mobile-300 mb-10">
        <div className="relative h-[450] w-[100%]  mt-3">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/WallInterior%20MH.png"
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
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={82} height={50} className="cursor-pointer" />
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


          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="manrope  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Designer Wall Interiors

            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Creative wall decor solutions that add character and uniqueness to your home.

            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default ContactHeader;
