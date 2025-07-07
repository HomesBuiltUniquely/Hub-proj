'use client';

import Image from "next/image";

export function BrandCorosal() {
  return (
    <div className="w-full overflow-hidden bg-[#F1F2F6] py-10">
      <div className="text-center mb-10 text-4xl gilda-display-regular text-amber-950 tracking-wider mt-3">Trusted Partners</div>
      <div className="flex scroll-track whitespace-nowrap mt-15 relative">
        <div className="flex-shrink-0 px-10 ">
          <Image loading="lazy" src="/Bulm1.webp" alt="Blum" fill className="h-20 mt-2 " />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image loading="lazy" src="/ebco1.png" alt="Ebco" fill className="h-20 mt-4" />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image loading="lazy" src="/elica1.png" alt="elica1" fill className="h-20 mt-5 " />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image loading="lazy" src="/Faber1.png" alt="Faber" fill className="h-20 mt-6" />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image loading="lazy"  src="/Hetich1.png" alt="Hettich" fill className="h-20  " />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image loading="lazy"  src="/Rehau1.png" alt="Hettich" fill className="h-20  mt-1" />
        </div>
        <div className="flex-shrink-0 px-10">
          <Image  loading="lazy" src="/AsainPaints.png" alt="AsainPaints" fill className="h-20  mt-1" />
        </div>
      </div>
    </div>
  );
}
