import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Award, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-industrial.jpg";

const About = () => {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner in industrial pneumatic solutions since 1998"
        backgroundImage={heroImage} />
      

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6 text-center">
            Our <span className="text-accent">Story</span>
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              P.H.E Industrial Solutions LLC was founded with a simple mission: provide
              reliable, high-quality air tool repair and sales services to the
              industries that depend on them. From automotive shops to manufacturing
              plants, our customers rely on their pneumatic tools every day — and
              they rely on us to keep those tools running.
            </p>
            <p>
              ​While our company is newly established, our team brings over 25 years of industry experience in servicing and supplying air tools. We offer tool sales, repair, maintenance, and on-site service, using quality OEM parts to help keep your operations running smoothly.
            


            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary-foreground mb-10 text-center">
            What Drives <span className="text-accent">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To minimize our customers' downtime by providing fast, reliable, and professional air tool services."
            },
            {
              icon: Award,
              title: "Quality Commitment",
              desc: "Every repair uses genuine OEM parts and is performed by certified technicians with rigorous quality control."
            },
            {
              icon: Users,
              title: "Customer First",
              desc: "We build long-term relationships by delivering honest assessments, transparent pricing, and exceptional service."
            }].
            map((item) =>
            <div key={item.title} className="text-center">
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider text-primary-foreground mb-3">
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

      {/* CTA */}
      <section className="section-padding bg-accent text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-accent-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
            Whether you need a tool repaired, a new one sourced, or a full maintenance program, we're here to help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wider text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>);

};

export default About;