import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Cities", path: "/cities/delhi" },
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Stories", path: "/#stories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "mailto:hello@jugaadjourneys.com" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Logo and tagline */}
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-bold">Jugaad Journeys</h3>
            <p className="text-secondary-foreground/90 max-w-xs">
              Travel India with more confidence, less confusion.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary-foreground/90 hover:text-secondary-foreground transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-secondary-foreground/20">
          <p className="text-sm text-secondary-foreground/80 text-center">
            © 2025 Jugaad Journeys. Built in India, for travellers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
