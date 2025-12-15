'use client';

import { useState } from 'react';

export function Section4() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({


    'technology-mobile': true // Last card always open by default
  });

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => {
      // If the clicked card is already expanded, close it
      if (prev[cardId]) {
        return { [cardId]: false };
      }
      // If the clicked card is closed, expand it and close all others
      return { [cardId]: true };
    });
  };




  return (
    <div>

      <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        
        /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }


          /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }
          
      `}</style>


      {/* Desktop Version */}

      {/* 2560 Version */}

      {/* DESKTOP 2560 */}
      <div className="desktop-2560 hidden lg:block bg-[#f1f2f6] px-20 py-16">

        <h2 className="text-[48px] manrope tracking-wide mb-10">
          Our <span className="text-red-600">Offerings</span>
        </h2>

        {/* 2-row grid with 4 cards */}
        <div className="grid grid-cols-2 gap-x-25 gap-y-10">


          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-1")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Material & Quality Assurance
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-1"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Boiling Waterproof Plywood
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>(Greenply / Century) – 100% water-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Moisture Resistant MDF
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Best for wardrobes & partitions</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    HDHMR Shutters
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Soft-close (Action Tesa / Century)</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Premium Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Hettich, Blum & Ebco only</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Verified Materials
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Bills & tags provided</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Factory Visits Welcome
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Full transparency guaranteed</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-2")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Budget Assurance
              <span className="text-2xl">
                {expandedCards["desk-2"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-2"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Detailed Quotes
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>All sizes, materials & brands listed</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Version History
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Compare quote revisions easily</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Design-Based Pricing
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>95% accurate, based on final 3D design</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    No Hidden Costs
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Clear, fixed pricing before execution</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Fits Your Budget
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Custom material & design options</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Live Cost Tracking
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Transparent updates during execution</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-3")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              10 Years Warranty
              <span className="text-2xl">
                {expandedCards["desk-3"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-3"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    10-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>On all modular woodwork</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    1-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Painting, plumbing, electrical</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Extended Support
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Even after warranty ends</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-4")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Smart Interior Technology
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-4"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    SoftGlide Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Smooth, silent soft-close operation</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    BWP Core Protection
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof plywood with anti-borer treatment</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ThermoShield Coating
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Heat-resistant surfaces</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    AquaBloc Edging
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof protected edges</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    NanoGuard Laminate
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Anti-fingerprint, stain-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    DuraBuild Structure
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>High-strength cabinet structures</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ErgoCore Layout
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Optimized ergonomic furniture design</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>



        {/* 1920 Version */}

         <div className="desktop-1920 hidden lg:block bg-[#f1f2f6] px-20 py-20">

        <h2 className="text-[48px] manrope tracking-wide mb-10">
          Our <span className="text-red-600">Offerings</span>
        </h2>

        {/* 2-row grid with 4 cards */}
        <div className="grid grid-cols-2 gap-x-25 gap-y-10">


          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-1")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Material & Quality Assurance
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-1"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Boiling Waterproof Plywood
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>(Greenply / Century) – 100% water-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Moisture Resistant MDF
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Best for wardrobes & partitions</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    HDHMR Shutters
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Soft-close (Action Tesa / Century)</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Premium Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Hettich, Blum & Ebco only</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Verified Materials
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Bills & tags provided</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Factory Visits Welcome
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Full transparency guaranteed</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-2")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Budget Assurance
              <span className="text-2xl">
                {expandedCards["desk-2"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-2"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Detailed Quotes
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>All sizes, materials & brands listed</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Version History
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Compare quote revisions easily</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Design-Based Pricing
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>95% accurate, based on final 3D design</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    No Hidden Costs
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Clear, fixed pricing before execution</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Fits Your Budget
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Custom material & design options</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Live Cost Tracking
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Transparent updates during execution</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-3")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              10 Years Warranty
              <span className="text-2xl">
                {expandedCards["desk-3"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-3"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    10-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>On all modular woodwork</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    1-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Painting, plumbing, electrical</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Extended Support
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Even after warranty ends</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-4")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Smart Interior Technology
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-4"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    SoftGlide Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Smooth, silent soft-close operation</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    BWP Core Protection
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof plywood with anti-borer treatment</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ThermoShield Coating
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Heat-resistant surfaces</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    AquaBloc Edging
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof protected edges</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    NanoGuard Laminate
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Anti-fingerprint, stain-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    DuraBuild Structure
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>High-strength cabinet structures</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ErgoCore Layout
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Optimized ergonomic furniture design</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>



      {/* 1280 Version */}

         <div className="desktop-1280 hidden lg:block bg-[#f1f2f6] px-15 py-15 mt-10">

        <h2 className="text-[48px] manrope tracking-wide mb-10">
          Our <span className="text-red-600">Offerings</span>
        </h2>

        {/* 2-row grid with 4 cards */}
        <div className="grid grid-cols-2 gap-x-25 gap-y-10">


          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-1")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Material & Quality Assurance
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-1"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Boiling Waterproof Plywood
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>(Greenply / Century) – 100% water-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Moisture Resistant MDF
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Best for wardrobes & partitions</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    HDHMR Shutters
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Soft-close (Action Tesa / Century)</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Premium Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Hettich, Blum & Ebco only</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Verified Materials
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Bills & tags provided</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Factory Visits Welcome
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Full transparency guaranteed</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-2")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Budget Assurance
              <span className="text-2xl">
                {expandedCards["desk-2"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-2"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    Detailed Quotes
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>All sizes, materials & brands listed</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Version History
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Compare quote revisions easily</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Design-Based Pricing
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>95% accurate, based on final 3D design</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    No Hidden Costs
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Clear, fixed pricing before execution</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Fits Your Budget
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Custom material & design options</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Live Cost Tracking
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Transparent updates during execution</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-3")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              10 Years Warranty
              <span className="text-2xl">
                {expandedCards["desk-3"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-3"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    10-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>On all modular woodwork</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    1-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Painting, plumbing, electrical</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    Extended Support
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Even after warranty ends</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <button
              onClick={() => toggleCard("desk-4")}
              className="w-full flex justify-between items-center text-2xl manrope pb-3"
            >
              Smart Interior Technology
              <span className="text-2xl">
                {expandedCards["desk-1"] ? "-" : "+"}
              </span>

            </button>

            <div className="border-b-2 border-red-400"></div>

            {expandedCards["desk-4"] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">
                    SoftGlide Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Smooth, silent soft-close operation</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    BWP Core Protection
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof plywood with anti-borer treatment</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ThermoShield Coating
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Heat-resistant surfaces</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    AquaBloc Edging
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof protected edges</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    NanoGuard Laminate
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Anti-fingerprint, stain-resistant</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    DuraBuild Structure
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>High-strength cabinet structures</li>
                    </ul>
                  </li>

                  <li className="manrope">
                    ErgoCore Layout
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Optimized ergonomic furniture design</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>



      {/* Mobile version - Fixed padding/margin */}
      {/* MOBILE – OUR OFFERINGS */}
      <div className="lg:hidden w-full bg-[#f1f2f6] pt-5  overflow-hidden">

        <h1 className="text-4xl manrope-medium tracking-wide text-left mb-8 mt-4 pl-4">
          Our <span className="text-red-600">Offerings</span>
        </h1>

        <div className="space-y-3 px-4 mt-2">

          {/* OFFERING 1 */}
          <div className="bg-white rounded-xl p-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleCard('off-1')}
            >
              <span className="text-[18px] manrope text-gray-900 pr-4">
                Materials & Quality Assurance
              </span>

              {/* + / - */}
              <span className="text-gray-700 ml-2 text-2xl">
                {expandedCards['off-1'] ? "-" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            {expandedCards['off-1'] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">Boiling Waterproof Plywood
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>(Greenply / Century) – 100% water-resistant</li>
                    </ul>
                  </li>
                  <li className="manrope">Moisture Resistant MDF
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Best for wardrobes & partitions</li>
                    </ul>
                  </li>
                  <li className="manrope">HDHMR Shutters
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Soft-close (Action Tesa / Century)</li>
                    </ul>
                  </li>
                  <li className="manrope">Premium Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Hettich, Blum & Ebco only</li>
                    </ul>
                  </li>
                  <li className="manrope">Verified Materials
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Bills & tags provided</li>
                    </ul>
                  </li>
                  <li className="manrope">Factory Visits Welcome
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Full transparency guaranteed</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* OFFERING 2 */}
          <div className="bg-white rounded-xl p-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleCard('off-2')}
            >
              <span className="text-[18px] manrope text-gray-900 pr-4">
                Budget Assurance
              </span>

              <span className="text-gray-700 ml-2 text-2xl">
                {expandedCards['off-2'] ? "-" : "+"}
              </span>
            </button>

            {expandedCards['off-2'] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">Detailed Quotes
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>All sizes, materials & brands listed</li>
                    </ul>
                  </li>
                  <li className="manrope">Version History
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Compare quote revisions easily</li>
                    </ul>
                  </li>
                  <li className="manrope">Design-Based Pricing
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>95% accurate, based on final 3D design</li>
                    </ul>
                  </li>
                  <li className="manrope">No Hidden Costs
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Clear, fixed pricing before execution</li>
                    </ul>
                  </li>
                  <li className="manrope">Fits Your Budget
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Custom material & design options</li>
                    </ul>
                  </li>
                  <li className="manrope">Live Cost Tracking
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Transparent updates during execution</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* OFFERING 3 */}
          <div className="bg-white rounded-xl p-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleCard('off-3')}
            >
              <span className="text-[18px] manrope text-gray-900 pr-4">
                10 Year Warranty
              </span>

              <span className="text-gray-700 ml-2 text-2xl">
                {expandedCards['off-3'] ? "-" : "+"}
              </span>
            </button>

            {expandedCards['off-3'] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">10-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>On all modular woodwork</li>
                    </ul>
                  </li>
                  <li className="manrope">1-Year Warranty
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Painting, plumbing, electrical</li>
                    </ul>
                  </li>
                  <li className="manrope">Extended Support
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Even after warranty ends</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* OFFERING 4 */}
          <div className="bg-white rounded-xl p-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleCard('off-4')}
            >
              <span className="text-[18px] manrope text-gray-900 pr-4">
                Smart Interior Technologies
              </span>

              <span className="text-gray-700 ml-2 text-2xl">
                {expandedCards['off-4'] ? "-" : "+"}
              </span>
            </button>

            {expandedCards['off-4'] && (
              <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                <ul className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li className="manrope">SoftGlide Hardware
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Smooth, silent soft-close operation</li>
                    </ul>
                  </li>
                  <li className="manrope">BWP Core Protection
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof plywood with anti-borer treatment</li>
                    </ul>
                  </li>
                  <li className="manrope">ThermoShield Coating
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Heat-resistant surfaces</li>
                    </ul>
                  </li>
                  <li className="manrope">AquaBloc Edging
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Waterproof protected edges</li>
                    </ul>
                  </li>
                  <li className="manrope">NanoGuard Laminate
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Anti-fingerprint, stain-resistant</li>
                    </ul>
                  </li>
                  <li className="manrope">DuraBuild Structure
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>High-strength cabinet structures</li>
                    </ul>
                  </li>
                  <li className="manrope">ErgoCore Layout
                    <ul className="list-disc pl-5 manrope-medium">
                      <li>Optimized ergonomic furniture design</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>


    </div>
  )
}