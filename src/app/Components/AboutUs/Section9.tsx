"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Section9() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const travers = [
    {
      img: "/bn.jpg",
      name: "Ranjit P Raj",
      title: "Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        img: "/bn.jpg",
        name: "Ranjit P Raj",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        img: "/bn.jpg",
        name: "Ranjit P Raj",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        img: "/bn.jpg",
        name: "Ranjit P Raj",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
      },
      {
        img: "/bn.jpg",
        name: "Ranjits P Raj",
        title: "Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
      },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, travers.length - 3);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, travers.length - 3);
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  return (
    <div>
      {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
      <section className="aboutus-section9-3xl-container hidden">
        <div className="aboutus-section9-3xl-content">
          <div className="aboutus-section9-3xl-layout">
            <div className="aboutus-section9-3xl-title">Core Members</div>
            
            {/* Carousel Container - 3XL optimized */}
            <div className="aboutus-section9-3xl-carousel">
              {/* Slides Container */}
              <div className="aboutus-section9-3xl-slides">
                {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                  <div 
                    key={currentIndex + index} 
                    className="aboutus-section9-3xl-slide"
                  >
                    <div className="aboutus-section9-3xl-card">
                      <div className="aboutus-section9-3xl-image-container">
                        <Image 
                          src={traver.img} 
                          alt={traver.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="aboutus-section9-3xl-card-content">
                        <h3 className="aboutus-section9-3xl-name">{traver.name}</h3>
                        <p className="aboutus-section9-3xl-title-text">{traver.title}</p>
                        <p className="aboutus-section9-3xl-description">{traver.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons - 3XL optimized */}
              <button 
                onClick={prevSlide}
                className="aboutus-section9-3xl-nav-button aboutus-section9-3xl-prev-button"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="aboutus-section9-3xl-nav-button aboutus-section9-3xl-next-button"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2XL Screen - Large displays */}
      <section className="aboutus-section9-2xl-section hidden 2xl:block 3xl:hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-6xl manrope pt-20 pl-16">Core Members</div>
          
          {/* Carousel Container - 2XL optimized */}
          <div className="relative w-full h-[70vh] mt-20 px-16">
            {/* Slides Container */}
            <div className="flex gap-8 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-full bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="h-1/2 relative">
                      <Image 
                        src={traver.img} 
                        alt={traver.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-1/2 p-8 flex flex-col">
                      <h3 className="text-3xl font-bold">{traver.name}</h3>
                      <p className="text-gray-500 mb-6 text-xl">{traver.title}</p>
                      <p className="text-gray-700 text-lg">{traver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - 2XL optimized */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* XL Screen - Extra large displays */}
      <section className="hidden xl:block 2xl:hidden bg-white">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-5xl manrope pt-18 pl-12">Core Members</div>
          
          {/* Carousel Container - XL optimized */}
          <div className="relative w-full h-[70vh] mt-18 px-12">
            {/* Slides Container */}
            <div className="flex gap-6 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-full bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="h-1/2 relative">
                      <Image 
                        src={traver.img} 
                        alt={traver.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-1/2 p-6 flex flex-col">
                      <h3 className="text-2xl font-bold">{traver.name}</h3>
                      <p className="text-gray-500 mb-4 text-lg">{traver.title}</p>
                      <p className="text-gray-700 text-base">{traver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - XL optimized */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-4xl manrope pt-16 pl-8">Core Members</div>
          
          {/* Carousel Container - LG optimized */}
          <div className="relative w-full h-[70vh] mt-16 px-8">
            {/* Slides Container */}
            <div className="flex gap-6 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-full bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="h-1/2 relative">
                      <Image 
                        src={traver.img} 
                        alt={traver.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-1/2 p-6 flex flex-col">
                      <h3 className="text-xl font-bold">{traver.name}</h3>
                      <p className="text-gray-500 mb-4 text-base">{traver.title}</p>
                      <p className="text-gray-700 text-sm">{traver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - LG optimized */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-3xl manrope pt-12 pl-6">Core Members</div>
          
          {/* Carousel Container - MD optimized */}
          <div className="relative w-full h-[70vh] mt-12 px-6">
            {/* Slides Container */}
            <div className="flex gap-4 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-full bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="h-1/2 relative">
                      <Image 
                        src={traver.img} 
                        alt={traver.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-1/2 p-4 flex flex-col">
                      <h3 className="text-lg font-bold">{traver.name}</h3>
                      <p className="text-gray-500 mb-3 text-sm">{traver.title}</p>
                      <p className="text-gray-700 text-xs">{traver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - MD optimized */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* SM Screen - Small displays and mobile */}
      <section className="block md:hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-2xl manrope pt-8 pl-4">Core Members</div>
          
          {/* Carousel Container - SM optimized */}
          <div className="relative w-full h-[70vh] mt-8 px-4">
            {/* Slides Container */}
            <div className="flex gap-3 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="h-1/2 relative">
                      <Image 
                        src={traver.img} 
                        alt={traver.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col">
                      <h3 className="text-base font-bold">{traver.name}</h3>
                      <p className="text-gray-500 mb-2 text-xs">{traver.title}</p>
                      <p className="text-gray-700 text-xs">{traver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - SM optimized */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Pure CSS for 3XL - 2560*1440 resolution */}
      <style jsx>{`
        /* Ensure only one 3xl section exists */
        .aboutus-section9-3xl-container {
          display: none !important;
        }
        
        /* Hide 2xl section when 3xl is active */
        @media (min-width: 2560px) {
          .aboutus-section9-2xl-section {
            display: none !important;
          }
        }
        
        @media (min-width: 2560px) {
          .aboutus-section9-3xl-container {
            display: block !important;
            width: 100vw;
            height: 100vh;
            position: relative;
            overflow: hidden;
            background-color: white;
          }
          
          .aboutus-section9-3xl-content {
            width: 100%;
            height: 100%;
            position: relative;
          }
          
          .aboutus-section9-3xl-layout {
            width: 100%;
            height: 100%;
            position: relative;
          }
          
          .aboutus-section9-3xl-title {
            font-size: 4rem;
            font-family: 'Manrope', sans-serif;
            padding-top: 5rem;
            padding-left: 6rem;
            color: #111827;
            font-weight: 600;
          }
          
          .aboutus-section9-3xl-carousel {
            position: relative;
            width: 100%;
            height: 70vh;
            margin-top: 5rem;
            padding: 0 6rem;
          }
          
          .aboutus-section9-3xl-slides {
            display: flex;
            gap: 2rem;
            height: 100%;
          }
          
          .aboutus-section9-3xl-slide {
            flex: 1;
            min-width: 0;
          }
          
          .aboutus-section9-3xl-card {
            width: 100%;
            height: 100%;
            background-color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-radius: 1rem;
            overflow: hidden;
          }
          
          .aboutus-section9-3xl-image-container {
            height: 50%;
            position: relative;
          }
          
          .aboutus-section9-3xl-card-content {
            height: 50%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
          }
          
          .aboutus-section9-3xl-name {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
          }
          
          .aboutus-section9-3xl-title-text {
            color: #6b7280;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
          }
          
          .aboutus-section9-3xl-description {
            color: #374151;
            font-size: 1.125rem;
            line-height: 1.6;
          }
          
          .aboutus-section9-3xl-nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.8);
            color: #1f2937;
            padding: 1rem;
            border-radius: 50%;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            font-weight: bold;
          }
          
          .aboutus-section9-3xl-nav-button:hover {
            background-color: white;
          }
          
          .aboutus-section9-3xl-prev-button {
            left: 1rem;
          }
          
          .aboutus-section9-3xl-next-button {
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}