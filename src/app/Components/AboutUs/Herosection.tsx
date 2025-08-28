'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Herosection() {
    return (
        <div>
            {/* XXL Screen Size (2xl) */}
            <div className="hidden 2xl:block">
                <div className="w-[2510px] h-screen m-6">
                    <div className="relative">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between">
                            <Image src="/LOGO.png" alt="LOGO" width={180} height={90} />
                            <nav className="text-white text-2xl manrope space-x-10 pl-300">
                                <Link href="/" className="hover:text-amber-300">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300">EXPLORE ROOMS</Link>
                            </nav>
                            <button className="w-[320px] h-[70px] manrope-medium text-[20px] mr-15 -mt-4 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors">Get Free Estimate</button>
                        </div>
                        <div className="absolute top-240 left-16 -translate-y-1/2 text-white ">
                            <div className="text-[76px] manrope-medium">HOMES</div>
                            <div className="text-[90px] wulkan-display ">uniquely</div>
                            <div className="text-[76px] manrope-medium">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* XL Screen Size - Fully Responsive */}
            <div className="hidden xl:block 2xl:hidden">
                {/* Use w-screen and h-screen to fill the viewport */}
                <div className="w-auto h-screen m-6">
                    <div className="relative w-full h-full">
                        
                        <Image
                            src="/Mask-group.png"
                            alt="Background"
                            layout="fill"
                            quality={90}
                            className="z-0"
                        />
                       
                        <div className="absolute inset-0 bg-opacity-40 z-10"></div>
                        <div className="relative z-20 h-full flex flex-col p-8">
                            
                            <div className="absolute top-4 right-8 z-30">
                                <button className=" mx-auto manrope-medium text-base px-6 py-2.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors -mt-10">Get Free Estimate</button>
                            </div>
                            
                            <header className="flex w-full justify-between ">
                                <div className="flex-shrink-0">
                                    <Image src="/LOGO.png" alt="LOGO" width={160} height={80} />
                                </div>
                                <nav className="text-white text-xl manrope space-x-8 mx-auto ">
                                    <Link href="/" className="hover:text-amber-300 transition-colors text-[16px]">HOME</Link>
                                    <Link href="/Services" className="hover:text-amber-300 transition-colors text-[16px]">SERVICE</Link>
                                    <Link href="/Services" className="hover:text-amber-300 transition-colors text-[16px]">EXPLORE ROOMS</Link>
                                </nav>
                            </header>
                            <main className="flex-grow flex items-center mt-40">
                                <div className="text-white ml-4">
                                    <div className="text-6xl manrope-medium">HOMES,</div>
                                    <div className="text-7xl wulkan-display my-4">uniquely</div>
                                    <div className="text-6xl manrope-medium">BUILT</div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Screen Size (lg) */}
            <div className="hidden lg:block xl:hidden">
                <div className="w-screen h-screen">
                    <div className="relative">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button for lg screens */}
                        <div className="absolute top-4 right-8 z-30">
                            <button className="manrope-medium text-base px-6 py-2.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors">Get Free Estimate</button>
                        </div>
                        
                        <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between">
                            <Image src="/LOGO.png" alt="LOGO" width={140} height={70} />
                            <nav className="text-white text-base manrope space-x-6">
                                <Link href="/" className="hover:text-amber-300">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300">EXPLORE</Link>
                            </nav>
                        </div>
                        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
                            <div className="text-6xl manrope-medium">HOMES,</div>
                            <div className="text-7xl wulkan-display my-3">uniquely</div>
                            <div className="text-6xl manrope-medium">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medium Screen Size (md) */}
            <div className="hidden md:block lg:hidden">
                <div className="w-screen h-screen">
                    <div className="relative">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button for md screens */}
                        <div className="absolute top-4 right-6 z-30">
                            <button className="manrope-medium text-sm px-5 py-2 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors">Get Free Estimate</button>
                        </div>
                        
                        <div className="absolute top-0 left-0 w-full p-5 flex items-center justify-between">
                            <Image src="/LOGO.png" alt="LOGO" width={120} height={60} />
                            {/* Hamburger Menu Icon */}
                            <button className="text-white text-3xl">&#9776;</button>
                        </div>
                        <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white">
                            <div className="text-5xl manrope-medium">HOMES,</div>
                            <div className="text-6xl wulkan-display my-2">uniquely</div>
                            <div className="text-5xl manrope-medium">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Small Screen Size (sm) and default mobile */}
            <div className="block md:hidden">
                <div className="w-screen h-screen">
                    <div className="relative">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        
                        {/* Get Free Estimate Button for mobile screens */}
                        <div className="absolute top-3 right-4 z-30">
                            <button className="manrope-medium text-xs px-4 py-1.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors">Get Free Estimate</button>
                        </div>
                        
                        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between">
                            <Image src="/LOGO.png" alt="LOGO" width={100} height={50} />
                            {/* Hamburger Menu Icon */}
                            <button className="text-white text-2xl">&#9776;</button>
                        </div>
                        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-white">
                            <div className="text-4xl manrope-medium">HOMES,</div>
                            <div className="text-5xl wulkan-display my-2">uniquely</div>
                            <div className="text-4xl manrope-medium">BUILT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
