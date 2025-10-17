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
                                    <h1 className="text-[16px] manrope  mb-6">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657]   transition-colors duration-300 cursor-pointer mt-3">About</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Career</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Project</p></Link>
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Blogs</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></Link>
                                        <Link href="/Living-Room"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Living Room</p></Link>
                                        <Link href="/Kids-Room"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></Link>
                                        <Link href="/Pooja-Unit"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></Link>
                                        <Link href="/TV-Unit"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></Link>
                                        <Link href="/Wardrobe-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></Link>
                                        <Link href="/Dining-Room-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></Link>
                                        <Link href="/False-Ceiling-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">False Ceiling Design</p></Link>
                                        <Link href="/Wall-Decor-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></Link>
                                        <Link href="/Study-Room-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></Link>
                                        <Link href="/Bar-Unit-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></Link>
                                        <Link href="/Flooring-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></Link>
                                        <Link href="/Bathroom-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></Link>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope mb-6">Information</h1>
                                    <div className="space-y-3">
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Contact US</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-2">Franchise</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-10 ">
                                <Link href="/"><Image src="/LOGO.png" alt="HUB Logo" width={100} height={40} className="w-[100px] h-[40px]" /></Link>
                                <Link href="/Policy"><p className="text-[14px] text-white pt-2 manrope-medium hover:text-[#ebd657]  transition-colors duration-300">Privacy Policy Terms & Conditions</p></Link>
                                <div className="flex gap-8">
                                    <Link href="https://in.linkedin.com/company/hubinterior" target="_blank" rel="noopener noreferrer"><Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.youtube.com/@homesunderbudget" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="YouTube" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" alt="Facebook" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.instagram.com/hubinterior_/" target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" alt="Instagram" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://x.com/hubinterior1" target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" alt="Twitter" width={23} height={23} className="w-[23px] h-[23px]" /></Link>
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
                                    <h1 className="text-[16px] manrope mb-6">Company</h1>
                                    <div className="space-y-3">
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Career</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Project</p></Link>
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Blogs</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                        <Link href='/Inspiration'><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Inspiration</p></Link>                                       <Link href="/"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>


                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer ">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></Link>
                                        <Link href="/Living-Room"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Living Room</p></Link>
                                        <Link href="/Kids-Room"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></Link>
                                        <Link href="/Pooja-Unit"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></Link>
                                        <Link href="/TV-Unit"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></Link>
                                        <Link href="/Wardrobe-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></Link>
                                        <Link href="/Dining-Room-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] ansition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></Link>
                                        <Link href="/False-Ceiling-Design"><p className="text-[14px] manrope-mediu hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">False Ceiling Design</p></Link>
                                        <Link href="/Wall-Decor-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></Link>
                                        <Link href="/Study-Room-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></Link>
                                        <Link href="/Bar-Unit-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></Link>
                                        <Link href="/Flooring-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></Link>
                                        <Link href="/Bathroom-Design"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></Link>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Information</h1>
                                    <div className="space-y-3">
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Contact US</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer mt-2">Franchise</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-10">
                                <Link href="/"><Image src="/LOGO.png" alt="HUB Logo" width={100} height={40} className="w-[100px] h-[40px]" /></Link>
                                <Link href="/Policy"><p className="text-[14px] text-white pt-2 manrope-medium hover:text-[#ebd657]  transition-colors duration-300">Privacy Policy Terms & Conditions</p></Link>
                                <div className="flex gap-8">
                                    <Link href="https://in.linkedin.com/company/hubinterior" target="_blank" rel="noopener noreferrer"><Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.youtube.com/@hubinterior" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="YouTube" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" alt="Facebook" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://www.instagram.com/hubinterior_/" target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" alt="Instagram" width={25} height={25} className="w-[25px] h-[25px]" /></Link>
                                    <Link href="https://x.com/hubinterior1" target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" alt="Twitter" width={23} height={23} className="w-[23px] h-[23px]" /></Link>
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
                                    <h1 className="text-[16px] manrope  mb-6 ">Company</h1>
                                    <div className="space-y-3">
                                        <a href="/AboutUs"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer ">About</p></a>
                                        <Link href="/"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Career</p></Link>
                                        <Link href="/"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Customer Reviews</p></Link>
                                        <Link href="/"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Project</p></Link>
                                        <a href="/Blog"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Blogs</p></a>
                                        <Link href="/"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Offerings</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Full Home Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Interior</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Space Management</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Fast Track</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Home Automations</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Home Interior Price Calculator</p>
                                        <Link href='/Inspiration'><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Inspiration</p></Link>                                       <Link href="/"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>

                                        <Link href='/Inspiration'><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Inspiration</p></Link>                                       <Link href="/"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>

                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope  mb-6">Explore Room</h1>
                                    <div className="space-y-3">
                                       <a href="/Modular-Kitchen"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Kitchen</p></a>
                                        <a href="/Bedroom"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Bedroom</p></a>
                                        <a href="/Living-Room"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Living Room</p></a>
                                        <a href="/Kids-Room"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Kids Room</p></a>
                                        <a href="/Pooja-Unit"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Pooja Unit</p></a>
                                        <a href="/TV-Unit"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">TV Unit</p></a>
                                        <a href="/Wardrobe-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Wardrobe Design</p></a>
                                        <a href="/Dining-Room-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Dining Room Design</p></a>
                                        <a href="/False-Ceiling-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3 ">False Ceiling Design</p></a>
                                        <a href="/Wall-Decor-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Wall Decor Design</p></a>
                                       <a href="/Study-Room-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Study Room Design</p></a>
                                        <a href="/Bar-Unit-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Bar Unit Design</p></a>
                                        <a href="/Flooring-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Flooring Design</p></a>
                                        <a href="/Bathroom-Design"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-3">Bathroom Design</p></a>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                        <div className="mt-15 mr-10">
                                    <h1 className="text-[16px] manrope mb-6">Information</h1>
                                    <div className="space-y-3">
                                       <a href="/ContactUs"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Contact US</p> </a>
                                        <a href="/Policy"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-2">Privacy Policy</p> </a>
                                        <a href="/interior-design-franchise"> <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer mt-2">Franchise</p> </a>
                                    </div>
                                </div>
                            </div>
                        <div className="flex justify-between mt-10">
                        <Link href="/"><img src="/LOGO.png" className="w-[100px] h-[40px]"></img></Link>
                        <a href="/Policy"><p className="text-[14px] text-white pt-2 manrope-medium hover:text-[#ebd657]  transition-colors duration-300">Privacy Policy Terms & Conditions</p></a>
                        <div className="flex gap-8">
                       <a href="https://in.linkedin.com/company/hubinterior"> <img src="/linkedin.png " className="w-[25px] h-[25px] "></img></a>
                        <a href="https://www.youtube.com/@homesunderbudget"><img src="/youtube.png" className="w-[25px] h-[25px]  "></img></a>
                        <a href="https://www.facebook.com/HomesUnderBudget/"><img src="/facebook.png" className="w-[25px] h-[25px] "></img></a>
                        <a href="https://www.instagram.com/hubinterior_/"><img src="/instagram.png" className="w-[25px] h-[25px] "></img></a>
                        <a href="https://x.com/hubinterior1"><img src="/twitter.png" className="w-[23px] h-[23px] "></img></a>
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
                                        <Link href="/AboutUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/ModularKitchen"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Bedroom</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Franchise</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Life at HUB</p></Link>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Career</p></Link>
                                        <Link href="/ContactUs"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Contact us</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Services</h1>
                                    <div className="space-y-3">
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Interior Design</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Wardrobe Design</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Consultation</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Other</h1>
                                    <div className="space-y-3">
                                        <Link href="/Blog"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Blog</p></Link>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Gallery</p>
                                        <Link href="/"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Reviews</p></Link>
                                        <Link href="/Policy"><p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Privacy Policy</p></Link>
                                        <p className="text-[14px] manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Terms of Service</p>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-12">
                                    <h1 className="text-[16px] manrope font-medium mb-6">Connect Us</h1>
                                    <div className="space-y-3">
                                        <Link href="https://www.facebook.com/HomesUnderBudget/" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Facebook</p></Link>
                                        <Link href="https://www.instagram.com/hubinterior_/" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Instagram</p></Link>
                                        <Link href="https://in.linkedin.com/company/hubinterior" target="_blank" rel="noopener noreferrer"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">linkedin</p></Link>
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
                                        <Link href="/AboutUs"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">About</p></Link>
                                        <Link href="/ModularKitchen"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Kitchen</p></Link>
                                        <Link href="/Bedroom"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Bedroom</p></Link>
                                        <Link href="/interior-design-franchise"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Franchise</p></Link>
                                        <Link href="/"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Life at HUB</p></Link>
                                        <Link href="/"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Career</p></Link>
                                        <Link href="/ContactUs"><p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Contact us</p></Link>
                                    </div>
                                </div>
                                
                                {/* Services Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Services</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Interior Design</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Wardrobe Design</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Home Renovation</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Consultation</p>
                                    </div>
                                </div>
                                
                                {/* Other Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Other</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Blog</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Gallery</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Reviews</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Privacy Policy</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657] transition-colors duration-300 cursor-pointer">Terms of Service</p>
                                    </div>
                                </div>
                                
                                {/* Connect Us Section */}
                                <div className="mt-10">
                                    <h1 className="text-base manrope font-medium mb-5">Connect Us</h1>
                                    <div className="space-y-3">
                                        <p className="text-sm manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Facebook</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">Instagram</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">LinkedIn</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">YouTube</p>
                                        <p className="text-sm manrope-medium hover:text-[#ebd657]  transition-colors duration-300 cursor-pointer">WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer - Matching Image Design */}
            <div className="block md:hidden">
                <div className="w-full bg-[#32261c] text-white px-4 py-8">
                    {/* Four Column Layout - Side by Side for Mobile */}
                    <div className="max-w-sm mx-auto">
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {/* Company Column */}
                            <div>
                                <h3 className="text-sm manrope mb-4 manrope">Company</h3>
                                <div className="space-y-2">
                                    <Link href="/AboutUs"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">About</p></Link>
                                    <Link href="/"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Career</p></Link>
                                    <Link href="/"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Customer Review</p></Link>
                                    <Link href="/"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Project</p></Link>
                                    <Link href="/Blog"><p className="text-xs manrope-medium hover:text-[#ebd657] transition-colors cursor-pointer pt-2">Blogs</p></Link>
                                    <Link href="/"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Life at hub</p></Link>
                                </div>
                            </div>
                            
                            {/* Offerings Column */}
                            <div>
                                <h3 className="text-sm manrope mb-4 manrope">Offerings</h3>
                                <div className="space-y-2">
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Full Home Interior</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Modular Interior</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Home Renovation</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Space Management</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Fast Track</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Home Automations</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Home Interior Price Calculator</p>
                                    <Link href='/Inspiration'><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Inspiration</p></Link>                                       <Link href="/"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>

                                    <Link href='/Inspiration'><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Inspiration</p></Link>                                       <Link href="/"><p className="text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer mt-3">Life at HUB</p></Link>

                                </div>
                            </div>
                            
                            {/* Explore Rooms Column */}
                            <div>
                                <h3 className="text-sm manrope mb-4 manrope">Explore Rooms</h3>
                                <div className="space-y-2">
                                    <Link href="/ModularKitchen"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Modular Kitchen</p></Link>
                                    <Link href="/Bedroom"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Bedroom</p></Link>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Living Room</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Kids Room</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Pooja Unit</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">TV Unit</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Wardrobe Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Dining Room Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">False Ceiling Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Wall Decor Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Study Room Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Bar Unit Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Flooring Design</p>
                                    <p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Bathroom Design</p>
                                </div>
                            </div>
                            
                            {/* Information Column */}
                            <div>
                                <h3 className="text-sm manrope mb-4 manrope">Information</h3>
                                <div className="space-y-2">
                                    <Link href="/ContactUs"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer">Contact Us</p></Link>
                                    <Link href="/Policy"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Privacy Policy</p></Link>
                                    <Link href="/interior-design-franchise"><p className="text-xs manrope-medium hover:text-[#ebd657]  transition-colors cursor-pointer pt-2">Franchise</p></Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom Section with Logo and Social Media */}
                        <div className="border-t border-gray-600 pt-6">
                            <div className="flex flex-col items-center space-y-4">
                                {/* Logo */}
                                <Link href="/">
                                    <Image src="/LOGO.png" alt="HUB Logo" width={80} height={32} className="w-20 h-auto" />
                                </Link>
                                
                                {/* Social Media Icons */}
                                <div className="flex space-x-4">
                                    <Link href="https://in.linkedin.com/company/hubinterior" target="_blank" rel="noopener noreferrer" className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                        <span className="text-white text-xs font-bold"> <img src="/linkedin.png " className="w-[25px] h-[25px] "></img></span>
                                    </Link>
                                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 s rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <span className="text-white text-xs font-bold w-7 h-7 border-1 border-white rounded-full pt-1.5 pl-1"> <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg></span>
                                    </Link>
                                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <img src="/instagram.png" className="w-[25px] h-[25px] "></img>
                                    </Link>
                                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                        <span className="text-white text-xs font-bold"><img src="/facebook.png" className="w-[25px] h-[25px] "></img></span>
                                    </Link>
                                    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                        <span className="text-white text-xs font-bold"><img src="/twitter.png" className="w-[23px] h-[23px] hover:text-[#ebd657] transition-colors duration-300"></img></span>
                                    </Link>
                                </div>
                                
                                {/* Legal Text */}
                                <div className="text-center">
                                    <p className="text-xs text-gray-300 manrope-medium hover:text-[#ebd657]  transition-colors duration-300">Privacy Policy Terms & Conditions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}





