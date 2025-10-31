'use client';

export default function Section1() {
    return (
        <div>
            {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section1-3xl-container hidden">
                <div className="aboutus-section1-3xl-flex">

                    {/* Heading - 3XL optimized */}
                    <h1 className="aboutus-section1-3xl-heading manrope">
                        About Us
                    </h1>

                    {/* Description - 3XL optimized */}
                    <p className="aboutus-section1-3xl-description text-center manrope-medium">
                        Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.
                        No templates. No compromises. Just interiors that truly fit you. </p>

                </div>
            </div>



            {/* 2XL Screen - Large displays */}
         

            <div className="desktop-1440">
                <div className="flex flex-row justify-between w-full h-[320px] px-12 my-auto mt-10 mb-10">

                    {/* Heading - XL optimized */}
                    <h1 className="text-6xl manrope mt-20 ml-30 leading-tight">
                        About Us
                    </h1>

                    {/* Description - XL optimized */}
                    <p className="w-[550px] mt-12 mr-18 manrope-medium text-2xl leading-relaxed">
                        Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.
                        No templates. No compromises. Just interiors that truly fit you.
                    </p>

                </div>
            </div>


         

            {/* XL Screen - Extra large displays */}
            <div className="desktop-1280">
                <div className="flex flex-row justify-between w-full h-[320px] px-12 my-auto mt-10">

                    {/* Heading - XL optimized */}
                    <h1 className="text-6xl manrope mt-20 ml-30 leading-tight">
                        About Us
                    </h1>

                    {/* Description - XL optimized */}
                    <p className="w-[550px] mt-12 mr-18 manrope-medium text-2xl leading-relaxed">
                        Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.
                        No templates. No compromises. Just interiors that truly fit you.
                    </p>

                </div>
            </div>

            {/* LG Screen - Large displays */}
            {/* <div className="hidden lg:block xl:hidden">
                <div className="flex flex-row justify-between w-full h-[280px] mt-16 px-8"> */}

                    {/* Heading - LG optimized */}
                    {/* <h1 className="text-5xl manrope mt-8 ml-8 leading-tight">
                        About Us
                    </h1> */}

                    {/* Description - LG optimized */}
                    {/* <p className="w-[350px] mt-8 mr-8 manrope-medium text-xl leading-relaxed">
                        Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.
                        No templates. No compromises. Just interiors that truly fit you.
                    </p>

                </div>
            </div> */}


            {/* MD Screen - Medium displays */}
            {/* <div className="hidden md:block lg:hidden">
                <div className="flex flex-col justify-between w-full h-auto mt-12 px-6"> */}

                    {/* Heading - MD optimized */}
                    {/* <h1 className="text-4xl manrope mb-4 leading-tight">
                        About Us
                    </h1> */}

                    {/* Description - MD optimized */}
                    {/* <p className="w-full manrope-medium text-lg leading-relaxed"> Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.
                        No templates. No compromises. Just interiors that truly fit you.</p>

                </div>
            </div> */}

            {/* SM Screen - Small displays and mobile */}
          


            <div className="block md:hidden w-full max-w-[425px] px-4 mt-8">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="bg-[#ebd657] w-[15px] h-10"></div>
                        <div>
                            <h1 className="text-3xl manrope">About Us</h1>
                            <p className="text-base font-medium manrope-medium mt-2">
                                Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions—from modular to luxury—crafted around your lifestyle and profession. No compromises. Just interiors that truly fit you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>







            {/* Pure CSS for 3XL - 2560*1440 resolution */}
            <style jsx>{`
                /* Ensure only one 3xl section exists */
                .aboutus-section1-3xl-container {
                    display: none !important;
                    margin-left: 7rem;
                }
                
                /* Hide 2xl section when 3xl is active */
                @media (min-width: 2560px) {
                    .aboutus-section1-2xl-section {
                        display: none !important;
                    }
                }
                
                @media (min-width: 2560px) {
                    .aboutus-section1-3xl-container {
                        display: block !important;
                        width: screen;
                        height: auto;
                        margin-left: 4rem;
                        padding-top: 2rem;
                    }

                    
                    .aboutus-section1-3xl-heading {
                        font-size: 5rem;
                        font-family: 'ManropeMedium', sans-serif;
                        margin-top: 4rem;
                        line-height: 1.2;
                        margin-left: 41%;
                    
                    }
                    
                    .aboutus-section1-3xl-description {
                        width: 1900px;
                        font-family: 'ManropeMedium', sans-serif;
                        font-size: 2rem;
                        line-height: 1.6;
                        margin-top: 4rem;
                       padding-left: 38rem;
                       text-align: center;
                    }
                }
            `}</style>

            
                <style global jsx>{`
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
    )
}