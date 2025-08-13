import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { CountryProvider } from "./contexts/CountryContext";
import React, { useState, useEffect } from "react";

import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import AccountPage from "./pages/AccountPage";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 second delay for loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CountryProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <LoadingScreen
              isVisible={isLoading}
              onComplete={() => setIsLoading(false)}
            />
            <BrowserRouter>
              <AppContent isLoading={isLoading} setIsLoading={setIsLoading} />
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </CountryProvider>
    </QueryClientProvider>
  );
};

const AppContent: React.FC<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}> = ({ isLoading, setIsLoading }) => {
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);

  const showLoading =
    ["/", "/shop", "/about", "/contact"].includes(location.pathname) ||
    location.pathname.startsWith("/admin");
  return (
    <>
      {isLoading && showLoading ? (
        <LoadingScreen
          isVisible={isLoading}
          onComplete={() => setIsLoading(false)}
        />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
