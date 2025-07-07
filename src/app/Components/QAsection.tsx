'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is the interior design cost in Bangalore for 2BHK, 3BHK, villa, and kitchen?',
    answer: `Interior design costs in Bangalore depend on factors like home size, materials, and customization. At HUB Interior, we offer transparent pricing and affordable design packages:
              2BHK Interiors: ₹2.8 Lakhs onwards

              3BHK Interiors: ₹3.8 Lakhs onwards

              Villa Interiors: ₹5.5 Lakhs onwards

              Kitchen Interiors: ₹1.25 Lakhs onwards

              Our focus is on budget-friendly interiors with premium finishes and high-quality craftsmanship.`
  },
  {
    question: ' What common interior design mistakes should I avoid?',
    answer: `Here are 5 common design mistakes:
            Poor Space Planning → Fix: Optimize layout flow and furniture placement.
            Ignoring Lighting → Fix: Use a combination of task, ambient, and accent lighting.
            Choosing Style Over Comfort → Fix: Prioritize comfort and usability.
            Skipping Storage → Fix: Include multifunctional storage units.
            No Personal Touch → Fix: Add art, photos, and meaningful decor.
            Avoiding these ensures your home is functional and reflects your personality.`
  },
  {
    question: 'Why should I choose HUB Interior for my interior design needs?',
    answer: `HUB Interior offers stylish and durable interiors at an affordable price. Whether you're looking for 2BHK, 3BHK, villa, or modular kitchen interiors, we provide complete solutions with:
              Transparent pricing
              10-year warranty
              No Cost EMI
              25% off on selected packages
              End-to-end project delivery
              Our expert designers turn your ideas into beautiful, functional spaces.`
  },
  {
    question: 'What interior solutions do you offer in Bangalore?',
    answer: `Our complete home interior services in Bangalore include:
              Modular Kitchen & Wardrobes
              TV Units & Entertainment Spaces
              Prayer Units & Study Areas
              Wall Décor & Kids’ Room Designs
              False Ceiling & Lighting
              Foyer & Bar Unit Designs
              Whether you're designing a new home or renovating, we offer affordable interior designers in Bangalore who deliver functional, beautiful spaces.`
  }
];

export function QAsection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-[#F1F2F6]">
      <h1 className="text-4xl mb-10 text-amber-950 font-semibold gilda-display-regular ml-30">
        Frequently Asked Questions
      </h1>

      <div className="max-w-5xl mx-auto space-y-6 mt-20">
        {faqData.map((item, index) => (
          <div key={index} className="pb-6">
            <div
              className={`border-l-[4px] pl-4 rounded-sm py-4 transition-all duration-300 ${
                openIndex === index ? 'border-[#DDCDC1]' : 'border-transparent'
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-amber-950">
                  {item.question}
                </span>
                <span className="text-amber-950">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-4 text-amber-950 text-base leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>

            {/* Horizontal line after each question */}
            <hr className="border-t border-gray-300 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
