import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';

export const Toast = () => {
  const { toast, hideToast, cartCount, cartTotal } = useStore();

  return (
    <AnimatePresence>
      {toast?.isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[100] w-full max-w-md px-4"
        >
          <div className="bg-text-main text-white p-5 rounded-3xl shadow-2xl flex flex-col gap-4 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">{toast.message}</p>
                  <p className="text-xs text-white/60 mt-0.5">Successfully added to your collection</p>
                </div>
              </div>
              <button 
                onClick={hideToast}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Cart Status</p>
                  <p className="text-sm font-bold">{cartCount} {cartCount === 1 ? 'Item' : 'Items'} • ${cartTotal.toFixed(2)}</p>
                </div>
              </div>
              <Link to="/cart" onClick={hideToast}>
                <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  View Cart <ArrowRight className="w-3 h-3" />
                </button>
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="/cart" className="flex-1" onClick={hideToast}>
                <button className="w-full py-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Checkout Now
                </button>
              </Link>
              <button 
                onClick={hideToast}
                className="px-6 py-3 bg-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/20 transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
