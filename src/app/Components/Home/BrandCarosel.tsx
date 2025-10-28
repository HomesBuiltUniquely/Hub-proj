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

  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let scrollSpeed = 1;
    let animationFrameId: number;

    // Adjust speed based on window size
    if (windowWidth < 640) {
      scrollSpeed = 0.5; // Slower on mobile
    } else if (windowWidth < 1024) {
      scrollSpeed = 0.8; // Medium on tablet
    } else {
      scrollSpeed = 1.2; // Faster on desktop
    }

    const scroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft += scrollSpeed;

        if (scrollAmount >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [windowWidth]);

  const allLogos = [...logos, ...logos]; 

  return (
    <div className="w-full min-h-auto bg-[#F1F2F6] overflow-hidden mb-8">
      <h2 className="text-center mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-5xl font-light wulkan-display-bold text-blacktracking-wider">
        Trusted partners
      </h2>

      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {allLogos.map((logo, idx) => (
          <div
            key={`${logo.src}-${idx}`}
            className={`inline-flex flex-shrink-0 items-center justify-center mx-3 sm:mx-4 md:mx-6 ${
              brandStyles[logo.alt] || ''
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
              className="object-contain h-[40px] sm:h-[50px] md:h-[60px] w-auto"
              loading="lazy"
              style={{
                width: 'auto',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}