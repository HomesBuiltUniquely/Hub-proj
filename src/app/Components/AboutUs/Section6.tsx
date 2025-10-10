'use client';

import React from 'react';

const Section6 = () => {
  return (
    <div>
      {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
      <section className="aboutus-section6-3xl-container hidden">
        <div className="aboutus-section6-3xl-content">
          <div className="aboutus-section6-3xl-layout">
            {/* Left Side - Mission Content */}
            <div className="aboutus-section6-3xl-text-content">
              {/* Mission Header */}
              <div className="aboutus-section6-3xl-header">
                <h1 className="aboutus-section6-3xl-title">
                  Mission
                </h1>
                <p className="aboutus-section6-3xl-subtitle">
                  At HUB Interiors, — it&#39;s about creating spaces that reflect you.
                </p>
              </div>

              {/* Mission Points */}
              <div className="aboutus-section6-3xl-points">
                To deliver high-quality and innovative interior solutions that go beyond design — creating spaces filled with comfort, trust, and timeless value. At HUB Interior, our mission is to make interiors stress-free, on-time, and truly personal by combining creativity, precision, and customer-first service at every step.
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="aboutus-section6-3xl-image-container">
              <img src="/5.png" alt="Mission Image" className="aboutus-section6-3xl-image"></img>
            </div>
          </div>
        </div>
      </section>

      {/* 2XL Screen - Large displays */}
      <section className="aboutus-section6-2xl-section hidden 2xl:block 3xl:hidden px-30 bg-[#f1f2f6] py-10">
        <div className='flex justify-between'>
          <div className="max-w-7xl">
            {/* Mission Header */}
            <h1 className="text-6xl manrope-medium pt-20 leading-tight">
              Mission
            </h1>

            {/* Mission Description */}
            <p className="w-[400px]  manrope-medium pt-3 text-xl leading-relaxed">
              At HUB Interiors, — it&#39;s about creating spaces that reflect you.
            </p>

            {/* Mission Points */}
            <div className="w-[400px]  manrope-medium pt-10 text-xl leading-relaxed">
              To deliver high-quality and innovative interior solutions that go beyond design — creating spaces filled with comfort, trust, and timeless value. At HUB Interior, our mission is to make interiors stress-free, on-time, and truly personal by combining creativity, precision, and customer-first service at every step.
            </div>
          </div>
          <img src="/5.png" className="w-[600px] h-[600px] rounded-2xl  ml-16"></img>
        </div>
      </section>

      {/* XL Screen - Extra large displays */}
      <section className="hidden xl:block 2xl:hidden py-10 bg-[#f1f2f6]">
        <div className="flex justify-evenly">
          <div className="max-w-6xl mt-12 mr-70">
            {/* Mission Header */}
            <h1 className="text-5xl manrope-medium leading-tight">
              Mission
            </h1>

            {/* Mission Description */}
            <p className="w-[350px]  manrope-medium pt-3 text-lg leading-relaxed">
              At HUB Interiors, — it&#39;s about creating spaces that reflect you.
            </p>

            {/* Mission Points */}
            <div className="w-[400px]  manrope-medium pt-10 text-lg leading-relaxed">
              To deliver high-quality and innovative interior solutions that go beyond design — creating spaces filled with comfort, trust, and timeless value. At HUB Interior, our mission is to make interiors stress-free, on-time, and truly personal by combining creativity, precision, and customer-first service at every step.
            </div>
          </div>
          <img src="/5.png" className="w-[500px] h-[500px] rounded-2xl"></img>
        </div>
      </section>

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Mission Header */}
          <h1 className="text-4xl manrope-medium pt-16 pl-8 leading-tight">
            Mission
          </h1>

          {/* Mission Description */}
          <p className="w-[300px] ml-8 manrope-medium pt-3 text-base leading-relaxed">
            At HUB Interiors, — it&#39;s about creating spaces that reflect you.
          </p>

          {/* Mission Points */}
          <div className="space-y-8">
            {/* Mission Point 1 */}
            <div className="w-[400px] h-0 border-t border-[#ddcdc1] mt-8 ml-8"></div>
            <div className="flex items-start">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#ddcdc1] mt-5 ml-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-5 w-[350px] text-sm leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 2 */}
            <div className="w-[400px] h-0 border-t border-[#ddcdc1] mt-8 ml-8"></div>
            <div className="flex items-start">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#ddcdc1] mt-5 ml-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-5 w-[350px] text-sm leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 3 */}
            <div className="w-[400px] h-0 border-t border-[#ddcdc1] mt-8 ml-8"></div>
            <div className="flex items-start">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#ddcdc1] mt-5 ml-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-5 w-[350px] text-sm leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 4 */}
            <div className="w-[400px] h-0 border-t border-[#ddcdc1] mt-8 ml-8"></div>
            <div className="flex items-start">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#ddcdc1] mt-5 ml-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-5 w-[350px] text-sm leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Mission Header */}
          <h1 className="text-3xl manrope-medium pt-12 pl-6 leading-tight">
            Mission
          </h1>

          {/* Mission Description */}
          <p className="w-[250px] ml-6 manrope-medium pt-2 text-sm leading-relaxed">
            At HUB Interiors, — it&#39;s about creating spaces that reflect you.
          </p>

          {/* Mission Points */}
          <div className="space-y-6">
            {/* Mission Point 1 */}
            <div className="w-[350px] h-0 border-t border-[#ddcdc1] mt-6 ml-6"></div>
            <div className="flex items-start">
              <div className="w-[40px] h-[40px] rounded-lg bg-[#ddcdc1] mt-4 ml-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-4 w-[300px] text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 2 */}
            <div className="w-[350px] h-0 border-t border-[#ddcdc1] mt-6 ml-6"></div>
            <div className="flex items-start">
              <div className="w-[40px] h-[40px] rounded-lg bg-[#ddcdc1] mt-4 ml-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-4 w-[300px] text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 3 */}
            <div className="w-[350px] h-0 border-t border-[#ddcdc1] mt-6 ml-6"></div>
            <div className="flex items-start">
              <div className="w-[40px] h-[40px] rounded-lg bg-[#ddcdc1] mt-4 ml-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-4 w-[300px] text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>

            {/* Mission Point 4 */}
            <div className="w-[350px] h-0 border-t border-[#ddcdc1] mt-6 ml-6"></div>
            <div className="flex items-start">
              <div className="w-[40px] h-[40px] rounded-lg bg-[#ddcdc1] mt-4 ml-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-3 pt-4 w-[300px] text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SM Screen - Small displays */}
      <section className="block md:hidden">


        <div className="w-full max-w-[425px] mx-auto px-4">
          <div className="flex flex-col justify-between min-h-[150px]">
            <div className="flex items-start mt-10">
              {/* Vertical bar */}
              <div className="bg-[#ebd657] w-[20px] h-10 mr-3"></div>

              {/* Content */}
              <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-semibold manrope whitespace-nowrap">Mission</h1>

                <p className="text-md manrope-medium">
                  At HUB Interiors — it’s about creating spaces that reflect you.
                </p>

                <p className="text-md manrope-medium">
                  To deliver high-quality and innovative interior solutions that go beyond design — creating spaces filled with comfort, trust, and timeless value. At HUB Interior, our mission is to make interiors stress-free, on-time, and truly personal by combining creativity, precision, and customer-first service at every step.
                </p>

                <img
                  src="5.png"  alt="Interior Design"  className="rounded-3xl w-full max-w-full mt-4"/>
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-sm mx-auto">
          {/* Mission Header */}


          {/* Mission Points */}
          {/* <div className="space-y-4"> */}
          {/* Mission Point 1 */}
          {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>
            <div className="flex items-start">
              <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div> */}

          {/* Mission Point 2 */}
          {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>
            <div className="flex items-start">
              <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div> */}

          {/* Mission Point 3 */}
          {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>
            <div className="flex items-start">
              <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div> */}

          {/* Mission Point 4 */}
          {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>
            <div className="flex items-start">
              <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>


      {/* Pure CSS for 3XL - 2560*1440 resolution */}
      <style jsx>{`
        /* Ensure only one 3xl section exists */
        .aboutus-section6-3xl-container {
          display: none !important;
        }
        
        /* Hide 2xl section when 3xl is active */
        @media (min-width: 2560px) {
          .aboutus-section6-2xl-section {
            display: none !important;
          }
        }
        
        @media (min-width: 2560px) {
          .aboutus-section6-3xl-container {
            display: block !important;
            width: auto;
            height: auto;
            margin: 2rem;
            padding: 5rem 6rem;
            background-color: #f1f2f6;
          }
          
          .aboutus-section6-3xl-content {
            max-width: 1200rem;
            margin: 0 auto;
          }
          
          .aboutus-section6-3xl-layout {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 4rem;
            width: 100%;
          }
          
          .aboutus-section6-3xl-text-content {
            flex: 1;
            max-width: 60%;
            margin-left: 10rem;
            margin-top: 3rem;
          }
          
          .aboutus-section6-3xl-image-container {
            flex: 1;
            max-width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .aboutus-section6-3xl-image {
            width: 100%;
            max-width: 600px;
            height: 600px;
            object-fit: cover;
            border-radius: 1rem;
            margin-right: 10rem;
          }
          
          .aboutus-section6-3xl-header {
            margin-bottom: 2rem;
          }
          
          .aboutus-section6-3xl-title {
            font-size: 4rem;
            font-weight: 500;
            color: #111827;
            line-height: 1.2;
            margin-bottom: 1rem;
            font-family: 'Manrope', sans-serif;
          }
          
          .aboutus-section6-3xl-subtitle {
            font-size: 1.5rem;
            color: #4b5563;
            line-height: 1.7;
            font-family: 'Manrope', sans-serif;
            width: 450px;
          }
          
          .aboutus-section6-3xl-points {
            space-y: 1rem;
            width: 600px;
            font-size: 1.4rem;
            line-height: 1.7;
            color: #4b5563;
            font-family: 'Manrope-medium', sans-serif;
            padding-right: 10rem;
          }
          
          .aboutus-section6-3xl-point {
            margin-bottom: 2.5rem;
          }
          
          .aboutus-section6-3xl-divider {
            width: 550px;
            height: 0;
            border-top: 1px solid #ddcdc1;
            margin: 2.5rem 0 2.5rem 0;
          }
          
          .aboutus-section6-3xl-point-content {
            display: flex;
            align-items: flex-start;
          }
          
          .aboutus-section6-3xl-icon {
            width: 50px;
            height: 50px;
            border-radius: 0.75rem;
            background-color: #ddcdc1;
            margin: 1.5rem 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .aboutus-section6-3xl-svg {
            width: 1.75rem;
            height: 1.75rem;
            color: #374151;
          }
          
          .aboutus-section6-3xl-text {
            padding-left: 1.5rem;
            padding-top: 1.5rem;
            width: 500px;
            font-size: 1.125rem;
            line-height: 1.7;
            color: #4b5563;
          }
        }
      `}</style>
    </div>
  );
};

export default Section6;