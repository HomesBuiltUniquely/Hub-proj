'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive logo size calculations
  const getLogoSize = () => {
    if (windowWidth < 1024) {
      return scrolled ? { width: 85, height: 41 } : { width: 120, height: 50 };
    }
    if (windowWidth < 1280) {
      return scrolled ? { width: 100, height: 48 } : { width: 140, height: 60 };
    }
    if (windowWidth < 1920) {
      return scrolled ? { width: 110, height: 53 } : { width: 160, height: 70 };
    }
    return scrolled ? { width: 120, height: 58 } : { width: 180, height: 80 };
  };

  const logoSize = getLogoSize();

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? '' : 'bg-[#F1F2F6]'}`}>
      <nav className="w-full transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Mobile Header */}
        <div className="lg:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              loading="lazy"
              src="/hub.png"
              alt="Logo"
              width={logoSize.width}
              height={logoSize.height}
              className="cursor-pointer transition-all duration-300 object-contain"
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

        {/* Desktop Header */}
        <div className={`hidden lg:flex mx-auto items-center transition-all duration-300 ${
          scrolled ? 'justify-center bg-white/30 backdrop-blur-md shadow-md rounded-2xl px-6 py-2' : 'justify-between px-4'
        }`} style={{
          maxWidth: scrolled ? '800px' : 'none',
          width: scrolled ? (windowWidth >= 1920 ? '900px' : '800px') : 'auto'
        }}>
          <Link href="/">
            <Image
              loading="lazy"
              src="/hub.png"
              alt="Logo"
              width={logoSize.width}
              height={logoSize.height}
              className="cursor-pointer transition-all duration-300 object-contain hover:opacity-90"
            />
          </Link>

          <div className={`flex items-center space-x-6 xl:space-x-8 2xl:space-x-10 text-amber-950 transition-all duration-300 ${
            scrolled ? 'ml-8' : ''
          }`}>
            <ul className="flex space-x-6 xl:space-x-8 2xl:space-x-10 text-amber-950">
              <li>
                <Link 
                  href="/" 
                  className={`hover:text-amber-700 font-medium transition-colors ${
                    scrolled ? 'py-2 text-base manrope-semibold' : 'py-4 text-xm manrope-medium'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/Services" 
                  className={`hover:text-amber-700 font-medium transition-colors ${
                    scrolled ? 'py-2 text-base manrope-semibold' : 'py-4 text-xm manrope-medium'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/Explore-Rooms" 
                  className={`hover:text-amber-700 font-medium transition-colors ${
                    scrolled ? 'py-2 text-base manrope-semibold' : 'py-4 text-xm manrope-medium'
                  }`}
                >
                  Explore Rooms
                </Link>
              </li>
            </ul>
            <Link href="/Contact">
              <div className={`text-amber-950 font-medium text-center rounded-full bg-[#DDCDC1] hover:bg-red-500 transition-colors duration-300 ${
                scrolled ? 'w-[180px] h-[36px] pt-1.5 text-sm manrope-semibold' : 'w-[200px] h-[40px] pt-2 text-xm manrope-medium'
              }`}>
                Get Free Estimate
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-3 p-6 rounded-xl shadow-lg animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block py-3 font-medium text-lg text-amber-950 hover:text-blue-500 transition-colors manrope-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/Services" 
                  className="block py-3 font-medium text-lg text-amber-950 hover:text-blue-500 transition-colors manrope-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/Explore-Rooms" 
                  className="block py-3 font-medium text-lg text-amber-950 hover:text-blue-500 transition-colors manrope-medium"
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
                  <div className="text-amber-950 w-full h-[48px] font-medium text-center pt-3 rounded-full bg-[#DDCDC1] hover:bg-red-500 transition-colors manrope-medium">
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