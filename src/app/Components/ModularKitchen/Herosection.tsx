import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => (
  <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15">
      <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-70 pr-200">
      <h1 className="w-[1200px] text-5xl lg:text-7xl manrope mb-6 drop-shadow-lg ml-100">Modular Kitchen Interior</h1>
      <p className="w-[1200px] text-2xl manrope-medium mb-8 drop-shadow-lg pl-62">Modular Kitchens Design for Style, Comfort & Everyday Living
      </p>
      <div className="flex gap-4">
        <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow mr-68">Get Free Quote
        </button>
      </div>
    </div>
  </div>
);

export default ContactHeader;
