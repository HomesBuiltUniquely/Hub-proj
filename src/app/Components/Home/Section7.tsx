'use client';
export default function Section7() {
    return (
        <div>
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
           <div>
                <div className="desktop-1440 hidden md:block w-screen min-h-[500px] bg-[#F1F2F6]">
                    <div className="max-w-7xl h-[400px] bg-white mx-auto rounded-3xl mt-4 relative">
                        <img src="/ab2.png" alt="img" className="w-full h-full object-cover rounded-3xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/20- rounded-3xl pt-30 pl-100">
                            <h1 className="text-white text-4xl wulkan-display-bold">Meet our interior designers</h1>
                            <p className="text-white text-xl manrope-medium mt-4  pl-[3rem]">Experts Creating Spaces You’ll Love</p>
                            <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-3xl mt-4 ml-30 manrope-medium">Book your consultation </button>
                        </div>
                    </div>
                </div>
                {/* 1280 version */}
                <div className="desktop-1280 hidden md:block max-w-[1280px] mx-10 min-h-[500px] bg-[#F1F2F6]">
                    <div className="max-w-7xl h-[400px] bg-white mx-auto rounded-3xl mt-4 relative">
                        <img src="/ab2.png" alt="img" className="w-full h-full object-cover rounded-3xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/20- rounded-3xl pt-30 pl-100">
                            <h1 className="text-white text-4xl wulkan-display-bold">Meet our interior designers</h1>
                            <p className="text-white text-xl manrope-medium mt-4  pl-[3rem]">Experts Creating Spaces You’ll Love</p>
                            <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-3xl mt-4 ml-30 manrope-medium">Book your consultation </button>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className="block md:hidden w-[340px] min-h-[500px] bg-[#F1F2F6] mt-15 mx-auto">
                    <div className="max-w-7xl h-[380px] bg-white mx-auto rounded-3xl mt-4 relative">
                        <img src="/ab2.png" alt="img" className="w-full h-full object-cover rounded-3xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/20- rounded-3xl pt-30 ">
                            <h1 className="text-white text-4xl wulkan-display-bold text-center">Meet our interior designers</h1>
                            <p className="text-white text-xl manrope-medium mt-4 text-center w-[260px] mx-auto">Experts Creating Spaces You’ll Love</p>
                           <div className="bg-[#ddcdc1] text-black text-center px-4 py-3 rounded-3xl mt-10 manrope-medium w-[250px] mx-auto">
                           <button className="">Book your consultation </button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}