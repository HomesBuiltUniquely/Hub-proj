"use client"

import React, { useState, useEffect } from "react";
import Herosection from "../Components/Blog/Herosection";
import Section2 from "../Components/Blog/Section2";
import HomeShowcase from "../Components/Blog/BlogSection";
import { Footer } from "../Components/Footer";

type Post = { 
    id: number; 
    title: string; 
    date: string; 
    readTime: string; 
    img: string 
};

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    // Load posts from localStorage on component mount
    useEffect(() => {
        const savedPosts = localStorage.getItem('blogPosts');
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    return (
        <div>
            <Herosection />
            <Section2 posts={posts} />
            <HomeShowcase canEdit={false} posts={posts} />
            <Footer />
        </div>
    );
}