'use client';

import { useEffect, useRef, useState } from "react";
import { NavBar } from "./Navbar";
import Image from "next/image";

export default function Header() {
  const images = [
    "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/1.svg",
    "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/2.png",
    "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/3.svg",
    "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/4.jpg"
  ];

  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [form, setForm] = useState({ name: '', phone: '', email: '', pincode: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const mouseDownRef = useRef(false);

  // Adjust carousel speed based on screen size
  const [carouselSpeed, setCarouselSpeed] = useState(3000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCarouselSpeed(4000);
      } else if (window.innerWidth < 1024) {
        setCarouselSpeed(3500);
      } else {
        setCarouselSpeed(3000);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => goToNext(), carouselSpeed);
    return () => clearInterval(interval);
  }, [carouselSpeed]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 0);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isTransitioning) return;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTransitioning) return;
    touchEndXRef.current = e.changedTouches[0].clientX;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrevious();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isTransitioning) return;
    mouseDownRef.current = true;
    touchStartXRef.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isTransitioning || !mouseDownRef.current) return;
    mouseDownRef.current = false;
    touchEndXRef.current = e.clientX;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrevious();
  };

  const handleMouseLeave = () => {
    mouseDownRef.current = false;
  };

  const goToNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrevious = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const getTransform = () => `translateX(-${currentIndex * 100}%)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', phone: '', email: '', pincode: '' });
      } else {
        const data = await res.json();
        setError(data.message || 'Submission failed.');
      }
    } catch {
      setError('Error submitting the form. Please try again.');
    }
  };

  return (
    <>
      <NavBar />

      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] overflow-hidden bg-black">
        <div
          className="w-full h-full relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "grab", userSelect: "none" }}
        >
          <div
            className={`flex h-full w-full ${isTransitioning ? "transition-transform duration-[1500ms] ease-in-out" : ""}`}
            style={{ transform: getTransform() }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedImages.map((src, idx) => (
              <div key={idx} className="relative w-full h-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`Slide ${idx}`}
                  fill
                  className="object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  priority={idx < 2}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Form - Desktop */}
        <div className="hidden lg:block absolute top-1/2 right-12 transform -translate-y-1/2 z-20 w-[90%] max-w-sm backdrop-blur-lg bg-white/30 border border-white/30 text-white rounded-3xl shadow-2xl p-6">
          {renderForm()}
        </div>

        {/* Form - Tablet */}
        <div className="hidden md:block lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-md backdrop-blur-sm bg-white/20 border border-white/20 text-white rounded-2xl shadow-xl p-4">
          {renderForm('md')}
        </div>
      </div>

      {/* Form - Mobile */}
      <div className="block md:hidden w-full bg-[#f1f2f6] text-black py-6 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-5">
          {renderForm('sm')}
        </div>
      </div>
    </>
  );

  function renderForm(size = 'lg') {
    return (
      <div className={size === 'sm' ? 'space-y-3' : 'space-y-4'}>
        <h2 className={`${size === 'sm' ? 'text-xl' : 'text-2xl'} font-bold mb-3 text-center`}>
          Get in Touch
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you! We&apos;ll contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#DDCDC1] hover:bg-red-300 text-black py-2 rounded-xl font-semibold transition"
            >
              Submit
            </button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </form>
        )}
      </div>
    );
  }
}
