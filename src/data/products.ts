import { Product, BlogArticle, Category } from '../types/product';

/**
 * Current products are client-provided. 
 * Any future products can replace these images/text without changing layout. 
 * All categories and sections will automatically adapt.
 */

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'kitchen-tools', name: 'Kitchen Tools', icon: 'Utensils', image: '/pic5.jpeg' },
  { id: 'c2', slug: 'grill-accessories', name: 'Grill Accessories', icon: 'Settings', image: '/pic2.jpeg' },
  { id: 'c3', slug: 'indoor-outdoor', name: 'Indoor / Outdoor Use', icon: 'Home', image: '/pic5.jpeg' },
  { id: 'c4', slug: 'mid-range', name: 'Mid-Range', icon: 'Activity', image: '/pic2.jpeg' },
  { id: 'c5', slug: 'bbq-essentials', name: 'BBQ Essentials', icon: 'Flame', image: '/pic2.jpeg' },
  { id: 'c6', slug: 'meat-packaging', name: 'Meat Packaging', icon: 'Package', image: '/pack.jpeg' },
  { id: 'c7', slug: 'small-pack', name: 'Small Pack / Party Size', icon: 'Users', image: '/pack.jpeg' },
  { id: 'c8', slug: 'budget-friendly', name: 'Budget Friendly', icon: 'DollarSign', image: '/pic5.jpeg' },
  { id: 'c9', slug: 'featured', name: 'Featured', icon: 'Star', image: '/pic2.jpeg' },
];

