import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Landmark, Factory, Cpu, FlaskConical, Rocket } from "lucide-react";
import GlowOrb from "@/components/GlowOrb";

const partners = [
  { title: "Schools & Educational Institutions", icon: GraduationCap, accent: "Empowering the next generation through intelligent learning systems." },
  { title: "Government & Innovation Programs", icon: Landmark, accent: "Driving public sector transformation with scalable AI." },
  { title: "Industry & IoT Partners", icon: Factory, accent: "Connecting industrial systems with intelligent automation." },
  { title: "Embedded & Hardware Teams", icon: Cpu, accent: "Deploying AI at the edge across custom hardware." },
  { title: "Research & Academic Communities", icon: FlaskConical, accent: "Advancing the frontier of computational intelligence." },
  { title: "Startups & Product Teams", icon: Rocket, accent: "Accelerating product innovation with deep tech." },
];

const HorizontalPartners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(partners.length - 1) * 100}vw`]);
  // Keep x at "0%" when scrollYProgress is 0 (start), move left as user scrolls

  return (
    <section ref={containerRef} className="relative" style={{ height: `${partners.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-28 pb-6 px-6 md:px-12 lg:px-20">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-2">
            Partnerships
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Built for <span className="gradient-text">Collaboration</span>
          </h2>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 h-[2px] bg-border z-20 rounded-full overflow-hidden"
        >
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-primary origin-left"
          />
        </motion.div>

        {/* Horizontal panels */}
        <motion.div
          style={{ x }}
          className="flex h-full"
        >
          {partners.map((partner, i) => (
            <div
              key={partner.title}
              className="flex-shrink-0 w-screen h-full flex items-center justify-center px-6 md:px-20 relative"
            >
              <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={400} delay={i * 0.2} />

              <div className="relative z-10 max-w-3xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 mx-auto w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                >
                  <partner.icon className="w-9 h-9 text-primary" />
                </motion.div>

                <motion.p
                  className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(partners.length).padStart(2, "0")}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                >
                  {partner.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
                >
                  {partner.accent}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalPartners;
