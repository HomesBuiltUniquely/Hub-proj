"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../../Components/Footer";

export default function Blog5() {
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

            {/* Blog 5 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Interior Design Bangalore: How HUB Interior Crafted Serenity Heights Apartment into a Living Masterpiece</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 15 mins read</span>
                            <span>August 3, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Have you ever walked into a home and felt it really understood you?</p>
                            <p className="text-gray-700 leading-relaxed mb-4">A place where every corner feels made for the way you live? That is exactly what Mr. Allen and Mrs. Ann felt when they worked with HUB Interior for their Serenity Heights Apartment in Bangalore. They did not want just furniture or pretty decorations. They wanted a home that told their story, a home that was elegant, comfortable, and easy to live in while still feeling like their own.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">HUB Interior treated the apartment like a blank page. Every choice, from colors and textures to lights and furniture, was carefully thought out to fit the family's life. The goal was to make spaces that look amazing, work well, and feel welcoming. Homes that feel alive.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Walking through Serenity Heights, you can see the results everywhere. The kitchen is not only useful but also warm and inviting, perfect for talking and spending time together. The bedrooms are calm and cozy. Decorative wall panels and special ceilings add a little extra style. Even the Devotion Place combines peace and modern design. Every part shows HUB Interior's idea and personalised interior designs that are personal, useful, and built to last. Keep reading to find out more!</p>
                        </div>

                        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                            <img src="/temple1.jpg" alt="Serenity Heights Apartment" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-8">A glimpse into the serene and thoughtfully designed Serenity Heights Apartment project.</p>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4">Creating Serene Interiors: Devotion Space Design</h2>
                            <p>The journey of this home begins at the Devotion Place, a sanctuary designed for reflection, calm, and peace.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Design Elements:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Ambient Lighting:</strong> Layered lighting highlights sacred artefacts while creating a soft, calming atmosphere perfect for meditation or quiet moments.</li>
                                    <li><strong>Custom Shelving:</strong> Carefully designed shelves display artefacts and icons elegantly without overwhelming the space.</li>
                                    <li><strong>Natural Materials:</strong> Wood and stone elements add warmth and a grounded, earthy feel.</li>
                                </ul>
                            </div>
                            
                            <p>The space is calm and useful. It shows how HUB Interior cares about every detail and creates homes that make people feel peaceful and happy. These are luxury home interiors that do not just look beautiful; they feel meaningful.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Kitchen Interiors: Where Style Meets Function</h2>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/Ukitchen.png" alt="Kitchen interior design" className="w-full h-full object-cover" />
                            </div>
                            <p>The kitchen is the heart of a home, but at Serenity Heights, it is also a statement of design intelligence. HUB Interior innovates this functional zone into a space where modern kitchen design meets elegance and usability.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Features:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Glass Front Cabinets:</strong> Open, reflective surfaces enhance light flow and accessibility</li>
                                    <li><strong>Slab Kitchen Cabinets:</strong> Minimalist, smooth finishes create clean lines and a contemporary feel.</li>
                                    <li><strong>Window Seating Area:</strong> A cosy nook for reading, sipping coffee, or watching the cityscape adds charm and usability.</li>
                                </ul>
                            </div>
                            
                            <p>The kitchen is now a hub of daily life, efficient, stylish, and perfectly tailored to the family. It is an example of how Luxury Interior Design Bangalore is not just about appearances; it is about shaping the way people live every day</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Study Table Unit Design: Functional Spaces for Everyday Life</h2>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/bed3.jpg" alt="Study table unit" className="w-full h-full object-cover" />
                            </div>
                            <p>Recognising the need for a productive yet inspiring workspace, HUB Interior designed a bespoke study nook.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Study Unit Features:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Custom Desk:</strong> Ergonomically designed for long hours of study or work.</li>
                                    <li><strong>Smart Storage:</strong> Open shelves and hidden drawers keep clutter out of sight.</li>
                                    <li><strong>Seamless Design:</strong> Neutral tones and sleek finishes maintain visual harmony with the rest of the home.</li>
                                </ul>
                            </div>
                            
                            <p>This study unit illustrates HUB Interior's skill in creating bedroom interiors and home office spaces that are as functional as they are beautiful. It proves that even small corners can elevate lifestyle when designed thoughtfully</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Wall Panelling and Decorative Details</h2>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/TVUNIT.jpg" alt="Wall panelling design" className="w-full h-full object-cover" />
                            </div>
                            <p>Walls at Serenity Heights do more than divide rooms; they tell stories.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wall Design Elements:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Textured Panels:</strong> Subtle textures add depth, sophistication, and tactile interest.</li>
                                    <li><strong>Artful Integration:</strong> Panels provide a curated backdrop for décor while maintaining clean lines.</li>
                                    <li><strong>Coordinated Palette:</strong> Warm neutrals unify the home, creating a sense of flow and continuity.</li>
                                </ul>
                            </div>
                            
                            <p>Decorative wall elements are not just about aesthetics; they are about creating spaces that speak, blending practicality with refined luxury.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Elegant Fall Ceiling Designs</h2>
                            <p>Ceilings often define a room's character, and HUB Interior's design demonstrates that beautifully</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ceiling Design Features:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Layered Design:</strong> Fall ceilings add dimension and a sense of scale.</li>
                                    <li><strong>Integrated Lighting:</strong> Recessed lights highlight areas while keeping a soft ambient glow.</li>
                                    <li><strong>Subtle Finishes:</strong> Clean lines complement the décor, merging elegance with contemporary style.</li>
                                </ul>
                            </div>
                            
                            <p>These ceilings elevate every room, showcasing HUB Interior's expertise in creating modern luxury interiors that impress without overwhelming.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Bedrooms Interior Design: Comfort in Style</h2>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/bed3.jpg" alt="Bedroom interior design" className="w-full h-full object-cover" />
                            </div>
                            <p>Bedrooms are sanctuaries, and every room embodies comfort, functionality, and elegance.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bedroom Features:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Custom Wardrobes:</strong> Maximised storage blends seamlessly with décor</li>
                                    <li><strong>Warm Finishes:</strong> Soft, neutral tones create a calming, inviting atmosphere</li>
                                    <li><strong>Functional Layout:</strong> Thoughtful furniture placement keeps rooms open and airy</li>
                                </ul>
                            </div>
                            
                            <p>HUB Interior's bedroom interiors exemplify how luxury meets lifestyle, ensuring every night and morning feels effortless and refreshing.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Living Room Interior Design: TV Unit and Entertainment</h2>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/TVUNIT.jpg" alt="Living room TV unit" className="w-full h-full object-cover" />
                            </div>
                            <p>The living area balances style with practicality, anchored by a sleek TV unit.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Living Room Features:</h3>
                                <ul className="space-y-2">
                                    <li><strong>Minimalist Design:</strong> Neutral colours and clean lines maintain a spacious, uncluttered feel.</li>
                                    <li><strong>Smart Storage:</strong> Concealed shelves keep essentials organised without sacrificing aesthetics.</li>
                                    <li><strong>Practical Elegance:</strong> Designed for both everyday living and entertaining guests.</li>
                                </ul>
                            </div>
                            
                            <p>This space demonstrates how Luxury Interior Design Bangalore combines comfort, style, and intelligent functionality.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Interior Design Bangalore: Homes Designed to Inspire and Last</h2>
                            <p>What sets us apart is their ability to deeply understand the people who live in each space. Instead of following fleeting trends, they explore lifestyle, routines, and personal preferences to craft interiors that are both beautiful and practical. Each design is highly personalised, reflecting the character of the residents while creating harmony and flow throughout the home.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">HUB Interior's unique strengths elevate every project:</h3>
                                <ul className="space-y-2">
                                    <li><strong>34 day fast-track interiors</strong> for quicker move-ins</li>
                                    <li><strong>10 year warranty</strong> for lasting peace of mind</li>
                                    <li><strong>5000 plus projects delivered</strong>, showcasing unmatched experience</li>
                                    <li><strong>Custom designs and clever details</strong> that endure for years</li>
                                </ul>
                            </div>
                            
                            <p>They do not just design homes; they create spaces that stay with you, blending style, comfort, and individuality.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Final Words</h2>
                            <p>From the serene Devotion Place to the sleek kitchen and elegant bedrooms, Serenity Heights Apartment is a masterclass in HUB Interior's approach to luxury living. Every corner blends beauty with function, reflecting an understanding of how the family truly lives.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
