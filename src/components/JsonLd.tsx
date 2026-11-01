import React from "react";
import { siteConfig } from "@/data/config";

export const JsonLd: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": siteConfig.name,
    "description": "Wholesale cool drinks, packaged drinking water, and beverage distribution in Chennaraopet, Warangal District, Telangana.",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.line1,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.pincode,
      "addressCountry": "IN",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:30",
      },
    ],
    "priceRange": "Wholesale (Price on Request)",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
