import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, TrendingDown, Book } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">Smart Travel</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm font-semibold text-secondary">For India</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Travel India the smart way.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-card-foreground leading-relaxed max-w-2xl">
              Jugaad Journeys helps you roam Indian cities like a local – using metros, 
              e-rickshaws, buses and real traveller hacks instead of overpriced cabs and 
              confusing tourist traps.
            </p>

            {/* Bullet highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-primary" />
                </div>
                <p className="text-card-foreground">
                  Save more on every trip with city-wise commute hacks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-secondary/10 rounded-lg">
                  <Book className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-card-foreground">
                  Get practical 1–3 day city playbooks, not generic "Top 10 places"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-accent/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-card-foreground">
                  Learn from real Indian travel stories and on-ground experience
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/cities/delhi">Explore Delhi Playbook</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/cities/delhi">Browse All Cities</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Hero visual */}
          <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 lg:p-12 flex items-center justify-center border-2 border-primary/20 shadow-xl">
              <div className="text-center space-y-6">
                <div className="text-6xl lg:text-7xl">🇮🇳</div>
                <div className="space-y-2">
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                    India-first
                  </p>
                  <p className="text-xl lg:text-2xl font-heading font-bold text-primary">
                    Smart Travel
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-4xl">
                  <span>🚇</span>
                  <span>🛺</span>
                  <span>🎒</span>
                  <span>☕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
