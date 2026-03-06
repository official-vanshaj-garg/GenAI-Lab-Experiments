import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🚇</div>
        <div className="absolute bottom-10 right-10 text-6xl">🛺</div>
        <div className="absolute top-1/2 left-1/4 text-5xl">🎒</div>
        <div className="absolute top-1/3 right-1/4 text-5xl">☕</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Ready to plan your smart India trip?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Start with a city playbook, follow the local hacks, and build your own stories on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base font-semibold shadow-lg hover:shadow-xl"
            >
              <Link to="/cities/delhi">Explore Delhi Playbook</Link>
            </Button>
            <Link
              to="/cities/delhi"
              className="text-white hover:text-white/80 font-semibold transition-colors group flex items-center gap-2"
            >
              Or browse all cities
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
