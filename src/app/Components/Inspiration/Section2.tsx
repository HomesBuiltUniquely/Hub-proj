"use client";

import React, { JSX, useState, useRef } from "react";
import Image from "next/image";

const topCategories = ["Kitchen", "Living Room", "Bedroom", "Wardrobe", "Kids Room"];
const bottomCategories = ["Kitchen", "Kitchen", "Kitchen", "Kitchen", "Kitchen"];



type Img = { src: string; alt: string };

const gallery: Img[] = [
  { src: "/bn.jpg", alt: "Kitchen - wood & grey" },
  { src: "/bn.jpg", alt: "Modern kitchen island" },
  { src: "/bn.jpg", alt: "Small kitchen thumbnail" },
  { src: "/bn.jpg", alt: "See more thumbnail" },
];


// *********************

const categoryImages: Record<string, Img[]> = {
  Kitchen: [
    { src: "/kb1.jpg", alt: "Main kitchen" },
    { src: "/kb2.png", alt: "Secondary kitchen 1" },
    { src: "/kb3.png", alt: "Secondary kitchen 2" },
  ],
  "Living Room": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  Bedroom: [
    { src: "/br1.jpg", alt: "Bedroom main" },
    { src: "/br2.png", alt: "Bedroom 1" },
    { src: "/br3.png", alt: "Bedroom 2" },
  ],
  Wardrobe: [
    { src: "/wd1.jpg", alt: "Wardrobe main" },
    { src: "/wd2.png", alt: "Wardrobe 1" },
    { src: "/wd3.png", alt: "Wardrobe 2" },
  ],
  "Kids Room": [
    { src: "/kr1.jpg", alt: "Kids room main" },
    { src: "/kr2.png", alt: "Kids room 1" },
    { src: "/kr3.png", alt: "Kids room 2" },
  ],
};

// *********************


export default function InspirationBoard(): JSX.Element {
  const [active, setActive] = useState<string>("Kitchen");
  // mobile
  const images = categoryImages[active] || [];

  return (

    <>

      <section className="bg-[#f1f2f6] py-12 px-4 sm:px-8 lg:px-16 hidden md:block">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-amber-950 text-xl leading-relaxed">
            Step into a world of creativity where every idea is a stepping stone to your dream space.
            Our Inspiration Board is filled with fresh concepts, trending designs, and timeless styles
            to spark your imagination and guide your next project.
          </p>
        </div>

        {/* Category pill rows */}
        <div className="max-w-5xl h-[100px] mx-auto mt-20">
          <div className="flex flex-wrap justify-center gap-6">
            {topCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2 rounded-full transition-shadow border ${active === c
                  ? "bg-[#3a2d25] text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {bottomCategories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(c)}
                className="px-5 py-2 rounded-full bg-white text-gray-600 shadow-sm"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="max-w-7xl h-[750px] mx-auto  mt-15">

          {/* On large screens: 12-col grid with 2 rows of fixed height (arbitrary value) so left/center span both rows */}
          <div className="grid grid-cols-12 gap-4 mr-40 lg:[grid-template-rows:repeat(2,22rem)]">
            {/* Left big image: spans two rows on lg */}
            <div className="relative w-[450px] h-[545px] col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-2 rounded-4xl overflow-hidden bg-gray-200 mt-10">
              <Image src={gallery[0].src} alt={gallery[0].alt} fill className="object-cover" />
            </div>
            {/* Center big image: spans two rows on lg */}
            <div className=" w-[450px] h-[545px] mr-10 relative col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-2 rounded-4xl overflow-hidden bg-gray-200 mt-10">
              <Image src={gallery[1].src} alt={gallery[1].alt} fill className="object-cover" />
            </div>
            <div>
              <div className=" w-[300px] h-[180px] rounded-4xl">
                <img src="bn.jpg" alt="" className="w-[300px] h-[180px] rounded-4xl mt-10" />
              </div>
              <div className="w-[300px] h-[350px] rounded-4xl relative ">
                <img src="bn.jpg" alt="" className="w-[300px] h-[350px] mt-6 rounded-4xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 rounded-4xl pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3h8l1 4H7l1-4z" />
                  </svg>
                  <div className="text-center">
                    <div className="text-sm">230+ Designs</div>
                    <div className="text-lg font-medium">See More</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 shadow">
              Meet our designers
            </button>
          </div>
        </div>
      </section>


      {/* Mobile version  */}

{/* <div className="block md:hidden w-full px-3 py-3"> */}
  {/* Buttons */}
  {/* <div className="w-full overflow-x-auto scrollbar-hide">
    <div className="flex whitespace-nowrap gap-3 sm:gap-4 px-2 sm:px-3 py-2 mb-3">
      {topCategories.map((c) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-4 sm:px-5 py-2 rounded-full transition-shadow border flex-shrink-0 text-sm sm:text-base ${
            active === c
              ? "bg-[#3a2d25] text-white shadow-md"
              : "bg-white text-gray-700 shadow-sm"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  </div> */}

  {/* Cards Section */}
  {/* <div className="flex flex-wrap justify-center gap-3"> */}
    {/* Card 1 */}
    {/* <div className="w-full max-w-[95%] bg-white rounded-xl shadow-lg p-3"> */}
      {/* Top Image */}
      {/* <div className="mb-3">
        <img
          src="/kb1.jpg"
          alt=""
          className="w-full h-[200px] object-cover rounded-2xl shadow-md"
        />
      </div> */}

      {/* Grid of 2 Images */}
      {/* <div className="grid grid-cols-2 gap-3 mb-4">
        <img
          src="/kb2.png"
          alt=""
          className="w-full h-[140px] object-cover rounded-2xl shadow-md"
        />
        <img
          src="/kb3.png"
          alt=""
          className="w-full h-[140px] object-cover rounded-2xl shadow-md"
        />
      </div> */}

      {/* See More Button */}
      {/* <div className="text-center">
        <button className="bg-red-500 px-6 py-2 rounded-3xl text-manrope text-white">
          See more
        </button>
      </div> */}
    {/* </div> */}
  {/* </div> */}
{/* </div> */}

<div className="block md:hidden w-full px-3 py-3 mb-10">
      {/* Buttons */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap gap-3 sm:gap-4 px-2 sm:px-3 py-2 mb-3">
          {topCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 sm:px-5 py-2 rounded-full transition-shadow border flex-shrink-0 text-sm sm:text-base ${active === c
                  ? "bg-[#3a2d25] text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-3">
        <div className="w-full max-w-[95%] bg-white rounded-xl shadow-lg p-3">
          {/* Top Image */}
          {images[0] && (
            <div className="mb-3">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-[200px] object-cover rounded-2xl shadow-md"
              />
            </div>
          )}

          {/* Grid of 2 Images */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {images.slice(1, 3).map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-full h-[140px] object-cover rounded-2xl shadow-md"
              />
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <button className="bg-red-500 px-6 py-2 rounded-3xl text-manrope text-white">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>


    </>



  );
}

