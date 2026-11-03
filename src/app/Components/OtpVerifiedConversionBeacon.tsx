"use client";

import { useEffect } from "react";
import { OTP_VERIFIED_CONVERSION_PENDING_KEY } from "@/lib/otpVerifiedConversionReload";

type GtagFn = (
  command: string,
  targetId: string,
  config?: Record<string, unknown>,
) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  const g = (window as typeof window & { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : undefined;
}

function fireOtpVerifiedConversionEvents() {
  const gtag = getGtag();
  if (!gtag) return false;
  // Do not fire Ads `conversion` here — same `send_to` as thank-you page would duplicate counts.
  gtag("event", "form_submit", {
    event_category: "form",
    event_label: "otp_verified",
    value: 1,
  });
  gtag("event", "page_view", {
    page_title: "OTP Verified",
    page_location: window.location.href,
  });
  return true;
}

export default function OtpVerifiedConversionBeacon() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(OTP_VERIFIED_CONVERSION_PENDING_KEY) !== "true") {
      return;
    }
    sessionStorage.removeItem(OTP_VERIFIED_CONVERSION_PENDING_KEY);

    let attempts = 0;
    const maxAttempts = 30;
    const tryFire = () => {
      attempts += 1;
      if (fireOtpVerifiedConversionEvents()) return;
      if (attempts >= maxAttempts) return;
      setTimeout(tryFire, 400);
    };
    tryFire();
  }, []);

  return null;
}
