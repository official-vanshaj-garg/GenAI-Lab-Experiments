import { MapPin, Coins, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhySection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Not just \"places to visit\"",
      description:
        "Most websites tell you where to go. We tell you how to actually reach there – which metro line, which exit gate, whether you should take an e-rickshaw or walk.",
    },
    {
      icon: Coins,
      title: "Local hacks, real savings",
      description:
        "Learn how locals move around – metro cards, shared autos, walking shortcuts, timings to avoid traffic, and simple tricks that save hundreds of rupees every day.",
    },
    {
      icon: Users,
      title: "Made for solo & budget travellers",
      description:
        "Our guides are built for students, solo travellers and backpackers who want safe, efficient and affordable travel without feeling lost or dependent on expensive tours.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Why India needs a different kind of travel guide
          </h2>
          <p className="text-lg text-card-foreground">
            India is incredible – and also chaotic. Jugaad Journeys focuses on the 
            reality of travelling here: crowds, traffic, budgets, and local systems.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold">{feature.title}</h3>
                <p className="text-card-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
