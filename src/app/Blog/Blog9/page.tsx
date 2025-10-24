"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/Components/Home/Footer";


export default function Blog9() {
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

            {/* Blog 9 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 manrope">Our New Customer Project Completed in Just 11 Days – Kitchen Interior, Pooja Unit, 2 Bedroom Wardrobe Interiors & TV Unit (Nagaveni Project)</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6 manrope-medium">
                            <span>Blog • 8 mins read</span>
                            <span>October 21, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 manrope">How We Transformed Mr. Nagaveni&#39;s Home in Less Than Two Weeks (Yes, Really!)</h2>
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">When we say &#34;11 days,&#34; most people blink twice. But yes, our team at HUB Interior pulled off a complete interior transformation in just 11 days for our amazing client, Mr. Nagaveni.</p>
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">When Mr. Nagaveni first reached out to us, we quickly understood what he wanted: &#34;a home that&#39;s functional and beautiful, and, oh… can we finish it super fast?&#34; And we, as the <span className="font-black text-black">best interior designers of Bangalore</span>, were super ready and excited for this challenge (we thrive on a little adrenaline).</p>
                            <p className="text-gray-700 leading-relaxed mb-8 manrope-medium">Here&#39;s what Mr. Nagaveni had on his wishlist: Kitchen Interior, Pooja Unit, 2 Bedroom Wardrobe Interiors & TV Unit. Now, that's a lot for less than two weeks. But our team at HUB Interior believes in turning "impossible" into "It's done." And just to brief you, we didn't just check boxes. We made every corner purposeful, beautiful, and yes, a little extra.</p>
                            <p className="text-gray-700 leading-relaxed mb-8 manrope-medium">Let&#39;s take a little tour and see how it all came together!</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4 manrope">Starting With The Kitchen</h2>

                             <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog9img1.png" alt="Nagaveni kitchen interior" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <p className="manrope-medium">The brief given by our client was very clear: lots of storage, smooth finishes, and a modern look. For this one, we went with a mix of glass-front cabinets, slab-style units, and a tambour unit (because who doesn't love that sleek roll-top convenience?).</p>
                            <p className="manrope-medium">The glass front is best to show off the fancy crockery, while the tambour unit was added to keep clutter out of sight. The color for the kitchen was kept navy blue, a super popular choice that added class and a touch of warmth to the whole kitchen. Plus, it makes the cabinets pop and hides tiny smudges, and who doesn't want that! We also played around with matte finish cabinets, which are easy to clean and fit the everyday needs.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">The Pooja Unit</h2>
                                   
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[350px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog9img2.png" alt="Nagaveni pooja unit" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <p className="manrope-medium">Next up: the pooja corner. Our goal was to turn this small space into a big impact. Designing a pooja unit always feels special to us. And for Mr. Nagaveni's home, it was all about simplicity with meaning.</p>
                            <p className="manrope-medium">The doors of the pooja unit had hanging bell motifs paired with geometric cutouts forming a circular pattern. It was clean, modern, and minimal, just like what our client wished for. The color for the pooja unit was kept white for a bright and serene feeling. It had multiple cabinets and drawers with matching knobs to keep up with the overall design. The inside comprised shelves for display.</p>
                            <p className="manrope-medium">It's the kind of corner where you can light a candle, take a deep breath, and actually feel calm. Mr. Nagaveni loved it, and so did our team.</p>
                     
                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">The TV Unit</h2>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[300px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog9img3.png" alt="Nagaveni bedroom wardrobes" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <p className="manrope-medium">The living room TV setup? Completed within a couple of days? Yes! The instructions were pretty clear on this one: something modern but not overpowering. And yes, we delivered it!</p>
                            <p className="manrope-medium">The TV unit had a marble-like wall behind it for a fancy vibe, and the wooden strip on one side added a touch of color to the muted colored palette. It has a big bottom part, which has five drawers in total and an open space to keep small items. The design also included a tall side shelf, which could be used to display items.</p>
                            
                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">The Two Bedroom Wardrobes</h2>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[300px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog9img4.png" alt="Nagaveni bedroom wardrobes" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <p className="manrope-medium">Bedrooms were next, and oh boy, wardrobes stole the show. In total, we created two bedroom wardrobes for Mr. Nagaveni. The first was created in a shade of green with sliding doors and tons of cabinets on two sides of the wall.</p>
                            <p className="manrope-medium">Practicality was the theme, and we can happily say we achieved it (within 11 days). The inside of the first wardrobe had big horizontal shelves where Mr. Nagaveni's family could keep items, be they large or small.</p>

                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[300px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog9img5.png" alt="Nagaveni bedroom wardrobes" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <p className="manrope-medium">For the second bedroom wardrobe, we went with a shade of blue color. The wardrobe had the same sliding door mechanism as the first wardrobe, with cabinets on two sides of the wall for storage. Next to a sliding door, we also added a single door with a handle that has geometric black cutouts in a triangle shape. Perfect for a <span className="font-black text-black">contemporary space</span>!</p>
                            <p className="manrope-medium">Every wardrobe decision was made to maximize space, and every shelf and drawer was carefully planned by the team at HUB Interior to avoid clutter.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">Our Take On This Project</h2>
                            <p className="manrope-medium">When we tell it to others, people always ask, "How did you do it in 11 days?!" Honestly, pulling this together in 11 days wasn't easy. It was a mix of planning and precision. We understand that good design blends form, function, and personality. And that's what we brought to Nagaveni's house: personalized storage, modern elements, and small details that make the spaces feel alive.</p>
                            <p className="manrope-medium">The Nagaveni house reminds us why we love what we do: turning visions into homes that people actually love to live in. And Mr. Nagaveni? He got his dream home in 11 days, and we got another story to tell you.</p>
                            <p className="manrope-medium">If you've been dreaming about redoing your home, <span className="font-black text-black">HUB Interior's expert designers in Bangalore</span> are here to make it happen (maybe not always in 11 days, but we promise it'll be worth the wait). Contact us today!</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer/>
        </div>
    );
}