"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl, getProductEnquiryMessage } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { X, MessageCircle, Phone, Tag, ShoppingCart, Check } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState<boolean>(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product && product.packageSizes.length > 0) {
      setSelectedSize(product.packageSizes[0]);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentSize = selectedSize || product.packageSizes[0] || "Standard Pack";
  const whatsappUrl = buildWhatsAppUrl(
    getProductEnquiryMessage(product.name, currentSize)
  );

  const handleAddToCart = () => {
    addToCart(product, currentSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-border flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md text-brand-charcoal hover:bg-white hover:text-brand-red flex items-center justify-center transition-all focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="relative md:w-1/2 aspect-square md:aspect-auto bg-brand-subtle flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {product.brand}
          </div>
        </div>

        {/* Product Info Column */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-brand-emerald bg-brand-subtle px-2.5 py-0.5 rounded-full">
                {product.categoryLabel}
              </span>
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                {product.availability}
              </span>
            </div>

            <h3 id="modal-product-title" className="text-2xl font-bold text-brand-forest">
              {product.name}
            </h3>

            <div className="mt-4 p-3 bg-brand-surface rounded-xl border border-brand-border">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-forest">
                <Tag className="w-3.5 h-3.5 text-brand-emerald" />
                <span>Wholesale Pricing</span>
              </div>
              <p className="text-sm font-bold text-brand-emerald mt-0.5">
                {product.priceNote}
              </p>
              <p className="text-[11px] text-brand-charcoal/60 mt-1 leading-snug">
                Wholesale rates calculated based on crate volume, package format, and delivery destination.
              </p>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Segregation Sizes */}
            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 block mb-2">
                Select Quantity / Bottle Size:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.packageSizes.map((size) => {
                  const isSelected = currentSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-red-600 text-white border-red-600 shadow-xs ring-2 ring-red-500/20"
                          : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {product.popularFor && product.popularFor.length > 0 && (
              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 block mb-1">
                  Common Commercial Use:
                </span>
                <p className="text-xs text-brand-charcoal/80">
                  {product.popularFor.join(" • ")}
                </p>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-brand-border space-y-2">
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl shadow-md text-sm transition-all ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added {currentSize} to Quote!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add {currentSize} to Quote Cart</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-2.5 px-4 rounded-xl shadow-xs text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire {currentSize} on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full flex items-center justify-center gap-2 border border-brand-forest/30 text-brand-forest hover:bg-brand-subtle font-semibold py-2.5 px-4 rounded-xl text-xs transition-all"
            >
              <Phone className="w-4 h-4 text-brand-emerald" />
              <span>Call {siteConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
