import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import productsHero from "@/assets/products-hero.jpg";

const categories = [
  {
    title: "Impact Wrenches",
    description: "Pneumatic impact wrenches for automotive and industrial use. 1/4\" to 1\" drive sizes.",
  },
  {
    title: "Die Grinders",
    description: "Straight and angle grinders for grinding, deburring, and polishing metal.",
  },
  {
    title: "Air Drills",
    description: "Reversible and non-reversible pneumatic drills for production environments.",
  },
  {
    title: "Sanders & Polishers",
    description: "Orbital, inline, and rotary sanders. Various pad sizes and speeds available.",
  },
  {
    title: "Air Compressors",
    description: "Portable and stationary compressors to power your pneumatic tool lineup.",
  },
  {
    title: "Specialty Tools",
    description: "Riveting tools, needle scalers, air hammers, and other specialty pneumatic equipment.",
  },
];

const Products = () => {
  return (
    <main>
      <PageHero
        title="Products"
        subtitle="Air tools and pneumatic equipment from the brands you trust"
        backgroundImage={productsHero}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-card border border-border overflow-hidden hover:border-accent/40 transition-colors"
              >
                <div className="h-44 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground/20 font-heading text-lg">
                    {cat.title}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <Link to="/quote">
                    <Button variant="outline" className="w-full font-heading text-sm">
                      Inquire
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
