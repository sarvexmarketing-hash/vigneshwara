"use client";

import React from "react";
import {
  Boxes,
  BadgePercent,
  PhoneCall,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: "Multiple Beverage Categories",
      desc: "Soft drinks, packaged drinking water, fruit juices, and soda mixers all consolidated through a single local distribution point.",
    },
    {
      title: "Wholesale Enquiries",
      desc: "Competitive bulk rates and clear trade discussions for retail shops, caterers, supermarkets, and hospitality businesses.",
    },
    {
      title: "Convenient Communication",
      desc: "Direct phone and WhatsApp ordering without complex portals. Get rapid answers to stock and delivery questions.",
    },
    {
      title: "Local Business Support",
      desc: "Focused on Warangal and Telangana businesses with dedicated attention to regular delivery schedules and event orders.",
    },
  ];

  const icons = [
    <Boxes key="boxes" className="w-6 h-6 text-brand-emerald" />,
    <BadgePercent key="badge" className="w-6 h-6 text-brand-emerald" />,
    <PhoneCall key="phone" className="w-6 h-6 text-brand-emerald" />,
    <MapPin key="map" className="w-6 h-6 text-brand-emerald" />,
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-surface border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
            Your Beverage Supply Partner
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal/70">
            Dependable distribution backed by direct communication and local support.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center mb-5">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-bold text-brand-forest mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center gap-2 text-xs font-semibold text-brand-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                <span>Reliable Wholesale Supply</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
