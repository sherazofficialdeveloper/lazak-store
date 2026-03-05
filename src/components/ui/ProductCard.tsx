import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Product } from '../../types/product';
import { useStore } from '../../lib/store';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { openSelectionDrawer, toggleFavorite, isFavorite } = useStore();
  const favorite = isFavorite(product.id);

  const tierBadge = () => {
    switch (product.tier) {
      case 'budget':
        return (
          <Badge variant="secondary" className="rounded-none font-medium text-[10px] uppercase tracking-widest bg-blue-500 text-white border-none">
            Starter
          </Badge>
        );
      case 'standard':
        return (
          <Badge variant="accent" className="rounded-none font-medium text-[10px] uppercase tracking-widest">
            Best Seller
          </Badge>
        );
      case 'premium':
        return (
          <Badge variant="primary" className="rounded-none font-medium text-[10px] uppercase tracking-widest bg-primary text-white border-none">
            Pro Choice
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`group flex flex-col bg-surface relative h-full border border-muted/5 rounded-[18px] shadow-soft overflow-hidden ${product.tier === 'premium' ? 'ring-2 ring-primary ring-inset' : ''}`}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
        {tierBadge()}
        {product.tier === 'premium' && (
          <Badge variant="accent" className="rounded-none font-medium text-[10px] uppercase tracking-widest bg-accent text-white border-none">
            Best Value
          </Badge>
        )}
        {product.hasFreeShipping && (
          <Badge variant="secondary" className="rounded-none font-medium text-[10px] uppercase tracking-widest">
            Free Shipping
          </Badge>
        )}
      </div>

      <div className="relative aspect-square overflow-hidden bg-muted/5">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-3">
            <Button 
              variant="icon" 
              size="icon"
              className="bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-[10px] w-12 h-12"
              onClick={() => toggleFavorite(product)}
              title="Add to Favorites"
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-accent text-accent' : ''}`} strokeWidth={2.5} />
            </Button>
            <Link to={`/products/${product.slug}`}>
              <Button 
                variant="icon" 
                size="icon"
                className="bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-[10px] w-12 h-12"
                title="Quick View"
              >
                <Eye className="w-5 h-5" strokeWidth={2.5} />
              </Button>
            </Link>
          </div>
          
          <Button 
            className="rounded-[12px] px-8 py-3 bg-primary text-white font-medium uppercase tracking-widest text-xs"
            onClick={() => openSelectionDrawer(product)}
          >
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-widest">
              {product.categories[0].replace(/-/g, ' ')}
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted/30'}`} 
                />
              ))}
              <span className="text-[10px] font-medium ml-1 text-text-muted">({product.reviews})</span>
            </div>
          </div>
          
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-medium text-lg hover:text-primary transition-colors line-clamp-2 uppercase tracking-tight leading-tight min-h-[3rem]">
              {product.title}
            </h3>
          </Link>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-secondary">${product.price}</span>
              {product.hasFreeShipping && (
                <span className="text-[9px] text-emerald-600 font-medium uppercase tracking-widest">Free Shipping</span>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              size="sm" 
              className="rounded-[10px] uppercase tracking-widest text-[10px] font-medium h-10"
              onClick={() => openSelectionDrawer(product)}
            >
              Add to Cart
            </Button>
            <Link to={`/products/${product.slug}`} className="w-full">
              <Button 
                size="sm" 
                variant="outline"
                className="w-full rounded-[10px] uppercase tracking-widest text-[10px] font-medium h-10"
              >
                View Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
