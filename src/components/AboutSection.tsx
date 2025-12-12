import { Globe, Users, Briefcase, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Connections",
    description: "Access to exclusive travel networks across 150+ countries worldwide",
  },
  {
    icon: Users,
    title: "Luxury & Affordable",
    description: "Premium travel experiences tailored to every budget",
  },
  {
    icon: GraduationCap,
    title: "Student Travel",
    description: "Special programs designed for educational tours and student groups",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description: "Corporate travel solutions with VIP arrangements and seamless logistics",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background section-glow">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            About Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Your Gateway to
            <span className="text-gradient-gold"> Extraordinary</span> Travel
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            NW Global Tours & Travel Network redefines how you experience the world. 
            We blend affordability with luxury, offering comprehensive travel solutions 
            that connect you to global destinations while providing unique opportunities 
            to earn through our innovative travel programs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-luxury p-8 text-center transition-all duration-500 hover:scale-105 hover:border-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Countries" },
            { value: "50K+", label: "Happy Travelers" },
            { value: "500+", label: "Partner Hotels" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
