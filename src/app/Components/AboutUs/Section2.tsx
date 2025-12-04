'use client';

export default function Section2() {
    return (
        <div>


            {/* 3XL Screen - 2560px+ */}
            <div className="aboutus-3xl">
                <div className="aboutus-3xl-row">

                    <div className="aboutus-3xl-text">
                        At Hub Interior, beauty is backed by process.
                        Every space you see is a result of deep planning, skilled design, and flawless execution.
                        We don’t just make interiors look good—we make them work better for real lives.
                    </div>

                    <div className="aboutus-3xl-center">
                        <img src="/1.png" className="aboutus-3xl-img" />
                    </div>

                    <div className="aboutus-3xl-right">
                        <div className="aboutus-3xl-top">
                            <img src="/ab.jpg" className="aboutus-3xl-img" />
                        </div>
                        <div className="aboutus-3xl-bottom">
                            <img src="/3.png" className="aboutus-3xl-img" />
                        </div>
                    </div>

                </div>
            </div>





            {/*1920 version*/}

            <div className="desktop-1920">
                <div className="aboutus-section2-2xl-section mx-auto px-20">
                    <div className="h-[600px] flex flex-row   gap-12 ">
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



            {/* 1280 Screen - Extra large displays */}
            <div className="desktop-1280 hidden xl:block 2xl:hidden mx-auto px-15">
                <div className="h-[600px] flex flex-row  gap-10 mt-6">
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
    /* Hide by default */
    .aboutus-3xl {
        display: none;
    }

    /* SHOW only on 2560px+ */
    @media (min-width: 2560px) {

        .aboutus-3xl {
            display: block;
            width: 100%;
            padding: 4rem 6rem;
        }

        .aboutus-3xl-row {
            display: flex;
            gap: 3rem;
            margin-top: 4rem;
        }

        .aboutus-3xl-text {
            width: 800px;
            min-height: 800px;
            background: #ebd457;
            padding: 6rem;
            padding-top: 14rem;
            border-radius: 16px;
            font-size: 28px;
            line-height: 1.6;
            font-family: 'ManropeMedium', sans-serif;
        }

        .aboutus-3xl-center {
            width: 850px;
            min-height: 800px;
            background: #ebd457;
            border-radius: 16px;
            overflow: hidden;
        }

        .aboutus-3xl-right {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .aboutus-3xl-top {
            width: 620px;
            min-height: 250px;
            background: #fde047;
            border-radius: 16px;
            overflow: hidden;
        }

        .aboutus-3xl-bottom {
            width: 620px;
            min-height: 520px;
            background: #f87171;
            border-radius: 16px;
            overflow: hidden;
        }

        .aboutus-3xl-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Hide other layouts */
        .desktop-1920,
        .desktop-1280 {
            display: none !important;
        }
    }
`}</style>



            <style jsx global>{`
    /* Default hidden for desktop variations */
    .desktop-1920,
    .desktop-1280,
    .aboutus-section2-3xl-container {
        display: none;
    }

    /* XL (1280–1439) */
    @media (min-width: 768px) and (max-width: 1439px) {
        .desktop-1280 {
            display: block;
        }
    }

    /* 2XL (1440–1919) */
    @media (min-width: 1440px) and (max-width: 1920px) {
        .desktop-1920 {
            display: block;
        }
    }

    /* 3XL (2560px+) */
    @media (min-width: 2560px) {
        .aboutus-section2-3xl-container {
            display: block !important;
        }

        .desktop-1920,
        .desktop-1280 {
            display: none !important;
        }
    }
`}
            </style>


        </div>
    );
}