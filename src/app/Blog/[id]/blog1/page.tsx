"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../../Components/Footer";

export default function Blog1() {
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

			{/* Blog 1 Content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<article className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="p-8">
						<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How Mr. Akhil&#39;s House Became Bhoo Aabharana (And Why We&#39;re Still Obsessed)?</h1>

						<div className="flex justify-between items-center text-gray-500 text-sm mb-6">
							<span>Blog • 10 mins read</span>
							<span>Sep 2025</span>
						</div>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 leading-relaxed mb-4">Spoiler alert: We had a lot of fun with this one!<br/>
							So, our client, Mr. Akhil, reached out to our team at HUB Interior with a vision, and, as the top interior designer in Bangalore, we definitely delivered it. HUB Interior has years of experience delivering the best results to our clients, and we were all excited to achieve the same results for Mr. Akhil.<br/>
							Bhoo Aabharana is a love letter to faith, function, and quiet elegance. And yes, we&#39;re obsessed.</p>
						</div>

						<div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
							<img src="/bn.jpg" alt="Bhoo Aabharana home" className="w-full h-full object-cover" />
						</div>
						<p className="text-gray-700 leading-relaxed mb-8">Bhoo Aabharana is a love letter to faith, function, and quiet elegance. And yes, we&#39;re obsessed.</p>

						<div className="space-y-4 text-gray-700 leading-relaxed">
							<h2 className="text-2xl font-bold text-gray-900 pt-4">Let&#39;s rewind a bit.</h2>
							<p>When Mr. Akhil first walked us through the space, it was clear he wasn&#39;t chasing trends. He wanted a home that felt personal, peaceful, and just a little bit fancy. Not flashy, not overdone, but just thoughtful design that made sense for his lifestyle.</p>
							<p>And when we walked into Bhoo Aabharana for the first time to check outthe project site, we saw the potential immediately. After weeks of planning, measuring, tweaking, and countless site visits, there is nothing more satisfying than walking into a home that feels finished (and loved by our customers).</p>
							<p>Today, we get to share one of those magical transformations: Mr. Akhil&#39;s Bhoo Aabharana home. And let me tell you, it&#39;s a good one.</p>
							<p>This project had everything: thoughtful storage, cozy corners, a spiritual place, and a modern style.</p>

							<h2 className="text-2xl font-bold text-gray-900 pt-4">The Starting Point</h2>
							<p>When we first met Mr. Akhil, he had this clear picture in his mind. He wanted his Bangalore house to have minimal interior designs, with pleasing-to-the-eyes colors. His wish list was a mix of essentials like a sleek TV unit, a peaceful devotion area, a functional handwash and crockery unit, a practical kitchen, a bedroom wardrobe, and even a window seating area.</p>
							<p>And our interior designer Bangalore team was all in.</p>

							<h2 className="text-2xl font-bold text-gray-900 pt-4">The Heart of the Home</h2>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/temple1.jpg" alt="Devotion area" className="w-full h-full object-cover" />
							</div>
							<p>One of the most meaningful parts of this project was creating a devotion area for Mr. Akhil. As a Christian, he wanted a space that felt sacred but still blended with the rest of the home. We all loved the idea!</p>
							<p>Instead of going with a plain setup, we decided to give the devotion area a little personality. We placed lights along the corners, and to save floor space, we built this little unit that&#39;s wall-mounted. Above, a large holy cross makes a meaningful statement about Mr. Akhil&#39;s devotion.</p>
							<p>The colors they brought in instantly made the area feel calm and welcoming. And well, Mr. Akhil loved it (so do we).</p>

							<h2 className="text-2xl font-bold text-gray-900 pt-4">A Sleek Modern Kitchen</h2>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/Ukitchen.png" alt="Modern kitchen" className="w-full h-full object-cover" />
							</div>
							<p>Oh, the kitchen! The instructions for the kitchen were pretty clear: go simple yet modern. We went with a lot of storage cabinets, which was a combination of glass-front cabinets, slab cabinets, and a tambour unit. Why the mix? Because kitchens are not just about storage, they&#39;re about smart storage.</p>
							<p>For the color we chose a combination of black, white, and light beige. Also, we may or may not have spent an hour debating the exact shade of cabinet finish. Totally worth it.</p>
							<p>Kitchen and dining room go hand in hand. For the dining room, we added a handwash unit and a crockery display with glass-front cabinets to add a unique touch (and also because why hide your prettiest pieces?). It&#39;s giving “host with the most,” and we&#39;re here for it.</p>
							<p>However, it didn't follow the average mirror. The abstract mirror and the unique wall panelling with a big grayish handwash basin speak for classy.</p>
							<p>Overall, Mr. Akhil&#39;s kitchen is proof that functionality doesn&#39;t mean boring.</p>

							<h2 className="text-2xl font-bold text-gray-900 pt-4">A Dream Bedroom Makeover</h2>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/bed3.jpg" alt="Bedroom makeover" className="w-full h-full object-cover" />
							</div>
							<p>For the bedroom, we focused on two main elements: the wardrobe and a window seating area. We went ahead with a U-shape for the cabinets, leaving the middle space open for the window seating area. The wardrobe is tailored (literally) to the space and roomy enough to store everything without overwhelming the room.</p>
							<p>It&#39;s cozy, and even though it&#39;s not huge, it makes the bedroom feel instantly inviting. It's perfect to unwind after an exhausting day, where one can sit and read a book or have a cup of coffee. The color palette is kept very simple by our interior designers, who went ahead with a combination of white and grey. And how to ignore the solid handle on the door, which serves practicality.</p>

							<h2 className="text-2xl font-bold text-gray-900 pt-4">The Lively Living Room</h2>
							<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mt-3">
								<img src="/TVUNIT.jpg" alt="Living room" className="w-full h-full object-cover" />
							</div>
							<p>The living room was something that Mr. Akhil was very excited about. So we designed a custom TV unit that&#39;s clean-lined, modern, and just the right amount of extra. It anchors the space beautifully and hides all the tech clutter. Plus, behind the TV, there&#39;s marble detailing to make it stand out.</p>
							<p>Below, we added wall-mounted cabinets, and on the left, we added some more glass-front cabinets (because cabinets are never enough)! The TV unit and cabinets don&#39;t sit flat against the wall. We pulled everything out a bit to give it a 3D effect. Little lights on top made it look warm.</p>
							<p>The whole color theme of our TV unit matched the devotion place with hints of black and grey for a minimal look.</p>
						</div>
					</div>
				</article>
			</div>

			<Footer />
		</div>
	);
}
