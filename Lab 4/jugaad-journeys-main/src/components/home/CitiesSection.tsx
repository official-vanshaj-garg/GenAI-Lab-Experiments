import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CitiesSection = () => {
  const cities = [
    {
      name: "Delhi",
      slug: "delhi",
      tagline: "Metro, chai, chaos and history – on a budget.",
      description:
        "Learn how to use the Delhi Metro + e-rickshaws to cover Old Delhi, Connaught Place and landmarks in 1–3 days without burning your wallet.",
      emoji: "🏛️",
    },
    {
      name: "Jaipur",
      slug: "jaipur",
      tagline: "Pink City, forts and local bazaars made simple.",
      description:
        "Navigate between Amer Fort, Hawa Mahal and Johari Bazaar using autos, shared cabs and walking routes that keep things affordable and relaxed.",
      emoji: "🏰",
    },
    {
      name: "Mumbai",
      slug: "mumbai",
      tagline: "Local trains, sea breeze and midnight vada pav.",
      description:
        "Understand Mumbai locals, BEST buses and sea-facing walks with practical guidance on timing, safety and realistic travel times.",
      emoji: "🌊",
    },
    {
      name: "Goa",
      slug: "goa",
      tagline: "Beyond resorts: buses, bikes and beachside shortcuts.",
      description:
        "Learn when to rent a bike, when to walk, and how to combine local buses and smart routes to explore both North and South Goa at your own pace.",
      emoji: "🏖️",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Start with these cities
          </h2>
          <p className="text-lg text-card-foreground">
            We're starting with the Indian cities most solo travellers visit first.
          </p>
        </div>

        {/* City cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cities.map((city, index) => (
            <Card
              key={city.slug}
              className="p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Emoji */}
                <div className="text-5xl">{city.emoji}</div>

                {/* City name */}
                <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                  {city.name}
                </h3>

                {/* Tagline */}
                <p className="text-lg font-semibold text-primary">{city.tagline}</p>

                {/* Description */}
                <p className="text-card-foreground leading-relaxed">{city.description}</p>

                {/* CTA Button */}
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to={`/cities/${city.slug}`}>Open {city.name} Playbook</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
