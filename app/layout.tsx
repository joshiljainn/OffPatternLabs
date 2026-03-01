import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffPattern Labs - We Operate Your Newsletter. You Get Paid.",
  description: "We turn dormant newsletters into cash flow assets. OffPattern Labs operates, monetizes, and scales your publication — no upfront cost, shared upside.",
  keywords: [
    "newsletter monetization",
    "dormant newsletter revival",
    "newsletter acquisition",
    "newsletter operator",
    "passive income newsletter",
    "Substack monetization",
    "Beehiiv monetization",
    "micro-acquisition newsletters",
    "OffPattern Labs",
  ],
  authors: [{ name: "Joshil Jain" }],
  creator: "OffPattern Labs",
  publisher: "OffPattern Labs",
  metadataBase: new URL("https://offpatternlabs.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://offpatternlabs.com",
    siteName: "OffPattern Labs",
    title: "OffPattern Labs — We Operate Your Newsletter. You Get Paid.",
    description: "Turn your dormant list into a cash-flowing asset. We operate, monetize, and grow your newsletter — no upfront cost.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OffPattern Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OffPattern Labs — We Operate Your Newsletter. You Get Paid.",
    description: "Turn your dormant list into a cash-flowing asset. No upfront cost, shared upside.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import GlobalVideoBackground from "@/components/GlobalVideoBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OffPattern Labs",
    "description": "We turn dormant newsletters into cash flow assets. We operate, monetize, and scale your publication.",
    "url": "https://offpatternlabs.com",
    "founder": {
      "@type": "Person",
      "name": "Joshil Jain",
      "email": "joshil@offpatternlabs.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/company/offpatternlabs"
    ],
    "email": "joshil@offpatternlabs.com"
  };

  return (
    <html lang="en" style={{ background: "transparent" }}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body style={{ background: "transparent" }}>
        {/* Global scroll-scrubbed video — fixed z-0 wrapper behind all z-10 content */}
        <GlobalVideoBackground />
        {children}
      </body>
    </html>
  );
}
