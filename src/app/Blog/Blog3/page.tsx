"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/Components/Home/Footer";


export default function Blog3() {
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

            {/* Blog 3 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Before You Remodel, Check Out These 7 Kitchen Trends to Watch in 2026</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 6 mins read</span>
                            <span>Sep 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Kitchens are tricky! They have to do it all, be it storing utensils and food, making cooking easy, handling constant cleaning, and still managing to look like the heart of the home.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">If you keep it too practical, it might feel dull. But if you go too stylish, it might get impossible to keep up with it. The sweet spot lies somewhere in between, where function meets design without making everyday life harder.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">It&#39;s no surprise that people who want functional yet stylish kitchens turn to the best interior design in Bangalore, with Hub Interior leading the way.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">But if you&#39;re someone who is still confused about what trend to choose, below are seven of the latest kitchen design trends to look at that are going to rule the upcoming year.</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-8">Modern kitchen design that balances functionality with style.</p>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4">5 Design Trends That Will Make Your Kitchens Stand Out</h2>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6"> 1. Smart L-Shaped Kitchen</h3>
                            <p>In most of the houses, the kitchen space is always the one that gets compromised. The reason why our customers at HUB Interior love the L-shaped kitchens. Not only does this save space, but it also creates a kitchen work triangle (sink, stove, fridge) that makes cooking prep easy.</p>
                            <p>The good part is that it works in both small and medium kitchens. Plus, you get enough open space. Just a tip: keep the open area facing the living or dining area to make the kitchen look bigger.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3title.jpg" alt="L-shaped kitchen design" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">2. Add a Pop of Color</h3>
                            <p>If you&#39;re bored with beige, black, white, or neutral-colored kitchens, you have to try this! Adding a pop of color to your kitchen interior design is a great way to bring more attention to your kitchen. If you don&#39;t want to go overboard, start with a small space, maybe a cabinet or a drawer, but differentiate it with a unique, popping color.</p>
                            <p>Firstly, it draws a visual interest by being a focal point creation, and secondly, it works as a mood enhancer (plus, it&#39;s easy to update or change in case you want a new look later).</p>
                            <p>A quick tip: try adding a pop of color on design elements like handles, a shelf, a middle cabinet, or rounded cabinets.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img1.jpg" alt="Kitchen with pop of color" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">3. Go For Curved Cabinets</h3>
                            <p>This brings us to our third tip: curved cabinets. If you&#39;re not a fan of boxy cabinets, curved cabinets will definitely be your favorite. On top of that, it&#39;s safe for children, as it doesn&#39;t have any sharp edges or corners, which reduces the chances of bumps and accidents, especially if the kitchen space is small.</p>
                            <p>Additionally, it adds a contemporary interior design look that guides the eye and improves the kitchen flow, making the space look bigger.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img2.png" alt="Curved kitchen cabinets" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">4. Try Golden Hardware</h3>
                            <p>It&#39;s not a secret that gold is a trendsetter.</p>
                            <p>If you&#39;re looking for an easy-to-follow trend that looks chic and adds luxury to your kitchen without you spending lakhs and lakhs on it, try out the golden hardware trend. Gold color is an evergreen color, and there&#39;s a reason why. It brightens the overall look without putting in much effort.</p>
                            <p>Change the boring silver hardware to golden ones, be it your handles, knobs, or faucets. And the best part? It goes beautifully with any color, be it white, green, navy, or even black. Just try it out, and you&#39;ll thank us later.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img3.jpg" alt="Kitchen with golden hardware" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">5. Utilize Multipurpose Nooks</h3>
                            <p>If you have a little space left in your kitchen and you have no idea what to do, create a multipurpose nook by adding a small corner bench or shelf that doubles as seating or a workspace. You can also use it as a breakfast nook, coffee station, or mini bar.</p>
                            <p>If done right, these nooks add a touch of personality, making the kitchen look unique and curated. A bonus tip: add hidden compartments to double it as storage.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img3.png" alt="Multipurpose kitchen nook" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">6. Design Toe-Kick Drawers</h3>
                            <p>The lowest part of cabinets, called the toe-kick, isn&#39;t just support; it can be functional too. Add hidden pull-out drawers under cabinets for extra, out-of-sight storage. It works perfectly for small kitchens where you need more storage space.</p>
                            <p>Since it&#39;s fully hidden, it doesn&#39;t disturb your overall kitchen look, maintaining the interior design. One can use it to store flat items like trays, plates, or seasonal items, or infrequently used tools to save the main storage. For the Bangalore houses, where kitchens can sometimes be small, this is a trend worth trying.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog2img4.png" alt="Toe-kick drawers" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 pt-6">7. Try Out Appliance Garages</h3>
                            <p>For food lovers and daily kitchen users, whether you rely on a blender, mixer, toaster, waffle maker, or can&#39;t start the day without your coffee maker or electric kettle, an appliance garage is a smart and stylish solution for kitchen interior design. It offers a clutter-free counter, keeping the appliance out of sight and inside a hidden door.</p>
                            <p>Additionally, it protects them from dust, grease, or any kitchen dirt, so you don&#39;t have to clean it every now and then. A bonus tip: Include pull-outs or build-in outlets for convenience of use.</p>
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog3img4.png" alt="Appliance garage" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 pt-6">Conclusion</h3>
                            <p>Kitchen designs don&#39;t have to be boring. With trends like smart L-shaped layouts, pops of color, curved cabinets, golden hardware, multipurpose nooks, toe-kick drawers, and appliance garages, you can have a space that&#39;s both beautiful and practical.</p>
                            <p>And still, if you&#39;re not satisfied with these trends, contact HUB Interior today and let our team help you with the trends that will perfectly suit your kitchen.</p>
                            <p>We&#39;re just a click away!</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer/>
        </div>
    );
}
