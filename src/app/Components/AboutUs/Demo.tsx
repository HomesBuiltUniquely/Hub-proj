'use client';

import React, { useState } from 'react';

const Carousel = () => {
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


  const Carousel = () => {
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
              <h2 className="aboutus-section5-3xl-title">
                Journey So Far
              </h2>
              <p className="aboutus-section5-3xl-subtitle">
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
                      <p className="aboutus-section5-3xl-stat-value">
                        {stat.value}
                      </p>
                      <p className="aboutus-section5-3xl-stat-label">
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
                        <h3 className="aboutus-section5-3xl-timeline-year">
                          {item.year}
                        </h3>
                        <p className="aboutus-section5-3xl-timeline-text">
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
      <section className="aboutus-section5-2xl-section hidden 2xl:block 3xl:hidden py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
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
                    <p className="text-3xl font-bold text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-600 mt-2 leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 leading-relaxed">
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

      {/* XL Screen - Extra large displays */}
      <section className="hidden xl:block 2xl:hidden py-20 px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
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
                    <p className="text-3xl font-bold text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-600 mt-2 leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 leading-relaxed">
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

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Static Stats */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full lg:w-1/2 h-[450px] p-6 rounded-lg relative">
              <div className="h-full overflow-y-scroll pr-3 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-6 min-h-[750px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-[#ef0101]">
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-6">
            {/* Left Side - Static Stats */}
            <div className="w-full bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-xl font-bold text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full h-[400px] p-6 rounded-lg relative">
              <div className="h-full overflow-y-scroll pr-3 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-6 min-h-[700px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-[#ef0101]">
                      <h3 className="text-base font-semibold text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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

      



 {/* SM Screen - Small displays */}
      <section className="block md:hidden py px-4 ">
        <div className="max-w-sm mx-auto">
          {/* Header Section */}


          <div className="flex flex-col justify-between h-[150px] ">


            <div className='flex items-center ml'>
              <div className='bg-[#ebd657] w-[3px] h-10 mb-31'>
                <div className='mb-2.5 w-80'>
                  <h1 className='text-3xl manrope text-nowrap, ml-3'> Journey So far</h1>
                  <p className='manrope-medium text-2xl w-full leading-relaxed mt-4'> The Path We've Paved!
                  </p>

                </div>
              </div>
            </div>

          </div>


          {/* Main Content */}

          {/* Need to continue from carousel */}

          <div className="w-full max-w-2xl mx-auto">
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
      <div className="flex space-x-4 mt-10 justify-center">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-2xl text-gray-800 hover:bg-gray-200 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-2xl text-gray-800 hover:bg-gray-200 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>


        


          {/* 
          <div className='w-[full] h-[240px] rounded-xl bg-white shadow-lg '>

            <div className="w-full h-[350px] rounded-lg relative">
              <div className="h-full overflow-y-scroll pr-2 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-4 min-h-[600px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-4 pb-4 border-l-2 border-[#ef0101]">
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div> */}


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

       

    </div>

  
  );
};
}
export default Carousel;


