import { Heart } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle ribbon pattern */}
      <div className="absolute inset-0 ribbon-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Our Purpose</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-up-delay-1">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up-delay-2">
            Cancer affects millions of lives every year—not just patients, but families, friends, and entire communities. Our mission is to raise awareness, encourage early detection, and provide emotional support to those navigating their cancer journey. Every message of hope, every shared resource, and every act of compassion brings us closer to a world where no one battles alone.
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-3 mt-12 animate-fade-up-delay-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
