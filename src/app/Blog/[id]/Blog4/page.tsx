"use client"

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Footer } from "../../../Components/Footer";

type Post = {
    id: number;
    title: string;
    date: string;
    readTime: string;
    img: string;
};

export default function Blog2() {
    const router = useRouter();
    const params = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postId = params.id;
        if (postId) {
            const savedPosts = localStorage.getItem('blogPosts');
            if (savedPosts) {
                const posts: Post[] = JSON.parse(savedPosts);
                const foundPost = posts.find(p => p.id === parseInt(postId as string));
                setPost(foundPost || null);
            }
            setLoading(false);
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading blog post...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you&#39;re looking for doesn&#39;t exist.</p>
                    <button 
                        onClick={() => router.push('/Blog')}
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Back to Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f1f2f6]">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <button 
                        onClick={() => router.push('/Blog')}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </button>
                </div>
            </div>

            {/* Blog 2 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card (from Blog 2) */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Inside Mr. & Mrs. Rijul Azizam&#39;s Home, Designed by Hub Interior</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">We call this project the art of filling in the blanks.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">Mr. and Mrs. Rijul didn&#39;t want “fancy.” They wanted “OURS.” And we, being renowned interior designers in Bangalore, were all up for it.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">But before I take you on a tour of the new interiors, let&#39;s rewind a little bit and talk about how this project came together after they reached the top interior designers in Bangalore.</p>
                        </div>

                        {/* Ambience image */}
                        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                            <img 
                                src={'/bn.jpg'}
                                alt={'Warm living ambience'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-8">Soft lighting, warm textures, and uncluttered forms set the tone for unhurried living.</p>

                        {/* Sections */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-semibold text-gray-900 pt-2">The Living Area</h3>
                            <p>A clean-lined TV unit and hidden storage keep the living room open and calm, with just the right contrast in finishes.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/TVUNIT.jpg" alt="Living area TV unit" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-600 text-sm">Streamlined, functional, and quietly elegant.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">The Kitchen</h3>
                            <p>A practical U-shaped layout with tall storage and deep drawers—everything within reach, nothing in the way.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/Ukitchen.png" alt="Modern functional kitchen" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-600 text-sm">Designed for daily ease and long-term durability.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">The Prayer Corner</h3>
                            <p>A peaceful, minimal area for quiet moments—subtle lighting and honest materials make it feel intimate and grounded.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/temple1.jpg" alt="Prayer corner" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-600 text-sm">Simple, sacred, and softly lit.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Bedroom Storage</h3>
                            <p>Built-ins that blend in—ample storage without visual clutter, keeping the bedroom calm.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/bed3.jpg" alt="Bedroom wardrobe" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-600 text-sm">Everything in its place, nothing out of place.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}


