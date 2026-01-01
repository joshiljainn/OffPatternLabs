import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OffPattern Labs - D2C Marketing & Digital Growth Systems for Indian Brands",
  description: "We turn good products into brands that sell online. OffPattern Labs builds digital systems that help real-world businesses reach real customers — from website to ads to growth.",
  keywords: [
    "D2C marketing agency India",
    "Shopify setup India",
    "Performance marketing for small brands",
    "Digital launch services for manufacturers",
    "Ads for Indian brands",
    "Brand growth systems",
    "D2C growth agency",
    "Ecommerce marketing India"
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
    title: "OffPattern Labs - Digital Growth Systems for Indian Brands",
    description: "We help small Indian brands and manufacturers go online with Shopify stores, creatives, ads, and full growth systems.",
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
    title: "OffPattern Labs - Digital Growth Systems for Indian Brands",
    description: "We help small Indian brands and manufacturers go online with Shopify stores, creatives, ads, and full growth systems.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OffPattern Labs",
    "description": "We help small Indian brands and manufacturers go online with Shopify stores, creatives, ads, and full growth systems.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
