import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VarnishRoll — Thick, Shiny 3D Stickers for Your Brand",
  description: "We print beautiful 3D logo stickers for your cups, boxes, and jars. Fast 4-day shipping. Upload your art and get a free 3D proof.",
  keywords: [
    "3D stickers",
    "bulk sticker printing",
    "logo stickers",
    "custom stickers",
    "varnish stickers",
    "brand stickers",
    "VarnishRoll",
  ],
  authors: [{ name: "VarnishRoll" }],
  creator: "VarnishRoll",
  publisher: "VarnishRoll",
  metadataBase: new URL("https://varnishroll.com"),
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
    locale: "en_US",
    url: "https://varnishroll.com",
    siteName: "VarnishRoll",
    title: "VarnishRoll — Thick, Shiny 3D Stickers for Your Brand",
    description: "Beautiful 3D logo stickers with fast 4-day shipping. Upload your art and get a free 3D proof.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VarnishRoll",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VarnishRoll — Thick, Shiny 3D Stickers for Your Brand",
    description: "Beautiful 3D logo stickers with fast 4-day shipping.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="bg-[#09090b] text-white">
        {children}
      </body>
    </html>
  );
}
