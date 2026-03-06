import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreatorHighlight from "@/components/CreatorHighlight";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";

interface CityData {
  name: string;
  emoji: string;
  tagline: string;
  bestTime: string;
  idealArea: string;
  dailyBudget: string;
  primaryTransport: string;
  secondaryTransport: string;
  whenCabs: string;
  quickTips: string[];
  day1: string;
  day2: string;
  day3: string;
}

const cityData: Record<string, CityData> = {
  delhi: {
    name: "Delhi",
    emoji: "🏛️",
    tagline: "Move like a local",
    bestTime: "October–March",
    idealArea: "Paharganj / Karol Bagh / South Delhi (as per budget)",
    dailyBudget: "₹600–₹1,200 (commute + food + basic entry tickets)",
    primaryTransport: "Delhi Metro",
    secondaryTransport: "E-rickshaws + walking",
    whenCabs: "Only for very late night travel or very off-route locations.",
    quickTips: [
      "Get a metro card instead of single tokens.",
      "Use Gate numbers carefully to avoid extra walking.",
      "Always confirm e-rickshaw price before sitting.",
    ],
    day1: "Old Delhi + India Gate + CP",
    day2: "Add Qutub Minar / Humayun's Tomb",
    day3: "Add one museum/market + one chill cafe/local area",
  },
  jaipur: {
    name: "Jaipur",
    emoji: "🏰",
    tagline: "Pink City travel made simple",
    bestTime: "October–March",
    idealArea: "Near Old City / MI Road area",
    dailyBudget: "₹500–₹1,000 (commute + food + entry tickets)",
    primaryTransport: "Auto-rickshaws",
    secondaryTransport: "Walking + shared cabs",
    whenCabs: "For early morning fort visits or late evening returns.",
    quickTips: [
      "Negotiate auto fares before starting your journey.",
      "Group nearby spots to reduce back-and-forth travel.",
      "Visit forts early morning to avoid heat and crowds.",
    ],
    day1: "Amer Fort + Hawa Mahal + City Palace",
    day2: "Jaigarh Fort + Nahargarh Fort + Johari Bazaar",
    day3: "Jantar Mantar + local markets + cafe hopping",
  },
  mumbai: {
    name: "Mumbai",
    emoji: "🌊",
    tagline: "Navigate the city of dreams",
    bestTime: "November–February",
    idealArea: "Colaba / Bandra / Andheri (based on budget)",
    dailyBudget: "₹400–₹900 (commute + food + attractions)",
    primaryTransport: "Local trains",
    secondaryTransport: "BEST buses + walking",
    whenCabs: "Late night or areas not connected by local trains.",
    quickTips: [
      "Avoid peak rush hours (8-11 AM, 6-9 PM) if you're new to locals.",
      "Ladies compartments are available in every train.",
      "Marine Drive and seaside areas are best early morning or evening.",
    ],
    day1: "Gateway of India + Marine Drive + Colaba Causeway",
    day2: "Bandra Fort + Linking Road + Carter Road promenade",
    day3: "Elephanta Caves OR local markets + street food tour",
  },
  goa: {
    name: "Goa",
    emoji: "🏖️",
    tagline: "Beyond resorts",
    bestTime: "November–February",
    idealArea: "Near beach area based on preference (North/South Goa)",
    dailyBudget: "₹700–₹1,500 (bike rental + fuel + food)",
    primaryTransport: "Bike/scooter rental",
    secondaryTransport: "Local buses + walking",
    whenCabs: "Airport transfers or late-night travel.",
    quickTips: [
      "Always wear a helmet while riding.",
      "Keep one day for slow exploration instead of rushing beaches.",
      "Try local Goan food at small shacks, not just touristy places.",
    ],
    day1: "North Goa: Calangute + Baga + Anjuna beaches",
    day2: "South Goa: Palolem + Agonda + quiet beaches",
    day3: "Old Goa churches + spice plantations OR chill beach day",
  },
  bengaluru: {
    name: "Bengaluru",
    emoji: "☕",
    tagline: "Tech city, filter coffee and traffic-smart planning",
    bestTime: "November–February",
    idealArea: "MG Road / Indiranagar / Koramangala",
    dailyBudget: "₹600–₹1,200 (commute + food + basic entries)",
    primaryTransport: "Namma Metro",
    secondaryTransport: "BMTC buses + autos + walking",
    whenCabs: "For late-night returns or areas far from metro/bus coverage.",
    quickTips: [
      "Use Namma Metro for main routes like MG Road, Majestic and key corridors.",
      "BMTC buses are great for budget travel across long distances.",
      "Autos are convenient for short hops – agree on price or use an app where possible.",
    ],
    day1: "MG Road + Cubbon Park + nearby cafes and a quick evening at Church Street using metro and walking",
    day2: "Add Lalbagh, a museum/temple of your choice and an Indiranagar or Koramangala food walk",
    day3: "Add Nandi Hills or a nearby day trip plus one slow 'work from cafe' or chill day",
  },
  mysore: {
    name: "Mysore",
    emoji: "🏰",
    tagline: "Calm, royal and walkable",
    bestTime: "October–February",
    idealArea: "Near city centre / Devaraja Market side",
    dailyBudget: "₹500–₹1,000",
    primaryTransport: "Autos + walking",
    secondaryTransport: "Local buses for farther spots",
    whenCabs: "Only when travelling outside the main city or at odd hours.",
    quickTips: [
      "Stay near the centre so palace, markets and zoo are nearby.",
      "Use autos for Chamundi Hills or bus stand connections.",
      "Plan early morning visits for outdoor spots to avoid heat.",
    ],
    day1: "Mysore Palace, Devaraja Market, evening at the palace lighting or a nearby park",
    day2: "Add Mysore Zoo and Chamundi Hills",
    day3: "Add a relaxed day for cafes, local sweets and strolling around calm neighbourhoods",
  },
  ooty: {
    name: "Ooty",
    emoji: "🚂",
    tagline: "Hill station the smart way",
    bestTime: "October–June",
    idealArea: "Near Ooty town or slightly outside for views",
    dailyBudget: "₹700–₹1,300",
    primaryTransport: "Toy train + hired taxi",
    secondaryTransport: "Shared cabs + walking",
    whenCabs: "For day-long sightseeing covering multiple viewpoints and lakes.",
    quickTips: [
      "Book the Nilgiri toy train in advance to avoid last-minute rush.",
      "Hire a cab for a half/full day instead of multiple short trips.",
      "Carry a light jacket – weather can turn cool and misty quickly.",
    ],
    day1: "Ooty Lake + Botanical Garden + viewpoints near town",
    day2: "Add toy train ride + tea estate visit",
    day3: "Add offbeat viewpoints or nearby villages and slow cafe time",
  },
  coorg: {
    name: "Coorg",
    emoji: "☕",
    tagline: "Coffee, hills and homestays",
    bestTime: "October–March",
    idealArea: "Madikeri or nearby homestays",
    dailyBudget: "₹700–₹1,300",
    primaryTransport: "Bike or cab rental",
    secondaryTransport: "Short walks near stay",
    whenCabs: "For groups or when you're not comfortable riding on hilly roads.",
    quickTips: [
      "Distances between points are long – plan Madikeri-side places together.",
      "Start early for waterfalls and viewpoints to avoid afternoon fog or crowds.",
      "Keep some offline maps handy in case of patchy network.",
    ],
    day1: "Madikeri town, Raja's Seat viewpoint and one waterfall",
    day2: "Add coffee estate tour + one more waterfall or viewpoint",
    day3: "Add a chill homestay day, short walks and local food exploration",
  },
  pondicherry: {
    name: "Pondicherry",
    emoji: "🛵",
    tagline: "French lanes and scooter days",
    bestTime: "November–February",
    idealArea: "White Town or nearby",
    dailyBudget: "₹600–₹1,200",
    primaryTransport: "Scooter rental + walking",
    secondaryTransport: "Local buses and autos for Auroville and outskirts",
    whenCabs: "For late-night returns or out-of-town airport/railway connections.",
    quickTips: [
      "Use mornings and evenings for promenade and White Town walks.",
      "Scooters give maximum flexibility between cafes, beaches and Auroville.",
      "Keep some cash for smaller local cafes and shops.",
    ],
    day1: "White Town walk, beach promenade, cafes and churches",
    day2: "Add Auroville visit and nearby beaches",
    day3: "Add cycling/scooter-based exploring of hidden lanes, eateries and relaxed seaside time",
  },
};

