"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from "@/lib/whatsapp";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#categories", label: "Categories" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#wholesale", label: "Wholesale Enquiry" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-brand-forest text-brand-offwhite border-t border-brand-emerald/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-2xl w-fit shadow-md">
              <div className="relative h-20 w-72">
                <Image
                  src="/images/logo.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed pt-1">
              Wholesale cool drinks, packaged drinking water bottles, and beverage supply for retail stores, supermarkets, restaurants, and caterers across Chennaraopet, Warangal District, and Telangana.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-brand-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Handled */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-brand-yellow">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Soft Drinks (Cola, Lemon, Orange)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Packaged Drinking Water (Kinley, Bisleri)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Fruit Drinks & Mango Beverages
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Soda & Sparkling Mixers
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-white transition-colors">
                  Bulk Event & Function Supplies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-brand-yellow">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-brand-yellow transition-colors font-semibold"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="max-w-2xl leading-relaxed text-center sm:text-left">
            {siteConfig.name} is an independent beverage distribution enterprise. Brand logos, trademarks, and registered names belong to their respective brand owners.
          </p>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
