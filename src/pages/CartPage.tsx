
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useCountry } from '@/contexts/CountryContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const { formatPrice } = useCountry();
  
  const handleQuantityChange = (productId: string, currentQty: number, change: number) => {
    const newQty = currentQty + change;
    if (newQty >= 1) {
      updateQuantity(productId, newQty);
    }
  };
  
  // Shipping calculation (could be more complex in real implementation)
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Your Cart</h1>
        {cartItems.length > 0 && (
          <p className="text-muted-foreground">
            You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        )}
      </motion.div>

      {cartItems.length === 0 ? (
        <motion.div 
          className="text-center py-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-100 rounded-full mb-6">
            <ShoppingBag size={32} className="text-brand-500" />
          </div>
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center">
            Continue Shopping <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <motion.div 
            className="lg:col-span-2"
            variants={staggerItems}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex justify-between items-center pb-6 border-b border-border mb-6">
                <h2 className="font-medium">Cart Items</h2>
                <button 
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <motion.div 
                    key={item.product.id}
                    variants={fadeIn}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:text-brand-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-sm text-muted-foreground">{formatPrice(item.product.price)}</div>
                    </div>
                    
                    <div className="flex items-center border border-border rounded-lg">
                      <button 
                        onClick={() => handleQuantityChange(item.product.id, item.quantity, -1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.product.id, item.quantity, 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <div className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <X size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="font-medium border-b border-border pb-4 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              <Link to="/checkout" className="btn-primary w-full mt-8 flex items-center justify-center">
                Proceed to Checkout <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link 
                to="/shop" 
                className="text-sm text-center block mt-4 text-muted-foreground hover:text-foreground"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
