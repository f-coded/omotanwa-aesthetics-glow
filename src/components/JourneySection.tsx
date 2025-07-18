import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JourneySection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const journeyMilestones = [
    {
      id: 1,
      title: "Hosted Our First Skincare Exhibition in Oyo State",
      description: "Launched our brand presence with an exclusive skincare exhibition, showcasing our premium product line to beauty enthusiasts across Oyo State.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      icon: "📍",
      year: "2022"
    },
    {
      id: 2,
      title: "Meet & Greet With Kie Kie",
      description: "Collaborated with renowned influencer Kie Kie for an exclusive meet and greet, expanding our reach and connecting with beauty lovers nationwide.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      icon: "🤝",
      year: "2023"
    },
    {
      id: 3,
      title: "Signed Distributors in the UK, US, Canada, Belgium & Liberia",
      description: "Achieved international expansion by securing official distributors across five countries, bringing Nigerian beauty excellence to the global market.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      icon: "🌍",
      year: "2023"
    },
    {
      id: 4,
      title: "Fully Registered with the Corporate Affairs Commission (CAC), Nigeria",
      description: "Officially registered our company with CAC Nigeria, establishing legal legitimacy and commitment to professional business standards.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop",
      icon: "📝",
      year: "2024"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-background via-gold-light/5 to-background overflow-hidden relative">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-clash font-black bg-gradient-to-r from-gold-dark via-gold-medium to-gold-dark bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Legacy in Motion
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Journey through the defining moments that transformed our vision into a global beauty phenomenon
          </motion.p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 border border-gold-medium/20"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Journey Cards in Morphing Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="relative group"
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setActiveCard(milestone.id)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <motion.div
                  className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                  animate={{
                    scale: activeCard === milestone.id ? 1.05 : 1,
                    rotateY: activeCard === milestone.id ? 5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Background Image with Morphing Effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: activeCard === milestone.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </motion.div>

                  {/* Floating Year Bubble */}
                  <motion.div
                    className="absolute top-6 right-6 w-16 h-16 bg-gold-dark rounded-full flex items-center justify-center z-10"
                    animate={{
                      rotate: activeCard === milestone.id ? 360 : 0,
                      scale: activeCard === milestone.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </motion.div>

                  {/* Emoji Icon with Morphing */}
                  <motion.div
                    className="absolute top-6 left-6 text-4xl filter drop-shadow-lg"
                    animate={{
                      scale: activeCard === milestone.id ? [1, 1.3, 1] : 1,
                      rotate: activeCard === milestone.id ? [0, 15, -15, 0] : 0,
                    }}
                    transition={{ 
                      duration: 0.6,
                      repeat: activeCard === milestone.id ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  >
                    {milestone.icon}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <motion.h3
                      className="text-2xl lg:text-3xl font-clash font-bold text-white mb-4 leading-tight"
                      animate={{
                        y: activeCard === milestone.id ? -10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-white/80 leading-relaxed text-lg"
                      animate={{
                        opacity: activeCard === milestone.id ? 1 : 0.7,
                        y: activeCard === milestone.id ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </motion.div>

                  {/* Morphing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-gold-medium/40"
                    animate={{
                      borderColor: activeCard === milestone.id ? "hsl(var(--gold-medium))" : "hsl(var(--gold-medium) / 0.4)",
                      boxShadow: activeCard === milestone.id ? "0 0 40px hsl(var(--gold-medium) / 0.3)" : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Particle Effects on Hover */}
                  {activeCard === milestone.id && (
                    <motion.div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gold-medium rounded-full"
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + (i % 2) * 80}%`,
                          }}
                          animate={{
                            y: [-20, -60, -20],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Interactive Connection Lines */}
                {index < journeyMilestones.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -bottom-8 left-1/2 w-px h-16 bg-gradient-to-b from-gold-medium to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-gold-medium/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gold-dark/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default JourneySection;