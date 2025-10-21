"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../../Components/Footer";

export default function Blog17() {
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

            {/* Blog 17 Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Kitchen Interior Design Completed in Just 3 Days – Kishan Prasad Project</h1>

                        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
                            <span>Blog • 10 mins read</span>
                            <span>October 21, 2025</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">Working on Kishan Prasad&#39;s project was a challenge we gladly accepted. He wanted a <span className="font-black text-black">modern kitchen interior design</span> ready in just three days. For us at <span className="font-black text-black">HUB Interior</span>, it was an opportunity to show how careful planning, experience, and attention to detail can make a fast-track project successful without compromising quality.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">We focus on delivering <span className="font-black text-black">home interior design Bengaluru</span> solutions that are not only stylish but also practical for everyday life. This project allowed us to apply our expertise in <span className="font-black text-black">modular kitchen interiors</span> while keeping timelines tight and efficiency high.</p>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 pt-4">Key Objectives for the Kitchen Design</h2>
                            <p>When Mr. Kishan approached us, he needed a kitchen that would be fully functional and visually appealing. His home demanded a kitchen that could handle busy daily routines while remaining organised and clutter-free. The project included:</p>
                            <ul className="space-y-2">
                                <li>Modular kitchen interiors with ample storage space</li>
                                <li>Cabinets and drawers optimised for everyday use</li>
                                <li>Worktops and countertops suitable for heavy-duty cooking</li>
                                <li>Custom layouts designed specifically for the kitchen space</li>
                            </ul>
                            <p>We aimed to create a kitchen where everything had a place, making cooking and storage effortless. Our focus was always on functionality paired with a <span className="font-black text-black">modern kitchen interior design</span> aesthetic.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img1.jpeg" alt="Kitchen design objectives" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Planning for Speed Without Compromising Quality</h2>
                            <p>Completing a full kitchen in just three days requires strategic planning. We start by assessing the space, understanding the homeowner&#39;s requirements, and creating a detailed schedule. Our process included:</p>
                            <ul className="space-y-2">
                                <li>Pre-approved designs ready for installation</li>
                                <li>Materials sourced and prepared in advance to avoid delays</li>
                                <li>Work divided into phases for smooth execution</li>
                                <li>Dedicated teams for cabinets, countertops, and installation</li>
                            </ul>
                            <p>This approach allowed us to deliver a fast-track <span className="font-black text-black">home interior project</span> efficiently while maintaining high standards. Even under tight timelines, we ensure that quality is never compromised.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img2.jpeg" alt="Project planning process" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Day One: Cabinets and Storage</h2>
                            <p>On the first day, our team focused on installing the modular cabinets and storage units. Each piece was carefully placed to optimise space and usability.</p>
                            <p><strong>Key features:</strong> Glass front cabinets for an open, modern feel. Slab cabinets with smooth finishes for easy maintenance. Tall units to store pantry items and appliances. Drawers fitted with smooth sliding mechanisms for convenience.</p>
                            <p>By the end of the first day, the kitchen already started taking shape, reflecting a perfect blend of style and functionality. Our experience with <span className="font-black text-black">kitchen renovation services Bengaluru</span> ensured that even the tight timeline felt manageable.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img3.jpeg" alt="Day one cabinet installation" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Day Two: Countertops and Work Surfaces</h2>
                            <p>The second day was dedicated to installing worktops and countertops. Here, precision mattered the most. Every measurement had to be exact to ensure the workflow remained smooth.</p>
                            <p><strong>Key features:</strong> Durable and easy-to-clean surfaces. Countertops designed to handle intensive daily cooking. Layout arranged to allow multiple people to work comfortably.</p>
                            <p>These surfaces were carefully chosen not just for appearance but also for longevity. A well-installed countertop enhances the kitchen&#39;s usability while giving it a modern look.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img4.jpeg" alt="Day two countertop installation" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Day Three: Finishing Touches</h2>
                            <p>The final day focused on details that complete the kitchen. Handles, hinges, lighting, and accessories were installed, bringing the design together.</p>
                            <p><strong>Key features:</strong> Integrated storage for appliances and utensils. Coordinated finishes to match the overall kitchen design. Proper lighting for cooking, preparation, and highlighting key areas.</p>
                            <p>At the end of day three, Mr. Kishan&#39;s kitchen was fully functional and ready for use. It was a proud moment for us because completing a full <span className="font-black text-black">residential interior design</span> project in just three days is not easy, and it was done with precision.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img5.jpeg" alt="Day three finishing touches" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Modular Kitchen Interiors for Practical Living</h2>
                            <p>Our <span className="font-black text-black">modular kitchen interiors</span> are designed to make daily life easier. Each cabinet and drawer serves a purpose, reducing clutter and helping the homeowner stay organised.</p>
                            <p><strong>Key features:</strong> Tall cabinets for maximum storage. Pull-out drawers for cookware and utensils. Shelving units for easy access to frequently used items. Corner units optimised for space efficiency.</p>
                            <p>By designing with practicality in mind, we ensure that homeowners can enjoy a kitchen that feels effortless to use.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img6.jpeg" alt="Modular kitchen design" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Materials and Finishes That Make a Difference</h2>
                            <p>Even on fast-track projects, we prioritise material quality. For Mr. Kishan&#39;s kitchen, we selected:</p>
                            <ul className="space-y-2">
                                <li>Durable and scratch-resistant surfaces</li>
                                <li>Easy-to-maintain finishes</li>
                                <li>Materials that complement the overall <span className="font-black text-black">home interior design Bengaluru</span> theme</li>
                                <li>Styles that fit with contemporary <span className="font-black text-black">modern kitchen interior design</span> trends</li>
                            </ul>
                            <p>Quality materials enhance both the look and functionality of the kitchen. It ensures that the space not only looks modern today but continues to be practical and stylish for years.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img7.jpeg" alt="Kitchen materials and finishes" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Why You Should Trust Interior Designers</h2>
                            <p>Many homeowners underestimate the value of professional <span className="font-black text-black">interior designers in Bengaluru</span> for kitchen projects. Professionals like us bring:</p>
                            <ul className="space-y-2">
                                <li>Proper planning and layout optimisation</li>
                                <li>High-quality materials and finishes</li>
                                <li>Timely project completion even on ambitious schedules</li>
                                <li>Expert installation for flawless execution</li>
                            </ul>
                            <p>Working with specialists ensures that even fast-paced projects like Mr. Kishan&#39;s kitchen are completed smoothly, efficiently, and without stress.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img8.jpeg" alt="Professional interior design expertise" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Key Features That Set This Kitchen Apart</h2>
                            <p><strong>Key features:</strong> Full modular kitchen with organised storage. Glass front and slab cabinets for style and easy maintenance. Countertops optimised for preparation and cooking. Smooth sliding drawers and efficient layouts. Lighting that enhances both function and style.</p>
                            <p>These features reflect our focus on <span className="font-black text-black">custom kitchen interiors</span> and practical solutions for daily life.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img9.jpeg" alt="Unique kitchen features" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Lessons from the Kishan Prasad Project</h2>
                            <p>This project demonstrated how we handle fast-track <span className="font-black text-black">home interior projects</span> successfully:</p>
                            <ul className="space-y-2">
                                <li>Planning and preparation are critical</li>
                                <li>Skilled teams ensure speedy installation without errors</li>
                                <li>Modular solutions improve organisation and efficiency</li>
                                <li>High-quality finishes maintain aesthetic appeal</li>
                                <li>Regular quality checks guarantee a functional kitchen</li>
                            </ul>
                            <p>Even with tight timelines, we make sure the end result meets our standards and the homeowner&#39;s expectations.</p>
                            
                            <div className="relative w-[580px] h-[580px] md:h-105 rounded-xl overflow-hidden mt-3 ml-30">
                                <img src="/blog17img10.jpeg" alt="Project lessons learned" className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 pt-6">Conclusion</h2>
                            <p>Mr. Kishan&#39;s kitchen showcases what skill, planning, and precision can achieve. Every cabinet, drawer, and countertop enhances usability, storage, and modern appeal. We create interiors that simplify daily life, from <span className="font-black text-black">modular kitchens</span> to full home makeovers. With experience and fast-track expertise, we deliver functional, stylish spaces ready to enjoy from day one, tailored perfectly to your needs.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}