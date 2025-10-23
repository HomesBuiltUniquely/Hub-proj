'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Herosection() {
    return (
        <> <div >
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
            <div className="aboutus-hero-3xl-container hidden">


                <div className="aboutus-hero-3xl-relative">
                    <img src="/ab1.png" alt="Background" className="aboutus-hero-3xl-bg-image" />
                    <div className="aboutus-hero-3xl-overlay"></div>

                    {/* Get Free Estimate Button - 3XL 2560*1440 optimized */}
                    <button className="aboutus-hero-3xl-button manrope-medium">Get Free Estimate</button>

                    {/* Header - 3XL 2560*1440 optimized */}
                    <div className="aboutus-hero-3xl-header">
                        <Image
                            src="/redlogo.png"
                            alt="LOGO"
                            width={360}
                            height={120}
                            className="aboutus-hero-3xl-logo"
                        />

                        {/* Navigation - 3XL 2560*1440 optimized */}
                        <nav className="aboutus-hero-3xl-nav">
                            <Link href="/">HOME</Link>
                            <Link href="/Services">SERVICE</Link>
                            <Link href="/Services">EXPLORE ROOMS</Link>
                        </nav>
                    </div>

                    {/* Main Content - 3XL 2560*1440 optimized */}
                    <div className="aboutus-hero-3xl-content">
                        <div className="aboutus-hero-3xl-title-1">homes</div>
                        <div className="aboutus-hero-3xl-title-2">uniquely</div>
                        <div className="aboutus-hero-3xl-title-3">built</div>
                    </div>
                </div>
            </div>



            {/* 2XL Screen - Large displays */}
            <div className="desktop-1440">
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







            <div className="desktop-1280">
                <div className="w-full h-[550px] mb-4 mx-auto ml-15">
                    <div className="relative w-full h-full">
                        <img src="/ab1.png" alt="Background" className="w-full h-[800px] rounded-4xl" />
                        <div className="absolute inset-0 bg-opacity-40"></div>

                        {/* Get Free Estimate Button */}
                        <div className="absolute top-8 right-8 z-30">
                            <button className="manrope-medium text-lg px-8 py-3 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-lg">
                                Get Free Estimate
                            </button>
                        </div>

                        {/* Logo div — fully independent */}
                        <div className='absolute bottom-86 right-5 w-full p-8 z-30'>
                            <div className="logo-container mb-4">
                                <Image
                                    src="/redlogo.png"
                                    alt="LOGO"
                                    width={220}
                                    height={100}
                                    className=""
                                />
                            </div>
                        </div>

                        <div className='absolute bottom-112 left-30 w-full p-8 z-30'>
                            <div className="nav-container text-white text-xl manrope font-bold">
                                <nav className="flex justify-center gap-10">
                                    <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                    <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                    <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="absolute top-120 left-16 -translate-y-1/2 text-white">
                            <div className="text-6xl manrope-medium leading-tight">homes,</div>
                            <div className="text-7xl wulkan-display my-4 leading-tight">uniquely</div>
                            <div className="text-6xl manrope-medium leading-tight">built</div>
                        </div>
                    </div>
                </div>
            </div>




            {/* SM Screen - Small displays and mobile */}

            <div className="md:hidden w-full max-w-[425px] mx-auto mb-15 mt-3 overflow-hidden">
                <div className="relative h-full w-full p-2">
                    {/* Rounded image only */}
                    <img src="ABH.png" alt="" />

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

                    {/* text + cta */}
                    <h2 className="manrope leading-tight">
                        <div className="absolute top-40 text-white w-full px-3 ml-3 mt-10">
                            <div className="text-[47px] sm:text-5xl manrope-medium leading-tight">homes,</div>
                            <div className="text-[65px] sm:text-6xl wulkan-display my-1 leading-tight">uniquely</div>
                            <div className="text-[47px] sm:text-5xl manrope-medium leading-tight">built</div>
                        </div>
                    </h2>
                </div>
            </div>






        </div>


        </>
    )
}