const CityPlaybook = () => {
  const { city } = useParams<{ city: string }>();
  const data = city ? cityData[city] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">City not found</h1>
          <Button asChild>
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="text-7xl mb-6">{data.emoji}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
                {data.name} Playbook – {data.tagline}
              </h1>
              <p className="text-lg sm:text-xl text-card-foreground max-w-3xl mx-auto">
                Practical 1–3 day plans for {data.name} using metro, e-rickshaws, and walking – 
                with real budgets and simple routes.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center bg-card border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Best time to visit</p>
                <p className="text-lg font-bold text-foreground">{data.bestTime}</p>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Ideal stay area</p>
                <p className="text-lg font-bold text-foreground">{data.idealArea}</p>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Daily budget range (excluding stay)
                </p>
                <p className="text-lg font-bold text-foreground">{data.dailyBudget}</p>
              </Card>
            </div>
          </div>

          {/* Move Like a Local Section */}
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center">
              Move Like a Local
            </h2>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4 text-primary">
                    Transport Options
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Primary transport</p>
                      <p className="text-lg text-foreground">{data.primaryTransport}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Secondary</p>
                      <p className="text-lg text-foreground">{data.secondaryTransport}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">When to use cabs</p>
                      <p className="text-lg text-foreground">{data.whenCabs}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-4 text-secondary">
                    Quick Commute Jugaad
                  </h3>
                  <ul className="space-y-3">
                    {data.quickTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-card-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Sample Plans */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center">
              1-Day, 2-Day, 3-Day Sample Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold">1-Day Plan</h3>
                  <p className="text-card-foreground">{data.day1}</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-bold text-secondary">2</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold">2-Day Plan</h3>
                  <p className="text-card-foreground">{data.day2}</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-bold text-accent-foreground">3</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold">3-Day Plan</h3>
                  <p className="text-card-foreground">{data.day3}</p>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <Button asChild size="lg">
              <Link to="/">Explore more cities</Link>
            </Button>
          </div>
        </div>
      </main>
      <CreatorHighlight />
      <Footer />
    </div>
  );
};

export default CityPlaybook;
