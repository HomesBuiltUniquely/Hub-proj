"use client";
import React, { useEffect, useRef } from "react";

const kitchenAccessories = [
  { img: "/wc11.png", label: "U - Shaped Kitchen" },
  { img: "/wc12.png", label: "U - Shaped Kitchen" },
  { img: "/wc13.png", label: "U - Shaped Kitchen" },
  { img: "/wc14.jpg", label: "U - Shaped Kitchen" },
];

const cabinetAccs = [
  { img: "/wc21.jpg", label: "U - Shaped Kitchen" },
  { img: "/wc22.jpg", label: "U - Shaped Kitchen" },
  { img: "/wc23.jpg", label: "U - Shaped Kitchen" },
  { img: "/wc24.jpg", label: "U - Shaped Kitchen" },
  { img: "/wc25.jpg", label: "U - Shaped Kitchen" },
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
    return () => el.removeEventListener("wheel", onWheel);
  }, [scrollDirection]);

  return (
    // <section className="w-full py-8 md:py-12 bg-[#f1f2f6]">
    //   <style jsx global>{`
    //     /* Hide all by default */
    //     .desktop-1280,
    //     .desktop-1440,
    //     .mobile-300,
    //     .mobile-360plus {
    //       display: none;
    //     }

    //     /* 1280 layout */
    //     @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //       .desktop-1280 {
    //         display: block;
    //       }
    //     }

    //     /* 1440 layout */
    //     @media screen and (min-width: 1440px) {
    //       .desktop-1440 {
    //         display: block;
    //       }
    //     }

    //     /* Mobile 360–480px */
    //     @media screen and (min-width: 360px) and (max-width: 480px) {
    //       .mobile-360plus {
    //         display: block;
    //       }
    //     }

    //     /* Mobile 300–359px */
    //     @media screen and (min-width: 300px) and (max-width: 359px) {
    //       .mobile-300 {
    //         display: block;
    //       }
    //     }
    //   `}</style>

    //   {/* 1440 version */}
    //   <div className="desktop-1440">
    //     <div className="flex flex-col items-center mb-10 px-2 -mt-40">
    //       <h2 className="text-3xl md:text-4xl manrope text-gray-900 mb-2 text-center">
    //         {title}
    //       </h2>
    //       <p className="wulkan-display text-gray-500 text-2xl mb-4 text-center">
    //         {subtitle}
    //       </p>
    //       <button className="bg-gray-800 text-white px-7 py-2 rounded-full manrope-medium text-base">
    //         {buttonText}
    //       </button>
    //     </div>
    //     <div
    //       ref={scrollRef}
    //       className="flex gap-6 overflow-x-auto scrollbar-none px-2 md:px-0 pb-4 w-full md:max-w-[1360px] mx-auto"
    //     >
    //       {cards.map((card, idx) => (
    //         <div
    //           key={idx}
    //           className="min-w-[270px] w-[350px] bg-white rounded-[23px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
    //           style={{ height: "400px" }}
    //         >
    //           <img
    //             src={card.img}
    //             alt={card.label}
    //             className="w-full h-[450px] object-cover bg-center transition duration-300"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* 1280 version */}
    //   <div className="desktop-1280 text-center  -mt-60 py-10 text-3xl">
    //     <div className="flex flex-col items-center mb-8 px-2">
    //       <h2 className="text-3xl md:text-4xl manrope text-gray-900 mb-2 text-center">
    //         {title}
    //       </h2>
    //       <p className="wulkan-display text-gray-500 text-2xl mb-4 text-center">
    //         {subtitle}
    //       </p>
    //       <button className="bg-gray-800 text-white px-7 py-2 rounded-full manrope-medium text-base mb-6">
    //         {buttonText}
    //       </button>
    //     </div>
    //     <div
    //       ref={scrollRef}
    //       className="flex gap-7 overflow-x-auto scrollbar-none px-2 md:px-0 pb-2 w-full md:max-w-[1360px] mx-auto"
    //     >
    //       {cards.map((card, idx) => (
    //         <div
    //           key={idx}
    //           className="min-w-[270px] w-[350px] bg-white rounded-[23px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
    //           style={{ height: "400px" }}
    //         >
    //           <img
    //             src={card.img}
    //             alt={card.label}
    //             className="w-full h-[450px] object-cover bg-center transition duration-300"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Mobile 360–480 */}
    //   <div className="md:hidden px-4 mobile-360plus">
    //     <div className="flex flex-col items-center mb-4 -mt-50">
    //       <h2 className="text-xl manrope text-gray-900 mb-1 text-center">
    //         {title}
    //       </h2>
    //       <p className="text-xl wulkan-display  text-gray-500 mb-3 text-center">
    //         {subtitle}
    //       </p>
    //       <button className="bg-gray-800 text-white rounded-md manrope-medium px-4 py-1.5 text-xs mb-3">
    //         {buttonText}
    //       </button>
    //     </div>
    //     <div
    //       ref={scrollRef}
    //       className="flex gap-3 overflow-x-auto scrollbar-none px-1 pb-2 w-full"
    //       style={{ paddingRight: "32px" }}
    //     >
    //       {cards.map((card, idx) => (
    //         <div
    //           key={idx}
    //           className="min-w-[220px] max-w-[220px] bg-white rounded-2xl shadow-md overflow-hidden group transition hover:shadow-xl"
    //           style={{ height: "240px" }}
    //         >
    //           <img
    //             src={card.img}
    //             alt={card.label}
    //             className="w-full h-[240px] object-cover transition duration-300"
    //           />
              
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Mobile 300–359 */}
    //   {/* Compact Mobile Version (< 360px) */}
    //   <div className="md:hidden px-4 mk-mobile-300 mobile-300 ">
    //     <div className="flex flex-col items-center mb-4">
    //       <h2 className="text-xl manrope text-gray-900 mb-1 text-center">
    //         {title}
    //       </h2>
    //       <p className="text-xl wulkan-display  text-gray-500 mb-3 text-center">
    //         {subtitle}
    //       </p>
    //       <button className="bg-gray-800 text-white rounded-md manrope-medium px-4 py-1.5 text-xs mb-3">
    //         {buttonText}
    //       </button>
    //     </div>
    //     <div
    //       ref={scrollRef}
    //       className="flex gap-3 overflow-x-auto scrollbar-none px-1 pb-2 w-full"
    //       style={{ paddingRight: "32px" }}
    //     >
    //       {cards.map((card, idx) => (
    //         <div
    //           key={idx}
    //           className="min-w-[220px] max-w-[220px] bg-white rounded-2xl shadow-md overflow-hidden group transition hover:shadow-xl"
    //           style={{ height: "240px" }}
    //         >
    //           <img
    //             src={card.img}
    //             alt={card.label}
    //             className="w-full h-[240px] object-cover transition duration-300"
    //           />
    //           <div className="px-3 pt-3 -mt-14">
    //             <div className="h-[30px] inline-block bg-gray-100 rounded-full text-gray-800 px-3 py-2 text-[10px] manrope">
    //               {card.label}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>



