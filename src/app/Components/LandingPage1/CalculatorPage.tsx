'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CalculatorPage() {
    const router = useRouter();
    const [hideCalculator, setHideCalculator] = useState(false);

    // Hide calculator when gad_source=5 is present in URL
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('gad_source') === '5') {
                setHideCalculator(true);
            }
        }
    }, []);
    function handelSubmit() {
        router.push('/interior-designers-in-bangalore/Calculator')
    }
    if (hideCalculator) {
        return null;
    }
    return (

        <div>
            <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        
        /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }


          /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }
          
      `}</style>


            <div id="calculator-section" className="w-full h-auto -mt-10">
                {/* Mobile Version */}
                <div className="lg:hidden h-[500px]">
                    <h1 className="text-4xl sm:text-3xl text-black text-start leading-10 px-3 manrope-medium">Get A Free Estimate for Your <span className="text-red-600">Interiors</span></h1>
                    <div className="px-4 ">
                        <div className="w-full max-w-sm mx-auto h-auto rounded-3xl mt-8 p-6 shadow-lg bg-[#F1F2F6]">
                            <div className="flex justify-center gap-4 mb-4">
                                <img src="/calimages.png" alt="calimages" className="w-24 h-25 sm:w-20 sm:h-20"></img>
                            </div>
                            <div className="">
                                <div className="text-center text-lg sm:text-xl text-[30px] manrope ">Full Home</div>
                                <div className="text-center text-sm sm:text-base manrope-medium text-[18px] font-semibold w-full mb-6">Get an estimated cost for your complete home interiors.</div>
                            </div>
                            <button className="w-full h-12 sm:h-14 bg-[#ef0101] rounded-2xl mt-2 " onClick={handelSubmit}>
                                <div className="flex justify-center items-center gap-2">
                                    <p className="text-white  sm:text-base text-xl manrope pl-3">Calculate</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>


                {/* Desktop Version */}

                {/* 2560 Version */}


                <div className="desktop-2560 hidden lg:block mt-20 mx-auto px-20">
                    <div className="rounded-3xl bg-white flex justify-between items-center px-15 py-10">

                        {/* LEFT — Vertically Centered Text */}
                        <div className="flex-1">
                            <h1 className="text-5xl manrope leading-snug">
                                Get A Free Estimate For <br />
                                <span className="text-red-600">Your Interiors</span>
                            </h1>
                        </div>

                        {/* RIGHT — Perfectly Fitted Card */}
                        <div className="flex justify-end flex-1">
                            <div className="w-[500px] h-[500px] bg-[#F1F2F6] rounded-3xl shadow-xl p-10 flex justify-center flex-col items-center">

                                {/* Icon */}
                                <img
                                    src="/calimages.png"
                                    alt="Estimate Icon"
                                    className="w-[120px] h-[120px] mt-2"
                                />

                                {/* Title */}
                                <h2 className="text-3xl manrope mt-6">Full Home</h2>

                                {/* Description */}
                                <p className="text-center text-2xl manrope-medium text-gray-700 mt-3 px-4">
                                    Get an estimated cost for your complete home interiors.
                                </p>

                                {/* Button */}
                                <button
                                    className="w-full h-[55px] bg-red-600 rounded-xl hover:bg-red-700 mt-5 flex justify-center items-center gap-3"
                                    onClick={handelSubmit}
                                >
                                    <span className="text-white text-[18px] manrope">Calculate</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>


                {/* 1920 Version */}

                <div className="desktop-1920 hidden lg:block mt-20 mx-auto px-20">
                    <div className="rounded-3xl bg-white flex justify-between items-center px-15 py-10">

                        {/* LEFT — Vertically Centered Text */}
                        <div className="flex-1">
                            <h1 className="text-5xl manrope leading-snug">
                                Get A Free Estimate For <br />
                                <span className="text-red-600">Your Interiors</span>
                            </h1>
                        </div>

                        {/* RIGHT — Perfectly Fitted Card */}
                        <div className="flex justify-end flex-1">
                            <div className="w-[500px] h-[500px] bg-[#F1F2F6] rounded-3xl shadow-xl p-10 flex justify-center flex-col items-center">

                                {/* Icon */}
                                <img
                                    src="/calimages.png"
                                    alt="Estimate Icon"
                                    className="w-[120px] h-[120px] mt-2"
                                />

                                {/* Title */}
                                <h2 className="text-3xl manrope mt-6">Full Home</h2>

                                {/* Description */}
                                <p className="text-center text-2xl manrope-medium text-gray-700 mt-3 px-4">
                                    Get an estimated cost for your complete home interiors.
                                </p>

                                {/* Button */}
                                <button
                                    className="w-full h-[55px] bg-red-600 rounded-xl hover:bg-red-700 mt-5 flex justify-center items-center gap-3"
                                    onClick={handelSubmit}
                                >
                                    <span className="text-white text-2xl manrope">Calculate</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>





                {/* 1280 Version */}



                <div className="desktop-1280 hidden lg:block mt-20 mx-auto px-15">
                    <div className="rounded-3xl bg-white flex justify-between items-center px-15 py-10">

                        {/* LEFT — Vertically Centered Text */}
                        <div className="flex-1">
                            <h1 className="text-4xl manrope leading-snug">
                                Get A Free Estimate For <br />
                                <span className="text-red-600">Your Interiors</span>
                            </h1>
                        </div>

                        {/* RIGHT — Perfectly Fitted Card */}
                        <div className="flex justify-end flex-1">
                            <div className="w-[450px] h-[450px] bg-[#F1F2F6] rounded-3xl shadow-xl p-10 flex justify-center flex-col items-center">

                                {/* Icon */}
                                <img
                                    src="/calimages.png"
                                    alt="Estimate Icon"
                                    className="w-[120px] h-[120px] mt-2"
                                />

                                {/* Title */}
                                <h2 className="text-3xl manrope mt-6">Full Home</h2>

                                {/* Description */}
                                <p className="text-center text-2xl manrope-medium text-gray-700 mt-3 px-4">
                                    Get an estimated cost for your complete home interiors.
                                </p>

                                {/* Button */}
                                <button
                                    className="w-full h-[55px] bg-red-600 rounded-xl hover:bg-red-700 mt-5 flex justify-center items-center gap-3"
                                    onClick={handelSubmit}
                                >
                                    <span className="text-white text-2xl manrope">Calculate</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}