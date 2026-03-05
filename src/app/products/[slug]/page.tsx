import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../../data/products';
import { useStore } from '../../../lib/store';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCw, ChevronRight, Home } from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { openSelectionDrawer, toggleFavorite, isFavorite } = useStore();
  
  const product = PRODUCTS.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-medium">Product not found</h1>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Back to products</Link>
      </div>
    );
  }

  const favorite = isFavorite(product.id);

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-main font-medium">{product.title}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted/5 border border-muted/10 shadow-soft">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-muted/10 cursor-pointer hover:border-primary transition-all shadow-sm">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          
            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="accent" className="rounded-none font-medium uppercase tracking-widest text-[10px]">In Stock</Badge>
                  {product.hasFreeShipping && (
                    <Badge variant="secondary" className="rounded-none font-medium uppercase tracking-widest text-[10px]">Free Shipping</Badge>
                  )}
                  {product.categories.map(cat => (
                    <Badge key={cat} variant="primary" className="bg-primary/5 rounded-none font-medium uppercase tracking-widest text-[10px]">{cat.replace('-', ' ')}</Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase leading-none">{product.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted/20'}`} />
                    ))}
                    <span className="ml-2 font-medium text-text-main text-sm">{product.rating}</span>
                  </div>
                  <span className="text-text-muted text-sm font-medium uppercase tracking-widest">({product.reviews} Verified Reviews)</span>
                </div>
                <div className="flex items-baseline gap-4 pt-2">
                  <span className="text-5xl font-medium text-secondary">${product.price}</span>
                  <span className="text-xl text-text-muted line-through opacity-40 font-medium">$ {(product.price * 1.2).toFixed(2)}</span>
                </div>
                <p className="text-text-muted text-lg leading-relaxed font-medium max-w-xl">
                  {product.description}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-sm uppercase tracking-[0.2em] text-secondary">Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-muted bg-surface p-4 border border-muted/10 group hover:border-primary transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-medium uppercase tracking-widest">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="flex-1 gap-3 rounded-none h-16 text-lg font-medium uppercase tracking-widest shadow-xl hover:translate-y-[-2px] transition-all" 
                    onClick={() => openSelectionDrawer(product)}
                  >
                    <ShoppingCart className="w-6 h-6" /> Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="gap-2 rounded-none h-16 px-10 border-2"
                    onClick={() => toggleFavorite(product)}
                  >
                    <Heart className={`w-6 h-6 ${favorite ? 'fill-current text-accent' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Detailed Description Sections */}
              <div className="space-y-10 pt-10 border-t border-muted/10">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium uppercase tracking-tighter">Product Overview</h3>
                  <div className="prose prose-sm max-w-none text-text-muted">
                    {product.fullDescription ? (
                      <div className="whitespace-pre-line leading-relaxed text-base font-medium">
                        {product.fullDescription}
                      </div>
                    ) : (
                      <p className="leading-relaxed text-base font-medium">{product.description}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 bg-muted/5 border border-muted/10">
                    <div className="flex items-center gap-3 text-primary">
                      <Truck className="w-6 h-6" />
                      <h4 className="font-medium uppercase tracking-widest text-sm">Shipping Information</h4>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                      Orders are processed within 24-48 hours. We offer free standard shipping on all orders over $50 within the continental USA. Typical delivery time is 3-5 business days via UPS or FedEx.
                    </p>
                  </div>
                  <div className="space-y-4 p-6 bg-muted/5 border border-muted/10">
                    <div className="flex items-center gap-3 text-primary">
                      <RefreshCw className="w-6 h-6" />
                      <h4 className="font-medium uppercase tracking-widest text-sm">Return Policy</h4>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                      Not satisfied? We offer a 30-day hassle-free return policy. If the product doesn't meet your expectations, simply return it in its original packaging for a full refund. No questions asked.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-muted/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="text-[10px]">
                    <p className="font-medium uppercase tracking-widest">Free Shipping</p>
                    <p className="text-text-muted font-medium">Orders Over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-[10px]">
                    <p className="font-medium uppercase tracking-widest">2 Year Warranty</p>
                    <p className="text-text-muted font-medium">Full USA Coverage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div className="text-[10px]">
                    <p className="font-medium uppercase tracking-widest">30 Day Returns</p>
                    <p className="text-text-muted font-medium">Hassle-Free</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
