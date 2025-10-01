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

export default function Blog7() {
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

            {/* Blog 7 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card (from Blog 7) */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Expert Solutions to Bedroom Interiors Problems Homeowners Face</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Struggling with bedroom design solutions is common when your space feels cramped or awkwardly shaped. When choosing furniture, a standard bed height of 18-20 inches (including mattress) provides optimal ease of use and convenience, however, many homeowners overlook this crucial detail.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">For small bedroom interior ideas, using light and pastel colors can create the illusion of more space. Additionally, contemporary bedroom interiors benefit from floor-length panel curtains hung near the ceiling instead of at the window frame, making rooms appear more spacious. In fact, modern bedroom designs should embrace the principle that when space is limited, "every inch saved is an inch earned".</p>
                            <p className="text-gray-700 leading-relaxed mb-8">This guide addresses the most common bedroom interior problems you might face and provides expert solutions to renovate your space. Whether you&#39;re dealing with awkward layouts, furniture that doesn&#39;t fit, or lighting challenges, you'll find practical advice to create a bedroom that&#39;s both functional and beautiful!</p>
                        </div>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Common Bedroom Designs Layout & Space Planning Tips</h2>
                        <p className="text-gray-700 mb-4">Creating a functional bedroom interior in Bengaluru starts with smart space planning. Even small rooms can feel open and airy with thoughtful design choices.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Bed Placement Matters</h3>
                        <p className="text-gray-700 mb-3">Where you place your bed shapes the entire room. Avoid pushing it into a corner; it can make the space feel off-balance. Ideally, center the bed on the longest wall, leaving at least three feet around it for easy movement. For smaller bedrooms, a low bed frame can make the ceiling feel higher and the room more spacious. If your bed is near a window, pick a lower headboard or a material like rattan that lets light through.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Tackling Awkward Shapes</h3>
                        <p className="text-gray-700 mb-3">Slanted ceilings or alcoves don&#39;t have to be a problem. Use full-height areas for beds and turn recessed spots into cozy nooks, desks, or shelving.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Avoid Dead Corners</h3>
                        <p className="text-gray-700 mb-3">Corners don&#39;t have to go to waste. L-shaped or modular fittings, corner shelves, floor lamps, or custom storage can turn them into functional areas.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Better Flow in Small Rooms</h3>
                        <p className="text-gray-700 mb-6">Prioritise pathways and choose material that fits. Multi-functional pieces such as beds with storage or wall-mounted shelves keep things organised. Vertical storage and minimal, high-quality furnishing make even compact bedroom designs feel open and effortless.</p>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Furniture Choices That Make or Break Your Luxury Bedroom Interiors</h2>
                        <p className="text-gray-700 mb-3">The right pieces can turn a bedroom from cramped to comfortable. Poor choices, on the other hand, can make even large rooms feel cluttered and impractical.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Pick the Right Bed Size</h3>
                        <p className="text-gray-700 mb-3">Your bed should be the room&#39;s focal point without taking over. Leave at least three feet around it for movement. Always check doorways before buying, and consider the room&#39;s purpose as multipurpose spaces often need smaller beds. King-size beds suit master bedrooms, while queen or double beds are ideal for smaller spaces.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Rethink Bedside Tables</h3>
                        <p className="text-gray-700 mb-3">Tight spaces often make nightstands tricky. Wall-mounted floating shelves or headboards with built-in storage save space. Slim console tables or repurposed bar carts provide surfaces without bulk.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Smart Wardrobe Solutions</h3>
                        <p className="text-gray-700 mb-3">Large wardrobes can crowd a room. Sliding doors save space, and floor-to-ceiling designs maximize storage. Built-in wardrobes make use of corners or wall niches, while multifunctional units can combine storage with desks or TV setups.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Seating That Works</h3>
                        <p className="text-gray-700 mb-6">Modern bedrooms serve multiple purposes. A bench at the foot of the bed offers seating and storage. Compact armchairs near windows create cosy reading spots. Sleek chairs with a desk can double as a work nook.</p>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Common Bedroom Lighting & Ceiling Mistakes</h2>
                        <p className="text-gray-700 mb-3">Lighting can completely change a bedroom&#39;s mood, but even well-planned small bedroom interiors in Bengaluru can feel off without the right approach.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Ceiling Height Tips</h3>
                        <p className="text-gray-700 mb-3">For ceilings under 8 feet, choose fixtures that sit close to the ceiling, like flush-mounted LEDs or slim pendants. Light-colored ceilings reflect more light, making the room feel brighter and larger.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Avoid Harsh Lights</h3>
                        <p className="text-gray-700 mb-3">Strong white LEDs can make a bedroom feel cold and uninviting. Opt for softer alternatives like table lamps, wall sconces, or floor lamps. In compact rooms, battery-operated lights provide flexible solutions without rewiring.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Layer Your Lighting</h3>
                        <p className="text-gray-700 mb-1">A well-lit bedroom uses three layers:</p>
                        <ul className="list-disc list-inside mb-3">
                            <li>Ambient: General illumination for overall brightness.</li>
                            <li>Task: Focused lighting for activities like reading.</li>
                            <li>Accent: Highlights features or décor.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-900">False Ceiling Ideas</h3>
                        <p className="text-gray-700 mb-6">False ceilings add style and function. They hide wires and allow integrated smart LED lighting controlled via smartphone. Pendant lights hanging from false ceilings bring elegance while keeping the space practical.</p>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Storage and Decor Challenges in Bedroom Designs</h2>
                        <p className="text-gray-700 mb-3">Even the most beautifully designed bedrooms can feel chaotic without proper storage and thoughtful decoration. Small spaces require strategic organisation to maintain both space and style.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Creative Storage for Small Bedrooms</h3>
                        <p className="text-gray-700 mb-3">Use floor-to-ceiling wardrobes and under-bed drawers to save space. Multi-functional furniture like storage benches or desks doubling as nightstands keeps the room organized without clutter.</p>
                        <h3 className="text-xl font-semibold text-gray-900">How to Dress Up a Bed</h3>
                        <p className="text-gray-700 mb-3">Layer pillows, throws, or linen fabrics to add texture and personality. For a minimalist look, stick to a few pillows and a simple throw.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Using Wall Space</h3>
                        <p className="text-gray-700 mb-3">Floating shelves, wall cubbies, and pegboards provide storage without taking floor space. Alcoves can become shelves or desk nooks.</p>
                        <h3 className="text-xl font-semibold text-gray-900">Fixing Color & Concealing Utilities</h3>
                        <p className="text-gray-700 mb-6">Follow the 60/30/10 color rule for cohesion. Box, paint, or creatively use exposed pipes and panels to blend style with function.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Conclusion</h2>
                        <p className="text-gray-700">Looking for a bedroom interior that feels like home? At HUB Interior, we design master bedrooms in Bengaluru with smart layouts, warm lighting, and custom wardrobes. With 34-day fast-track interiors, a 10-year warranty, and 5,000+ projects delivered, we create personalised, practical, and beautiful bedroom retreats.</p>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}


