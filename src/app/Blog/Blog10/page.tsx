"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../Components/Footer";

export default function Blog10() {
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

            {/* Blog 10 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Royal Tulip Villa – Another Happy Customer Story and Why Royal Tulip Residents Love HUB Interior</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 10 mins read</span>
                            <span>October 21, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">This is one of the projects that just sticks with us. We always say a home&#39;s personality starts with the people who live in it, and Mr. Dilip&#39;s brief reflected just that. Royal Tulip Villa is made in a way that is not over the top, not sterile, but warm, layered, and undeniably his. (Basically, our favorite kind of brief!)</p>
                            <p className="text-gray-700 leading-relaxed mb-4">When he reached out to HUB Interior, he had a simple but powerful vision for his new home. And that&#39;s exactly what our HUB Interior team, one of the <span className="font-black text-black">best interior designers in Bangalore</span>, set out to achieve.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">Here&#39;s what we did and what you can absolutely steal for your own home.</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4">The Living Room Highlight - The TV Unit</h2>
                            <p>The TV unit steals the limelight of this villa. We designed it with four small white drawers, brown wall panels on the sides for texture, and gold LED strips that make the whole thing glow like it&#39;s straight out of a magazine. Layering the color, texture, and lighting instantly upgraded the whole look of the living room.</p>
                            <p>It was neat with no hassle of wires and had enough space to store items. The upper area of the drawers provided enough space to decorate the showpieces.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img1.jpeg" alt="Royal Tulip Villa TV unit" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">A Kitchen That Wows</h2>
                            <p>This one&#39;s a show-stealer. When Mr. Dilip mentioned he wanted a kitchen that felt modern but practical, our designers knew exactly what to do. The final result is a gorgeous blend of glass-front cabinets, white slab cabinets, and a brown tambour unit that makes storage look stunning.</p>
                            <p>We added a wicker basket pull-out for everyday essentials and balanced the tones with grey and beige storage cabinets to anchor the palette.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img2.jpeg" alt="Royal Tulip Villa kitchen" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">The Handwash + Crockery Unit</h2>
                            <p>Can we take a moment to appreciate the handwash and crockery unit near the dining area? We paired the handwash unit with a crockery display near the dining area that has glass-front cabinets, subtle black and white contrasts, and that chic marble design finish. It&#39;s functional and fabulous.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img3.jpeg" alt="Royal Tulip Villa handwash and crockery unit" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">The Statement Wardrobe</h2>
                            <p>Coming onto the star of the bedroom: the wardrobe. We designed a marble-finish wardrobe with two white units and a mirror panel in the center, giving the illusion of more space while doubling up as a dressing mirror. It&#39;s sleek, practical, and just the right amount of fancy, because who doesn&#39;t want a bit of luxury in their morning routine?</p>
                            <p>The wardrobe was paired with silver handles, while the two drawers below the mirror had golden knobs for contrast. The top of the wardrobe carried a lot of storage cabinets in dark blue, creating a contrast. The goal for this wardrobe was very clear: think comfort first. We wanted a wardrobe that helps to organize, not overwhelm, and Mr. Dilip loved the whole outcome (so did we).</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img4.jpeg" alt="Royal Tulip Villa wardrobe" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">False Ceiling + Wall Panels</h2>
                            <p>If you think ceilings are boring, think again. What makes Royal Tulip Villa truly stand out is the attention to detail. We created a false ceiling that had soft curves paired with recessed lights, and hidden cove lighting added a gentle glow. The rectangular inset was sleek and modern, perfect for a statement fixture.</p>
                            <p>For the ceiling in the kitchen, we went with a modern and minimalistic approach, featuring clean linear LED strips that formed geometric patterns. We also added recessed lights for soft illumination, making the room feel bright and spacious while keeping the design elegant.</p>
                            <p>Every detail was carefully considered. And yes, our team at HUB Interior did measure twice, maybe thrice, to make sure it felt just right.</p>
                            <p>As for the wall panelling, Mr. Dilip wanted it to be minimal yet something that matched the vibe of the house. We went with a rectangular panelling that gave depth and texture to the overall wall. It was clean, structured, and balanced. This area was perfect for keeping furniture, art, or décor to make it stand out.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img5.jpeg" alt="Royal Tulip Villa false ceiling and wall panels" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Calm & Contemporary Walk-in Wardrobe</h2>
                            <p>Speaking of wardrobes, yes, there&#39;s also a walk-in wardrobe (we told you this house was special). This space was designed in shades of white with a statement mirror that brought the whole look together. The walk-in wardrobe comprised two big wardrobes in white with a black door in the middle to create a contrast and, obviously, a larger storage area.</p>
                            <p>The wardrobes also had five cabinet doors on top in a brown shade. Honestly, the color palette was everything: calming, warm, and modern. Shelves were added next to the mirror to make the area more practical.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog10img6.jpeg" alt="Royal Tulip Villa walk-in wardrobe" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Mr. Dilip&#39;s Feedback</h2>
                            <p>When we finally wrapped up this project and handed it over to Mr. Dilip, the look on his face said it all (our favorite part of every reveal, honestly). Here&#39;s what Mr. Dilip said of the HUB Interior work:</p>
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">&#34;The interiors not only reflect elegance but also carry a sense of warmth and comfort. Your commitment, effort, and sense of design have transformed the space into something truly special, and it deserves the highest praise.&#34;</blockquote>
                            
                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Our Takeaways?</h2>
                            <p>Projects like Royal Tulip Villa remind us why we love doing what we do. Every corner, every finish, and every panel was chosen to create a home that&#39;s functional, luxurious, and totally welcoming.</p>
                            <p>We&#39;re just delighted that Mr. Dilip trusted <span className="font-black text-black">HUB Interior, the top interior designer in Bangalore</span>, to bring his dream to life.</p>
                            <p>Want your own Royal Tulip moment? Let&#39;s make it happen. Get in touch with HUB Interior today, and let&#39;s design a home that reflects only you.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}