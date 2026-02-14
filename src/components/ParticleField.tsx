import { useMemo } from "react";

const starColors = [
  "rgba(59, 130, 246, 0.5)",
  "rgba(59, 130, 246, 0.4)",
  "rgba(37, 99, 235, 0.5)",
  "rgba(20, 184, 166, 0.45)",
  "rgba(16, 185, 129, 0.4)",
  "rgba(239, 68, 68, 0.4)",
  "rgba(220, 38, 38, 0.35)",
  "rgba(250, 204, 21, 0.4)",
  "rgba(245, 158, 11, 0.35)",
  "rgba(255, 255, 255, 0.5)",
];

const ParticleField = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 10 + 12,
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
            animation: `particle-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
