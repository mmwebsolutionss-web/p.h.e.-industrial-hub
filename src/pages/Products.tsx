import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import productsHero from "@/assets/products-hero.jpg";
import impactWrenchImg from "@/assets/impact-wrench.jpg";
import dieGrinderImg from "@/assets/die-grinder.png";
import airDrillImg from "@/assets/air-drill.png";

const categories = [
{
  title: "Impact Wrenches",
  description: "High-torque pneumatic impact wrenches for automotive and industrial applications.",
  specs: "1/4\" to 1\" drive sizes available",
  image: impactWrenchImg
},
{
  title: "Die Grinders",
  description: "Precision air grinders for grinding, deburring, and polishing metal surfaces.",
  specs: "Straight and angle configurations",
  image: dieGrinderImg
},
{
  title: "Air Drills",
  description: "Pneumatic drills offering consistent power and speed for production drilling.",
  specs: "Reversible and non-reversible models"
},
{
  title: "Sanders & Polishers",
  description: "Orbital, inline, and rotary sanders for surface preparation and finishing.",
  specs: "Various pad sizes and speeds"
},
{
  title: "Air Compressors",
  description: "Industrial-grade compressors to power your entire pneumatic tool lineup.",
  specs: "Portable and stationary units"
},
{
  title: "Specialty Tools",
  description: "Riveting tools, needle scalers, air hammers, and other specialty pneumatic equipment.",
  specs: "Application-specific solutions"
}];


const Products = () => {
  return (
    <main>
      <PageHero
        title="Products"
        subtitle="Premium air tools and pneumatic equipment from industry-leading manufacturers"
        backgroundImage={productsHero} />
      

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) =>
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all group">
              
                {cat.image ?
              <img src={cat.image} alt={cat.title} className="w-full h-48 object-contain contrast-110 saturate-[1.15] brightness-105" /> :

              <div className="h-48 bg-muted flex items-center justify-center">
                    <span className="font-heading text-muted-foreground/30 text-xl uppercase tracking-wider">
                      {cat.title}
                    </span>
                  </div>
              }
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-foreground mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {cat.description}
                  </p>
                  <p className="text-xs font-medium mb-4 text-black">{cat.specs}</p>
                  <Link to="/quote">
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-heading uppercase tracking-wider text-sm">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>);

};

export default Products;