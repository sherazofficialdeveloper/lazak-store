import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-10 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-surface p-8 md:p-16 shadow-medium flex flex-col lg:flex-row items-center gap-12 border border-white/20">
          <div className="space-y-6 flex-1">
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-medium text-text-main tracking-tight uppercase leading-none">Join LAZAK for exclusive updates & offers</h2>
              <p className="text-muted text-lg font-medium">
                Subscribe to get early access to new BBQ drops, exclusive recipes, and grilling tips.
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 border-2 border-white" alt="" />
                ))}
              </div>
              <p className="text-sm font-medium text-text-main uppercase tracking-widest">
                <span className="text-primary">10k+</span> members joined
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-auto flex-1 space-y-4">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Enter your email address" 
                className="bg-background border-none h-14 px-6 rounded-[12px]"
              />
              <Button size="lg" className="h-14 px-10 uppercase tracking-widest text-xs">
                Subscribe
              </Button>
            </form>
            <p className="text-[15px] text-text-muted text-center sm:text-left ml-4 uppercase tracking-widest font-medium">
              By subscribing, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
