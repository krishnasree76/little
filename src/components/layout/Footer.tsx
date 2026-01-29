import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import hubLogo from "@/assets/WhatsApp Image 2026-01-29 at 12.50.51 PM (1).jpeg";

export function Footer() {
  return (
    <footer className="bg-white text-primary">
      {/* Main footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Little Genius Kids World Logo"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <h3 className="font-lgkw text-lg leading-tight">
                    Little Genius Kids World®
                  </h3>
                </div>
              </div>

              <p className="font-hub text-sm tracking-wide">
                Innovation HUB
              </p>

              <img
                src={hubLogo}
                alt="Innovation HUB"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Exclusive Evening Learning Centers where children develop skills, confidence, and creativity through activity-based learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/founders" className="text-muted-foreground hover:text-accent transition-colors">
                  About Founders
                </Link>
              </li>
              <li>
                <Link to="/concept" className="text-muted-foreground hover:text-accent transition-colors">
                  <span className="font-hub">Innovation HUB</span> Concept
                </Link>
              </li>
              <li>
                <Link to="/glanto-kits" className="text-muted-foreground hover:text-accent transition-colors">
                  Glanto Edu Kits
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-muted-foreground hover:text-accent transition-colors">
                  Franchise Opportunity
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Skill Development Classes</li>
              <li>Activity-Based Learning</li>
              <li>Confidence Building</li>
              <li>Creative Exploration</li>
              <li>Evening Learning Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Register office C-05-320,<br /> Beside Sri Krishna Temple,<br />
                  Dwaraka Nagar, KADAPA – 516004
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <a href="tel:9984799847" className="hover:text-accent transition-colors block">
                    99847 99847
                  </a>
                  <a href="tel:9642999847" className="hover:text-accent transition-colors block">
                    96429 99847
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:pvr@littlegeniusinnovationhub.com"
                  className="text-muted-foreground text-sm hover:text-accent transition-colors break-all"
                >
                  pvr@littlegeniusinnovationhub.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 <span className="font-lgkw">Little Genius Kids World®</span> – <span className="font-hub">Innovation HUB</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
