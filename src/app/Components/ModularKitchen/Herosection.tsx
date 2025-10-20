"use client"

import React from "react";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import { useRouter } from "next/navigation";


const ContactHeader: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };


  return (

    <div>
      <style jsx>{`
        /* Visibility controls for mobile variants */
        .mobile-360plus,
        .mobile-300 { display: none; }

        /* Show 360–480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus { display: block; }
          /* Center the floating menu */
          .mk-mobile-360 .menu { left: 50%; transform: translateX(-50%) ; width: 90%; height: 12% }
        }

        /* Show 300–359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 { display: block; }
          /* Center the floating menu */
          .mk-mobile-300 .menu { left: 50%; transform: translateX(-50%); width: 90% }
        }
      `}</style>

      <div>

        {/* Desktop Version */}
        <div className=" hidden md:block w-[1400px] h-[900px] mx-auto  rounded-3xl overflow-hidden  bg-cover  bg-center relative" style={{ backgroundImage: "url('/kh.png')" }}>
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer"> <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} className="w-[230px] h-[250px] -mt-3 ml-2" /></div>
            <div className="hidden text-[18px] md:flex gap-12 text-sm manrope text-white tracking-widest ml-80 mt-4">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>
            <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow  mr-15 mt-4">GET FREE ESTIMATE</button>
          </div>
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-70 pr-200">
            <h1 className="w-[1200px] text-5xl lg:text-7xl manrope mb-6 drop-shadow-lg ml-100">Modular Kitchen Interior</h1>
            <p className="w-[1200px] text-2xl manrope-medium mb-8 drop-shadow-lg pl-62">Modular Kitchens Design for Style, Comfort & Everyday Living
            </p>
            <div className="flex gap-4">
              <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-6 py-3 rounded-full manrope-medium shadow mr-68">Get Free Quote
              </button>
            </div>
          </div>
        </div>

      </div>

      
      {/* ===== MOBILE VERSION ===== */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus mt-3">
        <div className="relative h-[450] w-[full] ">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/Mkh1.png"
              alt="Modular Kitchen Background"
              fill
              priority
              className="object-cover"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={90} height={50} className="cursor-pointer" />
          </div>

          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="manrope text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Modular
              <br />
              Kitchen
            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Modular Kitchens Design for Style, Comfort & Everyday Living
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden p-3 mk-mobile-300 mobile-300 ">
        <div className="relative h-[450] w-[100%]  mt-3">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="/Mkh1.png"
              alt="Modular Kitchen Background"
              fill
              priority
              className="object-cover"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={82} height={50} className="cursor-pointer" />
          </div>

          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="manrope  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Modular
              <br />
              Kitchen
            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Modular Kitchens Design for Style, Comfort & Everyday Living
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <button onClick={handleGetEstimate} className="bg-yellow-300 text-black px-5 py-2 rounded-full manrope-medium shadow-md shadow-black/20">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>


    </div>



  )
};

export default ContactHeader;
