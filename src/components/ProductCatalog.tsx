"use client";

import React, { useState, useMemo } from "react";
import { productsData, productCategories, matchesQuantityTier, quantityTiers } from "@/data/products";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductDetailModal } from "./ProductDetailModal";
import { QuantitySegregationBar } from "./QuantitySegregationBar";
import { Search, X, Filter, RefreshCw, Sparkles, Layers } from "lucide-react";

interface ProductCatalogProps {
  initialCategory?: string;
  externalSearch?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  initialCategory = "all",
  externalSearch = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedQuantity, setSelectedQuantity] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const brands = useMemo(() => {
    const list = Array.from(new Set(productsData.map((p) => p.brand)));
    list.sort();
    return ["all", ...list];
  }, []);

  const quantityCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: productsData.length,
      "250ml": 0,
      "1liter": 0,
      "3liters": 0,
    };
    productsData.forEach((p) => {
      if (matchesQuantityTier(p, "250ml")) counts["250ml"] = (counts["250ml"] || 0) + 1;
      if (matchesQuantityTier(p, "1liter")) counts["1liter"] = (counts["1liter"] || 0) + 1;
      if (matchesQuantityTier(p, "3liters")) counts["3liters"] = (counts["3liters"] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== "all" && p.brand !== selectedBrand) {
        return false;
      }
      if (selectedQuantity !== "all" && !matchesQuantityTier(p, selectedQuantity)) {
        return false;
      }
      if (externalSearch.trim() !== "") {
        const query = externalSearch.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesSizes = p.packageSizes.some((s) => s.toLowerCase().includes(query));
        const matchesDesc = p.description.toLowerCase().includes(query);
        return matchesName || matchesBrand || matchesSizes || matchesDesc;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, selectedQuantity, externalSearch]);

  const activeQuantityInfo = useMemo(() => {
    return quantityTiers.find((q) => q.id === selectedQuantity);
  }, [selectedQuantity]);

  const categoryTabs = productCategories;

  return (
    <section id="products" className="px-3 sm:px-4 py-4 max-w-7xl mx-auto">
      {/* --- 1. QUANTITY SEGREGATION BAR (250 ml, 1 liter, 3 liters) --- */}
      <QuantitySegregationBar
        selectedQuantity={selectedQuantity}
        onSelectQuantity={setSelectedQuantity}
        productCounts={quantityCounts}
      />

      {/* --- 2. CATEGORY PILLS & BRAND FILTER HEADER --- */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
        {/* Horizontal Scroll Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar flex-1">
          {categoryTabs.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-red-600 text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Brand Dropdown */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="relative">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="pl-3 pr-7 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-800 appearance-none cursor-pointer focus:outline-none focus:border-red-500"
            >
              <option value="all">All Brands</option>
              {brands.filter((b) => b !== "all").map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Results Count & Quick Reset */}
      <div className="flex items-center justify-between text-xs text-gray-600 pb-3 mb-2 border-b border-gray-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium">
            Showing <strong className="text-gray-900">{filteredProducts.length}</strong> wholesale products
            {externalSearch && ` for "${externalSearch}"`}
          </span>

          {selectedQuantity !== "all" && activeQuantityInfo && (
            <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full text-[10px] border border-red-200">
              <Layers className="w-2.5 h-2.5" />
              {activeQuantityInfo.numberPrefix} {activeQuantityInfo.label}
            </span>
          )}
        </div>

        {(selectedCategory !== "all" || selectedBrand !== "all" || selectedQuantity !== "all" || externalSearch) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBrand("all");
              setSelectedQuantity("all");
            }}
            className="text-red-600 hover:underline font-semibold flex items-center gap-1 flex-shrink-0"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Grid of Products (2 columns on mobile, 4 on desktop) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-4">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onViewDetails={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300 max-w-md mx-auto my-6 p-6">
          <p className="text-sm font-bold text-gray-700">No products found</p>
          <p className="text-xs text-gray-500 mt-1">
            No products match this quantity tier. Try selecting a different size or reset your filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBrand("all");
              setSelectedQuantity("all");
            }}
            className="mt-4 bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg"
          >
            View All Products
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
