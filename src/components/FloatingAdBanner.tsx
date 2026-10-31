"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { config } from "@/data/config";

export const FloatingAdBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleEnquireDeal = () => {
    const text = encodeURIComponent(
      `Hello Sri Vigneshwara Agencies, I want to book the wholesale deal for Bisleri 1 Litre Water Bottles (Case of 12) at wholesale rate.`
    );
    window.open(`https://wa.me/${config.contact.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-14 left-0 right-0 z-30 px-3 py-1 pointer-events-none">
      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl overflow-hidden pointer-events-auto relative animate-fadeIn p-2 sm:p-2.5 flex items-center justify-between gap-3">
        
        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-1.5 right-1.5 z-10 w-4 h-4 bg-gray-200/80 text-gray-700 rounded-full flex items-center justify-center text-[10px] hover:bg-gray-300"
          aria-label="Close ad"
        >
          <X className="w-2.5 h-2.5" />
        </button>

        {/* Left: AD badge + Product Photo */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
            <span className="absolute top-0 left-0 bg-gray-500 text-white text-[8px] font-bold px-1 rounded-br z-10">
              AD
            </span>
            <Image
              src="/images/products/user_bisleri_bottle.jpg"
              alt="Bisleri 1L Water Bottles Deal"
              fill
              sizes="48px"
              className="object-contain p-0.5"
            />
          </div>

          {/* Center Info */}
          <div className="min-w-0 pr-1">
            <p className="text-[11px] font-bold text-gray-900 truncate leading-snug">
              Bisleri 1L Water Bottles (Case of 12)
            </p>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-sm font-black text-gray-950">₹195</span>
              <span className="text-[10px] text-gray-400 line-through">MRP ₹240</span>
              <span className="text-[10px] font-extrabold text-emerald-600">19% OFF</span>
            </div>
          </div>
        </div>

        {/* Right: Moglix-Style VIEW Button */}
        <button
          onClick={handleEnquireDeal}
          className="px-3 py-1.5 border border-red-600 text-red-600 hover:bg-red-50 text-xs font-extrabold rounded-lg tracking-wider uppercase transition-colors flex-shrink-0 mr-4"
        >
          VIEW
        </button>

      </div>
    </div>
  );
};
