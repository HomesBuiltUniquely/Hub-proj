"use client"

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Post = { id: number; title: string; date: string; readTime: string; img: string };

const allPostsInit: Post[] = [
  { id: 1, title: "Designing the Heart of Your Home: Bedroom Ideas That Inspire", date: "July 26, 2025", readTime: "18 mins read", img: "/bedroom-idea.jpg" },
  { id: 2, title: "Modern Kitchen Designs You'll Love", date: "July 28, 2025", readTime: "12 mins read", img: "/kitchen.jpg" },
  { id: 3, title: "Living Room Makeovers With a Wow Factor", date: "July 30, 2025", readTime: "10 mins read", img: "/livingroom.jpg" },
];

const categoryCards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: "Interiors",
  img: "bn.jpg",
}));

const HomeShowcase = ({ posts = [] }: { posts?: Post[] }) => {
  const [allPosts, setAllPosts] = useState<Post[]>(posts.length > 0 ? posts : allPostsInit);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3; // Show only 3 posts per page for remaining posts
  const remainingPosts = allPosts.slice(5); // Skip first 5 posts (shown in Section2)
  const totalPages = Math.ceil(remainingPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = remainingPosts.slice(startIndex, startIndex + itemsPerPage);

  // Update posts when posts prop changes
  React.useEffect(() => {
    if (posts.length > 0) {
      setAllPosts(posts);
      setCurrentPage(1); // Reset to first page when posts change
    }
  }, [posts]);

  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="w-full py-8 px-3 md:px-12 bg-[#f1f2f6]">
      {/* Blog Posts - Remaining posts (starting from 6th) */}
      {remainingPosts.length > 0 ? (
        <>
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            More Blog Posts
          </h2>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {currentPosts.map((post) => (
              <div key={post.id} className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between text-gray-400 text-xs mb-2">
                    <span>Blog • {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Show when there are more than 3 remaining posts */}
          {remainingPosts.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-2 mb-10">
              <button 
                onClick={goToPrev} 
                disabled={currentPage === 1} 
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage(i + 1)} 
                  className={`w-8 h-8 rounded-full font-medium focus:outline-none ${
                    currentPage === i + 1 
                      ? "bg-gray-800 text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={goToNext} 
                disabled={currentPage === totalPages} 
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No additional blog posts to display. The latest 5 posts are shown in the featured section above.</p>
        </div>
      )}

      <h2 className="text-4xl font-semibold mb-6 mt-20 text-gray-900">Explore by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14 mt-20">
        {categoryCards.map((cat) => (
          <div key={cat.id} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md">
            <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/40 bg-opacity-45 group-hover:bg-opacity-60 flex flex-col justify-center items-center transition duration-300">
              <FaArrowRight className="text-white text-xl mb-1 opacity-90" />
              <span className="text-white text-lg font-semibold">{cat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeShowcase;
