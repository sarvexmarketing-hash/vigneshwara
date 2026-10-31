"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";

export const PromoHeroBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "SRI VIGNESHWARA AGENCIES",
      tagline: "PROP: CHOPPARI HARISH • 9676373388",
      headline: "ALL COOL DRINKS & WATER BOTTLES",
      highlight: "Thums Up, Sprite, Coke, Mountain Dew, Maaza, Bisleri, Kinley, Aquafina & Bailley",
      discount: "UPTO 35% OFF",
      discountSub: "WHOLESALE",
      bgGradient: "from-[#032e22] via-[#064e3b] to-[#047857]",
      accentColor: "bg-red-600",
      image: "/images/banner.jpg",
    },
    {
      id: 2,
      badge: "AUTHENTIC BANNER BRANDS",
      tagline: "THUMS UP, SPRITE, COKE & DEW",
      headline: "POPULAR COOL DRINKS WHOLESALE",
      highlight: "Direct Wholesale Supply for Retail Counters, Caterers & Event Organizers",
      discount: "BEST RATE",
      discountSub: "PER CRATE",
      bgGradient: "from-[#1e1b4b] via-[#312e81] to-[#4338ca]",
      accentColor: "bg-amber-500",
      image: "/images/products/user_thumsup_bottle.jpg",
    },
    {
      id: 3,
      badge: "PACKAGED DRINKING WATER",
      tagline: "BISLERI, KINLEY & AQUAFINA",
      headline: "PURE DRINKING WATER BOTTLES",
      highlight: "Special Box Rates on 1L, 500ml & 250ml Mini Bottled Water Cases",
      discount: "FLAT ₹195",
      discountSub: "PER BOX OF 12",
      bgGradient: "from-[#082f49] via-[#0369a1] to-[#0284c7]",
      accentColor: "bg-emerald-500",
      image: "/images/products/user_bisleri_bottle.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  return (
    <div id="home" className="px-3 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto">
      {/* Moglix-Style Promotional Banner Card */}
      <div
        className={`relative w-full rounded-2xl overflow-hidden shadow-md text-white bg-gradient-to-r ${slide.bgGradient} transition-all duration-500 min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex items-center border border-white/10`}
      >
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 w-full p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text Block */}
          <div className="w-full md:w-3/5 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[10px] sm:text-xs font-bold tracking-wider uppercase text-emerald-200 border border-white/20">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {slide.badge}
            </div>

            <div className="space-y-0.5">
              <p className="text-[11px] sm:text-xs font-semibold text-emerald-100/90 tracking-wide uppercase">
                {slide.tagline}
              </p>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {slide.headline}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-white/80 font-medium line-clamp-2 max-w-lg">
              {slide.highlight}
            </p>

            {/* Quick Feature Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold text-white/90">
              <span className="inline-flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded-md">
                <Truck className="w-3 h-3 text-amber-400" /> Daily Dispatch
              </span>
              <span className="inline-flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> All Banner Brands
              </span>
            </div>
          </div>

          {/* Right Visual & Discount Starburst */}
          <div className="w-full md:w-2/5 flex items-center justify-center relative mt-2 md:mt-0">
            {/* Discount Starburst Badge matching Moglix UPTO 55% OFF */}
            <div className="absolute -top-3 left-4 sm:left-8 z-20">
              <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white font-black rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg border-2 border-white transform -rotate-12 hover:scale-105 transition-transform">
                <span className="text-[9px] sm:text-[11px] uppercase tracking-tighter leading-none">
                  UPTO
                </span>
                <span className="text-sm sm:text-lg font-black leading-tight text-yellow-300">
                  35% OFF
                </span>
                <span className="text-[7px] sm:text-[8px] font-bold tracking-tighter leading-none text-white/90">
                  ON CRATES
                </span>
              </div>
            </div>

            {/* Product Image Stage */}
            <div className="relative w-48 h-32 sm:w-64 sm:h-44 md:w-72 md:h-52 rounded-xl overflow-hidden bg-white/10 backdrop-blur-xs border border-white/20 p-2 shadow-inner">
              <Image
                src={slide.image}
                alt="Sri Vigneshwara Wholesale Cool Drinks"
                fill
                priority
                sizes="(max-width: 768px) 250px, 350px"
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Moglix-Style Slide Pagination Dots */}
        <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-20">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-2 ${
                idx === activeSlide ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
