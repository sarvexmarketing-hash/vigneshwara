import { Product } from '@/types';

export const productsData: Product[] = [
  // =========================================================================
  // --- 1. BANNER BRAND WATER BOTTLES (Bisleri, Kinley, Aquafina, Bailley) ---
  // =========================================================================
  {
    id: "bisleri-1l-case",
    name: "Bisleri Mineral Water 1 Litre (Case of 12)",
    brand: "Bisleri",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Mini (Case of 24)", "1 Litre (Case of 12)", "3 Litres (Bulk Pack)"],
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Iconic purified mineral water with essential minerals. Essential wholesale line for retail counters, dining, supermarkets, and caterers.",
    availability: "In Stock",
    priceNote: "Wholesale Carton Rate",
    wholesaleDiscount: "BESTSELLER",
    isFeatured: true,
    popularFor: ["Supermarkets", "Caterers", "Dining Halls", "Retail Counters"],
  },
  {
    id: "bisleri-500ml-case",
    name: "Bisleri 500ml Mineral Water (Case of 24)",
    brand: "Bisleri",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Mini", "500ml (Case of 24)", "1 Litre Bottle"],
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Portable 500ml Bisleri mineral water bottles in shrink-wrapped trays of 24 units.",
    availability: "In Stock",
    priceNote: "Wholesale Tray Rate",
    wholesaleDiscount: "HIGH DEMAND",
    isFeatured: true,
    popularFor: ["Bakeries", "Functions", "Stores"],
  },
  {
    id: "mini-water-250ml",
    name: "Bisleri 250ml Mini Water Bottles (Case of 24)",
    brand: "Bisleri",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Mini (Case of 24)"],
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Compact 250ml mini bottled water cases designed specifically for wedding functions, meetings, and hotel welcome trays.",
    availability: "In Stock",
    priceNote: "Wholesale Case Rate",
    wholesaleDiscount: "EVENT SPECIAL",
    isFeatured: false,
    popularFor: ["Weddings", "Conferences", "VIP Lounges"],
  },
  {
    id: "kinley-1l-box",
    name: "Kinley Packaged Drinking Water 1 Litre (Box of 12)",
    brand: "Kinley",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Box of 24", "1 Litre Box of 12", "3 Litres (Bulk Box)"],
    image: "/images/products/user_kinley_bottle.jpg",
    description: "Reverse osmosis and micron-filtered packaged drinking water with added minerals. Daily wholesale dispatch for retail shops and functions.",
    availability: "In Stock",
    priceNote: "Wholesale Box Rate",
    wholesaleDiscount: "HIGH TURNOVER",
    isFeatured: true,
    popularFor: ["Retail Counters", "Hotels", "Restaurants", "Events"],
  },
  {
    id: "kinley-500ml-case",
    name: "Kinley 500ml Packaged Water (Case of 24)",
    brand: "Kinley",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Box", "500ml (Case of 24)", "1 Litre Box"],
    image: "/images/products/user_kinley_bottle.jpg",
    description: "Convenient 500ml portable water bottles in shrink-wrapped trays of 24 units. High impulse sales.",
    availability: "In Stock",
    priceNote: "Trade Tray Rate",
    wholesaleDiscount: "BULK TRAY DEAL",
    isFeatured: false,
    popularFor: ["Bakeries", "Takeaways", "Bus Stands"],
  },
  {
    id: "aquafina-1l-case",
    name: "Aquafina Pure Drinking Water 1 Litre (Case of 12)",
    brand: "Aquafina",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Mini", "1 Litre (Case of 12)", "3 Litres (Party Pack)"],
    image: "/images/products/user_aquafina_bottle.jpg",
    description: "7-step Hydro7 filtration process water by PepsiCo. Clean, crisp taste suited for wholesale supply.",
    availability: "In Stock",
    priceNote: "Wholesale Case Rate",
    wholesaleDiscount: "SPECIAL CASE RATE",
    isFeatured: true,
    popularFor: ["Events", "Dhabas", "Fast Food"],
  },
  {
    id: "bailley-1l-case",
    name: "Bailley Packaged Drinking Water (Case of 12)",
    brand: "Bailley",
    category: "water-bottles",
    categoryLabel: "Water Bottles",
    packageSizes: ["250ml Mini", "1 Litre (Case of 12)", "3 Litres (Bulk Pack)"],
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Parle Agro's trusted packaged drinking water brand. Ideal wholesale pricing for retail shops and local catering.",
    availability: "In Stock",
    priceNote: "Wholesale Case Rate",
    wholesaleDiscount: "VALUE PACK",
    isFeatured: false,
    popularFor: ["Bakeries", "Functions", "Stores"],
  },

  // =========================================================================
  // --- 2. BANNER BRAND COOL DRINKS (Thums Up, Sprite, Mountain Dew, etc) ---
  // =========================================================================
  {
    id: "thums-up-pet",
    name: "Thums Up Cola Bottles (Crate of 24)",
    brand: "Thums Up",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_thumsup_bottle.jpg",
    description: "Strong, fizzy cola taste. All-time favourite for parties, functions, and retail shops.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "UPTO 25% OFF",
    isFeatured: true,
    popularFor: ["Retail Stores", "Fast Food", "Catering", "Events"],
  },
  {
    id: "thums-up-charged-can",
    name: "Thums Up 250ml Slim Can (Tray of 24)",
    brand: "Thums Up",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml Slim Can (Tray of 24)"],
    image: "/images/products/user_thumsup_bottle.jpg",
    description: "Chilled slim cans with intense fizz. Designed for fast-moving retail display coolers.",
    availability: "In Stock",
    priceNote: "Tray Wholesale Price",
    wholesaleDiscount: "UPTO 30% OFF",
    isFeatured: true,
    popularFor: ["Coolers", "Takeaways", "Retail Shelves"],
  },
  {
    id: "sprite-pet",
    name: "Sprite Lemon-Lime Bottles (Crate of 24)",
    brand: "Sprite",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_sprite_bottle.jpg",
    description: "Clear, crisp lemon-lime flavoured carbonated cool drink. High turnover beverage for groceries, bakeries, and restaurants.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "BULK CRATE DEAL",
    isFeatured: true,
    popularFor: ["Restaurants", "Supermarkets", "Hotels"],
  },
  {
    id: "sprite-can-250ml",
    name: "Sprite Lemon-Lime 250ml Slim Can (Tray of 24)",
    brand: "Sprite",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml Slim Can (Tray of 24)"],
    image: "/images/products/can_sprite.jpg",
    description: "Crisp lemon-lime refreshment in modern sleek cans.",
    availability: "In Stock",
    priceNote: "Tray Wholesale Price",
    wholesaleDiscount: "SPECIAL CAN PACK",
    isFeatured: false,
    popularFor: ["Cafes", "Multiplexes", "College Zones"],
  },
  {
    id: "mountain-dew-pet",
    name: "Mountain Dew Citrus Fizz (Crate of 24)",
    brand: "Mountain Dew",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_mountain_dew_bottle.jpg",
    description: "Exhilarating neon citrus cool drink. High demand in youth hotspots, colleges, and retail chillers.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "SPECIAL CRATE DEAL",
    isFeatured: true,
    popularFor: ["College Canteens", "Retail Chillers", "Snack Corners"],
  },
  {
    id: "coca-cola-original-pet",
    name: "Coca-Cola Original Taste (Crate of 24)",
    brand: "Coca-Cola",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_coke_bottle.jpg",
    description: "The classic refreshing cola. Available for wholesale supply in crates and bulk case packings.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "TRADE PRICING",
    isFeatured: true,
    popularFor: ["Cafes", "Event Catering", "Kirana Stores"],
  },
  {
    id: "coca-cola-can-300ml",
    name: "Coca-Cola Original 300ml Sleek Can (Tray of 24)",
    brand: "Coca-Cola",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml Slim Can", "300ml Sleek Can (Tray of 24)"],
    image: "/images/products/user_coke_can.jpg",
    description: "Classic Coca-Cola in 300ml cans. Standard tray packing for event catering.",
    availability: "In Stock",
    priceNote: "Wholesale Tray Rate",
    wholesaleDiscount: "HIGH DEMAND",
    isFeatured: true,
    popularFor: ["Event Catering", "Minibars", "Restaurants"],
  },
  {
    id: "maaza-mango-drink",
    name: "Maaza Mango Pulp Drink (Carton)",
    brand: "Maaza",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre Bottle", "3 Litres Family Pack"],
    image: "/images/products/real_maaza.jpg",
    description: "Rich and thick Alphonso-inspired mango drink. Consistently high sales across all retail shops.",
    availability: "In Stock",
    priceNote: "Carton Wholesale Rate",
    wholesaleDiscount: "TOP SELLER",
    isFeatured: true,
    popularFor: ["Bakeries", "School Zones", "Grocery Shops"],
  },
  {
    id: "limca-fresh-lemony-pet",
    name: "Limca Fresh Lime Bottles (Crate of 24)",
    brand: "Limca",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_sprite_bottle.jpg",
    description: "Cloudy lemon refresher with distinct sharpness and cooling satisfaction for hot weather.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "SUMMER SAVINGS",
    isFeatured: false,
    popularFor: ["Summer Demand", "Restaurants", "Dhabas"],
  },
  {
    id: "fanta-orange-pet",
    name: "Fanta Orange Flavour (Crate of 24)",
    brand: "Fanta",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_fanta_bottle.jpg",
    description: "Fruity orange fizzy cool drink. High demand for family events and functions.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "SPECIAL CRATE",
    isFeatured: false,
    popularFor: ["Family Functions", "Retail Stores"],
  },
  {
    id: "mirinda-orange-pet",
    name: "Mirinda Orange Flavour (Crate of 24)",
    brand: "Mirinda",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml PET", "1 Litre PET", "3 Litres Jumbo Party Bottle"],
    image: "/images/products/user_fanta_bottle.jpg",
    description: "Bold orange fizz cool drink from PepsiCo.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "HIGH MARGIN",
    isFeatured: false,
    popularFor: ["Retail Coolers", "Parties"],
  },
  {
    id: "kinley-soda-pet",
    name: "Kinley Club Soda (Crate of 24)",
    brand: "Kinley",
    category: "cool-drinks",
    categoryLabel: "Cool Drinks",
    packageSizes: ["250ml Soda Bottle", "1 Litre Club Soda", "3 Litres Bulk Case"],
    image: "/images/products/user_kinley_soda.jpg",
    description: "Extra fizzy soda. Essential for function catering and beverage mixing.",
    availability: "In Stock",
    priceNote: "Wholesale Crate Rate",
    wholesaleDiscount: "BULK CRATE",
    isFeatured: false,
    popularFor: ["Catering Bars", "Functions", "Hotels"],
  },
];

