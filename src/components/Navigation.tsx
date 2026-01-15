import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 px-4">
          <a href="/" className="font-display text-xl font-semibold text-primary-foreground">
            Misia Global
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollTo("pricing")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollTo("contact")}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10 py-4 px-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollTo("pricing")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollTo("contact")}
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
