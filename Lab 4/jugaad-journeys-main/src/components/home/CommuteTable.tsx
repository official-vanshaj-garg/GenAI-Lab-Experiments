const CommuteTable = () => {
  const commuteData = [
    {
      city: "Delhi",
      bestWay: "Metro + e-rickshaw",
      dailyCost: "₹150–₹250",
      proTip: "Get a metro card and use e-rickshaws only for the last 1–2 km.",
    },
    {
      city: "Jaipur",
      bestWay: "Autos + walking",
      dailyCost: "₹120–₹220",
      proTip: "Negotiate auto fares upfront and group nearby spots in one go.",
    },
    {
      city: "Mumbai",
      bestWay: "Local trains + BEST buses + walking",
      dailyCost: "₹100–₹200",
      proTip:
        "Avoid peak rush hours in locals if you're new; plan seaside spots for early mornings or evenings.",
    },
    {
      city: "Goa",
      bestWay: "Bike/scooter rental + walking",
      dailyCost: "₹250–₹400 (excluding fuel hikes)",
      proTip:
        "Always wear a helmet and keep one day just for slow exploration instead of rushing multiple beaches.",
    },
    {
      city: "Bengaluru",
      bestWay: "Namma Metro + BMTC buses + autos",
      dailyCost: "₹150–₹300",
      proTip:
        "Use the metro for main corridors and BMTC for longer gaps; avoid peak office rush when possible.",
    },
    {
      city: "Mysore",
      bestWay: "Autos + local buses + walking",
      dailyCost: "₹100–₹200",
      proTip:
        "Stay near the city centre so most spots are a short auto ride or walk away.",
    },
    {
      city: "Ooty",
      bestWay: "Toy train + shared taxis + walking",
      dailyCost: "₹200–₹400",
      proTip:
        "Book toy train tickets early and hire a cab for a half or full day instead of many tiny rides.",
    },
    {
      city: "Coorg",
      bestWay: "Bike or cab rental + short walks",
      dailyCost: "₹300–₹500",
      proTip:
        "Roads are hilly and distances spread out – cluster waterfalls and viewpoints region-wise.",
    },
    {
      city: "Pondicherry",
      bestWay: "Scooter rental + walking + local buses",
      dailyCost: "₹200–₹400",
      proTip:
        "Use mornings and evenings for beachside and White Town walks; keep mid-day for cafes and indoor spots.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Commute Jugaad at a glance
          </h2>
          <p className="text-lg text-card-foreground">
            A quick snapshot of the smartest way to move in each city.
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden lg:block overflow-x-auto animate-fade-in">
          <table className="w-full bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-heading font-bold">City</th>
                <th className="px-6 py-4 text-left font-heading font-bold">Best way to roam</th>
                <th className="px-6 py-4 text-left font-heading font-bold">
                  Approx daily commute cost
                </th>
                <th className="px-6 py-4 text-left font-heading font-bold">Pro tip</th>
              </tr>
            </thead>
            <tbody>
              {commuteData.map((row, index) => (
                <tr
                  key={row.city}
                  className={`border-t border-border hover:bg-muted/50 transition-colors ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/30"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{row.city}</td>
                  <td className="px-6 py-4 text-card-foreground">{row.bestWay}</td>
                  <td className="px-6 py-4 text-card-foreground font-semibold">{row.dailyCost}</td>
                  <td className="px-6 py-4 text-card-foreground">{row.proTip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {commuteData.map((row, index) => (
            <div
              key={row.city}
              className="bg-card rounded-2xl p-6 shadow-md border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{row.city}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Best way to roam</p>
                  <p className="text-card-foreground">{row.bestWay}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    Approx daily commute cost
                  </p>
                  <p className="text-card-foreground font-semibold">{row.dailyCost}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Pro tip</p>
                  <p className="text-card-foreground">{row.proTip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommuteTable;
