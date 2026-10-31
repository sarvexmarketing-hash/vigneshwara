"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "soft-drinks",
      title: "Soft Drinks",
      desc: "Popular carbonated beverages across leading brands and pack sizes.",
      action: "Explore Soft Drinks",
      image: "/images/products/user_thumsup_bottle.jpg",
      brands: "Thums Up • Sprite • Coca-Cola • Fanta • Limca",
    },
    {
      id: "drinking-water",
      title: "Packaged Drinking Water",
      desc: "Hygienic bottled water suitable for shops, events, hotels, and offices.",
      action: "Explore Drinking Water",
      image: "/images/products/user_bisleri_bottle.jpg",
      brands: "Kinley • Bisleri (Cartons & Cases)",
    },
    {
      id: "fruit-juices",
      title: "Fruit Drinks & Juices",
      desc: "Mango, lemon, and mixed fruit refreshing beverages.",
      action: "Explore Fruit Drinks",
      image: "/images/products/real_maaza.jpg",
      brands: "Maaza Mango • Minute Maid",
    },
    {
      id: "soda-mixers",
      title: "Soda & Other Beverages",
      desc: "Club soda, flavored mixers, and specialty beverages.",
      action: "Explore Soda & Mixers",
      image: "/images/products/soda_kinley.jpg",
      brands: "Kinley Soda • Bisleri Club Soda",
    },
  ];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-16 lg:py-24 bg-brand-surface border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Segments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
            Explore Our Beverage Collection
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal/70">
            Find the right beverages for your business.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-border shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-subtle">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-brand-emerald text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {cat.brands}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-brand-forest group-hover:text-brand-emerald transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/50 flex items-center justify-between text-xs font-semibold text-brand-emerald">
                  <span>{cat.action}</span>
                  <div className="w-7 h-7 rounded-full bg-brand-subtle flex items-center justify-center group-hover:bg-brand-emerald group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
