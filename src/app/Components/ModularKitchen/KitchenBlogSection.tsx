
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";



const articles = [
  {
    image: "/blog6img1.jpeg",
    title: "A Kitchen That Talks Love—Creating a Space That Brings People Together!",
    date: "Aug 05, 2025",
    path: "/Blog/Blog6",
  },
  {
    image: "/blog3title.jpg",
    title: "L-Shape Modular Kitchen Designs That Make Cooking Effortless.",
    date: "Sep 25, 2025",
    path: "/Blog/Blog3",
  },
  {
    image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog11img1.jpg",
    title: "Why Modular Kitchens Are the Smartest Choice for 2BHK & 3BHK Homes",
    date: "October 21, 2025",
    path: "/Blog/Blog11",
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
  },
];

const KitchenBlogSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
      <style jsx>{`
        /* Hide all mobile variants initially */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show 360–480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus {
            display: block;
          }
          .mk-mobile-360 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 12%;
          }
        }

        /* Show 300–359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
          }
          .mk-mobile-300 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
          }
        }
      `}</style>


      
      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1440,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout only at exactly 1440px to avoid overlap */
        @media (width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }

        /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1441px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }


         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }


      `}</style>


      
      {/* desktop */}


      {/* 2560 Version */}

       <div className="desktop-2560 hidden md:block">
        {/* Heading */}
        <div className="max-w-[1440px] mx-auto px-6 mb-10">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk kitchens</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[1440px] mx-auto px-6 mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl  shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mb-10 mt-10">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>

        {/* FAQ and Guide */}
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row px-7 gap-70 mt-15">
          {/* FAQ Left */}
          <div className="md:w-1/3  md:mb-0 py-[25px] ">
            <h2 className="text-3xl manrope mb-3 text-gray-900">FAQs</h2>
            <p className="text-gray-600 mb-4 manrope-medium">Here are answers to questions our clients ask.</p>
            <button className="px-5 py-2 border border-gray-500 rounded-xl text-gray-800 text-sm manrope-medium">
              Connect
            </button>
          </div>
          {/* Accordion Right */}
          <div className="md:w-2/3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b">
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
                  <div className="py-2 pl-3 text-gray-500 manrope-medium text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Guide Button */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope-medium shadow-xl hover:bg-[#2a1d10] transition">
            Download our kitchen design guide
          </button>
        </div>
      </div>
      


      {/* 1920 version */}

      <div className="desktop-1920 hidden md:block">
        {/* Heading */}
        <div className="max-w-8xl mx-auto  ml-5 mb-8">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk kitchens</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[full] mx-auto px-6 mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl  shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mb-10 mt-10">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>

        {/* FAQ and Guide */}
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row px-6 gap-70 mt-15">
          {/* FAQ Left */}
          <div className="md:w-1/3  md:mb-0 py-[25px]  ">
            <h2 className="text-3xl manrope mb-3 text-gray-900">FAQs</h2>
            <p className="text-gray-600 mb-4 manrope-medium">Here are answers to questions our clients ask.</p>
            <button className="px-5 py-2 border border-gray-500 rounded-xl text-gray-800 text-sm manrope-medium">
              Connect
            </button>
          </div>
          {/* Accordion Right */}
          <div className="md:w-2/3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b">
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
                  <div className="py-2 pl-3 text-gray-500 manrope-medium text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Guide Button */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope-medium shadow-xl hover:bg-[#2a1d10] transition">
            Download our kitchen design guide
          </button>
        </div>

      </div>



     <div className="desktop-1440 hidden md:block">
        {/* Heading */}
        <div className="max-w-8xl mx-auto px-7 mb-10">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk kitchens</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[full] mx-auto px-6 mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl  shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mb-10 mt-10">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>

        {/* FAQ and Guide */}
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row px-7 gap-70 mt-15">
          {/* FAQ Left */}
          <div className="md:w-1/3  md:mb-0 py-[25px] ">
            <h2 className="text-3xl manrope mb-3 text-gray-900">FAQs</h2>
            <p className="text-gray-600 mb-4 manrope-medium">Here are answers to questions our clients ask.</p>
            <button className="px-5 py-2 border border-gray-500 rounded-xl text-gray-800 text-sm manrope-medium">
              Connect
            </button>
          </div>
          {/* Accordion Right */}
          <div className="md:w-2/3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b">
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
                  <div className="py-2 pl-3 text-gray-500 manrope-medium text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Guide Button */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope-medium shadow-xl hover:bg-[#2a1d10] transition">
            Download our kitchen design guide
          </button>
        </div>
      </div>




      {/* Desktop Version 1280 */}
      <div className="desktop-1280 hidden md:block px-4">
        {/* Heading */}
        <div className="max-w-8xl mx-auto  mb-10">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk kitchens</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[full] mx-auto mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl  shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-15">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>

        {/* FAQ and Guide */}
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-60 mb-20 mt-15">
          {/* FAQ Left */}
          <div className="md:w-1/3   py-[25px]">
            <h2 className="text-3xl manrope mb-3  text-gray-900">FAQs</h2>
            <p className="text-gray-600 mb-4 manrope-medium">Here are answers to questions our clients ask.</p>
            <button className="px-5 py-2 border  border-gray-500 rounded-xl text-gray-800 text-sm manrope-medium">
              Connect
            </button>
          </div>
          {/* Accordion Right */}
          <div className="md:w-2/3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b">
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
                  <div className="py-2 pl-3 text-gray-500 manrope-medium text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Guide Button */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope-medium shadow-xl hover:bg-[#2a1d10] transition">
            Download our kitchen design guide
          </button>
        </div>
      </div>



      {/* Mobile Version (>= 360px) */}
      <div className="md:hidden px-3 mobile-360plus">
        {/* Heading */}
        <div className="mx-auto -mt-8 mb-5">
          <div className="flex mr-1 items-start">
            <div className="w-[2px] h-[70px] bg-amber-300 mb-6 ml-2"></div>
            <h1 className="text-3xl manrope mb-5 ml-3 text-gray-800 w-[150px]">Let’s talk kitchens</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mx-auto mb-5 space-y-5">
          {articles.map((article) => {

            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick} className=" overflow-hidden w-full ">
                <img src={article.image} alt={article.title} className=" rounded-2xl w-full h-[200px] object-cover" />
                <div className="ml-1 mt-1">
                  <span className="block text-[10px] text-gray-400 mt-2 manrope">{article.date}</span>
                  <h3 className="text-base text-gray-900 mt-1 manrope">{article.title}</h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mx-auto">
          <div className="flex mb-3 items-start">
            <div className="w-[2px] h-[60px] bg-amber-300  ml-2 mt-5"></div>
            <h2 className="text-2xl manrope text-gray-900 w-[220px] ml-3 mt-5">Frequently asked questions</h2>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row ml-2 py-1.5  ">
            <div className="md:w-1/2 ">
              {faqs.map((faq, i) => (
                <div key={faq.question} className="border-b">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  >
                    <span className="manrope text-gray-700 text-md">{faq.question}</span>
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
                    <div className="py-2 pl-2 text-gray-500 text-[11px] manrope-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Compact Mobile Version (< 360px) */}
      <div className="md:hidden px-2 mobile-300">
        {/* Heading */}
        <div className="mx-auto -mt-8 mb-2">
          <div className="flex mr-1 items-start">
            <div className="w-[2px] h-[70px] bg-amber-300 mb-6 ml-2"></div>
            <h1 className="text-3xl manrope mb-5 ml-3 text-gray-800 w-[150px]">Let’s talk kitchens</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mx-auto mb-5 space-y-5">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick} className=" overflow-hidden w-full ">
                <img src={article.image} alt={article.title} className=" rounded-2xl w-full h-[200px] object-cover" />
                <div className="ml-1 mt-1">
                  <span className="block text-[10px] text-gray-400 mt-2 manrope">{article.date}</span>
                  <h3 className="text-base text-gray-900 mt-1 manrope">{article.title}</h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mx-auto">
          <div className="flex mb-3 items-start">
            <div className="w-[2px] h-[60px] bg-amber-300  ml-2 mt-5"></div>
            <h2 className="text-2xl manrope text-gray-900 w-[220px] ml-3 mt-5">Frequently asked questions</h2>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row ml-2 py-1.5  ">
            <div className="md:w-1/2 ">
              {faqs.map((faq, i) => (
                <div key={faq.question} className="border-b">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  >
                    <span className="manrope text-gray-700 text-md">{faq.question}</span>
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
                    <div className="py-2 pl-2 text-gray-500 text-[11px] manrope-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenBlogSection;
