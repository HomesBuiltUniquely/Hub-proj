'use client'
import React, { useState } from 'react';

export default function Section5(){

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);


    return(
        <div className='hidden lg:block'>
       <div className="w-screen h-[800px] bg-white">
        <div className="pt-10 text-center text-6xl">Complete Interior Solution by HUB</div>
        <div className="flex mt-14">
            <div>
            <div className='relative'>
            <div 
                className="relative bg-[#ef0101] w-[400px] h-[250px] mt-20 ml-20 rounded-[2rem]" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//livingroom.png" className="w-[120px] h-[146px] pt-4 ml-32" />
                <h1 className="manrope-medium text-white text-center text-2xl pt-4">
                Living & Dining Spaces
                </h1>

                {isHovered && (
                <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-xl p-6">Custom TV Units & Accent Walls / Elegant Crockery Cabinets / Stylish Bar Counters & Displays / Modern Bookshelves & Storage / Foyer Units & Entryway Consoles / Pooja Units & Prayer Spaces</p>
                </div>
                )}
            </div>
            </div>

           {/* second */}
            <div className='relative'>
            <div className="bg-[#ef0101] w-[300px] h-[200px] mt-8 ml-44 rounded-4xl relative" 
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}>
            <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//boxes.png" className="w-[100px] h-[110px] pt-6 ml-24 " />
            <h1 className="manrope-medium text-white text-center text-2xl pt-4">Storage Inovations </h1>

            {isHovered3 && (
                <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-[17px] p-8">Janitor Closets & Utility Units / Skirting Drawers for Extra Space / Pantry Pull-Out Systems / Concealed Appliance Storage / Hidden Bar Cabinets & Magic Corners</p>
                </div>
                )}
            </div>
            </div>
           
            </div>
            <div>
          <div className='relative'>
          <div className="relative bg-[#ef0101] w-[450px] h-[300px] mt-20 ml-6 rounded-4xl " 
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}>
            <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//double-bed.png" className="w-[120px] h-[180px] pt-16 ml-42"></img>
            <h1 className="manrope-medium text-white text-center text-2xl pt-4">Bedroom Solutions</h1>
            {isHovered1 && (
                <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-xl p-6">Sleek Wardrobes with Internal Storage / Bed Frames with Built-In Storage / Integrated Dressing Units / Compact Study & Work Desks / Bedroom TV Panel Designs / Customized Kids Bedrooms with Study & Storage Solutions / Dedicated Home Office Setups</p>
                </div>
                )}
            </div>
          </div>
            <div className='relative'>
            <div className="bg-[#ef0101] w-[320px] h-[200px] mt-6 ml-25 rounded-4xl relative" onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)} >
                <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//interior-design.png" className="w-[85px] h-[120px] pt-8 ml-28 "></img>   
                <h1 className="manrope-medium text-white text-center text-2xl pt-4">Interior Design Service</h1>
                {isHovered4 && (
                    <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-[18px] p-5">Designer False Ceilings & Lighting / Decorative Wall Panel Designs / Soft Furnishings & Decor Elements / Smart Appliance Integration / Wall Finishes, Textures & Wallpapers</p>
                        </div>
                )}

                </div>
            </div>
            </div>
            <div>
            <div className='relative'>
            <div className="bg-[#ef0101] w-[290px] h-[220px] mt-4 ml-6 rounded-4xl relative" onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}>
            <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//kitchen.png" className="w-[90px] h-[110px] pt-4 ml-26"></img>   
            <h1 className="manrope-medium text-white text-center text-2xl pt-4 p-6">Modular Kitchen Design</h1>
            {isHovered2 && (
                <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-xl p-8">Durable Countertops & Backsplashes / Premium Kitchen Accessories / Designer Shutters & Cabinets / Smart Kitchen Storage Solutions</p>
                </div>
                )}
            </div>
            </div>
            <div className='relative'>
            <div className="bg-[#ef0101] w-[350px] h-[250px] mt-6 ml-6 rounded-4xl relative" onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}>
            <img src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//house-repair.png" className="w-[100px] h-[140px] pt-10 ml-32"></img>  
            <h1 className="manrope-medium text-white text-center text-2xl pt-2 p-6">House Imporvement Service</h1>  
            {isHovered5 && (
                <div className="absolute inset-0 bg-[#ef0101] bg-opacity-50 flex items-center justify-center rounded-[2rem]">
                    <p className="text-white text-xl p-8">Interior & Exterior Painting / Bathroom Makeovers & Upgrades / Expert Tiling, Plumbing & Electrical Work / Civil Modifications / Deep Home Cleaning Services / Balcony & Utility Area Solutions</p>
                </div>
                )} 
            </div>
            </div>
            </div>
        </div>
       </div>
       </div>
    )
}