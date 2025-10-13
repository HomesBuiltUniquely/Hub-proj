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



             {/* 2XL Screen - Large displays */}
            <div className="desktop-1440">

            <div className="">
                <div className="h-[680px] mx-auto mt-4 px-16">
                    
                    <div className="w-full max-w-[1500px] h-[550px] bg-[#ddcdc1] mx-auto rounded-3xl flex flex-row overflow-hidden">
                        
                        {/* Left Image - 2XL optimized */}
                        <img 
                            src="2.png" 
                            alt="Interior Design" 
                            className="w-[550px] h-[650px] rounded-l-3xl lg:rounded-l-3xl  object-cover" 
                        />
                        
                        {/* Center Content - 2XL optimized */}
                        <div className="w-[600px] h-auto px-10  lg:ml-8 flex flex-col justify-center pb-20">

                            <div className="text-[#ef0101] ml- mt-15 text-2xl py-5 manrope-medium">Brand Hub</div>
                            
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
            </div>


            {/* XL Screen - Extra large displays */}
                <div className="desktop-1280">

                <div className="h-[500px] mx-auto px-12 ">
                    
                    <div className=" w-[1100px] h-[500px] bg-[#ddcdc1] mx-auto rounded-3xl flex  overflow-hidden">

                        
                        {/* Left Image - XL optimized */}
                        <img 
                            src="2.png" 
                            alt="Interior Design" 
                            className="w-[500px] h-auto min-h-[400px] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none object-cover" 
                        />
                        
                        <div className="text-[#ef0101] text-2xl  pt-25 pl-10  manrope-medium">Brand Hub</div>
                        
                        <div className="mt-20 -ml-5">
                            {/* Center Content - XL optimized */}
                            <div className="w-[400px]  flex flex-col justify-center items-end pt-20 ">
                                
                                
                                {/* Main Heading - XL optimized */}
                                <div className="manrope-medium text-4xl w-[500px] leading-tight mb-10 text-[30px] ">
                                    Great design goes beyond aesthetics.
                                </div>
                                
                                {/* Description Text - XL optimized */}
                                <div className="manrope-medium text-lg leading-relaxed w-[500px]">
                                The Brand Hub is the powerhouse behind Hub Interior.
                                It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                                From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                                </div>
                                
                            </div>
                        </div> 
                        {/* Right Brand Text - XL optimized */}
                       
                        
                    </div>
                    
                </div>
        
            </div>

            

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden  w-[full] max-w-[425px]">
                <div className="h-[30px] mx-auto px-4">
                    
                    <div className="w-full h-[540] bg-[#ddcdc1] mx-auto rounded-2xl flex flex-col overflow-hidden -mt-30">
                        
                        
                        
                        <img src="2.png" alt="Interior Design" className="mx-auto w-screen h-[185px] rounded-3xl px-3 mt-8"/>
 


                        {/* Center Content - SM optimized */}
                        <div className="w-full px-6 flex flex-col justify-center">
                            
                            {/* Main Heading - SM optimized */}
                            <div className="manrope-medium text-xl w-full leading-tight mt-5 mb-4">
                                Great design goes beyond aesthetics.
                            </div>
                            
                            {/* Description Text - SM optimized */}
                            <div className="manrope-medium text-md w-full leading-relaxed">
                            The Brand Hub is the powerhouse behind Hub Interior.
                            It’s where innovation, design, and business strategy come together to build focused, high-performing sub-brands.
                            From Homes Under Budget to Hubsolute, every brand is crafted here—with clarity, purpose, and direction.
                            </div>
                            
                        </div>
                        
                        {/* Right Brand Text - SM optimized */}
                        {/* <div className="text-[#ef0101] text-xs px-6 pb-4 text-center">
                            Brand Hub
                        </div>
                         */}
                         
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
    )
}

