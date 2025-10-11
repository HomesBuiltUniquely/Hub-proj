"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../../Components/Footer";

export default function Blog2() {
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

            {/* Blog 2 Content (static, ignores id) */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Inside Mr. & Mrs. Rijul Azizam&#39;s Home, Designed by Hub Interior</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 8 mins read</span>
                            <span>Aug 2025</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">We call this project the art of filling in the blanks.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">Mr. and Mrs. Rijul didn&#39;t want &#34;fancy.&#34; They wanted &#34;OURS.&#34; And we, being renowned interior designers in Bangalore, were all up for it.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">But before I take you on a tour of the new interiors, let&#39;s rewind a little bit and talk about how this project came together after they reached the top interior designers in Bangalore.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">Mr. and Mrs. Rijul wanted their space to feel warm and grounded but also neat, fuss-free, and functional (because honestly, nobody has the patience for furniture that looks good but gives you zero practicality).</p>
                            <p className="text-gray-700 leading-relaxed mb-8">We knew instantly this project wasn&#39;t just about the aesthetics. It&#39;s about the function. So let&#39;s dive into each space and how we made it special.</p>
                        </div>

                        {/* Ambience image */}
                        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                            <img src={'/bn.jpg'} alt={'Warm living ambience'} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-8">Soft lighting, warm textures, and uncluttered forms set the tone for unhurried living.</p>

                        {/* Sections */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h3 className="text-xl font-semibold text-gray-900 pt-2">Starting With The Entry Gate</h3>
                            <p>Let&#39;s start at the beginning, literally!</p>
                            <p>The Rijuls wanted their entry decor to be neat yet different. Sounds simple, right? But as with most design journeys, there were a few challenges, a lot of creativity, and many &#34;oh wow, this looks amazing&#34; moments along the way.</p>
                            <p>We designed a custom shoe rack that&#39;s equal parts practical and pretty and entry gate decor. For the entry gate decor, we went with a white cabinet with black knobs for a contrast. The top part of the cabinet had enough space to keep any decor and showpieces to add colors to the hall. It was extended upward using the same measurements, which makes that section feel separate from the rest of the hall in a really subtle way.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">A Minimal Yet Calming Puja Unit</h3>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/temple1.jpg" alt="Puja unit design" className="w-full h-full object-cover" />
                            </div>
                            <p>The Rujuls wanted a pooja unit that blended with the house but still stood out and gave a sacred feeling. While space was a problem at first, HUB Interior made sure the couple got what they wanted.</p>
                            <p>We kept the design minimal but meaningful. The cabinets were designed at the bottom for storage, and then we split the upper section with a clean shelf. On top, we added soft lighting so the idol has that warm, divine glow.</p>
                            <p>And since we were following the same palette as the hall, we kept the cabinet knobs black, giving that simple black-and-white contrast, and it&#39;s turned out to be how the couple dreamt it.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">A Thoughtful Kitchen</h3>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/Ukitchen.png" alt="Thoughtful kitchen design" className="w-full h-full object-cover" />
                            </div>
                            <p>This space had to multitask like a parent on a Monday morning. For Rijuls, we decided to design a kitchen that is beautiful to look at and easy to use every day. We gave them glass-front kitchen cabinets, which not only make the space look larger and lighter but also allow them to display their favorite pieces.</p>
                            <p>To balance it out, a tambour unit slid right in, hiding away the toaster, mixer, and all those unglamorous yet essential gadgets. The slab cabinets just added the cherry on top. And for this one also, we followed our black and white theme.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Window Seating Area and Study Table Unit</h3>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/bed3.jpg" alt="Window seating area" className="w-full h-full object-cover" />
                            </div>
                            <p>The couple wanted a cozy corner that was inviting, matched their theme, and was not over the top. So we made them a window seating area. It holds enough space for two to three people to sit and blends perfectly with the home&#39;s theme. And how can we skip storage?</p>
                            <p>The small cabinets were also added below for storage. Additionally, we also designed a study table unit with small cabinets. The idea was to save space, make the area look big, and deliver what the couple wanted. You can check the results above.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">The Living Room</h3>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
                                <img src="/TVUNIT.jpg" alt="Living room design" className="w-full h-full object-cover" />
                            </div>
                            <p>The Rijuls wanted their hall to be minimal yet elegant for Azizam&#39;s house. And, we were up for it. And what could be the best way to do this instead of using false ceiling and wall paneling?</p>
                            <p>We went with clean trims on both sides and a textured white panel in the center to break the monotony. It&#39;s simple, soft, and instantly makes the wall look more polished and put-together.</p>
                            <p>The false ceiling has this neat little drop design that frames the fan right in the middle. We added recessed lights all around and tucked in strip lighting along the edges, so it gives off a warm glow every time it&#39;s turned on. The beige three-blade fan sits perfectly at the center.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Bedroom Wardrobe</h3>
                            <p>For the bedroom wardrobe, the Rijuls were very clear. They wanted something modern with lots of storage. So that&#39;s what we gave them.</p>
                            <p>The design is clean on the outside but hides plenty of space inside. On one side, we added a ribbed panel for a little texture, and just above it, a circular wall light that gives off a soft glow. Next to it sits a tall oval mirror, lit from the back.</p>
                            <p>It makes the whole wall feel taller and brighter without being in-your-face. The rest of the palette was kept neutral, beige, and white. Simple, modern, and just the way they imagined it.</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">The Outcome</h3>
                            <p>When we walk through the Azizam Home in Prestige Primrose Hill, Bengaluru, now, it doesn&#39;t feel like a project. It feels lived-in. And you can see the smile and satisfaction on Rijul&#39;s face after seeing the home. It&#39;s the kind of space that supports a busy family without getting in the way.</p>
                            <p>And if you ask us? That&#39;s the kind of design that lasts.</p>
                            <p>If you&#39;ve got a home waiting for its own story, HUB Interior would love to design it with you. Contact us today!</p>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">The False Ceiling</h3>
                            <p>The highlight of the house was the false ceiling. Now, let me tell you: false ceilings are often underestimated. Done right, they don&#39;t just hide wires or lighting fixtures; they actually transform a space.</p>
                            <p>In Bhoo Aabharana, the false ceiling detail of triangles and rhombuses gave the living room a pulled-together look.</p>
                            <p>Good design is in the details, and this home interior designer&#39;s Bangalore project had plenty of them. From the wall panelling to the fall ceiling, every decision was made to balance form and function. And honestly? We wouldn&#39;t change a thing.</p>
                            <p>This reveal has been such a joy to share. If you&#39;re also dreaming of a home like Bhoo Aabharana that feels just as tailored as Mr. Akhil&#39;s requests, HUB Interior would love to help.</p>
                            <p>Reach out to us today and get your home transformed.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
