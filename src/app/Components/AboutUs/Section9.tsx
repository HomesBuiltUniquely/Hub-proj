"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Section9() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const travers = [
    {
      img: "/r.png",
      name: "Ranjith P Raj",
      title: "Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkedin: "https://www.linkedin.com/in/ranjithpraj/"
    },
    {
      img: "/s.png",
      name: "Susmita ",
      title: "Co-Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkedin: "https://www.linkedin.com/in/susmita-mondal-955344b3/"
    },
    {
      img: "/Alex.png",
      name: "Ebez Alex",
      title: "Associate Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      linkedin: "https://www.linkedin.com/in/ebezalex/"
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
      <section className="aboutus-section9-3xl-container hidden 3xl:block">
        <div className="aboutus-section9-3xl-content">
          <div className="aboutus-section9-3xl-layout">
            <div className="aboutus-section9-3xl-title wulkan-display-bold">Core Members</div>

            {/* Carousel Container - 3XL optimized */}
            <div className="aboutus-section9-3xl-carousel -mt-50">
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
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                    </div>
                    <div>
                      <div className="aboutus-section9-3xl-card-content">
                        <div>
                          <h3 className="aboutus-section9-3xl-name manrope-medium">{traver.name}</h3>
                          <p className="aboutus-section9-3xl-title-text manrope-medium">{traver.title}</p>
                        </div>
                        <div>
                          <a href={traver.linkedin}>
                            <img src="/linkedin.png" className='w-[40px] h-[40px] hover:bg-red-500 rounded-full mt-2' alt="LinkedIn" />
                          </a>
                        </div>
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
      <section className="desktop-1440 hidden 2xl:block 3xl:hidden">
        <div className="w-screen h-[850px] relative overflow-hidden bg-white">
          <div className="text-6xl wulkan-display-bold pt-20 pl-16">Core Members</div>

          {/* Carousel Container - 2XL optimized */}
          <div className="relative w-full h-[70vh] mt-10 px-16">
            {/* Slides Container */}
            <div className="flex gap-8 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div
                  key={currentIndex + index}
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-[400px] bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="h-full relative">
                      <Image
                        src={traver.img}
                        alt={traver.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className=" bg-[#ebd457] flex justify-between  mt-5 rounded-2xl">
                    <div className="h-1/2 px-10 py-3 flex flex-col">
                      <h3 className="text-3xl manrope">{traver.name}</h3>
                      <p className="text-gray-500 mb-6 text-xl">{traver.title}</p>
                    </div>
                    <div>
                      <a href={traver.linkedin}>
                        <img src="/linkedin.png" className='w-[40px] h-[40px] hover:bg-red-500 rounded-full mt-10 mr-10' alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - 2XL optimized */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* XL Screen - Extra large displays */}
      <section className="desktop-1280 hidden 2xl:block 3xl:hidden">
        <div className="w-screen h-[850px] relative overflow-hidden bg-white">
          <div className="text-5xl wulkan-display-bold pt-20 pl-16">Core Members</div>

          {/* Carousel Container - 2XL optimized */}
          <div className="relative w-full h-[70vh] mt-10 px-16">
            {/* Slides Container */}
            <div className="flex gap-8 h-full">
              {travers.slice(currentIndex, currentIndex + 3).map((traver, index) => (
                <div
                  key={currentIndex + index}
                  className="flex-1 min-w-0"
                >
                  <div className="w-full h-[400px] bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="h-full relative">
                      <Image
                        src={traver.img}
                        alt={traver.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className=" bg-[#ebd457] flex justify-between  mt-5 rounded-2xl">
                    <div className="h-1/2 px-10 py-3 flex flex-col">
                      <h3 className="text-3xl manrope">{traver.name}</h3>
                      <p className="text-gray-500 mb-6 text-xl">{traver.title}</p>
                    </div>
                    <div>
                      <a href={traver.linkedin}>
                        <img src="/linkedin.png" className='w-[40px] h-[40px] hover:bg-red-500 rounded-full mt-10 mr-10' alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - 2XL optimized */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="text-4xl wulkan-display-bold pt-16 pl-8">Core Members</div>

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
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="h-1/2 p-6 flex flex-col">
                      <h3 className="text-xl manrope">{traver.name}</h3>
                      <p className="text-gray-500 mb-4 manrope-medium">{traver.title}</p>
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
          <div className="text-3xl wulkan-display-bold pt-12 pl-6">Core Members</div>

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
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="h-1/2 p-4 flex flex-col">
                      <h3 className="text-lg manrope">{traver.name}</h3>
                      <p className="text-gray-500 mb-3 manrope-medium">{traver.title}</p>
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

      <section className="block md:hidden w-full max-w-[425px] px-4 mx-auto mb-10">
        <div className="flex items-start">
          {/* Yellow Line */}


          <div className="w-full">
            <div className='bg-[#ebd657] w-[3px] h-10 mb-13'>
              <h1 className="text-3xl text-nowrap wulkan-display-bold  ml-3">
                Core members
              </h1>
            </div>
            {/* Member 1 */}
            <div>
              <img src="/r.png" alt="Ranjith" className="rounded-3xl mt-5 w-full object-cover" />
              <div className="bg-[#ebd457] flex justify-between items-center mt-2 rounded-2xl w-full h-20 px-3">
                <div>
                  <h1 className="manrope text-2xl">Ranjith P Raj</h1>
                  <p className="text-sm manrope-medium text-gray-500">Founder</p>
                </div>
                <a href="https://www.linkedin.com/in/ranjithpraj/">
                  <img src="/linkedin.png" className="w-[40px] h-[40px] rounded-full" alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Member 2 */}
            <div>
              <img src="/s.png" alt="Susmita" className="rounded-3xl mt-5 w-full object-cover" />
              <div className="bg-[#ebd457] flex justify-between items-center mt-2 rounded-2xl w-full h-20 px-3">
                <div>
                  <h1 className="manrope text-2xl">Susmita</h1>
                  <p className="text-sm manrope-medium text-gray-500">Co-Founder</p>
                </div>
                <a href="https://www.linkedin.com/in/susmita-mondal-955344b3/">
                  <img src="/linkedin.png" className="w-[40px] h-[40px] rounded-full" alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Member 3 */}
            <div>
              <img src="/Alex.png" alt="Alex" className="rounded-3xl mt-5 w-full object-cover" />
              <div className="bg-[#ebd457] flex justify-between items-center mt-2 rounded-2xl w-full h-20 px-3">
                <div>
                  <h1 className="manrope text-2xl">Ebez Alex</h1>
                  <p className="text-sm manrope-medium text-gray-500">Associate Director</p>
                </div>
                <a href="https://www.linkedin.com/in/ebezalex/">
                  <img src="/linkedin.png" className="w-[40px] h-[40px] rounded-full" alt="LinkedIn" />
                </a>
              </div>
            </div>
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
            height: 95vh;
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
            width: 80%;
            height: 50vh;
            margin-top: 8rem;
            padding: 0 6rem;
            margin-left: 15rem;

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
            height: 100%;
            position: relative;
          }
          
          .aboutus-section9-3xl-card-content {
            padding: 2rem;
            display: flex;
            flex-direction: row;
            background-color: #ddcdc1;
            justify-content: space-between;
            border-radius: 2rem;
            margin-top: 1rem;
          }
          
          .aboutus-section9-3xl-name {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.5rem;
            color: #ffffff;
          }
          
          .aboutus-section9-3xl-title-text {
            color: #6b7280;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            color: #ffffff;
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


      
        <style jsx global>{`
    /* Default hidden for desktop variations */
    .desktop-1440,
    .desktop-1280,
    .aboutus-section9-3xl-container {
        display: none;
    }

    /* XL (1280–1439) */
    @media (min-width: 768px) and (max-width: 1439px) {
        .desktop-1280 {
            display: block;
        }
    }

    /* 2XL (1440–1919) */
    @media (min-width: 1440px) and (max-width: 1919px) {
        .desktop-1440 {
            display: block;
        }
    }

    /* 3XL (2560+) */
    @media (min-width: 2560px) {
        .aboutus-section4-3xl-container {
            display: block !important;
        }

        /* Hide other layouts */
        .desktop-1440,
        .desktop-1280 {
            display: none !important;
        }
    }
`}
</style>


    </div>
  );
}