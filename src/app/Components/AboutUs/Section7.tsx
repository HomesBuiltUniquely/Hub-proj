'use client';

import React from 'react';

const Section7 = () => {
  return (
    <div>
      {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
      <section className="aboutus-section7-3xl-container hidden">
        <div className="aboutus-section7-3xl-content">
          <div className="aboutus-section7-3xl-layout">
            {/* Left Side - Image Container */}
            <div className="aboutus-section7-3xl-image">
              <img src="/6.png" alt="Values Image" className=" h-[900px] rounded-2xl " />
            </div>

            {/* Right Side - Values Content */}
            <div className="aboutus-section7-3xl-values">
              {/* Values Header */}
              <div className="aboutus-section7-3xl-header">
                <h1 className="aboutus-section7-3xl-title">
                  Values
                </h1>
              </div>

              {/* Values Points */}
              <div className="aboutus-section7-3xl-points">
                {/* Value Point 1 */}
                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Integrity: Building trust through honesty, transparency, and respect in everything we do.
                    </div>
                  </div>
                </div>

                {/* Value Point 2 */}
                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Customer-Centric: Every decision starts with what brings happiness and comfort to our customers.
                    </div>
                  </div>
                </div>

                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Innovation: Blending creativity with modern techniques, smart solutions, and premium materials.

                    </div>
                  </div>
                </div>


                {/* Value Point 3 */}
                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Excellence: Designing homes that are timeless, functional, and crafted with precision.

                    </div>
                  </div>
                </div>

                {/* Value Point 4 */}
                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Teamwork: Empowering our Hubsters to collaborate, inspire, and deliver beyond expectations.
                    </div>
                  </div>
                </div>

                <div className="aboutus-section7-3xl-point">
                  <div className="aboutus-section7-3xl-divider"></div>
                  <div className="aboutus-section7-3xl-point-content">
                    <div className="aboutus-section7-3xl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="aboutus-section7-3xl-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="aboutus-section7-3xl-text">
                      Uniquely Built: Creating homes that are not just designed, but deeply connected to lifestyle, culture, and dreams.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2XL Screen - Large displays */}
      <section className="aboutus-section7-2xl-section hidden 2xl:block 3xl:hidden px-16 bg-white">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between gap-80">
            {/* Left Side - Image Container */}
            <div className="w-[700px] lg:w-[700px] h-[580px] mt-32 rounded-2xl ">
              {/* Image placeholder - can be replaced with actual image */}
              <img src="/6.png" alt="Values Image" className="w-full h-[580px] rounded-2xl" >
              </img>
            </div>

            {/* Right Side - Values Content */}
            <div className="w-full lg:w-auto lg:flex-1 mb-10">
              {/* Values Header */}
              <h1 className="text-6xl manrope-medium pt-20 pl-10 leading-tight">
                Values
              </h1>


              {/* Values Points */}
              <div className="">
                {/* Value Point 1 */}
                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Integrity: Building trust through honesty, transparency, and respect in everything we do.
                  </div>
                </div>

                {/* Value Point 2 */}
                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Customer-Centric: Every decision starts with what brings happiness and comfort to our customers.
                  </div>
                </div>

                {/* Value Point 3 */}
                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Innovation: Blending creativity with modern techniques, smart solutions, and premium materials.
                  </div>
                </div>

                {/* Value Point 4 */}
                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Excellence: Designing homes that are timeless, functional, and crafted with precision.
                  </div>
                </div>

                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Teamwork: Empowering our Hubsters to collaborate, inspire, and deliver beyond expectations.
                  </div>
                </div>

                <div className="w-[500px] h-0 border-t border-[#ddcdc1] mt-3 ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] rounded-xl bg-[#ddcdc1] mt-6 ml-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 pt-6 w-[450px] text-lg leading-relaxed">
                    Uniquely Built: Creating homes that are not just designed, but deeply connected to lifestyle, culture, and dreams.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XL Screen - Extra large displays */}
      <section className="hidden xl:block 2xl:hidden py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left Side - Image Container */}
            <div className="w-[600px] lg:w-[600px] h-[550px] mt-10  rounded-2xl">
              {/* Image placeholder - can be replaced with actual image */}
              <img src="/6.png" alt="Values Image" className="w-[600px] h-[550px]  ml-5" />
            </div>

            {/* Right Side - Values Content */}
            <div className="w-full lg:w-auto lg:flex-1 ml-56">
              {/* Values Header */}
              <h1 className="text-5xl manrope-medium  pl-10 leading-tight">
                Values
              </h1>

              {/* Values Description */}


              {/* Values Points */}
              <div className="space-y-5">
                {/* Value Point 1 */}
                <div className="w-[450px] h-0 border-t border-[#ddcdc1] mt-6 ml-4"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 w-[400px] text-base leading-relaxed">
                    Integrity: Building trust through honesty, transparency, and respect in everything we do.
                  </div>
                </div>

                {/* Value Point 2 */}
                <div className="w-[450px] h-0 border-t border-[#ddcdc1]  ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4  w-[400px] text-base leading-relaxed">
                    Customer-Centric: Every decision starts with what brings happiness and comfort to our customers.

                  </div>
                </div>

                {/* Value Point 3 */}
                <div className="w-[450px] h-0 border-t border-[#ddcdc1]  ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4 w-[400px] text-base leading-relaxed">
                    Innovation: Blending creativity with modern techniques, smart solutions, and premium materials.
                  </div>
                </div>

                {/* Value Point 4 */}
                <div className="w-[450px] h-0 border-t border-[#ddcdc1] ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4  w-[400px] text-base leading-relaxed">
                    Excellence: Designing homes that are timeless, functional, and crafted with precision.
                  </div>
                </div>
                <div className="w-[450px] h-0 border-t border-[#ddcdc1] ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4  w-[400px] text-base leading-relaxed">
                    Teamwork: Empowering our Hubsters to collaborate, inspire, and deliver beyond expectations.
                  </div>
                </div>
                <div className="w-[450px] h-0 border-t border-[#ddcdc1] ml-10"></div>
                <div className="flex items-start">
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#ddcdc1] ml-10 flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-4  w-[450px] text-base leading-relaxed">
                    Uniquely Built: Creating homes that are not just designed, but deeply connected to lifestyle, culture, and dreams.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LG Screen - Large displays */}
      <section className="hidden lg:block xl:hidden py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Side - Image Container */}
            <div className="w-full lg:w-[300px] h-[500px] bg-red-400 mt-16 ml-6 rounded-xl">
              {/* Image placeholder - can be replaced with actual image */}</div>

            {/* Right Side - Values Content */}
            <div className="w-full lg:w-auto lg:flex-1 mr-12 mb-16">
              {/* Values Header */}
              <h1 className="text-5xl manrope-medium pt-16 pl-8 leading-tight">
                Values
              </h1>

              {/* Values Description */}
              <p className="w-[300px] ml-8 manrope-medium pt-3 text-base leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </p>

              {/* Values Points */}
              <div className="space-y-8">
                {/* Value Point 1 */}
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

                {/* Value Point 2 */}
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

                {/* Value Point 3 */}
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

                {/* Value Point 4 */}
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
          </div>
        </div>
      </section>

      {/* MD Screen - Medium displays */}
      <section className="hidden md:block lg:hidden py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Left Side - Image Container */}
            <div className="w-full h-[400px] bg-red-400 mt-12 ml-4 rounded-lg">
              {/* Image placeholder - can be replaced with actual image */}
            </div>

            {/* Right Side - Values Content */}
            <div className="w-full mb-12">
              {/* Values Header */}
              <h1 className="text-4xl manrope-medium pt-12 pl-6 leading-tight">
                Values
              </h1>

              {/* Values Description */}
              <p className="w-[250px] ml-6 manrope-medium pt-2 text-sm leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </p>

              {/* Values Points */}
              <div className="space-y-6">
                {/* Value Point 1 */}
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

                {/* Value Point 2 */}
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

                {/* Value Point 3 */}
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

                {/* Value Point 4 */}
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
          </div>
        </div>
      </section>

      {/* SM Screen - Small displays */}
      <section className="block md:hidden py-105 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Left Side - Image Container */}


            {/* Right Side - Values Content */}
            <div className="w-full mb-8">
              {/* Values Header */}
              {/* <h1 className="text-3xl manrope-medium pt-8 pl-4 leading-tight">
                Values
              </h1> */}

              {/* Values Description */}
              {/* <p className="w-full ml-4 manrope-medium pt-2 text-xs leading-relaxed">
                At HUB Interiors, — it&#39;s about creating spaces that reflect you.
              </p> */}

              {/* Mobile Version Starts here */}



              
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div> */}
              <div className="space-y-4 ">

                <div className='flex items-center ml'>
                  <div className='bg-[#ebd657] w-[3px] h-10 mb-31'>
                    <div className='mb-2.5 w-80'>
                      <h1 className='text-3xl manrope text-nowrap, ml-3'>Values</h1>


                   {/* Values Points */}
              {/* Value Point 1 */}

                  <div className='bg-white h-95 rounded-3xl mt-8'>

                  <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center m">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Integrity: Building trust through honesty, transparency, and respect in everything we do.
                  </div>
                </div>



                {/* Value Point 2 */}
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>*/}
                <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Customer-Centric: Every decision starts with what brings happiness and comfort to our customers.
                  </div>
                </div>

                {/* Value Point 3 */}
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>*/}
                <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Innovation: Blending creativity with modern techniques, smart solutions, and premium materials.

                  </div>
                </div>

                {/* Value Point 4 */}
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>*/}
                <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Excellence: Designing homes that are timeless, functional, and crafted with precision.
                  </div>
                </div>



                {/* Value Point 5 */}
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>*/}
                <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Teamwork: Empowering our Hubsters to collaborate, inspire, and deliver beyond expectations.
                  </div>
                </div>



                {/* Value Point 6 */}
                {/* <div className="w-full h-0 border-t border-[#ddcdc1] mt-4 ml-4"></div>*/}
                <div className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] mt-3 ml-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="pl-2 pt-3 w-full text-xs leading-relaxed">
                    Uniquely Built: Creating homes that are not just designed, but deeply connected to lifestyle, culture, and dreams.
                  </div>
                </div>
