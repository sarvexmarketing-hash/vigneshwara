"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export const TeluguBanner: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to inquire about wholesale beverage and packaged drinking water pricing for my business. Please share details.`
  );

  return (
    <section className="bg-brand-forest text-white py-8 px-4 sm:px-6 lg:px-8 border-y border-brand-emerald/40 relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-emerald/20 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* English Message & Supporting Text */}
        <div className="text-left space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Wholesale Beverage & Drinking Water Distribution</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Contact us for quality beverages and drinking water supplies for your business.
          </h2>
          <p className="text-sm sm:text-base text-brand-offwhite/90 leading-relaxed">
            Inquire for wholesale pricing, live batch availability, crate minimums, and delivery schedules across Visakhapatnam.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-brand-yellow" />
            <span>{siteConfig.displayPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
