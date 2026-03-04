import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useStore } from '../../lib/store';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, favoriteCount } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-surface/90 backdrop-blur-xl shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-4 h-4 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search premium BBQ & Kitchen gear..." 
                className="w-full pl-12 pr-4 py-3 bg-muted/5 border border-muted/10 rounded-full focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white focus:border-primary transition-all text-sm font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-bold transition-all hover:text-primary relative group ${
                    location.pathname === link.path ? 'text-primary' : 'text-text-main'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link to="/favorites" className="relative p-2.5 hover:bg-primary/5 rounded-full transition-all group">
                <Heart className={`w-5 h-5 transition-colors ${favoriteCount > 0 ? 'text-red-500 fill-current' : 'text-text-main group-hover:text-primary'}`} />
                {favoriteCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-surface shadow-sm">
                    {favoriteCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative p-2.5 hover:bg-primary/5 rounded-full transition-all group">
                <ShoppingCart className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-surface shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>
              <div className="w-px h-6 bg-muted/20 mx-2" />
              <Link to="/login">
                <Button variant="primary" size="sm" className="hidden lg:flex items-center gap-2 rounded-full px-6 shadow-sm hover:shadow-md">
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2.5 hover:bg-muted/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-muted/10 overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-10 pr-4 bg-muted/5 border border-muted/10 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="text-lg font-medium border-b border-muted/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link to="/favorites" className="flex items-center gap-2 text-lg font-medium">
                  <Heart className="w-5 h-5" /> Favorites ({favoriteCount})
                </Link>
                <Link to="/cart" className="flex items-center gap-2 text-lg font-medium">
                  <ShoppingCart className="w-5 h-5" /> Cart ({cartCount})
                </Link>
              </div>
              <Link to="/login" className="block py-3">
                <Button className="w-full py-3">Sign In</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
