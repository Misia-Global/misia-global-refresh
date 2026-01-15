import { Button } from "@/components/ui/button";
import { Globe, Shield, Users } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/50 blur-3xl" />
      </div>

      <div className="container-narrow w-full relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            Expert Business Registration
            <span className="block mt-2">
              & <span className="gold-text">Sponsorship Consultancy</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-4 max-w-2xl">
            Professional guidance for UK business registration, sponsorship licence applications, 
            and compliance support. Navigate complex processes with confidence.
          </p>

          <p className="text-base text-primary-foreground/70 font-body mb-8 flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            Serving UK & International clients | Online consultations available
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-base"
            >
              Book Consultation
            </Button>
            <Button 
              onClick={scrollToPricing}
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              View Services
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Confidential Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Personalized Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span>Remote Consultations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
