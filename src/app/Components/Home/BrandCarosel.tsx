'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function BrandCarousel() {
  const logos = [
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Bulm1.webp', alt: 'Blum' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//ebco1.png', alt: 'Ebco' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//elica1.png', alt: 'Elica' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Faber1.png', alt: 'Faber' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Hetich1.png', alt: 'Hettich' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Rehau1.png', alt: 'Rehau' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//AsainPaints.png', alt: 'Asian Paints' },
  ];

  const brandStyles: Record<string, string> = {
    'Blum': 'bg-transparent p-4 sm:p-6 rounded-xl',
    'Ebco': 'bg-transparent p-4 sm:p-6 rounded-xl',
    'Elica': 'bg-transparent p-4 mt-2 sm:p-6 rounded-lg',
    'Faber': 'bg-transparent p-4 mt-4 sm:p-6 rounded-lg',
    'Hettich': 'bg-transparent p-4 mb-4 sm:p-6 rounded-lg',
    'Rehau': 'bg-transparent p-4 sm:p-6 rounded-xl',
    'Asian Paints': 'bg-transparent p-4 sm:p-6 rounded-full',
  };

  // -----------------------------------------
  // MULTIPLE REFS
  // -----------------------------------------
  const ref2560 = useRef<HTMLDivElement | null>(null);
  const ref1920 = useRef<HTMLDivElement | null>(null);
  const ref1280 = useRef<HTMLDivElement | null>(null);
  const refMobile = useRef<HTMLDivElement | null>(null);


  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // -----------------------------------------
  // WAIT FOR IMAGES BEFORE SCROLLING
  // ----------------------------------------- 

  
  const waitForImages = (container: HTMLDivElement) => {
    return new Promise<void>((resolve) => {
      const imgs = Array.from(container.querySelectorAll("img"));
      let loaded = 0;
      if (imgs.length === 0) return resolve();

      imgs.forEach((img) => {
        if (img.complete) {
          loaded++;
          if (loaded === imgs.length) resolve();
        } else {
          img.onload = () => {
            loaded++;
            if (loaded === imgs.length) resolve();
          };
        }
      });
    });
  };

  // -----------------------------------------
  // AUTO SCROLL HOOK (UPDATED)
  // -----------------------------------------
  const useAutoScroll = (ref: React.RefObject<HTMLDivElement | null>) => {

    useEffect(() => {
      const container = ref.current;
      if (!container) return;

      let frame: number;
      let scrollAmount = 0;
      let scrollSpeed = 1;

      if (windowWidth < 640) scrollSpeed = 0.5;
      else if (windowWidth < 1024) scrollSpeed = 0.8;
      else scrollSpeed = 1.2;

      let started = false;

      const startScrolling = () => {
        if (!container) return;
        started = true;

        const animate = () => {
          if (!container) return;

          scrollAmount += scrollSpeed;
          container.scrollLeft += scrollSpeed;

          if (scrollAmount >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
            scrollAmount = 0;
          }

          frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
      };

      waitForImages(container).then(() => {
        if (!started) startScrolling();
      });

      return () => cancelAnimationFrame(frame);
    }, [ref, windowWidth]);
  };

  // APPLY AUTOSCROLL TO EACH REF
  useAutoScroll(ref2560);
  useAutoScroll(ref1920);
  useAutoScroll(ref1280);
  useAutoScroll(refMobile);

  const allLogos = [...logos, ...logos];

  return (
    <div>
      <style jsx>{`
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 { display: block; }
        }
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 { display: block; }
        }
        @media (min-width: 1921px) {
          .desktop-2560 { display: block !important; }
        }
      `}</style>

      {/* 2560 Version */}
      <div className="desktop-2560 hidden md:block w-full min-h-auto bg-[#F1F2F6] overflow-hidden mb-8 px-80">
        <h2 className="text-center mb-16 text-5xl font-light wulkan-display-bold">Trusted partners</h2>
        <div ref={ref2560} className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          {allLogos.map((logo, idx) => (
            <div key={idx} className={`inline-flex flex-shrink-0 items-center justify-center mx-6 ${brandStyles[logo.alt]}`}>
              <Image src={logo.src} alt={logo.alt} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* 1920 Version */}
      <div className="desktop-1920 hidden w-full min-h-auto bg-[#F1F2F6] overflow-hidden mb-5 px-20">
        <h2 className="text-center mb-16 text-5xl font-light wulkan-display-bold">Trusted partners</h2>
        <div ref={ref1920} className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          {allLogos.map((logo, idx) => (
            <div key={idx} className={`inline-flex flex-shrink-0 items-center justify-center mx-6 ${brandStyles[logo.alt]}`}>
              <Image src={logo.src} alt={logo.alt} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* 1280 Version */}
      <div className="desktop-1280 hidden w-full min-h-auto bg-[#F1F2F6] overflow-hidden mb-8 px-15">
        <h2 className="text-center mb-16 text-5xl font-light wulkan-display-bold">Trusted partners</h2>
        <div ref={ref1280} className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          {allLogos.map((logo, idx) => (
            <div key={idx} className={`inline-flex flex-shrink-0 items-center mx-6 ${brandStyles[logo.alt]}`}>
              <Image src={logo.src} alt={logo.alt} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden w-full min-h-auto bg-[#F1F2F6] overflow-hidden mb-8">
        <h2 className="text-center mb-16 text-5xl font-light wulkan-display-bold">Trusted partners</h2>
        <div ref={refMobile} className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
          {allLogos.map((logo, idx) => (
            <div key={idx} className={`inline-flex flex-shrink-0 items-center justify-center mx-6 ${brandStyles[logo.alt]}`}>
              <Image src={logo.src} alt={logo.alt} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
