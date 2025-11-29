'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Section4() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: "/CUSTOMER2.jpg",
      quote: "Our villa looks elegant and peaceful now. HUB Interior's team beautifully designed our bar unit, open kitchen, and false ceiling.",
      name: "Mr. & Mrs. George – Royal Tulip Villa",
      avatar: "/CUSTOMER2.jpg"
    },
    {
      image: "/CUTOMER1.jpg",
      quote: "HUB Interior made our 3BHK feel truly like home. The modular kitchen, wardrobe, and TV unit were designed exactly as we dreamed.",
      name: "Mr. & Mrs. Rijul Azizam – 3BHK Home Interior",
      avatar: "/CUTOMER1.jpg"
    },
    {
      image: "/CUSTOMER3.jpg",
      quote: "HUB Interior gave our home a warm and stylish look. The pastel kitchen, wardrobe, and TV unit make every space feel perfect.",
      name: " Mr. & Mrs. Ann – Modern Family Home",
      avatar: "/Customer3.jpg"
    },
    {
      image: "/CUSTOMER4.jpg",
      quote: "Loved how HUB Interior transformed my 2BHK into a modern space. The kitchen, wardrobe, and TV unit reflect great quality and design.",
      name: "Mr. Akhil – 2BHK Contemporary Interior",
      avatar: "/Customer4.jpg"
    },

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality for mobile only
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>


      <style jsx>{`
     /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560  {
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

         /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }

    `}</style>



      {/* 2560 version  */}


      <div className="desktop-2560 hidden md:block bg-[#F1F2F6] min-h-[650px] py-10 px-80">
        <div className="max-w-8xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-5xl wulkan-display-bold text-gray-800 text-nowrap w-[450px] h-[120px]">
              Trusted by homeowners like you
            </h1>

            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden -mt-10">
            <div className="flex gap-8 items-center max-w-8xl ">
              {/* Left Side - Image */}
              <div className="w-[500px]">
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt="Interior Design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Testimonial */}
              <div className="w-[1000px] h-96 p-8 bg-[#ddcdc1] rounded-3xl flex flex-col justify-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-12 h-16 text-[#32261c] ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 manrope-medium">
                  {testimonials[currentSlide].quote}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-md font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>



      {/* 1920 Version */}


      <div className="desktop-1920 hidden">

        <div className="md:block bg-[#F1F2F6] min-h-[650px] mx-20">
          <div className="w-full mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-12">
              <h1 className="text-5xl  wulkan-display-bold text-gray-800 text-nowrap w-[450px] h-[120px]">
                Trusted by homeowners like you
              </h1>


            </div>

            {/* Testimonial Carousel */}
            <div className="relative overflow-hidden -mt-15">
              <div className="flex gap-8 items-center max-w-8xl ">
                {/* Left Side - Image */}
                <div className="w-[500px]">
                  <div className="relative h-96 rounded-3xl overflow-hidden">
                    <Image
                      src={testimonials[currentSlide].image}
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Testimonial */}
                <div className="w-[1000px] h-96 p-8 bg-[#ddcdc1] rounded-3xl flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-12 h-16 text-[#32261c] ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 manrope-medium">
                    {testimonials[currentSlide].quote}
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">

                    <div>
                      <h4 className="text-md font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-3 mt-10 justify-end">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>


              <Link href="/CustomerReviews">
                <button className="manrope bg-[#ddcdc1] hover:bg-[#ebd457]  transition-colors text-black px-4 py-2 rounded-4xl shadow hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 flex-shrink-0">
                  View more
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>


      {/* 1280 Version */}

      <div className="desktop-1280 hidden md:block bg-[#F1F2F6] min-h-[650px] mt-10 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-5xl wulkan-display-bold text-gray-800 text-nowrap w-[450px] h-[120px]">
              Trusted by homeowners like you
            </h1>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden -mt-15">
            <div className="flex gap-8 items-center max-w-6xl ">
              {/* Left Side - Image */}
              <div className="w-[500px]">
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt="Interior Design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Testimonial */}
              <div className="w-[1000px] h-96 p-8 bg-[#ddcdc1] rounded-3xl flex flex-col justify-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-12 h-16 text-[#32261c] ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 manrope-medium">
                  {testimonials[currentSlide].quote}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-md font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* CTA */}
           <div className="flex justify-end items-center mt-8 gap-3">
                        <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/CustomerReviews">
                            <button className="manrope bg-[#ddcdc1] hover:bg-[#ebd457] transition-colors text-black px-4 py-2 rounded-4xl shadow  hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">
                                View more
                            </button>
                        </Link>
                    </div>


        </div>
      </div>


      {/* Mobile Version - Card Design */}
      <div className="block md:hidden bg-[#F1F2F6] py-8 px-4 -mt-8">
        {/* Mobile Title */}
        <div className="mb-8">
          <div className="w-[2px] h-[37px] bg-[#ebd457] ml-"></div>
          <h1 className="text-3xl w-auto wulkan-display-bold text-gray-800 text-left pl-3 -mt-9">
            Trusted by homeowners like you
          </h1>
        </div>

        {/* Mobile Testimonial Cards */}
        <div className="space-y-6 w-[300px]  mx-auto rounded-4xl bg-[#ddcdc1]">
          {/* Image Card */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative w-[280px] h-80 rounded-4xl overflow-hidden shadow-xl mx-auto ">
              <Image
                src={testimonials[currentSlide].image}
                alt="Interior Design"
                fill
                className="object-cover mt-3 rounded-4xl"
              />
            </div>
          </div>

          {/* Testimonial Content Card */}
          <div className="bg-[#ddcdc1] rounded-3xl p-6  max-w-sm mx-auto">
            {/* Quote Icon */}
            <div className="mb-4">
              <svg className="w-12 h-12 text-[#32261c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 manrope-medium">
              {testimonials[currentSlide].quote}
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center gap-3">

              <div>
                <h4 className="text-lg font-bold text-gray-800 manrope-medium">{testimonials[currentSlide].name}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center items-center mt-8 ml-50 gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>


          <button
            onClick={nextSlide}
            className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}