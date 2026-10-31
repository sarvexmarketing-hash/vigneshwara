"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight, Building2 } from "lucide-react";

export const WholesaleBanner: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I am looking for beverage supplies for my business. Please share your wholesale price sheet and delivery terms.`
  );

  return (
    <section id="wholesale" className="py-16 lg:py-20 bg-brand-emerald text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-forest/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-forest/60 border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B & Commercial Distribution</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Looking for Beverage Supplies for Your Business?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
              Tell us what products you need, and contact our team to discuss availability and wholesale pricing.
            </p>

            <p className="text-xs sm:text-sm text-brand-yellow/90 font-medium">
              Serving retail stores, hotels, restaurants, caterers, and bulk event planners.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-forest hover:bg-brand-offwhite text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Request Wholesale Prices</span>
                <ArrowRight className="w-4 h-4 text-brand-emerald" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
