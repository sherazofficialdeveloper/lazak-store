import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_ARTICLES } from '../../data/products';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          {...sectionVariants}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <Badge variant="secondary">LAZAK Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-medium">Grill Master Insights</h1>
          <p className="text-text-muted">Stay updated with the latest trends in premium BBQ and kitchen essentials.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col md:flex-row h-full rounded-[24px] shadow-soft border-muted/5 overflow-hidden group hover:shadow-medium transition-all duration-300">
                <div className="md:w-[40%] h-64 md:h-auto overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-white/90 backdrop-blur-md text-primary border-none shadow-sm">
                      {article.date.split(',')[0]}
                    </Badge>
                  </div>
                </div>
                <div className="md:w-[60%] p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] text-text-muted font-medium uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-primary" /> {article.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-primary" /> {article.author}</span>
                    </div>
                    <h2 className="text-2xl font-medium leading-tight group-hover:text-primary transition-colors">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="text-text-muted line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm uppercase tracking-widest">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
