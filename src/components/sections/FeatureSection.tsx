import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const FeatureSection = () => {
  return (
    <section className="bg-background py-2">
      <div className="container mx-auto px-2 md:px-4">
         <div className="space-y-4 pb-6 pt-5 flex flex-col justify-center items-center text-center">
                    <Badge variant="primary">Featured Products</Badge>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Top Picks for Professionals</h2>
                    <p className="text-text-muted max-w-lg text-lg">
                     Discover our best-selling and most reliable BBQ and kitchen gear, designed for performance, durability, and everyday excellence.
                    </p>
                  </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Row 1: Large Left, Small Right */}
          <div 
            className="md:col-span-8 relative group overflow-hidden h-[300px] md:h-[450px] shadow-soft"
          >
            <img 
              src="/image copy.png" 
              alt="Premium BBQ Packs" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="text-accent font-medium uppercase tracking-[0.3em] text-[10px] mb-2">Master the Flame</span>
              <h2 className="text-3xl md:text-5xl text-white mb-3 uppercase tracking-tighter leading-none">
                Premium BBQ Packs
              </h2>
              <p className="text-white/70 max-w-md mb-6 hidden md:block text-sm font-medium">
                Everything you need for the ultimate backyard feast. Professional grade tools and essentials.
              </p>
              <Link to="/products" className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors uppercase tracking-widest text-[10px]">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div 
            className="md:col-span-4 relative group overflow-hidden h-[300px] md:h-[450px] shadow-soft"
          >
            <img 
              src="pic.png" 
              alt="Prime Steaks" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">Prime Steaks</h3>
              <Link to="/products" className="text-accent font-medium hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                Shop Cuts
              </Link>
            </div>
          </div>

          {/* Row 2: Small Left, Large Right (CTA Block) */}
          <div 
            className="md:col-span-4 relative group overflow-hidden h-[300px] md:h-[450px] shadow-soft"
          >
            <img 
              src="image.png" 
              alt="Artisan Sausages" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">Artisan Sausages</h3>
              <Link to="/products" className="text-accent font-medium hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                View Selection
              </Link>
            </div>
          </div>

          <div 
            className="md:col-span-8 bg-primary flex flex-col justify-center p-8 md:p-16 h-[300px] md:h-[450px] shadow-soft"
          >
            <h2 className="text-4xl md:text-7xl text-secondary mb-4 uppercase tracking-tighter leading-[0.9]">
              Join the <br /> Pitmaster Club
            </h2>
            <p className="text-secondary/80 max-w-lg mb-8 text-base md:text-lg font-medium leading-tight">
              Get exclusive recipes, early access to limited meat drops, and grilling tips from the pros.
            </p>
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="px-10 py-4">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
