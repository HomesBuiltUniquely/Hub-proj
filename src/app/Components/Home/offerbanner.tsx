'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OfferBanner: React.FC = () => {

  const router = useRouter();

  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

  return (
    <div>
      <style jsx>{`
        .desktop-1280,
        .desktop-1920,
        .desktop-2560,
        .mobile-small,
        .mobile-large {
          display: none;
        }

        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        @media (min-width: 1440px) and (max-width: 1921px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        @media (min-width: 1922px) {
          .desktop-2560 {
            display: block !important;
          }
        }

        @media (min-width: 320px) and (max-width: 360px) {
          .mobile-small {
            display: block;
          }
        }

        @media (min-width: 361px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>
      

      {/* 2560 Version */}
      <div className="desktop-2560 mx-auto px-20">
        <div className="relative w-[1400px] h-[340px] mb-10 mt-20 overflow-hidden rounded-3xl">
          <Image
            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/offer%20banner%20d.png"
            alt="offer banner"
            fill
            className="object-center"
          />

          <button
            onClick={handleGetEstimate}
            className="absolute bottom-6 left-16 bg-[#ef0101] manrope hover:bg-[#ebd457] text-[18px] tracking-wide text-white px-4 py-2 rounded-4xl shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 z-10"
          >
            GET FREE ESTIMATE
          </button>
        </div>
      </div>

      {/* 1920 Version */}
      <div className="desktop-1920 mx-auto px-18">
        <div className="relative w-full h-[340px] mb-20 mt-10 overflow-hidden rounded-3xl">
          <Image
            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/offer%20banner%20d.png"
            alt="offer banner"
            fill
            className="object-center"
          />

          <button
            onClick={handleGetEstimate}
            className="absolute bottom-9 left-14 bg-[#ef0101] manrope hover:bg-[#ebd457] text-white px-4 py-2 rounded-4xl shadow-lg hover:shadow-2xl text-[18px] tracking-wide transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 z-10"
          >
            GET FREE ESTIMATE
          </button>
        </div>
      </div>

      {/* 1280 Version */}
      <div className="desktop-1280 mx-auto px-13">
        <div className="relative w-full h-[280px] mb-15 overflow-hidden rounded-3xl">
          <Image
            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/offer%20banner%20d.png"
            alt="offer banner"
            fill
            className="object-center"
          />

          <button
            onClick={handleGetEstimate}
            className="absolute bottom-8 left-13 bg-[#ef0101] manrope hover:bg-[#ebd457] text-[18px] tracking-wide text-white px-4 py-2 rounded-4xl shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg transition-shadow duration-200 z-10"
          >
            GET FREE ESTIMATE
          </button>
        </div>
      </div>

      {/* mobile-small */}
      <div className="mobile-small mx-auto px-3">
        <div className="relative w-full h-[280px] mb-5 mt-5 overflow-hidden rounded-3xl">
          <Image
            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/OFFER%20BANNER%20MOB.png"
            alt="offer banner"
            fill
            className="object-center"
          />
        </div>
      </div>

      {/* mobile-large */}
      <div className="mobile-large mx-auto px-3">
        <div className="relative w-full h-[280px] mb-5 mt-5 overflow-hidden rounded-3xl">
          <Image
            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/OFFER%20BANNER%20MOB.png"
            alt="offer banner"
            fill
            className="object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
