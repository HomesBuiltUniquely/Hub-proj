"use client"

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Footer } from "../../Components/Footer";

type Post = { 
    id: number; 
    title: string; 
    date: string; 
    readTime: string; 
    img: string 
};

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postId = params.id;
        if (postId) {
            // Load posts from localStorage
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
                    <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
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

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    <div className="relative h-96 w-full">
                        <img 
                            src={post.img} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Meta Information */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                H
                            </div>
                            <div className="ml-4">
                                <p className="font-semibold text-gray-900">HUB Interior</p>
                                <p className="text-gray-500 text-sm">Interior Design Expert</p>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Welcome to our comprehensive guide on {post.title.toLowerCase()}. In this detailed article, 
                                we'll explore the latest trends, innovative ideas, and practical tips that will help you 
                                transform your space into something truly remarkable.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Highlights</h2>
                            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                                <li>Modern design principles and their practical applications</li>
                                <li>Budget-friendly solutions that don't compromise on style</li>
                                <li>Color schemes that create the perfect ambiance</li>
                                <li>Furniture selection tips for optimal space utilization</li>
                                <li>Lighting strategies that enhance your interior design</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Design Philosophy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At HUB Interior, we believe that great interior design is about creating spaces that 
                                reflect your personality while maintaining functionality and comfort. Our approach 
                                combines contemporary aesthetics with timeless principles to deliver results that 
                                stand the test of time.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Implementation Tips</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you're planning a complete home makeover or looking to refresh a specific room, 
                                these insights will guide you through the process. Remember, the best interior design 
                                solutions are those that align with your lifestyle and personal preferences.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl my-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pro Tip</h3>
                                <p className="text-gray-700">
                                    Start with a mood board to visualize your ideas before making any purchases. 
                                    This simple step can save you time and money while ensuring your design vision 
                                    comes to life exactly as you imagined.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Creating beautiful, functional spaces is an art that requires careful planning and 
                                attention to detail. With the right approach and guidance, you can transform any 
                                space into a reflection of your unique style and personality.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-red-50 p-6 rounded-xl mt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Transform Your Space?</h3>
                            <p className="text-gray-700 mb-4">
                                Let our expert interior designers help you bring your vision to life. 
                                Get a free consultation and discover how we can create the perfect space for you.
                            </p>
                            <button 
                                onClick={() => router.push('/Contact')}
                                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                            >
                                Get Free Consultation
                            </button>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* This would typically show related posts */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <img src="/bn.jpg" alt="Related post" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Modern Living Room Ideas</h3>
                                <p className="text-gray-600 text-sm">Discover contemporary living room designs...</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <img src="/bn.jpg" alt="Related post" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Kitchen Design Trends</h3>
                                <p className="text-gray-600 text-sm">Explore the latest kitchen design trends...</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <img src="/bn.jpg" alt="Related post" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Bedroom Makeover Tips</h3>
                                <p className="text-gray-600 text-sm">Transform your bedroom with these tips...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
