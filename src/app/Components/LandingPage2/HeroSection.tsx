'use client'

import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="relative w-screen h-screen">
            <Image 
                src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//1.svg" 
                alt="Hero background" 
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 flex items-center">
                <div className="relative">      
                    <div className="w-[650px] h-[840px] bg-white/10 shadow-lg backdrop-blur-md overflow-hidden"> 
                    {/* <h1 className=" text-center pt-7 text-white text-4xl font-semibold z-10">
                        Interiors For Every Budget
                    </h1> */}
                    <img src="hub.png" className="w-[200px] h-[76px] ml-10 mt-4"></img>
                    <div className="flex mt-8">
                       <input type="text" placeholder="Name" className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope  "></input>
                       <input type="text" placeholder="Email" className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope"></input>
                    </div>
                    <div className="flex mt-4">
                    <input type="text" placeholder="PhoneNumber" className="w-[250px] h-[60px] border-2 border-[#ddcdc1] pl-8 rounded-4xl ml-8 placeholder-white manrope"></input>
                    <input type="text" placeholder="Pincode (Banglore)" className="w-[250px] h-[60px] border-2 border-[#ddcdc1] pl-8 rounded-4xl ml-20 placeholder-white manrope"></input>
                    </div>
                    <div>
                    <button className="w-[580px] h-[60px] mt-16 ml-8 rounded-4xl text-white border-2 border-[#DDCDC1] flex justify-between p-4 pl-6 manrope">Property Type <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></button> 
                    </div>   

                    </div>  
                    
                </div>
            </div>
        </div>
    );
}