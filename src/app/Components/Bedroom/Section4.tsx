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
    question: "What is the best wardrobe design for bedroom interiors in Bengaluru?",
    answer: "The best wardrobe depends on space and style. For compact rooms, sliding door wardrobes are practical, while hinged wardrobes suit spacious bedrooms. HUB Interior specializes in Bedroom & Wardrobe Interior Design in Bengaluru, offering customized solutions like walk-in wardrobes, minimalistic wardrobes, and modern wardrobe interiors to match your lifestyle."
  },
  {
    question: "Is a walk-in wardrobe possible in small bedroom interiors?",
    answer: "Yes! With smart planning, even small rooms can have walk-in wardrobe interiors. At HUB Interior, we design space-saving bedroom & wardrobe interiors in Bengaluru, using clever layouts, mirrors, and modular storage to make walk-in wardrobes practical and stylish even in compact spaces."
  },
  {
    question: "Closet vs. wardrobe – which is better for bedroom interiors?",
    answer: "A closet is a built-in storage space within walls, while a wardrobe is a free-standing or modular unit. HUB Interior provides both modern bedroom wardrobes and custom closet interiors to suit different needs. With our expertise in Bedroom & Wardrobe Interior in Bengaluru, we ensure the perfect solution for every home."
  },
  {
    question: "What are the popular wardrobe interior design options for bedrooms?",
    answer: "Popular wardrobe types include sliding door wardrobes, hinged wardrobes, walk-in wardrobes, and corner wardrobes. At HUB Interior, we design all these as part of Bedroom & Wardrobe Interior Design in Bengaluru, customizing layouts with wooden finishes, glass panels, and modern storage solutions."
  },
  {
    question: "Sliding wardrobe or hinged wardrobe – which is best for modern bedroom interiors?",
    answer: "Sliding wardrobes save space and offer a sleek, modern look, while hinged wardrobes provide full access and classic style. HUB Interior helps you choose the right fit through our modern bedroom & wardrobe interiors in Bengaluru, balancing space, style, and storage needs."
  },
  {
    question: "What is the standard wardrobe size for bedroom interiors in Bengaluru?",
    answer: "The ideal wardrobe size depends on your room dimensions and storage needs. Typically, wardrobes range from 6–8 feet in height and 2–3 feet in depth. HUB Interior customizes bedroom & wardrobe interiors in Bengaluru to ensure every design fits perfectly, whether minimalistic or luxurious."
  },
  {
    question: "What are the trending wardrobe interior designs for bedrooms in 2025?",
    answer: "Trends in modern wardrobe interiors include glass cabinet wardrobes, wooden finishes, minimalistic designs, smart lighting, and space-saving sliding wardrobes. At HUB Interior, we bring the latest bedroom & wardrobe interior design in Bengaluru, combining style and function for today's lifestyle."
  },
  {
    question: "Which materials and finishes are best for wardrobe interiors?",
    answer: "Popular wardrobe materials include plywood, MDF, laminates, acrylic, glass, and wooden finishes. At HUB Interior, we use high-quality, durable materials to craft modern bedroom & wardrobe interiors in Bengaluru, ensuring a perfect balance of strength, beauty, and longevity."
  },
  {
    question: "What is the best wardrobe interior design for kids' bedrooms?",
    answer: "Kids' room wardrobes should be fun, functional, and safe. HUB Interior offers kids' bedroom wardrobe interiors in Bengaluru with colorful finishes, smart storage for toys and clothes, and durable materials. Our designs make the room practical while keeping it playful and vibrant."
  },
  {
    question: "What wardrobe interior design works best for studio apartments?",
    answer: "For studio apartments, sliding wardrobes and multi-functional modular wardrobes work best as they save space and add storage. HUB Interior specializes in space-saving bedroom & wardrobe interiors in Bengaluru, offering customized solutions for compact homes that maximize utility without compromising on design."
  }
];

const Section4: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (

    <div>
      <div className="hidden md:block">
        <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
          {/* Heading */}

          <div className="max-w-6xl mx-auto px-4 mb-10">
            <h1 className="text-3xl md:text-4xl manrope mb-2 text-gray-800">Let’s Talk About Bedroom</h1>
            <p className="text-gray-500 manrope-medium text-lg mb-7">
              Read our blog to discover how design meets utility in every Bedroom.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col md:flex-row gap-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="text-center mb-10">
            <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition hover:bg-gray-200 manrope">
              View All
            </button>
          </div>

          {/* FAQ and Guide */}
          <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 gap-6 mt-30">
            {/* FAQ Left */}
            <div className="md:w-1/3 mb-8 md:mt-4">
              <h2 className="text-2xl manrope mb-3  text-gray-900">FAQs</h2>
              <p className="text-gray-600 mb-4 manrope-medium">Here are answers to questions our clients ask.</p>
              <button className="px-5 py-2 manrope border border-gray-500 rounded-xl text-gray-800 text-sm font-medium">
                Connect
              </button>
            </div>
            {/* Accordion Right */}
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
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openFAQ === i && (
                    <div className="py-2 pl-3 manrope-medium text-gray-500 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Download Guide Button */}
          <div className="w-full flex justify-center mt-20">
            <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope shadow-xl hover:bg-[#2a1d10] transition">
              Download our Bedroom design guide
            </button>
          </div>
        </div>

      </div>

      {/* mobile version */}

      {/* Heading */}

      <div className="block md:hidden -mt-15">

        <div className='flex items-center ml-5'>
          <div className='bg-[#ebd657] w-[4px] h-9 mb-31'></div>
          <div className='ml-3 mb-2.5'>
            <h1 className='text-3xl manrope'>Let’s Talk  <div> About Bedroom</div></h1>
            <p className='manrope-medium text-[18px] pt-3 mb-4'>Read our blog to discover how design meets utility in every Bedroom.</p>
          </div>
        </div>



        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-4  flex flex-col md:flex-row gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/3 flex flex-col"
            >
              <img src={article.image} alt={article.title} className="w-full h-70 object-cover rounded-3xl" />
              <div className="p- flex flex-col flex-1">
                 <span className="text-xs manrope-medium m-2 text-gray-400 ">{article.date}</span>
                <h3 className="text-base manrope text-gray-900 ml-2 mb-1">
                  {article.title}
                </h3>
               
              </div>
            </div>
          ))}
        </div>

        {/* FAQ and Guide */}

        {/* FAQ Left */}
        <div className='flex items-center ml-5 mt-15'>
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
                  <div className="py-2 manrope-medium pl-3 text-gray-500 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>`
        </div>


      </div>

    </div>
  );
};

export default Section4;

