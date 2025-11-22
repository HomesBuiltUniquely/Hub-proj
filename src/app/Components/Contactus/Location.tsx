"use client"
import React from "react";

const locations = [
  {
    name: "HBR Layout, Bangalore",
    description: "1st Floor, 6th Cross Rd, 1st Stage, HBR Layout 4th Block, HBR Layout, Bengaluru, Karnataka 560044",
    mapUrl: "https://maps.app.goo.gl/AF4ADYZG3fPVMjkb6",
  },
  {
    name: "Sarjapur Rd, Bangalore",
    description: "First Floor, No 7,8, JNR Complex, Sarjapur - Marathahalli Rd, Sulikunte, Bengaluru, Karnataka 562125",
    mapUrl: "https://maps.app.goo.gl/YWc3S5bDfxcxmzvx8",
  },
  {
    name: "JP Nagar, Bangalore",
    description: "Safa Heights, 2, Dr Puneeth Rajkumar Rd, JP Nagar 4th Phase, Dollar Layout, Bengaluru, Karnataka 560078",
    mapUrl: "https://maps.app.goo.gl/Mw3FL7JQbGN4GDB36",
  },
  
];

// Function to render direction button with consistent styling
const renderDirectionButton = (loc: { name: string; description: string; mapUrl: string }) => {
  return (
    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-yellow-400 px-3 py-1.5 rounded-full manrope-medium shadow hover:bg-amber-300 transition-colors text-gray-800  ml-6">
      Get Direction <img src="/direction.png" className="w-5 h-5 ml-2 inline-block mb-0.5"></img>
    </a>
  );
};

// 1280 Version
const renderDirectionButton12 = (loc: { name: string; description: string; mapUrl: string }) => {
  return (
    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-yellow-400 px-3 py-1 rounded-full manrope-medium shadow hover:bg-amber-300 transition-colors text-sm text-gray-800 mb-3 ml-6">
      Get Direction <img src="/direction.png" className="w-5 h-5 ml-2 inline-block mb-0.5"></img>
    </a>
  );
};

{/* Mobile Small (320px - 479px) */ }
const renderDirectionButtonmob1 = (loc: { name: string; description: string; mapUrl: string }) => {
  return (
    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-yellow-400 px-3 py-1 rounded-full manrope-medium shadow hover:bg-amber-300 transition-colors text-sm text-gray-800  ml-5">
      Get Direction <img src="/direction.png" className="w-5 h-5 ml-2 inline-block mb-0.5"></img>
    </a>
  );
};

const Locations: React.FC = () => (
  <div>
    <style jsx>{`
        /* Hide all sections by default */
        .desktop-1440,
        .desktop-1280,
        .mobile-small,
        .mobile-large {
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

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 479px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 480px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>
    <section className="desktop-1440 -mt-105 px-5">
      <div className="max-w-[1440px] mx-auto h-[525px] rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
        <div className="bg-black/50 py-20 px-12">
          <h2 className="text-white text-4xl manrope mb-1 pl-6">Our Locations</h2>
          <p className="text-white text-2xl mb-10 pl-7 manrope-medium">
            Find HUB location near you.
          </p>

          <div className="flex flex-col md:flex-row gap-6 h-[250px] w-[1300px] mx-auto">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex-1 manrope-medium bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800 flex flex-col hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center text-lg mb-3">
                  <svg
                    className="w-13 -ml-6 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z" />
                  </svg>
                  {loc.name}
                </div>

                <p className="mb-4 -mt-4 ml-7 w-[225px] text-gray-700 flex-grow">
                  {loc.description}
                </p>

                <div className="mt-auto">{renderDirectionButton(loc)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



    <div>
      <section className="desktop-1280 mx-8 -mt-95">
        <div className="max-w-1280px  mx-auto rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')]  bg-cover bg-center relative">
          <div className="bg-black/50 py-25 px-8">
            <h2 className="text-white text-4xl -mt-5 manrope mb-1">Our Locations</h2>
            <p className="text-white text-2xl mb-10 manrope-medium">Find HUB location near you.</p>
            <div className="flex flex-wrap justify-center gap-5 " >
              {locations.map((loc) => (
                <div key={loc.name} className="flex-1 manrope  bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800 flex flex-col  hover:bg-gray-200 transition-colors">
                  <div className="flex items-center  text-md ">
                    <svg className="w-13 -ml-6  text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z" /></svg>
                    {loc.name}
                  </div>

                  <p className=" -mt-2 ml-7 w-[195px] text-sm text-gray-700 flex-grow manrope-medium">{loc.description}</p>
                  <div className="mt-3">
                    {renderDirectionButton12(loc)}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>

    {/* Mobile Small (320px - 479px) */}
    <section className="mobile-small my-6 mx-4 -mt-60 mb-10">
      <div>
       
         <div className="">
          <div className="flex relative">
            <div className="w-[2px] h-[40px] bg-[#ebd457]"></div>
          </div>
          <div className="-mt-10">
            <h2 className="h-10 text-3xl manrope text-gray-800 ml-3 mb-5">Our Locations</h2>

          </div>
        </div>

        <div className="max-w-full mx-auto rounded-2xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
          <div className="bg-black/50 py-8 px-4">

            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white bg-opacity-95 rounded-lg p-4 shadow text-gray-800 manrope">
                  <div className="flex items-center  text-base mb-2">
                    <svg className="w-6 h-6  text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z" /></svg>
                    {loc.name}
                  </div>
                  <p className="mb-3 text-gray-700 text-sm manrope-medium w-[225px] ml-6">{loc.description}</p>
                  {renderDirectionButtonmob1(loc)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile Large (480px - 767px) */}
    <section className="mobile-large my-8 mx-6 ">
      <div className="max-w-full mx-auto rounded-2xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
        <div className="bg-black/50 py-10 px-6">
          <h2 className="text-white text-2xl font-extrabold mb-1 pl-6">Our Locations</h2>
          <p className="text-white mb-6 pl-6">Find HUB location near you.</p>
          <div className="grid grid-cols-1 gap-4">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white bg-opacity-95 rounded-xl p-5 shadow text-gray-800">
                <div className="flex items-center font-semibold text-lg mb-3">
                  <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z" /></svg>
                  {loc.name}
                </div>
                <p className="mb-3 text-gray-700">{loc.description}</p>
                {renderDirectionButton(loc)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default Locations;
