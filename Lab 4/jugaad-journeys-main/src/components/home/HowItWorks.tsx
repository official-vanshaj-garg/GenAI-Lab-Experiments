import { Link } from "react-router-dom";
import { MapPinned, Route, Users2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      icon: MapPinned,
      title: "Pick your city",
      description:
        "Start with a city you want to explore – like Delhi, Jaipur, Mumbai or Goa. Each city has its own detailed \"playbook\".",
    },
    {
      step: "Step 2",
      icon: Route,
      title: "Use the commute-first playbook",
      description:
        "Follow our day plans that are built around local transport. Metro, bus, e-rickshaw, auto or walking – we show you the smartest way to move.",
    },
    {
      step: "Step 3",
      icon: Users2,
      title: "Travel like a local",
      description:
        "Get tips on what to avoid, where to eat, how much to pay and how to stay safe – so you can travel confidently, not anxiously.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            How Jugaad Journeys works
          </h2>
          <p className="text-lg text-card-foreground">
            Think of it as your India travel operating manual – simple, visual and practical.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Step label */}
                  <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-sm font-semibold text-primary">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                  <p className="text-card-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center animate-fade-in">
          <Link
            to="/cities/delhi"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            View a sample playbook
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
