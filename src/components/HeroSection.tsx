import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Supportive community holding hands with pink cancer awareness ribbons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Ribbon Pattern Overlay */}
      <div className="absolute inset-0 ribbon-pattern opacity-30 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight">
            Cancer Awareness & Support
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 animate-fade-up-delay-1 max-w-2xl mx-auto leading-relaxed">
            Together we rise stronger. Join us in spreading hope, awareness, and support for individuals and families affected by cancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <Button variant="hero" size="xl">
              Learn More
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              Get Support
            </Button>
          </div>

          <p className="mt-12 text-primary-foreground/80 text-lg animate-fade-up-delay-3 font-medium">
            Learn. Support. Stand Together.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
