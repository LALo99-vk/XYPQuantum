import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  size?: number;
  delay?: number;
}

const GlowOrb = ({ className = "", size = 400, delay = 0 }: GlowOrbProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, hsl(217 100% 58% / 0.15) 0%, hsl(217 100% 58% / 0.05) 40%, transparent 70%)`,
        filter: "blur(40px)",
      }}
    />
  );
};

export default GlowOrb;
