"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { useCart } from "@/context/CartContext";
import {
  Menu,
  X,
  MapPin,
  ChevronRight,
  Search,
  Mic,
  ShoppingCart,
  Tag,
  CircleDollarSign,
  Phone,
  MessageCircle,
  Truck,
  CheckCircle,
} from "lucide-react";

interface MoglixHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenLocation: () => void;
}

export const MoglixHeader: React.FC<MoglixHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenLocation,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      {/* --- ROW 1: Top Navigation (Hamburger, Logo, Login, Icons) --- */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        {/* Left: Menu & Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 text-gray-700 hover:text-red-600 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link href="#home" className="flex items-center flex-shrink-0">
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

        {/* Right: Login & Quick Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/admin"
            className="px-3 py-1 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-md uppercase tracking-wider transition-colors border border-red-200"
          >
            LOGIN
          </Link>

          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden sm:flex text-amber-500 hover:text-amber-600 p-1"
            title="Call for Bulk Rates"
          >
            <CircleDollarSign className="w-5 h-5 text-amber-500" />
          </a>

          <a
            href="#wholesale"
            className="text-green-600 hover:text-green-700 p-1 hidden sm:flex"
            title="Wholesale Deals"
          >
            <Tag className="w-5 h-5 text-red-500" />
          </a>

          {/* Cart Icon with Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-1.5 text-gray-800 hover:text-red-600 focus:outline-none"
            aria-label="View Wholesale Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* --- ROW 2: Location Row (Red pin, address, chevron) --- */}
      <div className="bg-gray-50 border-t border-b border-gray-100 px-3 sm:px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onOpenLocation}
            className="flex items-center gap-1.5 text-gray-700 hover:text-red-600 text-left truncate flex-1 focus:outline-none"
          >
            <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span className="truncate font-medium text-[11px] sm:text-xs">
              {siteConfig.address.plusCode}, {siteConfig.address.fullAddress}
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </button>

          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            <Truck className="w-3 h-3 text-emerald-600" />
            <span>24h Wholesale Dispatch</span>
          </span>
        </div>
      </div>

      {/* --- ROW 3: Large Prominent Search Bar (Red lens, rounded, mic) --- */}
      <div className="px-3 sm:px-4 py-2 sm:py-2.5 max-w-7xl mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-5 h-5 text-red-600 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Product/Category/Brand..."
            className="w-full pl-11 pr-10 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-inner"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                alert("Voice search is active. Please type or select your beverage category.");
              }}
              className="absolute right-3.5 text-blue-600 hover:text-blue-700 focus:outline-none"
              title="Voice Search"
            >
              <Mic className="w-4 h-4 text-blue-600" />
            </button>
          )}
        </div>
      </div>

      {/* --- MOBILE HAMBURGER DRAWER --- */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="bg-white w-[82%] max-w-xs h-full shadow-2xl p-5 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="relative h-16 w-56">
                  <Image
                    src="/images/logo.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-1">
                <a
                  href="#home"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  Home
                </a>
                <a
                  href="#categories"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  Trending Categories
                </a>
                <a
                  href="#products"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  All Products
                </a>
                <a
                  href="#wholesale"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  Wholesale Enquiry
                </a>
                <a
                  href="#about"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600"
                >
                  Contact & Map
                </a>
                <Link
                  href="/admin"
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-bold text-red-600 bg-red-50 mt-2"
                >
                  Admin / Staff Portal
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.displayPhone}</span>
              </a>
              <p className="text-[10px] text-center text-gray-500">
                Official Beverage Wholesale Distributor Chennaraopet, Warangal
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

