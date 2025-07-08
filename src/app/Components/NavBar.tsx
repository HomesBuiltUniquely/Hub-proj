'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-[#F1F2F6]'}`}>
      <nav className="w-full transition-all duration-300 py-4 px-4 sm:px-6">
        {/* Mobile Header */}
        <div className="lg:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              loading="lazy"
              src="/hub.png"
              alt="Logo"
              width={scrolled ? 85 : 120}
              height={scrolled ? 41 : 50}
              className="cursor-pointer transition-all duration-300"
            />
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-amber-950 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Header (unchanged from your original) */}
        <div className={`hidden lg:flex max-w-7xl mx-auto items-center transition-all duration-300 ${scrolled ? 'justify-center bg-white/30 backdrop-blur-md shadow-md w-[800px] rounded-2xl' : 'justify-between'}`}>
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

          <div className={`flex items-center space-x-6 text-amber-950 transition-all duration-300 ${scrolled ? 'ml-8 mt-4' : ''}`}>
            <ul className="flex space-x-6 text-amber-950 pb-3">
              <li><Link href="/" className="hover:text-blue-500 font-medium text-[16px]">Home</Link></li>
              <li><Link href="/Services" className="hover:text-blue-500 text-[16px] font-medium">Services</Link></li>
              <li><Link href="/Explore-Rooms" className="hover:text-blue-500 text-[16px] font-medium mr-8">Explore Rooms</Link></li>
            </ul>
            <Link href="/Contact">
              <div className="text-amber-950 w-[200px] h-[40px] font-bold text-center pt-2 rounded-4xl mb-3 bg-[#DDCDC1] gilda-display-regular hover:bg-[#c9b9ad] transition-colors">
                Get Free Estimate
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-4 p-6 rounded-xl shadow-lg">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 font-medium text-lg text-amber-950 hover:text-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/Services" 
                  className="block py-2 font-medium text-lg text-amber-950 hover:text-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/Explore-Rooms" 
                  className="block py-2 font-medium text-lg text-amber-950 hover:text-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Rooms
                </Link>
              </li>
              <li className="mt-4">
                <Link 
                  href="/Contact" 
                  className="block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="text-amber-950 w-full h-[48px] font-bold text-center pt-3 rounded-4xl bg-[#DDCDC1] gilda-display-regular hover:bg-[#c9b9ad] transition-colors">
                    Get Free Estimate
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}