export const PRODUCTS: Product[] = [
  // BBQ Cooler Bags (BBQ Essentials / Grill Accessories)
  {
    id: 'bbq-budget',
    slug: 'small-premium-insulated-bbq-cooler-bag',
    title: 'Small Premium Insulated BBQ Cooler Bag',
    price: 29.99,
    description: 'Compact and efficient cooling for your BBQ essentials. Perfect for quick trips and small gatherings.',
    fullDescription: 'The Small Premium Insulated BBQ Cooler Bag is designed for those who need a reliable, compact cooling solution. Ideal for carrying a few steaks or a small selection of beverages to your next grill-out.\n\n• High-quality thermal insulation\n• Durable zipper closure\n• Compact size for easy transport\n• Easy to clean interior',
    image: '/pic2.jpeg',
    rating: 4.5,
    reviews: 12,
    categories: ['bbq-essentials', 'grill-accessories', 'budget-friendly'],
    features: ['Thermal Insulation', 'Compact Design', 'Durable Zipper'],
    stock: 200,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'bbq-standard',
    slug: 'standard-premium-insulated-bbq-cooler-bag',
    title: 'Standard Premium Insulated BBQ Cooler Bag',
    price: 49.99,
    description: 'Our most popular cooler bag, offering the perfect balance of size and performance for any pitmaster.',
    fullDescription: 'The Standard Premium Insulated BBQ Cooler Bag is the go-to choice for BBQ enthusiasts. It provides ample space for multiple meat packs and drinks, keeping everything at the perfect temperature.\n\n• Advanced thermal lining\n• Reinforced handles for heavy loads\n• Multiple storage compartments\n• Water-resistant exterior',
    image: '/pic2.jpeg',
    rating: 4.8,
    reviews: 42,
    categories: ['bbq-essentials', 'grill-accessories', 'mid-range', 'featured'],
    features: ['Advanced Insulation', 'Reinforced Handles', 'Water Resistant'],
    stock: 150,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'bbq-premium',
    slug: 'large-premium-insulated-bbq-cooler-bag-pro-edition',
    title: 'Large Premium Insulated BBQ Cooler Bag – Pro Edition',
    price: 79.99,
    description: 'The ultimate cooling solution for professionals. Maximum capacity and superior insulation for all-day performance.',
    fullDescription: 'Designed for the serious pitmaster, the Pro Edition offers unmatched cooling performance. Its large capacity can handle full briskets and large quantities of beverages with ease.\n\n• Professional-grade insulation (up to 24 hours)\n• Heavy-duty construction\n• Leak-proof interior\n• Adjustable shoulder strap',
    image: '/pic2.jpeg',
    rating: 5.0,
    reviews: 25,
    categories: ['bbq-essentials', 'grill-accessories', 'featured'],
    features: ['Pro-Grade Insulation', 'Heavy Duty', 'Leak Proof', 'Large Capacity'],
    stock: 50,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Dish Drying Racks (Kitchen Tools / Indoor-Outdoor)
  {
    id: 'rack-budget',
    slug: 'small-roll-up-dish-drying-rack',
    title: 'Small Roll-Up Dish Drying Rack (Over the Sink)',
    price: 19.99,
    description: 'A simple and effective space-saver for smaller kitchens and apartments.',
    fullDescription: 'This compact roll-up rack is perfect for drying a few dishes or rinsing vegetables. It fits easily over smaller sinks and rolls up for convenient storage.\n\n• Space-saving design\n• Stainless steel construction\n• Non-slip silicone edges\n• Dishwasher safe',
    image: '/pic5.jpeg',
    rating: 4.4,
    reviews: 18,
    categories: ['kitchen-tools', 'indoor-outdoor', 'budget-friendly'],
    features: ['Space Saving', 'Stainless Steel', 'Non-Slip'],
    stock: 300,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'rack-standard',
    slug: 'standard-roll-up-dish-drying-rack',
    title: 'Standard Roll-Up Dish Drying Rack (Over the Sink)',
    price: 34.99,
    description: 'The versatile choice for everyday kitchen needs. Fits most standard sinks perfectly.',
    fullDescription: 'Our standard roll-up rack is a kitchen essential. It provides a sturdy surface for drying dishes, pots, and pans, while keeping your counters clear.\n\n• Fits standard sinks\n• Heat resistant up to 400°F\n• Rust-proof stainless steel\n• Multi-purpose use',
    image: '/pic5.jpeg',
    rating: 4.7,
    reviews: 56,
    categories: ['kitchen-tools', 'indoor-outdoor', 'mid-range', 'featured'],
    features: ['Heat Resistant', 'Rust Proof', 'Multi-Purpose'],
    stock: 250,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'rack-premium',
    slug: 'premium-roll-up-dish-drying-rack-heat-resistant-pro',
    title: 'Premium Roll-Up Dish Drying Rack – Heat Resistant Pro',
    price: 54.99,
    description: 'The highest quality rack with superior heat resistance and heavy-duty capacity.',
    fullDescription: 'The Heat Resistant Pro is the ultimate sink accessory. It can handle heavy cookware and doubles as a trivet for hot pots straight from the oven.\n\n• Extra-thick stainless steel rods\n• Superior heat resistance (up to 500°F)\n• Premium food-grade silicone\n• Extended size for large sinks',
    image: '/pic5.jpeg',
    rating: 4.9,
    reviews: 34,
    categories: ['kitchen-tools', 'indoor-outdoor', 'featured'],
    features: ['Superior Heat Resistance', 'Heavy Duty', 'Food-Grade Silicone'],
    stock: 100,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Meat Packaging
  {
    id: 'meat-pack-1',
    slug: 'heavy-duty-butcher-paper-roll',
    title: 'Heavy Duty Butcher Paper Roll',
    price: 24.99,
    description: 'Professional grade butcher paper for wrapping briskets and ribs.',
    fullDescription: 'Our Heavy Duty Butcher Paper is the secret to perfect BBQ bark. It allows the meat to breathe while retaining moisture.\n\n• Unbleached and unwaxed\n• High wet strength\n• Perfect for smoking meats\n• Large 18-inch width',
    image: '/pack.jpeg',
    rating: 4.8,
    reviews: 89,
    categories: ['meat-packaging', 'bbq-essentials', 'mid-range'],
    features: ['Unbleached', 'High Wet Strength', 'Breathable'],
    stock: 500,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'meat-pack-2',
    slug: 'vacuum-sealer-bags-party-pack',
    title: 'Vacuum Sealer Bags - Party Pack',
    price: 39.99,
    description: 'Bulk pack of vacuum sealer bags for large scale meat prep.',
    fullDescription: 'Keep your meat fresh for longer with our premium vacuum sealer bags. Perfect for party prep and long-term storage.\n\n• BPA free\n• Heavy duty 4 mil thickness\n• Compatible with all major sealers\n• Includes multiple sizes',
    image: '/pack.jpeg',
    rating: 4.6,
    reviews: 120,
    categories: ['meat-packaging', 'small-pack', 'mid-range', 'featured'],
    features: ['BPA Free', 'Heavy Duty', 'Universal Fit'],
    stock: 400,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'meat-pack-3',
    slug: 'pro-series-meat-wrapping-station',
    title: 'Pro Series Meat Wrapping Station',
    price: 129.99,
    description: 'Complete station for professional meat packaging and organization.',
    fullDescription: 'The Pro Series Meat Wrapping Station is designed for high-volume BBQ operations. It includes a heavy-duty dispenser and integrated cutting edge.\n\n• Stainless steel construction\n• Integrated safety cutter\n• Fits large rolls up to 24 inches\n• Non-slip base',
    image: '/pack.jpeg',
    rating: 5.0,
    reviews: 15,
    categories: ['meat-packaging', 'featured'],
    features: ['Stainless Steel', 'Safety Cutter', 'Non-Slip Base'],
    stock: 30,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    slug: 'perfect-bbq-meat-packaging',
    title: 'The Importance of Proper BBQ Meat Packaging',
    excerpt: 'Learn why high-quality packaging is essential for maintaining meat freshness and flavor during transport.',
    date: 'March 2, 2026',
    image: '/pic2.jpeg',
    author: 'Chef Marcus'
  },
  {
    id: 'b2',
    slug: 'grill-maintenance-tips',
    title: '5 Tips for Maintaining Your Kitchen Grill',
    excerpt: 'Keep your grill in top condition with these simple cleaning and maintenance hacks.',
    date: 'February 28, 2026',
    image: '/pic5.jpeg',
    author: 'Sarah Grillmaster'
  },
  {
    id: 'b3',
    slug: 'choosing-the-right-chef-knife',
    title: 'Choosing the Right Chef Knife for Your Kitchen',
    excerpt: 'A comprehensive guide to selecting the perfect chef knife based on your cooking style and preferences.',
    date: 'February 25, 2026',
    image: '/pack.jpeg',
    author: 'Chef Marcus'
  },
  {
    id: 'b4',
    slug: 'outdoor-grilling-safety',
    title: 'Essential Outdoor Grilling Safety Tips',
    excerpt: 'Stay safe while grilling outdoors with these essential tips for fire prevention and food safety.',
    date: 'February 20, 2026',
    image: '/pack.jpeg',
    author: 'Sarah Grillmaster'
  }
];
