




 {/* Buttons */}


        {/* <div className="max-w-5xl h-[100px] mx-auto overflow-hidden">
          <div className="absolute  inset-x-0 z-10 flex justify-center menu text-nowrap">
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
        </div> */}

        {/* <div className="w-full max-w-5xl mx-auto px-4 mb-3">
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex whitespace-nowrap gap-4 py-2">
      {topCategories.map((c) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-6 py-2 rounded-full transition-shadow border flex-shrink-0 ${
            active === c
              ? "bg-[#3a2d25] text-white shadow-md"
              : "bg-white text-gray-700 shadow-sm"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  </div>
</div> */}



        {/* <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex whitespace-nowrap gap-4 px-4 py-2 mb-3">
            {topCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2 rounded-full transition-shadow border flex-shrink-0 ${active === c
                    ? "bg-[#3a2d25] text-white shadow-md"
                    : "bg-white text-gray-700 shadow-sm"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div> */}


        <div className="w-full overflow-x-auto scrollbar-hide">
  <div className="flex whitespace-nowrap gap-3 sm:gap-4 px-3 sm:px-4 py-2 mb-3">
    {topCategories.map((c) => (
      <button
        key={c}
        onClick={() => setActive(c)}
        className={`px-5 sm:px-6 py-2 rounded-full transition-shadow border flex-shrink-0 text-sm sm:text-base ${
          active === c
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
        <div className="flex flex-wrap justify-start gap-3">

          {/* Card 1 */}
          <div className="w-[700px] h-[470px] mx-auto rounded-xl bg-white shadow-lg">

            <div className="grid grid-cols-1 - m-3">

              <img src="/kb1.jpg" alt="" className="w-[full] h-[220px]  shadow-xl rounded-2xl " />

            </div>


            <div className="grid grid-cols-2 gap-2 m-3">
              <img src="/kb2.png" alt="" className="w-[160px] h-[160px]  shadow-xl rounded-2xl " />


              <img src="/kb3.png" alt="" className="w-[160px] h-[160px] shadow-xl rounded-2xl  " />

            </div>

            <button className="bg-red-500 w-50 pt-2 pb-2 rounded-3xl ml-20 text-manrope text-white">See more</button>

          </div>



        </div>



import React, { JSX, useState, useRef } from "react";
import Image from "next/image";

const topCategories = ["Kitchen", "Living Room", "Bedroom", "Wardrobe", "Kids Room"];

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

         <div className="block md:hidden w-full px-3 py-3">
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
          {/* Card 1 */}
          <div className="w-full max-w-[95%] bg-white rounded-xl shadow-lg p-3">
            {/* Top Image */}
            <div className="mb-3">
              <img
                src="/kb1.jpg"
                alt=""
                className="w-full h-[200px] object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Grid of 2 Images */}
            <div className="grid grid-cols-2 gap-3 mb-4">
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



   



  );
}




// gpt code




import React, { JSX, useState } from "react";

// Categories
const topCategories = ["Kitchen", "Living Room", "Bedroom", "Wardrobe", "Kids Room"];

// Image type
type Img = { src: string; alt: string };

// Images per category
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

export default function InspirationBoard(): JSX.Element {
  const [active, setActive] = useState<string>("Kitchen");

  const images = categoryImages[active] || [];

  return (
    <div className="block md:hidden w-full px-3 py-3">
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
  );
}
