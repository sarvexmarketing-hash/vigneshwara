"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Truck, CheckCircle2 } from "lucide-react";
import { config } from "@/data/config";

export const WholesalePartnerBanner: React.FC = () => {
  const handleContactWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sri Vigneshwara Agencies, I would like to partner with you for wholesale beverage & drinking water supply for my business.`
    );
    window.open(`https://wa.me/${config.contact.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="px-3 sm:px-4 py-2.5 max-w-7xl mx-auto">
      <div
        onClick={handleContactWhatsApp}
        className="relative w-full rounded-2xl overflow-hidden shadow-xs border border-blue-100 bg-gradient-to-r from-[#F0F7FF] via-[#E6F0FA] to-[#E2EEFC] cursor-pointer hover:shadow-md transition-all group p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        {/* Left Side: B2B Supply Info */}
        <div className="w-full sm:w-2/3 space-y-2">
          {/* Logo Brand Tag matching Credlix style */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-blue-900 tracking-tight text-sm sm:text-base flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
              Sri Vigneshwara B2B Partner Network
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
            Your Dedicated Cool Drinks & Water Bottles Supply Partner in Visakhapatnam
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Direct wholesale prices on cool drink crates and packaged water bottle cartons. Priority dispatch for shops, restaurants & caterers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] sm:text-xs font-semibold text-blue-950">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> GST Invoicing Available
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-blue-600" /> Daily Madhavadhara Route
            </span>
          </div>
        </div>

        {/* Right Side: Image and CTA button */}
        <div className="w-full sm:w-1/3 flex items-center justify-end gap-3">
          <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden shadow-sm border border-white bg-white">
            <Image
              src="/images/products/drinks_shelf.jpg"
              alt="Wholesale Beverage Supply"
              fill
              sizes="150px"
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="bg-red-600 text-white rounded-xl p-2.5 shadow-sm group-hover:bg-red-700 transition-colors flex items-center justify-center flex-shrink-0">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
