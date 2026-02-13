import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, BarChart3, GraduationCap, CheckCircle, Zap, Smartphone, Cpu, Eye, Radio, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";

const zyloensFeatures = [
  { icon: GraduationCap, title: "Student Digital Portfolio", desc: "Lifelong achievements and creative work tracking" },
  { icon: Users, title: "Teacher-Managed Workflows", desc: "Streamlined learning management and assessment" },
  { icon: BarChart3, title: "Admin Dashboards", desc: "Principal and admin oversight with analytics" },
  { icon: BarChart3, title: "Growth Analytics", desc: "Engagement and performance insights" },
  { icon: CheckCircle, title: "Verified Onboarding", desc: "Institution verification and secure setup" },
  { icon: Shield, title: "Privacy-First Architecture", desc: "School-controlled data with zero third-party risks" },
];

const edgeFeatures = [
  "Real-time AI inference on edge devices",
  "Sensor data pipelines",
  "Embedded AI deployments",
  "Edge AI pipelines",
  "Perception AI",
  "Hardware-friendly deployment",
  "Real-world device integration",
];

const smartFeatures = [
  "Gesture-controlled smart appliances",
  "Sensor-driven automation",
  "Remote control intelligence layer",
  "Scalable IoT platform",
  "Intelligent environments for homes, classrooms, offices",
];

const Products = () => {
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
            Products & Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Intelligence, <span className="gradient-text">Productized</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            From AI-powered education to edge computing and smart devices — our platforms are built for real-world impact.
          </motion.p>
        </div>
      </section>

      {/* ZYLOENS Section */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              Flagship Product
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">ZYLOENS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A safer, smarter school ecosystem — built for institutions that care about student privacy and growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zyloensFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-7 rounded-2xl glow-border bg-card/50 hover:bg-card transition-all h-full"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a School Demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Edge Intelligence */}
      <section className="relative section-padding">
        <GlowOrb className="top-0 right-0" size={400} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                XYP <span className="gradient-text">Edge Intelligence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Deploy AI at the edge — real-time inference, sensor pipelines, and perception AI on embedded hardware.
              </p>
              <div className="space-y-3">
                {edgeFeatures.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="aspect-square rounded-3xl glow-border gradient-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Cpu className="w-16 h-16 text-primary animate-float" />
                  <Eye className="w-12 h-12 text-primary/70 animate-float" style={{ animationDelay: "1s" }} />
                  <Radio className="w-10 h-10 text-primary/50 animate-float" style={{ animationDelay: "2s" }} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Smart Devices */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl glow-border gradient-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Smartphone className="w-16 h-16 text-primary animate-float" />
                  <Settings className="w-12 h-12 text-primary/70 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                XYP <span className="gradient-text">Smart Devices</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Gesture-controlled appliances, sensor-driven automation, and scalable IoT for intelligent environments.
              </p>
              <div className="space-y-3">
                {smartFeatures.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
