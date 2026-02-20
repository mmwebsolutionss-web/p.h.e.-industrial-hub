import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-industrial.jpg";

const QuoteRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "",
    toolType: "", brand: "", model: "", issue: "", urgency: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted",
      description: "We'll review it and get back to you within 24 hours.",
    });
    setFormData({ name: "", company: "", phone: "", email: "", toolType: "", brand: "", model: "", issue: "", urgency: "" });
  };

  return (
    <main>
      <PageHero
        title="Request a Quote"
        subtitle="Tell us what you need and we'll get back to you with a price"
        backgroundImage={heroImage}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                Your Info
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="q-name">Name *</Label>
                  <Input id="q-name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="q-company">Company *</Label>
                  <Input id="q-company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="q-phone">Phone *</Label>
                  <Input id="q-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="q-email">Email *</Label>
                  <Input id="q-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
            </div>

            {/* Tool Details */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                Tool Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Tool Type *</Label>
                  <Select value={formData.toolType} onValueChange={(v) => setFormData({ ...formData, toolType: v })}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="impact-wrench">Impact Wrench</SelectItem>
                      <SelectItem value="die-grinder">Die Grinder</SelectItem>
                      <SelectItem value="air-drill">Air Drill</SelectItem>
                      <SelectItem value="sander">Sander / Polisher</SelectItem>
                      <SelectItem value="compressor">Air Compressor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Urgency</Label>
                  <Select value={formData.urgency} onValueChange={(v) => setFormData({ ...formData, urgency: v })}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                      <SelectItem value="rush">Rush (1-2 days)</SelectItem>
                      <SelectItem value="emergency">Emergency (same day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="q-brand">Brand</Label>
                  <Input id="q-brand" value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} placeholder="e.g. Ingersoll Rand" />
                </div>
                <div>
                  <Label htmlFor="q-model">Model Number</Label>
                  <Input id="q-model" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} placeholder="e.g. 2235TiMAX" />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="q-issue">What do you need? *</Label>
                <Textarea id="q-issue" rows={4} required value={formData.issue} onChange={(e) => setFormData({ ...formData, issue: e.target.value })} placeholder="Describe the repair, part you need, or what you're looking for..." />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
              Submit Quote Request
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default QuoteRequest;
