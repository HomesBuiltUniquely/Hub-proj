"use client";

import React, { useState, useEffect } from "react";
import Herosection from "../Components/Blog/Herosection";
import Section2 from "../Components/Blog/Section2";
import HomeShowcase from "../Components/Blog/BlogSection";
import Footer from "../Components/Home/Footer";
import { useRouter } from "next/navigation";

// Post type definition
type Post = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  img: string;
  path?: string;
};

// Default posts (fallback)
const defaultPosts: Post[] = [
  {
    id: 1,
    title: "How Mr. Akhil's House Became Bhoo Aabharana (And Why We're Still Obsessed)?",
    date: "Sep 2025",
    readTime: "10 mins read",
    img: "/reelsiam.png",
    path: "/Blog/Blog1",
  },
  {
    id: 2,
    title: "Inside Mr. & Mrs. Rijul Azizam's Home, Designed by Hub Interior",
    date: "Sep 2025",
    readTime: "8 mins read",
    img: "/blog2title.png",
    path: "/Blog/Blog2",
  },
  {
    id: 3,
    title: "Before You Remodel, Check Out These 7 Kitchen Trends to Watch in 2026",
    date: "Sep 2025",
    readTime: "6 mins read",
    img: "/blog3title.jpg",
    path: "/Blog/Blog3",
  },
  {
    id: 4,
    title: "Luxury Villa Interior Design ",
    date: "Sep 1, 2025",
    readTime: "8 mins read",
    img: "/blog4title.jpg",
    path: "/Blog/Blog4",
  },
  {
    id: 5,
    title: "Interior Design Bangalore: How HUB Interior Crafted Serenity Heights Apartment into a Living Masterpiece",
    date: "Sep 3, 2025",
    readTime: "15 mins read",
    img: "/blog5title.jpg",
    path: "/Blog/Blog5",
  },
  {
    id: 6,
    title: "How to Design a Functional Kitchen Interior in Bengaluru Without Compromising Style",
    date: "Sep 5, 2025",
    readTime: "12 mins read",
    img: "/blog6img2.jpg",
    path: "/Blog/Blog6",
  },
  {
    id: 7,
    title: "Sustainable Interior Design Practices",
    date: "Sep 7, 2025",
    readTime: "14 mins read",
    img: "/blog2img4.png",
    path: "/Blog/Blog7",
  },
  {
    id: 8,
    title: "Home Office Design Ideas",
    date: "August 9, 2025",
    readTime: "11 mins read",
    img: "/blog4title.jpg",
    path: "/Blog/Blog4"
  },
  {
    id: 9,
    title: "Lighting Design for Modern Homes",
    date: "August 11, 2025",
    readTime: "9 mins read",
    img: "/blog5title.jpg",
    path: "/Blog/Blog5"
  },
  {
    id: 10,
    title: "Furniture Selection Guide",
    date: "August 13, 2025",
    readTime: "13 mins read",
    img: "/bn.jpg",
    path: "/Blog/Blog8"
  },
  {
    id: 11,
    title: "Wall Decor Ideas and Trends",
    date: "August 15, 2025",
    readTime: "7 mins read",
    img: "/bn.jpg",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>(defaultPosts);
  const router = useRouter();

  // Load posts from localStorage or fallback to default
  useEffect(() => {
    const loadPosts = () => {
      const savedPosts = localStorage.getItem("blogPosts");
      if (savedPosts) {
        try {
          const parsedPosts: Post[] = JSON.parse(savedPosts);
          if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
            setPosts(parsedPosts);
          } else {
            setPosts(defaultPosts);
          }
        } catch (error) {
          console.error("Error parsing blogPosts from localStorage:", error);
          setPosts(defaultPosts);
        }
      } else {
        setPosts(defaultPosts);
      }
    };

    loadPosts();

    // Listen to storage changes across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "blogPosts") {
        loadPosts();
      }
    };

    // Listen to custom event for same-tab updates
    const handleCustomUpdate = () => {
      loadPosts();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("blogPostsUpdated", handleCustomUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("blogPostsUpdated", handleCustomUpdate);
    };
  }, []);

  // Handle "Read More" clicks safely
  const handleReadMore = (path?: string) => {
    if (path) {
      router.push(path);
    } else {
      console.warn("No path provided for this post.");
    }
  };

  return (
    <div>
      <Herosection />
      <Section2 posts={posts} onReadMore={handleReadMore} />
      <HomeShowcase posts={posts}/>
      <Footer />
    </div>
  );
}
