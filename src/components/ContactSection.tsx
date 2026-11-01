"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl, getBulkEnquiryMessage } from "@/lib/whatsapp";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    category: "Soft Drinks",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.businessName.trim()) {
      errs.businessName = "Business / shop name is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;

    const message = getBulkEnquiryMessage({
      customerName: formData.name,
      businessName: formData.businessName,
      category: formData.category,
      quantity: formData.quantity,
    });

    const url = buildWhatsAppUrl(
      `${message} Specific details: ${formData.message || "Please share wholesale price list."}`
    );
    window.open(url, "_blank");
  };

  const categoriesOptions = [
    "All Beverages (General Wholesale)",
    "Soft Drinks (Cola, Lemon, Orange)",
    "Packaged Drinking Water",
    "Fruit Drinks & Juices",
    "Soda & Club Mixers",
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-surface border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal/70">
            Contact {siteConfig.name} for wholesale orders, product lists, and price quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Business Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border shadow-subtle space-y-6">
              
              {/* Business Name & Official Logo Badge */}
              <div className="pb-5 border-b border-brand-border/60">
                <div className="relative h-12 w-48 mb-2">
                  <Image
                    src="/images/logo.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-emerald block">
                  Wholesale Distributor
                </span>
                <p className="text-xs text-brand-charcoal/70 mt-1">
                  Packaged Drinking Water & Soft Drinks Wholesale Supply
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-emerald flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-charcoal/60">
                      Call Direct
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="block text-lg font-bold text-brand-forest hover:text-brand-emerald transition-colors"
                    >
                      {siteConfig.displayPhone}
                    </a>
                    <span className="text-xs text-brand-charcoal/60">
                      Standard mobile call rate applies
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-charcoal/60">
                      WhatsApp Us
                    </span>
                    <a
                      href={buildWhatsAppUrl(`Hello ${siteConfig.name}, I would like to enquire about wholesale beverage orders.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-bold text-[#25D366] hover:underline"
                    >
                      {siteConfig.displayPhone} (WhatsApp)
                    </a>
                    <span className="text-xs text-brand-charcoal/60">
                      Available during operating hours
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-emerald flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-charcoal/60">
                      Business Location
                    </span>
                    <p className="text-sm font-semibold text-brand-forest mt-0.5 leading-snug">
                      {siteConfig.address.fullAddress}
                    </p>
                    <p className="text-xs text-brand-charcoal/60 mt-0.5">
                      Plus Code: {siteConfig.address.plusCode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand-emerald flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-charcoal/60">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-brand-forest mt-0.5">
                      {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
                    </p>
                    <p className="text-xs text-brand-charcoal/60 mt-0.5">
                      {siteConfig.businessHours.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview / Link */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-brand-border bg-brand-subtle">
                  <iframe
                    title="Sri Vigneshwara Agencies Location Map"
                    src="https://maps.google.com/maps?q=Chennaraopet,+Warangal,+Telangana+506332&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-right">
                  <a
                    href="https://maps.google.com/?q=Chennaraopet,+Warangal,+Telangana+506332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-emerald hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span> →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-brand-border shadow-subtle">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-forest">
                  Send a Wholesale Enquiry
                </h3>
                <p className="text-sm text-brand-charcoal/70 mt-1">
                  Fill in the details below. You can send this enquiry directly or submit it via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-brand-subtle/50 rounded-2xl border border-brand-emerald/20">
                  <div className="w-14 h-14 rounded-full bg-brand-emerald text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-forest">
                    Enquiry Sent Successfully!
                  </h4>
                  <p className="text-sm text-brand-charcoal/80 mt-2 max-w-md mx-auto">
                    Thank you for contacting {siteConfig.name}. We will review your requirement and reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        businessName: "",
                        category: "Soft Drinks",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 bg-brand-emerald text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-forest transition-colors shadow-sm"
                  >
                    <span>Send Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Your Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 text-sm bg-brand-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal ${
                          errors.name ? "border-brand-red bg-red-50/20" : "border-brand-border"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9676373388"
                        className={`w-full px-4 py-3 text-sm bg-brand-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal ${
                          errors.phone ? "border-brand-red bg-red-50/20" : "border-brand-border"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Name and Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Business / Shop Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Sri Venkateswara Supermarket"
                        className={`w-full px-4 py-3 text-sm bg-brand-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal ${
                          errors.businessName ? "border-brand-red bg-red-50/20" : "border-brand-border"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Interested Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-brand-surface border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal cursor-pointer"
                      >
                        {categoriesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                      Estimated Quantity (crates / units)
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 20 crates Thums Up, 15 cases Kinley 1L"
                      className="w-full px-4 py-3 text-sm bg-brand-surface border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                      Message / Specific Brands
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter details regarding specific bottle sizes, delivery frequency, or questions..."
                      className="w-full px-4 py-3 text-sm bg-brand-surface border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal resize-none"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-forest text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] disabled:opacity-50 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Submitting..." : "Send Enquiry"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] text-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-brand-charcoal/60 text-center pt-2">
                    Your information is treated confidentially for wholesale quotations only.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
