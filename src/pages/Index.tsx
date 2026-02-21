import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, ShoppingCart, Cog, Truck, ArrowRight, Phone, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-industrial.jpg";

const services = [
{
  icon: Wrench,
  title: "Air Tool Repair",
  description: "Expert diagnosis and repair of all pneumatic tools. Fast turnaround to minimize your downtime."
},
{
  icon: Shield,
  title: "Preventative Maintenance",
  description: "Scheduled maintenance programs to extend tool life and maximize performance."
},
{
  icon: ShoppingCart,
  title: "Tool Sales",
  description: "Premium air tools from industry-leading brands at competitive prices."
},
{
  icon: Cog,
  title: "Parts Replacement",
  description: "Genuine replacement parts for all major air tool brands, in stock and ready to ship."
},
{
  icon: Truck,
  title: "On-Site Service",
  description: "Mobile technicians available for on-location repairs and maintenance."
}];


const brands = [
"Ingersoll Rand", "Chicago Pneumatic", "Snap-on", "Atlas Copco",
"Dynabrade", "Dotco", "Cleco", "Florida Pneumatic"];


const trustPoints = [
"Certified Technicians",
"Fast Turnaround",
"Competitive Pricing",
"All Major Brands",
"Warranty on Repairs",
"Free Estimates"];


const Index = () => {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="P.H.E Industrial Solutions LLC"
        subtitle="Professional Air Tool Sales & Repair Services — Keeping Your Operations Running at Peak Performance"
        backgroundImage={heroImage}
        showCTA />


      {/* Trust Badges */}
      <section className="bg-accent py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
          {trustPoints.map((point) =>
          <div key={point} className="flex items-center gap-2 text-accent-foreground font-medium text-sm">
              <CheckCircle className="h-4 w-4" />
              {point}
            </div>
          )}
        </div>
      </section>

      {/* Services Overview */}
      





































      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary-foreground mb-6">
            Why Choose <span className="text-accent">P.H.E</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
            { title: "25+ Years Experience", desc: "Decades of expertise in pneumatic tool repair and industrial solutions." },
            { title: "OEM Parts Guarantee", desc: "We only use genuine manufacturer parts for all repairs and replacements." },
            { title: "24/7 Emergency Service", desc: "Production can't wait. Our emergency response team is always on call." }].
            map((item) =>
            <div key={item.title} className="text-primary-foreground">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-10">
            Brands We <span className="text-[#c50d0d]">Service & Sell</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand) =>
            <div
              key={brand}
              className="bg-card border border-border rounded-lg p-6 font-heading text-foreground text-lg font-semibold uppercase tracking-wider hover:border-accent/50 transition-colors">

                {brand}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-accent-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us today for a free estimate on air tool repair or to discuss your industrial tool needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wider text-lg px-8">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+17135051217">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-heading uppercase tracking-wider text-lg px-8">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>);

};

export default Index;