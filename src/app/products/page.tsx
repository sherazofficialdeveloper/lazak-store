import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { ProductCard } from '../../components/ui/ProductCard';
import { Badge } from '../../components/ui/Badge';
import { Filter, ChevronDown, LayoutGrid, List, Search } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  // Update state when URL changes (e.g., back button)
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
  }, [searchParams]);

  // Update URL when state changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categories.includes(selectedCategory));
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price Filter
    result = result.filter(p => p.price <= maxPrice);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery, maxPrice]);

  const displayedProducts = useMemo(() => {
    if (selectedCategory === 'all' && !searchQuery) {
      const result: Array<{ category: (typeof CATEGORIES)[0]; product: (typeof PRODUCTS)[0] }> = [];
      const usedProductIds = new Set<string>();

      for (const category of CATEGORIES) {
        if (result.length >= 6) break;
        const product = filteredProducts.find(
          (p) => p.categories.includes(category.slug) && !usedProductIds.has(p.id)
        );
        if (product) {
          result.push({ category, product });
          usedProductIds.add(product.id);
        }
      }
      return result;
    }

    // For specific category or search, show all matching products up to 6
    return filteredProducts.slice(0, 6).map(p => ({
      product: p,
      category: CATEGORIES.find(c => p.categories.includes(c.slug)) || CATEGORIES[0]
    }));
  }, [filteredProducts, selectedCategory, searchQuery]);

  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col md:flex-row gap-10"
          initial="initial"
          animate="whileInView"
          variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Sidebar Filters */}
          <motion.aside 
            variants={sectionVariants}
            className="w-full md:w-64 space-y-8 shrink-0"
          >
            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b border-muted/10 pb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleCategoryChange('all')}
                  className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                    selectedCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'
                  }`}
                >
                  All Products
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                      selectedCategory === cat.slug ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b border-muted/10 pb-2">Price Range</h3>
              <div className="space-y-4">
                <input 
                  type="range" 
                  className="w-full accent-primary cursor-pointer" 
                  min="0" 
                  max="1000" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                />
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>$0</span>
                  <span className="font-medium text-primary">Up to ${maxPrice}</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-medium text-primary mb-2">USA Support</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                All products ship from our USA warehouses with 24/7 local support.
              </p>
            </div>
          </motion.aside>

          {/* Product Grid Area */}
          <motion.div 
            variants={sectionVariants}
            className="flex-1 space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-4 rounded-xl border border-muted/10">
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted font-medium">
                  Showing <span className="text-text-main font-medium">{displayedProducts.length}</span> of <span className="text-text-main font-medium">{PRODUCTS.length}</span> products
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-background border border-muted/10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-muted/10 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating: High to Low</option>
                </select>
              </div>
            </div>

            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 uw:grid-cols-4 gap-10">
                {displayedProducts.map(({ product }, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <div className="w-20 h-20 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium">No products found</h3>
                <p className="text-text-muted">Try adjusting your filters or search query.</p>
                <Button variant="outline" onClick={() => {
                  handleCategoryChange('all');
                  setSearchQuery('');
                  setSortBy('newest');
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProductsPage;