<section className="w-full py-8 md:py-12 bg-[#f1f2f6]">
     <style jsx global>{`
         /* Hide all by default */
       .desktop-1280,
       .desktop-1440,
       .mobile-300,
       .mobile-360plus {
         display: none;
       }

       /* 1280 layout */
       @media screen and (min-width: 1024px) and (max-width: 1439px) {
         .desktop-1280 {
           display: block;
         }
       }

       /* 1440 layout */
       @media screen and (min-width: 1440px) {
         .desktop-1440 {
           display: block;
         }
       }

       /* Mobile 360–480px */
       @media screen and (min-width: 360px) and (max-width: 480px) {
         .mobile-360plus {
           display: block;
         }
       }

       /* Mobile 300–359px */
       @media screen and (min-width: 300px) and (max-width: 359px) {
         .mobile-300 {
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
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ModularKitchenShowcase: React.FC = () => (
  <div className="w-full h-full bg-[#f9fafc] flex flex-col items-center ">
    <CardSection
      title="Designed to Fit "
      subtitle="Built to Last."
      buttonText="Wardrobe for him & her"
      cards={kitchenAccessories}
      scrollDirection={-1}
    />
    <CardSection
      title="Designed to Fit "
      subtitle="Built to Last."
      buttonText="Dresser Unit"
      cards={cabinetAccs}
      scrollDirection={-1}
    />
  </div>


);

export default ModularKitchenShowcase;
