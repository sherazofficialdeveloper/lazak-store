import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Star,
  Truck,
  Flag
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Product Images for Carousel
const products = [
  {
    id: 1,
    image: "/pic2.jpeg",
    alt: "Premium BBQ Grill Set",
    discount: "-20%",
    tag: "Best Seller"
  },
  {
    id: 2,
    image: "/pic2.jpeg",
    alt: "Grill Mats Professional",
    discount: "-15%",
    tag: "New Arrival"
  },
  {
    id: 3,
    image: "/pic2.jpeg",
    alt: "BBQ Tool Collection",
    discount: "-25%",
    tag: "Limited Edition"
  }
];

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Premium BBQ & Kitchen" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1]"
          >
            Premium Kitchen & BBQ Essentials{' '}
            <span className="text-primary">for Modern Grilling</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            LAZAK offers professional kitchen tools and premium grilling essentials. Durable. Professional. American Standard Quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 px-10 h-14 text-lg uppercase font-medium tracking-widest">
                Shop All Products <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/category/grill-accessories" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 font-medium h-14 uppercase tracking-widest">
                View Essentials
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20"
          >
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
              <Star className="w-5 h-5 text-accent fill-accent" /> 
              4.8/5 Customer Rating
            </div>
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
              <Truck className="w-5 h-5 text-primary" /> 
              Free Shipping Over $50 (US Only)
            </div>
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-white">
              <Flag className="w-5 h-5 text-primary" /> 
              Ships From USA
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
