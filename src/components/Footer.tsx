import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-charcoal-light border-t border-gold-subtle">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-gold">
                <Plane className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">NW GLOBAL</h3>
                <p className="text-xs text-gold tracking-wider">TOURS & TRAVEL NETWORK</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences. 
              Discover the world with NW Global and turn every journey into an opportunity.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gold-subtle text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Destinations", "Partnerships", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Global Headquarters,<br />
                  Business District, City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (800) NW-GLOBAL</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@nwglobal.travel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 NW Global Tours & Travel Network. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <span className="font-serif text-sm font-semibold text-gradient-gold">
                NW Global Business Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
