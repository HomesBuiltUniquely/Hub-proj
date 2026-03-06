"use client";

import { useState, useEffect } from "react";

export default function Section3() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToForm = () => {
    const formElement = document.getElementById("hero-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      img: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/4bhk_price.jpg",
      type: "4 BHK",
      price: "8.0 Lakhs Onwards*",
    },
    {
      img: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/3bhk_price.jpg",
      type: "3 BHK",
      price: "6.0 Lakhs Onwards*",
    },
    {
      img: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/2bhk_price.jpg",
      type: "2 BHK",
      price: "4.0 Lakhs Onwards*",
    },
    {
      img: "https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/Google_ads_LP1/Modular_kitchen_price.jpeg",
      type: "Modular Kitchen",
      price: "1.5 Lakhs Onwards*",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const cardWidth = 380;

  return (
    <>
      {/* DESKTOP 2560 */}

      <div className="desktop-2560 hidden mx-auto px-20 lg:block">
        <div className="flex w-full h-[680px] bg-[#f1f2f6] -mt-15">
          <div className="w-full">
            <div className="text-[56px] mt-10 leading-tight tracking-wide manrope w-[500px]">
              Homes For Every <span className="text-red-600">Lifestyle</span>
            </div>

            <div className="mt-10">
              <p className="text-[30px] manrope-medium tracking-wide">
                From cozy living rooms to elegant bedrooms and stylish modular
                kitchens, we craft dream home interiors that blend comfort,
              </p>

              <p className="text-[30px] manrope-medium tracking-wide">
                beauty, and functionality, creating spaces you&#39;ll love.
              </p>

              <button
                onClick={scrollToForm}
                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
              >
                Book A Free Design Session
              </button>
            </div>
          </div>

          <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-end">
            <div
              className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
              style={{
                width: `${slides.length * cardWidth + (slides.length - 1)}px`,
                transform: `translateX(-${currentSlide * cardWidth}px)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                  />
                  <div className="row-span-2 mt-18 ml-5">
                    <div className="text-[30px] manrope">{slide.type}</div>
                    <div className="mt-1 text-2xl manrope-medium">
                      {slide.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* 1920 Version */}

      <div className="desktop-1920 hidden mx-auto px-20 lg:block">
        <div className="flex w-full h-[680px] bg-[#f1f2f6] -mt-15">
          <div className="w-full">
            <div className="text-[56px] mt-10 leading-tight tracking-wide manrope w-[500px]">
              Homes For Every <span className="text-red-600">Lifestyle</span>
            </div>

            <div className="mt-10">
              <p className="text-[30px] manrope-medium tracking-wide">
                From cozy living rooms to elegant bedrooms and stylish modular
                kitchens, we craft dream home interiors that blend comfort,
              </p>

              <p className="text-[30px] manrope-medium tracking-wide">
                beauty, and functionality, creating spaces you&#39;ll love.
              </p>

              <button
                onClick={scrollToForm}
                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
              >
                Book A Free Design Session
              </button>
            </div>
          </div>

          <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-end">
            <div
              className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
              style={{
                width: `${slides.length * cardWidth + (slides.length - 1)}px`,
                transform: `translateX(-${currentSlide * cardWidth}px)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                  />
                  <div className="row-span-2 mt-18 ml-5">
                    <div className="text-[30px] manrope">{slide.type}</div>
                    <div className="mt-1 text-2xl manrope-medium">
                      {slide.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* 1280 Version */}

      <div className="desktop-1280 hidden mx-auto px-15 lg:block">
        <div className="flex w-full h-[680px] bg-[#f1f2f6] -mt-15">
          <div className="w-full">
            <div className="text-[56px] mt-10 leading-tight tracking-wide manrope w-[500px]">
              Homes For Every <span className="text-red-600">Lifestyle</span>
            </div>

            <div className="mt-10">
              <p className="text-[30px] manrope-medium tracking-wide">
                From cozy living rooms to elegant bedrooms and stylish modular
                kitchens, we craft dream home interiors that blend comfort,
              </p>

              <p className="text-[30px] manrope-medium tracking-wide">
                beauty, and functionality, creating spaces you&#39;ll love.
              </p>

              <button
                onClick={scrollToForm}
                className="text-white bg-red-500 mt-12 w-[300px] h-[50px] manrope rounded-full text-[20px] hover:bg-red-600 transition-colors"
              >
                Book A Free Design Session
              </button>
            </div>
          </div>

          <div className="w-full h-[720px] mt-18 ml-20 relative overflow-hidden flex items-end">
            <div
              className="flex gap-x-15 transition-transform duration-500 ease-in-out h-full"
              style={{
                width: `${slides.length * cardWidth + (slides.length - 1)}px`,
                transform: `translateX(-${currentSlide * cardWidth}px)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-[380px] h-[520px] bg-white rounded-4xl grid grid-rows-5 flex-shrink-0"
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="rounded-t-4xl row-span-3 w-full h-[350px] object-cover"
                  />
                  <div className="row-span-2 mt-18 ml-5">
                    <div className="text-[30px] manrope">{slide.type}</div>
                    <div className="mt-1 text-2xl manrope-medium">
                      {slide.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-[#f1f2f6] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}

      <div className="lg:hidden w-full mx-auto max-h-[900px] bg-[#f1f2f6]">
        <div className="ml-5  manrope-medium ">
          <div className="flex">
            <h1 className="text-4xl pt-10 tracking-wide manrope-medium">
              Homes For Every <span className="text-red-600">Lifestyle</span>
            </h1>
          </div>
        </div>

        <div className="ml-9 mt-5 manrope-medium">
          <div className="-ml-3 manrope-medium min-w-[320px] max-w-full mt-4">
            <p>
              From cozy living rooms to elegant bedrooms and stylish kitchens,
              we create dream interiors that blend comfort, beauty and
              functionality.
            </p>
          </div>
        </div>

        {/* Stacked Card Carousel */}
        <div className="flex justify-center">
          <div className=" relative h-[400px] w-full max-w-[280px] manrope-medium ml-5 mt-8">
            {slides.map((slide, idx) => {
              const isTop = idx === currentSlide;
              const isSecond = idx === (currentSlide + 1) % slides.length;
              const isThird = idx === (currentSlide + 2) % slides.length;
              const isFourth = idx === (currentSlide + 3) % slides.length;
              const isFifth = idx === (currentSlide + 4) % slides.length;

              if (!(isTop || isSecond || isThird || isFourth || isFifth))
                return null;

              let offset = 0;
              let scale = 1;
              let z = 5;

              if (isSecond) {
                offset = 40;
                scale = 0.95;
                z = 4;
              } else if (isThird) {
                offset = 80;
                scale = 0.9;
                z = 3;
              } else if (isFourth) {
                offset = 120;
                scale = 0.85;
                z = 2;
              } else if (isFifth) {
                offset = 160;
                scale = 0.8;
                z = 1;
              }

              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-0 w-full max-w-[270px] h-[410px] bg-white rounded-3xl shadow-lg flex-shrink-0 transform -translate-x-1/2 ml-20"
                  style={{
                    transform: `translateX(-${offset}px) scale(${scale})`,
                    zIndex: z,
                    transition: "all 0.4s cubic-bezier(.4,2,.6,1)",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.type}
                    className="w-full h-[320px] object-cover rounded-t-3xl "
                  />
                  <div className="p-6">
                    <div className="text-2xl manrope text-[#3A2C19]">
                      {slide.type}
                    </div>
                    <div className="text-lg text-[#3A2C19] ">{slide.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-15">
          <button
            onClick={scrollToForm}
            className="text-[18px] w-[250px] h-[50px] bg-red-500 text-white rounded-xl manrope hover:bg-red-600 transition-colors"
          >
            Book A Free Design Session
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Hide all sections by default */

        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
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
    </>
  );
}
