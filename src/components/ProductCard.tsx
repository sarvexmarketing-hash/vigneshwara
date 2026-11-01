"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppUrl, getProductEnquiryMessage } from "@/lib/whatsapp";
import { MessageCircle, Eye, Plus, ShoppingCart, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [imgSrc, setImgSrc] = useState(product.image);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.packageSizes[0] || "Standard Pack");
  const { addToCart } = useCart();

  const whatsappUrl = buildWhatsAppUrl(
    getProductEnquiryMessage(product.name, selectedSize)
  );

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 p-2">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          onError={() => {
            setImgSrc("/images/products/drinks_montage.jpg");
          }}
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Brand Tag Top Left */}
        <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
          {product.brand}
        </div>

        {/* Discount Badge Top Right matching Moglix */}
        {product.wholesaleDiscount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
            {product.wholesaleDiscount}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight block truncate">
            {product.categoryLabel}
          </span>

          <h3
            onClick={() => onViewDetails(product)}
            className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-red-600 cursor-pointer transition-colors leading-snug line-clamp-2 mt-0.5"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Quantity Segregation Size Chips */}
          <div className="mt-2 flex flex-wrap gap-1">
            {product.packageSizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors ${
                    isSelected
                      ? "bg-red-600 text-white shadow-2xs"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                  }`}
                  title={`Select ${size}`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Line matching Moglix Product Card */}
        <div className="mt-3 pt-2.5 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                {product.priceNote}
              </span>
              <span className="block text-[10px] text-emerald-700 font-semibold">
                Direct Crate Pricing
              </span>
            </div>
            <span className="text-[9px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded tracking-tight">
              Min. 5 Crates
            </span>
          </div>

          {/* Action Buttons matching Moglix (VIEW button in light pink/red) + Add to Quote */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => onViewDetails(product)}
              className="w-full flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold py-1.5 rounded-lg transition-colors uppercase tracking-tight"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>VIEW</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-1 text-xs font-bold py-1.5 rounded-lg transition-all uppercase tracking-tight shadow-2xs ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added (5)!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>+ Quote (5)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
