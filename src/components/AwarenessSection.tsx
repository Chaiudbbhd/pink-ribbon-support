import { Search, Heart, Users, Leaf } from "lucide-react";

const awarenessPoints = [
  {
    icon: Search,
    title: "Early Detection",
    description: "Recognizing early signs and scheduling regular screenings can save lives. Awareness empowers action.",
    delay: "animate-fade-up-delay-1",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Support comes in many forms—listening, comforting, and simply being present. Compassion matters.",
    delay: "animate-fade-up-delay-2",
  },
  {
    icon: Users,
    title: "Community Resources",
    description: "From counseling to support groups, many resources exist to help patients and families find guidance.",
    delay: "animate-fade-up-delay-3",
  },
  {
    icon: Leaf,
    title: "Healthy Living",
    description: "Healthy habits such as good nutrition, exercise, and avoiding risk factors can reduce cancer risk.",
    delay: "animate-fade-up-delay-4",
  },
];

const AwarenessSection = () => {
  return (
    <section id="awareness" className="py-24 bg-background relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            Awareness Starts With Knowledge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up-delay-1">
            Understanding cancer and its impact is the first step toward making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awarenessPoints.map((point) => (
            <div
              key={point.title}
              className={`group bg-card rounded-2xl p-8 card-hover ${point.delay}`}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <point.icon className="w-7 h-7 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
