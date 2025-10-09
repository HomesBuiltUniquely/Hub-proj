"use client"

import React, { useState } from "react";

const articles = [
  {
    image: "/bb1.jpg", // Replace with your image path
    title: "Modern Bedroom Interior Trends in Bengaluru Homes",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bb2.jpg",
    title: "Luxury Bedroom Interior Designs for Villas and 3BHK Homes",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bb3.jpg",
    title: "Sliding vs. Hinged Wardrobe Designs – Which is Best for You?",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const faqs = [
  {
    question: "How long does it take to complete a home interior project?",
    answer: "At HUB Interior, most 2BHK and 3BHK home interior projects in Bengaluru are completed within 34–45 days under our Fast Track Interiors service. For larger homes and villas, timelines vary depending on customization, but we ensure on-time delivery with transparent updates."
  },
  {
    question: "What type of interior projects does HUB Interior specialize in?",
    answer: "We handle all kinds of home interior projects in Bengaluru — from modular kitchen designs and wardrobes to full home interiors for 2BHK, 3BHK, and villas. Whether it’s a modern apartment or a luxury villa, our expertise covers end-to-end design and execution."
  },
  {
    question: "Can I see completed interior projects before booking?",
    answer: "Yes! We showcase our completed interior projects in Bengaluru at our Experience Centres and through our online portfolio. Customers can explore kitchens, bedrooms, living rooms, and villa projects to understand design quality and finishing standards."
  },
  {
    question: "What are the popular wardrobe interior design options for bedrooms?",
    answer: "Popular wardrobe types include sliding door wardrobes, hinged wardrobes, walk-in wardrobes, and corner wardrobes. At HUB Interior, we design all these as part of Bedroom & Wardrobe Interior Design in Bengaluru, customizing layouts with wooden finishes, glass panels, and modern storage solutions."
  },
  {
    question: "Do you provide customized designs for every project?",
    answer: "Absolutely. Every home interior project is personalized based on your lifestyle, culture, and preferences. Whether you prefer modern interiors, minimalistic designs, or luxury villa interiors, HUB Interior ensures your project is a Home, Uniquely Built."
  },
  {
    question: "How do you ensure quality in interior projects?",
    answer: "Every project undergoes a 49-point quality check with premium materials and skilled craftsmanship. From wooden wardrobes to modular kitchens, HUB Interior guarantees durability, safety, and long-lasting finishes across all bedroom, kitchen, and living room projects."
  },
  {
    question: "Can HUB Interior handle villa and luxury home projects?",
    answer: "Yes. HUB Interior is a trusted luxury home interior designer in Bengaluru, specializing in villa interior projects that blend elegance with functionality. From concept to completion, we provide end-to-end solutions tailored for premium homes."
  },
  {
    question: "How do I track the progress of my project?",
    answer: "Customers get regular updates through our dedicated project managers and can also visit the site. With HUB Interior’s streamlined process, you’re always informed about design, execution, and delivery timelines for your interior project in Bengaluru."
  }
];

const Faq: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);





  return (


    <div>



      
  <style jsx>{`
        /* Hide both sections by default on mobile */
        .desktop-1440,
        .desktop-1280 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }
      `}</style>
    
        <div className="desktop-1440 w-screen  ">
          {/* FAQ and Guide */}
          <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 gap-6 mt-8 ">
            {/* FAQ Left */}
            <div className="md:w-1/3 mb-8 md:mt-4">
              <h2 className="manrope mb-3  text-gray-900 text-4xl">FAQs</h2>
              <p className="text-gray-600 text-xl manrope-medium">Here are answers to questions </p>
              <p className="text-gray-600 mb-2 text-xl manrope-medium">our clients ask.</p>
              <button className="px-5 py-1 border border-gray-500 rounded-3xl text-gray-800 text-md manrope hover:bg-gray-200 transition-colors duration-200">
                Connect
              </button>
            </div>
            {/* Accordion Right */}
            <div className="md:w-1/2 ">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left text-md focus:outline-none"
                  >
                    <span className="manrope text-gray-700">{faq.question}</span>
                    <span className="ml-2">
                      {openFAQ === i ? (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openFAQ === i && (
                    <div className="py-2 pl-3 text-gray-500 text-sm manrope-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>



      {/* 1280  version */}


     

          <div className="desktop-1280 w-screen">
         
          {/* FAQ and Guide */}
          <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 gap-6  ">
            {/* FAQ Left */}
            <div className="md:w-1/3 mb-8 md:mt-4 ml-8">
              <h2 className="manrope mb-3  text-gray-900 text-4xl">FAQs</h2>
              <p className="text-gray-600 text-xl manrope-medium">Here are answers to questions </p>
              <p className="text-gray-600 mb-2 text-xl manrope-medium">our clients ask.</p>
              <button className="px-5 py-1 border border-gray-500 rounded-3xl text-gray-800 text-md manrope hover:bg-gray-200 transition-colors duration-200">
                Connect
              </button>
            </div>
            {/* Accordion Right */}
            <div className="md:w-1/2 mr-10">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left text-md focus:outline-none"
                  >
                    <span className="manrope text-gray-700">{faq.question}</span>
                    <span className="ml-2">
                      {openFAQ === i ? (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openFAQ === i && (
                    <div className="py-2 pl-3 text-gray-500 text-sm manrope-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
         

        </div>



      {/* mobile version */}

      {/* Heading */}

      <div className="block md:hidden h-screen -mt-80 mb-5">

        {/* FAQ and Guide */}

        {/* FAQ Left */}
        <div className='flex items-center ml-5 mt-10'>
          <div className='bg-[#ebd657] w-[3px] h-9 mb-11'></div>
          <div className='ml-3 mb-2'>
            <h1 className='text-3xl manrope'>Frequently <div>asked question</div></h1>
          </div>
        </div>
        {/* Accordion Right */}
        <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 py-1.5  ">
          <div className="md:w-1/2 ">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="manrope text-gray-700">{faq.question}</span>
                  <span className="ml-2">
                    {openFAQ === i ? (
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>

                    )}
                  </span>
                </button>
                {openFAQ === i && (
                  <div className="py-2 pl-3 text-gray-500 text-sm manrope-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>

    </div>
  );
};

export default Faq;

