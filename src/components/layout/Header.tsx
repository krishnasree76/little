import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoName from "@/assets/logo-name.png";
import innovationHub from "@/assets/WhatsApp Image 2026-01-29 at 12.50.51 PM (1).jpeg";
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
    <header className="sticky top-0 z-50 bg-white shadow-soft">

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-3 md:py-4">
  <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-3 text-base md:text-lg">
    
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
      <a 
        href="tel:9984799847" 
        className="flex items-center gap-2 hover:text-accent transition-colors"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-medium">99847 99847</span>
      </a>

      <a 
        href="mailto:pvr@littlegeniusinnovationhub.com" 
        className="flex items-center gap-2 hover:text-accent transition-colors text-center"
      >
        <Mail className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-medium break-all">
          pvr@littlegeniusinnovationhub.com
        </span>
      </a>
    </div>

    <span className="hidden md:block text-primary-foreground/90 font-medium">
      Exclusive Evening Learning Centers
    </span>
    
  </div>
</div>


      {/* Main nav */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <nav className="container-custom py-4">
  <div className="flex items-center gap-4">

    {/* LEFT — Shield Logo */}
    <img
      src={logo}
      alt="Little Genius Kids World Logo"
      className="h-14 sm:h-20 w-auto shrink-0"
    />

    {/* RIGHT — Text Section */}
    <div className="flex flex-col justify-center leading-tight">

      {/* Little Genius Kids World (Top Script Text) */}
      <img
        src={logoName}
        alt="Little Genius Kids World"
        className="h-7 sm:h-10 w-auto"
      />

      {/* Innovation HUB + Tagline */}
      {/* <img
        src={innovationHub}
        alt="Innovation HUB"
        className="h-6 sm:h-8 w-auto mt-1"
      /> */}

    </div>
  </div>
</nav>




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
                {link.name === "Innovation HUB" ? (
                  <span className="font-hub">{link.name}</span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
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
                  {link.name === "Innovation HUB" ? (
                    <span className="font-hub">{link.name}</span>
                  ) : (
                    link.name
                  )}
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
