import { 
  Plane, 
  Building2, 
  Car, 
  FileCheck, 
  Video, 
  Coins 
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "International & Domestic Tour Packages",
    description: "Curated travel experiences to breathtaking destinations worldwide, from exotic getaways to local hidden gems.",
  },
  {
    icon: Building2,
    title: "Hotels & Hospitality Tie-ups",
    description: "Exclusive partnerships with premium hotels and resorts ensuring the finest accommodations at competitive rates.",
  },
  {
    icon: Car,
    title: "Transport & Travel Assistance",
    description: "Seamless transportation solutions including airport transfers, private vehicles, and 24/7 travel support.",
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation Support",
    description: "Expert assistance with visa applications, travel documents, and immigration requirements for hassle-free travel.",
  },
  {
    icon: Video,
    title: "Travel Influencer Programs",
    description: "Join our network of travel content creators and turn your passion for exploration into captivating stories.",
  },
  {
    icon: Coins,
    title: "Travel-Based Earning System",
    description: "Unique opportunity to earn while you travel through our innovative referral and affiliate programs.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-charcoal-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Premium Travel
            <span className="text-gradient-gold"> Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive services designed to make every journey memorable, 
            from planning to execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl bg-gradient-card border border-gold-subtle overflow-hidden transition-all duration-500 hover:border-gold hover:scale-[1.02]"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-glow)" }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-gold mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
