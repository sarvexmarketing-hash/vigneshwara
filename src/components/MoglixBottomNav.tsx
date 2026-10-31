"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  User,
  Truck,
  Search,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";

interface MoglixBottomNavProps {
  onOpenSearch: () => void;
  onOpenDelivery: () => void;
}

export const MoglixBottomNav: React.FC<MoglixBottomNavProps> = ({
  onOpenSearch,
  onOpenDelivery,
}) => {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl py-1.5 px-2">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center text-center">
        
        {/* 1. Login / Admin */}
        <Link
          href="/admin"
          className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600 focus:outline-none"
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium leading-none">Login</span>
        </Link>

        {/* 2. 24hrs Delivery */}
        <button
          onClick={onOpenDelivery}
          className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600 focus:outline-none"
        >
          <div className="relative">
            <Truck className="w-5 h-5 mb-0.5" />
            <span className="absolute -top-1 -right-1 text-[8px] font-bold text-red-600 bg-red-100 rounded-full px-0.5">
              24h
            </span>
          </div>
          <span className="text-[10px] font-medium leading-none">24h Delivery</span>
        </button>

        {/* 3. Center Prominent Search Button with Circular Ring */}
        <div className="relative flex justify-center items-center -top-3">
          <button
            onClick={onOpenSearch}
            className="w-12 h-12 rounded-full bg-white text-gray-800 shadow-xl border-2 border-gray-100 flex items-center justify-center hover:scale-105 active:scale-95 transition-all ring-4 ring-gray-100"
            aria-label="Search Catalog"
          >
            <Search className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* 4. Enquiries / Orders */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center text-gray-600 hover:text-red-600 focus:outline-none"
        >
          <ClipboardList className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium leading-none">Orders</span>
        </a>

        {/* 5. Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center text-gray-600 hover:text-red-600 focus:outline-none"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 mb-0.5" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium leading-none">My Cart</span>
        </button>

      </div>
    </div>
  );
};

