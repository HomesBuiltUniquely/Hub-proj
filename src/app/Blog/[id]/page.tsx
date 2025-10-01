"use client"

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Footer } from "../../Components/Footer";

type Post = { 
    id: number; 
    title: string; 
    date: string; 
    readTime: string; 
    img: string 
};

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postId = params.id;
        if (postId) {
            // Load posts from localStorage
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

			{/* Blog Content - Desired Order */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<article className="bg-white rounded-2xl shadow-lg overflow-hidden">
					{/* Content First */}
					<div className="p-8">
						{/* Meta Information */}
						<div className="flex justify-between items-center text-gray-500 text-sm mb-6">
							<span>Blog • {post.readTime}</span>
							<span>{post.date}</span>
						</div>

						{/* Author Info */}
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">H</div>
							<div className="ml-3">
								<p className="font-semibold text-gray-900">HUB Interior</p>
								<p className="text-gray-500 text-sm">Interior Design Expert</p>
							</div>
						</div>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 leading-relaxed mb-4">Spoiler alert: We had a lot of fun with this one!</p>
							<p className="text-gray-700 leading-relaxed mb-4">So, our client, Mr. Akhil, reached out to our team at HUB Interior with a vision, and, as the top interior designer in Bangalore, we definitely delivered it. HUB Interior has years of experience delivering the best results to our clients, and we were all excited to achieve the same results for Mr. Akhil.</p>
							<p className="text-gray-700 leading-relaxed mb-4">Bhoo Aabharana is a love letter to faith, function, and quiet elegance. And yes, we’re obsessed.</p>
							<p className="text-gray-700 leading-relaxed mb-4">Let&#39;s rewind a bit.</p>
							<p className="text-gray-700 leading-relaxed mb-4">When Mr. Akhil first walked us through the space, it was clear he wasn’t chasing trends. He wanted a home that felt personal, peaceful, and just a little bit fancy. Not flashy, not overdone, but just thoughtful design that made sense for his lifestyle.</p>
							<p className="text-gray-700 leading-relaxed mb-4">And when we walked into Bhoo Aabharana for the first time to check out the project site, we saw the potential immediately. After weeks of planning, measuring, tweaking, and countless site visits, there is nothing more satisfying than walking into a home that feels finished (and loved by our customers).</p>
							<p className="text-gray-700 leading-relaxed mb-8">Today, we get to share one of those magical transformations: Mr. Akhil’s Bhoo Aabharana home. And let me tell you, it’s a good one. This project had everything: thoughtful storage, cozy corners, a spiritual place, and a modern style.</p>
						</div>

						{/* Section Title for Image */}
						<h2 className="text-2xl font-bold text-gray-900 mb-4">The Starting Point</h2>

						{/* Featured Image */}
						<div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
							<img 
								src={post.img}
								alt={post.title}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Image Description */}
						<p className="text-gray-700 leading-relaxed mb-8">An inviting glimpse into Bhoo Aabharana as it began—where thoughtful planning met a space full of potential. This image captures the essence of the early vision that guided every design choice that followed.</p>

						{/* Post-image narrative (from Doc - Blog 2 style) */}
						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>When we first met Mr. Akhil, he had this clear picture in his mind. He wanted his Bangalore house to have minimal interior designs, with pleasing-to-the-eyes colors.</p>
							<p>His wish list was a mix of essentials like a sleek TV unit, a peaceful devotion area, a functional handwash and crockery unit, a practical kitchen, a bedroom wardrobe, and even a window seating area.</p>
							<p>And our interior designer Bangalore team was all in.</p>
							<h2 className="text-2xl font-bold text-gray-900 pt-4">The Heart of the Home</h2>
							{/* Image block for Heart of the Home */}
							<div className="mt-4">
								<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
									<img src="/livingroom.png" alt="Living room ambiance" className="w-full h-full object-cover" />
								</div>
								<p className="text-gray-600 text-sm mt-3">Soft lighting, warm textures, and uncluttered forms keep the living area relaxed and welcoming.</p>
							</div>
							<p>One of the most meaningful parts of this project was creating a devotion area for Mr. Akhil. As a Christian, he wanted a space that felt sacred but still blended with the rest of the home. We all loved the idea!</p>
							<p>Instead of going with a plain setup, we decided to give the devotion area a little personality. We placed lights along the corners, and to save floor space, we built this little unit that&#39;s wall-mounted. Above, a large holy cross makes a meaningful statement about Mr. Akhil&#39;s devotion.</p>
							<p>The colors they brought in instantly made the area feel calm and welcoming. And well, Mr. Akhil loved it (so do we).</p>

							{/* Sleek Modern Kitchen */}
							<h3 className="text-xl font-semibold text-gray-900 pt-6">A Sleek Modern Kitchen</h3>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/TVUNIT.jpg" alt="Sleek TV unit with concealed storage" className="w-full h-full object-cover" />
							</div>
							<p>Oh, the kitchen! The instructions for the kitchen were pretty clear: go simple yet modern. We went with a lot of storage cabinets, which was a combination of glass-front cabinets, slab cabinets, and a tambour unit. Why the mix? Because kitchens are not just about storage, they&#39;re about smart storage.</p>		
							<p className="text-gray-600 text-sm mt-3">For the color we chose a combination of black, white, and light beige. Also, we may or may not have spent an hour debating the exact shade of cabinet finish. Totally worth it.</p>
							
							{/* Kitchen */}
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/Ukitchen.png" alt="Functional modern kitchen" className="w-full h-full object-cover" />
							</div>
							<p>Kitchen and dining room go hand in hand. For the dining room, we added a handwash unit and a crockery display with glass-front cabinets to add a unique touch (and also because why hide your prettiest pieces?). It&#39;s giving “host with the most,” and we&#39;re here for it.</p>
							<p className="text-gray-600 text-sm mt-3">However, it didn&#39;t follow the average mirror. The abstract mirror and the unique wall panelling with a big grayish handwash basin speak for classy.</p>
							<p>Overall, Mr. Akhil’s kitchen is proof that functionality doesn&#39;t mean boring.</p>

							
							{/*A Dream Bedroom Makeover*/}
							<h3 className="text-xl font-semibold text-gray-900 pt-6">A Dream Bedroom Makeover</h3>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/temple1.jpg" alt="Peaceful devotion area" className="w-full h-full object-cover" />
							</div>
							<p>For the bedroom, we focused on two main elements: the wardrobe and a window seating area. We went ahead with a U-shape for the cabinets, leaving the middle space open for the window seating area. The wardrobe is tailored (literally) to the space and roomy enough to store everything without overwhelming the room.</p>
							<p> It&#39;s cozy, and even though it&#39;s not huge, it makes the bedroom feel instantly inviting. It's perfect to unwind after an exhausting day, where one can sit and read a book or have a cup of coffee. The color palette is kept very simple by our interior designers, who went ahead with a combination of white and grey. And how to ignore the solid handle on the door, which serves practicality. </p>

							{/* The Lively Living Roome */}
							<h3 className="text-xl font-semibold text-gray-900 pt-6">The Lively Living Room</h3>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/bed3.jpg" alt="Calm bedroom with built-in wardrobe" className="w-full h-full object-cover" />
							</div>
							<p>The living room was something that Mr. Akhil was very excited about. So we designed a custom TV unit that&#39;s clean-lined, modern, and just the right amount of extra. It anchors the space beautifully and hides all the tech clutter. Plus, behind the TV, there&#39;s marble detailing to make it stand out.</p>
							<p> Below, we added wall-mounted cabinets, and on the left, we added some more glass-front cabinets (because cabinets are never enough)! The TV unit and cabinets don&#39;t sit flat against the wall. We pulled everything out a bit to give it a 3D effect. Little lights on top made it look warm.</p>
							<p>The whole color theme of our TV unit matched the devotion place with hints of black and grey for a minimal look.</p>
						</div>

					</div>
				</article>
			</div>

			<Footer />
		</div>
	);
}
