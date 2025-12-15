'use client';

import { useState } from 'react';

export function Section10() {
    const [open, setOpen] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpen(prev => (prev === key ? null : key));
    };

    return (
        <div>

            {/* CUSTOM BREAKPOINTS */}
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

    
            {/* ==================== DESKTOP – 2560 ===================== */}


            {/* DESKTOP 2560 – Same reveal as mobile */}
            <div className="desktop-2560 hidden lg:block bg-[#f1f2f6] px-20">

                {/* TITLE */}
                <h2 className="text-5xl manrope tracking-wide">
                    Our Interior <span className="text-red-600">Solution</span>
                </h2>

                <div className="flex justify-between mt-30">

                    {/* LEFT – ACCORDION */}
                    <div className="flex flex-col space-y-10 w-[550px]">

                        {/* Essential */}
                        <div>
                            <button
                                onClick={() => toggle("ess")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Essential - Core
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "ess" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                </ul>
                            )}
                        </div>

                        {/* Standard */}
                        <div>
                            <button
                                onClick={() => toggle("std")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Standard - Signature
                              <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "std" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                </ul>
                            )}
                        </div>

                        {/* Luxury */}
                        <div>
                            <button
                                onClick={() => toggle("lux")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Luxury - Elite
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "lux" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) with Tall Unit</li>
                                    <li>Utility ( Base + Wall ) Unit</li>
                                    <li>Living Room ( TV Unit + Partition + Art Work + False Ceiling )</li>
                                    <li>Bedroom ( Wardrobes, Study Unit, False Ceiling, Electrical )</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                    <li>Smart Home Automation</li>
                                </ul>
                            )}
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-[650px] h-[380px] rounded-3xl overflow-hidden -mt-30">
                        <img src="/img3.jpg" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>

            
            {/* 1920 Version */}

           <div className="desktop-1920 hidden lg:block bg-[#f1f2f6] px-20 ">

                {/* TITLE */}
                <h2 className="text-5xl manrope tracking-wide">
                    Our Interior <span className="text-red-600">Solution</span>
                </h2>

                <div className="flex justify-between mt-30">

                    {/* LEFT – ACCORDION */}
                    <div className="flex flex-col space-y-10 w-[550px]">

                        {/* Essential */}
                        <div>
                            <button
                                onClick={() => toggle("ess")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Essential - Core
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "ess" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                </ul>
                            )}
                        </div>

                        {/* Standard */}
                        <div>
                            <button
                                onClick={() => toggle("std")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Standard - Signature
                              <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "std" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                </ul>
                            )}
                        </div>

                        {/* Luxury */}
                        <div>
                            <button
                                onClick={() => toggle("lux")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Luxury - Elite
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "lux" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) with Tall Unit</li>
                                    <li>Utility ( Base + Wall ) Unit</li>
                                    <li>Living Room ( TV Unit + Partition + Art Work + False Ceiling )</li>
                                    <li>Bedroom ( Wardrobes, Study Unit, False Ceiling, Electrical )</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                    <li>Smart Home Automation</li>
                                </ul>
                            )}
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-[650px] h-[350px] rounded-3xl overflow-hidden -mt-35">
                        <img src="/img3.jpg" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div> 


          {/* 1280 Version */}

           <div className="desktop-1280 hidden lg:block bg-[#f1f2f6] px-15 mt-15">

                {/* TITLE */}
                <h2 className="text-5xl manrope tracking-wide">
                    Our Interior <span className="text-red-600">Solution</span>
                </h2>

                <div className="flex justify-between mt-30">

                    {/* LEFT – ACCORDION */}
                    <div className="flex flex-col space-y-10 w-[550px]">

                        {/* Essential */}
                        <div>
                            <button
                                onClick={() => toggle("ess")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Essential - Core
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "ess" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                </ul>
                            )}
                        </div>

                        {/* Standard */}
                        <div>
                            <button
                                onClick={() => toggle("std")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Standard - Signature
                              <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "std" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) Unit</li>
                                    <li>Wardrobe ( Base + Loft ) Unit</li>
                                    <li>TV Unit</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                </ul>
                            )}
                        </div>

                        {/* Luxury */}
                        <div>
                            <button
                                onClick={() => toggle("lux")}
                                className="w-full flex justify-between items-center text-2xl manrope border-b-2 border-red-400 pb-2"
                            >
                                Luxury - Elite
                                <span className={`transition-transform ${open === "lux" ? "rotate-180" : ""}`}></span>
                                <span className="text-2xl manrope">{open === "lux" ? "-" : "+"}</span>
                            </button>

                            {open === "lux" && (
                                <ul className="list-decimal mt-4 pl-6 space-y-2 text-lg manrope-medium">
                                    <li>Kitchen ( Base + Wall + Loft ) with Tall Unit</li>
                                    <li>Utility ( Base + Wall ) Unit</li>
                                    <li>Living Room ( TV Unit + Partition + Art Work + False Ceiling )</li>
                                    <li>Bedroom ( Wardrobes, Study Unit, False Ceiling, Electrical )</li>
                                    <li>Crockary Unit</li>
                                    <li>Pooja Unit</li>
                                    <li>Vanity for Washroom</li>
                                    <li>Smart Home Automation</li>
                                </ul>
                            )}
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-[550px] h-[330px] rounded-3xl overflow-hidden -mt-30">
                        <img src="/img3.jpg" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>

        
        {/* Mobile version  */}

            <div className="lg:hidden bg-[#f1f2f6] px-4 py-10 mt-5">

                <h2 className="text-4xl w-[300px] manrope-medium tracking-wide mb-10">
                    Our Interior <span className="text-red-600">Solution</span>
                </h2>

                {/* MOBILE ACCORDION */}
                <div className="space-y-8">

                    {/* MOBILE ITEMS */}
                    {[
                        { key: "m-ess", label: "Essential - Core", component: <MobileEssential /> },
                        { key: "m-std", label: "Standard - Signature", component: <MobileStandard /> },
                        { key: "m-lux", label: "Luxury - Elite", component: <MobileLuxury /> }
                    ].map(i => (
                        <div key={i.key}>
                            <button
                                onClick={() => toggle(i.key)}
                                className="w-full flex justify-between items-center text-[18px] manrope"
                            >
                                {i.label}
                                <span className="text-xl">{open === i.key ? "-" : "+"}</span>
                            </button>

                            {/* Red underline */}
                            <div className="border-b-2 border-red-500 mt-2"></div>

                            {open === i.key && (
                                <div className="mt-4">{i.component}</div>
                            )}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}



/* ========================= MOBILE CONTENT ============================== */


function MobileEssential() {
    return (
        <ul className="list-decimal pl-5 space-y-2 text-lg manrope-medium">
            <li>Kitchen ( Base + Wall ) Unit</li>
            <li>Wardrobe ( Base + Loft ) Unit</li>
            <li>TV Unit</li>
        </ul>
    );
}

function MobileStandard() {
    return (
        <ul className="list-decimal pl-5 space-y-2 text-md manrope-medium">
            <li>Kitchen ( Base + Wall + Loft ) Unit</li>
            <li>Wardrobe ( Base + Loft ) Unit</li>
            <li>TV Unit</li>
            <li>Crockery Unit</li>
            <li>Pooja Unit</li>
            <li>Vanity for Washroom</li>
        </ul>
    );
}

function MobileLuxury() {
    return (
        <ul className="list-decimal pl-5 space-y-2 text-[16px] manrope-medium">
            <li>Kitchen ( Base + Wall + Loft ) with Tall Unit</li>
            <li>Utility ( Base + Wall ) Unit</li>
            <li>Living Room ( TV Unit + Partition + Art Work + False Ceiling )</li>
            <li>Bedroom ( Wardrobe + Study + False Ceiling + Electrical )</li>
            <li>Crockery Unit</li>
            <li>Pooja Unit</li>
            <li>Vanity for Washroom</li>
            <li>Smart Home Automation</li>
        </ul>
    );
}
