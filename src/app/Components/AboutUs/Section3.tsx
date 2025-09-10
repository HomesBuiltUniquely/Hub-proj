'use client';

export default function Section3(){
    return(
        <div>
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
                            <div className="aboutus-section3-3xl-heading">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - 3XL optimized */}
                            <div className="aboutus-section3-3xl-description">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - 3XL optimized */}
                        <div className="aboutus-section3-3xl-brand-text">
                            Brand Hub
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* 2XL Screen - Large displays */}
            <div className="aboutus-section3-2xl-section hidden 2xl:block 3xl:hidden  ">
                <div className="h-[680px] mx-auto mt-4 px-16">
                    
                    <div className="w-full max-w-[1500px] h-[650px] bg-[#ddcdc1] mx-auto rounded-3xl flex flex-row overflow-hidden">
                        
                        {/* Left Image - 2XL optimized */}
                        <img 
                            src="2.png" 
                            alt="Interior Design" 
                            className="w-[550px] h-[650px] rounded-3xl lg:rounded-l-3xl  object-cover" 
                        />
                        
                        {/* Center Content - 2XL optimized */}
                        <div className="w-[600px] h-auto p-14  lg:ml-12 flex flex-col justify-center">

                            <div className="text-[#ef0101] ml-2 text-2xl py-20">Brand Hub</div>
                            
                            {/* Main Heading - 2XL optimized */}
                            <div className="manrope-medium text-5xl w-full leading-tight mb-8">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - 2XL optimized */}
                            <div className="manrope-medium text-xl w-full leading-relaxed">
                            The Brand Hub is the powerhouse behind Hub Interior.
                                It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                                From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                    
                        
                    </div>
                    
                </div>
            </div>

            {/* XL Screen - Extra large displays */}
            <div className="hidden xl:block 2xl:hidden">
                <div className="h-[500px] mx-auto px-12">
                    
                    <div className=" w-[1100px] h-[500px] bg-[#ddcdc1] mx-auto rounded-3xl flex flex-row overflow-hidden">

                        
                        {/* Left Image - XL optimized */}
                        <img 
                            src="2.png" 
                            alt="Interior Design" 
                            className="w-[500px] h-auto min-h-[400px] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none object-cover" 
                        />

                        <div className="text-[#ef0101] text-2xl  pt-8 pl-8">Brand Hub</div>
                        
                        {/* Center Content - XL optimized */}
                        <div className="w-[400px]  flex flex-col justify-center items-end pt-30 ">
                            
                            
                            {/* Main Heading - XL optimized */}
                            <div className="manrope-medium text-4xl w-[500px] leading-tight mb-10 text-[30px] pr-10">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - XL optimized */}
                            <div className="manrope-medium text-lg leading-relaxed w-[500px]">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - XL optimized */}
                       
                        
                    </div>
                    
                </div>
            </div>

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

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden">
                <div className="h-[350px] mx-auto px-4">
                    
                    <div className="w-full h-[300px] bg-[#ddcdc1] mx-auto rounded-2xl flex flex-col overflow-hidden">
                        
                        {/* Left Image - SM optimized */}
                        <img 
                            src="j2.webp" 
                            alt="Interior Design" 
                            className="w-full h-[150px] rounded-2xl lg:rounded-b-none object-cover" 
                        />
                        
                        {/* Center Content - SM optimized */}
                        <div className="w-full p-6 flex flex-col justify-center">
                            
                            {/* Main Heading - SM optimized */}
                            <div className="manrope-medium text-xl w-full leading-tight mb-4">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - SM optimized */}
                            <div className="manrope-medium text-xs w-full leading-relaxed">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - SM optimized */}
                        <div className="text-[#ef0101] text-xs px-6 pb-4 text-center">
                            Brand Hub
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* Pure CSS for 3XL - 2560*1440 resolution */}
            <style jsx>{`
                /* Ensure only one 3xl section exists */
                .aboutus-section3-3xl-container {
                    display: none !important;
                }
                
                /* Hide 2xl section when 3xl is active */
                @media (min-width: 2560px) {
                    .aboutus-section3-2xl-section {
                        display: none !important;
                    }
                }
                
                @media (min-width: 2560px) {
                    .aboutus-section3-3xl-container {
                        display: block !important;
                        width: auto;
                        height: auto;
                    }
                    
                    .aboutus-section3-3xl-layout {
                        height: 600px;
                        min-height: 400px;
                        margin: 0 auto;
                        padding: 0 5rem;
                        margin-right: 2rem;
                    }
                    
                    .aboutus-section3-3xl-main-content {
                        width: 100%;
                        max-width: 1900px;
                        height: 100%;
                        min-height: 450px;
                        background-color: #ddcdc1;
                        margin: 0 auto;
                        border-radius: 1.5rem;
                        display: flex;
                        flex-direction: row;
                        overflow: hidden;
                    }
                    
                    .aboutus-section3-3xl-left-image {
                        width: 700px;
                        height: 450px;
                        min-height: 650px;
                        border-radius: 1.5rem;
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        object-fit: cover;
                    }
                    
                    .aboutus-section3-3xl-center-content {
                        width: 600px;
                        padding: 3.5rem;
                        margin-top: 0;
                        margin-left: 3.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .aboutus-section3-3xl-heading {
                        font-family: 'ManropeMedium', sans-serif;
                        font-size: 3rem;
                        width: 100%;
                        line-height: 1.2;
                        margin-bottom: 4rem;
                    }
                    
                    .aboutus-section3-3xl-description {
                        font-family: 'ManropeMedium', sans-serif;
                        font-size: 1.5rem;
                        width: 100%;
                        line-height: 1.6;
                        margin-bottom: 4rem;
                    }
                    
                    .aboutus-section3-3xl-brand-text {
                        color: #ef0101;
                        font-size: 1.5rem;
                        margin-left: auto;
                        margin-right: 2rem;
                        padding-top: 1.5rem;
                        padding-left: 1.5rem;
                        padding-right: 0;
                        padding-bottom: 0;
                        text-align: left;
                    }
                }
            `}</style>
        </div>
    )
}