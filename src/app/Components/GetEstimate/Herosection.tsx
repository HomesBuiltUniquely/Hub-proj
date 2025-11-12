"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import EstimateForm from "./EstimateForm";
import Link from "next/link";


const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  const handleClick = () => {
    router.push('/');
  };


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <style jsx>{`
        /* Hide all sections by default */
        .desktop-1440,
        .desktop-1280,
        .mobile-small,
        .mobile-large {
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

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 479px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 480px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>



      <div className="desktop-1440 w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/gh1.png')" }}>
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
        <div className="flex justify-between pt-24 pb-20 text-white text-center mt-25">
          <div className=" w-[310px] mt-20">
            <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-2 drop-shadow-lg ml-17 text-nowrap">Get free estimate</h1>
            <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg -ml-92">Your ideas, our cost estimate</p>
          </div>
          <div className="-mt-30 mr-20">
            <EstimateForm />
          </div>
        </div>
      </div>



      {/* 1280px version */}
      <div className="desktop-1280 max-w-[1280px] h-[800px] mx-auto  rounded-3xl overflow-hidden relative  bg-cover  bg-center ">
        {/* Navbar */}
        <img src={"/gh1.png"} className=" w-full"></img>

        <div className="flex items-center justify-between -mt-15 absolute top-0 left-0 right-0">
          <div onClick={handleClick} className="cursor-pointer">
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[200px] h-full  ml-4 mt-2" />
          </div>
          <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-85 mt-4">
            <OfferingsDropdown textColor="text-white" />
            <ExploreRoomsDropdown textColor="text-white" />
            <NavMore textColor="text-white" />
          </div>
          <button onClick={handleGetEstimate} className="bg-orange-100 text-black px-4 py-2 rounded-4xl font-semibold shadow  mr-13 mt-4">GET FREE ESTIMATE</button>
        </div>
        {/* Hero content */}
        <div className="flex justify-between pt-24 pb-20 text-white text-center mt-70 absolute top-0 left-0 right-0">
          <div className="w-[310px] mt-4 ml-10">
            <h1 className="text-5xl lg:text-6xl manrope mb-6 drop-shadow-lg">Get free <span className="ml-4">estimate</span></h1>
            <p className="manrope-medium">Your ideas, our cost estimate</p>
          </div>
          <div className=" -mt-30 mr-10">
            <EstimateForm />
          </div>
        </div>
      </div>



      {/* Mobile version */}


      <div className="block md:hidden ">

        <div>
          <div className="md:hidden w-full max-w-[425px] mx-auto  overflow-hidden">
            <div className="relative h-full w-full p-2">
              {/* Rounded image only */}
              <img src="/gh11.png" alt="" />

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


              {/* text + cta */}
              <div className="absolute bottom-25 left-4 right-4 ml-3 text-white">
                <h2 className="manrope text-5xl ">
                  Get your estimate
                </h2>
                <p className="mt-2 text-[15px] manrope-medium opacity-90">
                  Your ideas, our cost estimate
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;