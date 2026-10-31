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
  title: `${siteConfig.name} — Wholesale Beverage & Packaged Drinking Water Distribution`,
  description:
    `Official website for ${siteConfig.name}, Visakhapatnam, Andhra Pradesh. Wholesale distributor of soft drinks, packaged drinking water (Kinley, Bisleri), fruit juices, and soda for retail shops, restaurants, and catering.`,
  keywords: [
    siteConfig.name,
    "Vigneshwara Agencies",
    "Beverage Distribution Visakhapatnam",
    "Drinking water wholesale Andhra Pradesh",
    "Thums Up wholesale distributor",
    "Bisleri water bottles supply",
    "Soft drinks supplier Madhavadhara",
    "Beverage wholesale Andhra Pradesh",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://sri-vigneshwara-agencies.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — Wholesale Beverage Distribution`,
    description:
      "Reliable wholesale supply of soft drinks, packaged drinking water, and beverages in Visakhapatnam, Andhra Pradesh.",
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
