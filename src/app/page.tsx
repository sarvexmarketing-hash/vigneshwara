"use client";

import React, { useState } from "react";
import { MoglixHeader } from "@/components/MoglixHeader";
import { PromoHeroBanner } from "@/components/PromoHeroBanner";
import { TrendingCategories } from "@/components/TrendingCategories";
import { WholesalePartnerBanner } from "@/components/WholesalePartnerBanner";
import { CategoryStores } from "@/components/CategoryStores";
import { DeliveryNoticeBar } from "@/components/DeliveryNoticeBar";
import { ProductCatalog } from "@/components/ProductCatalog";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MoglixBottomNav } from "@/components/MoglixBottomNav";
import { FloatingAdBanner } from "@/components/FloatingAdBanner";
import { QuoteCartDrawer } from "@/components/QuoteCartDrawer";
import { LocationModal } from "@/components/LocationModal";
import { CartProvider } from "@/context/CartContext";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [locationModalOpen, setLocationModalOpen] = useState<boolean>(false);

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white pb-20 text-gray-900 font-sans">
        
        {/* --- MOGLIX-STYLE APP HEADER (Menu, Logo, Login, Location Bar, Search) --- */}
        <MoglixHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenLocation={() => setLocationModalOpen(true)}
        />

        <main className="flex-grow">
          {/* --- HERO PROMOTIONAL BANNER (Like KEI Wires banner with discount starburst) --- */}
          <PromoHeroBanner />

          {/* --- TRENDING CATEGORIES (Exact 3-col mobile / 6-col desktop rounded tiles) --- */}
          <TrendingCategories
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              const el = document.getElementById("products");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            selectedCategory={selectedCategory}
          />

          {/* --- B2B TRADE PARTNER BANNER (Like Credlix Supply Chain Partner in screenshot) --- */}
          <WholesalePartnerBanner />

          {/* --- CATEGORY STORES WITH "VIEW ALL CATEGORIES" BOX --- */}
          <CategoryStores
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              const el = document.getElementById("products");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* --- 24 HRS DELIVERY NOTICE BAR WITH "UPDATE" BUTTON --- */}
          <DeliveryNoticeBar onOpenLocation={() => setLocationModalOpen(true)} />

          {/* --- MAIN PRODUCT CATALOG WITH LIVE SEARCH & FILTERING --- */}
          <ProductCatalog
            initialCategory={selectedCategory}
            externalSearch={searchQuery}
          />

          {/* --- ABOUT COMPANY PROFILE --- */}
          <AboutSection />

          {/* --- CONTACT & WHOLESALE ORDER FORM WITH MAP --- */}
          <ContactSection />
        </main>

        {/* --- FOOTER --- */}
        <Footer />

        {/* --- FLOATING DEAL BANNER (above bottom nav matching Moglix ad bar) --- */}
        <FloatingAdBanner />

        {/* --- STICKY APP BOTTOM NAVIGATION (Login, 24h Delivery, Center Search, Orders, My Cart) --- */}
        <MoglixBottomNav
          onOpenSearch={scrollToSearch}
          onOpenDelivery={() => setLocationModalOpen(true)}
        />

        {/* --- QUOTE CART DRAWER --- */}
        <QuoteCartDrawer />

        {/* --- LOCATION SELECTION MODAL --- */}
        <LocationModal
          isOpen={locationModalOpen}
          onClose={() => setLocationModalOpen(false)}
        />

      </div>
    </CartProvider>
  );
}
