import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../../../data/products';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-medium">Article not found</h1>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">Back to blog</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary">Technology</Badge>
            <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted border-b border-muted/10 pb-8">
              <div className="flex items-center gap-2">
                <img src={`https://i.pravatar.cc/100?u=${article.author}`} className="w-8 h-8 rounded-full" alt="" />
                <span className="font-medium text-text-main">{article.author}</span>
              </div>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> 12 Comments</span>
            </div>
          </div>
          
          <div className="aspect-video rounded-3xl overflow-hidden shadow-medium">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-6">
            <p className="text-xl text-text-main font-medium leading-relaxed">
              {article.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-medium text-text-main pt-4">The Evolution of Premium Tech</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-text-main bg-primary/5 rounded-r-xl">
              "Technology is best when it brings people together and elevates our daily experiences."
            </blockquote>
            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
          </div>
          
          <div className="pt-12 border-t border-muted/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-widest text-text-muted">Share:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              {['Tech', 'Gadgets', 'Lifestyle'].map(tag => (
                <Badge key={tag} variant="outline" className="bg-muted/5">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetailPage;
