//  <div className="relative rounded-2xl mt-10 overflow-hidden shadow-lg select-none min-h-[520px] flex items-center">
//           {!isPlaying ? (
//             <div className="relative w-full h-[520px] cursor-pointer">
//               <img
//                 src={slide.thumbnail}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//                 onClick={() => setIsPlaying(true)}
//               />
//               {/* Play button overlay */}
//               <div
//                 className="absolute inset-0 bg-opacity-40 flex justify-center items-center"
//                 onClick={() => setIsPlaying(true)}
//               >
//                 <svg width={64} height={64} viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="12" r="12" fill="rgba(255, 255, 255, 0.8)" />
//                   <polygon points="10,8 16,12 10,16" fill="#222" />
//                 </svg>
//               </div>
//             </div>
//           ) : (
//             <video
//               src={slide.videoSrc}
//               className="w-full h-[520px] object-cover"
//               controls
//               autoPlay
//               onEnded={() => setIsPlaying(false)}
//             />
//           )}

//           {/* Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

//           {/* Slide Text */}
//           <div className="absolute bottom-10 left-0 right-0 p-7 text-white z-10">
//             <h3 className="text-xl font-semibold mb-1">
//               {slide.title}
//               <span className="ml-2 text-gray-300 font-normal">
//                 , {slide.location}
//               </span>
//             </h3>
//             <p className="mb-2 text-sm leading-relaxed">{slide.testimonial}</p>
//           </div>

//           {/* Carousel Controls */}
//           {featuredProjects.length > 1 && (
//             <>
//               <button
//                 className="absolute left-3 w-[50px] h-[50px] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 backdrop-blur px-3 py-3 rounded-full shadow z-20"
//                 onClick={() => {
//                   prevSlide();
//                   setIsPlaying(false);
//                 }}
//                 aria-label="Previous project"
//               >
//                 ‹
//               </button>
//               <button
//                 className="absolute right-3 w-[50px] h-[50px] top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 backdrop-blur px-3 py-3 rounded-full shadow z-20"
//                 onClick={() => {
//                   nextSlide();
//                   setIsPlaying(false);
//                 }}
//                 aria-label="Next project"
//               >
//                 ›
//               </button>
//             </>
//           )}
//         </div>






// ******************

//  <section className="bg-[#f1f2f6] pb-24 pt-10 flex flex-col items-center">
//       {/* Featured Projects */}
//       <div className="w-full max-w-5xl px-3">
//         <h2 className="text-[50px]   font-bold mb-1 -ml-35 text-gray-900">
//           Featured Projects
//         </h2>
//         <p className="text-gray-600 text-[20px] mb-5 -ml-35">A glimpse at our best work</p>
//       </div>

//       <div>
//         <div className="flex  justify-center mt-3">
//           <div className="w-full h-70 max-w-[95%] flex-col bg-white rounded-3xl shadow-lg">
//               <img src="3.png" alt=""  className="h-50 w-80 rounded-t-3xl"/>
//           </div>
//         </div>
//       </div>



//       {/* E-Book Promo */}
//       {/* <div className="w-full max-w-2xl mx-auto mt-30 text-center">
//         <p className="mb-2 text-gray-400 text-md">New E-Book</p>
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900">
//           Home Buyer’s <span className="text-red-600">Handbook</span>
//         </h2>
//         <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-lg transition">
//           Buy now for free
//         </button>
//       </div> */}
//     </section>



  <Image
                  src={}
                  alt={card.button}
                  className="h-75 w-full rounded-t-3xl  object-cover transition duration-300"
                />



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






       <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row px-4 gap-6 mt-">
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