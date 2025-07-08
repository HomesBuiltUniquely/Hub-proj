'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function BrandCarousel() {
  const logos = [
    { src: '/Bulm1.webp', alt: 'Blum' },
    { src: '/ebco1.png', alt: 'Ebco' },
    { src: '/elica1.png', alt: 'Elica' },
    { src: '/Faber1.png', alt: 'Faber' },
    { src: '/Hetich1.png', alt: 'Hettich' },
    { src: '/Rehau1.png', alt: 'Rehau' },
    { src: '/AsainPaints.png', alt: 'Asian Paints' },
  ];

  const brandStyles: Record<string, string> = {
    'Blum': 'bg-transparent p-6 rounded-xl',
    'Ebco': 'bg-transparent p-6 rounded-xl',
    'Elica': 'bg-transparent p-6 rounded-lg',
    'Faber': 'bg-transparent p-6 rounded-lg',
    'Hettich': 'bg-transparent p-6 rounded-lg',
    'Rehau': 'bg-transparent p-6 rounded-xl',
    'Asian Paints': 'bg-transparent p-6 rounded-full',
  };

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
    <div className="w-full bg-[#F1F2F6] overflow-hidden">
      <h2 className="text-center mb-8 text-2xl sm:text-4xl font-light gilda-display-regular text-amber-950 tracking-wider">
        Trusted Partners
      </h2>

      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {allLogos.map((logo, idx) => (
          <div
            key={`${logo.src}-${idx}`}
            className={`inline-flex flex-shrink-0 items-center justify-center mx-6 ${brandStyles[logo.alt] || ''}`}
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
