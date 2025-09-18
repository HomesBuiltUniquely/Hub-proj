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
    mapUrl: "#",
  },
  {
    name: "OMR, Chennai",
    description: "131/2A, Moti Towers, Rajiv Gandhi Salai, Perungudi, Chennai, Kanchipuram, Tamil Nadu 600096",
    mapUrl: "#",
  },
];

const Locations: React.FC = () => (
  <section className="my-10 m-12">
    <div className="max-w-screen-2xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-14 px-6">
        <h2 className="text-white text-3xl font-extrabold mb-1 pl-12">Our Locations</h2>
        <p className="text-white mb-8 pl-12">Find HUB location near you.</p>
        <div className="flex flex-col md:flex-row gap-8 h-[290px] 2xl:w-[1500px] 2xlpt-10 w-[1300px]" >
          {locations.map((loc) => ( 
            <div key={loc.name} className="flex-1 bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800">
              <div className="flex items-center font-semibold text-lg mb-3">
                <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
                {loc.name}
              </div>
            
              <p className="mb-3 text-gray-700">{loc.description}</p>
              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-yellow-200 px-4 py-2 rounded-md font-semibold shadow text-gray-800 mt-10 ">
                Get Direction <img src="/direction.png" className="w-5 h-5 ml-2 inline-block mb-0.5"></img> 
              </a>
              
              </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Locations;
