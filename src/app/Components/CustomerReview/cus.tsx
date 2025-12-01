"use client";

import { useEffect, useState } from "react";

const googleReviews = [
  {
    id: 1,
    name: "Baishakhi M",
    rating: 5,
    location: "Sumadhura Epitome",
    text: "This was exactly the interior design experience I was seeking. HUB created the perfect plan for my space, my style and my budget.",
  },
  {
    id: 2,
    name: "Amit R",
    rating: 5,
    location: "Sobha City",
    text: "Excellent designs and professional team. Highly recommended!",
  },
  {
    id: 3,
    name: "Priya D",
    rating: 5,
    location: "Prestige Lakeside",
    text: "Smooth experience and beautiful end result for our interiors.",
  },
  {
    id: 4,
    name: "Rahul S",
    rating: 4,
    location: "Brigade Exotica",
    text: "On time and on budget. Very happy.",
  },
  {
    id: 5,
    name: "Meena K",
    rating: 5,
    location: "Divyasree Republic",
    text: "Our family loves our new living space—thank you HUB team!",
  },
  {
    id: 6,
    name: "Vinay P",
    rating: 5,
    location: "Salarpuria Sattva",
    text: "Would choose them again in a heartbeat.",
  },
];

const VISIBLE_CARDS = 3;

