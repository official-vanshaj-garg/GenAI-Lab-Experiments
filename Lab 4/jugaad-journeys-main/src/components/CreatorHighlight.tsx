import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreatorHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-[500px] w-full bg-card rounded-2xl shadow-lg p-8 text-center border border-border/50">
          {/* Small heading */}
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Behind Jugaad Journeys
          </h3>
          
          {/* Main creator text */}
          <p className="text-base font-medium text-foreground leading-relaxed mb-3">
            Hi, I'm a 3rd-year undergraduate who loves travelling across India and turning real journeys into meaningful digital products.
          </p>
          
          {/* Subtext */}
          <p className="text-sm text-muted-foreground mb-6">
            If you'd like to connect, collaborate or just talk travel, reach out here:
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button 
              asChild 
              variant="outline" 
              size="default"
              className="w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/vnsjgrg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="default"
              className="w-full sm:w-auto"
            >
              <a
                href="mailto:official.vanshaj.garg@gmail.com?subject=Hello%20from%20Jugaad%20Journeys"
                aria-label="Send an email"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorHighlight;
