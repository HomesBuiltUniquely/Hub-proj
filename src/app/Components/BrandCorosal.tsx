'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function BrandCarousel() {  // Changed to default export
  const logos = [
    { src: '/Bulm1.webp', alt: 'Blum' },
    { src: '/ebco1.png', alt: 'Ebco' },
    { src: '/elica1.png', alt: 'Elica' },
    { src: '/Faber1.png', alt: 'Faber' },
    { src: '/Hetich1.png', alt: 'Hettich' },
    { src: '/Rehau1.png', alt: 'Rehau' },
    { src: '/AsainPaints.png', alt: 'Asian Paints' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollInterval = setInterval(() => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft += scrollSpeed;

        if (scrollAmount >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const allLogos = [...logos, ...logos];

  return ( 
    <div className="w-full bg-[#F1F2F6] overflow-hidden ">
      <h2 className="text-center mb-10 text-3xl sm:text-4xl font-light gilda-display-regular text-amber-950 tracking-wider">
        Trusted Partners
      </h2>

      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {allLogos.map((logo, idx) => (
          <div
            key={`${logo.src}-${idx}`}
            className="inline-flex flex-shrink-0 px-10 py-10 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain h-[60px] w-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}