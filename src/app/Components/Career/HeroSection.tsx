"use client";
import React from "react";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OverlapNavBar from "../OverlapNavBar";


const ContactHeader: React.FC = () => {

  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  function handleClick() {
    router.push("/");
  }


  return (

    <div>
      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }


         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>


      {/* 2560 Version */}

      <div className="desktop-2560">

        <div className="hidden md:block w-full h-[900px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://luylvbilvdxntquphldh.supabase.co/storage/v1/object/public/ggg/career%20page/carrerhome.png')" }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[5]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5]"></div>

          {/* Navbar */}
          <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">
            {/* Logo */}
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/whitelogo.png"
                alt="HUB Interior Logo"
                width={250}
                height={250}
                className="w-[230px] h-[250px] ml-9"
              />
            </div>

            {/* Nav Links */}
            <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] hidden md:flex items-center justify-center gap-12 manrope text-white tracking-widest ml-60">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>

            {/* CTA */}
            <div className="relative mr-15">
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                {/* FREE Badge */}
                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="text-5xl lg:text-6xl mb-2 drop-shadow-lg text-left leading-tight">
              Together<br />
              We Build Better
            </h1>
            <p className="text-lg mb-6 drop-shadow-lg">Be part of a culture that values innovation, growth, and the power of good design.</p>
          </div>
        </div>
      </div>



      {/* 1920 Version */}

      <div className="desktop-1920">
        <div className="hidden md:block w-full h-[900px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://luylvbilvdxntquphldh.supabase.co/storage/v1/object/public/ggg/career%20page/carrerhome.png')" }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent z-[5]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5]"></div>

          {/* Navbar */}
          <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">
            {/* Logo */}
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/whitelogo.png"
                alt="HUB Interior Logo"
                width={250}
                height={250}
                className="w-[230px] h-[250px] ml-9"
              />
            </div>

            {/* Nav Links */}
            <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[500px] h-[45px] hidden md:flex items-center justify-center gap-12 manrope text-white tracking-widest ml-60">
              <OfferingsDropdown textColor="text-white" />
              <ExploreRoomsDropdown textColor="text-white" />
              <NavMore textColor="text-white" />
            </div>

            {/* CTA */}
            <div className="relative mr-15">
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                {/* FREE Badge */}
                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="text-5xl lg:text-6xl mb-2 drop-shadow-lg text-left leading-tight">
              Together<br />
              We Build Better
            </h1>
            <p className="text-lg mb-6 drop-shadow-lg">Be part of a culture that values innovation, growth, and the power of good design.</p>
          </div>
        </div>
      </div>




      {/* 1280 Version */}

      <div className="desktop-1280">
        <div className="hidden md:block w-full h-[800px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/career%20H.png')" }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[5]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5]"></div>

          {/* Navbar */}
          <div className="relative z-10 flex items-center mt-5 justify-between h-[80px] px-8">
            {/* Logo */}
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/whitelogo.png"
                alt="HUB Interior Logo"
                width={230}
                height={250}
                className="w-[230px] h-[250px]"
              />
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {/* NAV BAR */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] hover:bg-[#ebd457] text-white h-[45px] w-[250px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[16px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-start justify-start pt-24 pb-20 text-white text-left mt-60 w-[800px] ml-[60px] wulkan-display-bold">
            <h1 className="text-5xl lg:text-6xl mb-2 drop-shadow-lg text-left leading-tight">
              Together<br />
              We Build Better
            </h1>
            <p className="text-lg mb-6 drop-shadow-lg">Be part of a culture that values innovation, growth, and the power of good design.</p>
          </div>
        </div>
      </div>


      {/* Mobile Version */}

      <div>
        <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 overflow-hidden">
          <div className="relative h-full w-full p-2">
            {/* Rounded image only */}
            <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/CareeR%20MH.png" alt="Career Hero" />

            {/* top logo */}
            <div className="absolute top-2 -mt-5 -ml-1 z-10">
              <Image
                src="/whitelogo.png"
                alt="HUB Interior Logo"
                width={90}
                height={25}
                className="cursor-pointer w-[110px] h-[95px]"
                onClick={handleClick}
              />
            </div>

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-start justify-start px-3">
              <div className="flex flex-col text-left mt-54 pb-20 text-white mt-15 ml-5 wulkan-display-bold">
                <h1 className="text-3xl mb-1 drop-shadow-lg leading-tight">
                  Together<br />
                  We Build Better
                </h1>
                <p className="text-sm mb-3 drop-shadow-lg w-[330px]">Be part of a culture that values innovation, growth, and the power of good design.</p>
              </div>
            </div>
          </div>
          <OverlapNavBar />
        </div>
      </div>

    </div>
  );
};

export default ContactHeader;
