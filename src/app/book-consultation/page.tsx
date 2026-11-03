 "use client";

import { Suspense, useEffect } from "react";
import BookConsultationForm from "../Components/BookConsultation/BookConsultationForm";

export default function BookConsultationPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const trackingPayload = {
      event: "contact",
      page_title: "Book Consultation",
      page_path: window.location.pathname,
      page_location: window.location.href,
      event_id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    };

    // Always queue the event immediately.
    // If GTM is not loaded yet, it will consume this from dataLayer after load.
    const dataLayer = ((window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer ||= []);
    dataLayer.push(trackingPayload);

    const triggerGtagIfReady = () => {
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return false;

      gtag("event", "contact", {
        page_title: "Book Consultation",
        page_location: window.location.href,
      });
      return true;
    };

    // Try immediate gtag fire (for setups that rely on gtag listeners directly).
    if (triggerGtagIfReady()) return;

    const retry1 = window.setTimeout(triggerGtagIfReady, 800);
    const retry2 = window.setTimeout(triggerGtagIfReady, 2000);
    const retry3 = window.setTimeout(triggerGtagIfReady, 3500);
    const retry4 = window.setTimeout(triggerGtagIfReady, 6000);
    const retry5 = window.setTimeout(triggerGtagIfReady, 10000);

    return () => {
      window.clearTimeout(retry1);
      window.clearTimeout(retry2);
      window.clearTimeout(retry3);
      window.clearTimeout(retry4);
      window.clearTimeout(retry5);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePageShow = () => {
      const dataLayer = ((window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer ||= []);
      dataLayer.push({
        event: "contact",
        page_title: "Book Consultation",
        page_path: window.location.pathname,
        page_location: window.location.href,
      });
    };

    // Handles browser back-forward cache restores and repeated entries.
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div />}>
        <BookConsultationForm />
      </Suspense>
    </div>
  );
}
