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
    mapUrl: "https://maps.app.goo.gl/JP_Nagar_Location",
  },
  {
    name: "OMR, Chennai",
    description: "131/2A, Moti Towers, Rajiv Gandhi Salai, Perungudi, Chennai, Kanchipuram, Tamil Nadu 600096",
    mapUrl: "https://maps.app.goo.gl/OMR_Chennai_Location",
  },
];

// Function to render direction button with consistent styling
const renderDirectionButton = (loc: { name: string; description: string; mapUrl: string }) => {
  return (
    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
       className="inline-block bg-yellow-200 px-4 py-2 rounded-md font-semibold shadow text-gray-800 mt-10">
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
  <section className="desktop-1440 my-10 m-12">
    <div className="max-w-screen-2xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-14 px-6">
        <h2 className="text-white text-3xl font-extrabold mb-1 pl-12">Our Locations</h2>
        <p className="text-white mb-8 pl-12">Find HUB location near you.</p>
        <div className="flex flex-col md:flex-row gap-8 h-[290px] 2xl:w-[1500px] 2xlpt-10 w-[1300px]" >
          {locations.map((loc) => ( 
            <div key={loc.name} className="flex-1 bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800 flex flex-col">
              <div className="flex items-center font-semibold text-lg mb-3">
                <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
                {loc.name}
              </div>

              <p className="mb-3 text-gray-700 flex-grow">{loc.description}</p>
              <div className="mt-auto">
                {renderDirectionButton(loc)}
              </div>

              </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  <div>
  <section className="desktop-1280 my-12 m-10 mt-20">
    <div className="max-w-[1280] mx-auto rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-14 px-6">
        <h2 className="text-white text-3xl font-extrabold mb-1 pl-12">Our Locations</h2>
        <p className="text-white mb-8 pl-12">Find HUB location near you.</p>
        <div className="w-[1150px]  h-[300px] -ml-1.5">
        <div className="flex flex-cols gap-8  pt-10 " >
          {locations.map((loc) => (
            <div key={loc.name} className="flex-1 bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800 flex flex-col -mt-10">
              <div className="flex items-center font-semibold text-lg mb-3">
                <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
                {loc.name}
              </div>

              <p className=" text-gray-700 flex-grow">{loc.description}</p>
              <div className="mt-auto">
                {renderDirectionButton(loc)}
              </div>

              </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  </section>

  </div>

  {/* Mobile Small (320px - 479px) */}
  <section className="mobile-small my-6 mx-4">
    <div className="max-w-full mx-auto rounded-2xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-8 px-4">
        <h2 className="text-white text-2xl font-extrabold mb-1 pl-4">Our Locations</h2>
        <p className="text-white mb-6 pl-4 text-sm">Find HUB location near you.</p>
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-white bg-opacity-95 rounded-lg p-4 shadow text-gray-800">
              <div className="flex items-center font-semibold text-base mb-2">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
                {loc.name}
              </div>
              <p className="mb-3 text-gray-700 text-sm">{loc.description}</p>
              {renderDirectionButton(loc)}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Mobile Large (480px - 767px) */}
  <section className="mobile-large my-8 mx-6">
    <div className="max-w-full mx-auto rounded-2xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-10 px-6">
        <h2 className="text-white text-2xl font-extrabold mb-1 pl-6">Our Locations</h2>
        <p className="text-white mb-6 pl-6">Find HUB location near you.</p>
        <div className="grid grid-cols-1 gap-4">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-white bg-opacity-95 rounded-xl p-5 shadow text-gray-800">
              <div className="flex items-center font-semibold text-lg mb-3">
                <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
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
