'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Herosection() {
    return (
        <>
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
            
            {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) */}
            <div className="aboutus-hero-3xl-container hidden">
                <div className="aboutus-hero-3xl-relative">
                    <img src="/ab1.png" alt="Background" className="aboutus-hero-3xl-bg-image" />
                    <div className="aboutus-hero-3xl-overlay"></div>
                    
                    {/* Get Free Estimate Button - 3XL 2560*1440 optimized */}
                    <button className="aboutus-hero-3xl-button">Get Free Estimate</button>
                    
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
            <div className="aboutus-hero-2xl-section hidden 2xl:block 3xl:hidden">
                <div className="w-auto h-auto m-6">
                    <div className="relative w-full h-full">
                        <img src="/ab1.png" alt="Background" className="w-full h-screen rounded-4xl" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button - 2XL optimized */}
                        <div className="absolute top-8 right-8 z-30">
                            <button className="w-[230px] h-[50px] manrope-medium text-lg px-8 py-3 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-lg  2xl-1850:bg-red-500">Get Free Estimate</button>
                        </div>
                        
                        {/* Header - 2XL optimized */}
                        <div className="absolute top-0 left-0 w-full p-8 flex items-center  justify-between -mt-26">
                            <Image 
                                src="/redlogo.png" 
                                alt="LOGO" 
                                width={220} 
                                height={100} 
                                className="mb-170"
                            
                            />
                            
                            {/* Navigation - 2XL optimized */}
                            <nav className="text-white text-2xl manrope space-x-10 mr-80 -mt-158">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>
                        
                        {/* Main Content - 2XL optimized */}
                        <div className="absolute  left-16 -translate-y-1/2 text-white -mt-60">
                            <div className="text-6xl manrope-medium leading-tight ">HOMES,</div>
                            <div className="text-7xl wulkan-display my-6 leading-tight">uniquely</div>
                            <div className="text-6xl manrope-medium leading-tight">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* XL Screen - Extra large displays */}
            <div className="hidden xl:block 2xl:hidden 3xl:hidden">
                <div className="w-auto h-[550px] m-4 ">
                    <div className="relative w-full h-full">
                        <img src="/ab1.png" alt="Background" className="w-full h-[800px] rounded-4xl" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button - XL optimized */}
                        <div className="ml-290 -mt-190 ">
                            <button className="manrope-medium text-lg px-8 py-3 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-lg">Get Free Estimate</button>
                        </div>
                        
                        {/* Header - XL optimized */}
                        <div className="absolute -mt-50 right-5 w-full p-8 flex items-center justify-between mr-2">
                            <Image 
                                src="/redlogo.png" 
                                alt="LOGO" 
                                width={240} 
                                height={100} 
                              
                            />
                            
                            {/* Navigation - XL optimized */}
                            <nav className="text-white text-xl manrope space-x-8 pr-65 pb-12 mt-25">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>
                        
                        {/* Main Content - XL optimized */}
                        <div className="absolute top-1/2 ml-20 -translate-y-1/2 text-white mt-70">
                            <div className="text-6xl manrope-medium leading-tight">HOMES,</div>
                            <div className="text-7xl wulkan-display my-4 leading-tight">uniquely</div>
                            <div className="text-6xl manrope-medium leading-tight">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden 3xl:hidden">
                <div className="w-auto h-auto m-6">
                    <div className="relative w-full h-full">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen object-cover" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button - LG optimized */}
                        <div className="absolute top-4 right-6 z-30">
                            <button className="manrope-medium text-base px-6 py-2.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-md ">Get Free Estimate</button>
                        </div>
                        
                        {/* Header - LG optimized */}
                        <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between">
                            <Image 
                                src="/redlogo.png" 
                                alt="LOGO" 
                                width={140} 
                                height={70} 
                                className="w-[140px] h-[70px]"
                            />
                            
                            {/* Navigation - LG optimized */}
                            <nav className="text-white text-lg manrope space-x-6 mx-auto">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>
                        
                        {/* Main Content - LG optimized */}
                        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-white">
                            <div className="text-4xl manrope-medium leading-tight">HOMES,</div>
                            <div className="text-5xl wulkan-display my-3 leading-tight">uniquely</div>
                            <div className="text-4xl manrope-medium leading-tight">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden 3xl:hidden">
                <div className="w-auto h-auto m-4">
                    <div className="relative w-full h-full">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen object-cover" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button - MD optimized */}
                        <div className="absolute top-3 right-4 z-30">
                            <button className="manrope-medium text-sm px-4 py-1.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-md">Get Free Estimate</button>
                        </div>
                        
                        {/* Header - MD optimized */}
                        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between">
                            <Image 
                                src="/redlogo.png" 
                                alt="LOGO" 
                                width={100} 
                                height={50} 
                                className="w-[100px] h-[50px]"
                            />
                            
                            {/* Navigation - MD optimized */}
                            <nav className="text-white text-base manrope space-x-4 mx-auto">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>
                        
                        {/* Main Content - MD optimized */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white">
                            <div className="text-3xl manrope-medium leading-tight"></div>
                            <div className="text-4xl wulkan-display my-2 leading-tight">uniquely</div>
                            <div className="text-3xl manrope-medium leading-tight">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden 3xl:hidden">
                <div className="w-auto h-auto m-2">
                    <div className="relative w-full h-full">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen object-cover" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button - SM optimized */}
                        <div className="absolute top-2 right-3 z-30">
                            <button className="manrope-medium text-xs px-3 py-1 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-sm">Get Free Estimate</button>
                        </div>
                        
                        {/* Header - SM optimized */}
                        <div className="absolute top-0 left-0 w-full p-3 flex items-center justify-between">
                            <Image 
                                src="/redlogo.png" 
                                alt="LOGO" 
                                width={80} 
                                height={40} 
                                className="w-[80px] h-[40px]"
                            />
                            
                            {/* Navigation - SM optimized */}
                            <nav className="text-white text-sm manrope space-x-3 mx-auto">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>
                        
                        {/* Main Content - SM optimized */}
                        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-white">
                            <div className="text-2xl manrope-medium leading-tight">HOMES,</div>
                            <div className="text-3xl wulkan-display my-1 leading-tight">uniquely</div>
                            <div className="text-2xl manrope-medium leading-tight">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
