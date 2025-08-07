import React from "react";

const BedroomHeroSimple: React.FC = () => (
  <div
    className="w-[1400px] h-[80px] md:h-[800px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center flex items-end"
    style={{
      backgroundImage: "url('/bn.jpg')", // Update with your image path
    }}
  >
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Optionally, place content here if you want text/buttons over the bg */}
    {
    <div className="absolute bottom-50 left-20 z-10">
      <h1 className="text-white text-4xl font-extrabold mb-3">Bedroom</h1>
      <p className="text-white/90 text-lg italic mb-1">Tranquil Designs for Peaceful Nights</p>
      <button className="mt-4 bg-yellow-300 px-6 py-2 rounded-2xl font-bold">Let's Connect</button>
    </div>
   }
  </div>
);

export default BedroomHeroSimple;