// Product Categories exported for ProductCatalog component — ONLY Cool Drinks and Water Bottles
export const productCategories = [
  { id: "all", label: "All Items" },
  { id: "cool-drinks", label: "Cool Drinks" },
  { id: "water-bottles", label: "Water Bottles" },
];

// --- Quantity Segregation Tiers (250 ml, 1 liter, 3 liters) ---
export interface QuantityTier {
  id: "all" | "250ml" | "1liter" | "3liters";
  label: string;
  numberPrefix: string;
  volume: string;
  badge: string;
  tagline: string;
  description: string;
}

export const quantityTiers: QuantityTier[] = [
  {
    id: "all",
    label: "All Sizes",
    numberPrefix: "All",
    volume: "All Quantities",
    badge: "Full Range",
    tagline: "All Pack Sizes",
    description: "Browse all available bottle sizes, cans, cartons, and wholesale crates.",
  },
  {
    id: "250ml",
    label: "250 ml",
    numberPrefix: "1)",
    volume: "250 ml",
    badge: "Pocket & Chiller",
    tagline: "Single-Serve & Slim Cans",
    description: "250ml PET cool drinks, 250ml slim cans, and mini water bottles for counters & welcome trays.",
  },
  {
    id: "1liter",
    label: "1 Liter",
    numberPrefix: "2)",
    volume: "1 Liter",
    badge: "Everyday & Dining",
    tagline: "Standard Cases & Trays",
    description: "Standard 1 Litre packaged water boxes of 12 and 1L cool drink bottles for restaurants & dining.",
  },
  {
    id: "3liters",
    label: "3 Liters",
    numberPrefix: "3)",
    volume: "3 Liters",
    badge: "Jumbo Party Pack",
    tagline: "Family & Event Catering",
    description: "Large 3 Litres / jumbo sharing bottles & bulk crates for weddings, parties, and caterers.",
  },
];

