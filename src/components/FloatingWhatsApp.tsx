"use client";

import React, { useState, useEffect } from "react";
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mb-2.5 max-w-[240px] bg-white text-brand-forest p-3 rounded-2xl shadow-xl border border-brand-border text-xs relative animate-fadeIn flex items-start gap-2">
          <p className="leading-snug">
            <span className="font-bold block text-brand-emerald">
              Need Wholesale Rates?
            </span>
            Chat directly with our team on WhatsApp.
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-brand-charcoal/40 hover:text-brand-charcoal flex-shrink-0"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-brand-border transform rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