// Homesection starts 


 {/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden 3xl:hidden">
                <div className="w-auto h-auto m-6">
                    <div className="relative w-full h-full">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen object-cover" />
                        <div className="absolute inset-0 bg-opacity-40"></div>

                        {/* Get Free Estimate Button - LG optimized */}
                        <div className="absolute top-4 right-6 z-30">
                            <button className="manrope-medium text-base px-6 py-2.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-md ">Get Free Estimate</button>
                        </div>

                        {/* Header - LG optimized */}
                        <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between">
                            <Image
                                src="/redlogo.png"
                                alt="LOGO"
                                width={140}
                                height={70}
                                className="w-[140px] h-[70px]"
                            />

                            {/* Navigation - LG optimized */}
                            <nav className="text-white text-lg manrope space-x-6 mx-auto">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>

                        {/* Main Content - LG optimized */}
                        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-white">
                            <div className="text-4xl manrope-medium leading-tight">hpmes,</div>
                            <div className="text-5xl wulkan-display my-3 leading-tight">uniquely</div>
                            <div className="text-4xl manrope-medium leading-tight">built</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden 3xl:hidden">
                <div className="w-auto h-auto m-4">
                    <div className="relative w-full h-full">
                        <img src="/Mask-group.png" alt="Background" className="w-full h-screen object-cover" />
                        <div className="absolute inset-0 bg-opacity-40"></div>

                        {/* Get Free Estimate Button - MD optimized */}
                        <div className="absolute top-3 right-4 z-30">
                            <button className="manrope-medium text-sm px-4 py-1.5 bg-[#ddcdc1] rounded-full hover:bg-[#ef0101] hover:text-white transition-colors shadow-md">Get Free Estimate</button>
                        </div>

                        {/* Header - MD optimized */}
                        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between">
                            <Image
                                src="/redlogo.png"
                                alt="LOGO"
                                width={100}
                                height={50}
                                className="w-[100px] h-[50px]"
                            />

                            {/* Navigation - MD optimized */}
                            <nav className="text-white text-base manrope space-x-4 mx-auto">
                                <Link href="/" className="hover:text-amber-300 transition-colors">HOME</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">SERVICE</Link>
                                <Link href="/Services" className="hover:text-amber-300 transition-colors">EXPLORE ROOMS</Link>
                            </nav>
                        </div>

                        {/* Main Content - MD optimized */}
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white">
                            <div className="text-3xl manrope-medium leading-tight">homes</div>
                            <div className="text-4xl wulkan-display my-2 leading-tight">uniquely</div>
                            <div className="text-3xl manrope-medium leading-tight">built</div>
                        </div>
                    </div>
                </div>
            </div>


// Homesection ends 



      

// Section 2 starts
// *********************************



 {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section2-3xl-container hidden">
                <div className="aboutus-section2-3xl-layout">

                    {/* Left Text Box - 3XL optimized */}
                    <div className="aboutus-section2-3xl-textbox manrope-medium">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.                    </div>
                    {/* Center Image Box - 3XL optimized */}
                    <div className="aboutus-section2-3xl-center-image">
                        <img
                            src="/1.png"
                            className="aboutus-section2-3xl-image"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - 3XL optimized */}
                    <div className="aboutus-section2-3xl-right-images">
                        {/* Top Image */}
                        <div className="aboutus-section2-3xl-top-image">
                            <img
                                src="/ab.jpg"
                                className="aboutus-section2-3xl-image"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="aboutus-section2-3xl-bottom-image">
                            <img
                                src="/3.png"
                                className="aboutus-section2-3xl-image"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>


   


   {/* 2XL Screen - Large displays */}
            <div className="aboutus-section2-2xl-section hidden 2xl:block 3xl:hidden">
                <div className="h-[600px] flex flex-row px-16  gap-12 ">

                    {/* Left Text Box - 2XL optimized */}
                    <div className="w-[600px] h-[525px] bg-[#ebd457] rounded-2xl p-16 pt-30 text-xl manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    {/* Center Image Box - 2XL optimized */}
                    <div className="w-[600px] h-[525px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="/1.png"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - 2XL optimized */}
                    <div className="flex flex-col gap-8">
                        {/* Top Image */}
                        <div className="w-[350px] h-[150px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="/ab.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="w-[350px] h-[345px] bg-red-400 rounded-2xl overflow-hidden">
                            <img
                                src="/3.png"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* XL Screen - Extra large displays */}
            <div className="hidden xl:block 2xl:hidden">
                <div className="h-[600px] flex flex-row px-12  gap-10 mt-6">

                    {/* Left Text Box - XL optimized */}
                    <div className="w-[450px] h-[470px] bg-[#ebd457] rounded-2xl p-12 pt-32 text-[20px] manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    {/* Center Image Box - XL optimized */}
                    <div className="w-[450px] h-[450px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="/1.png"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - XL optimized */}
                    <div className="flex flex-col gap-8">
                        {/* Top Image */}
                        <div className="w-[250px] h-[130px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="/ab.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="w-[250px] h-[300px] bg-red-400 rounded-2xl overflow-hidden">
                            <img
                                src="/3.png"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden">
                <div className="h-[500px] flex flex-row px-8 gap-8 mt-8">

                    {/* Left Text Box - LG optimized */}
                    <div className="w-[400px] h-[400px] bg-[#ebd457] rounded-2xl p-10 pt-24 text-sm manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    {/* Center Image Box - LG optimized */}
                    <div className="w-[400px] h-[400px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="/bed1.jpg"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - LG optimized */}
                    <div className="flex flex-col gap-6">
                        {/* Top Image */}
                        <div className="w-[220px] h-[120px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="/ab.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="w-[220px] h-[250px] bg-red-400 rounded-2xl overflow-hidden">
                            <img
                                src="/j4.webp"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>


