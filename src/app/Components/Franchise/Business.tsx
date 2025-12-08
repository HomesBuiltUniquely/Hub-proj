"use client";

const FRANCHISE_OPTIONS = [
    {
        title: "FICO (Franchise Invested Company Operated)",
        details: [
            "Exclusively Tier 1/Metro cities",
            "Projected ROI - 3x in 3 years",
            "Investment  50-80 Lakhs",
            "Minimum area - 2000 sq. ft."
        ],
        text: "Minimum effort, Maximum return"
    },
    {
        title: "FOFO (Franchise Owned Franchise Operated)",
        details: [
            "Tier 2 cities",
            "Projected ROI - 200% in 1 year",
            "Investment from 18 Lakh",
            "Minimum area - 800 sq. ft.",
        ],
        text: "Grow Your Empire!"
    },
    // Add more objects if you want more franchise cards
];


const scrollToForm = () => {
    if (typeof window !== 'undefined') {
        const formElement = document.getElementById('franchise-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

export default function Business() {
    return (

        <div>

            <style jsx>{`
     /* Hide all by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560,
        .mobile-1 {
          display: none !important;
        }

        /* 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* 1920px layout for large desktops (1440px–1920px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        /* 2560px layout for extra large desktops (>1920px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }

        /* mobile layout for extra large desktops (>1920px) */
        @media (max-width: 1023px) {
          .mobile-1 {
            display: block !important;
          }
        }
      `}</style>

            {/* 2560 Version */}

            <div className="desktop-2560">

                <div className="w-[1200px] manrope-medium text-center mx-auto mt-20 text-[18px]">
                    HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
                </div>
                <div className="w-[1200px] manrope-medium text-center mx-auto mt-4 text-[18px]">Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.</div>

                <div className="flex justify-center">
                    <section className="w-full max-w-[1440px] h-[500px] mt-20">
                        <h2 className="text-4xl manrope mb-4 text-center">Business Models</h2>

                        {/* Flexbox keeps boxes centered for any count */}
                        <div className="flex flex-wrap justify-center gap-[50px] mt-10">
                            {FRANCHISE_OPTIONS.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#ddcdc1] w-[400px] h-[350px] rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
                                >
                                    <div>
                                        <strong className="manrope-medium">{option.title}</strong>
                                        <ul className="list-disc manrope-medium ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                                            {option.details.map((d, i) => (
                                                <li key={i} className={d.includes('ROI') ? 'text-black' : ''}>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center text-lg manrope">
                                        {option.text}
                                    </div>
                                    <button
                                        onClick={scrollToForm}
                                        className="bg-white text-black manrope px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
                                    >
                                        Know More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>



            {/* 1920 Version */}

            <div className="desktop-1920">
                <div className=" w-[1200px] manrope-medium text-center mx-auto mt-20 text-[18px]">
                    HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
                </div>
                <div className="w-[1200px] manrope-medium text-center mx-auto mt-4 text-[18px]">Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.</div>

                <div className="flex justify-center">
                    <section className="w-full max-w-[1440px] h-[450px] mt-15">
                        <h2 className="text-4xl manrope mb-4 text-center">Business Models</h2>

                        {/* Flexbox keeps boxes centered for any count */}
                        <div className="flex flex-wrap justify-center gap-[50px] mt-10">
                            {FRANCHISE_OPTIONS.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#ddcdc1] w-[400px] h-[350px] rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
                                >
                                    <div>
                                        <strong className="manrope-medium">{option.title}</strong>
                                        <ul className="list-disc manrope-medium ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                                            {option.details.map((d, i) => (
                                                <li key={i} className={d.includes('ROI') ? 'text-black' : ''}>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center text-lg manrope">
                                        {option.text}
                                    </div>
                                    <button
                                        onClick={scrollToForm}
                                        className="bg-white text-black manrope px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
                                    >
                                        Know More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>


            {/* 1280 Version */}


            <div className="desktop-1280">

                <div className="w-[1100px] manrope-medium text-center mx-auto mt-16 text-[17px]">
                    HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
                </div>

                <div className="w-[1100px] manrope-medium text-center mx-auto mt-4 text-[17px]">
                    Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.
                </div>

                {/* Franchise Options Section */}
                <div className="flex justify-center">
                    <section className="w-full max-w-[1280px] h-[420px] mt-10">
                        <h2 className="text-3xl manrope mb-2 text-center">Business Models</h2>

                        {/* grid centered dynamically */}
                        <div className="flex flex-wrap manrope-medium justify-center gap-[40px] mt-10">
                            {FRANCHISE_OPTIONS.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#ddcdc1] w-[380px] h-[330px] rounded-xl manrope-medium text-nowrap shadow-md p-6 flex flex-col justify-between border border-gray-100"
                                >
                                    <div>
                                        <strong className="manrope-medium">{option.title}</strong>
                                        <ul className="list-disc ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                                            {option.details.map((d, i) => (
                                                <li key={i} className={d.includes('ROI') ? 'text-black' : ''}>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center text-lg manrope">
                                        {option.text}
                                    </div>
                                    <button
                                        onClick={scrollToForm}
                                        className="bg-white text-black manrope px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
                                    >
                                        Know More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>




            {/* Mobile Version */}

            <div className="mobile-1 block  mt-10 mb-10 px-4">
                {/* Section Heading */}
                <div className="flex items-center">
                    <div className="w-0.5 h-10 bg-[#ebd657]"></div>
                    <h1 className="pl-2 text-3xl sm:text-4xl wulkan-display-bold ">Business Models</h1>
                </div>

                {/* Card 1 */}
                <div className="w-full max-w-[425px] bg-white mt-8 mx-auto rounded-4xl p-6 pt-10 shadow-lg">
                    <h1 className="text-lg sm:text-xl manrope-medium">
                        <span className="manrope">FICO</span> (Franchise Invested Company Operated)
                    </h1>
                    <div className="flex flex-col gap-3 mt-8">
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Exclusively Tier 1/Metro cities</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Projected ROI - 3x in 3 years</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Investment 50-80 Lakhs</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Minimum area - 2000 sq. ft.</h1>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="bg-[#ddcdc1] text-black w-full py-2 rounded-4xl manrope hover:bg-[#ef0101] transition-colors">
                            Know More
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full max-w-[425px] bg-white mt-8 mx-auto rounded-4xl p-6 pt-10 shadow-lg">
                    <h1 className="text-lg sm:text-xl manrope-medium font-semibold">
                        <span className="manrope">FOFO</span> (Franchise Owned Franchise Operated)
                    </h1>
                    <div className="flex flex-col gap-3 mt-8">
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Tier 2 cities</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Projected ROI - 200% in 1 year</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Investment from 18 Lakh</h1>
                        </div>
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-[#ef0101] rounded-full mt-1"></div>
                            <h1 className="pl-2 manrope-medium text-sm sm:text-base">Minimum area - 800 sq. ft.</h1>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="bg-[#ddcdc1] text-black w-full py-2 rounded-4xl manrope font-medium hover:bg-[#ef0101] transition-colors">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
