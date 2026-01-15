import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Globe, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your enquiry. We will respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your business needs? Book a consultation or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a 
                      href="mailto:info@misiaglobal.com" 
                      className="text-accent hover:underline"
                    >
                      info@misiaglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Service Coverage</p>
                    <p className="text-muted-foreground">United Kingdom & International</p>
                    <p className="text-sm text-muted-foreground mt-1">Remote consultations available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Response Time</p>
                    <p className="text-muted-foreground">We aim to respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <Card className="bg-muted/50 border-0">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Please note:</strong> Misia Global is a business 
                  consultancy service. We are not a law firm and do not provide regulated legal advice. 
                  Our services focus on business registration, sponsorship licence applications, and 
                  general compliance guidance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-elevated border-0">
            <CardHeader>
              <CardTitle className="font-display text-xl">Send an Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <Input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />

                <Select 
                  value={formData.service} 
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select Service *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Initial Consultation (£100)</SelectItem>
                    <SelectItem value="business-registration">Business Registration</SelectItem>
                    <SelectItem value="sponsorship">Sponsorship Licence</SelectItem>
                    <SelectItem value="compliance">Compliance Support</SelectItem>
                    <SelectItem value="other">Other / General Enquiry</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your enquiry *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
