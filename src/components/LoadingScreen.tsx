import React from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isVisible,
  onComplete,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isVisible && onComplete) {
          onComplete();
        }
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-12">
        {/* Animated Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          {/* Logo Container with Glow Effect */}
          <motion.div
            className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-gold-light to-gold-dark p-1 shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px hsl(var(--gold-medium) / 0.3)",
                "0 0 40px hsl(var(--gold-medium) / 0.6)",
                "0 0 20px hsl(var(--gold-medium) / 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
              <img
                src="/omotanwami logoblack.png"
                alt="Omotanwa-Mi Aesthetics"
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>

          {/* Rotating Ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-gold-medium/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-gold-medium rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 0px",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                initial={{
                  transform: `rotate(${i * 45}deg) translateY(-60px)`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-2xl font-clash font-bold bg-gradient-to-r from-gold-dark via-gold-medium to-gold-dark bg-clip-text text-transparent">
            Omotanwa-Mi
          </h1>
          <p className="text-sm text-muted-foreground tracking-wider uppercase">
            Aesthetics
          </p>
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div
          className="w-80 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gold-dark via-gold-medium to-gold-dark"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              delay: 1,
              duration: 2.5,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setTimeout(() => {
                if (onComplete) onComplete();
              }, 500);
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              delay: 1.2,
              duration: 1.5,
              repeat: 2,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.p
            className="text-sm text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Preparing your beauty experience...
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-medium/20 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
