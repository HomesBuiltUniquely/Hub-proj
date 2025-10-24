"use client";

export default function Business() {
    return (
        <div className="block md:hidden mt-10 mb-10 px-4">
            {/* Section Heading */}
            <div className="flex items-center">
                <div className="w-0.5 h-10 bg-[#ebd657]"></div>
                <h1 className="pl-2 text-3xl sm:text-4xl manrope ">Business Models</h1>
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

    )
}
