"use client";

import { useState } from "react";

const googleReviews = [
    {
      id: 1,
      name: "Baishakhi M",
      rating: 5,
      location: "Sumadhura Epitome",
      text: "This was exactly the interior design experience I was seeking. HUB created the perfect plan for my space, my style and my budget.",
      avatar: "/baishakhi.jpg",
    },
    {
      id: 2,
      name: "Amit R",
      rating: 5,
      location: "Sobha City",
      text: "Excellent designs and professional team. Highly recommended!",
      avatar: "/baishakhi.jpg",
    },
    {
      id: 3,
      name: "Priya D",
      rating: 5,
      location: "Prestige Lakeside",
      text: "Smooth experience and beautiful end result for our interiors.",
      avatar: "/baishakhi.jpg",
    },
    {
      id: 4,
      name: "Rahul S",
      rating: 4,
      location: "Brigade Exotica",
      text: "On time and on budget. Very happy.",
      avatar: "/baishakhi.jpg",
    },
    {
      id: 5,
      name: "Meena K",
      rating: 5,
      location: "Divyasree Republic",
      text: "Our family loves our new living space—thank you HUB team!",
      avatar: "/baishakhi.jpg",
    },
    {
      id: 6,
      name: "Vinay P",
      rating: 5,
      location: "Salarpuria Sattva",
      text: "Would choose them again in a heartbeat.",
      avatar: "/baishakhi.jpg",
    },
  ];

  const VISIBLE_CARDS = 3;

  export function CustomerReview() {

    const [startIdx, setStartIdx] = useState(0);

    const total = googleReviews.length;
    // Figure which 3 reviews should be visible right now, looping if necessary
    const showCards = [];
    for (let i = 0; i < VISIBLE_CARDS; ++i) {
      showCards.push(googleReviews[(startIdx + i) % total]);
    }

    const handlePrev = () => setStartIdx((prev: number) => (prev - 1 + total) % total);
    const handleNext = () => setStartIdx((prev: number) => (prev + 1) % total);

    return(
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {/* Google Reviews Carousel */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-8 sm:mt-12 md:mt-16 lg:mt-20 font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center">
        Google Reviews
      </h2>
      <div className="w-full flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center pb-1 text-xl sm:text-2xl transition-colors"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center pb-1 text-xl sm:text-2xl transition-colors"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>
        {/* Responsive cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
          {showCards.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="bg-white shadow-lg w-full max-w-sm mx-auto sm:max-w-none h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[320px] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-between"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap justify-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">{review.name}</span>
                <span className="ml-2 text-yellow-500 flex text-sm sm:text-base">
                  {"★".repeat(review.rating)}
                </span>
                <svg
                  height={18}
                  width={18}
                  className="ml-2 text-gray-300 sm:h-5 sm:w-5"
                  aria-label="Google icon"
                  role="img"
                >
                  <circle cx="10" cy="10" r="10" fill="#eee" />
                  <text
                    x={5}
                    y={16}
                    fontSize={10}
                    fontFamily="sans-serif"
                    fill="#4285F4"
                  >
                    G
                  </text>
                </svg>
              </div>
              <span className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 text-center">{review.location}</span>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center leading-relaxed flex-1">{review.text}</p>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 gap-2">
          {Array.from({ length: total }).map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${startIdx === idx ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

        </div>
    )

}