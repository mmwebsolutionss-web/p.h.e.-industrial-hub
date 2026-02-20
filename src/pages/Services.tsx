import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, ShoppingCart, Cog, Truck, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    icon: Wrench,
    title: "Air Tool Repair",
    description: "We repair all makes and models of pneumatic tools. Impact wrenches, grinders, drills, sanders — bring it in or ship it to us. Most repairs are completed within 48 hours.",
    features: ["Full diagnostic testing", "OEM replacement parts", "48-hour standard turnaround", "Warranty on all repairs"],
  },
  {
    icon: Shield,
    title: "Preventative Maintenance",
    description: "Don't wait for tools to break. Our scheduled maintenance programs keep your equipment running and extend its lifespan. We'll set up a plan that fits your operation.",
    features: ["Scheduled service visits", "Lubrication & cleaning", "Performance testing", "Service reports"],
  },
  {
    icon: ShoppingCart,
    title: "Tool Sales",
    description: "We sell new and certified refurbished air tools from the brands you trust. Not sure what you need? We'll help you pick the right tool for the job.",
    features: ["Top brand inventory", "Application consultation", "Volume pricing", "Trade-in programs"],
  },
  {
    icon: Cog,
    title: "Parts & Accessories",
    description: "We stock genuine parts for all major brands. Need something specific? We can source it. Most in-stock parts ship the same day.",
    features: ["OEM & aftermarket parts", "Same-day shipping", "Parts lookup help", "Bulk ordering"],
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description: "Can't bring tools to us? We'll come to you. Our mobile technicians handle repairs, maintenance, and tool audits right at your facility.",
    features: ["Mobile repair units", "Scheduled facility visits", "Tool inventory audits", "Emergency callouts"],
  },
];

const Services = () => {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Everything you need to keep your air tools running"
        backgroundImage={servicesHero}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-14">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="h-7 w-7 text-accent" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className="flex-1 w-full lg:max-w-md bg-muted h-56 flex items-center justify-center border border-border">
                <service.icon className="h-16 w-16 text-muted-foreground/20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
