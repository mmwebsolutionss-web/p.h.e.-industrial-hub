import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, ShoppingCart, Cog, Truck, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-industrial.jpg";

const services = [
  {
    icon: Wrench,
    title: "Air Tool Repair",
    description: "We diagnose and fix pneumatic tools — impact wrenches, grinders, drills, you name it. Most repairs done in 48 hours.",
  },
  {
    icon: Shield,
    title: "Preventative Maintenance",
    description: "Scheduled service plans that catch problems before they shut you down. Keeps your tools running longer.",
  },
  {
    icon: ShoppingCart,
    title: "Tool Sales",
    description: "New and refurbished air tools from brands like Ingersoll Rand, Chicago Pneumatic, and Snap-on.",
  },
  {
    icon: Cog,
    title: "Parts & Accessories",
    description: "OEM and aftermarket parts in stock. Same-day shipping on most orders.",
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description: "Our mobile techs come to your shop or job site. No need to ship tools out.",
  },
];

const brands = [
  "Ingersoll Rand", "Chicago Pneumatic", "Snap-on", "Atlas Copco",
  "Dynabrade", "Dotco", "Cleco", "Florida Pneumatic"
];

const Index = () => {
  return (
    <main>
      <PageHero
        title="P.H.E Industrial Solutions"
        subtitle="Air tool sales, repair, and service for shops and facilities across the Houston area."
        backgroundImage={heroImage}
        showCTA
      />

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What We Do
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            From a single tool repair to outfitting an entire facility — we handle it all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border p-6 hover:border-accent/40 transition-colors"
              >
                <service.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services">
              <Button variant="outline" className="font-heading">
                All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-10">
            Why Shops Trust P.H.E
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-2">25+ Years in the Business</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                We've been repairing and selling pneumatic tools since the late '90s. We know these tools inside and out.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-2">OEM Parts Only</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                No cheap knockoffs. Every repair uses genuine manufacturer parts so your tools last.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-2">Emergency Service Available</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Production down? Call us. We offer same-day emergency repairs to get you back up and running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Brands We Work With
          </h2>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="bg-muted border border-border px-5 py-3 font-heading text-foreground text-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-14 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
              Need a repair or quote?
            </h2>
            <p className="text-accent-foreground/80">
              Call us or fill out our quote form — we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/quote">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading px-8">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+18327393532">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-heading px-8">
                <Phone className="mr-2 h-5 w-5" /> (832) 739-3532
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
