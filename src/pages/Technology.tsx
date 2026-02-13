import { motion } from "framer-motion";
import { Brain, Eye, Building2, Factory, Atom, Server, Shield, Cloud, Code, Cpu, Radio, Lock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";

const solutions = [
  { icon: Brain, title: "AI for Schools & Institutions", desc: "Intelligent systems for modern education" },
  { icon: Eye, title: "Real-Time Perception AI", desc: "Visual intelligence for autonomous decision-making" },
  { icon: Building2, title: "Smart City Intelligence", desc: "Urban infrastructure optimization" },
  { icon: Factory, title: "Industrial Automation AI", desc: "Manufacturing and process intelligence" },
  { icon: Atom, title: "Quantum Computing Research", desc: "Next-gen computational paradigms" },
];

const techStack = [
  { icon: Brain, label: "Machine Learning / Deep Learning" },
  { icon: Code, label: "Natural Language Processing" },
  { icon: Eye, label: "Computer Vision / Perception AI" },
  { icon: Cpu, label: "Edge AI & Embedded Deployments" },
  { icon: Radio, label: "IoT Systems & Smart Automation" },
  { icon: Cloud, label: "Cloud Infrastructure & Scalable APIs" },
  { icon: Shield, label: "Security & Data Protection" },
  { icon: Atom, label: "Quantum Computing Research" },
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

      {/* Tech Stack */}
      <section className="relative section-padding">
        <GlowOrb className="bottom-0 left-1/4" size={500} />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">Technology Stack</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Built on <span className="gradient-text">Deep Tech</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((t, i) => (
              <AnimatedSection key={t.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border hover:glow-border bg-card/30 hover:bg-card/50 transition-all"
                >
                  <t.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{t.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
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
