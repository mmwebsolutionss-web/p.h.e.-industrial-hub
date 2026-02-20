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
            <img alt="P.H.E Industrial Solutions" className="h-12 w-auto mb-3" src="/lovable-uploads/059ab709-72ec-4db5-9e5e-abac0b1be5fd.png" />
            <p className="font-heading text-lg font-bold mb-1">P.H.E Industrial Solutions</p>
            <p className="text-primary-foreground/50 text-xs mb-3">Pneumatic · Hydraulic · Electrical</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Serving the Houston area with air tool sales, repair, and industrial supply since 1998.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {[
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/quote", label: "Request a Quote" },
              { to: "/contact", label: "Contact" }].
              map((link) =>
              <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Air Tool Repair</li>
              <li>Preventative Maintenance</li>
              <li>Tool Sales</li>
              <li>Parts & Accessories</li>
              <li>On-Site Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+18327393532" className="hover:text-accent transition-colors">(832) 739-3532</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@pheindustrial.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                1730 Preston St. Bldg C, Pasadena, TX 77502
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} P.H.E Industrial Solutions. All rights reserved.
        </div>
      </div>
    </footer>);

};

export default Footer;