import React from "react";

const locations = [
  {
    name: "HBR Layout, Bangalore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    mapUrl: "#",
  },
  {
    name: "Sarjapur Rd, Bangalore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    mapUrl: "#",
  },
];

const Locations: React.FC = () => (
  <section className="my-12">
    <div className="max-w-screen-xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-[url('/bn.jpg')] bg-cover bg-center relative">
      <div className="bg-black/50 py-14 px-6">
        <h2 className="text-white text-3xl font-extrabold mb-1 pl-12">Our Locations</h2>
        <p className="text-white mb-8 pl-12">Find HUB location near you.</p>
        <div className="flex flex-col md:flex-row gap-8 h-[210px] w-[800px] ml-20">
          {locations.map((loc) => (
            <div key={loc.name} className="flex-1 bg-white bg-opacity-95 rounded-xl p-7 shadow text-gray-800">
              <div className="flex items-center font-semibold text-lg mb-3">
                <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 3.313-2.99 7.36-5.262 9.97a.881.881 0 01-1.236 0C6.99 15.36 4 11.313 4 8a6 6 0 016-6zm0 8.5A2.5 2.5 0 1010 5a2.5 2.5 0 000 5.5z"/></svg>
                {loc.name}
              </div>
              <p className="mb-3 text-gray-700">{loc.description}</p>
              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-yellow-200 px-4 py-2 rounded-md font-semibold shadow text-gray-800">
                Google Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Locations;
