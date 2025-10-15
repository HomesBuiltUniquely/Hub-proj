"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex items-center justify-between px-8 py-4">
          <img src="LOGO.png" className="w-[100px] h-[40px]" />
          <div className="hidden md:flex gap-12 text-sm font-semibold text-white tracking-widest">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">EXPLORE ROOMS</a>
          </div>
          <button
            onClick={handleGetEstimate}
            className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow"
          >
            GET FREE ESTIMATE
          </button>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
          <h1 className="text-6xl manrope mb-6 drop-shadow-lg">
            Design Journal by HUB
          </h1>
          <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px]">
            Get inspired to live a more beautiful and happy life at home.
            Our mission to show how we are making each home more beautiful
            with easy-life tips and photos for any range of budgets.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl manrope-medium shadow">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 1280px Desktop Layout */}
      <div
        className="desktop-1280 max-w-[1280px] h-[800px] mx-auto rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimgblog.png')" }}
      >
        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-4 -mt-23 -ml-7">
          <Link href="/"><Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={250} /></Link>
          <div className="hidden md:flex gap-8 text-xs manrope-medium text-white tracking-widest">
            <a href="/">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">EXPLORE ROOMS</a>
          </div>
          <button
            onClick={handleGetEstimate}
            className="bg-orange-100 text-black px-3 py-1.5 rounded-lg manrope-medium shadow text-sm"
          >
            GET FREE ESTIMATE
          </button>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center pt-20 pb-10 text-white text-center">
          <h1 className="text-5xl manrope mb-5 drop-shadow-lg">
            Design Journal by HUB
          </h1>
          <p className="text-base manrope-medium mb-6 drop-shadow-lg w-[500px] max-w-[90%]">
            A collection of home interior blogs, trends, and guides to inspire your next project.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleGetEstimate}
              className="bg-yellow-300 text-black px-5 py-2 rounded-2xl manrope-medium shadow"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Version */}

      {/* <div className="w-full max-w-[425px] h-full block md:hidden mx-auto p-3">
        <div
          className="w-full max-w-[425px]  h-[490px] mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative block md:hidden"
          style={{ backgroundImage: "url('BLGHM.png')" }}
        >
          <div className="relative z-20 flex items-center justify-between mt-4 w-full max-w-[425px] ">
            <img src="/redlogo.png" className="w-[135px] h-[140px] pb-8 -mt-5 mb-7 pr-6"></img>
          </div>
        </div>
      </div> */}

      <div>
        <div className="md:hidden w-[full] max-w-[425px] mx-auto mb-5 mt-3">
          <div className="relative h-[full]  w-full">
            {/* Rounded image only */}

            <img src="BLGHM.png" alt="" />



            {/* top logo */}
            <div className="absolute top-2 -mt-7 -ml-1" >
              <Image src="/redlogo.png" alt="HUB Interior Logo" width={90} height={25} className="cursor-pointer" />
            </div>

            {/* text + cta */}

            <h2 className="manrope  leading-tight ">
              <div className="absolute w-screen top-40 text-white justify-items-center">
                <div className="text-3xl manrope leading-tight text-center mt-10">Design Journal by HUB</div>
                <p className="text-md manrope-medium text-center mt-5 mb- drop-shadow-lg w-[500px] max-w-[90%]">
                  A collection of home interior blogs, trends, and guides to inspire your next project.
                </p>
                <div>
                  <button
                    onClick={handleGetEstimate}
                    className="bg-yellow-300 text-xs text-black px-3 py-2 rounded-2xl manrope-medium shadow mt-3"
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </h2>


          </div>
        </div>

      </div>


    </div>
  );
};

export default ContactHeader;