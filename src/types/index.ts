export interface BusinessConfig {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
    fullAddress: string;
  };
  businessHours: {
    days: string;
    hours: string;
    note: string;
  };
  announcement: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'cool-drinks' | 'water-bottles' | 'soft-drinks' | 'drinking-water' | 'fruit-juices' | 'soda-mixers' | 'bulk-jars' | 'cans-energy';
  categoryLabel: string;
  packageSizes: string[];
  image: string;
  description: string;
  availability: 'Contact for Availability' | 'In Stock' | 'Wholesale Orders Only';
  priceNote: string;
  wholesaleDiscount?: string;
  isFeatured?: boolean;
  popularFor?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}
