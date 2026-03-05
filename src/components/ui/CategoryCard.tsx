import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import * as Icons from 'lucide-react';
import { Category } from '../../types/product';
import { PRODUCTS } from '../../data/products';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = (Icons as any)[category.icon] || Icons.HelpCircle;
  const productCount = PRODUCTS.filter(p => p.categories.includes(category.slug)).length;

  return (
    <Link to={`/category/${category.slug}`} className="block group">
      <Card className="p-8 text-center border border-muted/5 relative overflow-hidden bg-surface rounded-[18px] shadow-soft">
        <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10 rounded-[14px]">
          <IconComponent className="w-10 h-10 text-primary" />
        </div>
        
        <div className="relative z-10">
          <h3 className="font-medium text-xl mb-2 tracking-tight group-hover:text-primary transition-colors uppercase">{category.name}</h3>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/5 border border-muted/10 rounded-[8px]">
            <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
              {productCount} {productCount === 1 ? 'Item' : 'Items'}
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-2 text-primary font-medium text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Shop Now <Icons.ArrowRight className="w-3 h-3" />
        </div>
      </Card>
    </Link>
  );
};
