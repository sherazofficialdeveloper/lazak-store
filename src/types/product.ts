export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  categories: string[];
  features: string[];
  variants?: ProductVariant[];
  stock: number;
  deliveryInfo: string;
  isBestSeller?: boolean;
  hasFreeShipping?: boolean;
  fullDescription?: string;
  tier?: 'budget' | 'standard' | 'premium';
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  image?: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}
