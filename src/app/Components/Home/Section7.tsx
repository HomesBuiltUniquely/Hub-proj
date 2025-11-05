'use client';
// ...existing code...

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

          <div className="w-[1190px] h-[410px] rounded-3xl bg-black/5 mx-auto relative overflow-hidden">
            <img
              src="/ab2.png"
              alt="img"
              className="mx-auto w-[1185px] h-[410px] blur-[2px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 rounded-3xl flex flex-col justify-center items-center text-center">
              <h1 className="text-white text-5xl wulkan-display-bold">
                Meet our interior designers
              </h1>
              <p className="text-white text-xl manrope-medium mt-4">
                Experts Creating Spaces You&#39;ll Love
              </p>
              <a href="/GetEstimate">
                <button className="manrope-medium bg-[#ef0101] hover:bg-[#ebd457] transition-colors text-white px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 mt-6">
                  Book your consultation
                </button>
              </a>
            </div>
          </div>

        </div>
        {/* 1280 version */}
        <div className="desktop-1280 hidden md:block max-w-[1280px] mx-10 min-h-[500px] bg-[#F1F2F6]">
          <div className="w-[1190px] h-[410px] rounded-3xl bg-black/5 mx-auto relative overflow-hidden">
            <img src="/ab2.png" alt="img" className="mx-auto w-[1185px] h-[410px] blur-[2px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20- rounded-3xl pt-30 pl-95 ">
              <h1 className="text-white text-4xl wulkan-display-bold">Meet our interior designers</h1>
              <p className="text-white text-xl manrope-medium mt-4  pl-[3rem]">Experts Creating Spaces You&#39;ll Love</p>
              <a href="/GetEstimate" ><button className="manrope-medium bg-[#ef0101] hover:bg-[#ebd457] transition-colors text-white px-4 py-2 rounded-4xl font-semibold shadow shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 mt-4 ml-30">Book your consultation</button></a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="block md:hidden w-[340px] min-h-[500px] bg-[#F1F2F6] mt-8 -mb-4 mx-auto">
          <div className="max-w-7xl h-[380px] bg-white mx-auto rounded-3xl mt-4 relative">
            <img src="/ab2.png" alt="img" className="w-full h-full object-cover rounded-3xl bg-transparent blur-[2px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20- rounded-3xl pt-30 ">
              <h1 className="text-white text-4xl wulkan-display-bold text-center">Meet our interior designers</h1>
              <p className="text-white text-xl manrope-medium mt-4 text-center w-[260px] mx-auto">Experts creating spaces you&#39;ll love</p>
              <div className="text-center mt-10 w-[250px] mx-auto">
                <a href="/GetEstimate" ><button className="manrope-medium bg-[#ef0101] hover:bg-[#ebd457]  text-white px-4 py-2 rounded-4xl   shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg active:shadow-black/20 transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 w-full">Book your consultation</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}