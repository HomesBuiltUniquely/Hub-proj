"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";

const topCategories = ["Kitchen", "Living Room", "Bedroom", "Wardrobe", "Kids Room"];
const middleCategories = ["Dinning Room", "Pooja Unit", "False ceiling", "Wall Decor", "Study Room"];
const bottomCategories = ["Space Saving", "Door Design", "Crockery Unit", "Home Bar"];


type Img = { src: string; alt: string };


// *********************

const categoryImages: Record<string, Img[]> = {
  Kitchen: [
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSK1.jpg", alt: "Main kitchen" },
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSK2.jpg", alt: "Secondary kitchen 1" },
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSK3.jpg", alt: "Secondary kitchen 2" },
  ],
  "Living Room": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  Bedroom: [
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSPB1.jpg", alt: "Bedroom main" },
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSPB2.jpg", alt: "Bedroom 1" },
    { src: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSPB3.jpg", alt: "Bedroom 2" },
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
  "Dinning Room": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "Pooja Unit": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "False ceiling": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "Study Room": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "Space Saving": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "Door Design": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
  "Crockery Unit": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ], "Home Bar": [
    { src: "/lr1.jpg", alt: "Living room main" },
    { src: "/lr2.png", alt: "Living room 1" },
    { src: "/lr3.png", alt: "Living room 2" },
  ],
};

// *********************


export default function InspirationBoard(): JSX.Element {
  const [active, setActive] = useState<string>("Kitchen");
  // mobile
  const images = categoryImages[active] || [];

  return (

    <>

      <style jsx>{`
     /* Hide both by default */
        .desktop-1280,
        .desktop-1440 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout for large desktops (>=1440px) */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }
    `}</style>

      <div className="desktop-1440">
        <section className="bg-[#f1f2f6] py-12 px-4 sm:px-8 lg:px-16 hidden md:block">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-950 manrope-medium leading-relaxed">
              Step into a world of creativity where every idea is a stepping stone to your dream space.
              Our Inspiration Board is filled with fresh concepts, trending designs, and timeless styles
              to spark your imagination and guide your next project.
            </p>
          </div>

          {/* Category pill rows */}
          <div className="max-w-5xl h-[100px] mx-auto mt-10">
            <div className="max-w-5xl mx-auto mt-10 space-y-4">
              {/* Top categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {topCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Middle categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {middleCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Bottom categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {bottomCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>




          </div>

          {/* Gallery grid */}



          <div className="grid grid-cols-12 gap-6 mt-20">
            {/* Left image: 5 columns wide */}
            {images[0] && (
              <div className="col-span-12 lg:col-span-5 h-[545px] relative rounded-4xl overflow-hidden mt-10 bg-gray-200">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover rounded-4xl" />
              </div>
            )}

            {/* Center image: 5 columns wide */}
            {images[1] && (
              <div className="col-span-12 lg:col-span-5 h-[545px] relative rounded-4xl overflow-hidden mt-10 bg-gray-200">
                <Image src={images[1].src} alt={images[1].alt} fill className="object-cover rounded-4xl" />
              </div>
            )}

            {/* Right column: 2 images stacked vertically */}
            {images[2] && (
              <div className="col-span-12 lg:col-span-2 flex flex-col gap-4 mt-10">
                {/* Top small image */}
                <div className="h-[180px] relative rounded-4xl overflow-hidden">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover rounded-4xl"
                  />
                </div>

                {/* Bottom image with overlay */}
                <div className="h-[350px] relative rounded-4xl overflow-hidden">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover rounded-4xl"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white pointer-events-none rounded-4xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3h8l1 4H7l1-4z"
                      />
                    </svg>
                    <div className="manrope-medium text-center"> 230+ Designs <div>See More</div> </div>
                  </div>
                </div>
              </div>
            )}
          </div>






        </section>
      </div>



      <div className="desktop-1280">
        <section className="bg-[#f1f2f6] py-12 px-4 sm:px-8 lg:px-16 hidden md:block">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-amber-950 manrope-medium leading-relaxed text-2xl ">
              Step into a world of creativity where every idea is a stepping stone to your dream space.
              Our Inspiration Board is filled with fresh concepts, trending designs, and timeless styles
              to spark your imagination and guide your next project.
            </p>
          </div>

          {/* Category pill rows */}
          <div className="max-w-5xl h-[100px] mx-auto mt-15">
            <div className="max-w-5xl mx-auto mt-10 space-y-4">
              {/* Top categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {topCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Middle categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {middleCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Bottom categories */}
              <div className="flex flex-wrap justify-center gap-6">
                {bottomCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`px-5 py-2 rounded-full manrope-medium transition-shadow border ${active === category
                      ? "bg-[#3a2d25] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>




          </div>

          {/* Gallery grid */}



          <div className="grid grid-cols-12 gap-6 mt-20">
            {/* Left image: 5 columns wide */}
            {images[0] && (
              <div className="col-span-12 lg:col-span-5 h-[545px] relative rounded-4xl overflow-hidden mt-10 bg-gray-200">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover rounded-4xl" />
              </div>
            )}

            {/* Center image: 5 columns wide */}
            {images[1] && (
              <div className="col-span-12 lg:col-span-5 h-[545px] relative rounded-4xl overflow-hidden mt-10 bg-gray-200">
                <Image src={images[1].src} alt={images[1].alt} fill className="object-cover rounded-4xl" />
              </div>
            )}

            {/* Right column: 2 images stacked vertically */}
            {images[2] && (
              <div className="col-span-12 lg:col-span-2 flex flex-col gap-4 mt-10">
                {/* Top small image */}
                <div className="h-[180px] relative rounded-4xl overflow-hidden">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover rounded-4xl"
                  />
                </div>

                {/* Bottom image with overlay */}
                <div className="h-[350px] relative rounded-4xl overflow-hidden">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover rounded-4xl"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white pointer-events-none rounded-4xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3h8l1 4H7l1-4z"
                      />
                    </svg>
                    <div className="manrope-medium text-center"> 230+ Designs <div>See More</div> </div>
                  </div>
                </div>
              </div>
            )}
          </div>






        </section>
      </div>

      {/* Mobile version  */}


      <div className="block md:hidden w-full px-3 py-3 mb-10">
        {/* Buttons */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex whitespace-nowrap gap-3 sm:gap-4 px-2 sm:px-3 py-2 mb-3">
            {[...topCategories, ...middleCategories, ...bottomCategories].map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`px-4 sm:px-5 py-2 rounded-full transition-shadow border flex-shrink-0 text-sm sm:text-base
            ${active === category
                    ? "bg-[#3a2d25] text-white shadow-md"
                    : "bg-white text-gray-700 shadow-sm"}
          `}
              >
                {category}
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

