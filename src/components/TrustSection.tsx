
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Truck, FileCheck } from 'lucide-react';

const TrustSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const iconFloat = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const trustFeatures = [
    {
      id: 1,
      icon: <Award size={28} className="text-gold-dark" />,
      title: "Certified",
      subtitle: "Available certificates of authenticity"
    },
    {
      id: 2,
      icon: <Shield size={28} className="text-gold-dark" />,
      title: "Secure",
      subtitle: "Certified marketplace since 2017"
    },
    {
      id: 3,
      icon: <Truck size={28} className="text-gold-dark" />,
      title: "Shipping",
      subtitle: "Free, fast, and reliable worldwide"
    },
    {
      id: 4,
      icon: <FileCheck size={28} className="text-gold-dark" />,
      title: "Transparent",
      subtitle: "Hassle-free return policy"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-gold-light/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gold-dark rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="flex items-start space-x-4 group relative"
            >
              {/* Grid line separator - only show between items on desktop */}
              {index < trustFeatures.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold-medium/30 to-transparent"></div>
              )}
              
              {/* Icon container on the left */}
              <motion.div 
                variants={iconFloat}
                className="flex-shrink-0"
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light to-gold-medium/50 flex items-center justify-center shadow-soft group-hover:shadow-lg transition-all duration-300 border border-gold-medium/20">
                  {feature.icon}
                </div>
              </motion.div>
              
              {/* Content on the right */}
              <div className="flex-1">
                <motion.h3 
                  className="text-lg font-clash font-semibold mb-2 text-foreground group-hover:text-gold-dark transition-colors duration-300"
                  variants={fadeInUp}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  variants={fadeInUp}
                >
                  {feature.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
