
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const phoneNumber = '+1234567890';
  const whatsappMessage = "Hello! I'd like to schedule a skincare consultation.";
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  useEffect(() => {
    document.title = 'Contact Us | Omotanwa MI';
    const desc = 'Contact Omotanwa MI for skincare support, consultations, and product advice.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}/contact`;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Omotanwa MI",
      url: window.location.origin,
      contactPoint: [{
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@omotanwami.com",
        telephone: "+1234567890"
      }]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-quincy mb-4">Contact Omotanwa MI</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about our products or need personalized skincare advice? We're here to help.
        </p>
      </motion.div>

      {/* Consultation CTA */}
      <div className="mb-12 rounded-2xl border border-border p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-medium">Prefer a 1:1 consultation?</h2>
          <p className="text-muted-foreground">Chat with our certified aesthetician for tailored recommendations.</p>
        </div>
        <button onClick={openWhatsApp} className="btn-primary px-6 py-3 rounded-md">
          Schedule on WhatsApp
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={fadeIn} className="bg-background rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-quincy mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full border border-border mr-4 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:hello@omotanwami.com" className="text-primary hover:underline">
                    hello@omotanwami.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full border border-border mr-4 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Customer Service:</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full border border-border mr-4 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Beauty Lane, Suite 100<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-medium mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday:</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday:</div>
                <div>10:00 AM - 4:00 PM</div>
                <div>Sunday:</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="rounded-2xl border border-border p-8 bg-background">
            <h2 className="text-2xl font-quincy mb-4">Follow Us</h2>
            <p className="text-muted-foreground mb-6">
              Stay connected with us on social media for updates, promotions, and skincare tips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full border border-border hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-3 rounded-full border border-border hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="p-3 rounded-full border border-border hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-background rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-quincy mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="Product Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>

          {/* Optional sections (Map/FAQ) - uncomment if needed */}
          {/**
          <section className="mt-12">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="text-xl font-medium mb-4">Find Us</h3>
              <div className="aspect-video w-full rounded-lg border border-border">
                <iframe className="w-full h-full rounded-lg" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps"></iframe>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• How long does shipping take?</li>
                <li>• Can I consult an aesthetician before buying?</li>
                <li>• What products are best for acne-prone skin?</li>
              </ul>
            </div>
          </section>
          **/}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
