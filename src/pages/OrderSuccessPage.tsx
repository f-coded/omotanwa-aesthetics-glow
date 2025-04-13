
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Package } from 'lucide-react';

const OrderSuccessPage: React.FC = () => {
  // Generate a random order number
  const orderNumber = `OMA-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Animation for the check mark
  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10,
        delay: 0.2
      }
    }
  };
  
  // Animation for the package icon - fixed to use proper repeatType value
  const packageVariants = {
    hidden: { y: 0 },
    visible: { 
      y: [0, -15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 1
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Icon */}
        <motion.div 
          className="inline-flex items-center justify-center w-24 h-24 bg-brand-100 rounded-full mb-8"
          variants={checkmarkVariants}
        >
          <CheckCircle size={48} className="text-brand-500" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl font-serif mb-4"
          variants={itemVariants}
        >
          Thank you for your order!
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-8"
          variants={itemVariants}
        >
          Your order has been received and is now being processed.
        </motion.p>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-soft p-8 mb-12"
          variants={itemVariants}
        >
          <h2 className="font-medium mb-4">Order #{orderNumber}</h2>
          <p className="text-muted-foreground mb-6">
            A confirmation email has been sent to your email address.
          </p>
          
          <div className="h-[1px] bg-border w-full mb-6"></div>
          
          <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Order Date</div>
              <div className="font-medium">{new Date().toLocaleDateString()}</div>
            </div>
            
            <div className="h-10 w-[1px] bg-border"></div>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Estimated Delivery</div>
              <div className="font-medium">3-5 Business Days</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-brand-100 rounded-2xl p-8 mb-12 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="relative z-10">
            <h3 className="font-medium mb-2">Your package is on its way!</h3>
            <p className="text-muted-foreground">
              We'll notify you when your order has shipped.
            </p>
          </div>
          
          <motion.div 
            className="absolute top-1/2 right-8 transform -translate-y-1/2"
            variants={packageVariants}
          >
            <Package size={48} className="text-brand-500" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link to="/shop" className="btn-primary flex items-center">
            Continue Shopping <ArrowRight size={16} className="ml-2" />
          </Link>
          
          <Link to="/account" className="btn-secondary">
            View Order History
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OrderSuccessPage;
