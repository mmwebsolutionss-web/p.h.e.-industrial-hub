import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showCTA?: boolean;
}

const PageHero = ({ title, subtitle, backgroundImage, showCTA = false }: PageHeroProps) => {
  return (
    <section className="relative min-h-[360px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mb-6">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/quote">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading px-8">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-heading px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
