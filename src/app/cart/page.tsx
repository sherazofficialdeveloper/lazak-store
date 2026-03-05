import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../lib/store';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <main className="pt-40 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="w-24 h-24 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-medium">Your cart is empty</h1>
          <p className="text-text-muted max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Explore our premium collection to find something you love.
          </p>
          <Link to="/products">
            <Button size="lg" className="mt-4">Start Shopping</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-medium mb-10">Shopping Cart ({cart.length})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <Card key={`${item.id}-${item.selectedVariant?.id || 'base'}`} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-muted/5 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      {item.selectedVariant && (
                        <p className="text-xs font-medium text-primary uppercase tracking-widest mt-1">
                          {item.selectedVariant.name}
                        </p>
                      )}
                      <p className="text-sm text-text-muted">{item.categories[0].replace('-', ' ')}</p>
                    </div>
                    <p className="font-medium text-lg">
                      ${(item.price + (item.selectedVariant?.priceModifier || 0)).toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-muted/5 rounded-full p-1 border border-muted/10">
                      <Button 
                        variant="icon" 
                        className="w-8 h-8" 
                        onClick={() => updateQuantity(item.id, -1, item.selectedVariant?.id)}
                      >
                        <Minus className="w-4 h-4" />-
                      </Button>
                      <span className="font-medium w-6 text-center">{item.quantity}</span>
                      <Button 
                        variant="icon" 
                        className="w-8 h-8" 
                        onClick={() => updateQuantity(item.id, 1, item.selectedVariant?.id)}
                      >
                        <Plus className="w-4 h-4" />+
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-red-500 hover:bg-red-50"
                      onClick={() => removeFromCart(item.id, item.selectedVariant?.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Summary */}
          <div className="space-y-6">
            <Card className="p-8 space-y-6">
              <h2 className="text-xl font-medium border-b border-muted/10 pb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-text-muted">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-xl font-medium pt-4 border-t border-muted/10">
                  <span>Total</span>
                  <span className="text-primary">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full gap-2" size="lg">
                Checkout Now <ArrowRight className="w-4 h-4" />
              </Button>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Secure checkout powered by Stripe
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <Truck className="w-4 h-4 text-primary" /> Free express shipping included
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
