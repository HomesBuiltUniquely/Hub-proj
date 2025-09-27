'use client';

import Image from 'next/image';


export default function BrandCarousel() {
  const brands = [
    {
      name: 'Elica',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//elica1.png',
    },
    {
      name: 'FABER',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Faber1.png',
    },
    {
      name: 'Hettich',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Hetich1.png',
    },
    {
      name: 'REHAU',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Rehau1.png',
    },
    {
      name: 'asianpaints',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//AsainPaints.png',
    },
    {
      name: 'blum',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//Bulm1.webp',
    },
    {
      name: 'ebco',
      logo: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//ebco1.png',
    }
  ];

  return (
    <div className="w-full bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-14 text-4xl manrope-medium ">
        Trusted Partners
      </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="bg-gray-200 rounded-2xl p-8 overflow-hidden">
            <div className="relative w-full">
              <div
                className="flex items-center animate-marquee"
                style={{
                  width: `calc(${brands.length} * 200px)`
                }}
              >
                {brands.concat(brands).map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex-shrink-0 w-[200px] px-4">
                    <div className="flex flex-col items-center">
                      <div className={`mb-2 ${brand.name === 'Hettich' ? '-mt-2' : ''}`}>
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={120}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 20s linear infinite;
              }
            `}</style>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-gray-200 rounded-2xl p-6 overflow-hidden">
            <div className="relative w-full">
              <div
                className="flex items-center animate-marquee-mobile"
                style={{
                  width: `calc(${brands.length} * 150px)`
                }}
      >
                {brands.concat(brands).map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex-shrink-0 w-[150px] px-4">
                    <div className="flex flex-col items-center">
                      <div className={`mb-2 ${brand.name === 'Hettich' ? '-mt-2' : ''}`}>
            <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes marquee-mobile {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-mobile {
                animation: marquee-mobile 15s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}