</div>

                  <img src="6.png" alt="" className='mt-10'/>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pure CSS for 3XL - 2560*1440 resolution */}
      <style jsx>{`
        /* Ensure only one 3xl section exists */
        .aboutus-section7-3xl-container {
          display: none !important;
        }
        
        /* Hide 2xl section when 3xl is active */
        @media (min-width: 2560px) {
          .aboutus-section7-2xl-section {
            display: none !important;
          }
        }
        
        @media (min-width: 2560px) {
          .aboutus-section7-3xl-container {
            display: block !important;
            width: auto;
            height: auto;
            margin: 2rem;
            padding: 5rem 6rem;
            background-color: white;
          }
          
          .aboutus-section7-3xl-content {
            max-width: 1200rem;
            margin: 0 auto;
          }
          
          .aboutus-section7-3xl-layout {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 4rem;
            width: 100%;
          }
          
          .aboutus-section7-3xl-image {
            width: 700px;
            height: 800px;
           
            margin-top: 10rem;
            margin-left: 9rem;
            border-radius: 1rem;
          }
          
          .aboutus-section7-3xl-values {
            width: auto;
            flex: 1;
            margin-bottom: 2rem; 
          }
          
          .aboutus-section7-3xl-header {
            margin-bottom: 2rem;
          }
          
          .aboutus-section7-3xl-title {
            font-size: 4rem;
            font-weight: 500;
            color: #111827;
            line-height: 1.2;
            margin-bottom: 1rem;
            font-family: 'Manrope', sans-serif;
            padding-top: 0rem;
            padding-left: 750px;
            
          }
          
          .aboutus-section7-3xl-subtitle {
            font-size: 1.5rem;
            color: #4b5563;
            line-height: 1.7;
            font-family: 'Manrope', sans-serif;
            width: 1200px;
            padding-top: 0.75rem;
            padding-left: 600px;
          }
          
          .aboutus-section7-3xl-points {
           
          }
          
          .aboutus-section7-3xl-point {
            margin-bottom: 2.5rem;
            margin-left: 600px;
          }
          
          .aboutus-section7-3xl-divider {
            width: 550px;
            height: 0;
            border-top: 1px solid #ddcdc1;
            margin: 2.5rem 0 2.5rem 0;
          }
          
          .aboutus-section7-3xl-point-content {
            display: flex;
            
          }
          
          .aboutus-section7-3xl-icon {
            width: 50px;
            height: 50px;
            border-radius: 0.75rem;
            background-color: #ddcdc1;
            margin: 1.5rem 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .aboutus-section7-3xl-svg {
            width: 1.75rem;
            height: 1.75rem;
            color: #374151;
          }
          
          .aboutus-section7-3xl-text {
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

export default Section7;