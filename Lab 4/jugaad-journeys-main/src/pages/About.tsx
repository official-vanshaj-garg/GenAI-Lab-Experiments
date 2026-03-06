import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreatorHighlight from "@/components/CreatorHighlight";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              The story behind Jugaad Journeys
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-card-foreground leading-relaxed animate-fade-in-up">
            <p>
              Jugaad Journeys started from a simple observation: most travel sites show beautiful 
              photos, but very few explain how people actually move from one place to another in 
              India without wasting money or energy.
            </p>

            <p>
              This project is built from real travel across Indian cities – taking metros, standing 
              in bus lines, negotiating with autos, walking long shortcuts and learning what actually 
              works on the ground.
            </p>

            <p>
              Our goal is to make travel in India more accessible for solo travellers, students and 
              budget explorers by giving them clear, honest and practical guidance instead of vague 
              "Top 10" lists.
            </p>

            {/* Subheading */}
            <div className="pt-8">
              <h2 className="text-3xl font-heading font-bold mb-6">What Jugaad means to us</h2>
              <p>
                Jugaad is not just a hack. It's a way of thinking – being resourceful, creative and 
                smart with what you have. Jugaad Journeys applies that mindset to travel, so you can 
                see more of India with less stress.
              </p>
            </div>

            {/* Visual element */}
            <div className="mt-12 p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border-2 border-primary/20 text-center">
              <div className="text-6xl mb-6">🇮🇳</div>
              <p className="text-2xl font-heading font-bold text-foreground">
                Built in India, for travellers everywhere.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CreatorHighlight />
      <Footer />
    </div>
  );
};

export default About;
