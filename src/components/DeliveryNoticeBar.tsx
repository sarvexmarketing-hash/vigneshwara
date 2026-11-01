"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface DeliveryNoticeBarProps {
  onOpenLocation: () => void;
}

export const DeliveryNoticeBar: React.FC<DeliveryNoticeBarProps> = ({ onOpenLocation }) => {
  return (
    <div className="bg-[#212529] text-white py-3 px-3 sm:px-6 my-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="space-y-0.5">
          <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Wholesale delivery available across Chennaraopet & Warangal (506332)
          </h3>
          <p className="text-[11px] text-gray-400">
            Daily priority routes for shops, restaurants & caterers.
          </p>
        </div>

        <button
          onClick={onOpenLocation}
          className="inline-flex items-center gap-1 bg-white hover:bg-gray-100 text-red-600 font-bold text-xs uppercase px-3.5 py-1.5 rounded-md shadow-xs transition-all flex-shrink-0"
        >
          <MapPin className="w-3.5 h-3.5 text-red-600 fill-current" />
          <span>UPDATE</span>
        </button>
      </div>
    </div>
  );
};
