import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MoreCitiesSection = () => {
  const cities = [
    {
      name: "Bengaluru",
      slug: "bengaluru",
      tagline: "Tech city, filter coffee and traffic-smart planning.",
      description:
        "Use Namma Metro, BMTC buses, autos and walking to weave through MG Road, Indiranagar, Cubbon Park and beyond without getting stuck in cabs all day.",
      emoji: "☕",
    },
    {
      name: "Mysore",
      slug: "mysore",
      tagline: "Palaces, parks and peaceful lanes at an easy pace.",
      description:
        "Cover Mysore Palace, the zoo and Chamundi Hills using autos, local buses and relaxed walking routes that fit into 1–2 calm days.",
      emoji: "🏰",
    },
    {
      name: "Ooty",
      slug: "ooty",
      tagline: "Toy trains, tea estates and cool hill air.",
      description:
        "Combine the toy train, shared taxis and scenic walks to explore viewpoints and lakes without overpaying every time you move.",
      emoji: "🚂",
    },
    {
      name: "Coorg",
      slug: "coorg",
      tagline: "Coffee country, hills and homestays.",
      description:
        "Plan your stays around Madikeri, hire bikes or cabs smartly, and cluster waterfalls, viewpoints and coffee estates to avoid unnecessary backtracking.",
      emoji: "☕",
    },
    {
      name: "Pondicherry",
      slug: "pondicherry",
      tagline: "French lanes, sea breeze and scooter days.",
      description:
        "Rent a scooter, mix in local buses and long walks to cover White Town, Auroville and hidden cafes at your own slow pace.",
      emoji: "🛵",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            More Indian cities we cover
          </h2>
          <p className="text-lg text-card-foreground">
            Explore hill stations, tech hubs and coastal getaways with the same jugaad mindset.
          </p>
        </div>

        {/* City cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default MoreCitiesSection;
