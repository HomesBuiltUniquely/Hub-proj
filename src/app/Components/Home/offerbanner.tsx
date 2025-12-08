'use client';

import React from "react";
import Image from "next/image";

const OfferBanner: React.FC = () => {
    return (

        <div>

            <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560,
        .mobile-small,
        .mobile-large {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

       
         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1921px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1922px) {
          .desktop-2560 {
            display: block !important;
          }
        }

        /* Show small mobile version for screens 320px to 479px */
        @media (min-width: 320px) and (max-width: 360px) {
          .mobile-small {
            display: block;
          }
        }

        /* Show large mobile version for screens 480px to 767px */
        @media (min-width: 361px) and (max-width: 767px) {
          .mobile-large {
            display: block;
          }
        }
      `}</style>

            {/* 2560 Version */}
           <div className="desktop-2560  mx-auto px-20">
                <div className="relative w-full h-[240px] mb-10 overflow-hidden rounded-3xl">
                    <Image
                        src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Offer%20banner.webp"
                        alt="offer banner"
                        fill
                        className="object-center"
                    />
                </div>
            </div>


            {/* 1920 Version */}
            <div className="desktop-1920  mx-auto px-20">
                <div className="relative w-full h-[240px] mb-10 overflow-hidden rounded-3xl">
                    <Image
                        src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Offer%20banner.webp"
                        alt="offer banner"
                        fill
                        className="object-center"
                    />
                </div>
            </div>


            {/* 1280 Version */}
           <div className="desktop-1280  mx-auto px-15">
                <div className="relative w-full h-[200px] mb-10 overflow-hidden rounded-3xl">
                    <Image
                        src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Offer%20banner.webp"
                        alt="offer banner"
                        fill
                        className="object-center"
                    />
                </div>
            </div>


            {/* mobile-small */}

            <div className="mobile-small  mx-auto px-3">
                <div className="relative w-full h-[280px] mb-5 mt-5 overflow-hidden rounded-3xl">
                    <Image
                        src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Offer%20bannerm.png"
                        alt="offer banner"
                        fill
                        className="object-center"
                    />
                </div>
            </div>


            {/* mobile-large */}

            <div className="mobile-large  mx-auto px-3">
                <div className="relative w-full h-[280px] mb-5 mt-5  overflow-hidden rounded-3xl">
                    <Image
                        src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/Offer%20bannerm.png"
                        alt="offer banner"
                        fill
                        className="object-center"
                    />
                </div>
            </div>


        </div>

    )
};

export default OfferBanner;
