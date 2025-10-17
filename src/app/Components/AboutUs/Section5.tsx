'use client';

import React, { useState } from 'react';

const Section5 = () => {
  const stats = [
    { value: "5000+", label: "Happy Homes" },
    { value: "60+", label: "Expert Designers" },
    { value: "2", label: "Experience Centre" },
    { value: "4.7+", label: "Google Rating" },
  ];

  const timeline = [
    { year: "2019 – New Experience Centre, Banaswadi", content: "The story began with the launch of our very first Experience Centre in Banaswadi." },
    { year: "2020 – Instahome", content: "Introduced Instahome, making interiors quicker and more accessible for modern homeowners." },
    { year: "2021 – HUB Store", content: "Expanded with the launch of the HUB Store, bringing curated products and solutions under one roof." },
    { year: "2022 – New Experience Centre, Sarjapur", content: "Opened our second Experience Centre in Sarjapur, strengthening our presence in Bengaluru." },
    { year: "2023 – Hubster ERP", content: "Launched Hubster, our in-house ERP system, streamlining processes and efficiency." },
    { year: "2023 – HUB for Business", content: "Extended our expertise with HUB for Business, catering to B2B clients and partnerships." },
    { year: "2024 – Fast Track Interiors", content: "Introduced 34 Days Fast Track Interiors, setting new benchmarks in speed and quality." },
    { year: "2024 – Bigger Space, Bigger Team", content: " Moved from Banaswadi to a larger Experience Centre in HBR Layout, reflecting our growth. " },
    { year: "2025 – Rebranding", content: "Transformed from Homes Under Budget into HUB Interior, marking a bold new chapter." },
    { year: "2025 – Expanding Horizons", content: "Opened a new Experience Centre in JP Nagar, Bengaluru and our first branch outside the city in Chennai." },

  ];


  const slides = [
    {
      year: '2019',
      title: ['New Experience', 'Center, Banaswadi'],
      description: 'The story began with the launch of our very first Experience Centre in Banaswadi.',
    },
    {
      year: '2020',
      title: ['Instahome'],
      description: 'Introduced Instahome, making interiors quicker and more accessible for modern homeowners.',
    },
    {
      year: '2021',
      title: ['Hub Store'],
      description: 'Expanded with the launch of the HUB Store, bringing curated products and solutions under one roof.',
    },
    {
      year: '2022',
      title: ['New Experience Centre', 'Sarjapur'],
      description: 'Opened our second Experience Centre in Sarjapur, strengthening our presence in Bengaluru.',
    },
    {
      year: '2023',
      title: ['Hubster ERP'],
      description: 'Launched Hubster, our in-house ERP system, streamlining processes and efficiency.',
    },
    {
      year: '2023',
      title: ['HUB for Business'],
      description: 'Extended our expertise with HUB for Business, catering to B2B clients and partnerships.',
    },
    {
      year: '2024',
      title: ['Fast Track Interiors'],
      description: 'Introduced 34 Days Fast Track Interiors, setting new benchmarks in speed and quality',
    },
    {
      year: '2024',
      title: ['Bigger Space, Bigger Team'],
      description: 'Moved from Banaswadi to a larger Experience Centre in HBR Layout, reflecting our growth.',
    },
    {
      year: '2025',
      title: ['Rebranding'],
      description: 'Transformed from Homes Under Budget into HUB Interior, marking a bold new chapter.',
    },
    {
      year: '2025',
      title: ['Expanding Horizons'],
      description: 'Opened a new Experience Centre in JP Nagar, Bengaluru and our first branch outside the city in Chennai.',
    },

  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };





  return (
    <div>
      {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
      <section className="aboutus-section5-3xl-container hidden">
        <div className="aboutus-section5-3xl-content">
          <div className="aboutus-section5-3xl-layout">
            {/* Header Section */}
            <div className="aboutus-section5-3xl-header">
              <h2 className="aboutus-section5-3xl-title manrope">
                Journey So Far
              </h2>
              <p className="aboutus-section5-3xl-subtitle manrope-medium">
                The Path We&#39;ve Paved!
              </p>
            </div>

            {/* Main Content */}
            <div className="aboutus-section5-3xl-main">
              {/* Left Side - Static Stats */}
              <div className="aboutus-section5-3xl-stats">
                <div className="aboutus-section5-3xl-stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="aboutus-section5-3xl-stat-item">
                      <p className="aboutus-section5-3xl-stat-value manrope">
                        {stat.value}
                      </p>
                      <p className="aboutus-section5-3xl-stat-label manrope-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Scrollable Timeline */}
              <div className="aboutus-section5-3xl-timeline">
                <div className="aboutus-section5-3xl-timeline-scroll">
                  <div className="aboutus-section5-3xl-timeline-content">
                    {timeline.map((item, index) => (
                      <div key={index} className="aboutus-section5-3xl-timeline-item">
                        <h3 className="aboutus-section5-3xl-timeline-year manrope">
                          {item.year}
                        </h3>
                        <p className="aboutus-section5-3xl-timeline-text manrope-medium">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2XL Screen - Large displays */}
      <div className='desktop-1440'>
      <section className="aboutus-section5-2xl-section hidden 2xl:block 3xl:hidden py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl manrope text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed manrope-medium">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Static Stats */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl  text-[#ef0101] leading-tight manrope">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-600 mt-2 leading-relaxed manrope-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full lg:w-1/2 h-[500px] p-8 rounded-xl relative">
              <div className="h-full overflow-y-scroll pr-4 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-8 min-h-[800px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#ef0101]">
                      <h3 className="text-xl manrope text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 manrope-medium text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* XL Screen - Extra large displays */}

      <div className='desktop-1280'>
      <section className="hidden xl:block 2xl:hidden py-20 px-12 bg-white ml-30">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl manrope text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-xl manrope-medium text-gray-600 leading-relaxed">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Static Stats */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl manrope text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-600 mt-2 leading-relaxed manrope-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full lg:w-1/2 h-[500px] p-8 rounded-xl relative">
              <div className="h-full overflow-y-scroll pr-4 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-8 min-h-[800px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#ef0101]">
                      <h3 className="text-xl manrope text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 leading-relaxed manrope-medium">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>


    

      {/* SM Screen - Small displays */}
      <section className="block md:hidden px-4">
        <div className="w-full max-w-[425px] mx-auto -mt-20">
          {/* Header Section */}


          <div className="flex flex-col justify-between h-[150px] ">


            <div className='flex items-center mt-30'>
              <div className='bg-[#ebd657] w-[3px] h-10'>
                <div className='mb-2.5 w-80'>
                  <h1 className='text-3xl manrope text-nowrap, ml-3'> Journey So far</h1>
                  <p className='manrope-medium text-md w-full leading-relaxed mt-3 ml-3'> The Path We&#39;ve Paved!
                  </p>

                </div>
              </div>
            </div>

          </div>


          {/* Main Content */}

          {/* Need to continue from carousel */}

          <div> 
            <div className="w-full max-w-2xl mx-auto mt-15">
              {/* Slide */}
              <div className="w-full h-60 bg-gray-50 p-4 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 ease-in-out">
                <div className="text-center max-w-md">
                  <h2 className="text-2xl manrope text-[#ef0101]">
                    {slides[current].year}
                    {slides[current].title.map((line, idx) => (
                      <div key={idx} className={`text-black ${idx === 0 ? 'mt-3' : 'mb-3'}`}>
                        {line}
                      </div>
                    ))}
                  </h2>
                  <p className="text-sm text-gray-500">{slides[current].description}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4 mt-5 justify-center">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-2xl text-gray-800 bg-white hover:bg-gray-100 active:opacity-70 transition duration-150"
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-2xl text-gray-800 bg-white hover:bg-gray-100 active:opacity-70 transition duration-150"
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>


            </div>




          </div>


        </div>
      </section>

      {/* Pure CSS for 3XL - 2560*1440 resolution */}
      <style jsx>{`
        /* Ensure only one 3xl section exists */
        .aboutus-section5-3xl-container {
          display: none !important;
        }
        
        /* Hide 2xl section when 3xl is active */
        @media (min-width: 2560px) {
          .aboutus-section5-2xl-section {
            display: none !important;
          }
        }
        
        @media (min-width: 2560px) {
          .aboutus-section5-3xl-container {
            display: block !important;
            width: auto;
            height: auto;
            margin: 2rem;
            padding: 5rem 6rem;
            background-color: white;
          }
          
          .aboutus-section5-3xl-content {
            max-width: 1200rem;
            margin: 0 auto;
          }
          
          .aboutus-section5-3xl-layout {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          
          .aboutus-section5-3xl-header {
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .aboutus-section5-3xl-title {
            font-size: 3.5rem;
            font-weight: bold;
            color: #111827;
            line-height: 1.2;
            margin-bottom: 0.5rem;
          }
          
          .aboutus-section5-3xl-subtitle {
            font-size: 1.5rem;
            color: #4b5563;
            line-height: 1.7;
          }
          
          .aboutus-section5-3xl-main {
            display: flex;
            gap: 3rem;
          }
          
          .aboutus-section5-3xl-stats {
            width: 50%;
            background-color: #f9fafb;
            padding: 2rem;
            border-radius: 1rem;
          }
          
          .aboutus-section5-3xl-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          
          .aboutus-section5-3xl-stat-item {
            background-color: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s;
          }
          
          .aboutus-section5-3xl-stat-item:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .aboutus-section5-3xl-stat-value {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ef0101;
            line-height: 1.2;
          }
          
          .aboutus-section5-3xl-stat-label {
            font-size: 1.125rem;
            color: #4b5563;
            margin-top: 0.5rem;
            line-height: 1.7;
          }
          
          .aboutus-section5-3xl-timeline {
            width: 50%;
            height: 600px;
            padding: 2rem;
            border-radius: 1rem;
            position: relative;
          }
          
          .aboutus-section5-3xl-timeline-scroll {
            height: 100%;
            overflow-y: scroll;
            padding-right: 1rem;
          }
          
          .aboutus-section5-3xl-timeline-content {
            space-y: 2rem;
            min-height: 1000px;
          }
          
          .aboutus-section5-3xl-timeline-item {
            position: relative;
            padding-left: 2rem;
            padding-bottom: 2rem;
            border-left: 2px solid #ef0101;
          }
          
          .aboutus-section5-3xl-timeline-year {
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            line-height: 1.2;
          }
          
          .aboutus-section5-3xl-timeline-text {
            margin-top: 0.5rem;
            font-size: 1.125rem;
            color: #4b5563;
            line-height: 1.7;
          }
        }
      `}</style>

      {/* Global scrollbar styling */}
      <style jsx global>{`
        .scrollbar::-webkit-scrollbar {
          width: 6px;
          background-color: #f5f5f5;
        }
        @media (min-width: 768px) {
          .scrollbar::-webkit-scrollbar {
            width: 8px;
          }
        }
        .scrollbar::-webkit-scrollbar-thumb {
          background-color: #ef0101;
          border-radius: 4px;
        }
        .scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #d00101;
        }
        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef0101 #f5f5f5;
        }
        .always-visible-scrollbar {
          overflow-y: scroll !important;
          scrollbar-gutter: stable;
        }
        .always-visible-scrollbar::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 6px;
          display: block !important;
        }
        @media (min-width: 768px) {
          .always-visible-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
        }
        .always-visible-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 4px;
          display: block !important;
        }
        .always-visible-scrollbar::-webkit-scrollbar-thumb {
          background: #ef0101;
          border-radius: 4px;
          min-height: 30px;
          display: block !important;
        }
        @media (min-width: 768px) {
          .always-visible-scrollbar::-webkit-scrollbar-thumb {
            min-height: 40px;
          }
        }
        .always-visible-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d00101;
        }
        .always-visible-scrollbar::-webkit-scrollbar-corner {
          background: #f5f5f5;
        }
        .always-visible-scrollbar {
          scrollbar-gutter: stable;
          overflow-y: scroll !important;
        }
        .scroll-container {
          overflow-y: scroll !important;
          scrollbar-width: thin;
          scrollbar-color: #ef0101 #f5f5f5;
        }
        .scroll-container::-webkit-scrollbar {
          width: 6px !important;
          display: block !important;
        }
        @media (min-width: 768px) {
          .scroll-container::-webkit-scrollbar {
            width: 8px !important;
          }
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #f5f5f5 !important;
          border-radius: 4px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #ef0101 !important;
          border-radius: 4px;
          min-height: 30px;
        }
        @media (min-width: 768px) {
          .scroll-container::-webkit-scrollbar-thumb {
            min-height: 40px;
          }
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #d00101 !important;
        }
      `}</style>


         <style jsx>{`
        /* Hide both sections by default on mobile */
        .desktop-1440,
        .desktop-1280 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }
          
      `}</style>



    </div>
  );
};

export default Section5;