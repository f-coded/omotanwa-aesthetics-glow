import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import "./TopBanner.css";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBanner />
      <Navbar />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
