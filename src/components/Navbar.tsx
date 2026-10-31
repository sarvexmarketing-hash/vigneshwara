"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from "@/lib/whatsapp";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#categories", label: "Categories" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#wholesale", label: "Wholesale Enquiry" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const whatsappGeneralUrl = buildWhatsAppUrl(getGeneralEnquiryMessage());

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-brand-border/60 py-2"
          : "bg-white border-b border-brand-border/40 py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-lg"
          >
            <div className="relative h-11 sm:h-13 w-40 sm:w-52">
              <Image
                src="/images/logo.jpg"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.02] transition-transform"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-brand-charcoal/80 hover:text-brand-emerald hover:bg-brand-subtle/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-brand-forest hover:bg-brand-subtle transition-colors"
              title={`Call ${siteConfig.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{siteConfig.displayPhone}</span>
            </a>

            <a
              href="#wholesale"
              className="inline-flex items-center gap-2 bg-brand-emerald hover:bg-brand-forest text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <span>Get Wholesale Prices</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls: Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-forest hover:bg-brand-subtle border border-brand-border/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-brand-charcoal/40 backdrop-blur-sm lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white border-b border-brand-border shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-emerald">
                  Menu
                </span>
                <span className="text-xs text-brand-charcoal/60">
                  {siteConfig.displayPhone}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-brand-charcoal hover:bg-brand-subtle hover:text-brand-emerald transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <a
                  href="#wholesale"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 bg-brand-emerald text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-sm"
                >
                  <span>Get Wholesale Prices</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 border border-brand-forest/20 text-brand-forest font-semibold py-2.5 px-3 rounded-xl text-xs hover:bg-brand-subtle"
                  >
                    <Phone className="w-4 h-4 text-brand-emerald" />
                    <span>{siteConfig.displayPhone}</span>
                  </a>
                  <a
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 px-3 rounded-xl text-xs hover:opacity-95 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-center text-[11px] text-brand-charcoal/60 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Verified Beverage & Water Wholesale Supplier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
