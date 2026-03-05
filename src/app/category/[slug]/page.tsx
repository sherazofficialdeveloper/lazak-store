import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../../../data/products';
import { ProductCard } from '../../../components/ui/ProductCard';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { ChevronRight, Home, ShoppingBag } from 'lucide-react';

const CategoryPage = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find(c => c.slug === slug);
  
  const filteredProducts = PRODUCTS.filter(p => p.categories.includes(slug || ''));

  if (!category) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-medium">Category not found</h1>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Back to products</Link>
      </div>
    );
  }

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
          <span className="text-text-main font-medium">{category.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <Badge variant="primary">{filteredProducts.length} Products</Badge>
            <h1 className="text-4xl md:text-5xl font-medium">{category.name}</h1>
            <p className="text-text-muted max-w-2xl">
              Browse our premium selection of {category.name.toLowerCase()} meticulously curated for quality and performance.
            </p>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4 bg-surface rounded-3xl border border-muted/10">
            <ShoppingBag className="w-16 h-16 text-muted/20 mx-auto" />
            <h3 className="text-xl font-medium">No products in this category yet</h3>
            <p className="text-text-muted">Check back soon for new arrivals in {category.name}.</p>
            <Link to="/products">
              <Button>Explore All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
