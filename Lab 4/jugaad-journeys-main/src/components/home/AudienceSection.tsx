const AudienceSection = () => {
  const audienceTags = [
    "Solo travellers exploring India",
    "College students on a tight budget",
    "Backpackers who love local experiences",
    "Remote workers travelling between Indian cities",
    "First-time visitors who don't want to be scammed",
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Who Jugaad Journeys is made for
          </h2>
          <p className="text-lg text-card-foreground">
            If any of these sound like you, you're in the right place.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {audienceTags.map((tag, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 rounded-full hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <span className="text-foreground font-semibold">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
