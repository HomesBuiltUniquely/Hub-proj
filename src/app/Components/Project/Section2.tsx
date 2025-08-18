'use client';
import React, { useState } from "react";

// Example project/video data
const featuredProjects = [
  {
    id: 1,
    videoSrc:
      "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/DemoVideo.mp4",
    thumbnail: "iam.webp", // shown before play
    title: "Mr Srinivas’s Villa",
    location: "Jakkur",
    testimonial: `“Homes Under Budget is a best interior designer in Bangalore, I have come across while searching to design my dream abode. They've got the taste and passion to convert a shell into a place I love and always thought of. Their team managed the project and I didn't have to check their work twice. Wonderful experience with HUB team.”`,
    label: "Villa Interiors",
  },
  {
    id: 2,
    videoSrc:
      "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/DemoVideo.mp4",
    thumbnail: "iam.webp",
    title: "Mr Rohan’s Apartment",
    location: "Whitefield",
    testimonial:
      "“Seamless experience from design to execution. Absolutely satisfied with the results and quality!”",
    label: "Apartment Interiors",
  },
];

const FeaturedProjectsAndEbook = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );

  const slide = featuredProjects[current];

  return (
    <section className="bg-[#f1f2f6] pb-24 pt-10 flex flex-col items-center">
      {/* Featured Projects */}
      <div className="w-full max-w-5xl px-3">
        <h2 className="text-[50px]  mt-40 font-bold mb-1 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-[20px] mb-5">A glimpse at our best work</p>

        <div className="relative rounded-2xl mt-10 overflow-hidden shadow-lg select-none min-h-[520px] flex items-center">
          {!isPlaying ? (
            <div className="relative w-full h-[520px] cursor-pointer">
              <img
                src={slide.thumbnail}
                alt={slide.title}
                className="w-full h-full object-cover"
                onClick={() => setIsPlaying(true)}
              />
              {/* Play button overlay */}
              <div
                className="absolute inset-0 bg-opacity-40 flex justify-center items-center"
                onClick={() => setIsPlaying(true)}
              >
                <svg width={64} height={64} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="rgba(255, 255, 255, 0.8)" />
                  <polygon points="10,8 16,12 10,16" fill="#222" />
                </svg>
              </div>
            </div>
          ) : (
            <video
              src={slide.videoSrc}
              className="w-full h-[520px] object-cover"
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

          {/* Slide Text */}
          <div className="absolute bottom-10 left-0 right-0 p-7 text-white z-10">
            <h3 className="text-xl font-semibold mb-1">
              {slide.title}
              <span className="ml-2 text-gray-300 font-normal">
                , {slide.location}
              </span>
            </h3>
            <p className="mb-2 text-sm leading-relaxed">{slide.testimonial}</p>
          </div>

          {/* Carousel Controls */}
          {featuredProjects.length > 1 && (
            <>
              <button
                className="absolute left-3 w-[50px] h-[50px] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 backdrop-blur px-3 py-3 rounded-full shadow z-20"
                onClick={() => {
                  prevSlide();
                  setIsPlaying(false);
                }}
                aria-label="Previous project"
              >
                ‹
              </button>
              <button
                className="absolute right-3 w-[50px] h-[50px] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 backdrop-blur px-3 py-3 rounded-full shadow z-20"
                onClick={() => {
                  nextSlide();
                  setIsPlaying(false);
                }}
                aria-label="Next project"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>

      {/* E-Book Promo */}
      <div className="w-full max-w-2xl mx-auto mt-30 text-center">
        <p className="mb-2 text-gray-400 text-md">New E-Book</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900">
          Home Buyer’s <span className="text-red-600">Handbook</span>
        </h2>
        <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-lg transition">
          Buy now for free
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjectsAndEbook;
