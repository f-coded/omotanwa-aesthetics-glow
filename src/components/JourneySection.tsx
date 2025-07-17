import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const JourneySection: React.FC = () => {
  const journeyMilestones = [
    {
      id: 1,
      title: "Hosted Our First Skincare Exhibition in Oyo State",
      description: "Launched our brand presence with an exclusive skincare exhibition, showcasing our premium product line to beauty enthusiasts across Oyo State.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      side: "left"
    },
    {
      id: 2,
      title: "Meet & Greet With Kie Kie",
      description: "Collaborated with renowned influencer Kie Kie for an exclusive meet and greet, expanding our reach and connecting with beauty lovers nationwide.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      side: "right"
    },
    {
      id: 3,
      title: "Signed Distributors in the UK, US, Canada, Belgium & Liberia",
      description: "Achieved international expansion by securing official distributors across five countries, bringing Nigerian beauty excellence to the global market.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      side: "left"
    },
    {
      id: 4,
      title: "Fully Registered with the Corporate Affairs Commission (CAC), Nigeria",
      description: "Officially registered our company with CAC Nigeria, establishing legal legitimacy and commitment to professional business standards.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop",
      side: "right"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const milestoneVariants = {
    hidden: (side: string) => ({
      opacity: 0,
      x: side === "left" ? -100 : 100,
      y: 50,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="section bg-gradient-to-br from-background via-gold-light/10 to-background overflow-hidden">
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold bg-gradient-to-r from-gold-dark via-foreground to-gold-dark bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Legacy in Motion
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Witness the extraordinary moments that shaped our journey from a vision to a global beauty movement
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Central Timeline */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-medium via-gold-dark to-gold-medium origin-top"
            variants={timelineVariants}
            style={{ transformOrigin: "top" }}
          />

          {/* Milestones */}
          <div className="space-y-32">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className={`relative flex items-center ${
                  milestone.side === "left" 
                    ? "lg:flex-row flex-col" 
                    : "lg:flex-row-reverse flex-col"
                }`}
                variants={milestoneVariants}
                custom={milestone.side}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold-dark rounded-full border-4 border-white z-10 shadow-lg"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    delay: index * 0.2 + 0.5
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(218, 165, 32, 0.5)"
                  }}
                />

                {/* Content Card */}
                <motion.div
                  className={`lg:w-5/12 w-full ${
                    milestone.side === "left" ? "lg:pr-16" : "lg:pl-16"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gold-medium/20 hover:border-gold-medium/40 transition-all duration-300">
                    <motion.h3
                      className="text-2xl font-clash font-semibold text-foreground mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {milestone.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className={`lg:w-5/12 w-full ${
                    milestone.side === "left" ? "lg:pl-16 mt-8 lg:mt-0" : "lg:pr-16 mb-8 lg:mb-0"
                  }`}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: milestone.side === "left" ? -5 : 5,
                    z: 20
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-medium/20 to-gold-dark/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                    <motion.img
                      src={milestone.image}
                      alt={milestone.title}
                      className="relative w-full h-80 object-cover rounded-3xl border-4 border-white shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.2 + 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                    />
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gold-dark rounded-full opacity-80"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-medium rounded-full opacity-60"
                      animate={{
                        y: [0, 8, 0],
                        scale: [1, 0.9, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold-medium/10 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold-dark/10 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;