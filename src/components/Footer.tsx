
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-xl font-quincy font-medium">Omotanwa MI</h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              An Experience, a Lifestyle. Premium skincare products crafted with love and science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold-dark transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=cleansers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cleansers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=serums" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Serums
                </Link>
              </li>
              <li>
                <Link to="/shop?category=moisturizers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Moisturizers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=masks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Masks
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bundles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Omotanwa MI Aesthetics. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
