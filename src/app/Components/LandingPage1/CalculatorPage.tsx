'use client'

import React from "react";
import {useRouter} from "next/navigation";

export default function CalculatorPage() {
    const router = useRouter();
    function handelSubmit() {
       router.push('/interior-designers-in-bangalore/Calculator')
    }
    return (
        <div id="calculator-section" className="w-full h-auto bg-white">
            {/* Mobile Version */}
            <div className="lg:hidden h-[500px]">
                <h1 className="text-4xl sm:text-3xl text-black text-center px-3 manrope-medium">Get A Free Estimate for Your Interiors</h1>
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
                                <p className="text-white  sm:text-base text-xl manrope pl-6">Calculate</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>  
                        </button>        
                    </div>
                </div>
            </div>

            {/* Desktop Version */}
            <div className="hidden lg:block">
                <h1 className="text-5xl text-center pt-10 manrope">Get A Free Estimate for Your Interiors</h1>
                <div> 
                    <div className="w-[500px] h-[500px] border-2 rounded-4xl border-[#ef0101] mt-20 mx-auto">
                        <div className="flex justify-between m-10">
                            <img src="/calimages.png" alt="calimages" className="w-[120px] h-[120px] mx-auto"></img>
                         
                        </div>
                        <div className="pt-2">
                            <div className="text-center text-3xl manrope">Full Home</div>  
                            <div className="text-center text-[20px] manrope-medium w-full pt-6">Get an estimated cost for your complete home interiors.</div> 
                        </div>
                        <button className="w-[200px] h-[60px] bg-[#ef0101] rounded-4xl mt-10 ml-36" onClick={handelSubmit}>
                            <div className="flex justify-evenly items-center ">
                                <p className="text-white text-[18px] manrope ">Calculate</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>  
                        </button>        
                    </div>
                </div>
            </div>
        </div>
    )
}