// Section 2 ends
// *********************************

  {/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden">
                <div className="h-[500px] flex flex-row px-8 gap-8 mt-8">

                    {/* Left Text Box - LG optimized */}
                    <div className="w-[400px] h-[400px] bg-[#ebd457] rounded-2xl p-10 pt-24 text-sm manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    {/* Center Image Box - LG optimized */}
                    <div className="w-[400px] h-[400px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="/bed1.jpg"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - LG optimized */}
                    <div className="flex flex-col gap-6">
                        {/* Top Image */}
                        <div className="w-[220px] h-[120px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="/ab.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="w-[220px] h-[250px] bg-red-400 rounded-2xl overflow-hidden">
                            <img
                                src="/j4.webp"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden">
                <div className="h-auto min-h-[400px] flex flex-col px-6 gap-6 mt-8">

                    {/* Left Text Box - MD optimized */}
                    <div className="w-full h-[300px] bg-[#ebd457] rounded-2xl p-8 pt-20 text-sm manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    {/* Center Image Box - MD optimized */}
                    <div className="w-full h-[300px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="bed1.jpg"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    {/* Right Side Images - MD optimized */}
                    <div className="flex flex-row gap-4">
                        {/* Top Image */}
                        <div className="w-1/2 h-[150px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="bn.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="w-1/2 h-[150px] bg-red-400 rounded-2xl overflow-hidden">
                            <img
                                src="j4.webp"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
                    </div>

                </div>
            </div>

// Section 3 starts
// *********************************

{/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden">
                <div className="h-[450px] mx-auto px-8">
                    
                    <div className="w-[1000px] h-[400px] bg-[#ddcdc1] mx-auto rounded-3xl flex flex-row overflow-hidden">
                        
                        {/* Left Image - LG optimized */}
                        <img 
                            src="j2.webp" 
                            alt="Interior Design" 
                            className="w-[400px] h-auto min-h-[350px] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none object-cover" 
                        />
                        
                        {/* Center Content - LG optimized */}
                        <div className="w-[350px] p-10 lg:mt-0 lg:ml-6 flex flex-col justify-center">
                            
                            {/* Main Heading - LG optimized */}
                            <div className="manrope-medium text-3xl w-full leading-tight mb-8">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - LG optimized */}
                            <div className="manrope-medium text-base w-full leading-relaxed">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - LG optimized */}
                        <div className="text-[#ef0101] text-base lg:ml-auto lg:mr-4 lg:pt-4 px-6 lg:px-0 pb-4 lg:pb-0 text-center lg:text-left">
                            Brand Hub
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden">
                <div className="h-[400px] mx-auto px-6">
                    
                    <div className="w-full h-[350px] bg-[#ddcdc1] mx-auto rounded-3xl flex flex-row overflow-hidden">
                        
                        {/* Left Image - MD optimized */}
                        <img 
                            src="j2.webp" 
                            alt="Interior Design" 
                            className="w-[300px] h-auto min-h-[300px] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none object-cover" 
                        />
                        
                        {/* Center Content - MD optimized */}
                        <div className="w-[250px] p-8 lg:mt-0 lg:ml-4 flex flex-col justify-center">
                            
                            {/* Main Heading - MD optimized */}
                            <div className="manrope-medium text-2xl w-full leading-tight mb-6">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - MD optimized */}
                            <div className="manrope-medium text-sm w-full leading-relaxed">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - MD optimized */}
                        <div className="text-[#ef0101] text-sm lg:ml-auto lg:mr-3 lg:pt-3 px-6 lg:px-0 pb-3 lg:pb-0 text-center lg:text-left">
                            Brand Hub
                        </div>
                        
                    </div>
                    
                </div>
            </div>



 {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section3-3xl-container hidden">
                <div className="aboutus-section3-3xl-layout">
                    
                    <div className="aboutus-section3-3xl-main-content">
                        
                        {/* Left Image - 3XL optimized */}
                        <img 
                            src="2.png" 
                            alt="Interior Design" 
                            className="aboutus-section3-3xl-left-image" 
                        />
                        
                        {/* Center Content - 3XL optimized */}
                        <div className="aboutus-section3-3xl-center-content">
                            
                            {/* Main Heading - 3XL optimized */}
                            <div className="aboutus-section3-3xl-heading manrope-medium">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - 3XL optimized */}
                            <div className="aboutus-section3-3xl-description manrope-medium">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - 3XL optimized */}
                        <div className="aboutus-section3-3xl-brand-text manrope-medium">
                            Brand Hub
                        </div>
                        
                    </div>
                    
                </div>
            </div>

// Section 3 ends
// *********************************





