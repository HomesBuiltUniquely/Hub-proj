"use client";

import React from "react";

export default function BenefitsSection({
  wrapperClassName,
  titleClassName,
  textClassName,
}: {
  wrapperClassName: string;
  titleClassName: string;
  textClassName: string;
}) {
  return (
    <div className={wrapperClassName}>
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-[22px] bg-gradient-to-b from-[#F8FAFC] to-[#F1F4F9] px-5 py-8 text-center transition-transform hover:-translate-y-1 hover:shadow-sm duration-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E8] text-[#EF2B2D] mx-auto shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="m12 2 2.1 4.26 4.7.69-3.4 3.32.8 4.68L12 12.77 7.8 14.95l.8-4.68L5.2 6.95l4.7-.69L12 2Z" />
            </svg>
          </div>
          <h3 className={titleClassName}>Expert Designers</h3>
          <p className={textClassName}>10+ years experience</p>
        </div>
        <div className="rounded-[22px] bg-gradient-to-b from-[#F8FAFC] to-[#F1F4F9] px-5 py-8 text-center transition-transform hover:-translate-y-1 hover:shadow-sm duration-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE8E8] text-[#EF2B2D] mx-auto shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M15.7 3.3a2 2 0 0 1 2.83 2.83l-1.55 1.55-2.83-2.83 1.55-1.55Z" />
              <path d="m13.44 5.56 2.83 2.83-7.9 7.9-3.64.8.8-3.64 7.9-7.9Z" />
            </svg>
          </div>
          <h3 className={titleClassName}>Unique Styles</h3>
          <p className={textClassName}>Bespoke lifestyle designs curated for your taste.</p>
        </div>
      </div>
    </div>
  );
}
