'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
      <nav className="w-full transition-all duration-300 py-4 px-4 md:px-6 lg:px-0">
        {/* Mobile Header (sm) */}
        <div className="lg:hidden flex justify-between items-center">
          <Link href="/">
            <div className={`relative ${scrolled ? 'w-[85px] h-[41px]' : 'w-[120px] h-[50px]'}`}>
              <Image
                loading="lazy"
                src="/hub.png"
                alt="Logo"
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-amber-950 p-2"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Tablet/Mobile Menu (sm/md) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-md rounded-xl mt-4 p-6 shadow-lg">
            <ul className="flex flex-col space-y-4 text-amber-950">
              <li>
                <Link href="/" className="block py-2 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" className="block py-2 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Explore Rooms" className="block py-2 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Explore Rooms
                </Link>
              </li>
              <li className="mt-4">
                <Link href="/Contact" onClick={() => setMobileMenuOpen(false)}>
                  <div className="text-amber-950 w-full h-[48px] font-bold text-center pt-3 rounded-4xl bg-[#DDCDC1] gilda-display-regular">
                    Get Free Estimate
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop (lg) - Your original unchanged version */}
        <div className="hidden lg:block">
          <div className={`max-w-7xl mx-auto flex items-center transition-all duration-300 ${
            scrolled ? 'justify-center bg-white/40 w-[800px] rounded-2xl' : 'justify-between'
          }`}>
            <Link href="/">
              <div className={`relative transition-all duration-300 ${
                scrolled ? 'w-[85px] h-[41px] mr-2' : 'w-[150px] h-[60px] mb-5'
              }`}>
                <Image
                  loading="lazy"
                  src="/hub.png"
                  alt="Logo"
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
            </Link>

            <div className={`flex items-center space-x-6 text-amber-950 transition-all duration-300 ${
              scrolled ? 'ml-8 mt-4' : '' 
            }`}>
              <ul className="flex space-x-6 text-black pb-3">
                <li><Link href="/" className="hover: font-medium text-[16px]">Home</Link></li>
                <li><Link href="/Services" className="hover:text-blue-500 text-[16px] font-medium">Services</Link></li>
                <li><Link href="/Explore Rooms" className="hover:text-blue-500 text-[16px] font-medium mr-8">Explore Rooms</Link></li>
              </ul>
              <Link href="/Contact">
                <div className="text-amber-950 w-[200px] h-[40px] font-bold text-center pt-2 rounded-4xl mb-3 bg-[#DDCDC1] gilda-display-regular">
                  Get Free Estimate
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}