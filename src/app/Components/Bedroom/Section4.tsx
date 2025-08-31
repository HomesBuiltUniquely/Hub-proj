"use client"

import React, { useState } from "react";

const articles = [
  {
    image: "/bn.jpg", // Replace with your image path
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bn.jpg",
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bn.jpg",
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const faqs = [
  "What are the key elements of a well-designed kitchen?",
  "What are the key elements of a well-designed kitchen?",
  "What are the key elements of a well-designed kitchen?",
  "What are the key elements of a well-designed kitchen?",
  "What are the key elements of a well-designed kitchen?",
];

const Section4: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800">Let’s Talk About Bedroom</h1>
        <p className="text-gray-500 text-lg mb-7">
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
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 mt-2 mb-1">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1">{article.text}</p>
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
      <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 gap-6 mt-30">
        {/* FAQ Left */}
        <div className="md:w-1/3 mb-8 md:mt-4">
          <h2 className="text-2xl font-bold mb-3  text-gray-900">FAQs</h2>
          <p className="text-gray-600 mb-4">Here are answers to questions our clients ask.</p>
          <button className="px-5 py-2 border border-gray-500 rounded-xl text-gray-800 text-sm font-medium">
            Connect
          </button>
        </div>
        {/* Accordion Right */}
        <div className="md:w-1/2 ">
          {faqs.map((q, i) => (
            <div key={i} className="border-b">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-700">{q}</span>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. {/* Replace with actual answer */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download Guide Button */}
      <div className="w-full flex justify-center mt-20">
        <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg font-semibold shadow-xl hover:bg-[#2a1d10] transition">
          Download our Bedroom design guide
        </button>
      </div>
    </div>
  );
};

export default Section4;
