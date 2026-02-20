import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pheLogo from "@/assets/phe-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={pheLogo} alt="P.H.E Industrial Solutions Logo" className="h-12 w-auto" />
          <span className="font-heading text-2xl font-bold tracking-wider text-primary-foreground">
            P.H.E <span className="text-accent">Industrial</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18327393532" className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <Phone className="h-4 w-4 text-accent" />
            (832) 739-3532
          </a>
          <Link to="/quote">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wider">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-sm uppercase tracking-wider py-2 transition-colors hover:text-accent ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wider mt-2">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
