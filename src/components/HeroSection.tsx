import { Plane } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 animate-pulse-glow"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo Icon */}
        <div className="animate-fade-up mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold-subtle bg-gradient-card glow-gold">
            <Plane className="w-10 h-10 text-gold animate-float" />
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="animate-fade-up-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">NW </span>
          <span className="text-gradient-gold">GLOBAL</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl lg:text-6xl">TOURS & TRAVEL NETWORK</span>
        </h1>
        
        {/* Decorative Line */}
        <div className="animate-fade-up-delay-2 flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>
        
        {/* Tagline */}
        <p className="animate-fade-up-delay-3 font-sans text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover the World. Travel Smart. 
          <span className="text-gold-light"> Earn as You Explore.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-gradient-gold text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-gold">
            Start Your Journey
          </button>
          <button className="px-8 py-4 border border-gold-subtle text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-gold hover:bg-gold/10">
            Explore Destinations
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-subtle rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
