// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Shape Spaces. Shape Your Career. | HUB Interior Jobs",
  description:
    "Turn passion into profession at HUB Interior. Explore open roles and grow with a brand that celebrates creativity, innovation and the art of shaping modern homes.",
  keywords: ["HUB Interior careers", "jobs Bengaluru", "interior design careers", "design career opportunities", "HUB Interior hiring"],
  authors: [{ name: "HUB Interior", url: "https://hubinterior.com" }],
  creator: "HUB Interior Team",
  metadataBase: new URL("https://hubinterior.com"),
  openGraph: {
    title: "HUB Interior",
    description: "Turn passion into profession at HUB Interior. Explore open roles and grow with a brand that celebrates creativity, innovation and the art of shaping modern homes.",
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
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/hubicon.svg" />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
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

        <Script 
      id="whatsapp-conditional"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            const hideWhatsAppPaths = [
              '/interior-designers-in-bangalore',
              '/interior-designers-in-bangalore/Calculator',
              
            ];
            
            const shouldHideWhatsApp = hideWhatsAppPaths.some(path => 
              currentPath === path || currentPath.startsWith(path + '/')
            );
            
            console.log('Current path:', currentPath);
            console.log('Should hide WhatsApp:', shouldHideWhatsApp);
            
            if (!shouldHideWhatsApp) {
              console.log('Loading WhatsApp widget...');
              const script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js';
              script.id = 'aisensy-wa-widget';
              script.setAttribute('widget-id', 'aaaqjb');
              script.onload = function() {
                console.log('WhatsApp widget loaded successfully');
              };
              script.onerror = function() {
                console.error('Failed to load WhatsApp widget');
              };
              document.head.appendChild(script);
            } else {
              console.log('WhatsApp widget hidden for this page');
            }
          }

        `
      }}
    />
   

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1486878599401922&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Tag Manager Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?"&l="+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W8M2PLFJ');`}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8M2PLFJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
      
    </html>
  );
}