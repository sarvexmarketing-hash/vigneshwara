"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { Phone, Sparkles } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-brand-forest text-brand-offwhite text-xs sm:text-sm py-2 px-4 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
          <span className="font-medium tracking-wide truncate">
            {siteConfig.announcement}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs flex-shrink-0 text-white/90">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors font-medium"
          >
            <Phone className="w-3 h-3 text-brand-yellow" />
            <span>{siteConfig.displayPhone}</span>
          </a>
          <span className="text-white/30">•</span>
          <span className="text-white/80">Andhra Pradesh</span>
        </div>
      </div>
    </div>
  );
};
