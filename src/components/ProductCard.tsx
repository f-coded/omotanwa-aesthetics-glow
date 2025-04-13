
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCountry } from '@/contexts/CountryContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { formatPrice } = useCountry();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <Link to={`/product/${product.id}`}>
      <motion.div 
        className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {product.newArrival && (
            <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              New
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <StarIcon size={16} className="text-gold fill-current" />
              <span className="ml-1 text-sm">{product.rating}</span>
            </div>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              {product.reviews.length} reviews
            </span>
          </div>
          <h3 className="font-medium mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-medium">{formatPrice(product.price)}</span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-brand hover:bg-brand-200"
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
