import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/contexts/CountryContext";
import {
  User,
  Package,
  Heart,
  CreditCard,
  MapPin,
  LogOut,
  Clock,
} from "lucide-react";

const AccountPage: React.FC = () => {
  // In a real application, this would come from authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { formatPrice } = useCountry();

  // Mock data for orders
  const orders = [
    {
      id: "OMA-123456",
      date: new Date("2024-04-01"),
      status: "Delivered",
      total: 135,
      items: [
        { id: "1", name: "Hydrating Facial Cleanser", quantity: 1, price: 28 },
        {
          id: "2",
          name: "Vitamin C Brightening Serum",
          quantity: 1,
          price: 45,
        },
        { id: "3", name: "Nourishing Night Cream", quantity: 1, price: 52 },
      ],
    },
    {
      id: "OMA-123457",
      date: new Date("2024-03-15"),
      status: "Delivered",
      total: 83,
      items: [
        { id: "1", name: "Hydrating Facial Cleanser", quantity: 1, price: 28 },
        { id: "4", name: "AHA Exfoliating Mask", quantity: 1, price: 38 },
      ],
    },
  ];

  // Mock data for saved addresses
  const addresses = [
    {
      id: "addr1",
      name: "Home",
      fullName: "Jane Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
      phone: "+1 123-456-7890",
      isDefault: true,
    },
    {
      id: "addr2",
      name: "Work",
      fullName: "Jane Doe",
      street: "456 Office Boulevard",
      city: "New York",
      state: "NY",
      postalCode: "10002",
      country: "USA",
      phone: "+1 123-456-7890",
      isDefault: false,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // If not logged in, show login prompt
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-12">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-100 rounded-full mb-6">
            <User size={32} className="text-brand-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Account</h1>
          <p className="text-muted-foreground mb-8">
            Please log in to access your account dashboard, orders, and
            settings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn-secondary">
              Register
            </Link>
          </div>

          {/* Demo purposes: button to simulate login */}
          <button
            className="text-sm text-brand-600 hover:underline mt-8"
            onClick={() => setIsLoggedIn(true)}
          >
            Demo: Click here to simulate login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl md:text-4xl font-serif mb-4">My Account</h1>
        <p className="text-muted-foreground">
          Welcome back, Jane! Manage your orders, addresses, and account
          settings.
        </p>
      </motion.div>

      <Tabs defaultValue="orders">
        <TabsList className="mb-8">
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package size={16} />
            <span>Orders</span>
          </TabsTrigger>
          <TabsTrigger value="addresses" className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Addresses</span>
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="flex items-center gap-2">
            <Heart size={16} />
            <span>Wishlist</span>
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard size={16} />
            <span>Payment Methods</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <div className="space-y-8">
            <h2 className="text-xl font-medium mb-6">Order History</h2>

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-soft p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="font-medium mb-1">Order #{order.id}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.date.toLocaleDateString()} •{" "}
                      {formatPrice(order.total)}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <Clock size={12} className="mr-1" />
                      {order.status}
                    </span>

                    <button className="ml-4 text-sm text-brand-600 hover:text-brand-700">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="text-sm font-medium mb-3">Items</h3>

                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div className="text-sm">
                          {item.name}{" "}
                          <span className="text-muted-foreground">
                            × {item.quantity}
                          </span>
                        </div>
                        <div className="text-sm font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="addresses">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Shipping Addresses</h2>
              <Button variant="outline">Add New Address</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-white rounded-2xl shadow-soft p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <h3 className="font-medium">{address.name}</h3>
                      {address.isDefault && (
                        <span className="ml-2 bg-brand-100 text-brand-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <button className="hover:text-foreground">Edit</button>
                      <span className="mx-2">•</span>
                      <button className="hover:text-destructive">Delete</button>
                    </div>
                  </div>

                  <div className="text-sm space-y-1 text-muted-foreground">
                    <p>{address.fullName}</p>
                    <p>{address.street}</p>
                    <p>
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p>{address.country}</p>
                    <p>{address.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="wishlist">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
              <Heart size={24} className="text-brand-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Save items you love to your wishlist to buy them later or share
              with friends.
            </p>
            <Link to="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="payment">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
              <CreditCard size={24} className="text-brand-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">
              No saved payment methods
            </h2>
            <p className="text-muted-foreground mb-6">
              You haven't saved any payment methods yet.
            </p>
            <Button>Add Payment Method</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 pt-8 border-t border-border">
        <Button
          variant="ghost"
          onClick={() => setIsLoggedIn(false)}
          className="text-muted-foreground hover:text-foreground flex items-center"
        >
          <LogOut size={16} className="mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default AccountPage;
