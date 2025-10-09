//  {allPosts.length > 5 ? (
//           <>


//             {!showMorePosts && remainingPosts.length > 0 && (
//               <div className="w-full text-center mt-10">
//                 <button
//                   onClick={() => setShowMorePosts(true)}
//                   className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}



//             <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-8 sm:mb-16 lg:mb-20 text-gray-900 text-center px-4">
//               More Blog Posts
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 px-4">
//               {currentPosts.map((post) => (
//                 <div
//                   key={post.id}
//                   className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={post.img}
//                       alt={post.title}
//                       className="w-full h-56 sm:h-64 object-cover"
//                     />
//                   </div>
//                   <div className="p-4 sm:p-5">
//                     <div className="flex justify-between text-black text-xs sm:text-sm mb-2">
//                       <span>Blog • {post.readTime}</span>
//                       <span>{post.date}</span>
//                     </div>
//                     <h3 className="font-semibold text-base sm:text-lg mb-3">
//                       {post.title}
//                     </h3>
//                     <button
//                       onClick={() => handleReadMore(post.id)}
//                       className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
//                     >
//                       Read More
//                       <FaArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {remainingPosts.length > itemsPerPage && totalPages > 1 && (
//               <div className="flex justify-center items-center gap-1 sm:gap-2 mb-10 px-4 overflow-x-auto">
//                 <button
//                   onClick={goToPrev}
//                   disabled={currentPage === 1}
//                   className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
//                 >
//                   <span className="text-sm">&lt;</span>
//                 </button>
//                 <div className="flex gap-1 sm:gap-2">
//                   {Array.from({ length: totalPages }).map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setCurrentPage(i + 1)}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium flex items-center justify-center text-sm transition-colors ${currentPage === i + 1
//                           ? "bg-gray-800 text-white"
//                           : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                         }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                 </div>
//                 <button
//                   onClick={goToNext}
//                   disabled={currentPage === totalPages}
//                   className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
//                 >
//                   <span className="text-sm">&gt;</span>
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="text-center py-8 px-4">
//             <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4 text-gray-900">
//               All Blog Posts
//             </h2>
//             <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
//               {allPosts.length <= 5
//                 ? `Showing all ${allPosts.length} blog posts in the featured section above.`
//                 : "No additional blog posts to display. The latest 5 posts are shown in the featured section above."}
//             </p>
//           </div>
//         )}



//       </div>


//     </>





