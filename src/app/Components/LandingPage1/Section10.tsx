'use client';

import { useState } from 'react';

export function Section10(){
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
        <div className="text-[56px] manrope tracking-wide text-center mt-4">Our Interior Solution</div>
                    <div className="mt-16 mr-20 flex justify-center manrope-bold">
        <div className="">
        <div className="w-[580px] h-[330px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Essential - Core</div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
            <li className="manrope-medium pb-1">Kitchen ( Base + Wall ) Unit</li>
            <li className="manrope-medium pt-2 pb-1">Wardrobe ( Base + Loft ) Unit</li>
            <li className="manrope-medium pt-2 pb-1">TV Unit</li> 
            </ul>
        </div>
        
        </div>
        <div className="">
        <div className="w-[580px] h-[280px] bg-white rounded-4xl ml-8 text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Standard - Signature</div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
            <li className="manrope-medium pb-1">Kitchen ( Base + Wall + Loft ) Unit</li>
            <li className="manrope-medium pt-2 pb-1">Wardrobe ( Base + Loft ) Unit</li>
            <li className="manrope-medium pt-2 pb-1">TV Unit</li>
            <li className="manrope-medium pb-2">Crockary Unit</li>
            <li className="manrope-medium pb-2">Pooja Unit</li>
            <li className="manrope-medium pb-2">Vanity for Washroom</li>
            </ul>
        </div>
        </div>
        </div >
        <div className="mt-15 flex mr-20 justify-center">
        <div className="">
        <div className="w-[580px] h-[380px] bg-white rounded-4xl text-5xl p-4 font-light pl-6 tracking-wide manrope-medium">
            <div>Luxury - Elite</div>
            <ul className="list-decimal list-inside text-[18px] mt-5">
            <li className="manrope-medium pb-1">Kitchen ( Base + Wall + Loft ) with Tall Unit</li>
            <li className="manrope-medium pt-3">Utility ( Base + Wall ) Unit</li>
            <li className="manrope-medium pt-3">Living Room ( TV Unit + Partition + Art Work + False <span className="pl-6">Ceiling with Electrical + Painting + Wallpaper )</span></li>
            <li className="manrope-medium pt-3 text-left">Bedroom ( Wardrobes ( Base + Loft ), Study Unit, <span className="pl-6">False Ceiling with Electrical, TV Unit, Bed, Bedside</span> <span className="pl-6"> Table, Headboard with Electrical )</span></li>
            <li className="manrope-medium pt-3">Crockary Unit</li>
            <li className="manrope-medium pt-3">Pooja Unit</li>
            <li className="manrope-medium pt-3">Vanity for Washroom</li>
            <li className="manrope-medium pt-3">Smart Home Automation</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </div>
            {/* Mobile version - Fixed padding/margin */}
        <div className="lg:hidden w-full bg-[#f1f2f6] pt-14 pb-6 overflow-hidden">
        <div className='flex'>
        <div className="w-0.75 h-24 bg-[#ebd657]  mb-6 ml-8 " ></div>
        <h1 className="w-full text-4xl manrope-medium tracking-wide text-left mb-8 my-auto pl-3">
            Our Interior <div> Solution</div>
        </h1>
        </div>
        
        <div className="space-y-3 px-4" >
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl p-4">
            <button
                className="w-full flex justify-between items-center text-left group"
                onClick={() => toggleCard('faq-1')}
            >
                <span className="text-[18px] manrope text-gray-900 pr-4">
                Essential - Core
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
    <li className="manrope-medium">
    Kitchen ( Base + Wall ) Unit
    </li>
    <li className="manrope-medium">
    Wardrobe ( Base + Loft ) Unit
    </li>
    <li className="manrope-medium">
    TV Unit
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
                Standard - Signature
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
    <li className='manrope-medium'>
    Kitchen ( Base + Wall + Loft ) Unit
    </li>
    <li className='manrope-medium'>
    Wardrobe ( Base + Loft ) Unit
    </li>
    <li className='manrope-medium'>
    TV Unit
    </li>
    <li className='manrope-medium'>
    Crockery Unit
    </li>
    <li className='manrope-medium'>
    Pooja Unit
    </li>
    <li className='manrope-medium'>
    Vanity for Washroom
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
                Luxury - Elite
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
    <li className="manrope-medium">
    Kitchen ( Base + Wall + Loft ) with Tall Unit
    </li>
    <li className="manrope-medium">
    Utility ( Base + Wall ) Unit
    </li>
    <li className="manrope-medium">
    Living Room ( TV Unit + Partition + Art Work + False Ceiling with Electrical + Painting + Wallpaper )
    </li>
    <li className="manrope-medium">
    Bedroom ( Wardrobes ( Base + Loft ), Study Unit, False Ceiling with Electrical, TV Unit, Bed, Bedside Table, Headboard with Electrical)
    </li>
    <li className="manrope-medium ">Crockery Unit</li>
    <li className="manrope-medium  ">Pooja Unit</li>
    <li className="manrope-medium pb-2">Vanity for Washroom</li>
    <li className="manrope-medium ">Smart Home Automation</li>
</ul>


                </div>
                )}
            </div>
            </div>
        </div>
    </div>
    )
}