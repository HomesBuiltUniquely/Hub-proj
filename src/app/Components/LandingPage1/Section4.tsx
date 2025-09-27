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
          <div className="text-[56px] manrope-medium tracking-wide text-center mt-4">Our Offerings</div>
                    <div className="mt-16 mr-20 flex justify-center ">
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Material & Quality Assurance</div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
              <li className="manrope-medium pb-1">Boiling Waterproof Plywood</li>
              <li className="manrope-medium pt-2 pb-1">Moisture Resistant MDF</li>
              <li className="manrope-medium pt-2 pb-1">HDHMR Shutters</li>
              <li className="manrope-medium pt-2 pb-1">Premium Hardware</li>  
              <li className="manrope-medium pt-2 pb-1">Verified Materials</li>  
              <li className="manrope-medium pt-2 pb-1">Factory Visits Welcome</li>   
            </ul>
          </div>
          
          </div>
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl ml-8 text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Budget<p>Assurance</p></div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
              <li className="manrope-medium pb-2">Detailed Quotes</li>
              <li className="manrope-medium pb-2">Version History</li>
              <li className="manrope-medium pb-2">Design-Based Pricing</li>
              <li className="manrope-medium pb-2">No Hidden Costs</li>  
              <li className="manrope-medium pb-2">Fits Your Budget</li>  
              <li className="manrope-medium pb-2">Live Cost Tracking</li>   
            </ul>
          </div>
          </div>
          </div >
          <div className="mt-15 flex mr-20 justify-center">
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>10 Years <p> Waranty</p></div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
              <li className="manrope-medium ">10-Year Warranty on all modular woodwork</li>
              <li className="manrope-medium pt-3">1-Year Warranty on on-site services</li>
              <li className="manrope-medium pt-3">Extended Support even after warranty ends</li>
              </ul>
          </div>
          </div>
          <div className="">
          <div className="w-[580px] h-[330px] bg-white rounded-4xl ml-8 text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Smart Interior<p>Technology</p></div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
              <li className="manrope-medium pb-2">SoftGlide Hardware</li>
              <li className="manrope-medium pb-2">BWP Core Protection</li>
              <li className="manrope-medium pb-2">ThermoShield Coating</li>
              <li className="manrope-medium pb-2">AquaBloc Edging</li>  
              <li className="manrope-medium pb-2">NanoGuard Laminate</li>  
              <li className="manrope-medium pb-2">DuraBuild Structure</li> 
              <li className="manrope-medium pb-2">ErgoCore Layout</li>   
            </ul>
          </div>  
          </div>
          </div>
      </div>
      </div>
              {/* Mobile version - Fixed padding/margin */}
        <div className="lg:hidden w-full bg-[#f1f2f6] pt-10 pb-6 overflow-hidden">
          <div className='flex'>
          <div className="w-0.75 h-18 bg-[#ebd657]  ml-8"></div>
          <h1 className="text-4xl manrope-medium tracking-wide text-left mb-8 mt-4 pl-3">
            Our Offerings
          </h1>
          </div>
          
          <div className="space-y-3 px-4 mt-2">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-1')}
              >
                <span className="text-[18px] manrope text-gray-900 pr-4">
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

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-2')}
              >
                <span className="text-[18px] manrope text-gray-900 pr-4">
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
  <li className='manrope'>
    Detailed Quotes
    <ul className="list-disc pl-5 manrope-medium">
      <li>All sizes, materials & brands listed</li>
    </ul>
  </li>
  <li className='manrope'>
    Version History
    <ul className="list-disc pl-5 manrope-medium">
      <li>Compare quote revisions easily</li>
    </ul>
  </li>
  <li className='manrope'>
    Design-Based Pricing
    <ul className="list-disc pl-5 manrope-medium">
      <li>95% accurate, based on final 3D design</li>
    </ul>
  </li>
  <li className='manrope'>
    No Hidden Costs
    <ul className="list-disc pl-5 manrope-medium">
      <li>Clear, fixed pricing before execution</li>
    </ul>
  </li>
  <li className='manrope'>
    Fits Your Budget
    <ul className="list-disc pl-5 manrope-medium">
      <li>Custom material & design options</li>
    </ul>
  </li>
  <li className='manrope'>
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
                <span className="text-[18px] manrope text-gray-900 pr-4">
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
  <li className="manrope">
    10-Year Warranty
    <ul className="list-disc pl-5 manrope-medium">
      <li>10-Year Warranty on all modular woodwork</li>
    </ul>
  </li>
  <li className="manrope">
    1-Year Warranty
    <ul className="list-disc pl-5 manrope-medium">
      <li>On-site services: painting, plumbing, electrical</li>
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

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl p-4">
              <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-4')}
              >
                <span className="text-[18px] manrope text-gray-900 pr-4">
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
  <li className='manrope'>
    SoftGlide Hardware
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Smooth, silent drawer and shutter operation with German-engineered soft-close fittings</li>
    </ul>
  </li>
  <li className='manrope'>
    BWP Core Protection
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Boiling Water Proof plywood with anti-borer treatment for long-lasting durability</li>
    </ul>
  </li>
  <li className='manrope'>
    ThermoShield Coating
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Heat-resistant laminate that protects surfaces from high kitchen temperatures</li>
    </ul>
  </li>
  <li className='manrope'>
    AquaBloc Edging
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Moisture-sealed edges that prevent water damage in cabinets and wardrobes</li>
    </ul>
  </li>
  <li className='manrope'>
    NanoGuard Laminate
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>Anti-fingerprint, stain-resistant laminate for easy maintenance in high-use areas</li>
    </ul>
  </li>
  <li className='manrope'>
    DuraBuild Structure
    <ul className="list-disc pl-5">
      <li className='manrope-medium'>High-strength cabinet framework designed for superior load-bearing and longevity</li>
    </ul>
  </li>
  <li className='manrope'>
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