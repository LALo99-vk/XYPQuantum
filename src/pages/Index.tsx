import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Eye, Cpu, Building2, Factory, Atom, ChevronRight, GraduationCap, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import ParticleField from "@/components/ParticleField";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const domains = [
  { icon: Brain, title: "Artificial Intelligence & Machine Learning", desc: "Deep learning systems for real-world decision making" },
  { icon: Eye, title: "Computer Vision & Perception AI", desc: "Visual intelligence for autonomous understanding" },
  { icon: Cpu, title: "IoT & Smart Devices", desc: "Connected intelligence across physical environments" },
  { icon: Building2, title: "Smart Cities & Automation", desc: "Urban intelligence and infrastructure systems" },
  { icon: Factory, title: "Industrial Intelligence", desc: "Manufacturing optimization through AI" },
  { icon: Atom, title: "Quantum Computing Research", desc: "Next-generation computational paradigms" },
];

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
        <AnimatedShaderBackground />
        <GlowOrb className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" size={600} />
        <GlowOrb className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" size={500} delay={0.5} />
        <ParticleField />
        <div className="grid-bg absolute inset-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          >
            XYP Quantum AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground text-lg mb-8 italic"
          >
            "We don't build apps. We build intelligence."
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Building Intelligent Systems for{" "}
            <span className="gradient-text">Education, Smart Cities</span>
            {" "}& the Future of{" "}
            <span className="gradient-text">Quantum AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We design real-world AI systems that operate across institutions, infrastructure, and next-generation research — not just software dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/products">Explore Platform</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Vision Section */}
      <section className="relative section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-6">Our Vision</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              We design real-world AI systems that operate across{" "}
              <span className="gradient-text">institutions, infrastructure</span>, and next-generation research.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
          </AnimatedSection>
        </div>
      </section>

      {/* Core Domains */}
      <section className="relative section-padding">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
          <AnimatedSection>
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
              <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Core Domains</p>
              <h2 className="text-balance text-3xl md:text-5xl font-bold">
                Where Intelligence <span className="gradient-text">Meets Reality</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We operate across six foundational domains — building real-world systems that span institutions, infrastructure, and frontier research.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative mx-auto grid max-w-4xl lg:max-w-6xl divide-x divide-y divide-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((domain) => (
                <div
                  key={domain.title}
                  className="group space-y-3 p-10 md:p-12 transition-all duration-300 hover:bg-primary/5 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <domain.icon className="w-5 h-5 text-primary transition-colors group-hover:text-[#14B8A6]" />
                    <h3 className="text-foreground text-sm font-semibold">{domain.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{domain.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ZYLOENS Product Preview */}
      <section className="relative section-padding overflow-hidden">
        <GlowOrb className="top-0 right-0" size={500} delay={0.3} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">Flagship Product</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">ZYLOENS</span> — A Safer, Smarter School Ecosystem
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                ZYLOENS is a school-owned AI platform designed to nurture student creativity, track achievements, and modernize institutional operations — without unsafe social media or data risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book a School Demo</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/products">Explore Platform <ChevronRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl glow-border bg-gradient-to-br from-primary/10 to-transparent p-8 flex items-center justify-center">
                  <div className="space-y-4 w-full">
                    {["Student Portfolio", "Teacher Workflows", "Admin Dashboard", "Growth Analytics"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card/50 glow-border"
                      >
                        <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">Coming Soon</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Next-Generation <span className="gradient-text">Products</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl glow-border bg-card/50 hover:bg-card hover:-translate-y-1 transition-all duration-300 h-full">
                <Zap className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-2xl font-bold text-foreground mb-3">XYP Edge Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time AI inference on edge devices. Sensor data pipelines, embedded AI deployments, and hardware-friendly perception AI.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl glow-border bg-card/50 hover:bg-card hover:-translate-y-1 transition-all duration-300 h-full">
                <Smartphone className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-2xl font-bold text-foreground mb-3">XYP Smart Devices</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gesture-controlled smart appliances, sensor-driven automation, and intelligent environments for homes, classrooms, and offices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Whether you're an institution, government body, or startup — let's build intelligent systems together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start a Conversation <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
