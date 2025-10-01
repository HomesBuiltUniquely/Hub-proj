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

export default function Blog6() {
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
                    <p className="text-gray-600 mb-8">The blog post you're looking for doesn&#39;t exist.</p>
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

            {/* Blog 6 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card (from Blog 6) */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How to Design a Functional Kitchen Interior in Bengaluru Without Compromising Style</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Ever opened your kitchen and felt like it&#39;s working against you? Counters cluttered, cabinets difficult to reach, lighting too dim for cooking? A kitchen is the heart of a home, and in Bengaluru’s fast-paced life, it needs to support your daily routine effortlessly while looking stylish. The right kitchen interior not only simplifies cooking but also makes the space a place to connect, create, and enjoy every meal.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Here&#39;s a practical guide with eight actionable steps to design a kitchen that balances style and function.</p>
                        </div>

                        {/* Steps */}
                        <div className="space-y-8 text-gray-700 leading-relaxed">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Analyse Your Kitchen Habits</h2>
                                <p className="mb-3">Before you plan layouts or choose finishes, look closely at how the kitchen is used every day. Think about:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>How often you cook and for how many people.</li>
                                    <li>Whether the kitchen doubles as a breakfast, coffee, or casual dining area.</li>
                                    <li>The storage you actually need for utensils, groceries, and appliances.</li>
                                </ul>
                                <p className="mt-3">Understanding your routine ensures the kitchen is designed around your life, rather than forcing you to adapt to the space. Proper planning sets the foundation for a kitchen interior in Bengaluru that works seamlessly.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Plan the Layout for Effortless Flow</h2>
                                <p className="mb-3">Movement in the kitchen should feel natural. Consider separating zones for cooking, prep, and socialising. A smart layout saves time and reduces frustration, even in small spaces.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Keep the sink, stove, and fridge within an ergonomic triangle.</li>
                                    <li>Create a prep area with easy access to knives, cutting boards, and ingredients.</li>
                                    <li>Designate a breakfast or coffee corner to keep the cooking zone free.</li>
                                </ul>
                                <p className="mt-3">Planning carefully ensures the kitchen supports both work and interaction, making it a hub of the home.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Choose Durable Materials with Style</h2>
                                <p className="mb-3">Material choice affects both usability and appearance. For modern kitchens, opt for surfaces that are long-lasting, easy to clean, and visually appealing.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Quartz or engineered stone for countertops that resist stains and scratches.</li>
                                    <li>Laminates for cabinets that provide a sleek finish without maintenance worries.</li>
                                    <li>Glass-front cabinets to reflect light and create a sense of space.</li>
                                </ul>
                                <p className="mt-3">Combining textures such as wood, stone, and metal adds visual depth while staying practical.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Maximise Storage with Modular Solutions</h2>
                                <p className="mb-3">Storage plays a key role in a well-designed kitchen. A modular kitchen interior in Bengaluru allows you to organise everything efficiently while keeping counters clear.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Pull-out drawers for spices, utensils, and cutlery.</li>
                                    <li>Rotating corner carousels for hard-to-reach items.</li>
                                    <li>Tall cabinets to use vertical space effectively.</li>
                                    <li>Pantry units for groceries, appliances, and bulk items.</li>
                                </ul>
                                <p className="mt-3">Efficient storage ensures everything has a place and adapts to changing needs.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Layer Lighting and Ventilation</h2>
                                <p className="mb-3">Good lighting changes how a kitchen feels and works. Combine different types of light to create a balanced, inviting space.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Task lighting under cabinets to illuminate counters.</li>
                                    <li>Ceiling lights for overall brightness.</li>
                                    <li>Accent lighting for shelves, islands, or decorative areas.</li>
                                </ul>
                                <p className="mt-3">Proper ventilation removes smoke, odours, and moisture, keeping the kitchen airy and comfortable.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 6: Design for Interaction</h2>
                                <p className="mb-3">Modern kitchens are social spaces. Open layouts, islands, and seating zones allow cooking to happen alongside conversations.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Add a breakfast bar or window seating for casual meals.</li>
                                    <li>Include space for family to engage without disrupting cooking.</li>
                                    <li>Create visual continuity with the living or dining area.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 7: Integrate Functional and Stylish Features</h2>
                                <p className="mb-3">Functionality doesn&#39;t have to be boring. Make storage, appliances, and work surfaces both practical and visually appealing.</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Pull-out spice racks, hidden drawers, and multi-tiered storage.</li>
                                    <li>Kitchen islands that double as prep space and casual seating.</li>
                                    <li>Integrated appliances for a sleek, uncluttered look.</li>
                                    <li>Statement backsplashes or lighting accents for visual interest.</li>
                                </ul>
                                <p className="mt-3">Combining practical solutions with design elements ensures your kitchen looks modern and works hard.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 8: Work with the Best Kitchen Interior Designers in Bengaluru</h2>
                                <p className="mb-3">At HUB Interior, we design and deliver complete modular kitchen solutions in Bengaluru, keeping your lifestyle and satisfaction at the heart of every project.</p>
                                <h4 className="font-semibold text-gray-900">Why choose HUB Interior:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Free 3D Design Consultations</li>
                                    <li>Clear Pricing & On-Time Delivery</li>
                                    <li>High-Quality Materials & Durable Products</li>
                                    <li>Hassle-Free Installation & Smart Storage Planning</li>
                                    <li>34-Day Fast-Track Interiors & 10-Year Warranty</li>
                                    <li>5000+ Projects Delivered</li>
                                </ul>
                                <p className="mt-3">With HUB Interior, you get more than a kitchen—you get a space tailored to your life.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Conclusion: A Kitchen That Supports Your Lifestyle</h2>
                        <p className="text-gray-700">A kitchen is more than just a cooking area—it&#39;s where life unfolds. From modular kitchen interiors to small and luxury kitchen designs in Bengaluru, thoughtful design ensures every movement is effortless, every item has a place, and every meal is enjoyable. Ready to bring your dream kitchen to life? Connect with HUB Interior for personalised design solutions that combine modern aesthetics, functionality, and innovation.</p>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}


