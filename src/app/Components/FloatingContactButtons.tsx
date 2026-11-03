"use client";

import { usePathname } from "next/navigation";
import CallFloatingButton from "./CallFloatingButton";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export default function FloatingContactButtons() {
  const pathname = usePathname();

  if (pathname === "/book-consultation") {
    return null;
  }

  return (
    <>
      <CallFloatingButton />
      <WhatsAppFloatingButton />
    </>
  );
}
