import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './lib/store';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AddToCartDrawer } from './components/ui/AddToCartDrawer';
import { Toast } from './components/ui/Toast';

// Pages
import HomePage from './app/page';
import ProductsPage from './app/products/page';
import ProductDetailPage from './app/products/[slug]/page';
import CategoryPage from './app/category/[slug]/page';
import BlogPage from './app/blog/page';
import BlogDetailPage from './app/blog/[slug]/page';
import ContactPage from './app/contact/page';
import LoginPage from './app/login/page';
import SignupPage from './app/signup/page';
import CartPage from './app/cart/page';
import FavoritesPage from './app/favorites/page';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </div>
          <Footer />
          <AddToCartDrawer />
          <Toast />
        </div>
      </Router>
    </StoreProvider>
  );
}
