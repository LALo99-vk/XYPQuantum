import { motion } from "framer-motion";
import { Brain, Eye, Cpu, Building2, Factory, Atom } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const domains = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Deep learning systems for real-world decision making",
    size: "large" as const,
  },
  {
    icon: Eye,
    title: "Computer Vision & Perception AI",
    desc: "Visual intelligence for autonomous understanding",
    size: "medium" as const,
  },
  {
    icon: Cpu,
    title: "IoT & Smart Devices",
    desc: "Connected intelligence across physical environments",
    size: "medium" as const,
  },
  {
    icon: Building2,
    title: "Smart Cities & Automation",
    desc: "Urban intelligence and infrastructure systems",
    size: "small" as const,
  },
  {
    icon: Factory,
    title: "Industrial Intelligence",
    desc: "Manufacturing optimization through AI",
    size: "small" as const,
  },
  {
    icon: Atom,
    title: "Quantum Computing Research",
    desc: "Next-generation computational paradigms",
    size: "small" as const,
  },
];

const BentoDomains = () => {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Core Domains
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Where Intelligence <span className="gradient-text">Meets Reality</span>
          </h2>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {domains.map((domain, i) => {
            const gridClass =
              domain.size === "large"
                ? "md:col-span-4 lg:col-span-3 md:row-span-2"
                : domain.size === "medium"
                ? "md:col-span-2 lg:col-span-3 md:row-span-1"
                : "md:col-span-2 lg:col-span-2 md:row-span-1";

            return (
              <AnimatedSection key={domain.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`${gridClass} relative group h-full rounded-2xl overflow-hidden cursor-pointer`}
                >
                  {/* Background layers */}
                  <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border border-border rounded-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.12),transparent_70%)]" />

                  {/* Animated corner glow */}
                  <div className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/60 to-transparent" />
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-primary/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                        <domain.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-foreground font-semibold text-lg md:text-xl mb-2 leading-tight">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {domain.desc}
                    </p>
                  </div>

                  {/* Floating particle */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors"
                  />
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoDomains;
