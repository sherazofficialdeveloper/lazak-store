import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck, Zap, Star } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-background overflow-hidden">
      {/* Left Side - Branding Section */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative p-12 flex-col justify-between text-white overflow-hidden">
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 z-0" />
        
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center gap-2 text-white/90 hover:text-white transition-all text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Brand Content */}
        <div className="relative z-10 space-y-12 max-w-lg">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl lg:text-6xl font-medium leading-tight"
            >
              Welcome to <br />
              <span className="text-white">LAZAK</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              Durable. Professional. American Standard Quality. Connecting you with premium BBQ gear and essentials.
            </motion.p>
          </div>

          {/* Feature Highlight Cards */}
          <div className="space-y-4">
            {[
              { icon: CheckCircle, text: "10,000+ Verified Service Providers" },
              { icon: ShieldCheck, text: "Secure Payment & Data Protection" },
              { icon: Zap, text: "Real-time Service Tracking" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-soft"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-medium max-w-md"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/user1/100/100" 
                alt="User Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-medium">Ahmad Khan</p>
              <p className="text-xs text-white/60">Verified Client</p>
            </div>
          </div>
          <p className="text-sm text-white/90 italic leading-relaxed mb-3">
            "Excellent service! Found a reliable electrician within minutes. Highly recommend LAZAK for all your household needs."
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side - Auth Card Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        {/* Mobile Back Link */}
        <div className="w-full max-w-md mb-6 md:hidden">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-surface p-8 md:p-10 rounded-3xl shadow-medium border border-muted/5 space-y-8"
        >
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-medium text-xl">L</span>
              </div>
            </div>
            <h2 className="text-3xl font-medium text-secondary">{title}</h2>
            <p className="text-text-muted text-sm">{subtitle}</p>
          </div>

          {children}
        </motion.div>
      </div>
    </main>
  );
};
