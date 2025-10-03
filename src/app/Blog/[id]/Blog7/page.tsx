"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../../Components/Footer";

export default function Blog7() {
    const router = useRouter();

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

            {/* Blog 7 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Sustainable Interior Design Practices</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 14 mins read</span>
                            <span>August 7, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Create beautiful, eco-friendly interiors that are kind to the planet and your health.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Sustainable design isn't just about being environmentally conscious - it's about creating healthier, more durable spaces that stand the test of time.</p>
                        </div>

                        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                            <img src="/bn.jpg" alt="Sustainable interior design" className="w-full h-full object-cover" />
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-semibold text-gray-900 pt-2">Eco-Friendly Materials</h3>
                            <p>Choose materials like bamboo, reclaimed wood, and recycled metals that have minimal environmental impact while adding natural beauty to your space.</p>
                            
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Energy-Efficient Lighting</h3>
                            <p>Opt for LED lighting and maximize natural light to reduce energy consumption while creating a bright, welcoming atmosphere.</p>
                            
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Low-VOC Paints and Finishes</h3>
                            <p>Select paints and finishes with low volatile organic compounds to improve indoor air quality and create a healthier living environment.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}