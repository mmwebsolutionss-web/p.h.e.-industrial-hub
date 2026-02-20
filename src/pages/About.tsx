import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-industrial.jpg";

const About = () => {
  return (
    <main>
      <PageHero
        title="About P.H.E Industrial"
        subtitle="Serving the Houston area since 1998"
        backgroundImage={heroImage}
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5">
            How We Got Here
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              P.H.E Industrial Solutions started as a small repair shop. Customers needed their air tools fixed fast, and we delivered. Word spread. Over 25 years later, we've grown into a full-service industrial supply partner — but the approach hasn't changed.
            </p>
            <p>
              We work with automotive shops, manufacturing plants, refineries, and construction crews across the greater Houston area. Whether it's a single impact wrench repair or outfitting a new facility, we treat every job the same way: do it right, do it fast, use good parts.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            What We're About
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-1">Keep You Running</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Downtime costs money. We focus on fast turnaround and emergency service because we know your tools can't sit in a shop for two weeks.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-1">Honest Work</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                If a tool isn't worth repairing, we'll tell you. If an aftermarket part will work just as well, we'll offer it. No upselling, no runaround.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-1">Quality Parts</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                We use genuine OEM parts for repairs. Every job gets the same level of care whether it's a $200 grinder or a $2,000 torque wrench.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-accent-foreground mb-1">
              Ready to work together?
            </h2>
            <p className="text-accent-foreground/70 text-sm">
              Give us a call or send a message. We'll take it from there.
            </p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
