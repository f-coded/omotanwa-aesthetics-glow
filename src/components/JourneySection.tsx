import React, { useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/images/about_images/journey-1.jpg";
import card2 from "../assets/images/about_images/meet&greeet.jpg";
import card3 from "../assets/images/about_images/journey-3.jpg";
import card4 from "../assets/images/about_images/cac.jpeg";

const JourneySection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const journeyMilestones = [
    {
      id: 1,
      title: "Hosted Our First Skincare Exhibition in Oyo State",
      description:
        "Launched our brand presence with an exclusive skincare exhibition, showcasing our premium product line to beauty enthusiasts across Oyo State.",
      image: card1,
      icon: "📍",
      year: "2022",
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      title: "Meet & Greet With Kie Kie",
      description:
        "Collaborated with renowned influencer Kie Kie for an exclusive meet and greet, expanding our reach and connecting with beauty lovers nationwide.",
      image: card2,
      icon: "🤝",
      year: "2023",
      position: { x: 100, y: 50 },
    },
    {
      id: 3,
      title: "Signed Distributors in the UK, US, Canada, Belgium & Liberia",
      description:
        "Achieved international expansion by securing official distributors across five countries, bringing Nigerian beauty excellence to the global market.",
      image: card3,
      icon: "🌍",
      year: "2023",
      position: { x: -80, y: 100 },
    },
    {
      id: 4,
      title:
        "Fully Registered with the Corporate Affairs Commission (CAC), Nigeria",
      description:
        "Officially registered our company with CAC Nigeria, establishing legal legitimacy and commitment to professional business standards.",
      image: card4,
      icon: "📝",
      year: "2024",
      position: { x: 120, y: 150 },
    },
  ];

  // SVG Arrow Component

  return (
    <section className="section bg-gradient-to-br from-background via-gold-light/5 to-background overflow-hidden relative min-h-screen">
      <div className="container relative z-10 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold-medium"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span className="text-gold-medium font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gold-medium"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-clash font-black mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <motion.span
              className="bg-gradient-to-r from-gold-dark via-gold-medium to-gold-dark bg-clip-text text-transparent"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 20, 0] }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              The Journey
            </motion.span>
            <br />
            <span className="text-foreground">Unfolds</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Follow the narrative of transformation, growth, and global impact
            through pivotal moments that shaped our legacy
          </motion.p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Flowing Path Background */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 100 100 Q 300 50 500 150 Q 700 250 900 200 Q 800 350 600 400 Q 400 450 200 350 Q 300 550 500 600 Q 700 650 900 550"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(var(--gold-light))" />
                <stop offset="50%" stopColor="hsl(var(--gold-medium))" />
                <stop offset="100%" stopColor="hsl(var(--gold-dark))" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Story Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className={`relative ${index % 2 === 1 ? "lg:mt-32" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                onHoverStart={() => setActiveCard(milestone.id)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Card */}
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden border-[4px] border-gold-dark group cursor-pointer z-10"
                  animate={{
                    scale: activeCard === milestone.id ? 1.03 : 1,
                    rotateY:
                      activeCard === milestone.id
                        ? index % 2 === 0
                          ? 2
                          : -2
                        : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  whileHover={{ y: -6 }}
                  style={{
                    boxShadow: "0 0 0 8px #000, 11px 11px 0 0 #000",
                  }}
                >
                  {/* Timeline Year Badge */}
                  <motion.div
                    className="absolute top-6 right-6 z-20"
                    animate={{
                      scale: activeCard === milestone.id ? 1.1 : 1,
                      rotate: activeCard === milestone.id ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-gold-dark text-white px-4 py-2 rounded-full font-bold text-sm border-2 border-black">
                      {milestone.year}
                    </div>
                  </motion.div>

                  {/* Story Image */}
                  <motion.div
                    className="relative h-64 overflow-hidden"
                    animate={{
                      scale: activeCard === milestone.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 left-6 text-4xl"
                      animate={{
                        y: activeCard === milestone.id ? [-5, 5, -5] : 0,
                        rotate: activeCard === milestone.id ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeCard === milestone.id ? Infinity : 0,
                      }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </motion.div>

                  {/* Story Content */}
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl lg:text-3xl font-clash font-bold mb-4 leading-tight"
                      animate={{
                        color:
                          activeCard === milestone.id
                            ? "hsl(var(--gold-dark))"
                            : "hsl(var(--foreground))",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground leading-relaxed text-lg"
                      animate={{
                        opacity: activeCard === milestone.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.description}
                    </motion.p>

                    {/* Read More Indicator */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-gold-medium font-bold"
                      animate={{
                        x: activeCard === milestone.id ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Explore Chapter</span>
                      <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{
                          x: activeCard === milestone.id ? [0, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 1,
                          repeat: activeCard === milestone.id ? Infinity : 0,
                        }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Connecting Line to Next */}
                  {index < journeyMilestones.length - 1 && (
                    <motion.div
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 hidden lg:block"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 1, duration: 0.8 }}
                    >
                      <div className="w-px h-16 bg-gradient-to-b from-gold-medium to-transparent" />
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-medium rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>

                {/* Dynamic Connecting Arrows for Desktop */}
              </motion.div>
            ))}
          </div>

          {/* Story Conclusion */}
          <motion.div
            className="text-center mt-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 text-gold-medium font-medium"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="w-8 h-0.5 bg-gold-medium"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <span>The Story Continues...</span>
              <motion.div
                className="w-8 h-0.5 bg-gold-medium"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-medium/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
