
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "An Experience, a Lifestyle",
    subtitle: "Premium skincare crafted with love, science, and a deep understanding of what your skin truly needs.",
    image: "/images/hero1.jpg",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Our Story",
    secondaryCtaLink: "/about"
  },
  {
    id: 2,
    title: "Embrace Natural Beauty",
    subtitle: "Ethically sourced ingredients that nourish your skin and respect the earth.",
    image: "/images/hero2.jpg",
    ctaText: "Explore Products",
    ctaLink: "/shop"
  },
  {
    id: 3,
    title: "Elevate Your Routine",
    subtitle: "Transform your daily skincare into a luxurious ritual of self-care.",
    image: "/images/hero3.jpg",
    ctaText: "View Collection",
    ctaLink: "/shop"
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);
  
  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
    }
  };
  
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };
  
  return (
    <div className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div 
          key={slides[currentSlide].id}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <motion.div 
              variants={contentVariants} 
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-medium text-white mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={slides[currentSlide].ctaLink} 
                  className="btn-primary bg-gold-medium text-black hover:bg-gold-dark"
                >
                  {slides[currentSlide].ctaText}
                </Link>
                {slides[currentSlide].secondaryCtaText && (
                  <Link 
                    to={slides[currentSlide].secondaryCtaLink || "#"} 
                    className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
                  >
                    {slides[currentSlide].secondaryCtaText}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Pagination */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold-medium w-6' : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
