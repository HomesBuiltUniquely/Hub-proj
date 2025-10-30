"use client"

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


type Post = { id: number; title: string; date: string; readTime: string; img: string; path?: string };

const allPostsInit: Post[] = [
  {
    id: 1,
    title: "How Mr. Akhil's House Became Bhoo Aabharana (And Why We're Still Obsessed)?",
    date: "Sep 2025",
    readTime: "10 mins read",
    img: "/reelsiam.png",
    path: "/Blog/1/Blog1",
  },
  {
    id: 2,
    title: "Inside Mr. & Mrs. Rijul Azizam's Home, Designed by Hub Interior",
    date: "Aug 2025",
    readTime: "8 mins read",
    img: "/blog2title.png",
    path: "/Blog/2/Blog2",
  },
  {
    id: 3,
    title: "Before You Remodel, Check Out These 7 Kitchen Trends to Watch in 2026",
    date: "Sep 2025",
    readTime: "6 mins read",
    img: "/blog3title.jpg",
    path: "/Blog/3/Blog3",
  },
  {
    id: 4,
    title: "Luxury Villa Interior Design – The Royal Tulip Project in Bengaluru by HUB Interior",
    date: "August 1, 2025",
    readTime: "8 mins read",
    img: "/blog4title.jpg",
    path: "/Blog/4/Blog4",
  },
  {
    id: 5,
    title: "Interior Design Bangalore: How HUB Interior Crafted Serenity Heights Apartment into a Living Masterpiece",
    date: "August 3, 2025",
    readTime: "15 mins read",
    img: "/blog5title.jpg",
    path: "/Blog/5/Blog5",
  },
  {
    id: 6,
    title: "How to Design a Functional Kitchen Interior in Bengaluru Without Compromising Style",
    date: "August 5, 2025",
    readTime: "12 mins read",
    img: "/blog6img2.jpg",
    path: "/Blog/6/Blog6",
  },
  {
    id: 7,
    title: "Sustainable Interior Design Practices",
    date: "August 7, 2025",
    readTime: "14 mins read",
    img: "/blog2img4.png",
    path: "/Blog/7/Blog7",
  },
  {
    id: 8,
    title: "Home Office Design Ideas",
    date: "August 9, 2025",
    readTime: "11 mins read",
    img: "/bn.jpg",
  },
  {
    id: 9,
    title: "Lighting Design for Modern Homes",
    date: "August 11, 2025",
    readTime: "9 mins read",
    img: "/bn.jpg",
  },
  {
    id: 10,
    title: "Furniture Selection Guide",
    date: "August 13, 2025",
    readTime: "13 mins read",
    img: "/bn.jpg",
  },
  {
    id: 11,
    title: "Wall Decor Ideas and Trends",
    date: "August 15, 2025",
    readTime: "7 mins read",
    img: "/bn.jpg",
  },
  {
    id: 12,
    title: "Flooring Options for Every Budget",
    date: "August 17, 2025",
    readTime: "16 mins read",
    img: "/bn.jpg",
  },
];

const categoryCards = [
  { id: 1, label: "Interiors", img: "bn.jpg", path: "/" },
  { id: 2, label: "Kitchens", img: "kh.png", path: "/" },
  { id: 3, label: "Bedrooms", img: "bedroom.png", path: "/" },
  { id: 4, label: "Living Rooms", img: "ab2.png", path: "/" },
  { id: 5, label: "Offices", img: "gh11.png", path: "/" },
  { id: 6, label: "Bathrooms", img: "Values.png", path: "/" }
];

