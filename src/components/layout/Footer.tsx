import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import hubLogo from "@/assets/image.png";

export function Footer() {
  return (
    <footer className="bg-white text-primary">
      {/* Main footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          {/* Brand */}
<div className="space-y-6 flex flex-col items-center text-center">
  <img
    src={hubLogo}
    alt="Innovation HUB"
    className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
  />

  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
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
                  Register office C-05-320,<br />
                  Beside Sri Krishna Temple,<br />
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
      © 2026 <span className="font-lgkw">Little Genius Kids World®</span> –{" "}
      <span className="font-hub">Innovation HUB</span>. All rights reserved.
    </p>

    <p className="flex items-center gap-1">
      Made with <span className="text-red-500">❤️</span> by{" "}
      <a
        href="https://staffarc.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent font-medium transition-colors"
      >
        StaffArc
      </a>
    </p>

  </div>
</div>

    </footer>
  );
}
