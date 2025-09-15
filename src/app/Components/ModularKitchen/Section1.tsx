"use client"

import React, { useRef } from "react";

// Demo data for wardrobes
const wardrobes = [
  {
    img: "/kl1.jpeg",
    label: "L Shape Modular Kitchen Interior – Smart design for modern homes.",
  },
  {
    img: "/kl2.jpeg",
    label: "U Shape Kitchen Interior – Spacious, functional, and stylish.",
  },
  {
    img: "/kl3.jpg",
    label: "Straight Modular Kitchen Interior – Sleek, simple, and efficient.",
  },
  {
    img: "/kl4.jpg",
    label: "Parallel Modern Kitchen Interior – Perfect balance of comfort and workflow",
  },
  {
    img: "/kl5.jpg",
    label: "Island Kitchen Interior – A touch of luxury for everyday living.",
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

    <div className="text-xl w-[1000px] text-center mx-auto mt-10">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru. We prioritize customer satisfaction. Our services include free 3D design consultations, clear pricing, on-time delivery, and high-quality materials. We handle every step with care. Our team provides hassle-free installation, smart storage planning, and durable products, giving you a beautiful kitchen and peace of mind. With HUB Interior, you invest in reliable service and quality, creating a home that feels uniquely yours.</div>
        
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
                className="min-w-[400px] h-[520px]  bg-white rounded-4xl shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-130 object-cover rounded-4xl"
                />
                <div className="p-4 flex items-center -mt-50 h-[270px]">
                  <span className="backdrop-blur-md bg-black/5 text-white manrope px-4 py-1 pt-4 rounded-2xl shadow text-sm">
                    {item.label}<br/>
                    <button className="border-1 border-[#ebd457] text-white px-2 mt-3 mb-4 rounded-full hover:bg-[#ebd457] ">Book Free Consultation</button>
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
