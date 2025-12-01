"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";



const articles = [
  {
    image: "/blog7img1.jpeg",
    title: "Modern Bedroom Interior Trends in Bengaluru Homes",
    date: "August 07, 2025",
    path: "/Blog/Blog7"
  },
  {
    image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog8img1.jpg",
    title: "Luxury Bedroom Interior Designs for Villas and 3BHK Homes",
    date: "Oct 21, 2025",
    path: "/Blog/Blog8"
  },
  {
    image: "/bb3.jpg",
    title: "Sliding vs. Hinged Wardrobe Designs – Which is Best for You?",
    date: "September 05, 2025",
    path: "/Blog/Blog8"
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
    question: "Closet vs wardrobe – which is better for bedroom interiors?",
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
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
      <style jsx>{`
        /* Hide custom mobile variants by default */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show mobile layout for widths >= 360px (up to md breakpoint) */
        @media (min-width: 360px) and (max-width: 767px) {
          .mobile-360plus {
            display: block;
          }
        }

        /* Show compact mobile for widths between 300px and 359px */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
          }
        }
      `}</style>



      <style jsx>{`

 
   .desktop-1920 
   .desktop-2560 
        .desktop-1280{
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

          /* Show 1920px layout for large desktops (1440px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
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


      {/* 2560 Version */}


      <div className="desktop-2560 hidden md:block">
        {/* Heading */}
        <div className="max-w-[1440px] mx-auto px-6 mb-10">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk about bedroom</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every bedroom.
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
        <Link href="/Blog"> <div className="w-full flex justify-center mt-16">
          <button className="bg-[#342717] text-white rounded-full px-8 py-3 text-lg manrope-medium shadow-xl hover:bg-[#2a1d10] transition">
            Download our bedroom design guide
          </button>
        </div></Link>
      </div>


      {/* 1920 Version */}

      <div className="desktop-1920 hidden md:block mx-auto px-20">
        {/* Heading */}
        <div className="max-w-8xl mx-auto mb-8">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk about bedroom</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every bedroom.
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
        <Link href="/blog"> <div className="text-center mb-10 mt-10">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div></Link>

        {/* FAQ and Guide */}
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-70 mt-15">
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
            Download our bedroom design guide
          </button>
        </div>

      </div>






      {/* Desktop Version 1280 */}
      <div className="desktop-1280 hidden md:block mx-auto px-15">
        {/* Heading */}
        <div className="max-w-8xl mx-auto  mb-10">
          <h1 className="text-5xl wulkan-display-bold text-gray-800 mb-5 text-gray-800">Let’s talk about bedroom</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every bedroom.
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
        <div>
          <Link href="/Blog">
            <div className="text-center mt-15">
              <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
                View All
              </button>
            </div>
          </Link>
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
            Download our bedroom design guide
          </button>
        </div>
      </div>



      {/* Mobile Version (>= 360px) */}
      <div className="md:hidden px-3 mobile-360plus">
        {/* Heading */}
        <div className="mx-auto -mt-8 mb-5">
          <div className="flex mr-1 items-start">
            <div className="w-[2px] h-[70px] bg-amber-300 mb-6 ml-2"></div>
            <h1 className="text-3xl wulkan-display-bold mb-5 ml-3 text-gray-800 w-[250px]">Let’s talk about bedroom</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every bedroom.
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
            <h2 className="text-3xl wulkan-display-bold text-gray-900 w-[250px] ml-3 mt-4">Frequently asked questions</h2>
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
            <h1 className="text-3xl wulkan-display-bold mb-5 ml-3 text-gray-800 w-[250px]">Let’s talk about bedroom</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every bedroom.
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
            <h2 className="text-3xl wulkan-display-bold text-gray-900 w-[250px] ml-3 mt-4">Frequently asked questions</h2>
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

export default Section4;

