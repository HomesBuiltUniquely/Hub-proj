'use client';

export default function Section1(){
    return (
        <div>
            {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section1-3xl-container hidden">
                <div className="aboutus-section1-3xl-flex">
                    
                    {/* Heading - 3XL optimized */}
                    <h1 className="aboutus-section1-3xl-heading">
                        About Us
                    </h1>
                    
                    {/* Description - 3XL optimized */}
                    <p className="aboutus-section1-3xl-description text-center">
                    Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.  
                    No templates. No compromises. Just interiors that truly fit you.
                    </p>
                    
                </div>
            </div>

            {/* 2XL Screen - Large displays */}
            <div className="aboutus-section1-2xl-section hidden 2xl:block 3xl:hidden">
                <div className="flex flex-row justify-between w-full h-[300px] mt-12 px-16">
                    
                    {/* Heading - 2XL optimized */}
                    <h1 className="text-6xl manrope-medium mt-28 ml-24 leading-tight">
                        About Us
                    </h1>
                    
                    {/* Description - 2XL optimized */}
                    <p className="w-[600px] mt-14 mr-20  manrope-medium text-[26px] leading-relaxed">
                    Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.  
                    No templates. No compromises. Just interiors that truly fit you.
                    </p>
                
                </div>
            </div>

            {/* XL Screen - Extra large displays */}
            <div className="hidden xl:block 2xl:hidden">
                <div className="flex flex-row justify-between w-full h-[320px] mt-70 px-12">
                    
                    {/* Heading - XL optimized */}
                    <h1 className="text-6xl manrope-medium mt-20 ml-30 leading-tight">
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
            <div className="hidden lg:block xl:hidden">
                <div className="flex flex-row justify-between w-full h-[280px] mt-16 px-8">
                    
                    {/* Heading - LG optimized */}
                    <h1 className="text-5xl manrope-medium mt-8 ml-8 leading-tight">
                        About Us
                    </h1>
                    
                    {/* Description - LG optimized */}
                    <p className="w-[350px] mt-8 mr-8 manrope-medium text-xl leading-relaxed">
                    Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.  
                    No templates. No compromises. Just interiors that truly fit you.
                    </p>
                    
                </div>
            </div>

            {/* MD Screen - Medium displays */}
            <div className="hidden md:block lg:hidden">
                <div className="flex flex-col justify-between w-full h-auto mt-12 px-6">
                    
                    {/* Heading - MD optimized */}
                    <h1 className="text-4xl manrope-medium mb-4 leading-tight">
                        About Us
                    </h1>
                    
                    {/* Description - MD optimized */}
                    <p className="w-full manrope-medium text-lg leading-relaxed">
                    Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.  
                    No templates. No compromises. Just interiors that truly fit you.
                    </p>
                    
                </div>
            </div>

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden">
                <div className="flex flex-col justify-between w-full h-auto mt-8 px-4">
                    
                    {/* Heading - SM optimized */}
                    <h1 className="text-3xl manrope-medium mb-4 leading-tight">
                        About Us
                    </h1>
                    
                    {/* Description - SM optimized */}
                    <p className="w-full manrope-medium text-base leading-relaxed">
                    Hub Interior is India’s most innovative interior design company. We offer tailor-made solutions, from modular to luxury, crafted around your lifestyle and profession.  
                    No templates. No compromises. Just interiors that truly fit you.
                    </p>
                    
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
        </div>
    )
}