// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Separate viewport export (only here — NOT inside metadata)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ Clean metadata without viewport
export const metadata: Metadata = {
  title: "Bedroom Interior Designs in Bangalore | HUB Interior",
  description:
    "Modern bedroom interior designs crafted for comfort, style and personalized living. HUB Interior delivers custom layouts, smart storage and elegant detailing in Bangalore.",
  keywords: ["bedroom interior designs", "bedroom interiors Bangalore", "modern bedroom design", "custom bedroom interiors", "wardrobes Bangalore", "HUB Interior bedroom designs"],
  authors: [{ name: "HUB Interior", url: "https://hubinterior.com" }],
  creator: "HUB Interior Team",
  metadataBase: new URL("https://hubinterior.com"),
  openGraph: {
    title: "HUB Interior",
    description: "Modern bedroom interior designs crafted for comfort, style and personalized living. HUB Interior delivers custom layouts, smart storage and elegant detailing in Bangalore.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Meta Pixel Code (runs in body for this route segment) */}
      <Script id="meta-pixel-bedroom" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1486878599401922');
          fbq('track', 'PageView');`}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1486878599401922&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Google Tag Manager for this route segment */}
      <Script id="gtm-bedroom" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?"&l="+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W8M2PLFJ');`}
      </Script>

      {/* GTM NoScript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W8M2PLFJ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </div>

      {/* Vercel Analytics for this route segment */}
      <Analytics />
    </>
  );
}