"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { CheckCircle2, ShieldAlert, FileText, ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  const points = [
    "Direct wholesale procurement assistance",
    "Assorted pack sizes: cans, PET bottles, and bulk cases",
    "Responsive trade communication via phone and WhatsApp",
    "Transparent price quotations tailored to order volume",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-card bg-brand-surface p-3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/drinks_montage.jpg"
                  alt="Packaged Drinking Water and Bottled Soft Drinks Supply"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-emerald">
                    Distribution Location
                  </p>
                  <p className="text-sm font-bold text-brand-forest">
                    {siteConfig.address.city}, {siteConfig.address.state}
                  </p>
                  <p className="text-xs text-brand-charcoal/70">
                    Plus Code: {siteConfig.address.plusCode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Objective */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>About {siteConfig.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight leading-tight mb-6">
              Serving Businesses with Cool Drinks & Water Bottles Solutions
            </h2>

            <p className="text-base text-brand-charcoal/80 leading-relaxed mb-4">
              {siteConfig.name} is a dedicated wholesale business based in Visakhapatnam, Andhra Pradesh. We cater to grocery stores, supermarkets, restaurants, hotels, caterers, and event organizers who require steady access to cool drinks, carbonated soft drinks, and packaged drinking water bottles.
            </p>

            <p className="text-base text-brand-charcoal/80 leading-relaxed mb-6">
              Our objective is straightforward: simplify beverage procurement for local merchants. Instead of coordinating with multiple fragmented suppliers, our clients benefit from one direct line of communication for price enquiries, product availability, and bulk orders.
            </p>

            {/* Verified Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Verified Information Disclaimer Note */}
            <div className="p-4 bg-brand-surface rounded-xl border border-brand-border text-xs text-brand-charcoal/70 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-brand-charcoal/50 flex-shrink-0 mt-0.5" />
              <span>
                Note: We operate as an independent beverage distribution business. All brand trademarks remain the intellectual property of their respective manufacturers.
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-emerald hover:bg-brand-forest text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-sm transition-all"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-bold text-brand-forest hover:text-brand-emerald transition-colors"
              >
                {siteConfig.displayPhone}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
