import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../lib/store';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

const FavoritesPage = () => {
  const { favorites, toggleFavorite, openSelectionDrawer } = useStore();

  if (favorites.length === 0) {
    return (
      <main className="pt-40 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="w-24 h-24 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted">
            <Heart className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold">Your wishlist is empty</h1>
          <p className="text-text-muted max-w-md mx-auto">
            Save items you love to your wishlist and they will appear here.
          </p>
          <Link to="/products">
            <Button size="lg" className="mt-4">Explore Products</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-10">My Wishlist ({favorites.length})</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <Card key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-muted/5">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <Button 
                  variant="icon" 
                  className="absolute top-3 right-3 bg-white text-red-500 shadow-soft"
                  onClick={() => toggleFavorite(product)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-lg line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-text-muted">{product.categories[0].replace('-', ' ')}</p>
                </div>
                <p className="font-bold text-xl text-primary">${product.price}</p>
                <div className="flex gap-2">
                  <Button className="flex-1 gap-2" onClick={() => openSelectionDrawer(product)}>
                    <ShoppingCart className="w-4 h-4" /> Move to Cart
                  </Button>
                  <Link to={`/products/${product.slug}`}>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FavoritesPage;
