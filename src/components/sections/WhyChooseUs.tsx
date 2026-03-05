import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free express shipping on all orders over $50 across the USA.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      description: 'Your data is protected with military-grade 256-bit SSL encryption.',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: 'Not satisfied? Return any product within 30 days for a full refund.',
      color: 'bg-accent/10 text-accent'
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-tight">The LAZAK Advantage</h2>
          <p className="text-text-muted">
            We provide premium BBQ and kitchen gear backed by world-class service and USA-based support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="p-8 text-center space-y-4 border-none">
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
