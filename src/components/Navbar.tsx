import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import CountrySelector from "./CountrySelector";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Navbar animation variants
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.header
      variants={navbarVariants}
      animate={isVisible ? "visible" : "hidden"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gold-medium/10"
          : "bg-transparent"
      }`}
    >
      {/* Decorative top border - moved outside container for full width */}
      <div
        className={`fixed top-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-gold-medium via-gold-dark to-gold-medium transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 60 }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              className="relative"
            >
              <img
                src="/omotanwami logoblack.png"
                alt="Omotanwa MI Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="absolute inset-0 bg-gold-medium/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="ml-4 hidden sm:block"
            >
              <h1 className="text-xl md:text-2xl font-clash font-medium bg-gradient-to-r from-gold-dark via-foreground to-gold-dark bg-clip-text text-transparent">
                Omotanwa MI
              </h1>
              <p className="text-xs text-muted-foreground font-light tracking-wider">
                CERTIFIED AESTHETICIAN
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center space-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={menuItemVariants}>
              <Link
                to="/"
                className="relative text-sm font-medium hover:text-gold-dark transition-colors group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-medium to-gold-dark group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                to="/shop"
                className="relative text-sm font-medium hover:text-gold-dark transition-colors group py-2"
              >
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-medium to-gold-dark group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants} className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-gold-dark transition-colors py-2">
                About
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
                <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 min-w-[200px] border border-gold-medium/20">
                  <Link
                    to="/about"
                    className="block py-3 px-4 text-sm hover:text-gold-dark hover:bg-gold-light/30 rounded-xl transition-all"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                to="/contact"
                className="relative text-sm font-medium hover:text-gold-dark transition-colors group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-medium to-gold-dark group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.nav>

          {/* Action buttons */}
          <motion.div
            className="flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={menuItemVariants}>
              <CountrySelector />
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                to="/account"
                className="p-2 hover:text-gold-dark transition-colors hover:bg-gold-light/30 rounded-xl"
              >
                <User size={20} />
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                to="/cart"
                className="p-2 hover:text-gold-dark transition-colors relative hover:bg-gold-light/30 rounded-xl group"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 bg-gold-dark text-white text-xs animate-pulse group-hover:animate-bounce"
                    variant="outline"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={menuItemVariants}
              className="p-2 lg:hidden hover:bg-gold-light/30 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className=" backdrop-blur-xl rounded-3xl mx-4 mb-4 p-6 shadow-2xl border border-gold-medium/20">
                <div className="flex flex-col space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to="/"
                      className="block text-sm font-medium py-3 px-4 hover:text-gold-dark hover:bg-gold-light/30 rounded-xl transition-all"
                    >
                      Home
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      to="/shop"
                      className="block text-sm font-medium py-3 px-4 hover:text-gold-dark hover:bg-gold-light/30 rounded-xl transition-all"
                    >
                      Shop
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      to="/about"
                      className="block text-sm font-medium py-3 px-4 hover:text-gold-dark hover:bg-gold-light/30 rounded-xl transition-all"
                    >
                      Our Story
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      to="/contact"
                      className="block text-sm font-medium py-3 px-4 hover:text-gold-dark hover:bg-gold-light/30 rounded-xl transition-all"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
