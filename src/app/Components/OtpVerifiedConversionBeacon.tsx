"use client";

import { useEffect } from "react";
import { OTP_VERIFIED_CONVERSION_PENDING_KEY } from "@/lib/otpVerifiedConversionReload";

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

function fireOtpVerifiedConversionEvents() {
  if (typeof window === "undefined" || !window.gtag) return false;
  window.gtag("event", "conversion", {
    send_to: "17366893543",
  });
  window.gtag("event", "form_submit", {
    event_category: "form",
    event_label: "otp_verified",
    value: 1,
  });
  window.gtag("event", "page_view", {
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
