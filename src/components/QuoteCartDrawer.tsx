"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingCart, CheckCircle } from "lucide-react";

export const QuoteCartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalCount } = useCart();
  const [shopName, setShopName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleSendWhatsAppOrder = () => {
    if (items.length === 0) return;

    let orderList = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} (${item.selectedSize}) - Quantity: ${item.quantity} Crates (Min. 5 Crates met)`
      )
      .join("\n");

    const header = shopName ? `Business/Shop: ${shopName}` : "Wholesale Commercial Buyer";

    const fullMessage = `Hello ${siteConfig.name},\nI would like to place a wholesale order:\n\n${header}\nOrder Requisition (Minimum 5 Crates per Item):\n${orderList}\n\nTotal: ${totalCount} Crates\n\nPlease share batch availability, wholesale crate rates, and delivery schedule.`;

    const url = buildWhatsAppUrl(fullMessage);
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-red-600" />
            <h3 className="text-base font-bold text-gray-900">
              Wholesale Order Cart ({totalCount} Crates)
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {/* Wholesale Minimum Order Policy Banner */}
          <div className="bg-amber-50 border border-amber-200 text-amber-950 rounded-xl p-2.5 text-xs flex items-center gap-2">
            <span className="font-black bg-amber-600 text-white text-[9px] px-1.5 py-0.5 rounded tracking-wide uppercase">
              MOQ
            </span>
            <span className="text-[11px] leading-tight font-medium">
              <strong>Minimum 5 crates</strong> must be ordered per product for wholesale delivery.
            </span>
          </div>

          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-gray-700">Your Quote Cart is Empty</h4>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Browse our soft drinks, packaged water bottles, and juices. Click &quot;Add to Quote&quot; on any item to build your wholesale order.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-3 inline-flex items-center gap-1.5 bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3 rounded-xl border border-gray-200 shadow-2xs flex items-center gap-3"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium">
                      Pack: {item.selectedSize}
                    </p>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5 inline-block">
                      {item.product.priceNote}
                    </span>

                    {/* Quantity Selector with 5 Crates Minimum */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, Math.max(5, item.quantity - 1))}
                          disabled={item.quantity <= 5}
                          className={`px-2 py-1 text-xs transition-colors ${
                            item.quantity <= 5
                              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                          }`}
                          title={item.quantity <= 5 ? "Minimum order is 5 crates" : "Decrease quantity"}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-black text-gray-900 whitespace-nowrap">
                          {item.quantity} Crates
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs"
                          title="Increase crates"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[10px] text-gray-400 font-bold">
                        (Min. 5)
                      </span>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 ml-auto"
                        title="Remove Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Your Shop / Business Name (Optional)
                </label>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="e.g. Sri Balaji Supermarket"
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Clear Cart
                </button>
                <span className="text-xs text-gray-500">
                  Total Items: <strong className="text-gray-900">{totalCount}</strong>
                </span>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-2">
            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl shadow text-sm transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send Requisition via WhatsApp</span>
            </button>

            <p className="text-[10px] text-center text-gray-500">
              Opens WhatsApp with prepared itemized wholesale list for immediate review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

