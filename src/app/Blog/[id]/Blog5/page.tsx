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

export default function Blog5() {
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

            {/* Blog 5 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card (from Blog 5) */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Interior Design Bangalore: How HUB Interior Crafted Serenity Heights Apartment into a Living Masterpiece</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Have you ever walked into a home and felt it really understood you? A place where every corner feels made for the way you live? That is exactly what Mr. Allen and Mrs. Ann felt when they worked with HUB Interior for their Serenity Heights Apartment in Bangalore. They did not want just furniture or pretty decorations. They wanted a home that told their story, a home that was elegant, comfortable, and easy to live in while still feeling like their own.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">HUB Interior treated the apartment like a blank page. Every choice, from colors and textures to lights and furniture, was carefully thought out to fit the family&#39;s life. The goal was to make spaces that look amazing, work well, and feel welcoming. Homes that feel alive.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Walking through Serenity Heights, you can see the results everywhere. The kitchen is not only useful but also warm and inviting, perfect for talking and spending time together. The bedrooms are calm and cozy. Decorative wall panels and special ceilings add a little extra style. Even the Devotion Place combines peace and modern design. Every part shows HUB Interior’s idea and personalised interior designs that are personal, useful, and built to last. Keep reading to find out more!</p>
                        </div>

                        {/* Devotion Space */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Creating Serene Interiors: Devotion Space Design</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                            <li><span className="font-semibold">Ambient Lighting:</span> Layered lighting highlights sacred artefacts while creating a soft, calming atmosphere perfect for meditation or quiet moments.</li>
                            <li><span className="font-semibold">Custom Shelving:</span> Carefully designed shelves display artefacts and icons elegantly without overwhelming the space.</li>
                            <li><span className="font-semibold">Natural Materials:</span> Wood and stone elements add warmth and a grounded, earthy feel.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-8">The space is calm and useful. It shows how HUB Interior cares about every detail and creates homes that make people feel peaceful and happy. These are luxury home interiors that do not just look beautiful; they feel meaningful.</p>

                        {/* Kitchen Interiors */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Kitchen Interiors: Where Style Meets Function</h2>
                        <p className="text-gray-700 mb-3">The kitchen is the heart of a home, but at Serenity Heights, it is also a statement of design intelligence. HUB Interior innovates this functional zone into a space where modern kitchen design meets elegance and usability.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Glass Front Cabinets:</span> Open, reflective surfaces enhance light flow and accessibility</li>
                            <li><span className="font-semibold">Slab Kitchen Cabinets:</span> Minimalist, smooth finishes create clean lines and a contemporary feel.</li>
                            <li><span className="font-semibold">Window Seating Area:</span> A cosy nook for reading, sipping coffee, or watching the cityscape adds charm and usability.</li>
                        </ul>
                        <p className="text-gray-700 mb-8">The kitchen is now a hub of daily life, efficient, stylish, and perfectly tailored to the family. It is an example of how Luxury Interior Design Bangalore is not just about appearances; it is about shaping the way people live every day</p>

                        {/* Study Table Unit */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Study Table Unit Design: Functional Spaces for Everyday Life</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Custom Desk:</span> Ergonomically designed for long hours of study or work.</li>
                            <li><span className="font-semibold">Smart Storage:</span> Open shelves and hidden drawers keep clutter out of sight.</li>
                            <li><span className="font-semibold">Seamless Design:</span> Neutral tones and sleek finishes maintain visual harmony with the rest of the home.</li>
                        </ul>
                        <p className="text-gray-700 mb-8">This study unit illustrates HUB Interior&#39;s skill in creating bedroom interiors and home office spaces that are as functional as they are beautiful. It proves that even small corners can elevate lifestyle when designed thoughtfully.</p>

                        {/* Wall Panelling */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Wall Panelling and Decorative Details</h2>
                        <p className="text-gray-700 mb-3">Walls at Serenity Heights do more than divide rooms; they tell stories.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Textured Panels:</span> Subtle textures add depth, sophistication, and tactile interest.</li>
                            <li><span className="font-semibold">Artful Integration:</span> Panels provide a curated backdrop for décor while maintaining clean lines.</li>
                            <li><span className="font-semibold">Coordinated Palette:</span> Warm neutrals unify the home, creating a sense of flow and continuity.</li>
                        </ul>

                        {/* Fall Ceilings */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Elegant Fall Ceiling Designs</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Layered Design:</span> Fall ceilings add dimension and a sense of scale.</li>
                            <li><span className="font-semibold">Integrated Lighting:</span> Recessed lights highlight areas while keeping a soft ambient glow.</li>
                            <li><span className="font-semibold">Subtle Finishes:</span> Clean lines complement the décor, merging elegance with contemporary style.</li>
                        </ul>
                        <p className="text-gray-700 mb-8">These ceilings elevate every room, showcasing HUB Interior&#39;s expertise in creating modern luxury interiors that impress without overwhelming.</p>

                        {/* Bedrooms */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Bedrooms Interior Design: Comfort in Style</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Custom Wardrobes:</span> Maximised storage blends seamlessly with décor</li>
                            <li><span className="font-semibold">Warm Finishes:</span> Soft, neutral tones create a calming, inviting atmosphere</li>
                            <li><span className="font-semibold">Functional Layout:</span> Thoughtful furniture placement keeps rooms open and airy</li>
                        </ul>
                        <p className="text-gray-700 mb-8">HUB Interior&#39;s bedroom interiors exemplify how luxury meets lifestyle, ensuring every night and morning feels effortless and refreshing.</p>

                        {/* Living Room */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Living Room Interior Design: TV Unit and Entertainment</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Minimalist Design:</span> Neutral colours and clean lines maintain a spacious, uncluttered feel.</li>
                            <li><span className="font-semibold">Smart Storage:</span> Concealed shelves keep essentials organised without sacrificing aesthetics.</li>
                            <li><span className="font-semibold">Practical Elegance:</span> Designed for both everyday living and entertaining guests.</li>
                        </ul>
                        <p className="text-gray-700 mb-8">This space demonstrates how Luxury Interior Design Bangalore combines comfort, style, and intelligent functionality.</p>

                        {/* Strengths */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Interior Design Bangalore: Homes Designed to Inspire and Last</h2>
                        <p className="text-gray-700 mb-3">What sets us apart is their ability to deeply understand the people who live in each space. Instead of following fleeting trends, they explore lifestyle, routines, and personal preferences to craft interiors that are both beautiful and practical. Each design is highly personalised, reflecting the character of the residents while creating harmony and flow throughout the home.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li>34 day fast-track interiors for quicker move-ins</li>
                            <li>10 year warranty for lasting peace of mind</li>
                            <li>5000 plus projects delivered, showcasing unmatched experience</li>
                            <li>Custom designs and clever details that endure for years</li>
                        </ul>

                        {/* Conclusion */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Final Words</h2>
                        <p className="text-gray-700">From the serene Devotion Place to the sleek kitchen and elegant bedrooms, Serenity Heights Apartment is a masterclass in HUB Interior&#39;s approach to luxury living. Every corner blends beauty with function, reflecting an understanding of how the family truly lives.</p>
                        
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}


