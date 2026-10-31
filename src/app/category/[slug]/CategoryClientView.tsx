"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { siteConfig } from "@/data/config";
import { trendingCategoryTiles, matchesQuantityTier } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { QuantitySegregationBar } from "@/components/QuantitySegregationBar";
import { QuoteCartDrawer } from "@/components/QuoteCartDrawer";
import { MoglixBottomNav } from "@/components/MoglixBottomNav";
import { LocationModal } from "@/components/LocationModal";
import { CartProvider, useCart } from "@/context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  Phone,
  MessageCircle,
  Truck,
  Sparkles,
  MapPin,
  CheckCircle2,
  Share2,
} from "lucide-react";

interface CategoryClientViewProps {
  slug: string;
  categoryData: {
    title: string;
    category: string;
    description: string;
    image: string;
    badge: string;
    products: Product[];
  };
}

function CategoryInnerView({ slug, categoryData }: CategoryClientViewProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<string>("all");
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  const displayedProducts = React.useMemo(() => {
    if (selectedQuantity === "all") return categoryData.products;
    return categoryData.products.filter((p) => matchesQuantityTier(p, selectedQuantity));
  }, [categoryData.products, selectedQuantity]);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: `${categoryData.title} Wholesale - ${siteConfig.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Sri Vigneshwara Agencies, I want to enquire about wholesale prices and bulk crate availability for ${categoryData.title}.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-24 text-gray-900 font-sans">
      {/* --- TOP STICKY HEADER WITH BACK BUTTON & LOGO --- */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2">
          {/* Back button & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <Link
              href="/"
              className="p-1.5 text-gray-700 hover:text-red-600 focus:outline-none rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Back to Homepage"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="relative h-14 sm:h-18 md:h-20 w-48 sm:w-64 md:w-72">
                <Image
                  src="/images/logo.jpg"
                  alt={siteConfig.name}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 text-gray-600 hover:text-gray-900"
              aria-label="Share Category"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-gray-800 hover:text-red-600 focus:outline-none"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Location Bar Strip */}
        <div className="bg-[#FFF8F8] border-t border-red-100 px-3 sm:px-4 py-1.5 text-xs text-gray-700 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <span className="truncate text-[11px] sm:text-xs">
              {siteConfig.address.fullAddress}
            </span>
          </div>
          <button
            onClick={() => setLocationModalOpen(true)}
            className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-2 flex-shrink-0 hover:underline"
          >
            VERIFY ROUTE
          </button>
        </div>
      </header>

      {/* --- BREADCRUMB STRIP --- */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 text-xs text-gray-500 flex items-center gap-1.5">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span>&rsaquo;</span>
        <Link href="/#categories" className="hover:text-red-600">Categories</Link>
        <span>&rsaquo;</span>
        <span className="text-gray-900 font-bold">{categoryData.title}</span>
      </div>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-2 space-y-4 flex-grow w-full">
        {/* --- DEDICATED CATEGORY HERO BANNER CARD --- */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text Block */}
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-red-200">
              <Sparkles className="w-3 h-3 text-red-600" />
              {categoryData.badge} • Official Store
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              {categoryData.title} Wholesale Supply
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
              {categoryData.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold rounded-xl transition-colors border border-gray-200"
              >
                <Phone className="w-4 h-4 text-gray-600" />
                <span>Call {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Packshot Stage */}
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl bg-gray-50 border border-gray-200 flex-shrink-0 flex items-center justify-center p-2 relative shadow-inner">
            <Image
              src={categoryData.image}
              alt={categoryData.title}
              fill
              sizes="180px"
              priority
              className="object-contain p-2"
            />
          </div>
        </div>

        {/* --- QUANTITY SEGREGATION (250 ml, 1 liter, 3 liters) --- */}
        <QuantitySegregationBar
          selectedQuantity={selectedQuantity}
          onSelectQuantity={setSelectedQuantity}
        />

        {/* --- PRODUCTS COUNT & TRUST STRIP --- */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
              Available Products ({displayedProducts.length})
            </h2>
            <p className="text-[11px] text-gray-500">
              Direct wholesale crate & box rates for retail shops, restaurants & caterers.
            </p>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Genuine Seal
          </span>
        </div>

        {/* --- PRODUCT GRID --- */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl text-center border border-gray-200 space-y-3">
            <p className="text-sm font-bold text-gray-800">
              No products found in this quantity tier for {categoryData.title}
            </p>
            <button
              onClick={() => setSelectedQuantity("all")}
              className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl"
            >
              Show All Sizes
            </button>
          </div>
        )}

        {/* --- EXPLORE OTHER POPULAR BRANDS CAROUSEL --- */}
        <div className="pt-6 border-t border-gray-200 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Explore Other Banner Brands
            </h3>
            <Link href="/#categories" className="text-xs font-bold text-red-600 hover:underline">
              View All &rarr;
            </Link>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {trendingCategoryTiles
              .filter((t) => t.slug !== slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/category/${t.slug}`}
                  className="flex-shrink-0 w-28 sm:w-32 bg-white rounded-xl border border-gray-200 p-2 text-center hover:border-red-400 hover:shadow-xs transition-all group"
                >
                  <div className="relative aspect-square w-full rounded-lg bg-gray-50 mb-1.5 overflow-hidden flex items-center justify-center p-1">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="100px"
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-gray-900 truncate block group-hover:text-red-600">
                    {t.title}
                  </span>
                  <span className="text-[9px] text-gray-400 block truncate">
                    {t.badge}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* --- STICKY BOTTOM APP NAVIGATION --- */}
      <MoglixBottomNav
        onOpenSearch={() => {
          window.location.href = "/#products";
        }}
        onOpenDelivery={() => setLocationModalOpen(true)}
      />

      {/* --- QUOTE CART DRAWER --- */}
      <QuoteCartDrawer />

      {/* --- PRODUCT DETAIL MODAL --- */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* --- LOCATION MODAL --- */}
      <LocationModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
      />
    </div>
  );
}

export default function CategoryClientView(props: CategoryClientViewProps) {
  return (
    <CartProvider>
      <CategoryInnerView {...props} />
    </CartProvider>
  );
}