export function CustomerReview() {
  const [startIdx, setStartIdx] = useState(0);
  const total = googleReviews.length;
  const reviews = [...googleReviews];

  // for swipe detection
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50 && startIdx < reviews.length - 1) {
      setStartIdx((prev) => (prev + 1) % total);
    } else if (touchEndX - touchStartX > 50 && startIdx > 0) {
      setStartIdx((prev) => (prev - 1 + total) % total);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const showCards = [];
  for (let i = 0; i < VISIBLE_CARDS; ++i) {
    showCards.push(googleReviews[(startIdx + i) % total]);
  }

  const handlePrev = () => setStartIdx((prev) => (prev - 1 + total) % total);
  const handleNext = () => setStartIdx((prev) => (prev + 1) % total);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div>
      <style jsx>{`

  /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560{
    display: none !important;
  }

 /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }


         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }
`}</style>

      {/* DESKTOP 2560 VERSION */}
      <div className="desktop-2560 relative">
        <div className="w-full max-w-[1440px] mx-auto px-8 xl:px-16 2xl:px-24 relative">
          <h2 className="text-4xl lg:text-4xl  manrope text-gray-800 text-center mt-20 mb-12">
            Google Reviews
          </h2>

          <div className="relative flex justify-center items-center">
            {/* LEFT BUTTON */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute -left-15 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ‹
            </button>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto">
              {showCards.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="bg-white border border-gray-200 rounded-2xl px-6 pt-6 pb-5 flex flex-col justify-center hover:shadow-md transition-shadow h-[230px] w-[340px] mx-auto"
                >
                  {/* Header: Avatar, Name, Location, Google Icon */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {/* Avatar with initial */}
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-700 text-[15px] font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>

                      {/* Name and Location */}
                      <div className="flex flex-col">
                        <p className="text-gray-900 text-[15px] manrope font-medium leading-tight">
                          {review.name}
                        </p>
                        <p className="text-gray-500 text-[13px] manrope-medium leading-none mt-[2px]">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Google "G" Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 533.5 544.3"
                      height="18"
                      width="18"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#4285F4"
                        d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.5c-6.3 33.8-25 62.3-53.4 81.5v67h86.4c50.6-46.6 80-115.4 80-193.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M272 544.3c72.4 0 133.1-24 177.5-65.3l-86.4-67c-24 16.1-54.6 25.6-91.1 25.6-69.9 0-129.1-47.2-150.4-110.8H31.2v69.7C75.3 482.6 167.1 544.3 272 544.3z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M121.6 326.8c-5.5-16.1-8.6-33.3-8.6-50.8s3.1-34.7 8.6-50.8v-69.7H31.2C11.2 200.3 0 238.5 0 276s11.2 75.7 31.2 106.5l90.4-69.7z"
                      />
                      <path
                        fill="#EA4335"
                        d="M272 107.7c39.5 0 74.8 13.6 102.7 40.4l76.9-76.9C405.1 25.8 344.4 0 272 0 167.1 0 75.3 61.7 31.2 157.2l90.4 69.7C142.9 154.9 202.1 107.7 272 107.7z"
                      />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mt-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fbbc04"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fbbc04"
                        className="w-4 h-4 mr-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.146 4.35a.563.563 0 00.424.307l4.8.698a.563.563 0 01.312.96l-3.474 3.387a.563.563 0 00-.162.498l.82 4.782a.563.563 0 01-.817.593L12 17.875l-4.31 2.268a.563.563 0 01-.817-.593l.82-4.782a.563.563 0 00-.162-.498L4.057 9.814a.563.563 0 01.312-.96l4.8-.698a.563.563 0 00.424-.307l2.146-4.35z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-[15px] leading-snug manrope line-clamp-4 max-w-[300px]">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>







            {/* RIGHT BUTTON */}
            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-15 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: total }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${startIdx === idx ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* 1920 Version */}


      <div className="desktop-1920 relative">
        <div className="w-full mx-auto px-8 xl:px-16 2xl:px-24 relative">
          <h2 className="text-4xl lg:text-4xl  manrope text-gray-800 text-center mt-20 mb-12">
            Google Reviews
          </h2>

          <div className="relative flex justify-center items-center">
            {/* LEFT BUTTON */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ‹
            </button>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto">
              {showCards.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="bg-white border border-gray-200 rounded-2xl px-6 pt-6 pb-5 flex flex-col justify-center hover:shadow-md transition-shadow h-[230px] w-[340px] mx-auto"
                >
                  {/* Header: Avatar, Name, Location, Google Icon */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {/* Avatar with initial */}
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-700 text-[15px] font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>

                      {/* Name and Location */}
                      <div className="flex flex-col">
                        <p className="text-gray-900 text-[15px] manrope font-medium leading-tight">
                          {review.name}
                        </p>
                        <p className="text-gray-500 text-[13px] manrope-medium leading-none mt-[2px]">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Google "G" Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 533.5 544.3"
                      height="18"
                      width="18"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#4285F4"
                        d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.5c-6.3 33.8-25 62.3-53.4 81.5v67h86.4c50.6-46.6 80-115.4 80-193.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M272 544.3c72.4 0 133.1-24 177.5-65.3l-86.4-67c-24 16.1-54.6 25.6-91.1 25.6-69.9 0-129.1-47.2-150.4-110.8H31.2v69.7C75.3 482.6 167.1 544.3 272 544.3z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M121.6 326.8c-5.5-16.1-8.6-33.3-8.6-50.8s3.1-34.7 8.6-50.8v-69.7H31.2C11.2 200.3 0 238.5 0 276s11.2 75.7 31.2 106.5l90.4-69.7z"
                      />
                      <path
                        fill="#EA4335"
                        d="M272 107.7c39.5 0 74.8 13.6 102.7 40.4l76.9-76.9C405.1 25.8 344.4 0 272 0 167.1 0 75.3 61.7 31.2 157.2l90.4 69.7C142.9 154.9 202.1 107.7 272 107.7z"
                      />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mt-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fbbc04"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fbbc04"
                        className="w-4 h-4 mr-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.146 4.35a.563.563 0 00.424.307l4.8.698a.563.563 0 01.312.96l-3.474 3.387a.563.563 0 00-.162.498l.82 4.782a.563.563 0 01-.817.593L12 17.875l-4.31 2.268a.563.563 0 01-.817-.593l.82-4.782a.563.563 0 00-.162-.498L4.057 9.814a.563.563 0 01.312-.96l4.8-.698a.563.563 0 00.424-.307l2.146-4.35z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-[15px] leading-snug manrope line-clamp-4 max-w-[300px]">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>



            {/* RIGHT BUTTON */}
            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: total }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${startIdx === idx ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>



      {/* 1280 version  */}


      <div className="desktop-1280">

        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 relative -mt-45">
          <h2 className="text-4xl lg:text-4xl manrope text-gray-800 text-center mt-16 mb-10">
            Google Reviews
          </h2>

          <div className="relative flex justify-center items-center">
            {/* LEFT BUTTON */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute -left-8 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ‹
            </button>

            {/* CARDS */}

            <div className="grid grid-cols-3 gap-8 w-full max-w-[1120px] mx-auto">
              {showCards.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="bg-white shadow-lg rounded-2xl px-6 pt-6 pb-5 flex flex-col justify-center text-left hover:shadow-2xl transition-shadow h-[210px] w-[340px] mx-auto"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    {/* Left: Avatar + Name + Location */}
                    <div className="flex items-center space-x-3">
                      {/* Avatar with Initial */}
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-700 text-[15px] font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </div>

                      <div>
                        <p className="text-gray-900 text-[16px] manrope font-medium leading-tight">
                          {review.name}
                        </p>
                        <p className="text-gray-500 text-sm manrope-medium leading-none mt-[2px]">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Right: Google Icon */}
                    <svg
                      height={20}
                      width={20}
                      viewBox="0 0 533.5 544.3"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#4285F4"
                        d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.5c-6.3 33.8-25 62.3-53.4 81.5v67h86.4c50.6-46.6 80-115.4 80-193.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M272 544.3c72.4 0 133.1-24 177.5-65.3l-86.4-67c-24 16.1-54.6 25.6-91.1 25.6-69.9 0-129.1-47.2-150.4-110.8H31.2v69.7C75.3 482.6 167.1 544.3 272 544.3z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M121.6 326.8c-5.5-16.1-8.6-33.3-8.6-50.8s3.1-34.7 8.6-50.8v-69.7H31.2C11.2 200.3 0 238.5 0 276s11.2 75.7 31.2 106.5l90.4-69.7z"
                      />
                      <path
                        fill="#EA4335"
                        d="M272 107.7c39.5 0 74.8 13.6 102.7 40.4l76.9-76.9C405.1 25.8 344.4 0 272 0 167.1 0 75.3 61.7 31.2 157.2l90.4 69.7C142.9 154.9 202.1 107.7 272 107.7z"
                      />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="text-yellow-500 text-[17px] mb-2">
                    {"★".repeat(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-[15px] leading-snug manrope line-clamp-4 max-w-[300px]">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>


            {/* RIGHT BUTTON */}
            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors shadow-md"
            >
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: total }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${startIdx === idx ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>


      {/* Mobile version */}


      <div
        className="block md:hidden w-full px-4 py-8 -mt-15 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="block md:hidden w-full px-4 py-8 -mt-4 overflow-hidden">
          {/* Section Header */}
          <div className="flex items-start mb-6">
            <div className="w-[2px] h-[45px] bg-[#ebd457] -ml-3"></div>
            <h1 className="text-3xl wulkan-display-bold text-gray-800 ml-3 leading-snug">
              Google Reviews
            </h1>
          </div>

          {/* Review Slider */}
          <div className="relative flex justify-center items-center w-full">


            {/* CARD SLIDER */}
            <div className="overflow-hidden w-[105vw] max-w-[460px] mx-auto relative z-10">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${startIdx * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div
                    key={`${review.id}-${idx}`}
                    className="flex-shrink-0 w-full px-2"
                  >
                    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-shadow w-[100%] max-w-[420px] mx-auto mb-5 min-h-[180px]">
                      {/* Top Section: Avatar + Name + Google Icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                            <span className="text-gray-700 text-[15px] font-semibold">
                              {review.name.charAt(0)}
                            </span>
                          </div>

                          {/* Name + Location */}
                          <div className="flex flex-col">
                            <span className="text-gray-900 text-[16px] manrope font-medium leading-tight">
                              {review.name}
                            </span>
                            <span className="text-gray-500 text-[13px] manrope-medium leading-none mt-[2px]">
                              {review.location}
                            </span>
                          </div>
                        </div>

                        {/* Google Icon */}
                        <svg
                          height={20}
                          width={20}
                          viewBox="0 0 533.5 544.3"
                          className="flex-shrink-0 mt-1"
                        >
                          <path
                            fill="#4285F4"
                            d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.5c-6.3 33.8-25 62.3-53.4 81.5v67h86.4c50.6-46.6 80-115.4 80-193.5z"
                          />
                          <path
                            fill="#34A853"
                            d="M272 544.3c72.4 0 133.1-24 177.5-65.3l-86.4-67c-24 16.1-54.6 25.6-91.1 25.6-69.9 0-129.1-47.2-150.4-110.8H31.2v69.7C75.3 482.6 167.1 544.3 272 544.3z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M121.6 326.8c-5.5-16.1-8.6-33.3-8.6-50.8s3.1-34.7 8.6-50.8v-69.7H31.2C11.2 200.3 0 238.5 0 276s11.2 75.7 31.2 106.5l90.4-69.7z"
                          />
                          <path
                            fill="#EA4335"
                            d="M272 107.7c39.5 0 74.8 13.6 102.7 40.4l76.9-76.9C405.1 25.8 344.4 0 272 0 167.1 0 75.3 61.7 31.2 157.2l90.4 69.7C142.9 154.9 202.1 107.7 272 107.7z"
                          />
                        </svg>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mt-[6px] mb-[4px]">
                        <span className="text-yellow-500 text-[16px]">
                          {"★".repeat(review.rating)}
                        </span>
                      </div>

                      {/* Review Text (less top space for short reviews) */}
                      <div className="flex-grow flex items-start mt-[2px]">
                        <p className="text-gray-700 text-[15px] leading-snug manrope text-left">
                          {review.text}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON */}

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: reviews.length }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${startIdx === idx ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
