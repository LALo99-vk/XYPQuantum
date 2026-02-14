interface GlowOrbProps {
  className?: string;
  size?: number;
  delay?: number;
}

const GlowOrb = ({ className = "", size = 400 }: GlowOrbProps) => {
  return (
    <div
      className={`absolute rounded-full pointer-events-none will-change-transform ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, hsl(217 100% 58% / 0.12) 0%, hsl(217 100% 58% / 0.04) 40%, transparent 70%)`,
        filter: "blur(30px)",
        transform: "translateZ(0)",
      }}
    />
  );
};

export default GlowOrb;
