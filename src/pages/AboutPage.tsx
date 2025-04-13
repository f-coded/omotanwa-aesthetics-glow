
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white font-quincy mb-4">Our Story</h1>
            <p className="text-xl text-white/80">
              Crafting beauty that honors tradition and embraces innovation
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="section-title">The Founder's Journey</h2>
              <p className="text-muted-foreground mb-6">
                The journey of Omotanwa MI Aesthetics began with our founder's personal struggle with skincare. Born between two worlds—the rich cultural heritage of Nigeria and the fast-paced life of the United States—she found herself searching for products that would honor both parts of her identity while effectively addressing her skin concerns.
              </p>
              <p className="text-muted-foreground mb-6">
                After years of experimentation and research, she began developing formulations that combined traditional Nigerian botanicals with cutting-edge dermatological science. The results were transformative, not only for her skin but for her sense of connection to her heritage.
              </p>
              <p className="font-medium text-lg">
                "Beauty rituals should be moments of connection—to ourselves, to our ancestors, and to the earth that provides these incredible ingredients."
              </p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl overflow-hidden aspect-square order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="/images/founder.jpg" 
                alt="Omotanwa MI Founder" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-gold-light">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we create and do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <h3 className="text-xl font-quincy mb-4">Heritage & Innovation</h3>
              <p className="text-muted-foreground">
                We honor traditional ingredients and practices while embracing scientific advancements for optimal efficacy.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <h3 className="text-xl font-quincy mb-4">Ethical Sourcing</h3>
              <p className="text-muted-foreground">
                We partner with suppliers who share our commitment to fair trade practices and sustainable harvesting.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <h3 className="text-xl font-quincy mb-4">Inclusive Beauty</h3>
              <p className="text-muted-foreground">
                We develop products that cater to diverse skin types, tones, and concerns, celebrating beauty in all its forms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              The milestones that have shaped Omotanwa MI Aesthetics
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gold-medium"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative">
                <motion.div 
                  className="md:w-1/2 md:pr-12 md:text-right"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <h3 className="font-quincy text-xl mb-2">2018</h3>
                    <p className="text-muted-foreground">
                      Initial research and development of first formulations in our founder's kitchen
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-dark"></div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="md:w-1/2 md:pl-12 md:ml-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <h3 className="font-quincy text-xl mb-2">2020</h3>
                    <p className="text-muted-foreground">
                      Official launch of Omotanwa MI Aesthetics with our first three signature products
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-dark"></div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="md:w-1/2 md:pr-12 md:text-right"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <h3 className="font-quincy text-xl mb-2">2022</h3>
                    <p className="text-muted-foreground">
                      Expanded product line and opened our first flagship store in Lagos
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-dark"></div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="md:w-1/2 md:pl-12 md:ml-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <h3 className="font-quincy text-xl mb-2">2024</h3>
                    <p className="text-muted-foreground">
                      Launched international shipping and our premium ritual collections
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-dark"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
