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
    <div className=''>





    </div>
    <div className=''>
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="text-5xl manrope pt-20 pl-12">Core Members</div>
      
      {/* Carousel Container */}
      <div className="relative w-full h-[70vh] mt-20 px-12">
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
                  <h3 className="text-2xl font-bold">{traver.name}</h3>
                  <p className="text-gray-500 mb-4">{traver.title}</p>
                  <p className="text-gray-700 text-sm">{traver.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.max(1, Math.ceil(travers.length / 3)) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full ${Math.floor(currentIndex / 3) === index ? 'bg-gray-800' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}