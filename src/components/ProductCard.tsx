
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCountry } from '@/contexts/CountryContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { StarIcon, Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { formatPrice } = useCountry();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <Link to={`/product/${product.id}`}>
      <motion.div 
        className="bg-white rounded-3xl overflow-hidden border border-gold-light/20 hover:border-gold-medium/40 transition-all duration-300 group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="aspect-square overflow-hidden relative">
          <motion.img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Labels */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.newArrival && (
              <div className="bg-gradient-to-r from-gold-medium to-gold-dark text-black text-xs font-semibold px-3 py-1 rounded-full">
                New
              </div>
            )}
          </div>

          {/* Wishlist button */}
          <motion.button
            onClick={handleWishlist}
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
          </motion.button>

          {/* Quick add button - shows on hover */}
          <motion.button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-gold-medium hover:bg-gold-dark text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
        
        <div className="p-6">
          {/* Rating and reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <StarIcon size={14} className="text-gold-medium fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-muted-foreground">
              {product.reviews.length} reviews
            </span>
          </div>

          {/* Product name */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-gold-dark transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Price and add to cart */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gold-dark">
              {formatPrice(product.price)}
            </span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-gold-medium hover:bg-gold-dark text-black border-0 px-6 py-2 rounded-full font-medium transition-all duration-300"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
