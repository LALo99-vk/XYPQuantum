import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Shield, Globe, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const values = [
  { icon: Lightbulb, title: "Innovation with Responsibility", desc: "Pushing boundaries while staying grounded in ethics" },
  { icon: Shield, title: "Privacy-First Systems", desc: "User data protection as a foundational principle" },
  { icon: Target, title: "Reliability Over Hype", desc: "Building systems that work in the real world" },
  { icon: Globe, title: "Rural-First Accessibility", desc: "Technology that reaches every corner" },
  { icon: Rocket, title: "Future-Ready Thinking", desc: "Designing for tomorrow's challenges today" },
];

const team = [
  {
    name: "Arjun Mehta",
    designation: "Founder & CEO",
    quote: "Deep tech visionary with 10+ years in AI systems and quantum computing research. Passionate about building intelligent infrastructure that transforms how institutions operate.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Priya Sharma",
    designation: "CTO",
    quote: "Full-stack AI architect specializing in edge computing and perception systems. Leads the technical vision behind XYP's intelligent platform stack.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Rohan Kapoor",
    designation: "Head of Product",
    quote: "Ed-tech innovator focused on building scalable institutional platforms. Drives ZYLOENS and our education-first product philosophy.",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Anika Das",
    designation: "Lead AI Researcher",
    quote: "PhD in ML with expertise in computer vision and NLP applications. Pushes the boundaries of perception AI and real-world model deployment.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Vikram Singh",
    designation: "Head of Engineering",
    quote: "Infrastructure expert building cloud-native, edge-ready systems at scale. Ensures every XYP product is robust, secure, and performant.",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Neha Patel",
    designation: "Head of Design",
    quote: "UX strategist creating intuitive interfaces for complex AI systems. Believes that deep technology should feel effortless to use.",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center section-padding pt-32">
        <GlowOrb className="top-1/3 left-1/3" size={500} />
        <div className="grid-bg absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Xaggerate Your Potential</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
          >
            We are a deep-tech company building intelligent systems across education, infrastructure, perception AI, and future quantum research.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-10 rounded-2xl glow-border bg-card/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Empower institutions and industries through responsible, scalable intelligent systems.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-10 rounded-2xl glow-border bg-card/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Enable education today and smart ecosystems tomorrow through deep-tech innovation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border hover:border-primary/30 bg-card/30 hover:bg-card/50 hover:-translate-y-1 transition-all duration-300 h-full">
                  <v.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative section-padding">
        <GlowOrb className="bottom-0 right-1/4" size={500} />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-4">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">The Team</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Minds Behind the <span className="gradient-text">Mission</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <AnimatedTestimonials testimonials={team} autoplay />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
