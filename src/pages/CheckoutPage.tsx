import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
    <div className="container mx-auto px-4 pt-32 pb-12 flex-col">
      <motion.div
        className="text-center  mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-clash mt-2 mb-2">Checkout</h1>
        <p className="text-muted-foreground">
          Complete your order by providing your shipping and payment details
        </p>
      </motion.div>
      {/* <div className="border-b border-border py-2 px-4 text-xs text-gray-500 bg-white w-full">
        Cart &nbsp; &gt; &nbsp;
        <span className="font-medium font-clash text-black">Checkout</span>
        &nbsp; &gt; &nbsp; Payment
      </div> */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-2 md:px-6">
          {/* Form Section */}
          <section className="lg:col-span-2">
            <div className="border border-border rounded-xl bg-white p-8 mb-8">
              {/* Contact Section */}
              <h2 className="text-lg font-bold mb-4">Contact</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" />
                    <span className="text-sm">Email Me With News & Offers</span>
                  </label>
                  {/* Delivery Section */}
                  <h2 className="text-lg font-bold mb-4">Delivery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="col-span-2">
                      <FormLabel>Country</FormLabel>
                      <select className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground">
                        <option value="">Select Country</option>
                        {/* Add country options here */}
                      </select>
                    </div>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter First Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Last Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Additional Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="col-span-2">
                      <FormLabel>Address</FormLabel>
                      <Input placeholder="Enter Delivery Address" />
                    </div>
                    <div>
                      <FormLabel>State</FormLabel>
                      <select className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground">
                        <option value="">Select State</option>
                        {/* Add state options here */}
                      </select>
                    </div>
                    <div>
                      <FormLabel>City</FormLabel>
                      <select className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground">
                        <option value="">Select City</option>
                        {/* Add city options here */}
                      </select>
                    </div>
                  </div>
                  {/* Shipping Method Section */}
                  <h2 className="text-lg font-bold mb-4">Shipping Method</h2>
                  <div className="flex flex-col gap-3 mb-4">
                    <label className="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
                      <input type="radio" name="shipping" defaultChecked />
                      <span>Standard</span>
                      <span className="ml-auto font-medium">$–</span>
                    </label>
                    <label className="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
                      <input type="radio" name="shipping" />
                      <span>Express</span>
                      <span className="ml-auto font-medium">$–</span>
                    </label>
                  </div>
                  {/* Payment Section */}
                  <h2 className="text-lg font-bold mb-4">Payment</h2>
                  <div className="flex flex-col gap-3 mb-4">
                    <label className="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
                      <input type="radio" name="payment" defaultChecked />
                      <span>Paystack</span>
                    </label>
                    <div className="border border-border rounded-lg px-4 py-6 text-center text-muted-foreground text-sm">
                      <div className="mb-2">
                        After clicking "Pay Now", you will be instructed to
                        Paystack to complete your purchase securely.
                      </div>
                      <label className="flex items-center gap-2 mt-2">
                        <input type="checkbox" />
                        <span>Save Card Information For Recurring Payment</span>
                      </label>
                    </div>
                    <label className="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mt-4">
                      <input type="radio" name="payment" />
                      <span>Card</span>
                    </label>
                  </div>
                  {/* Card Details Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="col-span-2">
                      <FormLabel>Card Number</FormLabel>
                      <Input placeholder="Card Number" />
                    </div>
                    <div>
                      <FormLabel>Expiration Date</FormLabel>
                      <Input placeholder="Expiration Date" />
                    </div>
                    <div>
                      <FormLabel>Security Code</FormLabel>
                      <Input placeholder="Security Code" />
                    </div>
                    <div className="col-span-2">
                      <FormLabel>Name on Card</FormLabel>
                      <Input placeholder="Name on Card" />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" />
                    <span>Use Shipping Address as Billing Address</span>
                  </label>
                  {/* Billing Address Section */}
                  <h2 className="text-lg font-bold mb-4">Billing Address</h2>
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="billingAddress"
                        defaultChecked
                      />
                      <span>Same As Shipping Address</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="billingAddress" />
                      <span>Use A Different Billing Address</span>
                    </label>
                  </div>
                  {/* Remember Me Section */}
                  <h2 className="text-lg font-bold mb-4">Remember Me</h2>
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" />
                    <span>Email Me With News & Offers</span>
                  </label>
                  <Button
                    type="submit"
                    className="w-full mt-8 bg-[#B6FFB0] text-black font-bold text-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay"}
                  </Button>
                </form>
              </Form>
            </div>
          </section>
          {/* Order Summary Section */}
          <aside className="lg:col-span-1">
            <div className="border border-border rounded-xl bg-white p-8">
              <h2 className="font-medium mb-6">Your Order</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="font-medium">{item.product.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="border border-border rounded-lg px-3 py-2 w-full"
                    placeholder="Add discount code"
                  />
                  <Button type="button" className="px-4">
                    Apply
                  </Button>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Discount</span>
                  <span>-$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipment cost</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
              </div>
              <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                <span>Grand total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button
                type="submit"
                className="w-full mt-8"
                disabled={isProcessing}
              >
                Continue to payment
              </Button>
            </div>
            <div className="mt-8 text-xs text-muted-foreground text-center">
              <span>
                Specializes in providing high-quality, stylish products for your
                wardrobe
              </span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
