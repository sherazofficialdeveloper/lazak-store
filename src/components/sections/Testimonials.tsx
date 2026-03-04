import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Thompson',
      content: 'The Kitchen Grill / Jali is a game-changer for my weekend roasts. The stainless steel quality is top-notch!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      content: 'I use the BBQ Meat Pack Bags for all my catering events. They look professional and keep the meat perfectly fresh.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      content: 'Exceptional quality on the grill jali. I have tried many, but this one ensures the most even cooking.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      content: 'Fast shipping and great customer service. LAZAK is my go-to for BBQ essentials now.',
      rating: 5
    },
    {
      name: 'Robert Wilson',
      content: 'The meat pack bags are so durable. Perfect for our large family BBQ parties.',
      rating: 5
    }
  ];

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-10 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-muted">
            Join thousands of satisfied customers who have elevated their cooking with LAZAK.
          </p>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex gap-8 py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[350px] p-8 bg-background rounded-3xl border border-muted/10 space-y-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-secondary font-medium leading-relaxed">
                "{t.content}"
              </p>
              <div className="pt-4 border-t border-muted/10">
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-muted uppercase tracking-widest font-bold">Verified Customer</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
