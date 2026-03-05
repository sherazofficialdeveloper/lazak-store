import React from 'react';
import { CATEGORIES } from '../../data/products';
import { CategoryCard } from '../ui/CategoryCard';
import { motion } from 'framer-motion';

export const ShopByCategory = () => {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-10">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] uppercase tracking-widest">
              Browse Collections
            </div>
            <h2 className="text-4xl md:text-6xl">Shop by Category</h2>
            <p className="text-text-muted max-w-xl text-lg font-medium">
              Explore our wide range of premium products across multiple specialized categories.
            </p>
          </div>
        </div>
        
        {/* Grid Layout (2-3 rows style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <div key={category.id}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
