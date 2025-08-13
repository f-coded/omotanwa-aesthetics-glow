import React from "react";
import brandStoryImg from "../assets/images/brand_story_images/IMG_0287.jpg";
import TopBanner from "@/components/TopBanner";
import "@/components/TopBanner.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import newsletterBg from "../assets/images/brand_story_images/IMG_0290.jpg";
import { motion } from "framer-motion";
import { featuredProducts } from "../data/products";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import CollageSection from "@/components/CollageSection";
import CouponPopup from "@/components/CouponPopup";
import TrustSection from "@/components/TrustSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const HomePage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Omotanwa MI products have completely transformed my skincare routine. My skin has never felt more balanced and radiant.",
      author: "Sophia K.",
      location: "New York, NY",
    },
    {
      id: 2,
      quote:
        "After trying countless brands, I've finally found products that work for my sensitive skin. The night cream is a game-changer!",
      author: "Amara O.",
      location: "Lagos, Nigeria",
    },
    {
      id: 3,
      quote:
        "The attention to ingredient quality is evident in every product. My skin feels nourished and healthy.",
      author: "James T.",
      location: "London, UK",
    },
    {
      id: 4,
      quote:
        "I love how luxurious these products feel. The packaging alone makes me feel pampered every day.",
      author: "Elena M.",
      location: "Paris, France",
    },
    {
      id: 5,
      quote:
        "Finally, skincare that delivers on its promises. My friends keep asking what I'm using!",
      author: "David R.",
      location: "Sydney, Australia",
    },
    {
      id: 6,
      quote:
        "The natural ingredients combined with scientific innovation make this brand truly special.",
      author: "Maria S.",
      location: "Barcelona, Spain",
    },
  ];

  // Enhanced animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <>
      <TopBanner />
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="overflow-x-hidden"
      >
        {/* Hero Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <HeroCarousel />
        </motion.section>

        {/* Coupon Popup */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CouponPopup
            discount="15"
            code="WELCOME15"
            expiry="May 31, 2025"
            delay={3000}
          />
        </motion.section>

        {/* Trust Section - Now comes first */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TrustSection />
        </motion.section>

        {/* Collage Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CollageSection />
        </motion.section>

        {/* Featured Products Section */}
        <motion.section
          className="section bg-gradient-to-br from-gold-light via-white to-gold-light/50 relative overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-40 h-40 bg-gold-medium rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-1/4 w-32 h-32 bg-gold-dark rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.h2 className="section-title" variants={scaleIn}>
                Featured Products
              </motion.h2>
              <motion.p
                className="section-subtitle mx-auto"
                variants={fadeInUp}
              >
                Discover our bestselling formulations, lovingly crafted for your
                skin's optimal health.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to="/shop"
                className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-medium group"
              >
                View All Products
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-2"
                />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Brand Story Section */}
        <motion.section
          className="section relative overflow-hidden bg-primary/80"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="rounded-3xl overflow-hidden aspect-square relative mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
              >
                <motion.img
                  src={brandStoryImg}
                  alt="Omotanwa MI Founder"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2 className="section-title" variants={scaleIn}>
                  Our Brand Story
                </motion.h2>
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  variants={fadeInUp}
                >
                  Omotanwa MI Aesthetics was born from a deep desire to create
                  skincare that honors both tradition and innovation. Our
                  founder, after struggling with her own skin concerns, began
                  researching ancestral beauty rituals from Nigeria combined
                  with modern dermatological science.
                </motion.p>
                <motion.p
                  className="text-muted-foreground mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  Each formula is thoughtfully crafted to deliver not just
                  results, but an experience that transforms your skincare
                  routine into a moment of self-care and connection.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/about"
                    className="btn-primary inline-block bg-gold-medium text-black hover:bg-gold-dark group"
                  >
                    <span className="inline-flex items-center">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="section bg-gradient-to-br from-gold-light/20 via-white to-gold-light/30 relative overflow-hidden"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.h2 className="section-title" variants={scaleIn}>
                What Our Customers Say
              </motion.h2>
              <motion.p
                className="section-subtitle mx-auto"
                variants={fadeInUp}
              >
                Real experiences from our community of skincare enthusiasts.
              </motion.p>
            </motion.div>

            {/* Infinite scrolling testimonials */}
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-6 min-w-full"
                  animate={{ x: [0, -100 * testimonials.length] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className="bg-white p-6 rounded-2xl min-w-[320px] border border-gold-light/20 group hover:border-gold-medium/40 transition-all duration-300"
                      >
                        <div className="mb-4 flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className="text-gold-medium text-sm"
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          "{testimonial.quote}"
                        </p>

                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="section relative overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="container">
            <motion.div
              className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              {/* Image and gradient overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src={newsletterBg}
                  alt="Newsletter Backdrop"
                  className="w-full h-full object-cover object-center"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gold-medium/40 opacity-100" />
              </div>

              <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.h1
                  className="text-2xl text-white md:text-6xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Join Our Community
                </motion.h1>
                <motion.p
                  className="text-white mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  Sign up for our newsletter to receive exclusive offers,
                  skincare tips, and early access to new product launches.
                </motion.p>
                <motion.form
                  className="flex flex-col sm:flex-row max-w-md mx-auto"
                  variants={fadeInUp}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input-field rounded-2xl sm:rounded-r-none flex-grow focus:ring-gold-medium/50"
                  />
                  <button
                    type="submit"
                    className="btn-primary mt-3 sm:mt-0 sm:rounded-l-none bg-gold-medium hover:bg-gold-dark text-black group"
                  >
                    <span className="inline-flex items-center">
                      Subscribe
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WhatsApp Widget */}
        <WhatsAppWidget />
      </motion.div>
    </>
  );
};

export default HomePage;
