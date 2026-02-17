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
        router.push('/Calculator')
    }
    if (hideCalculator) {
        return null;
    }
    return (

        <div>
            <style jsx>{`
                .desktop-1280,
                .desktop-1920,
                .desktop-2560 {
                    display: none !important;
                }

                @media (min-width: 1024px) and (max-width: 1439px) {
                    .desktop-1280 {
                        display: block !important;
                    }
                }
                @media (min-width: 1440px) and (max-width: 1920px) {
                    .desktop-1920 {
                        display: block !important;
                    }
                }
                @media (min-width: 1921px) {
                    .desktop-2560 {
                        display: block !important;
                    }
                }
            `}</style>



            <div id="calculator-section" className="w-full h-auto mb-20">
                {/* Mobile Version */}
                <div className="lg:hidden relative w-full rounded-3xl overflow-hidden px-3">

                    {/* Inner container where overlay + content stay */}
                    <div className="relative w-full rounded-3xl overflow-hidden">

                        {/* Background */}
                        <img
                            src="calrefM.png"
                            alt="Background"
                            className="w-full h-70 object-cover scale-105 blur-[0.25px] rounded-3xl"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                        {/* Centered Text Content */}
                        <div className="absolute inset-0 flex items-center justify-center px-4">
                            <div className="w-full max-w-[360px] text-center text-white flex flex-col items-center rounded-2xl">
                            
                                <h1 className="mt-3 typography-h2 manrope leading-snug">
                                    Get a free estimate for your interiors
                                </h1>

                                <p className="text-sm manrope-medium mt-5 leading-relaxed">
                                    Get an estimated cost for your complete home interiors.
                                </p>

                                <button
                                    className="px-10 py-2 sm:h-14 bg-[#ef0101] rounded-3xl mt-4"
                                    onClick={handelSubmit}>
                                    <div className="flex justify-center items-center gap-2">
                                        <p className="text-white sm:text-base text-lg manrope">Calculate</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w- h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Desktop Version */}

                {/* 2560 Version */}

                <div className="desktop-2560 hidden md:block max-w-[1440px]  min-h-[500px]  mt-20 bg-[#F1F2F6] mx-20">

                    <div className="w-full h-[410px] rounded-3xl  mx-auto relative  overflow-hidden">
                        <img
                            src="/calculator-bg.webp"
                            alt="img"
                            className="mx-auto w-full h-[410px]  object-cover "
                        />
                        <div className="absolute inset-1  rounded-3xl flex flex-col justify-center items-center text-center space-y-3">
                            <h1 className="typography-h1 text-white w-[950px] wulkan-display-bold">
                                Get a free estimate for your interiors
                            </h1>

                            <div className="typography-body text-white manrope-medium w-[550px]">
                                Get an estimated cost for your complete home interiors.
                            </div>

                            <button
                                className="px-3 py-2 bg-[#ef0101] hover:bg-[#d80000] rounded-4xl"
                                onClick={handelSubmit}
                            >
                                <div className="flex justify-center items-center">
                                    <p className="text-white ml-3 text-[18px] manrope">Calculate</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>



                {/* 1920 Version */}

                {/* <div className="desktop-1920 hidden lg:block  mx-auto px-20 mb-25 mt-5 flex">
                    <div className="bg-[#ddcdc1] w-full h-[450px] rounded-3xl flex flex-row items-center justify-between px-20"> */}

                {/* LEFT TEXT SECTION */}
                {/* <div className="text-left space-y-5">
                            <h1 className="text-5xl w-[550px] manrope">
                                Get a free estimate for your interiors
                            </h1>

                            <div className="text-[20px] manrope-medium w-[350px]">
                                Get an estimated cost for your complete home interiors.
                            </div>

                            <button
                                className="px-3 py-2 bg-[#ef0101] hover:bg-[#d80000] rounded-4xl"
                                onClick={handelSubmit}
                            >
                                <div className="flex justify-evenly items-center">
                                    <p className="text-white text-[18px] manrope">Calculate</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </button>
                        </div> */}

                {/* RIGHT IMAGE */}
                {/* <img
                            src="calref.png"
                            alt="calculator"
                            className="h-[420px] w-[450px] rounded-3xl"
                        />
                    </div>
                </div> */}



                {/* 1920 Version */}

                <div className="desktop-1920 hidden md:block  min-h-[500px]  bg-[#F1F2F6] mx-20">

                    <div className="w-full h-[410px] rounded-3xl  mx-auto relative  overflow-hidden">
                        <img
                            src="/calculator-bg.webp"
                            alt="img"
                            className="mx-auto w-full h-[410px]  object-cover "
                        />
                        <div className="absolute inset-1  rounded-3xl flex flex-col justify-center items-center text-center space-y-3">
                            <h1 className="typography-h1 text-white w-[950px] wulkan-display-bold">
                                Get a free estimate for your interiors
                            </h1>

                            <div className="typography-body text-white manrope-medium w-[550px]">
                                Get an estimated cost for your complete home interiors.
                            </div>

                            <button
                                className="px-3 py-2 bg-[#ef0101] hover:bg-[#d80000] rounded-4xl"
                                onClick={handelSubmit}
                            >
                                <div className="flex justify-center items-center">
                                    <p className="text-white ml-3 text-[18px] manrope">Calculate</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>




                {/* 1280 Version */}

                <div className="desktop-1280 hidden md:block  min-h-[500px]  bg-[#F1F2F6] mx-15 mt-15">

                    <div className="w-full h-[410px] rounded-3xl  mx-auto relative  overflow-hidden">
                        <img
                            src="/calculator-bg.webp"
                            alt="img"
                            className="mx-auto w-full h-[410px]  object-cover "
                        />
                        <div className="absolute inset-1  rounded-3xl flex flex-col justify-center items-center text-center space-y-3">
                            <h1 className="typography-h1 text-white w-[950px] wulkan-display-bold">
                                Get a free estimate for your interiors
                            </h1>

                            <div className="typography-body text-white manrope-medium w-[550px]">
                                Get an estimated cost for your complete home interiors.
                            </div>

                            <button
                                className="px-3 py-2 bg-[#ef0101] hover:bg-[#d80000] rounded-4xl"
                                onClick={handelSubmit}
                            >
                                <div className="flex justify-center items-center">
                                    <p className="text-white ml-3 text-[18px] manrope">Calculate</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}