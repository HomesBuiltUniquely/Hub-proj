'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-[#F1F2F6]'
      }`}
    >
      <nav className="w-full   transition-all duration-300 py-4">
        <div
          className={`max-w-7xl mx-auto flex items-center transition-all duration-300 ${
            scrolled ? 'justify-center bg-white/30 backdrop-blur-md shadow-md w-[800px] rounded-2xl' : 'justify-between'
          }`}
        >

          <Link href="/">
            <Image
            loading="lazy"
              src="/hub.png"
              alt="Logo"
              width={150}
              height={60}
              className={`cursor-pointer transition-all duration-300 ${
                scrolled ? 'w-[85px] h-[41px] mr-2' : 'w-[150px] h-[60px] mb-5'
              }`}
            />
          </Link>



          {/* Navigation */}
          <div
            className={`flex items-center space-x-6 text-amber-950 transition-all duration-300 ${
              scrolled ? 'ml-8 mt-4 ' : '' 
            }`}
          >
            <ul className="flex space-x-6 text-amber-950 pb-3">
              <li><Link href="/" className="hover: font-medium text-[16px] ">Home</Link></li>
              <li><Link href="/Services" className="hover:text-blue-500 text-[16px] font-medium ">Services</Link></li>
              <li><Link href="/Explore Rooms" className="hover:text-blue-500 text-[16px] font-medium mr-8 ">Explore Rooms</Link></li>
            </ul>
            <Link href="/Contact">
            <div className="text-amber-950 w-[200px] h-[40px] font-bold text-center pt-2 rounded-4xl mb-3 bg-[#DDCDC1] gilda-display-regular">
              Get Free Estimate
            </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}