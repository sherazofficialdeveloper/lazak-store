import React from 'react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  return (
    <section className="py-10 bg-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-5 space-y-4">
          <Badge variant="primary">Curated Selection</Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Our Products</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Explore our premium selection of BBQ and kitchen gear, tiered to meet every need from starter to pro.
          </p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {CATEGORIES.slice(0, 2).map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-grow h-px bg-muted/10" />
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-primary" />
                  <h3 className="text-2xl font-medium uppercase tracking-tighter whitespace-nowrap">
                    {category.name}
                  </h3>
                </div>
                <div className="flex-grow h-px bg-muted/10" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PRODUCTS.filter(p => p.categories.includes(category.slug)).map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products">
            <Button variant="outline" className="group px-12 h-14 uppercase tracking-widest font-medium">
              Explore Full Catalog <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