// Section 4 starts
// *********************************
 {/* XL Screen - Extra large displays */}
            <div className="hidden xl:block 2xl:hidden">
                <div className="h-[600px] px-12 mt-10">
                    
                    {/* Header Section - XL optimized */}
                    <div className="flex flex-row justify-between  h-[300px] gap-10">
                        
                        {/* Heading - XL optimized */}
                        <h1 className="text-5xl manrope mt-20 ml-16 leading-tight">
                        Brand Eco System
                        </h1>
                        
                        {/* Description - XL optimized */}
                        <p className="w-[600px] mt-14 mr-12  manrope-medium text-2xl leading-relaxed">
                        The Brand Eco System is the strength behind HUB Interior. From Homes Under Budget to Hubsolute, Affices, and Home & Marry, every brand is crafted with focus and direction, shaping a legacy of design and innovation.

                        </p>
                        
                    </div>
                    
                    {/* Cards Section - XL optimized */}
                    <div className="flex flex-wrap justify-start gap-8 ml-10">
                        
                        {/* Card 1 */}
                        <div className="w-[250px] h-[250px] rounded-4xl bg-white  hover:shadow-xl transition-shadow duration-300">
                        <img src="/b1.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[200px] h-[100px] mt-20 ml-5" />
                        </div>
                        
                        {/* Card 2 */}
                        <div className="w-[250px] h-[250px] rounded-4xl bg-white  hover:shadow-xl transition-shadow duration-300">
                        <img src="/b2.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[200px] h-[100px] mt-20 ml-5" />
                        </div>
                        
                        {/* Card 3 */}
                        <div className="w-[250px] h-[250px] rounded-4xl bg-white  hover:shadow-xl transition-shadow duration-300">
                        <img src="/b3.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[200px] h-[100px] mt-20 ml-5" />
                        </div>
                        
                        {/* Card 4 */}
                        <div className="w-[250px] h-[250px] rounded-4xl bg-white  hover:shadow-xl transition-shadow duration-300">
                        <img src="/b4.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[200px] h-[100px] mt-20 ml-5" />
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* LG Screen - Large displays */}
            <div className="hidden lg:block xl:hidden">
                <div className="h-[600px] px-8">
                    
                    {/* Header Section - LG optimized */}
                    <div className="flex flex-row justify-between h-[250px] gap-8">
                        
                        {/* Heading - LG optimized */}
                        <h1 className="text-4xl manrope-medium mt-16 ml-20 leading-tight">
                        Brand Eco System
                        </h1>
                        
                        {/* Description - LG optimized */}
                        <p className="w-[400px] mt-12 mr-8 manrope-medium text-xl leading-relaxed">
                        The Brand Eco System is the strength behind HUB Interior. From Homes Under Budget to Hubsolute, Affices, and Home & Marry, every brand is crafted with focus and direction, shaping a legacy of design and innovation.

                        </p>
                        
                    </div>
                    
                    {/* Cards Section - LG optimized */}
                    <div className="flex flex-wrap justify-start gap-6 ml-16">
                        
                        {/* Card 1 */}
                        <div className="w-[220px] h-[220px] rounded-3xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 2 */}
                        <div className="w-[220px] h-[220px] rounded-3xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 3 */}
                        <div className="w-[220px] h-[220px] rounded-3xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 4 */}
                        <div className="w-[220px] h-[220px] rounded-3xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                    </div>
                    
                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden">
                <div className="h-[500px] px-6">
                    
                    {/* Header Section - MD optimized */}
                    <div className="flex flex-col justify-between h-[200px] gap-6">
                        
                        {/* Heading - MD optimized */}
                        <h1 className="text-3xl manrope-medium mt-12 ml-12 leading-tight">
                        Brand Eco System
                        </h1>
                        
                        {/* Description - MD optimized */}
                        <p className="w-[300px] mt-8 ml-12 manrope-medium text-lg leading-relaxed">
                        The Brand Eco System is the strength behind HUB Interior. From Homes Under Budget to Hubsolute, Affices, and Home & Marry, every brand is crafted with focus and direction, shaping a legacy of design and innovation.

                        </p>
                        
                    </div>
                    
                    {/* Cards Section - MD optimized */}
                    <div className="flex flex-wrap justify-start gap-4 ml-12">
                        
                        {/* Card 1 */}
                        <div className="w-[180px] h-[180px] rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 2 */}
                        <div className="w-[180px] h-[180px] rounded-2xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 3 */}
                        <div className="w-[180px] h-[180px] rounded-2xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                        {/* Card 4 */}
                        <div className="w-[180px] h-[180px] rounded-2xl bg-white  hover:shadow-xl transition-shadow duration-300"></div>
                        
                    </div>
                    
                </div>
            </div>



            {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section4-3xl-container hidden">
                <div className="aboutus-section4-3xl-layout">

                    {/* Header Section - 3XL optimized */}
                    <div className="aboutus-section4-3xl-header">

                        {/* Heading - 3XL optimized */}
                        <h1 className="aboutus-section4-3xl-heading manrope">
                            Brand Eco System
                        </h1>

                        {/* Description - 3XL optimized */}
                        <p className="aboutus-section4-3xl-description manrope-medium">
                            The Brand Eco System is the strength behind HUB Interior. From Homes Under Budget to Hubsolute, Affices, and Home & Marry, every brand is crafted with focus and direction, shaping a legacy of design and innovation.

                        </p>

                    </div>

                    {/* Cards Section - 3XL optimized */}
                    <div className="aboutus-section4-3xl-cards">

                        {/* Card 1 */}
                        <div className="aboutus-section4-3xl-card">
                            <img src="/" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[300px] h-[150px] mt-30 ml-9" />
                        </div>

                        {/* Card 2 */}
                        <div className="aboutus-section4-3xl-card">

                            <img src="/b2.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[300px] h-[150px] mt-30 ml-9" />
                        </div>

                        {/* Card 3 */}
                        <div className="aboutus-section4-3xl-card">
                            <img src="/b3.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[300px] h-[150px] mt-30 ml-9" />
                        </div>

                        {/* Card 4 */}
                        <div className="aboutus-section4-3xl-card">
                            <img src="/b4.png" alt="Homes Under Budget" className="aboutus-section4-3xl-card-image w-[300px] h-[150px] mt-30 ml-9" />
                        </div>

                    </div>

                </div>
            </div>





 {/* SM Screen - Small displays and mobile */}


            <div className="h-[400px] px-4 mt-140 mb-20 block md:hidden">

                {/* Header Section - SM optimized */}


                <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="bg-[#ebd657] w-[15px] h-19"></div>
                        <div>
                            <h1 className="text-3xl manrope">Brand Eco <div>System</div></h1>
                            <p className="text-base font-medium manrope-medium mt-5">
                                The Brand Eco System is the strength behind HUB Interior. From Homes Under Budget to Hubsolute, offices, and Home & Marry, every brand is crafted with focus and direction, shaping a legacy of design and innovation.
                            </p>
                        </div>
                    </div>
                </div>



                {/* Cards Section - SM optimized */}
                <div className="flex flex-wrap justify-start gap-3 mt-10">

                    {/* Card 1 */}
                    <div className="w-[full] h-[240px] mx-auto rounded-xl bg-white shadow-lg ">
                        <div className="grid grid-cols-2 gap-4 m-8">

                            <img src="/b3.png" alt="" className="w-[150px] h-[80px]   rounded-2xl" />

                            <img src="/b2.png" alt="" className="w-[150px] h-[80px]   rounded-2xl" />


                            <img src="/b1.png" alt="" className="w-[150px] h-[80px]   rounded-2xl " />


                            <img src="/b4.png" alt="" className="w-[150px] h-[80px]  rounded-2xl  " />

                        </div>
                    </div>




                </div>

            </div>





          



            'use client';

export default function Section4() {
    return (
        <div>







// Section 4 ends
// ********************************* 



// Section 5 starts
// *********************************

  {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl manrope text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed manrope-medium">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Static Stats */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-[#ef0101] leading-tight manrope">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed manrope-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full lg:w-1/2 h-[450px] p-6 rounded-lg relative">
              <div className="h-full overflow-y-scroll pr-3 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-6 min-h-[750px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-[#ef0101]">
                      <h3 className="text-lg manrope text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed manrope-medium">
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

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl manrope text-gray-900 mb-2 leading-tight">
              Journey So Far
            </h2>
            <p className="text-base text-gray-600 leading-relaxed manrope-medium">
              The Path We&#39;ve Paved!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-6">
            {/* Left Side - Static Stats */}
            <div className="w-full bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-xl manrope text-[#ef0101] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed manrope-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="w-full h-[400px] p-6 rounded-lg relative">
              <div className="h-full overflow-y-scroll pr-3 scrollbar scroll-container always-visible-scrollbar">
                <div className="space-y-6 min-h-[700px]">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-[#ef0101]">
                      <h3 className="text-base manrope text-gray-900 leading-tight">
                        {item.year}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed manrope-medium">
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



// Section 5 ends
// ****

