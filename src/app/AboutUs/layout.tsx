// app/AboutUs/layout.tsx - Nested layout (no html/body here)
import type { Metadata, Viewport } from "next";

// ✅ Separate viewport export (only here — NOT inside metadata)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ Clean metadata without viewport
export const metadata: Metadata = {
  title: "HUB Interior | India’s Most Innovative Interior Design Company",
  description:
    "Learn how HUB Interior leads India with tailor-made modular and luxury interiors designed around lifestyle and profession, supported by a strong brand ecosystem built on innovation.",
  keywords: ["HUB Interior", "innovative interior design", "modular interiors India", "luxury interiors", "Homes Under Budget", "Hubsolute", "Affices", "Home & Merry"],
  authors: [{ name: "HUB Interior", url: "https://hubinterior.com" }],
  creator: "HUB Interior Team",
  metadataBase: new URL("https://hubinterior.com"),
  openGraph: {
    title: "HUB Interior",
    description: "Learn how HUB Interior leads India with tailor-made modular and luxury interiors designed around lifestyle and profession, supported by a strong brand ecosystem built on innovation.",
    url: "https://hubinterior.com",
    siteName: "HUB Interior",
    images: [
      {
        url: "https://hubinterior.com/hub-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HUB Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HUB Interior",
    description: "Homes uniquely built with elegance and purpose.",
    creator: "@hubinterior",
    images: ["https://hubinterior.com/hub-og-image.jpg"],
  },
  icons: {
    icon: "/hubicon.svg",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Nested layouts must NOT include <html> or <body> - only the root layout has those.
  // Metadata and viewport exports above are merged by Next.js automatically.
  return <>{children}</>;
}