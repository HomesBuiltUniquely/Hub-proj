import React from "react";

const PolicyHeroSimple: React.FC = () => (
  <div className="w-[1300px] h-[850px] mx-auto mt-4 my-10 rounded-4xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/Policy.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15 ">
      <img src="redlogo.png" className="w-[220px] h-full -ml-4"></img>
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
        <a href="/">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">EXPLORE ROOMS</a>
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">Policy Center</h1>
      <p className="text-lg font-medium mb-8 drop-shadow-lg">Everything You Need to Know.</p>
      <div className="flex gap-4">
      </div>
    </div>
  </div>
);

export default PolicyHeroSimple;
