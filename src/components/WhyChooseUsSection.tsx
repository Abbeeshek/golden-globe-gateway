import { Globe2, Percent, Sparkles, Shield } from "lucide-react";

const reasons = [
  {
    icon: Globe2,
    title: "Global Partner Network",
    description: "Connected with leading travel agencies, airlines, and hospitality partners across every continent for exclusive deals and seamless experiences.",
  },
  {
    icon: Percent,
    title: "Exclusive Discounts",
    description: "Members enjoy up to 40% off on bookings, early-bird offers, and access to limited-time luxury packages.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Travel Planning",
    description: "Smart itinerary generation, personalized recommendations, and real-time travel optimization powered by cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Safe & Transparent Support",
    description: "24/7 dedicated support team, secure booking platform, and complete transparency in pricing with no hidden fees.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background section-glow overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The NW Global
            <span className="text-gradient-gold"> Advantage</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience travel excellence with a partner that puts your needs first.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group flex gap-6 p-8 rounded-2xl bg-gradient-card border border-gold-subtle transition-all duration-500 hover:border-gold hover:glow-gold"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-card border border-gold-subtle">
            <p className="font-serif text-2xl text-foreground mb-6">
              Ready to experience world-class travel?
            </p>
            <button className="px-10 py-4 bg-gradient-gold text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-gold">
              Join NW Global Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
