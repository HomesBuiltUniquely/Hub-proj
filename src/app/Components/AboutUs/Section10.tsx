'use client';

import Link from 'next/dist/client/link';
import React from 'react';

const Section10 = () => {
  return (
    <div>


    
        <style jsx global>{`
    /* Default hidden for desktop variations */
    .desktop-1440,
    .desktop-1280,
    .aboutus-section10-3xl-container {
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

      {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
      <section className="aboutus-section10-3xl-container hidden mt-50">
        <div className="aboutus-section10-3xl-content">
          <div className="aboutus-section10-3xl-layout">

          

            <div className="aboutus-section10-3xl-background">
              {/* Background Image - 3XL optimized */}
              <img
                src="ab2.png"
                className="aboutus-section10-3xl-bg-image"
                alt="Interior Design Background"
              />

              {/* Overlay Content - 3XL optimized */}
              <div className="aboutus-section10-3xl-overlay manrope-medium">
                {/* Heading - 3XL optimized */}
                <h1 className="aboutus-section10-3xl-heading">
                  Shape the Future of Interior Design With Us
                </h1>

                {/* Description - 3XL optimized */}
                <p className="aboutus-section10-3xl-description">
                  Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                </p>

                {/* Button - 3XL optimized */}
                <button className="aboutus-section10-3xl-button">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2XL Screen - Large displays */}
      <section className=" desktop-1440 hidden 2xl:block 3xl:hidden mb-210">
        <div className="mt-20  w-full h-[550px] px-16">
          <div className="max-w-8xl mx-auto">


            {/* Container for Title + Image */}
            <div className="flex flex-col items-center justify-center w-full max-w-[1100px] mx-auto mt-16 xl:mt-20">

              {/* Title */}
              <div className="flex justify-center items-center space-x-2 mb-6">
                <span className="manrope text-2xl xl:text-6xl text-[#ebd457]">Team</span>
                <span className="manrope text-2xl xl:text-6xl text-black">HUB</span>
              </div>

              {/* Background Image */}
              <div className="w-[900px] xl:w-[1100px] h-[220px] xl:h-[600px] relative rounded-2xl overflow-hidden shadow-md mb-10">
                <img
                  src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Team%20Hub.webp"
                  alt="Interior Design Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

            </div>



            <div className="w-[1280px] h-auto min-h-[550px] bg-red-300 relative rounded-2xl overflow-hidden mt-10 mx-auto">

              {/* Background Image - 2XL optimized */}
              <img
                src="ab2.png"
                className="w-full h-full min-h-[450px] rounded-2xl absolute object-cover"
                alt="Interior Design Background"
              />

              {/* Overlay Content - 2XL optimized */}
              <div className="w-[550px] h-auto min-h-[300px] border backdrop-blur-sm bg-black/20 border-[#ddcdc1] absolute ml-10 mt-40 rounded-2xl p-8">

                {/* Heading - 2XL optimized */}
                <h1 className="text-3xl w-[400px] h-[100px] text-white mt-2 pl-6 manrope-medium leading-tight">
                  Shape the Future of Interior Design With Us
                </h1>

                {/* Description - 2XL optimized */}
                <p className="text-md manrope-medium pt-3 text-white w-[400px] pl-6 leading-relaxed">
                  Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                </p>

                {/* Button - 2XL optimized */}
                <Link href="/Career">
                  <button className="w-[200px] h-[40px] bg-white rounded-4xl mt-6 ml-6 text-base manrope-medium text-gray-800 hover:bg-red-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                    Join Our Team
                  </button>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* XL Screen - Extra large displays */}
      <section className="desktop-1280 hidden xl:block 2xl:hidden">
        <div className="mt-18 w-full h-auto px-12">
          <div className="max-w-7xl mx-auto">

            {/* Container for Title + Image */}
            <div className="flex flex-col items-center justify-center w-full max-w-[1100px] mx-auto mt-16 mb-20 xl:mt-20">

              {/* Title */}
              <div className="flex justify-center items-center space-x-2 mb-6">
                <span className="manrope text-2xl xl:text-5xl text-[#ebd457]">Team</span>
                <span className="manrope text-2xl xl:text-5xl text-black">HUB</span>
              </div>

              {/* Background Image */}
              <div className="w-[900px] xl:w-[1000px] h-[220px] xl:h-[500px] relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Team%20Hub.webp"
                  alt="Interior Design Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

            </div>




            <div className="w-full h-auto min-h-[400px] bg-red-300 relative rounded-2xl overflow-hidden">

              {/* Background Image - XL optimized */}
              <img
                src="ab2.png"
                className="w-full h-full min-h-[400px] rounded-2xl absolute object-cover"
                alt="Interior Design Background"
              />

              {/* Overlay Content - XL optimized */}
              <div className="w-[500px] h-auto min-h-[280px] border backdrop-blur-sm bg-black/20 border-[#ddcdc1] absolute ml-10 mt-20 rounded-2xl p-8">

                {/* Heading - XL optimized */}
                <h1 className="text-3xl w-[400px] h-[100px] text-white  manrope-medium leading-tight">
                  Shape the Future of Interior Design With Us
                </h1>

                {/* Description - XL optimized */}
                <p className="text-base manrope-medium  text-white w-[400px] leading-relaxed">
                  Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                </p>

                {/* Button - XL optimized */}
                <Link href="/Career">
                  <button className="w-[200px] h-[40px] bg-white rounded-4xl mt-6 ml-6 text-base manrope-medium text-gray-800 hover:bg-red-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                    Join Our Team
                  </button>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden">
        <div className="mt-16 ml-6 w-full h-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="w-full h-auto min-h-[350px] bg-red-300 relative rounded-2xl overflow-hidden">

              {/* Background Image - LG optimized */}
              <img
                src="ab.png"
                className="w-full h-full min-h-[350px] rounded-2xl absolute object-cover"
                alt="Interior Design Background"
              />

              {/* Overlay Content - LG optimized */}
              <div className="w-[450px] h-auto min-h-[250px] border backdrop-blur-sm bg-black/20 border-[#ddcdc1] absolute ml-8 mt-16 rounded-2xl p-8">

                {/* Heading - LG optimized */}
                <h1 className="text-2xl w-[400px] text-white pt-12 pl-6 manrope-medium leading-tight">
                  Shape the Future of Interior Design With Us
                </h1>

                {/* Description - LG optimized */}
                <p className="text-base manrope-medium pt-4 text-white w-[400px] pl-6 leading-relaxed">
                  Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                </p>

                {/* Button - LG optimized */}
                <button className="w-[200px] h-[40px] bg-white rounded-4xl mt-6 ml-6 text-base manrope-medium text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Join Our Team
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden">
        <div className="mt-12 ml-4 w-full h-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-auto min-h-[300px] bg-red-300 relative rounded-2xl overflow-hidden">

              {/* Background Image - MD optimized */}
              <img
                src="bn.jpg"
                className="w-full h-full min-h-[300px] rounded-2xl absolute object-cover"
                alt="Interior Design Background"
              />

              {/* Overlay Content - MD optimized */}
              <div className="w-[400px] h-auto min-h-[220px] border backdrop-blur-sm bg-black/20 border-[#ddcdc1] absolute ml-6 mt-12 rounded-2xl p-6">

                {/* Heading - MD optimized */}
                <h1 className="text-2xl w-[350px] text-white pt-10 pl-4 manrope-medium leading-tight">
                  Shape the Future of Interior Design With Us
                </h1>

                {/* Description - MD optimized */}
                <p className="text-base manrope-medium pt-3 text-white w-[350px] pl-4 leading-relaxed">
                  Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                </p>

                {/* Button - MD optimized */}
                <button className="w-[180px] h-[38px] bg-white rounded-3xl mt-5 ml-4 text-base manrope-medium text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Join Our Team
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SM Screen - Small displays and mobile */}
      <section className="block md:hidden mt-10 mb-10">
        <div className="mt-8 w-full h-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Title */}
            <div className="flex justify-center space-x-2 mb-4">
              <span className="manrope text-2xl text-[#ebd457]">Team</span>
              <span className="manrope text-2xl">HUB</span>
            </div>

            {/* First Background Image */}
            <div className="w-full h-[220px] relative rounded-xl overflow-hidden mb-6">
              <img
                src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Team%20Hub.webp"
                className="absolute w-[full] h-full object-cover rounded-xl"
                alt="Interior Design Background"
              />
            </div>

            {/* Second Background with Overlay */}
            <div className="relative w-full rounded-xl overflow-hidden">
              {/* Blurred Background Image */}
              <img
                src="ab2.png"
                alt="Background"
                className="w-full h-70 object-cover scale-105 blur-[0.25px]"
              />

              {/* Dark overlay for better contrast */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

              {/* Text Content Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 shadow-2xl">
                <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center text-white">

                  {/* Heading */}
                  <h1 className=" mt-3 text-xl manrope-medium leading-snug">
                    Shape the Future of Interior Design With Us
                  </h1>

                  {/* Description */}
                  <p className="text-sm manrope-medium mt-5 leading-relaxed">
                    Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                  </p>

                  {/* Button */}
                  <Link href="/Career"><button className="w-[150px] sm:w-[170px] mt-6 h-[36px] bg-white rounded-3xl  text-sm manrope-medium text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                    Join Our Team
                  </button></Link>

                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* Pure CSS for 3XL - 2560*1440 resolution */}
      <style jsx>{`
        /* Ensure only one 3xl section exists */
        .aboutus-section10-3xl-container {
          display: none ;
        }
        
        /* Hide 2xl section when 3xl is active */
        @media (min-width: 2560px) {
          .aboutus-section10-2xl-section {
            display: none !important;
          }
        }
        
        @media (min-width: 2560px) {
          .aboutus-section10-3xl-container {
            display: block !important;
            width: 100%;
            height: 800px;
            margin-top: 5rem;
            margin-right: 5rem;
            padding: 0 6rem;
          }
          
          .aboutus-section10-3xl-content {
            max-width: 1200rem;
            margin: 0 auto;
          }
          
          .aboutus-section10-3xl-layout {
            width: 100%;
            height: auto;
          }
          
          .aboutus-section10-3xl-background {
            width: 100%;
            height: auto;
            min-height: 800px;
            background-color: #fca5a5;
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
          }
          
          .aboutus-section10-3xl-bg-image {
            width: 100%;
            height: 100%;
            min-height: 600px;
            border-radius: 1rem;
            position: absolute;
            object-fit: cover;
          }
          
          .aboutus-section10-3xl-overlay {
            width: 600px;
            height: 300px;
            min-height: 350px;
            border: 1px solid #ddcdc1;
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            margin-left: 2.5rem;
            margin-top: 16.25rem;
            border-radius: 1rem;
            padding: 2rem;
          }
          
          .aboutus-section10-3xl-heading {
            font-size: 2.5rem;
            width: 480px;
            height: 120px;
            color: white;
            padding-left: 1.5rem;
            font-family: 'Manrope', sans-serif;
            font-weight: 500;
            line-height: 1.2;
            
          }
          
          .aboutus-section10-3xl-description {
            font-size: 1.125rem;
            font-family: 'Manrope', sans-serif;
            font-weight: 500;
            padding-top: -1rem;
            color: white;
            width: 500px;
            padding-left: 1.5rem;
            line-height: 1.7;
          }
          
          .aboutus-section10-3xl-button {
            width: 220px;
            height: 45px;
            background-color: white;
            border-radius: 9999px;
            margin-top: 2rem;
            margin-left: 1.5rem;
            font-size: 1.125rem;
            font-weight: 500;
            color: #1f2937;
            transition: background-color 0.3s;
            border: none;
            cursor: pointer;
          }
          
          .aboutus-section10-3xl-button:hover {
            background-color: #f3f4f6;
          }
        }
      `}</style>
    </div>
  );
};

export default Section10;