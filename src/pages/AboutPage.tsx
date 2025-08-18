import React from "react";
import { motion } from "framer-motion";
import JourneySection from "@/components/JourneySection";

const AboutPage: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('src/assets/images/about_images/about_hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold md:text-6xl text-black mt-20 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-black/80">
              Crafting beauty that honors tradition and embraces innovation
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section bg-gradient-to-br from-gold-light/20 via-white to-gold-medium-light/30 relative overflow-hidden">
        <div className="container ">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-1/4 w-40 h-40 bg-gold-medium rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gold-dark rounded-full blur-2xl"></div>
          </div>

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
                The journey of Omotanwa MI Aesthetics began with our founder's
                personal struggle with skincare. Born between two worlds—the
                rich cultural heritage of Nigeria and the fast-paced life of the
                United States—she found herself searching for products that
                would honor both parts of her identity while effectively
                addressing her skin concerns.
              </p>
              <p className="text-muted-foreground mb-6">
                After years of experimentation and research, she began
                developing formulations that combined traditional Nigerian
                botanicals with cutting-edge dermatological science. The results
                were transformative, not only for her skin but for her sense of
                connection to her heritage.
              </p>
              <p className="font-medium text-lg text-italic">
                "Beauty rituals should be moments of connection—to ourselves, to
                our ancestors, and to the earth that provides these incredible
                ingredients."
              </p>

              <img
                className="mt-8 w-80 h-auto"
                src="src/assets/images/about_images/signature.jpg"
                alt="signature"
              />
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden aspect-square order-1 lg:order-2  mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="src/assets/images/about_images/omotanwa.jpg"
                alt="Omotanwa MI Founder"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gradient-to-br from-gold-light/30 via-white to-gold-medium-light/20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title text-4xl md:text-5xl font-clash font-bold text-gold-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-medium/20 to-gold-dark/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gold-medium/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-medium to-gold-dark rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <h3 className="text-xl md:text-2xl font-clash font-bold text-center mb-4 text-gold-dark">
                  Heritage & Innovation
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  We honor ancestral wisdom while embracing modern science, creating formulations that bridge tradition and innovation for truly transformative results.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-medium/20 to-gold-dark/10 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gold-medium/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-medium to-gold-dark rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl md:text-2xl font-clash font-bold text-center mb-4 text-gold-dark">
                  Ethical Sourcing
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Every ingredient is sustainably sourced and fairly traded, supporting communities while ensuring the highest quality for our formulations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-medium/20 to-gold-dark/10 rounded-3xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gold-medium/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-medium to-gold-dark rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🌈</span>
                </div>
                <h3 className="text-xl md:text-2xl font-clash font-bold text-center mb-4 text-gold-dark">
                  Inclusive Beauty
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Beauty has no boundaries. We celebrate every skin type, tone, and story, creating products that honor the diversity of human beauty.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />
    </div>
  );
};

export default AboutPage;
