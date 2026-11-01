"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from "@/lib/whatsapp";
import {
  MessageCircle,
  ArrowDown,
  PhoneCall,
  Truck,
  PackageCheck,
  Store,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage());

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-offwhite via-white to-brand-subtle/30 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border/40"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>Trusted Beverage & Water Distribution</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15] mb-5">
              <span>Everyday Refreshment.</span>{" "}
              <span className="text-brand-emerald block sm:inline">
                Reliable Supply.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl mb-8 leading-relaxed font-normal">
              Discover soft drinks, packaged drinking water, and beverages for your shop or business. Contact {siteConfig.name} for product availability and wholesale enquiries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-subtle text-brand-forest border-2 border-brand-emerald/30 hover:border-brand-emerald text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4 text-brand-emerald" />
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-brand-border shadow-subtle w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-brand-charcoal/60 font-semibold">
                  Quick Orders & Enquiries
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-base sm:text-lg font-bold text-brand-forest hover:text-brand-emerald transition-colors"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>
            </div>

            {/* Audience Badges */}
            <div className="mt-8 pt-6 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 font-medium">
                <Store className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>For Retail & Supermarkets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 font-medium">
                <PackageCheck className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Hotels, Restaurants & Catering</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 font-medium">
                <Truck className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Events & Function Orders</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Commercial Beverage Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-emerald to-brand-yellow rounded-3xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-100" />

              {/* Main Editorial Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden border border-brand-border shadow-card p-3 sm:p-4">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-surface">
                  <Image
                    src="/images/products/drinks_montage.jpg"
                    alt="Assorted chilled beverage bottles and packaged drinking water with fresh condensation"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-transparent to-transparent" />

                  {/* Floating Micro Badge - Available Brands */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/60">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-brand-emerald">
                      Core Brands Handled
                    </p>
                    <p className="text-xs font-semibold text-brand-forest">
                      Thums Up • Sprite • Kinley • Bisleri
                    </p>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/60">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-emerald bg-brand-subtle px-2 py-0.5 rounded-md">
                          Wholesale Supply
                        </span>
                        <h3 className="text-sm font-bold text-brand-forest mt-1">
                          Crates, Cases & Bottled Packs
                        </h3>
                        <p className="text-[11px] text-brand-charcoal/70">
                          Fresh stock delivered to your commercial doorstep.
                        </p>
                      </div>
                      <a
                        href="#products"
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-emerald text-white flex items-center justify-center hover:bg-brand-forest transition-colors shadow-sm"
                        aria-label="View beverage catalog"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lower Highlight Pills */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="bg-brand-subtle/50 py-2 px-3 rounded-xl border border-brand-emerald/10">
                    <span className="block text-xs font-bold text-brand-emerald">
                      Direct Wholesale
                    </span>
                    <span className="text-[11px] text-brand-charcoal/70">
                      Standard crate packings
                    </span>
                  </div>
                  <div className="bg-brand-subtle/50 py-2 px-3 rounded-xl border border-brand-emerald/10">
                    <span className="block text-xs font-bold text-brand-emerald">
                      Verified AP Location
                    </span>
                    <span className="text-[11px] text-brand-charcoal/70">
                      Warangal, Telangana
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