export function matchesQuantityTier(product: Product, tier: string): boolean {
  if (!tier || tier === "all") return true;
  const sizes = product.packageSizes.join(" ").toLowerCase();
  const name = product.name.toLowerCase();
  const text = `${name} ${sizes}`;

  if (tier === "250ml") {
    return text.includes("250ml") || text.includes("mini") || text.includes("can");
  }
  if (tier === "1liter") {
    return text.includes("1 litre") || text.includes("1 liter") || text.includes("1l") || text.includes("500ml") || text.includes("750ml");
  }
  if (tier === "3liters") {
    return (
      text.includes("3 litre") ||
      text.includes("3 liter") ||
      text.includes("3l") ||
      text.includes("2 litre") ||
      text.includes("2l") ||
      text.includes("jumbo") ||
      text.includes("party") ||
      text.includes("family") ||
      text.includes("bulk")
    );
  }
  return true;
}

export interface TrendingCategoryTile {
  id: string; // "cool-drinks" | "water-bottles"
  slug: string; // unique slug for page routing
  title: string;
  badge: string;
  image: string;
  brand: string;
  description: string;
}

// Exact 9 Trending Banner Brands Grid — Directly using your uploaded Thums Up & Sprite photos
export const trendingCategoryTiles: TrendingCategoryTile[] = [
  {
    id: "cool-drinks",
    slug: "thums-up",
    title: "Thums Up",
    brand: "Thums Up",
    badge: "Cola Crates",
    image: "/images/products/user_thumsup_bottle.jpg",
    description: "Original strong fizzy Thums Up cola bottles and cans available in wholesale crates.",
  },
  {
    id: "cool-drinks",
    slug: "sprite",
    title: "Sprite",
    brand: "Sprite",
    badge: "Lemon Fizz",
    image: "/images/products/user_sprite_bottle.jpg",
    description: "Crisp lemon-lime Sprite refreshing soft drinks in 250ml, 750ml, 1.25L, 2L and slim cans.",
  },
  {
    id: "cool-drinks",
    slug: "mountain-dew",
    title: "Mountain Dew",
    brand: "Mountain Dew",
    badge: "Citrus Punch",
    image: "/images/products/user_mountain_dew_bottle.jpg",
    description: "Exhilarating neon citrus Mountain Dew crates for chillers, colleges and snack centers.",
  },
  {
    id: "cool-drinks",
    slug: "coca-cola",
    title: "Coca-Cola",
    brand: "Coca-Cola",
    badge: "Original Taste",
    image: "/images/products/user_coke_bottle.jpg",
    description: "The classic world-favorite Coca-Cola in wholesale crates and 300ml sleek cans.",
  },
  {
    id: "cool-drinks",
    slug: "maaza",
    title: "Maaza Mango",
    brand: "Maaza",
    badge: "Real Pulp",
    image: "/images/products/real_maaza.jpg",
    description: "Thick and luscious Alphonso-rich Maaza mango drink in tetra packs and PET bottles.",
  },
  {
    id: "water-bottles",
    slug: "bisleri",
    title: "Bisleri Water",
    brand: "Bisleri",
    badge: "1L & 500ml",
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Pristine 10-step purified Bisleri mineral water in 1L, 500ml and 250ml mini cartons.",
  },
  {
    id: "water-bottles",
    slug: "kinley",
    title: "Kinley Water",
    brand: "Kinley",
    badge: "Box of 12",
    image: "/images/products/user_kinley_bottle.jpg",
    description: "Reverse osmosis purified Kinley drinking water boxes with essential minerals.",
  },
  {
    id: "water-bottles",
    slug: "aquafina",
    title: "Aquafina",
    brand: "Aquafina",
    badge: "Cases & Trays",
    image: "/images/products/user_aquafina_bottle.jpg",
    description: "7-step Hydro7 purified Aquafina drinking water bottles by PepsiCo.",
  },
  {
    id: "cool-drinks",
    slug: "fanta-mirinda",
    title: "Fanta Orange",
    brand: "Fanta",
    badge: "Orange Fizz",
    image: "/images/products/user_fanta_bottle.jpg",
    description: "Vibrant orange fizzy cool drinks from Fanta and Mirinda for family events and functions.",
  },
  {
    id: "water-bottles",
    slug: "bailley",
    title: "Bailley Water",
    brand: "Bailley",
    badge: "Cartons & Cases",
    image: "/images/products/user_bisleri_bottle.jpg",
    description: "Parle Agro's trusted packaged drinking water in 1L and 500ml wholesale cases.",
  },
  {
    id: "cool-drinks",
    slug: "limca",
    title: "Limca",
    brand: "Limca",
    badge: "Fresh Lime",
    image: "/images/products/user_sprite_bottle.jpg",
    description: "Cloudy lemon refresher with cooling satisfaction for retail counters and dining.",
  },
  {
    id: "cool-drinks",
    slug: "soda",
    title: "Kinley Soda",
    brand: "Kinley",
    badge: "Extra Fizz",
    image: "/images/products/user_kinley_soda.jpg",
    description: "Extra fizzy club soda bottles and crates for functions, catering and mixing.",
  },
];

