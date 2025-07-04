
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const collageCards = [
    {
      id: 1,
      title: "Premium Skincare",
      subtitle: "Get 20% off with code: GLOW20",
      buttonText: "Shop Now",
      bgColor: "bg-cream"
    },
    {
      id: 2,
      title: "Luxe Collection", 
      subtitle: "Discover our bestselling formulas",
      buttonText: "View Collection",
      bgColor: "bg-gold-light"
    },
    {
      id: 3,
      title: "Natural Beauty",
      subtitle: "Authentic ingredients for radiant skin",
      buttonText: "Explore Products",
      bgColor: "bg-gold-medium-light"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {collageCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              className={`${card.bgColor} rounded-2xl p-8 h-80 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Content */}
              <div className="z-10 relative">
                <h3 className="text-2xl md:text-3xl font-clash font-bold mb-3 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {card.subtitle}
                </p>
              </div>
              
              {/* Button */}
              <div className="z-10 relative">
                <Link 
                  to="/shop"
                  className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-medium group"
                >
                  {card.buttonText}
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold-medium/20"></div>
              <div className="absolute bottom-4 right-8 w-8 h-8 rounded-full bg-gold-dark/10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollageSection;
