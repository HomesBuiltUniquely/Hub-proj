
"use client";

import React, { useEffect, useRef } from "react";

const kitchenAccessories = [
  { img: "/k1.jpg", label: "Bottle Pullout" },
  { img: "/k2.jpg", label: "Corner Solutions" },
  { img: "/k3.jpg", label: "Cutlery Tray" },
  { img: "/k4.jpg", label: "Detergent Rack" },
  { img: "/k5.jpg", label: "Pantry Pullout" },
  { img: "/k6.jpg", label: "Plate Holder" },
  { img: "/k7.jpg", label: "Tambour Unit" },
  { img: "/k8.jpg", label: "Tandem Box" },
  { img: "/k10.jpg", label: "Waste Bin" },
  { img: "/k9.jpg", label: "Wicker Basket" },
];

const cabinetAccs = [
  { img: "/c1.jpg", label: "Shaker Style Kitchen Cabinets" },
  { img: "/c2.jpg", label: "Slab Kitchen Cabinets" },
  { img: "/c3.jpg", label: "Glass Front Kitchen Cabinets" },
  { img: "/c4.jpg", label: "Inset Kitchen Cabinets" },
  { img: "/c5.webp", label: "Glossy Kitchen Cabinets" },
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
      el.scrollLeft += e.deltaY * -scrollDirection;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [scrollDirection]);

  return (
    <section className="w-full py-8 md:py-12 bg-[#f1f2f6]">
      <style jsx>{`
        /* Hide custom mobile variants by default */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show mobile layout for widths >= 360px (up to md breakpoint) */
        @media (min-width: 360px) and (max-width: 767px) {
          .mobile-360plus {
            display: block;
          }
        }

        /* Show compact mobile for widths between 300px and 359px */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
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


      {/* Desktop Version */}
      <div className="desktop-1440 ">
        <div className="flex flex-col items-center mb-8 px-2">
          <h2 className="text-3xl md:text-4xl manrope text-gray-900 mb-2 text-center">
            {title}
          </h2>
          <p className=" wulkan-display md:text-3xl text-gray-500 mb-4 text-center">
            {subtitle}
          </p>
          <button className="bg-gray-800 text-white px-7 py-2 rounded-full manrope-medium text-base mb-6">
            {buttonText}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scrollbar-none px-2 md:px-0 pb-2 w-full md:max-w-[1360px] mx-auto"
          style={{ paddingRight: "5px" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[350px] max-w-[350px] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
              style={{ height: "400px" }}
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-[400px] object-cover transition duration-300"
              />
              <div className="px-6 pt-4 -mt-20">
                <div className="h-[40px] inline-block bg-gray-100 rounded-full text-gray-800 px-4 py-2.5 text-sm manrope-medium">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="desktop-1280 ">

        <div className="flex flex-col items-center mb-8 px-2">
          <h2 className="text-3xl md:text-4xl manrope text-gray-900 mb-2 text-center">
            {title}
          </h2>
          <p className=" wulkan-display md:text-3xl text-gray-500 mb-4 text-center">
            {subtitle}
          </p>
          <button className="bg-gray-800 text-white px-7 py-2 rounded-full manrope-medium text-base mb-6">
            {buttonText}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scrollbar-none px-2 md:px-0 pb-2 w-full md:max-w-[1250px] mx-auto"
          style={{ paddingRight: "5px" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[350px] max-w-[350px] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
              style={{ height: "400px" }}
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-[400px] object-cover transition duration-300"
              />
              <div className="px-6 pt-4 -mt-20">
                <div className="h-[40px] inline-block bg-gray-100 rounded-full text-gray-800 px-4 py-2.5 text-sm manrope-medium">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Version (>= 360px) */}
      <div className="md:hidden px-4 mobile-360plus">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl manrope  text-gray-900 mb-1 text-center">
            {title}
          </h2>
          <p className="text-xl wulkan-display  text-gray-500 mb-4 text-center">
            {subtitle}
          </p>
          <button className="bg-gray-800 text-white rounded-md manrope-medium px-5 py-2  text-sm mb-4">
            {buttonText}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none px-2 pb-2 w-full"
          style={{ paddingRight: "42px" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[280px] bg-white rounded-[24px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
              style={{ height: "320px" }}
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-[320px] object-cover transition duration-300"
              />
              <div className="px-4 pt-4 -mt-16">
                <div className="h-[36px] inline-block bg-gray-100 rounded-full text-gray-800 px-3 py-2.5 text-xs manrope">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Mobile Version (< 360px) */}
      <div className="md:hidden px-4 mk-mobile-300 mobile-300 ">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl manrope text-gray-900 mb-1 text-center">
            {title}
          </h2>
          <p className="text-xl wulkan-display  text-gray-500 mb-3 text-center">
            {subtitle}
          </p>
          <button className="bg-gray-800 text-white rounded-md manrope-medium px-4 py-1.5 text-xs mb-3">
            {buttonText}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-none px-1 pb-2 w-full"
          style={{ paddingRight: "32px" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[220px] max-w-[220px] bg-white rounded-2xl shadow-md overflow-hidden group transition hover:shadow-xl"
              style={{ height: "240px" }}
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-[240px] object-cover transition duration-300"
              />
              <div className="px-3 pt-3 -mt-14">
                <div className="h-[30px] inline-block bg-gray-100 rounded-full text-gray-800 px-3 py-2 text-[10px] manrope">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ModularKitchenShowcase: React.FC = () => (
  <div className="bg-[#f9fafc] w-screen min-h-screen -mt-10">
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
