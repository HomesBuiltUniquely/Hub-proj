 "use client";

import { Suspense, useEffect } from "react";
import BookConsultationForm from "../Components/BookConsultation/BookConsultationForm";

export default function BookConsultationPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const triggerBookConsultationTracking = () => {
      const hasGtag = typeof (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag === "function";
      const hasDataLayer = Array.isArray((window as typeof window & { dataLayer?: unknown[] }).dataLayer);

      if (!hasGtag && !hasDataLayer) return false;

      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);

      if (hasGtag && gtag) {
        gtag("event", "contact", {
          page_title: "Book Consultation",
          page_location: window.location.href,
        });
      }

      dataLayer.push({
        event: "contact",
        page_title: "Book Consultation",
        page_path: window.location.pathname,
        page_location: window.location.href,
      });

      return true;
    };

    if (triggerBookConsultationTracking()) return;

    const retry1 = window.setTimeout(triggerBookConsultationTracking, 800);
    const retry2 = window.setTimeout(triggerBookConsultationTracking, 2000);
    const retry3 = window.setTimeout(triggerBookConsultationTracking, 3500);

    return () => {
      window.clearTimeout(retry1);
      window.clearTimeout(retry2);
      window.clearTimeout(retry3);
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
