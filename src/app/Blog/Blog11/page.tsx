"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/Components/Home/Footer";


export default function Blog11() {
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

            {/* Blog 11 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 manrope">Which Kitchen Layout Suits You Best – L-Shaped, U-Shaped, or Island Kitchen?</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6 manrope-medium">
                            <span>Blog • 10 mins read</span>
                            <span>October 21, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">Kitchen renovations are fun, exciting, and also… a slight bit terrifying. You can have the fanciest countertops and the sturdiest cabinets, but if you&#39;re constantly bumping elbows or circling around a tiny island, even the best kitchen can feel like a nightmare.</p>
                            <p className="text-gray-700 leading-relaxed mb-4 manrope-medium">The reason why we at <span className="font-black text-black">HUB Interior</span> understand the need to put the customer first before going on with the kitchen layout.</p>
                            <p className="text-gray-700 leading-relaxed mb-8 manrope-medium">Today, we&#39;re diving into three of the most popular kitchen setups: L-shaped, U-shaped, and island kitchens. However, this is not just your normal guide! We&#39;ll break down who they&#39;re for, the perks, the quirks, and more. Spoiler alert: each one has its own personality (yes, kitchens totally have personalities).</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4 manrope">A Dive Into Three Kitchen Layouts: L-Shaped, U-Shaped, and Island Kitchen</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-900 pt-4 manrope">L-Shaped Kitchen Layout</h3>
                            <p className="manrope-medium">L-shaped kitchen layouts are perfect for small to medium homes (bonus points if you want your kitchen to feel open instead of cramped). It is also a great option for open-plan lovers and anyone who wants a simple, efficient workflow.</p>
                            <p className="manrope-medium">An L-shaped kitchen maximizes corner space, provides a great work triangle (stove, fridge, sink), is flexible with the dining/breakfast area, and is affordable and remodel-friendly.</p>
                            
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog11img1.jpg" alt="L-shaped kitchen layout" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 manrope">Things to think about:</h4>
                                <ul className="space-y-3 manrope-medium">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Limited counter space if your kitchen is on the smaller side.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Corner cabinets may need good storage solutions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Not ideal if more than one person is trying to cook dinner at once (trust us on this one).</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="manrope-medium"><strong>Who should avoid it?</strong> In case you have a large family or dream of a central island (sorry, island lovers, L-shapes are all about the side hustle), you should avoid it. Don&#39;t be disappointed. We have listed down other layouts below, through which you can definitely find your perfect kitchen layout.</p>
                         

                            <h3 className="text-xl font-semibold text-gray-900 pt-6 manrope">U-Shaped Kitchen Layout</h3>
                            <p className="manrope-medium">U-shaped kitchens are all about maximum storage, maximum efficiency, and keeping everything within arm&#39;s reach. If you have a medium to large family to cook with or for, or your family loves to cook together, go for this one! Also, super organized people, you&#39;re going to love this one.</p>
                            <p className="manrope-medium">This layout comes with lots of counter and storage space, along with a great work triangle to work in. You can keep your appliances, breakfast area, separate chopping area, mini coffee station, and washing area, keeping the kitchen organized.</p>
                            
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog11img2.jpeg" alt="U-shaped kitchen layout" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 manrope">Things to think about:</h4>
                                <ul className="space-y-3 manrope-medium">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Can feel a little enclosed in smaller spaces.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Traffic flow can get tricky if the &#34;U&#34; is narrow (kids, pets, spouses…everybody has an opinion).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Usually, it is more expensive to remodel than L-shaped kitchens (but hey, space has its price).</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="manrope-medium"><strong>Who should avoid it?</strong> If you have a tiny kitchen or you are an open-plan lover, this might not be for you!</p>
                            
                            <h3 className="text-xl font-semibold text-gray-900 pt-6 manrope">Island Kitchen Layout</h3>
                            <p className="manrope-medium">Ah, the island kitchen: the &#34;showstopper&#34; of layouts. Basically, it&#39;s the ultimate multitasker…for you and your guests (because everyone loves hovering while someone else cooks, right?).</p>
                            <p className="manrope-medium">An island layout is perfect for a large kitchen space where you have tons of guests coming over each weekend or have a huge family to cook for with multiple helpers. This layout provides extra counter and storage space, which also works as a dining or prep area. You can also put a sink or stove on it if you&#39;re feeling fancy (and honestly, who wouldn&#39;t?).</p>
                            
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[580px] h-auto rounded-xl overflow-hidden my-3">
                                    <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog11img3.jpg" alt="Island kitchen layout" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mt-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 manrope">Things to think about:</h4>
                                <ul className="space-y-3 manrope-medium">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Requires a large kitchen to maintain workflow (tiny kitchens beware, this could become a traffic jam).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Can get expensive.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 mt-2 bg-gray-700 rounded-full flex-shrink-0"></div>
                                        <span className="font-semibold text-black">Bad planning = clunky kitchen.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="manrope-medium"><strong>Who should avoid it?</strong> If you&#39;re on a limited budget or have a small kitchen, skipping the island kitchen is a good decision. Instead, you can go for L or U depending on your needs.</p>
                            <p className="manrope-medium">Island kitchens are all about versatility, style, and entertainment. If you love hosting, cooking with friends, or just want that centerpiece kitchen everyone wants to hang out in, this is the one.</p>
                            
                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">Still confused?</h2>
                            <p className="manrope-medium">Being confused is totally okay, and honestly, you&#39;re not alone. After all, this is a very important decision for your house. Here&#39;s what you can do to remove this confusion: Grab a tape measure, and walk through your kitchen and measure it. Now, compare it with the three layouts and check out our &#34;things to think about&#34; pointers, and you&#39;ll instantly know what works.</p>
                            <p className="manrope-medium">An additional tip: think about your family, entertaining habits, and whether you&#39;ll ever need extra prep space to know better which layout fits your needs.</p>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6 manrope">Wrapping Up</h2>
                            <p className="manrope-medium">Here&#39;s the tea: picking a kitchen layout isn&#39;t just about what looks cute on Instagram. It&#39;s about how you cook, who cooks with you, your budget, and how much space you really need.</p>
                            <p className="manrope-medium">And if you&#39;re still confused, contact <span className="font-black text-black">HUB Interior</span> today to get expert advice on which layout fits your space the best. Now that you know the secret to choosing the best layout, tell us, which kitchen style are you falling for?</p>
                            <p className="manrope-medium">Need help with designing? The <span className="font-black text-black">best interior designer in Bangalore</span> is just a click away.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}