<section className="blog-section-regular w-full py-8 px-4 sm:px-6 lg:px-12 bg-[#f1f2f6] mt-30 ">
          {/* Blog Posts - Remaining posts (starting from 6th) */}
          {allPosts.length > 5 ? (
            <>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-gray-900 text-center">
                More Blog Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8">
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="w-full max-w-sm mx-auto sm:max-w-none bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex justify-between text-black text-xs mb-2">
                        <span>Blog • {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg mb-3">{post.title}</h3>
                      <button
                        onClick={() => handleReadMore(post.id)}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        Read More
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>


              {/* Pagination - Show when there are more than 3 remaining posts */}
              {/* {remainingPosts.length > itemsPerPage && totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mb-10 px-4">
                <button
                  onClick={goToPrev}
                  disabled={currentPage === 1}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                  <span className="text-sm sm:text-base">&lt;</span>
                </button>
                <div className="flex gap-1 sm:gap-2 overflow-x-auto max-w-full">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium focus:outline-none transition-colors duration-200 flex items-center justify-center ${currentPage === i + 1
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                      <span className="text-sm sm:text-base">{i + 1}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                  <span className="text-sm sm:text-base">&gt;</span>
                </button>
              </div>
            )} */}


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 px-4">
                {remainingPosts.slice(3).map((post) => (
                  <div
                    key={post.id}
                    className="w-full max-w-sm mx-auto sm:max-w-none bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between text-black text-xs mb-2">
                        <span>Blog • {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                      <button
                        onClick={() => handleReadMore(post.id)}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        Read More
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </>
          ) : (
            <div className="text-center py-8 px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-gray-900">All Blog Posts</h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                {allPosts.length <= 5
                  ? `Showing all ${allPosts.length} blog posts in the featured section above.`
                  : "No additional blog posts to display. The latest 5 posts are shown in the featured section above."
                }
              </p>
            </div>
          )}

          {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 mt-16 sm:mt-20 text-gray-900 text-center px-4">Explore by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-14 mt-8 sm:mt-12 px-4">
          {categoryCards.map((cat) => (
            <div key={cat.id} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black/40 bg-opacity-45 group-hover:bg-opacity-60 flex flex-col justify-center items-center transition duration-300">
                <FaArrowRight className="text-white text-xl mb-1 opacity-90" />
                <span className="text-white text-lg font-semibold">{cat.label}</span>
              </div>
            </div>
          ))}
        </div> */}
        </section>


// Home 

//  <style jsx>{`
//         /* Hide both sections by default on mobile */
//         .desktop-1440,
//         .desktop-1280 {
//           display: none;
//         }

//         /* Show 1280px section for screens between 768px and 1439px */
//         @media (min-width: 768px) and (max-width: 1439px) {
//           .desktop-1280 {
//             display: block;
//           }
//         }

//         /* Show 1440px section for screens 1440px and above */
//         @media (min-width: 1440px) {
//           .desktop-1440 {
//             display: block;
//           }
//         }
//       `}</style>



  //  <div className="desktop-1440 w-full h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 hidden md:block desktop-1440"></div>
  {/* 1280 veersion */}
    // <div className="desktop-1280 w-full h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 hidden md:block"></div>




     {/* Medium Desktop content */}

            // <div className="desktop-1280 max-w-[1280px] h-[800px] mx-auto rounded-3xl overflow-hidden relative">


            //     <div className="flex ">
            //         {/* Left Section - 2nd and 3rd Latest Blogs */}
            //         <div className="w-[400px] h-[300px] mt-16 ml-8">
            //             {latestPosts.length > 1 ? (
            //                 <>
            //                     <div className="relative">
            //                         <img src={latestPosts[1].img} alt="image" className="w-[400px] h-[250px] rounded-4xl" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-6">
            //                         <p>Blog • {latestPosts[1].readTime}</p>
            //                         <p>{latestPosts[1].date}</p>
            //                     </div>
            //                     <p className="pt-4 pl-2 text-center pr-3 manrope mb-4">{latestPosts[1].title}</p>
            //                     <button
            //                         onClick={() => handleReadMore(latestPosts[1].id)}
            //                         className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium mx-2"
            //                     >
            //                         Read More
            //                     </button>
            //                 </>
            //             ) : (
            //                 <>
            //                     <div className="relative">
            //                         <img src="bn.jpg" alt="image" className="w-[400px] h-[250px] rounded-4xl" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-6">
            //                         <p>Blog - 18 mins read</p>
            //                         <p>July 28, 2025</p>
            //                     </div>
            //                     <p className="pt-4 pl-2 text-center pr-3 manrope">Designing the Heart of Your </p>
            //                     <p className="pl-4 text-center manrope">Home: Bedroom Ideas That Inspire</p>
            //                 </>
            //             )}

            //             {latestPosts.length > 2 ? (
            //                 <>
            //                     <div className="relative">
            //                         <img src={latestPosts[2].img} alt="image" className="w-[400px] h-[250px] rounded-4xl mt-6" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-6">
            //                         <p>Blog • {latestPosts[2].readTime}</p>
            //                         <p>{latestPosts[2].date}</p>
            //                     </div>
            //                     <p className="pt-4 pl-2 text-center pr-3 manrope mb-4">{latestPosts[2].title}</p>
            //                     <button
            //                         onClick={() => handleReadMore(latestPosts[2].id)}
            //                         className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium mx-2"
            //                     >
            //                         Read More
            //                     </button>
            //                 </>
            //             ) : (
            //                 <>
            //                     <div className="relative">
            //                         <img src="bn.jpg" alt="image" className="w-[400px] h-[250px] rounded-4xl mt-6" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-6">
            //                         <p>Blog - 18 mins read</p>
            //                         <p>July 28, 2025</p>
            //                     </div>
            //                     <p className="pt-4 pl-2 text-center pr-3 manrope">Designing the Heart of Your </p>
            //                     <p className="pl-4 text-center manrope">Home: Bedroom Ideas That Inspire</p>
            //                 </>
            //             )}
            //         </div>

            //         <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>

            //         {/* Middle Section - Latest Blog */}
            //         <div className="w-[500px] h-[350px] bg-red-400 ml-10 mt-20 rounded-4xl ">
            //             {latestPosts.length > 0 ? (
            //                 <>
            //                     <div className="relative">
            //                         <img src={latestPosts[0].img} className="w-[500px] h-[350px] rounded-4xl" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-20">
            //                         <p>Blog • {latestPosts[0].readTime}</p>
            //                         <p>{latestPosts[0].date}</p>
            //                     </div>
            //                     <div className="w-[400px] mx-auto pt-10 text-3xl manrope mb-6">
            //                         <div>{latestPosts[0].title}</div>
            //                     </div>
            //                     <div className="w-[400px] mx-auto">
            //                         <button
            //                             onClick={() => handleReadMore(latestPosts[0].id)}
            //                             className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
            //                         >
            //                             Read More
            //                         </button>
            //                     </div>
            //                 </>
            //             ) : (
            //                 <>
            //                     <div className="relative">
            //                         <img src="bn.jpg" className="w-[500px] h-[350px] rounded-4xl" />
            //                     </div>
            //                     <div className="flex justify-between mt-4 w-[340px] ml-20">
            //                         <p>Blog - 18 mins read</p>
            //                         <p>July 28, 2025</p>
            //                     </div>
            //                     <div className="w-[400px] mx-auto pt-10 text-3xl manrope">
            //                         <div>Designing the Heart of Your </div>
            //                         <div>Home: Bedroom Ideas That Inspire</div>
            //                         <div>Your Mind</div>
            //                     </div>
            //                 </>
            //             )}
            //         </div>

            //         <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>

            //         {/* Right Section - Most Trending Items Only */}
            //         <div className="w-[400px] h-[600px] mt-16 ml-8">
            //             {/* Most Trending Items - Scrollable */}
            //             <div className="mt-8">
            //                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Most Trending</h3>
            //                 <div className="h-[500px] overflow-y-auto pr-2">
            //                     {trendingData.map((item) => (
            //                         <div key={item.id} className="mb-6">
            //                             <div className="flex justify-between text-[14px] w-[340px] manrope-medium">
            //                                 <p>Blog • {item.readTime}</p>
            //                                 <p>{item.date}</p>
            //                             </div>
            //                             <div className="mt-2 pr-20">
            //                                 <p className="pt-4 pr-14 text-center manrope text-[16px]">{item.title}</p>
            //                                 <p className="text-center manrope text-[16px]">{item.subtitle}</p>
            //                             </div>
            //                             <div className="w-[350px] h-[1px] bg-amber-900 center mt-4 mb-4 "></div>
            //                         </div>
            //                     ))}
            //                 </div>
            //             </div>
            //         </div>


            //     </div>


            // </div>



           