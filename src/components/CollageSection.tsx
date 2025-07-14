
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
      bgColor: "bg-cream",
      accent: "bg-gold-medium",
      size: "large"
    },
    {
      id: 2,
      title: "Luxe Collection", 
      subtitle: "Discover our bestselling formulas",
      buttonText: "View Collection",
      bgColor: "bg-gold-light",
      accent: "bg-gold-dark",
      size: "medium"
    },
    {
      id: 3,
      title: "Natural Beauty",
      subtitle: "Authentic ingredients for radiant skin",
      buttonText: "Explore Products",
      bgColor: "bg-gold-medium-light",
      accent: "bg-gold-medium",
      size: "medium"
    },
    {
      id: 4,
      title: "Gentle Care",
      subtitle: "Perfect for sensitive skin types",
      buttonText: "Discover",
      bgColor: "bg-gold-light",
      accent: "bg-cream",
      size: "wide"
    },
    {
      id: 5,
      title: "Anti-Aging",
      subtitle: "Turn back time with our proven formulas",
      buttonText: "Learn More",
      bgColor: "bg-gold-medium-light",
      accent: "bg-gold-dark",
      size: "wide"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="space-y-6">
          {/* First row - 3 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {collageCards.slice(0, 3).map((card) => (
              <motion.div
                key={card.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`${card.bgColor} rounded-2xl p-6 h-80 flex flex-col justify-between relative overflow-hidden group cursor-pointer`}
              >
              {/* Content */}
              <div className="z-10 relative">
                <h3 className="text-xl md:text-2xl font-clash font-bold mb-2 text-foreground group-hover:text-gold-dark transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {card.subtitle}
                </p>
              </div>
              
              {/* Button */}
              <div className="z-10 relative">
                <Link 
                  to="/shop"
                  className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-medium group/btn"
                >
                  {card.buttonText}
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className={`absolute top-3 right-3 w-8 h-8 rounded-full ${card.accent}/30 group-hover:scale-125 transition-transform`}></div>
              <div className={`absolute bottom-3 right-6 w-6 h-6 rounded-full ${card.accent}/20 group-hover:scale-110 transition-transform`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-black/10 transition-all"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Second row - 2 wide cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {collageCards.slice(3, 5).map((card) => (
              <motion.div
                key={card.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`${card.bgColor} rounded-2xl p-6 h-48 flex flex-col justify-between relative overflow-hidden group cursor-pointer`}
              >
                {/* Content */}
                <div className="z-10 relative">
                  <h3 className="text-xl md:text-2xl font-clash font-bold mb-2 text-foreground group-hover:text-gold-dark transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {card.subtitle}
                  </p>
                </div>
                
                {/* Button */}
                <div className="z-10 relative">
                  <Link 
                    to="/shop"
                    className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-medium group/btn"
                  >
                    {card.buttonText}
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className={`absolute top-3 right-3 w-8 h-8 rounded-full ${card.accent}/30 group-hover:scale-125 transition-transform`}></div>
                <div className={`absolute bottom-3 right-6 w-6 h-6 rounded-full ${card.accent}/20 group-hover:scale-110 transition-transform`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-black/10 transition-all"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollageSection;
