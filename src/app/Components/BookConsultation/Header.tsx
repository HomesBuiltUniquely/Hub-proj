"use client";

import React from "react";

export default function HeaderSection({
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
      <h1 className={titleClassName}>
        Book Your Free <span className="text-[#EF2B2D]">Design Consultation</span>
      </h1>
      <p className={textClassName}>
      </p>
    </div>
  );
}
