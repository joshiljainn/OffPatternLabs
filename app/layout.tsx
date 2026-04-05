import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffPattern Labs - Voice AI That Sounds Human",
  description: "Build, deploy, and scale AI voice agents that handle calls, conversations, and customer interactions with human-like intelligence.",
  keywords: [
    "voice AI",
    "AI voice agents",
    "conversational AI",
    "voice automation",
    "AI caller",
    "customer service AI",
    "voice bot",
    "AI phone calls",
    "OffPattern Labs",
  ],
  authors: [{ name: "Joshil Jain" }],
  creator: "OffPattern Labs",
  publisher: "OffPattern Labs",
  metadataBase: new URL("https://offpatternlabs.com"),
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://offpatternlabs.com",
    siteName: "OffPattern Labs",
    title: "OffPattern Labs — Voice AI That Sounds Human",
    description: "Build, deploy, and scale AI voice agents with human-like intelligence.",
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
    title: "OffPattern Labs — Voice AI That Sounds Human",
    description: "Build, deploy, and scale AI voice agents with human-like intelligence.",
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
    "@type": "Organization",
    "name": "OffPattern Labs",
    "description": "Voice AI platform for building human-like AI voice agents",
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
    "email": "joshil@offpatternlabs.com",
    "knowsAbout": ["Voice AI", "Conversational AI", "AI Agents", "Machine Learning"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
