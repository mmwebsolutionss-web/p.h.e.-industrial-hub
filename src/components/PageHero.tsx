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
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-4 py-20 animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wider text-lg px-8">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-heading uppercase tracking-wider text-lg px-8">
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
