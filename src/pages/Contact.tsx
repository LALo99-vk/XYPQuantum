import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare, Handshake, CalendarCheck, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { useToast } from "@/hooks/use-toast";

const API_URL =
  import.meta.env.VITE_API_URL !== undefined && import.meta.env.VITE_API_URL !== ""
    ? import.meta.env.VITE_API_URL
    : import.meta.env.DEV
      ? "http://localhost:3001"
      : "";

const contactOptions = [
  { icon: CalendarCheck, title: "Book a Demo", desc: "See ZYLOENS or our AI platforms in action" },
  { icon: Handshake, title: "Partnership Inquiry", desc: "Explore collaboration and integration opportunities" },
  { icon: MessageSquare, title: "General Inquiry", desc: "Questions, feedback, or just say hello" },
];

const subjectOptions = [
  "Book a Demo",
  "Book a Service",
  "I'm a potential client",
  "Partnership / Collaboration",
  "General inquiry",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setSending(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center section-padding pt-32">
        <GlowOrb className="top-1/3 right-1/3" size={500} />
        <div className="grid-bg absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Build <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Whether it's a demo, partnership, or collaboration — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactOptions.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl glow-border bg-card/50 hover:bg-card hover:-translate-y-1 transition-all duration-300 text-center h-full">
                  <opt.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-semibold text-lg mb-2">{opt.title}</h3>
                  <p className="text-muted-foreground text-sm">{opt.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary h-12"
                    maxLength={100}
                    disabled={sending}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary h-12"
                    maxLength={255}
                    disabled={sending}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-card/50 border-border focus:border-primary h-12"
                    maxLength={20}
                    disabled={sending}
                  />
                  <Select
                    value={form.subject || undefined}
                    onValueChange={(v) => setForm({ ...form, subject: v })}
                    disabled={sending}
                  >
                    <SelectTrigger className="h-12 bg-card/50 border-border focus:border-primary">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-card/50 border-border focus:border-primary min-h-[150px] resize-none"
                  maxLength={1000}
                  disabled={sending}
                />
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending wait...
                    </>
                  ) : (
                    <>
                      Send Message asap <ArrowRight className="ml-1 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">info@xypquantum.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="p-8 rounded-2xl glow-border bg-card/50">
                  <h4 className="text-foreground font-semibold mb-3">For Institutions</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Interested in ZYLOENS for your school or institution? Book a personalized demo to see how our AI platform can transform your operations.
                  </p>
                  <Button variant="hero-outline" size="default">
                    Book a Demo <CalendarCheck className="ml-1 w-4 h-4" />
                  </Button>
                </div>

                <div className="p-8 rounded-2xl border border-border bg-card/30">
                  <h4 className="text-foreground font-semibold mb-3">For Partners & Collaborators</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We work with hardware teams, research labs, government bodies, and startups. Reach out to explore how we can build together.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
