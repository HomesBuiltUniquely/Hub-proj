"use client"

import React, { useState } from "react";

const articles = [
  {
    image: "/kb1.jpg", // Replace with your image path
    title: "A Kitchen That Talks Love—Creating a Space That Brings People Together!",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/kb2.png",
    title: "L-Shape Modular Kitchen Designs That Make Cooking Effortless.",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/kb3.png",
    title: "Why Modular Kitchens Are the Smartest Choice for 2BHK & 3BHK Homes",
    date: "September 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const faqs = [
  {
    question: "What is a Modular Kitchen?",
    answer: "A modular kitchen is a modern kitchen interior design concept where cabinets, shelves, and storage units are pre-designed in modules for easy installation and customization. At HUB Interior, we specialize in modern kitchen interiors in Bengaluru, offering designs like L-shape, U-shape, straight, and island kitchens that maximize functionality and style."
  },
  {
    question: "What Are Some Popular Kitchen Design Layouts for 2025?",
    answer: "The most popular layouts in kitchen interior design for 2025 include L-shape kitchens, U-shape kitchens, parallel kitchens, straight kitchens, and island kitchens. HUB Interior provides all these options in Bengaluru, ensuring every design is tailored to your lifestyle, space, and storage needs."
  },
  {
    question: "What Are the Benefits of a Modular Kitchen?",
    answer: "A modular kitchen interior offers space-saving storage, easy maintenance, modern aesthetics, and flexible layouts. With HUB Interior, you also get premium materials like wooden kitchen interiors and glass cabinet kitchen interiors in Bengaluru, designed for durability and timeless elegance."
  },
  {
    question: "What is the Best Kitchen Layout for a Small Space?",
    answer: "For compact homes, straight kitchens and L-shape kitchen interiors in Bengaluru are ideal. They maximize space while providing functionality and storage. HUB Interior specializes in space-saving kitchen interiors in Bengaluru, with smart storage solutions to make small kitchens efficient and stylish."
  },
  {
    question: "What Type of Material and Finish is Best for a Modular Kitchen?",
    answer: "The best materials for a modular kitchen interior are durable plywood, engineered wood, and high-quality laminates. Finishes like acrylic, matte, and glossy glass are popular in modern kitchen interiors in Bengaluru. HUB Interior provides customized finishes, from minimalistic kitchen interiors to premium wooden and glass cabinet kitchens."
  },
  {
    question: "What Points to Consider During Modular Kitchen Installation?",
    answer: "When installing a modular kitchen, consider space planning, workflow (cooking triangle), materials, lighting, and storage. HUB Interior ensures seamless kitchen interior design in Bengaluru, with expert guidance from layout to installation — delivering hassle-free and on-time completion."
  },
  {
    question: "What Makes HUB Interior the Best Place to Buy Modular Kitchens in Bengaluru?",
    answer: "With 5000+ projects, HUB Interior is trusted as one of the best modular kitchen interior designers in Bengaluru. From U-shape kitchens to island modular kitchens, we offer premium designs, durable materials, transparent pricing, and 34-day fast-track delivery. Our end-to-end solutions make us the go-to choice for kitchen interiors in Bengaluru."
  },
  {
    question: "What Are the Current Kitchen Design Trends?",
    answer: "Trending kitchen interior designs in Bengaluru include minimalistic kitchen interiors, parallel modern kitchens, wooden finishes, glass cabinet modular kitchens, and bold accent colors. HUB Interior combines the latest designs with smart space-saving solutions to deliver modern kitchen interiors in Bengaluru that are stylish and practical."
  },
  {
    question: "How Do I Maximize Storage in a Small Kitchen?",
    answer: "Maximizing storage in a small kitchen requires smart planning with pull-out units, overhead cabinets, and corner solutions. HUB Interior specializes in space-saving kitchen interiors in Bengaluru, offering innovative layouts like L-shape and parallel kitchens that optimize every inch of space without compromising style."
  },
  {
    question: "What is the Best Lighting for a Kitchen?",
    answer: "The best lighting for a kitchen interior design includes task lighting (under-cabinet), ambient lighting (ceiling), and accent lighting (spotlights). HUB Interior integrates functional and aesthetic lighting in all modern kitchen interiors in Bengaluru, ensuring your kitchen looks bright, welcoming, and efficient."
  },
  {
    question: "How Much Does a Kitchen Remodel Typically Cost?",
    answer: "The cost of a kitchen interior design in Bengaluru depends on size, layout, materials, and finishes. A modular kitchen interior can start from budget-friendly solutions for 2BHKs to premium luxury kitchens for villas. HUB Interior provides transparent pricing with customized designs to suit your lifestyle and budget."
  }
];

const KitchenBlogSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800">Let’s Talk Kitchens</h1>
        <p className="text-gray-500 text-lg mb-7">
          Read our blog to discover how design meets utility in every kitchen.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col md:flex-row gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
          >
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 mt-2 mb-1">
                {article.title}
              </h3>
              <span className="text-xs text-gray-400 mt-4">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="text-center mb-10">
        <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition hover:bg-gray-200 font-medium">
          View All
        </button>
      </div>

      {/* FAQ and Guide */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-4 gap-6 mt-30">
        {/* FAQ Left */}
        <div className="md:w-1/3 mb-8 md:mb-0 py-[230px]">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">FAQs</h2>
          <p className="text-gray-600 mb-4">Here are answers to questions our clients ask.</p>
          <button className="px-5 py-2 border border-gray-500 rounded-xl text-gray-800 text-sm font-medium">
            Connect
          </button>
        </div>
        {/* Accordion Right */}
        <div className="md:w-2/3">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-700">{faq.question}</span>
                <span className="ml-2">
                  {openFAQ === i ? (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  )}
                </span>
              </button>
              {openFAQ === i && (
                <div className="py-2 pl-3 text-gray-500 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download Guide Button */}
      <div className="w-full flex justify-center mt-16">
        <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg font-semibold shadow-xl hover:bg-[#2a1d10] transition">
          Download our kitchen design guide
        </button>
      </div>
    </div>
  );
};

export default KitchenBlogSection;
