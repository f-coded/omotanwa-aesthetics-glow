
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Shipping } from 'lucide-react';

const TrustSection: React.FC = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const trustFeatures = [
    {
      id: 1,
      icon: <div className="w-12 h-12 rounded-lg border-2 border-gold-medium flex items-center justify-center"><div className="w-6 h-6 border border-gold-medium rounded transform rotate-45"></div></div>,
      title: "Certified",
      subtitle: "Available certificates of authenticity"
    },
    {
      id: 2,
      icon: <Shield size={24} className="text-gold-medium" />,
      title: "Secure",
      subtitle: "Certified marketplace since 2017"
    },
    {
      id: 3,
      icon: <Shipping size={24} className="text-gold-medium" />,
      title: "Shipping",
      subtitle: "Free, fast, and reliable worldwide"
    },
    {
      id: 4,
      icon: <div className="w-12 h-12 rounded-lg border-2 border-gold-medium flex items-center justify-center"><div className="w-6 h-6 border-2 border-gold-medium rounded"></div></div>,
      title: "Transparent",
      subtitle: "Hassle-free return policy"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-clash font-medium mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
