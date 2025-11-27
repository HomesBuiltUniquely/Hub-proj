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
                <h1 className="aboutus-section7-3xl-title wulkan-display-bold">
                  Values
                </h1>
              </div>

              {/* Values Points */}
              <div className="aboutus-section7-3xl-points manrope-medium">
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

      

      {/* 2XL Screen - Extra large displays */}
      <section className="desktop-1440 hidden xl:block 2xl:hidden py-10 px-6 bg-white ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left Side - Image Container */}
            <img src="/6.png" className="w-[500px] h-[500px] rounded-2xl  mt-25"></img>

            {/* Right Side - Values Content */}
            <div className="w-full lg:w-auto lg:flex-1 ml-56">
              {/* Values Header */}
              <h1 className="text-5xl wulkan-display-bold  pl-10 leading-tight">
                Values
              </h1>

              {/* Values Description */}


              {/* Values Points */}
              <div className="space-y-5 manrope-medium">
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






    {/* XL Screen - Large displays */}
      <section className="desktop-1280 2xl-section hidden 2xl:block 3xl:hidden px-16 bg-white">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between gap-80">
            {/* Left Side - Image Container */}
             <img src="/6.png" className="w-[500px] h-[500px] rounded-2xl mt-55"></img>

            {/* Right Side - Values Content */}
            <div className="w-full lg:w-auto lg:flex-1 mb-10">
              {/* Values Header */}
              <h1 className="text-6xl wulkan-display-bold pt-20 -ml-40 leading-tight">
                Values
              </h1>


              {/* Values Points */}
              <div className="manrope-medium -ml-50">
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









     
      {/* SM Screen - Small displays */}


      <div className="px-4 py-6 block xl:hidden mt-5">
        <div className="flex items-start">
          {/* Left Border Line */}


          {/* Content */}
          <div className="w-full max-w-full">
            <div className='bg-[#ebd657] w-[3px] h-10 mb-8'>
              <h1 className="text-3xl  wulkan-display-bold mb-4 whitespace-nowrap ml-3">Values</h1>
            </div>
            <div className="bg-white rounded-3xl p-4 space-y-4 mt-5 manrope-medium">
              {/* Value Item */}
              {[
                "Integrity: Building trust through honesty, transparency, and respect in everything we do.",
                "Customer-Centric: Every decision starts with what brings happiness and comfort to our customers.",
                "Innovation: Blending creativity with modern techniques, smart solutions, and premium materials.",
                "Excellence: Designing homes that are timeless, functional, and crafted with precision.",
                "Teamwork: Empowering our Hubsters to collaborate, inspire, and deliver beyond expectations.",
                "Uniquely Built: Creating homes that are not just designed, but deeply connected to lifestyle, culture, and dreams."
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-[35px] h-[35px] rounded-lg bg-[#ddcdc1] flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 bold text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="pl-3 text-xs leading-relaxed w-full">{text}</p>

                </div>
                
              ))}
              
            </div>
               <img
                  src="6.png"  alt="Interior Design"  className="rounded-3xl w-full max-w-full mt-10"/>

          </div>
        </div>
      </div>


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

        
         {/* ✅ Global media query to conditionally show/hide sections */}
            <style jsx global>{`
                .desktop-1440,
                .desktop-1280 {
                    display: none;
                }

                @media (min-width: 768px) and (max-width: 1439px) {
                    .desktop-1280 {
                        display: block;
                    }
                }

                @media (min-width: 1440px) {
                    .desktop-1440 {
                        display: block;
                    }
                }
            `}</style>

    </div>
  );
};

export default Section7;