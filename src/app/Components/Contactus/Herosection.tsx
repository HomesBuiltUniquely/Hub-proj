import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";


const ContactHeader: React.FC = () => (
  <div className="w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/Contactus.png')" }}>
    {/* Navbar */}
    <div className="flex items-center justify-between -mt-15 ">
      <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={100} className="w-[250px] h-full -mt-4 -ml-4" />
      <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
      <OfferingsDropdown textColor="text-white" />
      <ExploreRoomsDropdown textColor="text-white" />
      <NavMore textColor="text-white" />
      </div>
      <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
    </div>
    {/* Hero content */}
    <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">How Can We Help You</h1>
     
    </div>
  </div>
);

export default ContactHeader;
