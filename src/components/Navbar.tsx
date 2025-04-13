
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useCountry } from '@/contexts/CountryContext';
import CountrySelector from './CountrySelector';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-medium">
            Omotanwa MI
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            Shop
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium hover:text-brand-600 transition-colors">
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 min-w-[200px]">
              <Link 
                to="/about" 
                className="block py-2 text-sm hover:text-brand-600"
              >
                Our Story
              </Link>
              <Link 
                to="/ingredients" 
                className="block py-2 text-sm hover:text-brand-600"
              >
                Ingredients
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-brand-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <CountrySelector />
          
          <Link to="/account" className="p-2 hover:text-brand-600 transition-colors">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="p-2 hover:text-brand-600 transition-colors relative">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs" 
                variant="outline"
              >
                {itemCount}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium py-2 hover:text-brand-600"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm font-medium py-2 hover:text-brand-600"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium py-2 hover:text-brand-600"
              >
                Our Story
              </Link>
              <Link
                to="/ingredients"
                className="text-sm font-medium py-2 hover:text-brand-600"
              >
                Ingredients
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium py-2 hover:text-brand-600"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
