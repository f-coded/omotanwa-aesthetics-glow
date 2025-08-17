import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, CreditCard, Building, Info } from "lucide-react";
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
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState("");

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

  const handleApplyDiscount = () => {
    setDiscountError("Invalid discount code");
    setTimeout(() => setDiscountError(""), 3000);
  };

  const onSubmit = async (data: FormValues) => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // For now, just show success and clear cart
      clearCart();
      toast.success("Order placed successfully!");
      navigate("/order-success");
    } catch (error) {
      toast.error("Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12" style={{ backgroundColor: '#F8F8F8' }}>
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
                <div className="bg-white rounded-xl p-6 border-0">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Contact</h2>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email or mobile phone number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center gap-2 mt-3">
                    <input type="checkbox" id="offers" className="rounded accent-primary" />
                    <label htmlFor="offers" className="text-sm text-muted-foreground">
                      Email me with news and offers
                    </label>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-xl p-6 border-0">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Delivery</h2>
                  <div className="space-y-4">
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 appearance-none pr-10 focus:bg-white focus:border-primary">
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
                              <Input 
                                placeholder="First name" 
                                className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Input 
                        placeholder="Last name" 
                        className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <Input 
                      placeholder="Address" 
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <Input 
                      placeholder="Apartment, suite, etc. (optional)" 
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input 
                        placeholder="City" 
                        className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      <div className="relative">
                        <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 appearance-none pr-10 focus:bg-white focus:border-primary">
                          <option>State</option>
                          <option>Lagos</option>
                          <option>Abuja</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                      <Input 
                        placeholder="Postal code" 
                        className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Phone" 
                              className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white rounded-xl p-6 border-0">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Shipping method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="standard"
                          checked={shippingMethod === "standard"}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="text-primary accent-primary"
                        />
                        <span className="font-medium">Standard</span>
                      </div>
                      <span className="font-medium">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="express"
                          checked={shippingMethod === "express"}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="text-primary accent-primary"
                        />
                        <span className="font-medium">Express</span>
                      </div>
                      <span className="font-medium">₦2,500</span>
                    </label>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-xl p-6 border-0">
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
                            className="text-primary accent-primary"
                          />
                          <span className="font-medium">Card</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                          <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                          <div className="w-10 h-6 bg-gradient-to-r from-blue-800 to-blue-900 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                        </div>
                      </label>
                      
                      {paymentMethod === "card" && (
                        <div className="px-4 pb-4 space-y-4 border-t border-gray-200 bg-gray-50">
                          <div className="mt-4">
                            <div className="flex items-center gap-2 mb-3">
                              <input type="checkbox" id="save-card" className="rounded accent-primary" />
                              <label htmlFor="save-card" className="text-sm text-muted-foreground">
                                Save Card Information For Recurring Payment
                              </label>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            <Input 
                              placeholder="Card Number" 
                              className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <Input 
                                placeholder="Expiration Date" 
                                className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                              />
                              <div className="relative">
                                <Input 
                                  placeholder="Security Code" 
                                  className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary pr-10"
                                />
                                <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              </div>
                            </div>
                            <Input 
                              placeholder="Name On Card" 
                              className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          
                          <div className="flex items-center gap-2 mt-3">
                            <input type="checkbox" id="use-shipping" className="rounded accent-primary" />
                            <label htmlFor="use-shipping" className="text-sm text-muted-foreground">
                              Use Shipping Address As Billing Address
                            </label>
                          </div>

                          <div className="mt-4">
                            <h3 className="font-medium mb-3 text-foreground">Billing Address</h3>
                            <div className="space-y-2">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="billing" defaultChecked className="accent-primary" />
                                <span className="text-sm">Same As Shipping Address</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="billing" className="accent-primary" />
                                <span className="text-sm">Use A Different Billing Address</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PayPal Option */}
                    <div className="border border-gray-200 rounded-lg">
                      <label className="flex items-center justify-between p-4 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="payment" 
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-primary accent-primary"
                          />
                          <span className="font-medium">PayPal</span>
                        </div>
                        <div className="w-16 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">PayPal</div>
                      </label>
                      
                      {paymentMethod === "paypal" && (
                        <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                          <p className="text-sm text-muted-foreground mt-4">
                            You will be redirected to PayPal to complete your payment securely.
                          </p>
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
                            className="text-primary accent-primary"
                          />
                          <span className="font-medium">Transfer</span>
                        </div>
                        <div className="text-sm text-primary font-medium">Flutterwave</div>
                      </label>
                      
                      {paymentMethod === "transfer" && (
                        <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                          <p className="text-sm text-muted-foreground mt-4">
                            You will be redirected to Flutterwave to complete your bank transfer securely.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3 text-foreground">Remember Me</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded accent-primary" />
                        <span className="text-sm text-muted-foreground">Email Me With News & Offers</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-gold-dark text-white font-medium py-4 text-lg rounded-xl transition-all duration-200"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Pay"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-6 sticky top-8 border-0">
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
                  <Input 
                    placeholder="Discount code" 
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    className="px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                    onClick={handleApplyDiscount}
                    type="button"
                  >
                    Apply
                  </Button>
                </div>
                {discountError && (
                  <p className="text-red-500 text-sm mt-2">{discountError}</p>
                )}
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
