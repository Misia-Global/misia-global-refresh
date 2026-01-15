import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Check } from "lucide-react";

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing for professional consultation and business services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Consultation Card */}
          <Card className="card-elevated border-0 bg-card">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                Initial Consultation Session
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                20 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-display font-semibold text-foreground">£100</span>
                <span className="text-muted-foreground ml-2">/ session</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Initial needs assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Service suitability discussion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Next-step guidance</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Full Service Card */}
          <Card className="card-elevated border-2 border-accent/20 bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 gold-gradient text-accent-foreground text-xs font-medium px-4 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                Business Registration & Sponsorship Services
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Comprehensive support tailored to your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-display font-semibold text-foreground">£1,500</span>
                <span className="text-muted-foreground ml-1">– £3,500</span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">
                Service fees vary depending on client needs, complexity, and scope of work.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">UK business registration support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Sponsorship licence applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Compliance guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Ongoing support throughout process</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToContact}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
