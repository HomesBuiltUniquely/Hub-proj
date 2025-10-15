"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../Components/Footer";

export default function Blog5() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f1f2f6] manrope-medium">
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

                            <img src="/blog5img1.jpg" alt="Serenity Heights Apartment" className="w-full h-full object-cover rounded-xl" />
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Have you ever walked into a home and felt it really understood you?</p>
                            <p className="text-gray-700 leading-relaxed mb-4">A place where every corner feels made for the way you live? That is exactly what Mr. Allen and Mrs. Ann felt when they worked with HUB Interior for their Serenity Heights Apartment in Bangalore. They did not want just furniture or pretty decorations. They wanted a home that told their story, a home that was elegant, comfortable, and easy to live in while still feeling like their own.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">HUB Interior treated the apartment like a blank page. Every choice, from colors and textures to lights and furniture, was carefully thought out to fit the family&#39;s life. The goal was to make spaces that look amazing, work well, and feel welcoming. Homes that feel alive.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Walking through Serenity Heights, you can see the results everywhere. The kitchen is not only useful but also warm and inviting, perfect for talking and spending time together. The bedrooms are calm and cozy. Decorative wall panels and special ceilings add a little extra style. Even the Devotion Place combines peace and modern design. Every part shows HUB Interior&#39;s idea and personalised interior designs that are personal, useful, and built to last. Keep reading to find out more!</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4">Creating Serene Interiors: Devotion Space Design</h2>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog5img2.png" alt="Devotaion space" className="w-full h-full object-cover" />
                            </div>
                            <p>The journey of this home begins at the Devotion Place, a sanctuary designed for reflection, calm, and peace.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Design Elements:</h3>
                            <ul className="space-y-4">
                                <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full" />
                                <div>
                                    <div className="font-semibold text-black leading-tight">Ambient Lighting:</div>
                                    <p className="text-gray-700">
                                    Layered lighting highlights sacred artefacts while creating a soft, calming atmosphere
                                    perfect for meditation or quiet moments.
                                    </p>
                                </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full" />
                                <div>
                                    <div className="font-semibold text-black leading-tight">Custom Shelving:</div>
                                    <p className="text-gray-700">
                                    Carefully designed shelves display artefacts and icons elegantly without overwhelming the space.
                                    </p>
                                </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full" />
                                <div>
                                    <div className="font-semibold text-black leading-tight">Natural Materials:</div>
                                    <p className="text-gray-700">
                                    Wood and stone elements add warmth and a grounded, earthy feel.
                                    </p>
                                </div>
                                </li>
                            </ul>
                            </div>


                            
                            <p>The space is calm and useful. It shows how HUB Interior cares about every detail and creates homes that make people feel peaceful and happy. These are luxury home interiors that do not just look beautiful; they feel meaningful.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Kitchen Interiors: Where Style Meets Function</h2>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img3.png" alt="Kitchen interior design" className="w-full h-full object-cover" />
                            </div>
                            <p>The kitchen is the heart of a home, but at Serenity Heights, it is also a statement of design intelligence. HUB Interior innovates this functional zone into a space where modern kitchen design meets elegance and usability.</p>
                            
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Features:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Glass Front Cabinets:</strong></span> Open, reflective surfaces enhance light flow and accessibility
                                </li>
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Slab Kitchen Cabinets:</strong></span> Minimalist, smooth finishes create clean lines and a contemporary feel.
                                </li>
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Window Seating Area:</strong></span><p> A cosy nook for reading, sipping coffee, or watching the cityscape adds charm and usability.</p>
                                </li>
                            </ul>
                        </div>

                            
                            <p>The kitchen is now a hub of daily life, efficient, stylish, and perfectly tailored to the family. It is an example of how Luxury Interior Design Bangalore is not just about appearances; it is about shaping the way people live every day</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Study Table Unit Design: Functional Spaces for Everyday Life</h2>
                            <p>Recognising the need for a productive yet inspiring workspace, HUB Interior designed a bespoke study nook.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Study Unit Features:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Custom Desk:</strong></span> Ergonomically designed for long hours of study or work.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Smart Storage:</strong></span> Open shelves and hidden drawers keep clutter out of sight.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Seamless Design:</strong></span>Neutral tones and sleek finishes maintain visual harmony with the rest of the home.
                                    </li>
                                </ul>
                            </div>

                            
                            <p>This study unit illustrates HUB Interior&#39;s skill in creating bedroom interiors and home office spaces that are as functional as they are beautiful. It proves that even small corners can elevate lifestyle when designed thoughtfully</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Wall Panelling and Decorative Details</h2>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog5img3.png" alt="Wall panelling design" className="w-full h-full object-cover" />
                            </div>
                            <p>Walls at Serenity Heights do more than divide rooms; they <span className="font-black text-black">tell stories.</span></p>
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wall Design Elements:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Textured Panels:</strong></span> Subtle textures add depth, sophistication, and tactile interest.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Artful Integration:</strong></span> Panels provide a curated backdrop for décor while maintaining clean lines.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Coordinated Palette:</strong></span> Warm neutrals unify the home, creating a sense of flow and continuity.
                                    </li>
                                </ul>
                            </div>

                            
                            <p>Decorative wall elements are not just about aesthetics; they are about creating spaces that speak, blending practicality with refined luxury.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Elegant Fall Ceiling Designs</h2>
                            <p>Ceilings often define a room&#39;s character, and HUB Interior&#39;s design demonstrates that beautifully</p>
                            
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ceiling Design Features:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Layered Design:</strong></span> Fall ceilings add dimension and a sense of scale.
                                </li>
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Integrated Lighting:</strong></span> Recessed lights highlight areas while keeping a soft ambient glow.
                                </li>
                                <li className="flex items-start gap-2">
                                <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <span className="font-semibold text-black"><strong>Subtle Finishes:</strong></span> Clean lines complement the décor, merging elegance with contemporary style.
                                </li>
                            </ul>
                        </div>

                            
                            <p>These ceilings elevate every room, showcasing HUB Interior&#39;s expertise in creating <span className="font-black text-black">modern luxury interiors</span> that impress without overwhelming.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Bedrooms Interior Design: Comfort in Style</h2>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog5img4.png" alt="Bedroom interior design" className="w-full h-full object-cover" />
                            </div>
                            <p>Bedrooms are sanctuaries, and every room embodies comfort, functionality, and elegance.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bedroom Features:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Custom Wardrobes:</strong></span> Maximised storage blends seamlessly with decor.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Warm Finishes:</strong></span> Soft, neutral tones create a calming, inviting atmosphere
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Functional Layout:</strong></span> Thoughtful furniture placement keeps rooms open and airy
                                    </li>
                                </ul>
                            </div>

                            
                            <p>HUB Interior&#39;s bedroom interiors exemplify how luxury meets lifestyle, ensuring every night and morning feels effortless and refreshing.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Living Room Interior Design: TV Unit and Entertainment</h2>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog5img5.png" alt="Living room TV unit" className="w-full h-full object-cover" />
                            </div>
                            <p>The living area balances style with practicality, anchored by a sleek TV unit.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Living Room Features:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Minimalist Design:</strong></span> Neutral colours and clean lines maintain a spacious, uncluttered feel.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Smart Storage:</strong></span> Concealed shelves keep essentials organised without sacrificing aesthetics.
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black"><strong>Practical Elegance:</strong></span> Designed for both everyday living and entertaining guests.
                                    </li>
                                </ul>
                            </div>

                            
                            <p>This space demonstrates how <span className="font-black text-black">Luxury Interior Design Bangalore</span> combines comfort, style, and intelligent functionality.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Interior Design Bangalore: Homes Designed to Inspire and Last</h2>
                            <p>What sets us apart is their ability to deeply understand the people who live in each space. Instead of following fleeting trends, they explore lifestyle, routines, and personal preferences to craft interiors that are both beautiful and practical. Each design is highly personalised, reflecting the character of the residents while creating harmony and flow throughout the home.</p>
                            
                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    HUB Interior&#39;s unique strengths elevate every project:
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black">
                                        <strong>34 day fast-track interiors</strong> for quicker move-ins
                                    </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black">
                                        <strong>10 year warranty</strong> for lasting peace of mind
                                    </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black">
                                        <strong>5000 plus projects delivered</strong>, showcasing unmatched experience
                                    </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-black">
                                        <strong>Custom designs and clever details</strong> that endure for years
                                    </span>
                                    </li>
                                </ul>
                            </div>

                            
                            <p>They do not just design homes; they create <span className="font-black text-black">spaces that stay with you</span>, blending style, comfort, and individuality.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Final Words</h2>
                            <p>From the serene Devotion Place to the sleek kitchen and elegant bedrooms, Serenity Heights Apartment is a masterclass in HUB Interior&#39;s approach to luxury living. Every corner blends beauty with function, reflecting an understanding of how the family truly lives.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
