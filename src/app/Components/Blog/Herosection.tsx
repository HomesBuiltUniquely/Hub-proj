"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const ContactHeader: React.FC = () => {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  return (
    <div className="w-full">
      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1440 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout for large desktops (>=1440px) */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }
      `}</style>

      {/* 1440px Desktop Layout */}
      <div
        className="desktop-1440 w-[1400px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bgimgblog.png')" }}
      >
      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between -mt-15">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[250px] h-full -mt-5 mr-3" />
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5">
          <OfferingsDropdown textColor="text-[#32261c]" />
          <ExploreRoomsDropdown textColor="text-[#32261c]" />
          <NavMore textColor="text-[#32261c]" />
        </div>
        <button onClick={handleGetEstimate} className="bg-[#ef0101]  hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl font-semibold shadow mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
      </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Design Journal by HUB
          </h1>
          <p className="text-lg font-medium mb-8 drop-shadow-lg w-[600px]">
            Get inspired to live a more beautiful and happy life at home.
            Our mission to show how we are making each home more beautiful
            with easy-life tips and photos for any range of budgets.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold shadow">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* 1280px Desktop Layout */}
      <div
        className="desktop-1280 max-w-[1280px] h-[800px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimgblog.png')"}}
      >
      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between -mt-15">
        <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[250px] h-full -mt-5 mr-3" />
        <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-60 mt-5">
          <OfferingsDropdown textColor="text-[#32261c]" />
          <ExploreRoomsDropdown textColor="text-[#32261c]" />
          <NavMore textColor="text-[#32261c]" />
        </div>
        <button onClick={handleGetEstimate} className="bg-[#ef0101]  hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl font-semibold shadow mr-15 mt-4 shadow-lg shadow-black/50 hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60">GET FREE ESTIMATE</button>
      </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center pt-20 pb-10 text-white text-center">
          <h1 className="text-5xl font-extrabold mb-5 drop-shadow-lg">
            Design Journal by HUB
          </h1>
          <p className="text-base font-medium mb-6 drop-shadow-lg w-[500px] max-w-[90%]">
            A collection of home interior blogs, trends, and guides to inspire your next project.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleGetEstimate}
              className="bg-yellow-300 text-black px-5 py-2 rounded-2xl font-semibold shadow"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
