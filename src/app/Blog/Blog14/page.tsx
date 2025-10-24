"use client"

import React from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Footer from "@/app/Components/Home/Footer";

export default function Blog14() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f1f2f6] manrope-medium">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <button
                        onClick={() => router.push('/Blog')}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4 manrope-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </button>
                </div>
            </div>

            {/* Blog 14 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 manrope">Top 5 Living Room Design Themes for Modern Urban Homes</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6 manrope-medium">
                            <span>Blog • 10 mins read</span>
                            <span>October 21, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">Living in a city often means balancing style with space. Your living room is where you unwind after a busy day, host friends and family, and sometimes even work from home. But how do you create a space that feels personal, comfortable and stylish in a compact urban apartment? With the right <span className="font-black text-black">living room interior design</span> approach, small spaces can feel open, modern and lively.</p>
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">The trends for 2025 are leaning toward simplicity, versatility and clever layouts that adapt to city life. <span className="font-black text-black">Modern urban home interior design</span> is not just about furniture or colour schemes. It is about how a room flows with your lifestyle, how it makes you feel, and how it solves everyday problems like storage or movement.</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4 manrope">1. Minimalist Modern</h2>
                            <p className="manrope-medium">Minimalism is no longer just an aesthetic, it is a lifestyle. Clean lines, neutral tones and clutter-free spaces make your living room feel larger and calmer. Imagine a soft cream sofa, a sleek coffee table and a single statement artwork on the wall. The floor is free, allowing you to move around easily or enjoy yoga sessions without obstacles.</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog14img1.png" alt="Minimalist modern living room" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium">This approach is perfect for small city apartments. With smart storage options, such as under-sofa drawers or floating shelves, you can hide away items while keeping essentials within reach. <span className="font-black text-black">Space-saving living room designs</span> like this help busy urban professionals live without feeling boxed in.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">2. Contemporary Comfort</h2>
                            <p className="manrope-medium"><span className="font-black text-black">Contemporary living room design</span> focuses on balance between modern style and comfort. Think of plush seating in muted colours paired with textured rugs and soft lighting. Large windows with sheer curtains can make the room feel bright and airy even on a rainy day.</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog14img2.png" alt="Contemporary comfort living room" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium">This style also encourages flexible furniture arrangements. A modular sofa can become a lounge area in the evening or extra seating when guests arrive. These <span className="font-black text-black">modern living room ideas</span> cater to both everyday relaxation and occasional entertaining, making your living room a hub of activity without feeling chaotic.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">3. Industrial Chic</h2>
                            <p className="manrope-medium">Exposed brick walls, metal accents and wooden furniture define the industrial look. It may sound bold for urban apartments, but the charm lies in mixing raw elements with soft touches. A velvet armchair or a patterned rug balances the rough textures, creating a space that is both edgy and welcoming.</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog14img3.png" alt="Industrial chic living room" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium"><span className="font-black text-black">Home interior designs in Bengaluru</span> often adopt this theme to bring a contemporary feel to old city apartments. The open layout and visible structural elements make the room feel larger while giving it a distinct character. Lighting plays a key role here. A combination of pendant lights and floor lamps can highlight textures and create a dramatic yet lived-in feel.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">4. Scandinavian Simplicity</h2>
                            <p className="manrope-medium">Scandinavian design is about light, airy spaces with functional furniture. White walls, wooden floors and a few pastel accents instantly make a living room feel fresh. Open shelving and simple storage cabinets keep the space organised.</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog14img4.png" alt="Scandinavian simplicity living room" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium">Scandinavian interiors also encourage natural light and indoor plants. A small balcony or corner garden can make the room feel like a retreat from the busy streets outside. <span className="font-black text-black">Contemporary living room design</span> that follows this style promotes calmness, clarity and a sense of order that city life often lacks.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">5. Eclectic Fusion</h2>
                            <p className="manrope-medium">For those who love personality and character, eclectic fusion blends colours, patterns and textures without overwhelming the senses. Think of combining a vintage rug with a modern sofa, or bright cushions on neutral seating. The key is cohesion rather than uniformity.</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog14img5.png" alt="Eclectic fusion living room" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium">This theme allows you to bring memories into the room. A hand-painted vase from a local market, a family photograph in an unusual frame or a craft piece from a recent trip can all become conversation starters. Eclectic spaces reflect individuality and creativity while still providing a functional living area for everyday life.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">How Layout Makes a Difference?</h2>
                            <p className="manrope-medium">Choosing the <span className="font-black text-black">best living room layouts for city homes</span> is as important as the theme. Open layouts make small spaces feel bigger, while zones within the room can separate relaxing areas from work or entertainment corners. Furniture with multiple purposes, like ottomans with storage or coffee tables with hidden compartments, maximises space without compromising style.</p>
                            <p className="manrope-medium">Lighting is equally important. Layered lighting using a mix of ceiling, floor and table lamps can change the mood of the room instantly. During the day, natural light can illuminate the space, while in the evening, soft lamps create a calm environment.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">Why Trends Matter?</h2>
                            <p className="manrope-medium">Following <span className="font-black text-black">top interior design trends 2025</span> is not about copying styles blindly. It is about understanding what works for urban living. Trends like modular seating, wall-mounted storage, multi-functional furniture and minimalist art help solve the challenge of compact spaces while keeping them modern. They make everyday living easier, smarter and more enjoyable.</p>
                            <p className="manrope-medium"><span className="font-black text-black">Modern home décor ideas in Bengaluru</span> often include clever storage, flexible layouts and textures that feel natural yet stylish. The focus is on creating rooms that match real life instead of just looking perfect for a photo.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">Smart Solutions with Professional Help</h2>
                            <p className="manrope-medium">If transforming your living room feels overwhelming, expert guidance can make all the difference. <Link href="/" className="text-red-500 hover:text-red-600 font-semibold manrope-medium">HUB Interior</Link> is India's leading interior design company offering tailor-made solutions from modular kitchens to luxury villas. We specialise in creating master bedrooms and living spaces in Bengaluru with best layouts, ambient lighting and thoughtful storage. With over 5,000 projects delivered, a 10-year warranty and a 34-day fast-track promise, we ensure your interiors are personalized, practical and beautiful.</p>
                            <p className="manrope-medium">Hiring professionals helps in choosing the right furniture, colours and layouts that work for your lifestyle. With HUB Interior, you can achieve stylish <span className="font-black text-black">urban home interior design</span> that makes your daily life comfortable while giving your home a modern and elegant look.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}