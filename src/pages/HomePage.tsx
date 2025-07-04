import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProducts } from '../data/products';
import ProductCard from '@/components/ProductCard';
import HeroCarousel from '@/components/HeroCarousel';
import CollageSection from '@/components/CollageSection';
import CouponPopup from '@/components/CouponPopup';
import TrustSection from '@/components/TrustSection';

const HomePage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Omotanwa MI products have completely transformed my skincare routine. My skin has never felt more balanced and radiant.",
      author: "Sophia K.",
      location: "New York, NY"
    },
    {
      id: 2,
      quote: "After trying countless brands, I've finally found products that work for my sensitive skin. The night cream is a game-changer!",
      author: "Amara O.",
      location: "Lagos, Nigeria"
    },
    {
      id: 3,
      quote: "The attention to ingredient quality is evident in every product. My skin feels nourished and healthy.",
      author: "James T.",
      location: "London, UK"
    }
  ];

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

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Coupon Popup */}
      <CouponPopup 
        discount="15" 
        code="WELCOME15" 
        expiry="May 31, 2025" 
        delay={3000}
      />

      {/* Collage Section */}
      <CollageSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Featured Products Section */}
      <section className="section bg-gold-light">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle mx-auto">
              Discover our bestselling formulations, lovingly crafted for your skin's optimal health.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/shop" 
              className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-medium"
            >
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-square"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="/images/brand-story.jpg" 
                alt="Omotanwa MI Founder" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Our Brand Story</h2>
              <p className="text-muted-foreground mb-6">
                Omotanwa MI Aesthetics was born from a deep desire to create skincare that honors both tradition and innovation. Our founder, after struggling with her own skin concerns, began researching ancestral beauty rituals from Nigeria combined with modern dermatological science.
              </p>
              <p className="text-muted-foreground mb-6">
                Each formula is thoughtfully crafted to deliver not just results, but an experience that transforms your skincare routine into a moment of self-care and connection.
              </p>
              <Link to="/about" className="btn-primary inline-block bg-gold-medium text-black hover:bg-gold-dark">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gold-medium-light">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              Real experiences from our community of skincare enthusiasts.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-soft"
              >
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold">★</span>
                  ))}
                </div>
                <p className="italic mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div className="bg-gold-medium-light rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-quincy mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-8">
                Sign up for our newsletter to receive exclusive offers, skincare tips, and early access to new product launches.
              </p>
              <form className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input-field rounded-2xl sm:rounded-r-none flex-grow"
                />
                <button
                  type="submit"
                  className="btn-primary mt-3 sm:mt-0 sm:rounded-l-none bg-gold-medium hover:bg-gold-dark text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
