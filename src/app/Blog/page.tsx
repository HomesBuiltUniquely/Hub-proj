"use client"

import React, { useState, useEffect } from "react";
import Herosection from "../Components/Blog/Herosection";
import Section2 from "../Components/Blog/Section2";
import HomeShowcase from "../Components/Blog/BlogSection";
import Footer from "../Components/Home/Footer";

type Post = {
    id: number;
    title: string;
    date: string;
    readTime: string;
    img: string
};

// Default posts for demonstration
const defaultPosts: Post[] = [
    { id: 1, title: "How Mr.Akhil's House Became Bhoo Aabharana (And Why We're Still Obsessed)?", date: "September 5, 2025", readTime: "10 mins read", img: "/reelsiam.png" },
    { id: 2, title: "Modern Kitchen Designs You'll Love", date: "July 28, 2025", readTime: "12 mins read", img: "/2.png" },
    { id: 3, title: "Living Room Makeovers With a Wow Factor", date: "July 30, 2025", readTime: "10 mins read", img: "/3.png" },
    { id: 4, title: "Bathroom Design Trends for 2025", date: "August 1, 2025", readTime: "8 mins read", img: "/bn.jpg" },
    { id: 5, title: "Small Space Interior Solutions", date: "August 3, 2025", readTime: "15 mins read", img: "/bn.jpg" },
    { id: 6, title: "Color Psychology in Interior Design", date: "August 5, 2025", readTime: "12 mins read", img: "/bn.jpg" },
    { id: 7, title: "Sustainable Interior Design Practices", date: "August 7, 2025", readTime: "14 mins read", img: "/bn.jpg" },
    { id: 8, title: "Home Office Design Ideas", date: "August 9, 2025", readTime: "11 mins read", img: "/bn.jpg" },
    { id: 9, title: "Lighting Design for Modern Homes", date: "August 11, 2025", readTime: "9 mins read", img: "/bn.jpg" },
    { id: 10, title: "Furniture Selection Guide", date: "August 13, 2025", readTime: "13 mins read", img: "/bn.jpg" },
    { id: 11, title: "Wall Decor Ideas and Trends", date: "August 15, 2025", readTime: "7 mins read", img: "/bn.jpg" },
    { id: 12, title: "Flooring Options for Every Budget", date: "August 17, 2025", readTime: "16 mins read", img: "/bn.jpg" },
];

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>(defaultPosts);

    // Load posts from localStorage on component mount and when storage changes
    useEffect(() => {
        const loadPosts = () => {
            const savedPosts = localStorage.getItem('blogPosts');
            if (savedPosts) {
                const parsedPosts = JSON.parse(savedPosts);
                // Always use admin-created posts if they exist, regardless of count
                if (parsedPosts.length > 0) {
                    setPosts(parsedPosts);
                } else {
                    // Use default posts only if no admin posts exist
                    setPosts(defaultPosts);
                }
            } else {
                // Use default posts if no localStorage data
                setPosts(defaultPosts);
            }
        };

        // Load posts initially
        loadPosts();

        // Listen for storage changes (when admin adds/edits posts)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'blogPosts') {
                loadPosts();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Also listen for custom events (for same-tab updates)
        const handleCustomStorageChange = () => {
            loadPosts();
        };

        window.addEventListener('blogPostsUpdated', handleCustomStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('blogPostsUpdated', handleCustomStorageChange);
        };
    }, []);

    return (
        <div>
          {/* <Herosection /> */}
           <Section2 posts={posts} /> 
    <HomeShowcase posts={posts} />
                       <Footer />
        </div>
    );
}