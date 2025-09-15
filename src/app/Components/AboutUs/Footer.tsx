'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return(
        <div>
            {/* 3xl Footer - Tailwind Classes */}
            <div className="aboutus-footer-3xl-container hidden 3xl:block">
                <div className="w-full h-auto min-h-[600px] px-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full h-auto min-h-[500px] bg-[#32261c] mt-20 rounded-2xl p-12">
                            <div className="flex flex-row text-white gap-40 justify-center">
                                {/* Company Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">About</p></Link>
                                        <Link href="/Career"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Career</p></Link>
                                        <Link href="/CustomerReviews"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></Link>
                                        <Link href="/Project"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Project</p></Link>
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Blogs</p></Link>
                                        <Link href="/Life@Hub"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></Link>
                                        <Link href="/Living-Room"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Living Room</p></Link>
                                        <Link href="/Kids-Room"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></Link>
                                        <Link href="/Pooja-Unit"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></Link>
                                        <Link href="/TV-Unit"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></Link>
                                        <Link href="/Wardrobe-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></Link>
                                        <Link href="/Dining-Room-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></Link>
                                        <Link href="/False-Ceiling-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">False Ceiling Design</p></Link>
                                        <Link href="/Wall-Decor-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></Link>
                                        <Link href="/Study-Room-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></Link>
                                        <Link href="/Bar-Unit-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></Link>
                                        <Link href="/Flooring-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></Link>
                                        <Link href="/Bathroom-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></Link>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Information</h1>
                                    <div className="space-y-3">
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact US</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Franchise</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-10">
                                <Link href="/"><Image src="/LOGO.png" alt="HUB Logo" width={100} height={40} className="w-[100px] h-[40px]" /></Link>
                                <Link href="/Policy"><p className="text-[14px] text-white pt-2">Privacy Policy Terms & Conditions</p></Link>
                                <div className="flex gap-8">
                                    <Link href="https://www.linkedin.com/company/homesunderbudget/" target="_blank" rel="noopener noreferrer"><Image src="/LinkedIn.png" alt="LinkedIn" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.youtube.com/@homesunderbudget" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="YouTube" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" alt="Facebook" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.instagram.com/homesunderbudget/" target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" alt="Instagram" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://x.com/Homeunderbudget" target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" alt="Twitter" width={23} height={23} className="w-[23px] h-[23px]" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2xl Footer - Tailwind Classes */}
            <div className="aboutus-footer-2xl-section hidden 2xl:block 3xl:hidden">
                <div className="w-full h-auto min-h-[580px] px-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full h-auto min-h-[480px] bg-[#32261c] mt-20 rounded-2xl p-12">
                            <div className="flex flex-row text-white gap-32 justify-center">
                                {/* Company Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/Career"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Career</p></Link>
                                        <Link href="/CustomerReviews"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></Link>
                                        <Link href="/Project"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Project</p></Link>
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Blogs</p></Link>
                                        <Link href="/Life@Hub"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer ">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></Link>
                                        <Link href="/Living-Room"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Living Room</p></Link>
                                        <Link href="/Kids-Room"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></Link>
                                        <Link href="/Pooja-Unit"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></Link>
                                        <Link href="/TV-Unit"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></Link>
                                        <Link href="/Wardrobe-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></Link>
                                        <Link href="/Dining-Room-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></Link>
                                        <Link href="/False-Ceiling-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">False Ceiling Design</p></Link>
                                        <Link href="/Wall-Decor-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></Link>
                                        <Link href="/Study-Room-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></Link>
                                        <Link href="/Bar-Unit-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></Link>
                                        <Link href="/Flooring-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></Link>
                                        <Link href="/Bathroom-Design"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></Link>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Information</h1>
                                    <div className="space-y-3">
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact US</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Franchise</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-10">
                                <Link href="/"><Image src="/LOGO.png" alt="HUB Logo" width={100} height={40} className="w-[100px] h-[40px]" /></Link>
                                <Link href="/Policy"><p className="text-[14px] text-white pt-2">Privacy Policy Terms & Conditions</p></Link>
                                <div className="flex gap-8">
                                    <Link href="https://www.linkedin.com/company/homesunderbudget/" target="_blank" rel="noopener noreferrer"><Image src="/LinkedIn.png" alt="LinkedIn" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.youtube.com/@homesunderbudget" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="YouTube" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" alt="Facebook" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.instagram.com/homesunderbudget/" target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" alt="Instagram" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://x.com/Homeunderbudget" target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" alt="Twitter" width={23} height={23} className="w-[23px] h-[23px]" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* xl Footer - Tailwind Classes */}
            <div className="aboutus-footer-xl-section hidden xl:block 2xl:hidden">
                <div className="w-full h-auto min-h-[550px] px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full h-auto min-h-[450px] bg-[#32261c] mt-18 rounded-2xl p-12">
                            <div className="flex flex-row text-white gap-20 justify-center">
                                {/* Company Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6 ">Company</h1>
                                    <div className="space-y-3">
                                       <a href="/AboutUs"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer ">About</p></a>
                                        <a href="/Career"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Career</p></a>
                                        <a href="/CustomerReviews"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></a>
                                        <a href="#"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Project</p></a>
                                        <a href="#"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Blogs</p></a>
                                        <a href="#"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></a>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                       <a href="/Modular-Kitchen"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p></a>
                                        <a href="/Bedroom"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></a>
                                        <a href="/Living-Room"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Living Room</p></a>
                                        <a href="/Kids-Room"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></a>
                                        <a href="/Pooja-Unit"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></a>
                                        <a href="/TV-Unit"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></a>
                                        <a href="/Wardrobe-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></a>
                                        <a href="/Dining-Room-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></a>
                                        <a href="/False-Ceiling-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3 ">False Ceiling Design</p></a>
                                        <a href="/Wall-Decor-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></a>
                                       <a href="/Study-Room-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></a>
                                        <a href="/Bar-Unit-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></a>
                                        <a href="/Flooring-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></a>
                                        <a href="/Bathroom-Design"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></a>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                        <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Information</h1>
                                    <div className="space-y-3">
                                       <a href="/ContactUs"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact US</p> </a>
                                        <a href="/Policy"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p> </a>
                                        <a href="/interior-design-franchise"> <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-2">Franchise</p> </a>
                                    </div>
                                </div>
                            </div>
                        <div className="flex justify-between mt-10">
                        <Link href="/"><img src="/LOGO.png" className="w-[100px] h-[40px]"></img></Link>
                        <a href="/Policy"><p className="text-[14px] text-white pt-2">Privacy Policy Terms & Conditions</p></a>
                        <div className="flex gap-8">
                       <a href="https://www.linkedin.com/company/homesunderbudget/"> <img src="LinkedIn.png " className="w-[25px] h-[25px] "></img></a>
                        <a href="https://www.youtube.com/@homesunderbudget"><img src="youtube.png" className="w-[25px] h-[25px]  "></img></a>
                        <a href="https://www.facebook.com/HomesUnderBudget/"><img src="facebook.png" className="w-[25px] h-[25px] "></img></a>
                        <a href="https://www.instagram.com/homesunderbudget/"><img src="instagram.png" className="w-[25px] h-[25px] "></img></a>
                        <a href="https://x.com/Homeunderbudget"><img src="twitter.png" className="w-[23px] h-[23px] "></img></a>
                        </div>
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* lg Footer - Tailwind Classes */}
            <div className="aboutus-footer-lg-section hidden lg:block xl:hidden">
                <div className="w-full h-auto min-h-[500px] px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="w-full h-auto min-h-[400px] bg-amber-950 mt-16 rounded-2xl p-10">
                            <div className="flex flex-row text-white gap-16 justify-center">
                                {/* Company Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p></Link>
                                        <Link href="/Life@Hub"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p></Link>
                                        <Link href="/Career"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p></Link>
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Services</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Interior Design</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Wardrobe Design</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Consultation</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Other</h1>
                                    <div className="space-y-3">
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Blog</p></Link>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Gallery</p>
                                        <Link href="/CustomerReviews"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Reviews</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Privacy Policy</p></Link>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Terms of Service</p>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Connect Us</h1>
                                    <div className="space-y-3">
                                        <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Facebook</p></Link>
                                        <Link href="https://www.instagram.com/homesunderbudget/" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Instagram</p></Link>
                                        <Link href="https://www.linkedin.com/company/homesunderbudget/" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">LinkedIn</p></Link>
                                        <Link href="https://www.youtube.com/@homesunderbudget" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">YouTube</p></Link>
                                        <p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* md Footer - Tailwind Classes */}
            <div className="aboutus-footer-md-section hidden md:block lg:hidden">
                <div className="w-full h-auto min-h-[450px] px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="w-full h-auto min-h-[350px] bg-amber-950 mt-12 rounded-2xl p-8">
                            <div className="flex flex-col md:flex-row text-white gap-12 justify-center">
                                {/* Company Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/ModularKitchen"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p></Link>
                                        <Link href="/Life@Hub"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p></Link>
                                        <Link href="/Career"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p></Link>
                                        <Link href="/ContactUs"><p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Services</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Interior Design</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Wardrobe Design</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Consultation</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Other</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Blog</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Gallery</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Reviews</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Privacy Policy</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Terms of Service</p>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Connect Us</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Facebook</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Instagram</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">LinkedIn</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">YouTube</p>
                                        <p className="text-sm manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sm Footer - Tailwind Classes */}
            <div className="aboutus-footer-sm-section block md:hidden">
                <div className="w-full h-auto min-h-[400px] px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-full h-auto min-h-[300px] bg-amber-950 mt-8 rounded-xl p-6">
                            <div className="flex flex-col text-white gap-8 items-center">
                                {/* Company Section */}
                                <div className="mt-8">
                                    <h1 className="text-sm manrope font-medium mb-4">Company</h1>
                                    <div className="space-y-2">
                                        <Link href="/AboutUs"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/ModularKitchen"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p></Link>
                                        <Link href="/Life@Hub"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p></Link>
                                        <Link href="/Career"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p></Link>
                                        <Link href="/ContactUs"><p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-8">
                                    <h1 className="text-sm manrope font-medium mb-4">Services</h1>
                                    <div className="space-y-2">
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Interior Design</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Wardrobe Design</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Consultation</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-8">
                                    <h1 className="text-sm manrope font-medium mb-4">Other</h1>
                                    <div className="space-y-2">
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Blog</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Gallery</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Reviews</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Privacy Policy</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Terms of Service</p>
                                    </div>
                        </div>

                                {/* Connect Us Section */}
                                <div className="mt-8">
                                    <h1 className="text-sm manrope font-medium mb-4">Connect Us</h1>
                                    <div className="space-y-2">
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Facebook</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Instagram</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">LinkedIn</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">YouTube</p>
                                        <p className="text-xs manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}