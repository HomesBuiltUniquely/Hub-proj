"use client";

import React, { useRef } from "react";

const enquiries = [
  { title: "Design your dream home?", link: "/Contact" },
  { title: "Customer Support", link: "/CustomerReviews" },
  { title: "Career opportunities", link: "/Career" },
  { title: "Vendor Partnerships", link: "/Vendor" },
  { title: "Franchise", link: "/interior-design-franchise" },
];

const HelpCenter: React.FC = () => {
  // ✅ DESKTOP SCROLL (1280px / 1440px)
  const scrollRef1280 = useRef<HTMLDivElement>(null);
  const scrollRef1440 = useRef<HTMLDivElement>(null);

  const scrollReq = (dir: "left" | "right") => {
    // pick which ref to use based on current screen width
    const activeRef =
      window.innerWidth >= 1440 ? scrollRef1440 : scrollRef1280;

    if (activeRef.current) {
      const scrollAmount = activeRef.current.clientWidth * 0.7; // Adjust scroll amount as needed
      activeRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
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
        <div className="min-h-screen py-5 mt-10">
          <section className="max-w-[1440px] mx-auto px-8 -mt-5 relative">
            {/* Title + Buttons */}
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-5xl wulkan-display-bold text-gray-800">
                Connect with the right team
              </h1>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => scrollReq("left")}
                  className="w-12 h-12 border-2 border-gray-400 rounded-full  flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => scrollReq("right")}
                  className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef1440}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {enquiries.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  className="flex-shrink-0 min-w-[280px] max-w-[300px] min-h-[150px] bg-[#ddcdc1] rounded-xl p-6 hover:bg-[#e8d5c8] transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                >
                  {/* Title */}
                  <div className="manrope text-lg text-gray-800 mb-6">
                    {item.title}
                  </div>

                  {/* Arrow button left-aligned */}
                  <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-2xl -mt-1 text-black">&#8594;</span>
                  </button>
                </a>
              ))}
            </div>
          </section>
        </div>

      </div>


      <div className="desktop-1280">

        <div className=" min-h-screen py-20">
          <section className="max-w-screen-2xl mx-auto px-8 relative">
            {/* Title + Buttons in same line (structure retained) */}
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-5xl wulkan-display-bold text-gray-800">
                Connect with the right team
              </h1>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => scrollReq("left")}
                  className="w-11 h-11 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => scrollReq("right")}
                  className="w-11 h-11 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef1280} // ✅ linked correctly
              className="flex gap-6 overflow-x-auto scroll-smooth  pb-8"
              style={{ scrollBehavior: "smooth" }}
            >
              {enquiries.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  className="flex-shrink-0 min-w-[250px] max-w-[250px] min-h-[100px] max-h-[250px] bg-[#ddcdc1] rounded-xl p-6 hover:bg-[#e8d5c8] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className="manrope text-md mb-5 text-gray-800">
                    {item.title}
                  </div>

                  <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-3xl -mt-1 text-black">&#8594;</span>
                  </button>
                </a>
              ))}
            </div>
          </section>
        </div>

      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden mobile min-h-screen px-6 -mt-35 flex justify-center">
        <section className="max-w-sm w-full mx-auto">
          {/* Header */}
          <div className="flex items-start mb-6">
            <div className="w-[2px] h-[75px] bg-[#ebd457] -ml-3"></div>
            <h1 className="text-3xl wulkan-display-bold text-gray-800 ml-3 -mt-1 leading-snug">
              Connect with the right team
            </h1>
          </div>

          {/* Grid layout for mobile (2 + 2) */}
          <div className="grid grid-cols-2 gap-4 justify-center">
            {enquiries.slice(0, 4).map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="bg-[#ddcdc1] rounded-xl p-6 hover:bg-[#e8d5c8] transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between items-center text-center min-h-[150px]"
              >
                <div className="manrope text-sm mb-4 text-gray-800">{item.title}</div>
                <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-2xl -mt-1 text-black">&#8594;</span>
                </button>
              </a>
            ))}
          </div>

          {/* Last single centered card */}
          <div className="flex justify-center mt-4">
            {enquiries.slice(4, 5).map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="bg-[#ddcdc1] rounded-xl p-6 hover:bg-[#e8d5c8] transition-all duration-300 shadow-md hover:shadow-lg w-[70%] flex flex-col items-center justify-center text-center min-h-[150px]"
              >
                <div className="manrope text-sm mb-4 text-gray-800">{item.title}</div>
                <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-2xl -mt-1 text-black">&#8594;</span>
                </button>
              </a>
            ))}
          </div>
        </section>
      </div>



    </div>
  );
};

export default HelpCenter;
