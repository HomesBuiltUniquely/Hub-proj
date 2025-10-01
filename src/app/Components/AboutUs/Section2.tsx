'use client';

export default function Section2(){
    return(
        <div>
            {/* 3XL Screen - 2560*1440 resolution (Ultra-wide displays) - Pure CSS */}
            <div className="aboutus-section2-3xl-container hidden">
                <div className="aboutus-section2-3xl-layout">
                    
                    {/* Left Text Box - 3XL optimized */}
                    <div className="aboutus-section2-3xl-textbox">
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
                <div className="h-[600px] flex flex-row px-16 mt-16 gap-12 ">
                    
                    {/* Left Text Box - 2XL optimized */}
                    <div className="w-[600px] h-[550px] bg-[#ebd457] rounded-2xl p-16 pt-30 text-xl manrope-medium tracking-wide leading-relaxed">
                    At Hub Interior, beauty is backed by process.
                    Every space you see is a result of deep planning, skilled design, and flawless execution.
                    We don’t just make interiors look good—we make them work better for real lives.
                    </div>
                    
                    {/* Center Image Box - 2XL optimized */}
                    <div className="w-[600px] h-[550px] bg-[#ebd457] rounded-2xl overflow-hidden">
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
                        <div className="w-[350px] h-[370px] bg-red-400 rounded-2xl overflow-hidden">
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
                    <div className="w-[450px] h-[470px] bg-[#ebd457] rounded-2xl p-12 pt-32 text-[16px] manrope-medium tracking-wide leading-relaxed">
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

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden">
                <div className="h-auto min-h-[359px] flex flex-col px-4 mt-10 ">
                
                       {/* left Image Box - SM optimized */}
                    <div className="w-49 h-[220px] rounded-xl center mt-3 mx-auto">
                        <img 
                            src="bed1.jpg" 
                            className="w-full h-full object-cover rounded-xl -ml-17" 
                            alt="Bedroom Interior"
                        />

                             {/*Right Top Image */}
                        <div className="w-32 h-[80px] rounded-xl ml-36 mb-2">
                            <img 
                                src="bn.jpg" 
                                className="w-full h-full object-cover rounded-xl -mt-55" 
                                alt="Interior Design"
                            />
                        </div>


                        {/*Right Bottom Image */}
                        <div className="w-32 h-[132px] rounded-xl ml-36">
                            <img 
                                src="j4.webp" 
                                className="w-full h-full object-cover rounded-xl" 
                                alt="Interior Design"
                            />
                        </div>



                    </div>
    
                       

                    {/* Text Box - SM optimized */}
                    <div className="w-full h-[250px] rounded-xl pt-8 text-xs manrope-medium tracking-wide leading-relaxed mx-auto">
                    At Hub Interior, beauty is backed by process.
                    Every space you see is a result of deep planning, skilled design, and flawless execution.
                    We don’t just make interiors look good—we make them work better for real lives.
                    </div>
                    
                   
                    
                </div>
            </div>

            {/* Pure CSS for 3XL - 2560*1440 resolution */}
            <style jsx>{`
                /* Ensure only one 3xl section exists */
                .aboutus-section2-3xl-container {
                    display: none !important;
                }
                
                /* Hide 2xl section when 3xl is active */
                @media (min-width: 2560px) {
                    .aboutus-section2-2xl-section {
                        display: none !important;
                    }
                }
                
                @media (min-width: 2560px) {
                    .aboutus-section2-3xl-container {
                        display: block !important;
                        width: auto;
                        height: auto;
                        margin-left: -1rem;
                    }
                    
                    .aboutus-section2-3xl-layout {
                        height: auto;
                        min-height: 1000px;
                        display: flex;
                        flex-direction: row;
                        padding: 0 7rem;
                        margin-top: 4rem;
                        gap: 3rem;
                        margin-top: 8rem;
                    }
                    
                    .aboutus-section2-3xl-textbox {
                        width: 800px;
                        height: 400px;
                        min-height: 800px;
                        background-color: #ebd457;
                        border-radius: 1rem;
                        padding: 5rem;
                        padding-top: 13rem;
                        font-size: 27px;
                        font-family: 'ManropeMedium', sans-serif;
                        letter-spacing: 0.05em;
                        line-height: 1.6;
                        padding-top: 16rem;
                        
                    }
                    
                    .aboutus-section2-3xl-center-image {
                        width: 850px;
                        height: 400px;
                        min-height: 800px;
                        background-color: #ebd457;
                        border-radius: 1rem;
                        overflow: hidden;
                    }
                    
                    .aboutus-section2-3xl-right-images {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                    }
                    
                    .aboutus-section2-3xl-top-image {
                        width: 620px;
                        height: 100px;
                        min-height: 250px;
                        background-color: #fde047;
                        border-radius: 1rem;
                        overflow: hidden;
                    }
                    
                    .aboutus-section2-3xl-bottom-image {
                        width: 620px;
                        height: 380px;
                        min-height: 520px;
                        background-color: #f87171;
                        border-radius: 1rem;
                        overflow: hidden;
                    }
                    
                    .aboutus-section2-3xl-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: inherit;
                    }
                }
            `}</style>
        </div>
    )
}
