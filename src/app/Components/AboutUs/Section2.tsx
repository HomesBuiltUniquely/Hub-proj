'use client';

export default function Section2() {
    return (
        <div>


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




            {/*1440 version*/}
            
            <div className="desktop-1440">
                <div className="aboutus-section2-2xl-section mx-auto">
                    <div className="h-[600px] flex flex-row px-16  gap-12 ">
                        <div className="w-[600px] h-[525px] bg-[#ebd457] rounded-2xl p-16 pt-30 text-xl manrope-medium tracking-wide leading-relaxed">
                            At Hub Interior, beauty is backed by process.
                            Every space you see is a result of deep planning, skilled design, and flawless execution.
                            We don’t just make interiors look good—we make them work better for real lives.
                        </div>

                        <div className="w-[600px] h-[525px] bg-[#ebd457] rounded-2xl overflow-hidden">
                            <img
                                src="/1.png"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Bedroom Interior"
                            />
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="w-[350px] h-[150px] bg-yellow-300 rounded-2xl overflow-hidden">
                                <img
                                    src="/ab.jpg"
                                    className="w-full h-full object-cover rounded-2xl"
                                    alt="Interior Design"
                                />
                            </div>
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
            </div>

            {/* XL Screen - Extra large displays */}
            <div className="desktop-1280 hidden xl:block 2xl:hidden">
                <div className="h-[600px] flex flex-row px-12 gap-10 mt-6">
                    <div className="w-[450px] h-[470px] bg-[#ebd457] rounded-2xl p-12 pt-20 text-[20px] manrope-medium tracking-wide leading-relaxed">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    <div className="w-[450px] h-[470px] bg-[#ebd457] rounded-2xl overflow-hidden">
                        <img
                            src="/1.png"
                            className="w-full h-full object-cover rounded-2xl"
                            alt="Bedroom Interior"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="w-[250px] h-[135px] bg-yellow-300 rounded-2xl overflow-hidden">
                            <img
                                src="/ab.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Interior Design"
                            />
                        </div>
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

            {/* SM Screen - Small displays and mobile */}
            <div className="block md:hidden w-full max-w-[425px] mx-auto mb-13">
                <div className="flex justify-center mt-10 px-4 md:hidden">
                    <div className="flex w-full max-w-[425px] gap-3">
                        <div className="flex h-[220px] rounded-xl overflow-hidden">
                            <img
                                src="bed1.jpg"
                                alt="Bedroom Interior"
                                className="w-screen h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-2">
                            <div className="w-24 h-[80px] rounded-xl overflow-hidden">
                                <img
                                    src="bn.jpg"
                                    alt="Interior Design Top"
                                    className="w-screen h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="w-24 h-[132px] rounded-xl overflow-hidden">
                                <img
                                    src="j4.webp"
                                    alt="Interior Design Bottom"
                                    className="w-screen h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[250px] text-md manrope-medium tracking-wide leading-relaxed mx-auto ml-5 mr-3 mt-5">
                    At Hub Interior, beauty is backed by process.
                    Every space you see is a result of deep planning, skilled design, and flawless execution.
                    We don’t just make interiors look good—we make them work better for real lives.
                </div>
            </div>


             {/* Pure CSS for 3XL - 2560*1440 resolution */}
            <style jsx>{`
                /* Ensure only one 3xl section exists */
                .aboutus-section2-3xl-container {
                    display: none ;
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


        <style jsx global>{`
    /* Default hidden for desktop variations */
    .desktop-1440,
    .desktop-1280,
    .aboutus-section4-3xl-container {
        display: none;
    }

    /* XL (1280–1439) */
    @media (min-width: 768px) and (max-width: 1439px) {
        .desktop-1280 {
            display: block;
        }
    }

    /* 2XL (1440–1919) */
    @media (min-width: 1440px) and (max-width: 1919px) {
        .desktop-1440 {
            display: block;
        }
    }

    /* 3XL (2560+) */
    @media (min-width: 2560px) {
        .aboutus-section4-3xl-container {
            display: block !important;
        }

        /* Hide other layouts */
        .desktop-1440,
        .desktop-1280 {
            display: none !important;
        }
    }
`}
</style>

        </div>
    );
}