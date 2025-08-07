"use client";

import React, { useEffect, useRef } from "react";

const kitchenAccessories = [
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
];

const cabinetAccs = [
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
  { img: "/bn.jpg", label: "U - Shaped Kitchen" },
];

const CardSection = ({
  title,
  subtitle,
  buttonText,
  cards,
  scrollDirection = 1,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  cards: typeof kitchenAccessories;
  scrollDirection?: 1 | -1;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (scrollDirection === 1) {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    } else {
      el.scrollLeft = 0;
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY * (-scrollDirection);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [scrollDirection]);

  return (
    <section className="w-screen py-12 bg-[#f1f2f6]">
      <div className="flex flex-col items-center mb-8 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          {title}
        </h2>
        <p className="text-lg italic text-gray-500 mb-4 text-center">
          {subtitle}
        </p>
        <button className="bg-gray-800 text-white px-7 py-2 rounded-full font-semibold text-base mb-6">
          {buttonText}
        </button>
      </div>
      {/* This is the key container for 2.5 cards */}
      <div
        ref={scrollRef}
        className="
          flex gap-7 overflow-x-auto scrollbar-none
          px-2 md:px-0 pb-2
          w-full
          md:max-w-[1360px] mx-auto
        "
        style={{
          paddingRight: "56px",
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[350px] max-w-[350px] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
            style={{
              height: "400px",
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              className="w-full h-[400px] object-cover transition duration-300"
            />
            <div className="px-6 pt-4 -mt-20">
              <div className="h-[40px] inline-block bg-gray-100 rounded-full text-gray-800 px-4 py-2.5 text-sm font-bold">
                {card.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ModularKitchenShowcase: React.FC = () => (
  <div className="bg-[#f9fafc] w-screen min-h-screen">
    <CardSection
      title="Elevate Your"
      subtitle="Everyday Essentials."
      buttonText="Kitchen Accessories"
      cards={kitchenAccessories}
      scrollDirection={1}
    />
    <CardSection
      title="Crafted to Organize"
      subtitle="Designed to Impress"
      buttonText="Cabinet"
      cards={cabinetAccs}
      scrollDirection={-1}
    />
  </div>
);

export default ModularKitchenShowcase;
