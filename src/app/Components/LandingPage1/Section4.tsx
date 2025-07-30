'use client';

import { useState } from 'react';

export function Section4(){
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

  return(
      <div className="">
        <div className="hidden lg:block overflow-hidden">
          <div className="w-screen h-[950px] bg-[#f1f2f6] ml-10 ">
          <div className="text-[90px] font-light tracking-wide pl-10">Our Offerings</div>
                    <div className="mt-16 mr-20 flex justify-center ">
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide">
            <div>Material & Quality Assurance</div>
            <ul className="list-disc list-inside text-[18px] mt-5">
              <li className="manrope-medium ">Boiling Waterproof Plywood</li>
              <li className="manrope-medium pt-2">Moisture Resistant MDF</li>
              <li className="manrope-medium pt-2">HDHMR Shutters</li>
              <li className="manrope-medium pt-2">Premium Hardware</li>  
              <li className="manrope-medium pt-2">Verified Materials</li>  
              <li className="manrope-medium pt-2">Factory Visits Welcome</li>   
            </ul>
          </div>
          
          </div>
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl ml-8 text-5xl p-4 font-light pl-6 tracking-wide">
            <div>Budget<p>Assurance</p></div>
            <ul className="list-disc list-inside text-[18px] mt-5">
              <li className="manrope-medium ">Detailed Quotes</li>
              <li className="manrope-medium pt-2">Version History</li>
              <li className="manrope-medium pt-2">Design-Based Pricing</li>
              <li className="manrope-medium pt-2">No Hidden Costs</li>  
              <li className="manrope-medium pt-2">Fits Your Budget</li>  
              <li className="manrope-medium pt-2">Live Cost Tracking</li>   
            </ul>
          </div>
          </div>
          </div >
          <div className="mt-15 flex mr-20 justify-center">
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide">
            <div>10 Years <p> Waranty</p></div>
            <ul className="list-disc list-inside text-[18px] mt-5">
              <li className="manrope-medium ">10-Year Warranty on all modular woodwork</li>
              <li className="manrope-medium pt-3">1-Year Warranty on on-site services</li>
              <li className="manrope-medium pt-3">Extended Support even after warranty ends</li>
              </ul>
          </div>
          </div>
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl ml-8 text-5xl p-4 font-light pl-6 tracking-wide">
            <div>Smart Interior<p>Technology</p></div>
            <ul className="list-disc list-inside text-[18px] mt-5">
              <li className="manrope-medium ">SoftGlide Hardware</li>
              <li className="manrope-medium pt-2">BWP Core Protection</li>
              <li className="manrope-medium pt-2">ThermoShield Coating</li>
              <li className="manrope-medium pt-2">AquaBloc Edging</li>  
              <li className="manrope-medium pt-2">NanoGuard Laminate</li>  
              <li className="manrope-medium pt-2">DuraBuild Structure</li> 
              <li className="manrope-medium pt-2">ErgoCore Layout</li>   
            </ul>
          </div>  
          </div>
          </div>
      </div>
      </div>
              {/* Mobile version - Fixed padding/margin */}
        <div className="lg:hidden w-full bg-[#f1f2f6] pt-14 pb-6 overflow-hidden">
          <h1 className="text-[42px] tracking-wide font-light text-left mb-4 pl-4">
            Our Offerings
          </h1>
          
          <div className="space-y-3 px-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-1')}
              >
                <span className="text-[18px] font-medium text-gray-900 pr-4">
                Materials & Quality Assurance
                </span>
                <span className="text-gray-500 ml-2 flex-shrink-0 text-2xl">
                  {expandedCards['faq-1'] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                  }
                </span>
              </button>
              
              {expandedCards['faq-1'] && (
                <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                 <ul className="list-decimal pl-5 space-y-2 text-gray-800">
  <li className="font-bold">
    Boiling Waterproof Plywood
    <ul className="list-disc pl-5 manrope-medium">
      <li>(Greenply / Century) – 100% water-resistant</li>
    </ul>
  </li>
  <li className="font-bold">
    Moisture Resistant MDF
    <ul className="list-disc pl-5 manrope-medium">
      <li>Best for wardrobes & partitions</li>
    </ul>
  </li>     
  <li className="font-bold">
    HDHMR Shutters
    <ul className="list-disc pl-5 manrope-medium">
      <li>Soft-close (Action Tesa / Century)</li>
    </ul>
  </li>   
  <li className="font-bold">
    Premium Hardware
    <ul className="list-disc pl-5 manrope-medium">
      <li>Hettich, Blum & Ebco only</li>
    </ul>
  </li>       
  <li className="font-bold">
    Verified Materials
    <ul className="list-disc pl-5 manrope-medium">
      <li>Bills & tags provided</li>
    </ul>
  </li> 
  <li className="font-bold">
    Factory Visits Welcome
    <ul className="list-disc pl-5 manrope-medium">
      <li>Full transparency guaranteed</li>
    </ul>
  </li>             
</ul>

                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-2')}
              >
                <span className="text-[18px] font-medium text-gray-900 pr-4">
                Budget Assurance
                </span>
                <span className="text-gray-500 ml-2 flex-shrink-0 text-2xl">
                  {expandedCards['faq-2'] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>}
                </span>
              </button>
              
              {expandedCards['faq-2'] && (
                <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                  <ul className="list-decimal pl-5 space-y-2 text-gray-800">
  <li className='font-bold'>
    Detailed Quotes
    <ul className="list-disc pl-5 manrope-medium">
      <li>All sizes, materials & brands listed</li>
    </ul>
  </li>
  <li className='font-bold'>
    Version History
    <ul className="list-disc pl-5 manrope-medium">
      <li>Compare quote revisions easily</li>
    </ul>
  </li>
  <li className='font-bold'>
    Design-Based Pricing
    <ul className="list-disc pl-5 manrope-medium">
      <li>95% accurate, based on final 3D design</li>
    </ul>
  </li>
  <li className='font-bold'>
    No Hidden Costs
    <ul className="list-disc pl-5 manrope-medium">
      <li>Clear, fixed pricing before execution</li>
    </ul>
  </li>
  <li className='font-bold'>
    Fits Your Budget
    <ul className="list-disc pl-5 manrope-medium">
      <li>Custom material & design options</li>
    </ul>
  </li>
  <li className='font-bold'>
    Live Cost Tracking
    <ul className="list-disc pl-5 manrope-medium">
      <li>Transparent updates during execution</li>
    </ul>
  </li>
</ul>

                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-3')}
              >
                <span className="text-[18px] font-medium text-gray-900 pr-4">
                10 Year Warranty
                </span>
                <span className="text-gray-500 ml-2 flex-shrink-0 text-2xl">
                  {expandedCards['faq-3'] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>}
                </span>
              </button>
              
              {expandedCards['faq-3'] && (
                <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                 <ul className="list-decimal pl-5 space-y-2 text-gray-800">
  <li className="font-bold">
    10-Year Warranty
    <ul className="list-disc pl-5 manrope-medium">
      <li>10-Year Warranty on all modular woodwork</li>
    </ul>
  </li>
  <li className="font-bold">
    1-Year Warranty
    <ul className="list-disc pl-5 manrope-medium">
      <li>On-site services: painting, plumbing, electrical</li>
    </ul>
  </li>
  <li className="font-bold">
    Extended Support
    <ul className="list-disc pl-5 manrope-medium">
      <li>Even after warranty ends</li>
    </ul>
  </li>
</ul>

                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-4')}
              >
                <span className="text-[18px] font-medium text-gray-900 pr-4">
                Smart Interior Technologies
                </span>
                <span className="text-gray-500 ml-2 flex-shrink-0 text-2xl">
                  {expandedCards['faq-4'] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>}
                </span>
              </button>
              
              {expandedCards['faq-4'] && (
                <div className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                  <ul className="list-decimal pl-5 space-y-2 text-gray-800">
  <li className='font-bold'>
    SoftGlide Hardware
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Smooth, silent drawer and shutter operation with German-engineered soft-close fittings</li>
    </ul>
  </li>
  <li className='font-bold'>
    BWP Core Protection
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Boiling Water Proof plywood with anti-borer treatment for long-lasting durability</li>
    </ul>
  </li>
  <li className='font-bold'>
    ThermoShield Coating
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Heat-resistant laminate that protects surfaces from high kitchen temperatures</li>
    </ul>
  </li>
  <li className='font-bold'>
    AquaBloc Edging
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Moisture-sealed edges that prevent water damage in cabinets and wardrobes</li>
    </ul>
  </li>
  <li className='font-bold'>
    NanoGuard Laminate
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Anti-fingerprint, stain-resistant laminate for easy maintenance in high-use areas</li>
    </ul>
  </li>
  <li className='font-bold'>
    DuraBuild Structure
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>High-strength cabinet framework designed for superior load-bearing and longevity</li>
    </ul>
  </li>
  <li className='font-bold'>
    ErgoCore Layout
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Ergonomically optimized furniture design that improves comfort and movement flow</li>
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