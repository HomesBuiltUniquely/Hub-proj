"use client"

import React, { useRef } from "react";

// Demo data for wardrobes
const wardrobes = [
  {
    img: "/bn.jpg",
    label: "Sliding Door Wardrobe",
  },
  {
    img: "/bn.jpg",
    label: "Sliding Door Wardrobe",
  },
  {
    img: "/bn.jpg",
    label: "Sliding Door Wardrobe",
  },
  {
    img: "/bn.jpg",
    label: "Sliding Door Wardrobe",
  },
  {
    img: "/bn.jpg",
    label: "Sliding Door Wardrobe",
  },
];

const Section1: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 bg-[#f1f2f6]">

    <div className="text-xl w-[1000px] text-center mx-auto mt-10">For those who are truly inspired by cooking, the kitchen is the hub of your home. Kitchen is where you work, share and entertain. Hub brings style, convenience and craft into your kitchen.We want you to experience the pleasures that cooking, eating and entertaining in a kitchen. And that’s what inspires us to Make it Wonderful.</div>
        
      <div className="max-w-6xl mx-auto px-4 relative mt-30">
        {/* Heading */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Kitchen Layout</h2>
            <p className="text-gray-500 text-lg">Smart Space, Seamless Cooking</p>
          </div>
        </div>
        {/* Carousel with arrows overlapping top left */}
        <div className="relative">
          {/* Overlapping Navigation */}
          <div className="absolute -top-20 right-1 mb-2 z-10 flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-gray-200 hover:bg-yellow-300 text-gray-700 rounded-full p-2 shadow  transition"
              aria-label="Scroll Left"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
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
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto scroll-smooth no-scrollbar pt-10 pb-2 "
            style={{ scrollBehavior: "smooth" }}
          >
            {wardrobes.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[290px] max-w-xs bg-white rounded-3xl shadow-lg group hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-56 object-cover rounded-3xl  rounded-b-none group-hover:scale-105 transition duration-300"
                />
                <div className="p-4 flex items-center">
                  <span className="bg-white/80 text-gray-800 font-semibold px-4 py-1 rounded-full shadow text-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
