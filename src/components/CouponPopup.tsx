
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CouponPopupProps {
  discount: string;
  code: string;
  expiry: string;
  delay?: number;
}

const CouponPopup: React.FC<CouponPopupProps> = ({ discount, code, expiry, delay = 5000 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  
  useEffect(() => {
    // Check if the popup has been closed before
    const hasClosedPopup = localStorage.getItem('couponPopupClosed');
    
    if (!hasClosedPopup) {
      // Show popup after delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay]);
  
  const handleClose = () => {
    setIsOpen(false);
    setIsClosed(true);
    // Set cookie/localStorage to remember the user closed it
    localStorage.setItem('couponPopupClosed', 'true');
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    // You can add toast notification here
    console.log('Code copied!');
  };
  
  return (
    <AnimatePresence>
      {isOpen && !isClosed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50" onClick={handleClose}></div>
          
          <motion.div 
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 overflow-hidden"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-light rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold-medium-light rounded-full opacity-40"></div>
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>
            
            <div className="text-center relative z-10">
              <div className="font-quincy text-2xl mb-1">Special Offer</div>
              <div className="text-5xl font-quincy font-bold text-gold-dark mb-4">
                {discount}% OFF
              </div>
              
              <p className="text-muted-foreground mb-6">
                Use this code at checkout to receive {discount}% off your first order!
              </p>
              
              <div 
                className="bg-gray-100 border border-gray-200 rounded-lg p-3 flex items-center justify-between mb-4 cursor-pointer"
                onClick={handleCopy}
              >
                <span className="font-semibold tracking-wider">{code}</span>
                <span className="text-sm text-muted-foreground">Click to copy</span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Valid until {expiry}
              </p>
              
              <button 
                className="mt-6 btn-primary bg-gold-medium hover:bg-gold-dark text-black w-full"
                onClick={handleClose}
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CouponPopup;
