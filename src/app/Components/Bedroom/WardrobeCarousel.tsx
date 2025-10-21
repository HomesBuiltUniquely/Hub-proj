"use client"

import React, { useRef, useState } from "react";

// Demo data for wardrobes
const wardrobes = [
  {
    img: "/w1.jpg",
    label: "Sliding Door Wardrobe",
    subtilte: "Smart design for modern homes."
  },
  {
    img: "/w2.jpg",
    label: "Hinged door wardrobe",
    subtilte: "Smart design for modern homes."
  },
  {
    img: "/w3.jpg",
    label: "Open wardrobe",
    subtilte: "Smart design for modern homes."
  },
  {
    img: "/w4.jpg",
    label: "Bi Fold Door wardrobe",
    subtilte: "Smart design for modern homes."
  },
];

const WardrobeCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const wardrobesTypes = ["Sliding", "Hinged", "Open", "Bi Fold"];


  return (


    <section className="w-full py-12 bg-[#f1f2f6]">



      <style jsx>{`
        /* Hide all mobile variants initially */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show 360–480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus {
            display: block;
          }
          .mk-mobile-360 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 12%;
          }
        }

        /* Show 300–359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
          }
          .mk-mobile-300 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
          }
        }
      `}</style>


      <style jsx>{`

  .desktop-1440,
        .desktop-1280{
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


      <div className="desktop-1440">
        <div className="hidden md:block className=max-w-6xl mx-auto px-4  relative">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl manrope text-gray-800 mb-1">Types of wardrobes</h2>
              <p className="text-gray-500 text-lg manrope-medium">Find Your Perfect Fit</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="bg-gray-200 hover:bg-[#ebd657] text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
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
              ref={scrollRef}
              className="flex gap-7 overflow-x-auto scroll-smooth no-scrollbar pt-10 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[400px] h-[500px] bg-white rounded-4xl shadow-lg overflow-hidden"
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


      <div className="desktop-1280">

        <div className="hidden md:block className=max-w-6xl mx-auto px-4 relative ">
          {/* Heading */}
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl manrope text-gray-800 mb-1">Types of wardrobes</h2>
              <p className="text-gray-500 text-lg manrope-medium">Find Your Perfect Fit</p>
            </div>
          </div>
          {/* Carousel with arrows overlapping top left */}
          <div className="relative">
            {/* Overlapping Navigation */}
            <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="bg-gray-200 hover:bg-[#ebd657] text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Scroll Left"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
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
              ref={scrollRef}
              className="flex gap-7 overflow-x-auto scroll-smooth no-scrollbar pt-5 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {wardrobes.map((item, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[350px] h-[500px] bg-white rounded-4xl shadow-lg overflow-hidden"
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




      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus -mb-25">

        {/* Mobile Verison */}

        {/* Heading */}

        <div className='flex items-center mt-15'>
          <div className='bg-[#ebd657] w-[3px] h-10 mb-10'></div>
          <div className='ml-3'>
            <h1 className='text-3xl manrope'>Types of wardrobes</h1>
            <p className='manrope-medium text-[18px] pt-3'>Find Your Perfect Fit</p>
          </div>
        </div>


        {/* Mobile Glassmorphism Menu Bar */}
        <div className=" mt-7 max-w-[480px] mb-20 mx-auto">
          {/* Mobile Content Card */}
          <div className="bg-white rounded-md relative max-w-[480px] h-95 mx-auto w-full card">
            <div className="w-[300px] mx-auto">
              <div className="absolute top-4 inset-x-0 z-10 flex justify-center menu">
                <div className="w-[310px] bg-[#32261c]/70 rounded-md p-1 flex justify-around text-gray-200/70 manrope">
                  {wardrobesTypes.map((type, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(idx)}
                      className={`px-3 py-1 text-sm rounded ${selected === idx ? "text-white" : ""} hover:bg-gray-600/30`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <img
              src={wardrobes[selected].img}
              alt={wardrobes[selected].label}
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-center items-end overlay">
              <span className="block w-[950%] max-w-[330px] bg-zinc-500/60 text-white  px-4 py-2 pt-1 rounded-3xl shadow text-sm h-[100px] mt-18">
                <div className="manrope text-base">
                  {wardrobes[selected].label}<br />
                </div>
                <div className="manrope-medium">{wardrobes[selected].subtilte}</div>
                <br />
                <button className="border border-[#ebd457] manrope text-white px-3 -mt-3 mb-1 rounded-full hover:bg-[#ebd457] text-xs py-1">
                  Book Free Consultation
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>



      {/* Mobile 300–359 */}
      <div className="md:hidden px-4 mk-mobile-300 mobile-300 -mb-25">

        {/* Heading */}

        <div className='flex items-center mt-15'>
          <div className='bg-[#ebd657] w-[3px] h-10 mb-10'></div>
          <div className='ml-3'>
            <h1 className='text-3xl manrope'>Types of wardrobes</h1>
            <p className='manrope-medium text-[18px] pt-3'>Find Your Perfect Fit</p>
          </div>
        </div>


        <div className=" mt-7 max-w-[480px] mx-auto mb-20">
          {/* Mobile Content Card */}
          <div className="bg-white rounded-md relative max-w-[480px] h-95 mx-auto w-full card">
            <div className="w-[300px] mx-auto">
              <div className="absolute top-4 inset-x-0 z-10 flex justify-center menu">
                <div className="w-[310px] bg-[#32261c]/70 rounded-md p-1 flex justify-around text-gray-200/70 manrope">
                  {wardrobesTypes.map((type, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(idx)}
                      className={`px-3 py-1 text-sm rounded ${selected === idx ? "text-white" : ""} hover:bg-gray-600/30`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <img
              src={wardrobes[selected].img}
              alt={wardrobes[selected].label}
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-center items-end overlay">
              <span className="block w-[950%] max-w-[330px] bg-zinc-500/60 text-white  px-4 py-2 pt-1 rounded-3xl shadow text-sm h-[100px] mt-18">
                <div className="manrope text-base">
                  {wardrobes[selected].label}<br />
                </div>
                <div className="manrope-medium">{wardrobes[selected].subtilte}</div>
                <br />
                <button className="border border-[#ebd457] manrope text-white px-3 -mt-3 mb-1 rounded-full hover:bg-[#ebd457] text-xs py-1">
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

export default WardrobeCarousel;