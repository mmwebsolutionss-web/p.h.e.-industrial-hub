import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/services-hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours."
    });
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for sales, service, or support"
        backgroundImage={heroImage} />
      

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-6">
                Send Us a <span className="text-accent">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading uppercase tracking-wider">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-6">
                Get In <span className="text-accent">Touch</span>
              </h2>
              <div className="space-y-6 mb-10">
                {[
                { icon: Phone, label: "Phone", value: "(713) 505-1217" },
                { icon: Mail, label: "Email", value: "sales@pheindustrialsolutionsllc.com" },
                { icon: MapPin, label: "Address", value: "1730 Preston St. Bldg C, Pasadena, TX 77502" },
                { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–5PM" }].
                map((item) =>
                <div key={item.label} className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-sm text-black">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg h-64 overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=1730+Preston+St+Bldg+C,+Pasadena,+TX+77502&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PHE Industrial Location" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

};

export default Contact;