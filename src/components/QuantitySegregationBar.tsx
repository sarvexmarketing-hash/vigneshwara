"use client";

import React from "react";
import { quantityTiers, QuantityTier } from "@/data/products";
import { Layers, Sparkles, CheckCircle2 } from "lucide-react";

interface QuantitySegregationBarProps {
  selectedQuantity: string;
  onSelectQuantity: (tierId: string) => void;
  productCounts?: Record<string, number>;
}

export const QuantitySegregationBar: React.FC<QuantitySegregationBarProps> = ({
  selectedQuantity,
  onSelectQuantity,
  productCounts = {},
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-red-50/70 via-amber-50/50 to-emerald-50/70 rounded-2xl p-3 sm:p-4 border border-red-100 shadow-2xs mb-4">
      {/* Title & Segregation Tagline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 tracking-tight flex items-center gap-1.5">
              <span>Quantity Segregation</span>
              <span className="text-[10px] font-bold text-red-600 bg-red-100/80 px-1.5 py-0.5 rounded-full">
                Bottle Volumes
              </span>
              <span className="text-[10px] font-black text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded-full">
                Min. 5 Crates MOQ
              </span>
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-600">
              Filter wholesale supplies by volume: 250ml, 1 Liter & 3 Liters • Minimum 5 crates per order
            </p>
          </div>
        </div>

        {selectedQuantity !== "all" && (
          <button
            onClick={() => onSelectQuantity("all")}
            className="self-start sm:self-auto text-[11px] font-bold text-red-600 hover:text-red-700 underline"
          >
            Show All Sizes
          </button>
        )}
      </div>

      {/* 4 Interactive Segregation Buttons (All + 1) 250ml + 2) 1 Liter + 3) 3 Liters) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {quantityTiers.map((tier) => {
          const isSelected = selectedQuantity === tier.id;
          const count = productCounts[tier.id];

          return (
            <button
              key={tier.id}
              onClick={() => onSelectQuantity(tier.id)}
              className={`text-left p-2.5 rounded-xl border transition-all duration-150 flex flex-col justify-between relative group ${
                isSelected
                  ? "bg-white border-red-600 shadow-sm ring-2 ring-red-500/20"
                  : "bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`text-xs font-black tracking-tight ${
                    isSelected ? "text-red-600" : "text-gray-900 group-hover:text-red-600"
                  }`}
                >
                  {tier.numberPrefix !== "All" && (
                    <span className="text-red-600 mr-1">{tier.numberPrefix}</span>
                  )}
                  {tier.label}
                </span>

                {isSelected ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                ) : (
                  typeof count === "number" && (
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.2 rounded-md">
                      {count}
                    </span>
                  )
                )}
              </div>

              <span className="text-[10px] font-semibold text-gray-700 block truncate">
                {tier.tagline}
              </span>

              <span className="text-[9px] text-gray-500 block truncate mt-0.5">
                {tier.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

