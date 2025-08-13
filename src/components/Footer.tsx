import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gold-light/20 via-white to-gold-medium-light/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-gold-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gold-dark rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link to="/" className="inline-block mb-6">
            <img
              src="/omotanwami logoblack.png"
              alt="Omotanwa MI Logo"
              className="h-16 w-auto mx-auto"
            />
          </Link>

          <p className="text-lg text-muted-foreground mb-8 mx-auto">
            Crafting premium skincare experiences with love and science.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold-medium flex items-center justify-center hover:shadow-lg transition-all"
            >
              <Instagram size={20} className="text-gold-dark" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold-medium flex items-center justify-center hover:shadow-lg transition-all"
            >
              <Twitter size={20} className="text-gold-dark" />
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-gold-dark transition-colors"
            >
              Our Story
            </Link>
            <Link
              to="/shop"
              className="text-muted-foreground hover:text-gold-dark transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-gold-dark transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="border-t border-gold-medium/20 pt-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>We accept:</span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/download-visa-card-logo-icon-png-735811696866915avdywnhoab.png"
                    alt="Visa"
                    className="h-5 w-auto"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                    alt="MasterCard"
                    className="h-5 w-auto"
                  />
                  <img
                    src="https://directory.insaka.co.za/wp-content/uploads/2022/03/Paystack-CeruleanBlue-StackBlue-VL-265x130.png"
                    alt="Paystack"
                    className="h-5 w-auto"
                  />
                  <img
                    src="https://e7.pngegg.com/pngimages/382/83/png-clipart-bank-transfer-logo-wire-transfer-electronic-funds-transfer-bank-payment-computer-icons-bank-text-rectangle-thumbnail.png"
                    alt="Bank Transfer"
                    className="h-5 w-auto"
                  />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Heart size={12} className="text-gold" /> Omotanwa MI Aesthetics
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