const HomeShowcase = ({ posts = [] }: { posts?: Post[] }) => {
  const router = useRouter();
  const [allPosts, setAllPosts] = useState<Post[]>(allPostsInit); // Always start with default posts
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3; // Show 3 posts per page

  // Calculate remaining posts (skip first 5 posts that are shown in Section2)
  const remainingPosts = allPosts.length > 5 ? allPosts.slice(5) : [];
  const totalPages = Math.ceil(remainingPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = remainingPosts.slice(startIndex, startIndex + itemsPerPage);

  const handleReadMore = (post: Post) => {
    if (post.path && post.path.startsWith('/')) {
      router.push(post.path);
    } else {
      router.push(`/Blog/${post.id}`);
    }
  };

  // Update posts when posts prop changes
  React.useEffect(() => {
    if (posts.length > 0) {
      setAllPosts(posts);
      setCurrentPage(1); // Reset to first page when posts change
    } else {
      // If no posts from localStorage, use default posts
      setAllPosts(allPostsInit);
      setCurrentPage(1);
    }
  }, [posts]);

  // Listen for blog posts updates from admin panel
  React.useEffect(() => {
    const handleBlogPostsUpdate = () => {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        const parsedPosts = JSON.parse(savedPosts);
        if (parsedPosts.length > 0) {
          setAllPosts(parsedPosts);
          setCurrentPage(1);
        }
      }
    };

    window.addEventListener('blogPostsUpdated', handleBlogPostsUpdate);
    return () => window.removeEventListener('blogPostsUpdated', handleBlogPostsUpdate);
  }, []);

  // Debug logging
  React.useEffect(() => {
    console.log('BlogSection Debug:', {
      allPosts: allPosts.length,
      remainingPosts: remainingPosts.length,
      currentPage,
      totalPages,
      currentPosts: currentPosts.length
    });
  }, [allPosts, remainingPosts, currentPage, totalPages, currentPosts]);

  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  
  const [showRemainingPosts, setShowRemainingPosts] = useState(false);

  const handleLoadMore = () => {
    setShowRemainingPosts(true);
  };




  return (
    <div>
      <>
        <style jsx>{`
          /* Hide regular section on ultra-wide screens */
          @media (min-width: 2560px) {
            .blog-section-regular {
              display: none !important;
            }
            .blog-section-ultrawide {
              display: block !important;
              width: 100%;
              padding: 3rem 4rem;
              background-color: #f1f2f6;
            }
          }

          /* Hide ultra-wide section on smaller screens */
          .blog-section-ultrawide {
            display: none !important;
          }

          /* Hide regular layout on mobile screens */
          @media (max-width: 767px) {
            .blog-section-regular {
              display: none !important;
            }
            .section2-mobile {
              display: block !important;
            }
          }

          /* Ultra-wide container */
          .blog-ultrawide-container {
            max-width: 2400px;
            margin: 0 auto;
          }

          .blog-ultrawide-title {
            font-size: 4rem;
            font-weight: 600;
            margin-bottom: 8rem;
            text-align: center;
            color: #111827;
          }

          /* Blog grid layout */
          .blog-ultrawide-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
            justify-content: center;
          }

          .blog-ultrawide-card {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .blog-ultrawide-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          .blog-ultrawide-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }

          .blog-ultrawide-content {
            padding: 1.5rem;
          }

          .blog-ultrawide-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.875rem;
            color: #000;
            margin-bottom: 0.5rem;
          }

          .blog-ultrawide-title-text {
            font-weight: 600;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: #111827;
            line-height: 1.4;
          }

          .blog-ultrawide-button {
            width: 100%;
            background-color: #ef4444;
            color: #fff;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background-color 0.3s ease;
          }

          .blog-ultrawide-button:hover {
            background-color: #dc2626;
          }

          /* Pagination */
          .blog-ultrawide-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 3rem;
          }

          .blog-ultrawide-pagination button {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: none;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
          }

          .blog-ultrawide-pagination button:not(.active) {
            background-color: #e5e7eb;
            color: #374151;
          }

          .blog-ultrawide-pagination button:not(.active):hover {
            background-color: #d1d5db;
          }

          .blog-ultrawide-pagination button.active {
            background-color: #1f2937;
            color: #fff;
          }

          .blog-ultrawide-pagination button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* Category section */
          .blog-ultrawide-category-title {
            font-size: 3rem;
            font-weight: 600;
            margin: 4rem 0 2rem 0;
            text-align: center;
            color: #111827;
          }

          .blog-ultrawide-category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            max-width: 2400px;
            margin: 0 auto;
          }

          .blog-ultrawide-category-card {
            position: relative;
            height: 200px;
            border-radius: 1rem;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .blog-ultrawide-category-card:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          .blog-ultrawide-category-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .blog-ultrawide-category-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: background 0.3s ease;
          }

          .blog-ultrawide-category-card:hover .blog-ultrawide-category-overlay {
            background: rgba(0, 0, 0, 0.6);
          }

          .blog-ultrawide-category-icon {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
            opacity: 0.9;
          }

          .blog-ultrawide-category-label {
            color: white;
            font-size: 1.125rem;
            font-weight: 600;
          }
        `}</style>

        {/* Ultra-wide layout for 2560px+ */}
        <section className="blog-section-ultrawide">
          <div className="blog-ultrawide-container">
            {allPosts.length > 5 ? (
              <>
                <h2 className="blog-ultrawide-title">More Blog Posts</h2>
                <div className="blog-ultrawide-grid">
                  {currentPosts.map((post) => (
                    <div key={post.id} className="blog-ultrawide-card">
                      <div className="relative">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="blog-ultrawide-image"
                        />
                      </div>
                      <div className="blog-ultrawide-content">
                        <div className="blog-ultrawide-meta">
                          <span>Blog • {post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="blog-ultrawide-title-text">{post.title}</h3>
                        <button 
                          onClick={() => handleReadMore(post)}
                          className="blog-ultrawide-button"
                        >
                          Read More
                          <FaArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ultra-wide Pagination */}
                {remainingPosts.length > itemsPerPage && totalPages > 1 && (
                  <div className="blog-ultrawide-pagination">
                    <button
                      onClick={goToPrev}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={goToNext}
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <h2 className="blog-ultrawide-title manrope">All Blog Posts</h2>
                <p className="text-gray-500 text-xl max-w-3xl mx-auto">
                  {allPosts.length <= 5
                    ? `Showing all ${allPosts.length} blog posts in the featured section above.`
                    : "No additional blog posts to display. The latest 5 posts are shown in the featured section above."
                  }
                </p>
              </div>
            )}

            <h2 className="blog-ultrawide-category-title manrope">Explore by Category</h2>
            <div className="blog-ultrawide-category-grid">
              {categoryCards.map((cat) => (
                <div 
                  key={cat.id} 
                  className="blog-ultrawide-category-card"
                  onClick={() => router.push(cat.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={cat.img} alt={cat.label} className="blog-ultrawide-category-image" />
                  <div className="blog-ultrawide-category-overlay">
                    <FaArrowRight className="blog-ultrawide-category-icon" />
                    <span className="blog-ultrawide-category-label manrope-medium">{cat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* Regular layout for screens below 2560px */}
        <section className="blog-section-regular w-full py-8 px-4 sm:px-6 lg:px-12 bg-[#f1f2f6] -mt-50">
          {/* Blog Posts - Remaining posts (starting from 6th) */}
          {allPosts.length > 5 ? (
            <>
              <h2 className="text-2xl mt-65 sm:text-3xl lg:text-4xl manrope mb-12 sm:mb-16 lg:mb-20 text-gray-900 text-center">
                More Blog Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="w-full max-w-sm sm:max-w-none mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-96 object-cover manrope-medium"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between  manrope-medium text-black text-xs mb-2">
                        <span>Blog • {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className=" manrope-medium text-lg mb-4 line-clamp-2 min-h-[56px]">
                        {post.title}
                      </h3>

                      {/* Spacer to push button to bottom if needed */}
                      <div className="mt-auto">
                        <button
                          onClick={() => handleReadMore(post)}
                          className="w-full h-[44px] bg-red-500  manrope-medium text-white px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                          Read More <FaArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination - Show when there are more than 3 remaining posts */}
              {remainingPosts.length > itemsPerPage && totalPages > 1 && (
                <div className="flex justify-center items-center gap-1 sm:gap-2 mb-10 px-4  manrope-medium">
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
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium focus:outline-none transition-colors duration-200 flex items-center justify-center ${
                          currentPage === i + 1 
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
              )}
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl manrope mb-6 sm:mb-8 mt-16 sm:mt-20 text-gray-900 text-center px-4">Explore by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-14 mt-8 sm:mt-12 px-4">
              {categoryCards.map((cat) => (
                <div key={cat.id} 
                  className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md"
                  onClick={() => router.push(cat.path)}
                  style={{ cursor: 'pointer' }}>
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 bg-opacity-45 group-hover:bg-opacity-60 flex flex-col justify-center items-center transition duration-300">
                    <FaArrowRight className="text-white text-xl mb-1 opacity-90" />
                    <span className="text-white text-lg manrope-medium">{cat.label}</span>
                  </div>
                </div>
              ))}
            </div>
        </section>





      



        {/* Mobile Version */}
        <div className="section2-mobile">
          <div className="block md:hidden py- w-[full] max-w-[425px] mx- p-3">
            {allPosts.length > 5 && (
              <>
                {/* Show remaining posts only after button is clicked */}
                {showRemainingPosts && (
                  allPosts.slice(3).map((post) => (
                    <div key={post.id} className="mb-8">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-52 object-cover rounded-xl"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2 manrope-medium">
                        <span>Blog • {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2 text-center manrope">
                        {post.title}
                      </h2>
                      <button
                        onClick={() => handleReadMore(post)}
                        className="mt-3 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors manrope-medium"
                      >
                        Read More
                      </button>
                    </div>
                  ))
                )}

                {/* Show Load More button only if not yet clicked */}
                {!showRemainingPosts && (
                  <div className="flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-3xl transition-colors manrope"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Fallback if no extra posts */}
            {allPosts.length <= 3 && (
              <div className="text-center py-8 px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 manrope">
                  All Blog Posts
                </h2>
                <p className="text-gray-500 text-base max-w-sm mx-auto manrope-medium">
                  Showing all {allPosts.length} blog posts in the featured section above.
                </p>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl manrope mb-6 sm:mb-8 mt-16 sm:mt-20 text-gray-900 text-center px-4">Explore by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-14 mt-8 sm:mt-12 px-4 manrope-medium">
              {categoryCards.map((cat) => (
                <div key={cat.id} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md">
                  
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" /> 
                  <div className="absolute inset-0 bg-black/40 bg-opacity-45 group-hover:bg-opacity-60 flex flex-col justify-center items-center transition duration-300"
                   onClick={() => router.push(cat.path)}
                  style={{ cursor: 'pointer' }}>
                    <FaArrowRight className="text-white text-xl mb-1 opacity-90" />
                    <span className="text-white text-lg manrope-medium">{cat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>  
  );
};

export default HomeShowcase;