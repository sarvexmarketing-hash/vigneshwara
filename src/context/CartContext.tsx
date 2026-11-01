"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalCount: 0,
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sva_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // Ignored
    }
  }, []);

  const saveItems = (updated: CartItem[]) => {
    setItems(updated);
    try {
      localStorage.setItem("sva_cart", JSON.stringify(updated));
    } catch {
      // Ignored
    }
  };

  const addToCart = (product: Product, size?: string, quantity: number = 5) => {
    const selectedSize = size || product.packageSizes[0] || "Standard Pack";
    const initialQty = Math.max(5, quantity);
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) {
      saveItems(
        items.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + initialQty } : i
        )
      );
    } else {
      saveItems([...items, { product, quantity: initialQty, selectedSize }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    saveItems(items.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    // Enforce minimum 5 crates wholesale order requirement
    const enforcedQty = Math.max(5, quantity);
    saveItems(
      items.map((i) => (i.product.id === productId ? { ...i, quantity: enforcedQty } : i))
    );
  };

  const clearCart = () => {
    saveItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

