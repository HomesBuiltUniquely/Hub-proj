import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Export viewport separately (as required by Next.js)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Global Metadata
export const metadata: Metadata = {
  title: "HUB Interior_Home",
  description: "HUB Interior offers uniquely built homes with elegant designs and functionality.",
  keywords: ["Interior Design", "HUB Interior", "Home Design", "Architecture", "Custom Homes"],
  authors: [{ name: "HUB Interior", url: "https://hubinterior.com" }],
  creator: "HUB Interior Team",
  metadataBase: new URL("https://hubinterior.com"),

  openGraph: {
    title: "HUB Interior",
    description: "Homes uniquely built with elegance and purpose.",
    url: "https://hubinterior.com",
    siteName: "HUB Interior",
    images: [
      {
        url: "https://hubinterior.com/hub-og-image.jpg", // Make sure this image exists in /public
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
    creator: "@hubinterior", // Replace if you have a real Twitter handle
    images: ["https://hubinterior.com/hub-og-image.jpg"],
  },

  icons: {
    icon: "/hubicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg" href="/hubicon.svg" />


        {/* ✅ Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8M2PLFJ');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8M2PLFJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <Analytics/>
      </body>
    </html>
  );
}
