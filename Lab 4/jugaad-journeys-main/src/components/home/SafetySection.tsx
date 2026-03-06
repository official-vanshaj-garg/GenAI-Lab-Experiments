import { Shield, Heart } from "lucide-react";

const SafetySection = () => {
  const safetyBasics = [
    "Keep a charged phone and offline map where possible.",
    "Avoid sharing exact hotel details with strangers.",
    "Use public places and crowded areas when unsure.",
    "For late-night travel, prefer metro (where available) or trusted cab services.",
  ];

  const culturalRespect = [
    "Dress according to the local context, especially at religious places.",
    "Ask before taking photos of people, shops or homes.",
    "Learn a few simple phrases in Hindi or local language – it helps a lot.",
    "Be patient with crowds, queues and delays – it's part of the experience.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Safe, respectful, and prepared
          </h2>
          <p className="text-lg text-card-foreground">
            India is warm and welcoming, but it helps to know some basics before you land.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1 - Safety basics */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Safety basics</h3>
            </div>
            <ul className="space-y-4">
              {safetyBasics.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-card-foreground leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Cultural respect */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Cultural respect</h3>
            </div>
            <ul className="space-y-4">
              {culturalRespect.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="text-card-foreground leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
