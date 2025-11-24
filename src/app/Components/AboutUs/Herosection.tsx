
"use client";

import React from "react";
import Image from "next/image";
import NavMore from "../NavMore";
import ExploreRoomsDropdown from "../ExploreRooms";
import OfferingsDropdown from "../OfferingsDropdown";
import router from "next/router";
import Link from 'next/link';
import OverlapNavBar from "../OverlapNavBar";


const ContactHeader: React.FC = () => {
  const handleClick = () => {
    router.push("/");
  };

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };




  return <div>


    <style jsx>{`
                /* Ensure only one 3xl section exists */
                .aboutus-hero-3xl-container {
                    display: none !important;
                }
                
                @media (min-width: 2560px) {
                    .aboutus-hero-3xl-container {
                        display: block !important;
                        width: auto;
                        height: auto;
                        margin: 2rem;
                    }
                    
                    .aboutus-hero-3xl-relative {
                        position: relative;
                        width: full;
                        height: 100%;
                    }
                    
                    .aboutus-hero-3xl-bg-image {
                        width: 100%;
                        height: 100vh;
                        border-radius: 2rem;
                        
                    }
                    
                    .aboutus-hero-3xl-overlay {
                        position: absolute;
                        inset: 0;
                    }
                    
                    .aboutus-hero-3xl-button {
                        position: absolute;
                        top: 3rem;
                        right: 5rem;
                        z-index: 30;
                        width: 300px;
                        height: 65px;
                        font-family: 'ManropeMedium', sans-serif;
                        font-size: 1.5rem;
                        padding: 0 2rem 0.1rem;
                        background-color: #ddcdc1;
                        border-radius: 9999px;
                        border: none;
                        color: #000;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    }
                    
                    .aboutus-hero-3xl-button:hover {
                        background-color: #ef0101;
                        color: white;
                        transform: translateY(-2px);
                        box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
                    }
                    
                    .aboutus-hero-3xl-header {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        padding: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: -9rem;
                        margin-left: rem;
                    }
                    
                    .aboutus-hero-3xl-logo {
                        width: 800px;
                        height: 200px;
                        
                    }
                    
                    .aboutus-hero-3xl-nav {
                        color: white;
                        font-size: 1.5rem;
                        font-family: 'Manrope', sans-serif;
                        display: flex;
                        gap: 4rem;
                        margin: 0 auto;
                        padding-left: 40rem;
                        margin-top: 0.5rem;
                       
                    }
                    
                    .aboutus-hero-3xl-nav a {
                        color: white;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    
                    .aboutus-hero-3xl-nav a:hover {
                        color: #fbbf24;
                    }
                    
                    .aboutus-hero-3xl-content {
                        position: absolute;
                        top: 60%;
                        left: 6rem;
                        transform: translateY(-50%);
                        color: white;
                    }
                    
                    .aboutus-hero-3xl-title-1 {
                        font-size: 8rem;
                        font-family: 'ManropeMedium', sans-serif;
                        line-height: 1;
                        margin: 0;
                    }
                    
                    .aboutus-hero-3xl-title-2 {
                        font-size: 8rem;
                        font-family: 'WulkanDisplay', serif;
                        line-height: 1;
                        margin: 2.5rem 0;
                    }
                    
                    .aboutus-hero-3xl-title-3 {
                        font-size: 8rem;
                        font-family: 'ManropeMedium', sans-serif;
                        line-height: 1;
                        margin: 0;
                        
                    }
                }
                
                /* Hide 2xl section when 3xl is active (2560px+) */
                @media (min-width: 2560px) {
                    .aboutus-hero-2xl-section {
                        display: none !important;
                    }
                }
            `}</style>


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



    {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) */}
    {/* <div className="aboutus-hero-3xl-container hidden"> */}

