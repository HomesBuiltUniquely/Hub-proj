
"use client";

import React, { useRef, useState } from "react";

// Demo data for wardrobes
const wardrobes = [
  {
    img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/L%20Shape%20Kitchen.jpg",
    label: "L Shape Modular Kitchen Interior",
    subtitle: "Smart design for modern homes."
  },
  {
    img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/U-shaped-Stylish-Modular-Kitchen-Design.png",
    label: "U Shape Kitchen Interior",
    subtitle: "Spacious, functional, and stylish."
  },
  {
    img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Linear%20Kitchen.jpg",
    label: "Linear Modular Kitchen Interior",
    subtitle: "Sleek, simple, and efficient."
  },
  {
    img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Parallel%20kitchen.jpg",
    label: "Parallel Modern Kitchen Interior",
    subtitle: "Perfect balance of comfort and workflow."
  },
  {
    img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Island%20Kitchen.png",
    label: "Island Kitchen Interior",
    subtitle: "A touch of luxury for everyday living"
  },
];

const Section1: React.FC = () => {
 
  const [selected, setSelected] = useState(0); // For mobile selection (above 360px)
  
  // ✅ DESKTOP SCROLL (1280px / 1440px)
  const scrollRef1280 = useRef<HTMLDivElement>(null);
  const scrollRef1440 = useRef<HTMLDivElement>(null);
  const scrollRef1920 = useRef<HTMLDivElement>(null);

  const scrollReq = (dir: "left" | "right") => {
    // pick which ref to use based on current screen width
    const w = window.innerWidth;
    let activeRef = scrollRef1280;

    if (w === 1440) activeRef = scrollRef1440;
    else if (w >= 1441 && w <= 1920) activeRef = scrollRef1920;
    else if (w >= 1024 && w <= 1439) activeRef = scrollRef1280;
    else if (w > 1920) activeRef = scrollRef1920;

    if (activeRef.current) {
      const scrollAmount = activeRef.current.clientWidth * 0.7; // Adjust scroll amount as needed
      activeRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const kitchenTypes = ["L Shape", "U Shape", "Linear", "Parallel", "Island"];

  return (
    <section className="w-full py-12 bg-[#f1f2f6]">
      <style jsx>{`
        /* Visibility controls for mobile variants */
        .mobile-360plus,
        .mobile-300 { display: none; }

        /* Show 360-480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus { display: block; }
          /* Center the floating menu */
          .mk-mobile-360 .menu { left: 50%; transform: translateX(-50%) ; width: 90%; height: 12% }
        }

        /* Show 300-359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 { display: block; }
          /* Center the floating menu */
          .mk-mobile-300 .menu { left: 50%; transform: translateX(-50%); width: 90% }
        }
      `}</style>





      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1440,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout only at exactly 1440px to avoid overlap */
        @media (width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }

        /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1441px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

           /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }
      `}</style>


      {/* desktop-2560 Version */}



       <div className="desktop-2560">

        <div className=" hidden md:block text-xl w-[1000px] manrope-medium text-center mx-auto mt-10">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.</div>

        <div className="hidden md:block max-w-350 mx-auto px-4 relative mt-30">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-1">Kitchen layout</h1>
              <p className="text-gray-500 text-lg manrope-medium">Smart Space, Seamless Cooking</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scrollReq("left")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollReq("right")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Right"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Card Carousel */}
            <div
              ref={scrollRef1440}
              className="flex gap-7 overflow-x-auto overflow-hidden scroll-smooth no-scrollbar -ml-1 pt-5 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[400px] max-w-[400px] w-[400px] h-[520px] bg-white rounded-4xl  shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-130 object-cover rounded-4xl"
                  />
                  <div className="p-4 flex items-center -mt-50 h-[270px] w-[400px]">
                    <span className="backdrop-blur-md bg-black/5 text-white manrope px-4 py-1 pt-4 rounded-2xl shadow text-sm w-[360px] block">
                      <div className="text-lg">
                        {item.label}
                        <br />
                      </div>
                      <div className="manrope-medium">{item.subtitle}</div>
                      <button className="border-1 border-[#ebd457] text-white px-2 mt-3 mb-4 rounded-full hover:bg-[#ebd457]">
                        Book Free Consultation
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>


      {/* Desktop Version (1920) */}
      <div className="desktop-1920">

        <div className=" hidden md:block text-xl w-[1000px] manrope-medium text-center mx-auto mt-10 mb-15">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.</div>

        <div className="hidden md:block w-full max-w-8xl mx-auto relative px-6">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-5xl lg:text-6xl wulkan-display-bold text-gray-800 mb-5">Kitchen layout</h2>
              <p className="text-gray-500 text-lg manrope-medium ">Smart Space, Seamless Cooking</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scrollReq("left")}
                className="bg-gray-200 hover:bg-[#ebd657] text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollReq("right")}
                className="bg-gray-200 hover:bg-[#ebd657] text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Right"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Card Carousel */}
            <div
              ref={scrollRef1920}
              className="flex gap-7 overflow-x-auto scroll-smooth  no-scrollbar pt-5 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[420px] h-[500px] bg-white rounded-4xl shadow-lg overflow-hidden"
                >
                  {/* Full image */}
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover rounded-4xl"
                  />

                  {/* Blurred overlay content */}
                  <div className="p-4 flex items-center -mt-50 h-[270px]">
                    <span className="backdrop-blur-md bg-black/5 text-white manrope px-4 py-1 pt-4 rounded-2xl shadow text-sm">
                      {item.label}<br />
                      <button className="border-1 border-[#ebd457]  text-white px-2 mt-3 mb-4 rounded-full hover:bg-[#ebd457] ">Book Free Consultation</button>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>


      {/* 1440 Version  */}

      <div className="desktop-1440">

        <div className=" hidden md:block text-xl w-[1000px] manrope-medium text-center mx-auto mt-10">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.</div>

        <div className="hidden md:block max-w-350 mx-auto px-4 relative mt-30">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-1">Kitchen layout</h1>
              <p className="text-gray-500 text-lg manrope-medium">Smart Space, Seamless Cooking</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scrollReq("left")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollReq("right")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Right"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Card Carousel */}
            <div
              ref={scrollRef1440}
              className="flex gap-7 overflow-x-auto overflow-hidden scroll-smooth no-scrollbar -ml-1 pt-5 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[400px] max-w-[400px] w-[400px] h-[520px] bg-white rounded-4xl  shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-130 object-cover rounded-4xl"
                  />
                  <div className="p-4 flex items-center -mt-50 h-[270px] w-[400px]">
                    <span className="backdrop-blur-md bg-black/5 text-white manrope px-4 py-1 pt-4 rounded-2xl shadow text-sm w-[360px] block">
                      <div className="text-lg">
                        {item.label}
                        <br />
                      </div>
                      <div className="manrope-medium">{item.subtitle}</div>
                      <button className="border-1 border-[#ebd457] text-white px-2 mt-3 mb-4 rounded-full hover:bg-[#ebd457]">
                        Book Free Consultation
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>


      {/* 1280 version */}

      {/* Desktop 1280 Version */}
      <div className="desktop-1280">

        <div className=" hidden md:block text-xl w-[1000px] manrope-medium text-center mx-auto mt-10">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.</div>

        <div className="hidden md:block max-w-350 mx-auto px-4 relative mt-30">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-5xl lg:text-6xl wulkan-display-bold mb-1">Kitchen layout</h1>
              <p className="text-gray-500 text-lg manrope-medium">Smart Space, Seamless Cooking</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scrollReq("left")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollReq("right")}
                className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Right"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Card Carousel */}
            <div
              ref={scrollRef1280}
              className="flex gap-7 overflow-x-auto overflow-hidden scroll-smooth no-scrollbar pt-5 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[350px] max-w-[400px] w-[400px] h-[520px] bg-white rounded-4xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-130 object-cover rounded-4xl"
                  />
                  <div className="px-10 -ml-8 flex items-center justify-center -mt-50 h-[270px] w-[410px]">
                    <span className="backdrop-blur-md bg-black/5 text-white  manrope px-4 py-1 pt-4 rounded-2xl shadow text-sm w-[360px] block">
                      <div className="text-lg">
                        {item.label}
                        <br />
                      </div>
                      <div className="manrope-medium">{item.subtitle}</div>
                      <button className="border-1 border-[#ebd457] text-white px-2 mt-3 mb-4 rounded-full hover:bg-[#ebd457]">
                        Book Free Consultation
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>



      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus -mt-25">
        {/* Mobile Description */}
        <div className="manrope-medium text-m h-[300px] w-full max-w-[480px] mt-25 desc">
          At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.
        </div>

        {/* Mobile Heading */}
        <div className="mb-10">
          <div className="flex relative">
            <div className="w-[2px] h-[70px] bg-[#ebd457] mt-10 ml-3"></div>
          </div>
          <div className=" -mt-17">
            <h2 className="h-10 text-3xl manrope text-gray-800  ml-7 ">Kitchen layout</h2>
            <p className="ml-7  text-gray-500 text-lg manrope-medium ">Smart Space, Seamless Cooking</p>
          </div>
        </div>


        {/* Mobile Glassmorphism Menu Bar */}
        <div className="mb-6 mt-7 max-w-[480px] mx-auto">
          {/* Mobile Content Card */}
          <div className="bg-white rounded-3xl relative max-w-[480px] h-95 mx-auto w-full card">
            <div className="w-[300px] mx-auto">
              <div className="absolute top-4 inset-x-0 z-10 flex justify-center menu">
                <div className="w-[320px] bg-[#32261c]/70 rounded-md p-1 flex justify-around text-nowrap overflow-x-scroll text-gray-200/70 manrope">
                  {kitchenTypes.map((type, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(idx)}
                      className={` px-3 py-1 text-sm rounded ${selected === idx ? "text-white" : ""} hover:bg-gray-600/30`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {/* ✨ Gradient overlay on right edge */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#32261c]/80 to-transparent rounded-lg"></div>
              </div>

            </div>

            <img
              src={wardrobes[selected].img}
              alt={wardrobes[selected].label}
              className="w-full h-full object-cover rounded-3xl"

            />

            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-center items-end overlay">
              <span className="block w-[950%] max-w-[330px] bg-zinc-500/60 text-white manrope px-4 py-2 pt-1 rounded-3xl shadow text-sm h-[100px] mt-18">
                <div className="manrope text-base">
                  {wardrobes[selected].label}<br />
                </div>
                <div className="manrope-medium">{wardrobes[selected].subtitle}</div>
                <br />
                <button className="border border-[#ebd457] text-white px-3 -mt-3 mb-1 rounded-full manrope hover:bg-[#ebd457] text-xs py-1">
                  Book Free Consultation
                </button>
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden px-4 mk-mobile-300 mobile-300 ">
        {/* Mobile Description */}
        <div className="manrope-medium text-m h-[300px] w-full max-w-[480px] -mt-3 mb-8 ">
          At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.
        </div>
        {/* Mobile Heading */}
        <div className="mb-10">
          <div className="flex relative">
            <div className="w-[2px] h-[70px] bg-[#ebd457] mt-10 ml-3"></div>
          </div>
          <div className=" -mt-17">
            <h2 className="h-10 text-3xl manrope text-gray-800  ml-7 ">Kitchen layout</h2>
            <p className="ml-7  text-gray-500 text-lg manrope-medium ">Smart Space, Seamless Cooking</p>
          </div>
        </div>


        {/* Mobile Glassmorphism Menu Bar */}
        <div className="mb-6 mt-7 max-w-[359px] mx-auto">
          {/* Mobile Content Card */}
          <div className="bg-white rounded-md relative max-w-[480px] h-95 w-full card">
            <div className="absolute top-4 inset-x-0 z-10 flex justify-center menu">
              <div className="w-[340px] text-nowrap bg-[#32261c]/70 rounded-md p-2 flex justify-around overflow-x-scroll text-gray-200/70 manrope">
                {kitchenTypes.map((type, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`px-2 py-1 text-sm m rounded ${selected === idx ? "text-white" : ""} hover:bg-gray-600/30`}
                  >
                    {type}
                  </button>
                ))}
                {/* ✨ Gradient overlay on right edge */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#32261c]/80 to-transparent rounded-lg"></div>
              </div>
            </div>
            <img
              src={wardrobes[selected].img}
              alt={wardrobes[selected].label}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-center items-end overlay">
              <span className="block w-[295px] max-w-[310px] bg-zinc-500/60 text-white manrope px-2 py-2 pt-1 rounded-3xl shadow text-sm h-[100px] mt-18">
                <div className=" text-base">
                  {wardrobes[selected].label}<br />
                </div>
                <div className="manrope-medium">{wardrobes[selected].subtitle}</div>
                <br />
                <button className="border border-[#ebd457] text-white px-3 -mt-3 manrope mb-1 rounded-full hover:bg-[#ebd457] text-xs py-1">
                  Book Free Consultation
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Section1;