import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LAZAK – Premium Essentials
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Premium BBQ Gear Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">for Serious Grillers</span>
            </h1>
            
            <p className="text-lg text-muted max-w-lg leading-relaxed font-medium">
              Durable. Professional. American Standard Quality.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products">
                <Button size="lg" className="gap-2 rounded-none px-10 h-14 text-lg uppercase font-black tracking-widest">
                  Shop BBQ Packs <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/category/grill-accessories">
                <Button variant="outline" size="lg" className="gap-2 font-black h-14 rounded-none uppercase tracking-widest border-2">
                  View Grill Mats
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                <span className="text-accent">⭐</span> 4.8/5 Customer Rating
              </div>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                <span className="text-primary">🚚</span> Free Shipping Over $50 (US Only)
              </div>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                <span className="text-primary">🇺🇸</span> Ships From USA
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-medium border-8 border-white">
              <img 
                src="/pic2.jpeg" 
                alt="Premium Kitchen Grill" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-surface p-6 rounded-2xl shadow-medium z-20 hidden md:block border border-muted/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-tighter">Top Rated</p>
                  <p className="text-lg font-bold">Premium Grill</p>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Star } from 'lucide-react';