export function getCategoryProductsBySlug(slug: string) {
  const tile = trendingCategoryTiles.find((t) => t.slug === slug);
  if (tile) {
    const products = productsData.filter((p) => {
      if (tile.slug === "fanta-mirinda") {
        return p.brand === "Fanta" || p.brand === "Mirinda";
      }
      if (tile.slug === "soda") {
        return p.id.includes("soda");
      }
      return p.brand.toLowerCase() === tile.brand.toLowerCase();
    });
    return {
      tile,
      title: tile.title,
      category: tile.id,
      description: tile.description,
      image: tile.image,
      badge: tile.badge,
      products,
    };
  }

  // Fallback for general categories
  if (slug === "cool-drinks" || slug === "water-bottles") {
    const isWater = slug === "water-bottles";
    return {
      tile: null,
      title: isWater ? "Water Bottles" : "Cool Drinks",
      category: slug,
      description: isWater
        ? "Purified packaged drinking water bottles in 1L, 500ml, and 250ml mini packs."
        : "Refreshing soft drinks, colas, citrus drinks, and fruit juices in crates and cans.",
      image: isWater ? "/images/products/user_bisleri_bottle.jpg" : "/images/products/user_thumsup_bottle.jpg",
      badge: "Wholesale Crates",
      products: productsData.filter((p) => p.category === slug),
    };
  }

  return null;
}
