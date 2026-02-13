import { useMemo } from "react";

const starColors = [
  // Electric blue (primary) - most common
  "rgba(59, 130, 246, 0.5)",
  "rgba(59, 130, 246, 0.4)",
  "rgba(37, 99, 235, 0.5)",
  // Teal / emerald
  "rgba(20, 184, 166, 0.45)",
  "rgba(16, 185, 129, 0.4)",
  // Red
  "rgba(239, 68, 68, 0.4)",
  "rgba(220, 38, 38, 0.35)",
  // Yellow / amber
  "rgba(250, 204, 21, 0.4)",
  "rgba(245, 158, 11, 0.35)",
  // White (bright stars)
  "rgba(255, 255, 255, 0.5)",
];

const ParticleField = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3.5 + 1.5,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `particle-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
