import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, ShoppingCart, Cog, Truck, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";
import airToolRepairImg from "@/assets/air-tool-repair.jpg";

const services = [
  {
    icon: Wrench,
    title: "Air Tool Repair",
    description: "Complete diagnostic and repair services for all pneumatic tools. Our certified technicians handle everything from minor adjustments to full rebuilds.",
    features: ["Full diagnostic testing", "OEM replacement parts", "48-hour standard turnaround", "Warranty on all repairs"],
  },
  {
    icon: Shield,
    title: "Preventative Maintenance",
    description: "Proactive maintenance programs designed to extend tool life, reduce downtime, and lower your total cost of ownership.",
    features: ["Scheduled maintenance plans", "Lubrication & cleaning", "Performance testing", "Detailed service reports"],
  },
  {
    icon: ShoppingCart,
    title: "Tool Sales",
    description: "New and certified refurbished air tools from top manufacturers. We'll help you find the right tool for your application.",
    features: ["Top brand inventory", "Application consultation", "Volume pricing", "Trade-in programs"],
  },
  {
    icon: Cog,
    title: "Parts Replacement",
    description: "Extensive inventory of genuine replacement parts for all major brands. Same-day shipping on in-stock items.",
    features: ["OEM & aftermarket parts", "Same-day shipping", "Parts lookup assistance", "Bulk ordering"],
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description: "Mobile service technicians come to your facility for repairs, maintenance, and tool audits. Minimize downtime with on-location service.",
    features: ["Mobile repair units", "Scheduled facility visits", "Tool inventory audits", "Emergency callouts"],
  },
];

const Services = () => {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive air tool solutions to keep your operations running smoothly"
        backgroundImage={servicesHero}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wider">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className="flex-1 w-full lg:max-w-md bg-muted rounded-lg h-64 flex items-center justify-center">
                <service.icon className="h-20 w-20 text-muted-foreground/30" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
