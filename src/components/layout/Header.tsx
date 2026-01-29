import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // add at top with other imports


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Founders", path: "/founders" },
  { name: "Innovation HUB", path: "/concept" },
  { name: "Glanto Kits", path: "/glanto-kits" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
  <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm">
    
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
      <a href="tel:9984799847" className="flex items-center gap-1 hover:text-accent transition-colors">
        <Phone className="w-3.5 h-3.5" />
        <span>99847 99847</span>
      </a>

      <a href="mailto:pvr@littlegeniusinnovationhub.com" className="flex items-center gap-1 hover:text-accent transition-colors">
        <Mail className="w-3.5 h-3.5" />
        <span>pvr@littlegeniusinnovationhub.com</span>
      </a>
    </div>

    <span className="hidden md:block text-primary-foreground/80">
      Exclusive Evening Learning Centers
    </span>
  </div>
</div>


      {/* Main nav */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0">
  <img
    src={logo}
    alt="Little Genius Kids World Logo"
    className="h-10 w-auto sm:h-12 shrink-0"
  />

  <div className="min-w-0">
    <h1 className="font-heading font-bold text-primary text-xs sm:text-sm leading-tight truncate">
      Little Genius Kids World®
    </h1>
    <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight truncate">
      Innovation HUB
    </p>
  </div>
</Link>



          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="cta" size="lg" className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
