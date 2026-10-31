"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trendingCategoryTiles } from "@/data/products";
import { Sparkles, ArrowRight, CheckCircle2, ChevronDown, GlassWater, Flame } from "lucide-react";

interface TrendingCategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
  selectedCategory?: string;
}

export const TrendingCategories: React.FC<TrendingCategoriesProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  // Primary active category: "cool-drinks" or "water-bottles"
  const [activeCategory, setActiveCategory] = useState<"cool-drinks" | "water-bottles">("cool-drinks");

  // Filter brands belonging to the selected category
  const activeBrands = trendingCategoryTiles.filter((tile) => tile.id === activeCategory);

  const handleCategoryPress = (catId: "cool-drinks" | "water-bottles") => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <section id="categories" className="px-3 sm:px-4 py-3 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
            <span>Trending Categories</span>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
              Wholesale
            </span>
          </h2>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Select <strong>Cold Drinks</strong> or <strong>Water</strong> to view brand crates & cases
          </p>
        </div>
        <span className="text-[11px] text-gray-400 font-semibold hidden sm:inline">
          Tap category to view brands
        </span>
      </div>

      {/* --- ONLY 2 MAIN CATEGORIES (Cold Drinks & Water) --- */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4">
        {/* 1. COLD DRINKS CATEGORY CARD */}
        <button
          type="button"
          onClick={() => handleCategoryPress("cool-drinks")}
          className={`text-left p-3 sm:p-4 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden group cursor-pointer ${
            activeCategory === "cool-drinks"
              ? "bg-gradient-to-br from-red-500/10 via-amber-500/5 to-white border-red-600 shadow-md ring-2 ring-red-500/20"
              : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-red-600 bg-red-100/80 px-2 py-0.5 rounded-full mb-1">
                <Flame className="w-3 h-3" />
                <span>8 Leading Brands</span>
              </div>
              <h3 className="text-base sm:text-xl font-black text-gray-950 tracking-tight leading-tight">
                Cold Drinks
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600 line-clamp-1 mt-0.5">
                Thums Up, Sprite, Coke, Dew, Maaza & Fanta
              </p>
            </div>

            {/* Packshot Image Preview */}
            <div className="relative w-14 h-16 sm:w-20 sm:h-22 rounded-xl bg-white/90 p-1 flex-shrink-0 flex items-center justify-center border border-gray-200/70 shadow-2xs group-hover:scale-105 transition-transform">
              <Image
                src="/images/products/user_thumsup_bottle.jpg"
                alt="Cold Drinks"
                fill
                sizes="80px"
                className="object-contain p-0.5"
              />
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-gray-200/70 flex items-center justify-between text-[11px] font-bold">
            <span className={activeCategory === "cool-drinks" ? "text-red-600" : "text-gray-500"}>
              {activeCategory === "cool-drinks" ? "✓ Viewing Brands Below" : "Tap to View Brands"}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeCategory === "cool-drinks" ? "rotate-180 text-red-600" : "text-gray-400"
              }`}
            />
          </div>
        </button>

        {/* 2. WATER CATEGORY CARD */}
        <button
          type="button"
          onClick={() => handleCategoryPress("water-bottles")}
          className={`text-left p-3 sm:p-4 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden group cursor-pointer ${
            activeCategory === "water-bottles"
              ? "bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-white border-blue-600 shadow-md ring-2 ring-blue-500/20"
              : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full mb-1">
                <GlassWater className="w-3 h-3" />
                <span>4 Pure Brands</span>
              </div>
              <h3 className="text-base sm:text-xl font-black text-gray-950 tracking-tight leading-tight">
                Water
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600 line-clamp-1 mt-0.5">
                Bisleri, Kinley, Aquafina & Bailley
              </p>
            </div>

            {/* Packshot Image Preview */}
            <div className="relative w-14 h-16 sm:w-20 sm:h-22 rounded-xl bg-white/90 p-1 flex-shrink-0 flex items-center justify-center border border-gray-200/70 shadow-2xs group-hover:scale-105 transition-transform">
              <Image
                src="/images/products/user_bisleri_bottle.jpg"
                alt="Packaged Water"
                fill
                sizes="80px"
                className="object-contain p-0.5"
              />
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-gray-200/70 flex items-center justify-between text-[11px] font-bold">
            <span className={activeCategory === "water-bottles" ? "text-blue-600" : "text-gray-500"}>
              {activeCategory === "water-bottles" ? "✓ Viewing Brands Below" : "Tap to View Brands"}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeCategory === "water-bottles" ? "rotate-180 text-blue-600" : "text-gray-400"
              }`}
            />
          </div>
        </button>
      </div>

      {/* --- EXPANDED BRAND GRID (Revealed when a category is pressed) --- */}
      <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-3 sm:p-4">
        {/* Brand Subsection Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                activeCategory === "cool-drinks" ? "bg-red-600" : "bg-blue-600"
              }`}
            />
            <span className="text-xs sm:text-sm font-black text-gray-900 tracking-tight">
              {activeCategory === "cool-drinks" ? "Cold Drink Brands" : "Water Bottle Brands"}{" "}
              <span className="text-gray-500 font-semibold">({activeBrands.length} Brands)</span>
            </span>
          </div>

          <Link
            href={`/category/${activeCategory}`}
            className="text-[11px] sm:text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1"
          >
            <span>View All {activeCategory === "cool-drinks" ? "Cold Drinks" : "Water"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Brands Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {activeBrands.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`cursor-pointer group flex flex-col items-center justify-between p-2.5 rounded-xl border transition-all duration-200 bg-white hover:shadow-md text-center ${
                  isSelected
                    ? "border-red-600 ring-2 ring-red-500/20 shadow-xs"
                    : "border-gray-200/90 hover:border-gray-400"
                }`}
              >
                {/* Packshot Image Container */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white mb-2 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-200 border border-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="140px"
                    className="object-contain p-1"
                  />
                </div>

                {/* Brand Name & Badge */}
                <div className="w-full">
                  <span className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-red-600 transition-colors leading-tight line-clamp-1 block">
                    {cat.title}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 line-clamp-1 block mt-0.5">
                    {cat.badge}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
