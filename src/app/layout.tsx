import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { JsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#075B40",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — Wholesale Cool Drinks & Packaged Water Distribution, Warangal`,
  description:
    `Official website for ${siteConfig.name}, Chennaraopet, Warangal, Telangana. Wholesale distributor of cool drinks (Thums Up, Sprite, Coke, Mountain Dew, Maaza) and packaged drinking water (Bisleri, Kinley, Aquafina, Bailley) for retail shops, restaurants, and catering.`,
  keywords: [
    siteConfig.name,
    "Sri Vigneshwara Agencies Warangal",
    "Cool Drinks Wholesale Warangal",
    "Drinking water wholesale Telangana",
    "Thums Up wholesale distributor Chennaraopet",
    "Bisleri water bottles supply Warangal",
    "Soft drinks supplier Chennaraopet",
    "Beverage wholesale Telangana",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://sri-vigneshwara-agencies.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — Wholesale Cool Drinks & Water Bottles, Warangal`,
    description:
      "Reliable wholesale supply of cool drinks, packaged drinking water bottles, and beverages in Chennaraopet, Warangal, Telangana.",
    url: "https://sri-vigneshwara-agencies.vercel.app",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 600,
        alt: `${siteConfig.name} Official Logo`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white text-brand-charcoal font-sans antialiased selection:bg-brand-emerald selection:text-white">
        {children}
      </body>
    </html>
  );
}
