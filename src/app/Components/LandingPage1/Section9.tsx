'use client';
import { useState, useEffect } from 'react';

export default function Section9() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialImages = [
    "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//TESTIMONIAL%201.png" ,
    "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//TESTIMONIAL%202.png",
    "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//TESTIMONIAL%203.png",
    "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//TESTIMONIAL%204.png",
    "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//TESTIMONIAL%205.png"
  ];

  // Create a looped array for seamless infinite scrolling
  const loopedImages = [...testimonialImages, ...testimonialImages, ...testimonialImages];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= testimonialImages.length) {
          // Reset to beginning for seamless loop
          return 1;
        }
        return prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [testimonialImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= testimonialImages.length) {
        return 1; // Reset to beginning for seamless loop
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return testimonialImages.length - 1; // Go to end for seamless loop
      }
      return prev - 1;
    });
  };

  return (
    <div className="w-full bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className=" text-5xl manrope-medium mb-4">
            What Our Happy Customers Have to Say!
          </h3>
      <img className='w-[400px] h-[150px] lg:w-[450px] lg:h-[200px] mx-auto mt-10' src="https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//REVIEW-01.png"></img>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {loopedImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white border-1 border-[#DDCDC1] rounded-2xl overflow-hidden">
                      <img
                        src={image}
                        alt={`Testimonial ${(index % testimonialImages.length) + 1}`}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="w-full bg-white px-4">
            {/* Mobile Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {loopedImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="w-full flex-shrink-0 px-2"
                    >
                                              <div className="bg-white rounded-2xl border-1 border-[#DDCDC1] overflow-hidden mx-auto max-w-sm h-74">
                        <img
                          src={image}
                          alt={`Testimonial ${(index % testimonialImages.length) + 1}`}
                          className="w-auto h-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}