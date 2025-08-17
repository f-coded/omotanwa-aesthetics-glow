import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, CreditCard, Building } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCountry } from "@/contexts/CountryContext";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(3, "Zip code is required"),
  cardName: z.string().min(2, "Name on card is required"),
  cardNumber: z.string().min(13, "Card number is required"),
  expiryDate: z.string().min(5, "Expiry date is required"),
  cvv: z.string().min(3, "CVV is required"),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { country, formatPrice } = useCountry();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");

  // Shipping calculation (simplified)
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.05; // 5% tax rate
  const total = subtotal + shipping + tax;

  // React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      clearCart();
      navigate("/order-success");
    } catch (error) {
      toast.error("Payment processing failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-clash font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground">
            Complete your order by providing your shipping and payment details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Contact</h2>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email or mobile phone number"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center gap-2 mt-3">
                    <input type="checkbox" id="offers" className="rounded" />
                    <label htmlFor="offers" className="text-sm text-muted-foreground">
                      Email me with news and offers
                    </label>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Delivery</h2>
                  <div className="space-y-4">
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none pr-10">
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Kenya</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Input placeholder="Last name" />
                    </div>

                    <Input placeholder="Address" />
                    <Input placeholder="Apartment, suite, etc. (optional)" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input placeholder="City" />
                      <div className="relative">
                        <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none pr-10">
                          <option>State</option>
                          <option>Lagos</option>
                          <option>Abuja</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                      <Input placeholder="Postal code" />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Shipping method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="standard"
                          checked={shippingMethod === "standard"}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="text-primary"
                        />
                        <span className="font-medium">Standard</span>
                      </div>
                      <span className="font-medium">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="express"
                          checked={shippingMethod === "express"}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="text-primary"
                        />
                        <span className="font-medium">Express</span>
                      </div>
                      <span className="font-medium">₦2,500</span>
                    </label>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Payment</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    All transactions are secure and encrypted.
                  </p>
                  
                  <div className="space-y-3">
                    {/* Pay with Card Option */}
                    <div className="border border-gray-200 rounded-lg">
                      <label className="flex items-center justify-between p-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="payment" 
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-primary"
                          />
                          <CreditCard className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">Pay with Card</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                          <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                          <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">AE</div>
                        </div>
                      </label>
                      
                      {paymentMethod === "card" && (
                        <div className="px-4 pb-4 space-y-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 gap-4 mt-4">
                            <Input placeholder="Card number" />
                            <div className="grid grid-cols-2 gap-4">
                              <Input placeholder="Expiration date (MM/YY)" />
                              <Input placeholder="Security code" />
                            </div>
                            <Input placeholder="Name on card" />
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <input type="checkbox" id="save-card" className="rounded" />
                            <label htmlFor="save-card" className="text-sm text-muted-foreground">
                              Save my information for a faster checkout
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bank Transfer Option */}
                    <div className="border border-gray-200 rounded-lg">
                      <label className="flex items-center justify-between p-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="payment" 
                            value="transfer"
                            checked={paymentMethod === "transfer"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-primary"
                          />
                          <Building className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">Bank Transfer</span>
                        </div>
                        <div className="text-sm text-primary font-medium">Flutterwave</div>
                      </label>
                      
                      {paymentMethod === "transfer" && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-muted-foreground mt-4">
                            You will be redirected to Flutterwave to complete your bank transfer securely.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Billing address</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="billing" defaultChecked className="text-primary" />
                        <span className="text-sm">Same as shipping address</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="billing" className="text-primary" />
                        <span className="text-sm">Use a different billing address</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg rounded-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Complete order"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-6 text-foreground">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex gap-2">
                  <Input placeholder="Discount code" className="flex-1" />
                  <Button variant="outline" className="px-6">Apply</Button>
                </div>
              </div>

              {/* Order Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shippingMethod === "standard" ? "Free" : "₦2,500"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
