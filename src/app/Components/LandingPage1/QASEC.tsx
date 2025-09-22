'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    "question": "1. What is the interior design cost in Bangalore for 2BHK, 3BHK, 4BHK, Villa, and Kitchen?",
    "answer": "Interior design cost in Bangalore depends on the home size, design complexity, and materials used. At HUB Interior, we offer transparent pricing with value-packed packages:\n2BHK interior design: ₹3.0 Lakhs onwards\n3BHK interior design: ₹4.0 Lakhs onwards\n4BHK / Villa interiors: ₹5.5 Lakhs onwards\nModular kitchen interiors: ₹1.25 Lakhs onwards\nWe focus on affordable interior design without compromising on quality, finish, or craftsmanship."
},
{
    "question": "2. What is the 2BHK interior design cost in Bangalore?",
    "answer": "The 2BHK interior design cost in Bangalore typically ranges from ₹3.5 Lakhs to ₹10 Lakhs. At HUB Interior, our 2BHK interiors start at ₹3.0 Lakhs, covering everything from modular kitchen design to wardrobes, living room and bedroom interiors. You also get No Cost EMI options and flexible interior design packages."
},
{
    "question": "3. How much does 3BHK interior design cost in Bangalore?",
    "answer": "A 3BHK interior design in Bangalore can cost anywhere between ₹4.5 Lakhs to ₹15 Lakhs depending on the finish and customization. We offer full 3BHK interiors starting at ₹4.0 Lakhs including smart wardrobes, kitchen interior design, and optimized storage. Use our interior cost calculator to estimate your dream home's cost."
},
{
    "question": "4. What is the 4BHK / Villa interior design cost in Bangalore?",
    "answer": "4BHK / Villa interior design usually demands premium materials and detailed layouts. Market prices in Bangalore range from ₹12 Lakhs to ₹24 Lakhs. At HUB Interior, our 4BHK / Villa interiors start at ₹5.5 Lakhs, delivering elegant, functional, and luxury designs on a budget."
},
{
    "question": "5. What is the modular kitchen cost in Bangalore?",
    "answer": "The modular kitchen cost in Bangalore typically starts from ₹1.5 Lakhs and can go up depending on the layout and finishes. At HUB Interior, we offer stylish modular kitchen design solutions starting at ₹1.25 Lakhs with options like L-shaped, U-shaped, and straight-line formats. Looking for a modular kitchen near you? We design modular kitchens across Bangalore using top-rated materials and fittings tailored to your layout and lifestyle."
},
{
    "question": "6. Do you provide small kitchen interior designs?",
    "answer": "Yes. We offer a small kitchen interior design that optimizes space without compromising on style. From parallel kitchen layouts to compact modular solutions, we ensure ergonomic design, premium finishes, and functionality tailored for urban homes in Bangalore."
}, 
{
    "question": "7. Who are the best interior designers in Bangalore?",
    "answer": "If you're looking for the best interior designers in Bangalore, HUB Interior stands out for its creative design, affordable pricing, and end-to-end project execution. We are one of the most trusted interior companies in Bangalore, known for transforming homes with style and function."
},
{
    "question": "8. Do you provide home interior design with woodwork?",
    "answer": "Absolutely. Our home interior woodwork design includes custom wardrobes, lofts, TV units, kitchen cabinets, pooja units, and more. We ensure long-lasting woodwork built with MR/BWP-grade materials and premium finishes."
},
{
    "question": "9. How do I estimate my interior design cost?",
    "answer": "You can use our interior cost calculator or request a free interior design quotation. We offer clear estimates based on your home configuration, material choice, and design preferences. Whether it's 2BHK, 3BHK, 4BHK / Villa, or Kitchen interior design, you'll get a transparent and detailed proposal before starting."
},
{
    "question": "10. What interior services do you offer in Bangalore?",
    "answer": "We offer full home interior services in Bangalore, including:\nModular kitchens and wardrobes\nBedroom and living room interior design\nTV units, study areas, and pooja units\nFalse ceiling, lighting, and wall décor\nFoyer and bar unit designs\nWhether you own a flat or villa, we deliver end-to-end solutions that blend design, utility, and cost-effectiveness."
},
{
    "question": "11. What common interior design mistakes should I avoid?",
    "answer": "Here are some common interior design mistakes to watch out for:\n• Ignoring lighting layers\n• Overcrowded furniture\n• Prioritizing style over comfort\n• Lack of storage\n• Missing personal touches\nAt HUB Interior, we help you avoid these issues through smart planning, custom layouts, and well-balanced designs that enhance every room including your bedroom, wardrobe, and kitchen."
},
{
    "question": "12. How soon can my home interiors be completed?",
    "answer": "We guarantee interior completion in 34 days for most homes. Our process is streamlined, and we use pre-scheduled production, which ensures minimal delays and zero hidden costs."
},
{
    "question": "13. Do you offer affordable interior design in Bangalore?",
    "answer": "Yes. HUB Interior is recognized as one of the top interior designers in Bangalore, offering affordable interior design services for 1BHK, 2BHK, 3BHK, 4BHK homes, and villas. We believe that well-designed interiors should be accessible, no matter your budget."
},
{
    "question": "14. Can I get modular kitchen designers in Bangalore?",
    "answer": "Absolutely. HUB Interior offers expert modular kitchen design services in Bangalore, crafted to suit every space and lifestyle. From compact layouts to spacious kitchens, we offer modular kitchen designs that balance aesthetics, utility, and the right budget."
}
];

export function QAsection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl mb-15 sm:mb-10  manrope-medium text-center ">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4 sm:space-y-6 mt-16 sm:mt-25 manrope-medium">
          {faqData.map((item, index) => (
            <div key={index} className="pb-4 sm:pb-6">
              <div
                className={`border-l-[3px] sm:border-l-[4px] pl-3 sm:pl-4 py-3 sm:py-4 rounded-sm transition-all duration-300 ${
                  openIndex === index ? 'border-[#DDCDC1] bg-white/50' : 'border-transparent'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left group"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-amber-950 group-hover:underline pr-4">
                    {item.question}
                  </span>
                  <span className="text-amber-950 ml-2 flex-shrink-0">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {openIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="mt-3 sm:mt-4 text-amber-950 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-line"
                  >
                    {item.answer}
                  </div>
                )}
              </div>

              <hr className="border-t border-gray-300 mt-3 sm:mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
