import { motion } from "framer-motion";
import { Brain, Eye, Building2, Factory, Atom, Shield, Cloud, Code, Cpu, Radio } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";
import { FeatureCard } from "@/components/ui/grid-feature-cards";

const solutions = [
  { icon: Brain, title: "AI for Schools & Institutions", description: "Intelligent systems for modern education" },
  { icon: Eye, title: "Real-Time Perception AI", description: "Visual intelligence for autonomous decision-making" },
  { icon: Building2, title: "Smart City Intelligence", description: "Urban infrastructure optimization" },
  { icon: Factory, title: "Industrial Automation AI", description: "Manufacturing and process intelligence" },
  { icon: Atom, title: "Quantum Computing Research", description: "Next-gen computational paradigms" },
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
      <section className="relative section-padding py-16 md:py-32">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl">
              Solutions Across <span className="gradient-text">Institutions & Industry</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
              Deep technology solutions powering real-world systems across education, infrastructure, and frontier research.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-1 divide-x divide-y divide-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
          >
            {solutions.map((feature, index) => {
              // On lg (3-col): items 1-3 in row 1, item 4 (1 col) + item 5 (2 cols) in row 2
              // On sm (2-col): items 1-2, 3-4, item 5 spans full width
              let colSpanClass = '';
              if (index === solutions.length - 1) {
                // Last item (5th): spans full width on sm, spans 2 cols on lg
                colSpanClass = 'sm:col-span-2 lg:col-span-2';
              }
              
              return (
                <FeatureCard 
                  key={feature.title} 
                  feature={feature} 
                  className={`bg-card/30 hover:bg-card/50 transition-colors ${colSpanClass}`}
                />
              );
            })}
          </AnimatedSection>
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
                <div className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/30 bg-card/30 hover:bg-card/50 transition-all duration-300">
                  <t.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{t.label}</span>
                </div>
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

          <AnimatedSection delay={0.2}>
            <GridPatternCard className="border-border bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all">
              <GridPatternCardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerships.map((p, i) => (
                    <div key={p} className="text-center">
                      <p className="text-foreground font-medium text-base">{p}</p>
                    </div>
                  ))}
                </div>
              </GridPatternCardBody>
            </GridPatternCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Technology;
