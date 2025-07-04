
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CollageSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Images collage */}
          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Main large image */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/661bd1f1-cf34-47a0-b9ff-8eb3571a13f9.png" 
                alt="Perfect For All Skin Types" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            
            {/* Overlay text on image */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white z-10">
              <h3 className="text-2xl md:text-3xl font-clash font-bold mb-2">
                Perfect For All Skin Types
              </h3>
              <p className="text-lg mb-6">
                Attainable & Authentic Beauty
              </p>
              <Link 
                to="/shop"
                className="inline-block bg-gold-medium text-black px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-clash font-bold">
              Skincare That Works For Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              Our carefully formulated products are designed to work harmoniously with all skin types and tones. From gentle cleansers to powerful serums, each product is crafted with premium ingredients that deliver visible results.
            </p>
            <p className="text-lg text-muted-foreground">
              Experience the difference of authentic beauty products that celebrate diversity and inclusivity, bringing out your natural radiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/shop" 
                className="btn-primary bg-gold-medium text-black hover:bg-gold-dark"
              >
                Explore Products
              </Link>
              <Link 
                to="/about" 
                className="btn-secondary"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollageSection;
