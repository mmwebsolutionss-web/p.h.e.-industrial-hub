import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import pheLogo from "@/assets/phe-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img alt="P.H.E Industrial Solutions Logo" className="h-14 w-auto" src="/lovable-uploads/ae3eda96-21b9-495d-a9b0-12a19de10f34.png" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wider mb-2">
              P.H.E <span className="text-accent">Industrial</span>
            </h3>
            <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-3">Handle With Precision</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Pneumatic • Hydraulic • Electrical — Your trusted partner for industrial solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
              { to: "/services", label: "Our Services" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/quote", label: "Request a Quote" },
              { to: "/contact", label: "Contact Us" }].
              map((link) =>
              <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Air Tool Repair</li>
              <li>Preventative Maintenance</li>
              <li>Tool Sales</li>
              <li>Parts Replacement</li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                (713) 505-1217
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                sales@pheindustrialsolutionsllc.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                1730 Preston St. Bldg C, Pasadena, TX 77502
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} P.H.E Industrial Solutions LLC. All rights reserved.
        </div>
      </div>
    </footer>);

};

export default Footer;