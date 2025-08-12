import React from "react";

const ContactHeader: React.FC = () => (
  <div className="w-[1400px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between px-8 py-4">
      <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
      <div className="hidden md:flex gap-12 text-sm font-semibold text-white tracking-widest">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">EXPLORE ROOMS</a>
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">Life @ HUB</h1>
      <p className="text-lg font-medium mb-8 drop-shadow-lg">Any questions you have can be resolved here.</p>
      <div className="flex gap-4">
      </div>
    </div>
  </div>
);

export default ContactHeader;
