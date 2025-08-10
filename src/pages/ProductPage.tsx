
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ChevronRight, ChevronLeft, Minus, Plus, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from '../data/products';
import { useCart } from '@/contexts/CartContext';
import { useCountry } from '@/contexts/CountryContext';
import ProductCard from '@/components/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { formatPrice } = useCountry();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 3);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product not found</h2>
          <p className="text-muted-foreground mb-6">
            The product you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const nextImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };
  
  const selectImage = (index: number) => {
    setActiveImageIndex(index);
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <span className="text-muted-foreground">/</span>
            <li>
              <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
            </li>
            <span className="text-muted-foreground">/</span>
            <li>
              <Link 
                to={`/shop?category=${product.category}`} 
                className="text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <span className="text-muted-foreground">/</span>
            <li className="font-medium truncate max-w-[160px] md:max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <motion.div 
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4 relative">
            <motion.img 
              src={product.images[activeImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
              key={activeImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Image navigation controls */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-center space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden relative ${
                  activeImageIndex === index ? 'ring-2 ring-brand-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Product Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-brand-100 text-brand-700 text-xs font-medium px-3 py-1 rounded-full capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={16}
                  className={`${
                    star <= product.rating ? 'text-gold fill-current' : 'text-gray-300'
                  } mr-1`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm">
              {product.rating} ({product.reviews.length} reviews)
            </span>
          </div>
          
          <p className="text-lg font-medium mb-6">{formatPrice(product.price)}</p>
          
          <p className="text-muted-foreground mb-8">{product.description}</p>
          
          {/* Stock indicator */}
          <div className="flex items-center mb-6">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span>
              {product.stock > 10 
                ? 'In Stock' 
                : product.stock > 0 
                  ? `Only ${product.stock} left in stock` 
                  : 'Out of Stock'}
            </span>
          </div>
          
          {/* Quantity selector */}
          <div className="flex items-center mb-6">
            <span className="text-sm mr-4">Quantity:</span>
            <div className="flex items-center border border-border rounded-lg">
              <button 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          {/* Add to cart button */}
          <Button 
            onClick={handleAddToCart} 
            className="w-full btn-primary"
            disabled={product.stock <= 0}
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Product Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="details">
          <TabsList className="mb-6 border-b border-border w-full justify-start rounded-none bg-transparent">
            <TabsTrigger 
              value="details"
              className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none"
            >
              Details
            </TabsTrigger>
            <TabsTrigger 
              value="ingredients"
              className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger 
              value="how-to-use"
              className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none"
            >
              How to Use
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none"
            >
              Reviews ({product.reviews.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">Benefits</h3>
              <p className="text-muted-foreground mb-6">{product.benefits}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="ingredients">
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">Ingredients</h3>
              <p className="text-muted-foreground">{product.ingredients}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="how-to-use">
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-4">How to Use</h3>
              <p className="text-muted-foreground">{product.howToUse}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="max-w-3xl">
              <h3 className="text-lg font-medium mb-6">Customer Reviews</h3>
              
              {product.reviews.length === 0 ? (
                <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
              ) : (
                <div className="space-y-8">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              size={14}
                              className={`${
                                star <= review.rating ? 'text-gold fill-current' : 'text-gray-300'
                              } mr-1`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">{review.userName}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif mb-8">You May Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
