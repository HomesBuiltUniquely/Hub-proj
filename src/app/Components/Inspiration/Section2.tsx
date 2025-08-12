"use client";

import React, { JSX, useState } from "react";
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

export default function InspirationBoard(): JSX.Element {
  const [active, setActive] = useState<string>("Kitchen");

  return (
    <section className="bg-[#f1f2f6] py-12 px-4 sm:px-8 lg:px-16">
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
              className={`px-6 py-2 rounded-full transition-shadow border ${
                active === c
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
          <img src="bn.jpg" alt="" className="w-[300px] h-[180px] rounded-4xl mt-10"/>
          </div>
          <div className="w-[300px] h-[350px] rounded-4xl relative ">
            <img src="bn.jpg" alt="" className="w-[300px] h-[350px] mt-6 rounded-4xl"/>
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
  );
}

