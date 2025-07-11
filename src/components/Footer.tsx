
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gold-light/20 via-white to-gold-medium-light/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-gold-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gold-dark rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link to="/" className="inline-block mb-6">
            <img 
              src="/lovable-uploads/9648dddb-d917-436c-bb90-90b78f3a83f6.png" 
              alt="Omotanwa MI" 
              className="h-12 w-auto mx-auto"
            />
          </Link>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Crafting premium skincare experiences with love and science.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold-medium flex items-center justify-center hover:shadow-lg transition-all"
            >
              <Instagram size={20} className="text-gold-dark" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold-medium flex items-center justify-center hover:shadow-lg transition-all"
            >
              <Twitter size={20} className="text-gold-dark" />
            </motion.a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-gold-dark transition-colors">
              Our Story
            </Link>
            <Link to="/shop" className="text-muted-foreground hover:text-gold-dark transition-colors">
              Shop
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-gold-dark transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="border-t border-gold-medium/20 pt-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>We accept:</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-[8px] font-bold flex items-center justify-center">VISA</div>
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-[8px] font-bold flex items-center justify-center">MC</div>
                  <div className="w-8 h-5 bg-purple-600 rounded text-white text-[8px] font-bold flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart size={12} className="text-red-400" /> by Omotanwa MI Aesthetics 
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
