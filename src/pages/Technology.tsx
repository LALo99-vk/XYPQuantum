import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Code, Eye, Cpu, Radio, Cloud, Shield, Atom } from "lucide-react";
import GlowOrb from "@/components/GlowOrb";
import AnimatedSection from "@/components/AnimatedSection";

const technologies = [
  { icon: Brain, title: "Machine Learning / Deep Learning", desc: "Neural architectures that learn, adapt, and evolve from data at scale." },
  { icon: Code, title: "Natural Language Processing", desc: "Understanding and generating human language with contextual precision." },
  { icon: Eye, title: "Computer Vision / Perception AI", desc: "Real-time visual intelligence for autonomous decision-making." },
  { icon: Cpu, title: "Edge AI & Embedded Deployments", desc: "Inference at the edge — low-latency, hardware-optimized AI." },
  { icon: Radio, title: "IoT Systems & Smart Automation", desc: "Connected device ecosystems powered by intelligent automation." },
  { icon: Cloud, title: "Cloud Infrastructure & APIs", desc: "Scalable, resilient cloud-native architectures for AI workloads." },
  { icon: Shield, title: "Security & Data Protection", desc: "Privacy-first design with end-to-end encryption and compliance." },
  { icon: Atom, title: "Quantum Computing Research", desc: "Exploring next-generation computational paradigms beyond classical limits." },
];

const solutions = [
  { icon: Brain, title: "AI for Schools & Institutions", desc: "Intelligent systems for modern education" },
  { icon: Eye, title: "Real-Time Perception AI", desc: "Visual intelligence for autonomous decision-making" },
  { icon: Cpu, title: "Smart City Intelligence", desc: "Urban infrastructure optimization" },
  { icon: Radio, title: "Industrial Automation AI", desc: "Manufacturing and process intelligence" },
  { icon: Atom, title: "Quantum Computing Research", desc: "Next-gen computational paradigms" },
];

const partnerships = [
  "Schools & Educational Institutions",
  "Government & Innovation Programs",
  "Industry & IoT Partners",
  "Embedded & Hardware Teams",
  "Research & Academic Communities",
  "Startups & Product Teams",
];

const Technology = () => {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(technologies.length - 1) * 100}vw`]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center section-padding pt-32">
        <GlowOrb className="top-1/3 right-1/4" size={500} />
        <div className="grid-bg absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4"
          >
            Technology & Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The Science Behind <span className="gradient-text">Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Deep technology stacks powering real-world solutions across institutions and industries.
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Solutions Across <span className="gradient-text">Institutions & Industry</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-8 rounded-2xl glow-border bg-card/50 hover:bg-card transition-all h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Tech Stack */}
      <section ref={horizontalRef} className="relative" style={{ height: `${technologies.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Section Header */}
          <div className="absolute top-0 left-0 right-0 z-20 pt-28 pb-4 px-6 md:px-12 lg:px-20">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-2">Technology Stack</p>
            <h2 className="text-2xl md:text-4xl font-bold">
              Built on <span className="gradient-text">Deep Tech</span>
            </h2>
          </div>

          {/* Progress */}
          <motion.div className="absolute bottom-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 h-[2px] bg-border z-20 rounded-full overflow-hidden">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-primary origin-left" />
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-14 right-6 md:right-12 lg:right-20 z-20">
            <motion.span className="text-muted-foreground text-sm font-mono">
              {technologies.length} modules
            </motion.span>
          </div>

          {/* Panels */}
          <motion.div style={{ x }} className="flex h-full">
            {technologies.map((tech, i) => (
              <div
                key={tech.title}
                className="flex-shrink-0 w-screen h-full flex items-center justify-center px-6 md:px-20 relative"
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-4xl w-full">
                  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Icon block */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="flex-shrink-0"
                    >
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-card border border-primary/20 flex items-center justify-center shadow-[0_0_60px_hsl(var(--primary)/0.12)] group hover:shadow-[0_0_80px_hsl(var(--primary)/0.25)] transition-shadow duration-500">
                        <tech.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                      </div>
                    </motion.div>

                    {/* Text */}
                    <div className="text-center md:text-left">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4 font-mono"
                      >
                        {String(i + 1).padStart(2, "0")} / {String(technologies.length).padStart(2, "0")}
                      </motion.p>
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                      >
                        {tech.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
                      >
                        {tech.desc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">Partnerships & Collaboration</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Who We <span className="gradient-text">Work With</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerships.map((p, i) => (
              <AnimatedSection key={p} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-xl border border-border hover:glow-border bg-card/30 hover:bg-card/50 transition-all text-center"
                >
                  <p className="text-foreground font-medium">{p}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
