import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ProductVariant } from '../types/product';

interface StoreContextType {
  cart: CartItem[];
  favorites: Product[];
  addToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, delta: number, variantId?: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  cartTotal: number;
  cartCount: number;
  favoriteCount: number;
  
  // Selection Drawer State
  selectedProductForCart: Product | null;
  openSelectionDrawer: (product: Product) => void;
  closeSelectionDrawer: () => void;
  
  // Toast State
  toast: { message: string; isVisible: boolean } | null;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('lazak_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<Product[]>(() => {
    const saved = localStorage.getItem('lazak_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedProductForCart, setSelectedProductForCart] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ message: string; isVisible: boolean } | null>(null);

  useEffect(() => {
    localStorage.setItem('lazak_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('lazak_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const openSelectionDrawer = (product: Product) => setSelectedProductForCart(product);
  const closeSelectionDrawer = () => setSelectedProductForCart(null);

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => hideToast(), 3000);
  };

  const hideToast = () => setToast(prev => prev ? { ...prev, isVisible: false } : null);

  const addToCart = (product: Product, quantity: number, variant?: ProductVariant) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && item.selectedVariant?.id === variant?.id
      );
      
      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + quantity
        };
        return newCart;
      }
      
      return [...prev, { ...product, quantity, selectedVariant: variant }];
    });
    
    showToast(`${product.title} added to your cart`);
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCart(prev => prev.filter(item => 
      !(item.id === productId && item.selectedVariant?.id === variantId)
    ));
  };

  const updateQuantity = (productId: string, delta: number, variantId?: string) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId && item.selectedVariant?.id === variantId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some(item => item.id === productId);
  };

  const cartTotal = cart.reduce((total, item) => {
    const basePrice = item.price;
    const modifier = item.selectedVariant?.priceModifier || 0;
    return total + ((basePrice + modifier) * item.quantity);
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const favoriteCount = favorites.length;

  return (
    <StoreContext.Provider value={{
      cart,
      favorites,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      isFavorite,
      cartTotal,
      cartCount,
      favoriteCount,
      selectedProductForCart,
      openSelectionDrawer,
      closeSelectionDrawer,
      toast,
      showToast,
      hideToast
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
