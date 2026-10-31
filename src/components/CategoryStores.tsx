"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryStoresProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoryStores: React.FC<CategoryStoresProps> = () => {
  const stores = [
    {
      href: "/category/thums-up",
      title: "Thums Up & Colas",
      image: "/images/products/user_thumsup_bottle.jpg",
      tag: "Thums Up & Coke Crates",
    },
    {
      href: "/category/sprite",
      title: "Sprite & Lemon Drinks",
      image: "/images/products/user_sprite_bottle.jpg",
      tag: "Sprite & Limca Fizz",
    },
    {
      href: "/category/mountain-dew",
      title: "Mountain Dew & Citrus",
      image: "/images/products/user_mountain_dew_bottle.jpg",
      tag: "Mountain Dew & Fanta",
    },
    {
      href: "/category/bisleri",
      title: "Bisleri & Kinley Water",
      image: "/images/products/user_bisleri_bottle.jpg",
      tag: "1L & 500ml Cases",
    },
    {
      href: "/category/aquafina",
      title: "Aquafina & Bailley",
      image: "/images/products/user_aquafina_bottle.jpg",
      tag: "Bottled Water Trays",
    },
    {
      href: "/#products",
      title: "View All Items",
      image: "/images/products/user_coke_bottle.jpg",
      tag: "All Banner Brands",
      isHighlight: true,
    },
  ];

  return (
    <section className="px-3 sm:px-4 py-3 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
          Category Stores
        </h2>
        <Link
          href="/#products"
          className="text-xs font-bold text-red-600 hover:text-red-700"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {stores.map((store) => (
          <Link
            key={store.title}
            href={store.href}
            className="cursor-pointer p-2 rounded-xl border border-gray-200/80 hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between items-center text-center group bg-[#F8F9FA]"
          >
            <div className="relative aspect-[100/80] w-full rounded-lg overflow-hidden mb-1.5 bg-white p-1">
              <Image
                src={store.image}
                alt={store.title}
                fill
                sizes="120px"
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span
              className={`text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2 ${
                store.isHighlight ? "text-red-600 font-bold" : "text-gray-800"
              }`}
            >
              {store.title}
            </span>
            <span className="text-[9px] text-gray-500 mt-0.5 truncate block w-full">
              {store.tag}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
