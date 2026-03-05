import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Star, ShieldCheck, Truck, Package } from 'lucide-react';
import { useStore } from '../../lib/store';
import { Button } from './Button';
import { Badge } from './Badge';
import { ProductVariant } from '../../types/product';

export const AddToCartDrawer = () => {
  const { selectedProductForCart, closeSelectionDrawer, addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);

  useEffect(() => {
    if (selectedProductForCart) {
      setQuantity(1);
      setSelectedVariant(selectedProductForCart.variants?.[0]);
    }
  }, [selectedProductForCart]);

  if (!selectedProductForCart) return null;

  const product = selectedProductForCart;
  const currentPrice = product.price + (selectedVariant?.priceModifier || 0);

  const handleConfirm = () => {
    addToCart(product, quantity, selectedVariant);
    closeSelectionDrawer();
  };

  return (
    <AnimatePresence>
      {selectedProductForCart && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSelectionDrawer}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-medium flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-muted/10 flex items-center justify-between">
              <h2 className="text-xl font-medium">Select Options</h2>
              <button 
                onClick={closeSelectionDrawer}
                className="p-2 hover:bg-muted/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Product Preview */}
              <div className="flex gap-6">
                <div className="w-32 h-32 overflow-hidden bg-muted/5 shrink-0 border border-muted/10">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-text-muted ml-1">({product.reviews} reviews)</span>
                  </div>
                  <h3 className="font-medium text-lg leading-tight uppercase tracking-tighter">{product.title}</h3>
                  <p className="text-2xl font-medium text-primary">${currentPrice.toFixed(2)}</p>
                </div>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-sm uppercase tracking-widest text-text-muted">Select Edition</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`flex items-center justify-between p-4 border-2 transition-all ${
                          selectedVariant?.id === variant.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted/10 hover:border-muted/30'
                        }`}
                      >
                        <div className="text-left">
                          <p className="font-medium uppercase text-sm">{variant.name}</p>
                          <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">
                            {variant.priceModifier === 0 ? 'Base Price' : `+$${variant.priceModifier} upgrade`}
                          </p>
                        </div>
                        <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                          selectedVariant?.id === variant.id ? 'border-primary' : 'border-muted/30'
                        }`}>
                          {selectedVariant?.id === variant.id && <div className="w-2.5 h-2.5 bg-primary" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm uppercase tracking-widest text-text-muted">Quantity</h4>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 bg-muted/5 p-1 border border-muted/10">
                    <Button 
                      variant="icon" 
                      className="w-10 h-10 rounded-none" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />-
                    </Button>
                    <span className="font-medium text-lg w-8 text-center">{quantity}</span>
                    <Button 
                      variant="icon" 
                      className="w-10 h-10 rounded-none" 
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />+
                    </Button>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-green-500 uppercase text-xs tracking-widest">In Stock</p>
                    <p className="text-text-muted text-xs">{product.stock} units available</p>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="space-y-4 pt-4 border-t border-muted/10">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>{product.deliveryInfo}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>2-Year LAZAK Premium Warranty</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Free Returns within 30 days</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-muted/10 bg-muted/5 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-muted font-medium uppercase text-xs tracking-widest">Total Price</span>
                <span className="text-2xl font-medium text-primary">${(currentPrice * quantity).toFixed(2)}</span>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-none h-14 uppercase tracking-widest text-xs font-medium"
                  onClick={closeSelectionDrawer}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-none h-14 shadow-md hover:shadow-lg uppercase tracking-widest text-xs font-medium"
                  onClick={handleConfirm}
                >
                  Confirm Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
