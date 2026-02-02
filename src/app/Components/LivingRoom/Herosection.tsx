"use client"

import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import { useRouter } from "next/navigation";
import OverlapNavBar from "../OverlapNavBar";
import MagneticButton from "../Home/MagneticButton";



const ContactHeader: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  const calculate = () => {
    router.push('/Calculator');
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


      <style jsx>{`
        /* Hide all by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* 1920px layout for large desktops (1440px–1920px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        /* 2560px layout for extra large desktops (>1920px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }
      `}</style>

      <div>

        {/* Desktop Version */}

        {/* 2560 Version */}

        <div className="desktop-2560">
          <div className="hidden md:block w-full h-[900px] overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/All_HeroSection/living_hero.png')" }}></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent z-[5]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5]"></div>

            {/* Navbar */}
            <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">
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
                Living room interiors
              </h1>
              <p className="text-lg mb-6 drop-shadow-lg">
                Stylish and functional living room interiors designed to reflect your lifestyle.
              </p>
              <MagneticButton 
                text="Get free quote"
                onClick={calculate}
              />
            </div>
          </div>
        </div>

      </div>


      {/* 1920 version */}

      <div className="desktop-1920">
        <div className="hidden md:block w-full h-[900px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/All_HeroSection/living_hero.png')" }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent z-[5]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5]"></div>

          {/* Navbar */}
          <div className="relative z-10 flex items-center mt-5 justify-between h-[80px]">
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
              Living room interiors
            </h1>
            <p className="text-lg mb-6 drop-shadow-lg">
              Stylish and functional living room interiors designed to reflect your lifestyle.
            </p>
            <MagneticButton 
              text="Get free quote"
              onClick={calculate}
            />
          </div>
        </div>
      </div>




      {/* 1280 version */}

      <div className="desktop-1280">
        <div className="hidden md:block w-full h-[800px] overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://hubinterior-quote-2026.s3.ap-south-2.amazonaws.com/All_HeroSection/living_hero.png')" }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent z-[5]"></div>
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
              Living room interiors
            </h1>
            <p className="text-lg mb-6 drop-shadow-lg">
              Stylish and functional living room interiors designed to reflect your lifestyle.
            </p>
            <MagneticButton 
              text="Get free quote"
              onClick={calculate}
            />
          </div>
        </div>
      </div>








      {/* ===== MOBILE VERSION ===== */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus mt-3 mb-10">
        <div className="relative h-[450] w-[full] ">
          {/* Rounded image only */}

          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/LivingRoom%20MH.png"
              alt="Living Room"
              fill
              priority
              className="object-center"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/whitelogo.png" alt="HUB Interior Logo" width={90} height={50} className="cursor-pointer w-[110px] h-[95px]" />
          </div>


          {/* text + cta */}

          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="wulkan-display-bold  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Living Room Interiors
            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Stylish and functional living room interiors designed to reflect your lifestyle.
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <MagneticButton 
              text="Get free quote"
              onClick={calculate}
            />
          </div>
          <OverlapNavBar />
        </div>
      </div>


      {/* Mobile Version (300px to 359px) */}
      <div className="md:hidden p-3 mk-mobile-300 mobile-300 mb-10">
        <div className="relative h-[450] w-[100%]  mt-3">
          {/* Rounded image only */}
          <div className="absolute inset-0 rounded-4xl overflow-hidden">
            <Image
              src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/LivingRoom%20MH.png"
              alt="Living Room"
              fill
              priority
              className="object-center"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* top logo */}
          <div className="absolute top-2 -mt-7 -mx-3 " onClick={handleClick}>
            <Image src="/whitelogo.png" alt="HUB Interior Logo" width={82} height={50} className="cursor-pointer w-[110px] h-[95px]" />
          </div>

          {/* text + cta */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            <h2 className="wulkan-display-bold  text-4xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Living Room Interiors
            </h2>
            <p className="mt-2 text-[13px] manrope-medium opacity-90">
              Stylish and functional living room interiors designed to reflect your lifestyle.
            </p>
          </div>
          {/* CTA overlapping, positioned above image */}
          <div className="absolute left-6 -bottom-5 z-20">
            <MagneticButton 
              text="Get free quote"
              onClick={calculate}
            />
          </div>
        </div>
        <OverlapNavBar />
      </div>

    </div>
  )
};

export default ContactHeader;
