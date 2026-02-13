import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logos/Logo1.png" 
                alt="XYP Quantum AI" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building intelligent systems for education, smart cities & the future of quantum AI.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/products" className="text-muted-foreground text-sm hover:text-primary transition-colors">ZYLOENS</Link>
              <Link to="/products" className="text-muted-foreground text-sm hover:text-primary transition-colors">Edge Intelligence</Link>
              <Link to="/products" className="text-muted-foreground text-sm hover:text-primary transition-colors">Smart Devices</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About</Link>
              <Link to="/technology" className="text-muted-foreground text-sm hover:text-primary transition-colors">Technology</Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">hello@xypquantumai.com</span>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Book a Demo</Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Partner With Us</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 XYP Quantum AI Systems. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Building the future of intelligent systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
