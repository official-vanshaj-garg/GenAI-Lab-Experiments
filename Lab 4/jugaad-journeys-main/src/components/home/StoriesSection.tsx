import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StoriesSection = () => {
  const stories = [
    {
      title: "Delhi in one day under ₹800",
      description:
        "Start from New Delhi Railway Station, take the metro instead of cabs, explore Old Delhi, India Gate and Connaught Place with planned routes and food stops – all while keeping your spending in check.",
      emoji: "🚇",
    },
    {
      title: "Jaipur without a single cab",
      description:
        "Stay near the old city, use autos and walking loops to cover forts, local markets and sunset points. We show you exactly how to cluster places and avoid back-and-forth travel.",
      emoji: "🛺",
    },
  ];

  return (
    <section id="stories" className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Real stories, real routes
          </h2>
          <p className="text-lg text-card-foreground">
            Built from actual travel across Indian cities – not just AI research.
          </p>
        </div>

        {/* Story cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="text-5xl">{story.emoji}</div>
                <h3 className="text-2xl font-heading font-bold">{story.title}</h3>
                <p className="text-card-foreground leading-relaxed">{story.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button asChild variant="outline" size="lg">
            <Link to="/cities/delhi">Read all travel stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