{/* 
      <div className="aboutus-hero-3xl-relative">
        <img src="/ab1.png" alt="Background" className="aboutus-hero-3xl-bg-image" />
        <div className="aboutus-hero-3xl-overlay"></div> */}

        {/* Get Free Estimate Button - 3XL 2560*1440 optimized */}
        {/* <button className="aboutus-hero-3xl-button manrope-medium">Get Free Estimate</button> */}

        {/* Header - 3XL 2560*1440 optimized */}
        {/* <div className="aboutus-hero-3xl-header">
          <Image
            src="/redlogo.png"
            alt="LOGO"
            width={360}
            height={120}
            className="aboutus-hero-3xl-logo"
          /> */}

          {/* Navigation - 3XL 2560*1440 optimized */}
          {/* <nav className="aboutus-hero-3xl-nav">
            <Link href="/">HOME</Link>
            <Link href="/Services">SERVICE</Link>
            <Link href="/Services">EXPLORE ROOMS</Link>
          </nav>
        </div> */}

        {/* Main Content - 3XL 2560*1440 optimized */}
        {/* <div className="aboutus-hero-3xl-content">
          <div className="aboutus-hero-3xl-title-1">homes</div>
          <div className="aboutus-hero-3xl-title-2">uniquely</div>
          <div className="aboutus-hero-3xl-title-3">built</div>
        </div>
      </div>
    </div> */}



    {/* 2XL Screen - Large displays */}
    <div className="aboutus-hero-3xl-container hidden">
      <div className="w-auto h-full m-6 mb-25 mx-auto">
        <div className="relative w-full h-full">
          <img src="/ab1.png" alt="Background" className="w-full h-screen rounded-4xl" />
          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Get Free Estimate Button - 2XL optimized */}
          <div className="absolute top-8 right-8 z-30">
            <button className="w-[230px] h-[50px] manrope-medium text-lg px-8 py-3 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-lg">
              Get Free Estimate
            </button>
          </div>

          {/* Header - 2XL optimized */}
          <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between -mt-26">
            <Image src="/redlogo.png" alt="LOGO" width={220} height={100} className="mb-170" />

            {/* Navigation */}
            <nav className="text-white text-2xl manrope space-x-10 mr-80 -mt-158">
              <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
              <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
              <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="absolute left-16 -translate-y-1/2 text-white -mt-60">
            <div className="text-6xl manrope-medium leading-tight">homes,</div>
            <div className="text-7xl wulkan-display my-6 leading-tight">uniquely</div>
            <div className="text-6xl manrope-medium leading-tight">built</div>
          </div>
        </div>
      </div>
    </div>








    
    <div className="desktop-1440 hidden">
      <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/ab1.png')" }}>
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
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-35">
          <h1 className="w-[1200px] text-5xl lg:text-6xl text-left  manrope mb-3 drop-shadow-lg -ml-10">
            homes,
          </h1>
          <div className="w-[1200px] text-left  text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg -ml-10">uniquely</div>
          <div className="w-[1200px] text-left text-5xl lg:text-6xl manrope  mb-3 drop-shadow-lg -ml-10">built</div>
        </div>
      </div>
    </div>




    <div className="desktop-1280">
      <div className="hidden md:flex justify-center  bg-[#f9f9f9]">
        {/* Inner container with background */}
        <div
          className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
          style={{ backgroundImage: "url('/ab1.png')" }}
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
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-35 ml-10">
            <h1 className="w-[1200px]  text-5xl lg:text-6xl text-left  manrope mb-3 drop-shadow-lg ml-5">
              homes,
            </h1>
            <div className="w-[1200px]  text-5xl lg:text-6xl text-left ml-3 wulkan-display  mb-3 drop-shadow-lg ">uniquely</div>
            <div className="w-[1200px] text-left  text-5xl lg:text-6xl manrope  mb-3 drop-shadow-lg ml-5">built</div>
          </div>


        </div>
      </div>
    </div>


    {/* Mobile Version */}

    <div className="md:hidden w-full max-w-[425px] mx-auto mb-5  overflow-hidden">
      <div className="relative h-full w-full p-2">
        {/* Rounded image only */}
        <img src="/ABH.png" className="rounded-4xl" alt="" />

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

        

{/* Hamburger removed(commented) as nav bar is placed *

        {/* Hamburger Menu Button + Mobile Menu */}
        {/* <div className="absolute top-8 right-1 z-50 "> */}
          {/* <button
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
          </button> */}

          {/* Mobile Navigation Menu */}
          {/* {isMobileMenuOpen && (
            <div className="fixed top-0 right-0 w-64 h-140 bg-white/95 backdrop-blur-sm z-50 rounded-l-[25px] overflow-hidden shadow-lg">
              <div className="p-4  relative"> */}
                {/* Close Button */}
                {/* <button
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
                </button> */}

                {/* Navigation Items */}
                {/* <div className="space-y-4 mt-5">
                  <div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                        OFFERINGS
                      </h3>
                      <div className="space-y-2 pl-3">
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
                    <div className="space-y-2 pl-3"> 
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
                    <div className="space-y-2 pl-3">
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
                </div> */}
              {/* </div>
            </div>
          )} */}
        {/* </div> */}
{/* Hamburger removed(commented) as nav bar is placed *



        {/* Overlay text + CTA */}
        <h2 className="manrope leading-tight">
          <div className="absolute top-40 text-white w-full px-3 ml-3 mt-10">
            <div className="text-[47px] sm:text-5xl manrope-medium leading-tight">homes,</div>
            <div className="text-[65px] sm:text-6xl wulkan-display my- leading-tight">uniquely</div>
            <div className="text-[47px] sm:text-5xl manrope-medium leading-tight">built</div>
          </div>
        </h2>
      </div>

    <OverlapNavBar />

    </div>

    
  </div>


    ;
};

export default ContactHeader;