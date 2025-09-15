import React from "react";

const BedroomHeroSimple: React.FC = () => (
<div>
<div className="w-[1300px] h-[850px] mx-auto mt-4 rounded-4xl overflow-hidden  bg-cover bg-center relative" style={{ backgroundImage: "url('/bh.png')" }}>
  {/* Navbar */}
  <div className="flex items-center justify-between -mt-15">
    <img src="redlogo.png" className="w-[220px]  -ml-2"></img>
    <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <a href="#">HOME</a>
      <a href="#">SERVICES</a>
      <a href="#">EXPLORE ROOMS</a>
    </div>
    <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
  </div>
  {/* Hero content */}
  <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30 pr-200">
    <h1 className="w-[800px] text-5xl lg:text-5xl manrope mb-6 drop-shadow-lg ml-30">Bedroom Interior Design</h1>
    <p className="text-xl manrope-medium mb-8 drop-shadow-lg ">Any questions you have can be resolved here.</p>
    <div className="flex gap-4">
      <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow mr-70">Lets Connect</button>
    </div>
  </div>
</div>
<div className="w-[1000px] text-lg text-center mt-20 rounded-3xl relative mx-auto">
Your master bedroom is where your day starts and ends. It is a space for your dreams, memories, and rest. At HUB Interior, we design master bedrooms in Bengaluru that match your lifestyle and feelings. We focus on warm lighting, calming colors, custom wardrobes, and smart layouts to create a comfortable space just for you. We aim to make a sanctuary that feels like home—a place where love, peace, and happiness thrive.
</div>
</div>
);

export default BedroomHeroSimple;
