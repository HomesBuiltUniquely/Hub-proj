"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const HIDE_CALL_PATHS = [
  "/interior-designers-in-bangalore",
  "/interior-designers-in-bangalore/Calculator",
  "/best-interior-designers-in-bangalore",
  "/best-interior-designers-in-bangalore/Calculator",
];

const CALL_NUMBER = "07316914731";
const COMPANY_NAME = "HUB Interior";
const GREETING_MESSAGE =
  "Hello from HUB Interior. We are here to help with your interiors.";

export default function CallFloatingButton() {
  const pathname = usePathname() || "/";
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setCopied(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shouldHide = HIDE_CALL_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (shouldHide) {
    return null;
  }

  const handleCallClick = () => {
    if (isMobile) {
      window.location.href = `tel:${CALL_NUMBER}`;
      return;
    }

    setIsOpen((current) => !current);
    setCopied(false);
  };

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(CALL_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3"
    >
      {isOpen ? (
        <div className="w-[290px] rounded-3xl border border-[#D9E4FF] bg-white p-5 text-[#1E293B] shadow-[0_18px_50px_rgba(37,99,235,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            {COMPANY_NAME}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#475569]">
            {GREETING_MESSAGE}
          </p>
          <div className="mt-4 rounded-2xl bg-[#EFF6FF] px-4 py-3">
            <p className="text-xs uppercase tracking-[0.14em] text-[#64748B]">
              Phone Number
            </p>
            <p className="mt-1 text-lg font-semibold tracking-[0.06em]">
              {CALL_NUMBER}
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={handleCopyNumber}
              className="flex-1 rounded-full bg-[#2563EB] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
            >
              {copied ? "Copied" : "Copy Number"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[#BFDBFE] px-4 py-3 text-sm font-medium text-[#1E293B] transition-colors hover:bg-[#EFF6FF]"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleCallClick}
        aria-label={`Call us at ${CALL_NUMBER}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.29.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.19 2.39.56 3.5a1 1 0 0 1-.24 1.01l-2.2 2.28Z" />
        </svg>
      </button>
    </div>
  );
}
