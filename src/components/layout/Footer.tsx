import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/WhatsApp_Image_2026-01-29_at_12.50.51_PM-removebg-preview.png";
import hubLogo from "@/assets/innovation-hub-logo.png";


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
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
      className="h-14 w-auto object-contain drop-shadow-md"
    />
    <div>
      <h3 className="font-heading font-bold text-lg leading-tight">
        Little Genius Kids World®
      </h3>
      {/* <p className="text-sm text-primary-foreground/80">Innovation HUB</p> */}
    </div>
  </div>

  <img
    src={hubLogo}
    alt="Innovation HUB"
    className="h-10 w-auto object-contain drop-shadow-md"
  />
</div>


            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Exclusive Evening Learning Centers where children develop skills, confidence, and creativity through activity-based learning.
            </p>
            {/* <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/founders" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Founders
                </Link>
              </li>
              <li>
                <Link to="/concept" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Innovation HUB Concept
                </Link>
              </li>
              <li>
                <Link to="/glanto-kits" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Glanto Edu Kits
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Franchise Opportunity
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3 text-primary-foreground/80">
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
                <span className="text-primary-foreground/80 text-sm">
                  C-05-320, Beside Sri Krishna Temple,<br />
                  Dwaraka Nagar, KADAPA – 516004
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <a href="tel:9984799847" className="hover:text-accent transition-colors block">99847 99847</a>
                  <a href="tel:9642999847" className="hover:text-accent transition-colors block">96429 99847</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:pvr@littlegeniusinnovationhub.com" className="text-primary-foreground/80 text-sm hover:text-accent transition-colors break-all">
                  pvr@littlegeniusinnovationhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© 2024 Little Genius Kids World® – Innovation HUB. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
