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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as HTMLElement).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
      <nav className="w-full transition-all duration-300 py-3 px-4 sm:py-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Mobile Header (sm) */}
        <div className="lg:hidden flex justify-between items-center">
          <Link href="/">
            <div className={`relative transition-all duration-300 ${scrolled ? 'w-[85px] h-[41px]' : 'w-[100px] h-[45px] sm:w-[120px] sm:h-[50px]'}`}>
              <Image
                loading="lazy"
                src="/hub.png"
                alt="Logo"
                fill
                className="object-contain cursor-pointer"
                sizes="(max-width: 640px) 100px, 120px"
              />
            </div>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-amber-950 p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Tablet/Mobile Menu (sm/md) */}
        {mobileMenuOpen && (
          <div className="mobile-menu-container lg:hidden bg-white/95 backdrop-blur-md rounded-xl mt-3 p-6 shadow-lg animate-fade-in">
            <ul className="flex flex-col space-y-4 text-amber-950">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 font-medium text-lg hover:text-amber-700 transition-colors manrope-uniquifier" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/Services" 
                  className="block py-2 font-medium text-lg hover:text-amber-700 transition-colors manrope-uniquifier" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/Explore Rooms" 
                  className="block py-2 font-medium text-lg hover:text-amber-700 transition-colors manrope-uniquifier" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Rooms
                </Link>
              </li>
              <li className="mt-4">
                <Link href="/Contact" onClick={() => setMobileMenuOpen(false)}>
                  <div className="text-amber-950 w-full h-[48px] font-bold text-center pt-3 rounded-full bg-[#DDCDC1] hover:bg-red-500 transition-colors duration-300 manrope-uniquifier">
                    Get Free Estimate
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop (lg+) */}
        <div className="hidden lg:block">
          <div className={`max-w-7xl mx-auto flex items-center transition-all duration-300 ${
            scrolled ? 'justify-center bg-white/40 backdrop-blur-md w-[800px] rounded-2xl px-6 py-2' : 'justify-between px-4'
          }`}>
            <Link href="/">
              <div className={`relative transition-all duration-300 ${
                scrolled ? 'w-[85px] h-[41px] mr-2' : 'w-[150px] h-[60px]'
              }`}>
                <Image
                  loading="lazy"
                  src="/hub.png"
                  alt="Logo"
                  fill
                  className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  sizes="(max-width: 1280px) 120px, 150px"
                />
              </div>
            </Link>

            <div className={`flex items-center space-x-8 text-amber-950 transition-all duration-300 ${
              scrolled ? 'ml-8' : '' 
            }`}>
              <ul className="flex space-x-8 text-black">
                <li>
                  <Link 
                    href="/" 
                    className={`hover:text-amber-700 font-medium text-[16px] transition-colors ${
                      scrolled ? 'py-2' : 'py-4'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/Services" 
                    className={`hover:text-amber-700 font-medium text-[16px] transition-colors ${
                      scrolled ? 'py-2' : 'py-4'
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/Explore Rooms" 
                    className={`hover:text-amber-700 font-medium text-[16px] transition-colors ${
                      scrolled ? 'py-2' : 'py-4'
                    }`}
                  >
                    Explore Rooms
                  </Link>
                </li>
              </ul>
              <Link href="/Contact">
                <div className="text-amber-950 w-[200px] h-[40px] font-bold text-center pt-2 rounded-full bg-[#DDCDC1] hover:bg-red-500 transition-colors duration-300">
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