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

export default function Blog3() {
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
                    <p className="text-gray-600 mb-8">The blog post you&#39;re looking for doesn&#39;t exist.</p>
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

            {/* Blog 3 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Title inside card (from Blog 3) */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Before You Remodel, Check Out These 7 Kitchen Trends to Watch in 2026</h1>

                        {/* Meta */}
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Kitchens are tricky! They have to do it all, be it storing utensils and food, making cooking easy, handling constant cleaning, and still managing to look like the heart of the home.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">If you keep it too practical, it might feel dull. But if you go too stylish, it might get impossible to keep up with it. The sweet spot lies somewhere in between, where function meets design without making everyday life harder.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">It&#39;s no surprise that people who want functional yet stylish kitchens turn to the best interior design in Bangalore, with Hub Interior leading the way.</p>
                            <p className="text-gray-700 leading-relaxed mb-8">But if you&#39;re someone who is still confused about what trend to choose, below are seven of the latest kitchen design trends to look at that are going to rule the upcoming year.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Design Trends That Will Make Your Kitchens Stand Out</h2>

                        {/* Trend 1: Smart L-Shaped Kitchen */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Smart L-Shaped Kitchen</h3>
                            <p>In most of the houses, the kitchen space is always the one that gets compromised. The reason why our customers at HUB Interior love the L-shaped kitchens. Not only does this save space, but it also creates a kitchen work triangle (sink, stove, fridge) that makes cooking prep easy.</p>
                            <p>The good part is that it works in both small and medium kitchens. Plus, you get enough open space. Just a tip: keep the open area facing the living or dining area to make the kitchen look bigger.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/Lshapekitchen.png" alt="L-shaped kitchen layout" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 2: Add a Pop of Color */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Add a Pop of Color</h3>
                            <p>If you&#39;re bored with beige, black, white, or neutral-colored kitchens, you have to try this! Adding a pop of color to your kitchen interior design is a great way to bring more attention to your kitchen. If you don't want to go overboard, start with a small space, maybe a cabinet or a drawer, but differentiate it with a unique, popping color.</p>
                            <p>Firstly, it draws a visual interest by being a focal point creation, and secondly, it works as a mood enhancer (plus, it&#39;s easy to update or change in case you want a new look later). A quick tip: try adding a pop of color on design elements like handles, a shelf, a middle cabinet, or rounded cabinets.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/kb2.png" alt="Kitchen with a pop of color" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 3: Go For Curved Cabinets */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Go For Curved Cabinets</h3>
                            <p>If you&#39;re not a fan of boxy cabinets, curved cabinets will definitely be your favorite. On top of that, it&#39;s safe for children, as it doesn&#39;t have any sharp edges or corners, which reduces the chances of bumps and accidents, especially if the kitchen space is small.</p>
                            <p>Additionally, it adds a contemporary interior design look that guides the eye and improves the kitchen flow, making the space look bigger.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/Ukitchen.png" alt="Curved cabinet details" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 4: Try Golden Hardware */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Try Golden Hardware</h3>
                            <p>It&#39;s not a secret that gold is a trendsetter. If you're looking for an easy-to-follow trend that looks chic and adds luxury to your kitchen without you spending lakhs and lakhs on it, try out the golden hardware trend.</p>
                            <p>Change the boring silver hardware to golden ones, be it your handles, knobs, or faucets. And the best part? It goes beautifully with any color, be it white, green, navy, or even black.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/gh1.png" alt="Golden hardware accents" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 5: Utilize Multipurpose Nooks */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Utilize Multipurpose Nooks</h3>
                            <p>If you have a little space left in your kitchen and you have no idea what to do, create a multipurpose nook by adding a small corner bench or shelf that doubles as seating or a workspace. You can also use it as a breakfast nook, coffee station, or mini bar.</p>
                            <p>If done right, these nooks add a touch of personality, making the kitchen look unique and curated. A bonus tip: add hidden compartments to double it as storage.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/c3.jpg" alt="Multipurpose nook" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 6: Design Toe-Kick Drawers */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Design Toe-Kick Drawers</h3>
                            <p>The lowest part of cabinets, called the toe-kick, isn&#39;t just support; it can be functional too. Add hidden pull-out drawers under cabinets for extra, out-of-sight storage. It works perfectly for small kitchens where you need more storage space.</p>
                            <p>Since it's fully hidden, it doesn't disturb your overall kitchen look, maintaining the interior design.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/bottomcabinate.jpg" alt="Toe-kick drawer concept" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Trend 7: Try Out Appliance Garages */}
                        <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
                            <h3 className="text-xl font-semibold text-gray-900">Try Out Appliance Garages</h3>
                            <p>For food lovers and daily kitchen users, whether you rely on a blender, mixer, toaster, waffle maker, or can&#39;t start the day without your coffee maker or electric kettle, an appliance garage is a smart and stylish solution for kitchen interior design. It offers a clutter-free counter, keeping the appliance out of sight and inside a hidden door.</p>
                            <p>Additionally, it protects them from dust, grease, or any kitchen dirt, so you don't have to clean it every now and then. A bonus tip: Include pull-outs or built-in outlets for convenience of use.</p>
                            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                                <img src="/CROCKERY.jpg" alt="Appliance garage and crockery unit" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Conclusion</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-3">Kitchen designs don't have to be boring. With trends like smart L-shaped layouts, pops of color, curved cabinets, golden hardware, multipurpose nooks, toe-kick drawers, and appliance garages, you can have a space that&#39;s both beautiful and practical.</p>
                            <p className="text-gray-700">And still, if you're not satisfied with these trends, contact HUB Interior today and let our team help you with the trends that will perfectly suit your kitchen. We&#39;re just a click away!</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}


