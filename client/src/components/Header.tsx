import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import celestiaLogo from "@assets/Celestia Global - Logo Transparent_1749744762369.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handlePartnershipInquiry = () => {
    window.open('https://calendly.com/partners-celestiaholdings', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-[hsl(218,30%,18%)] border-b border-[hsl(220,20%,25%)] z-50 transition-all duration-300 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={celestiaLogo} 
                alt="Celestia Global" 
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={() => scrollToSection('strategic-positioning')}
                className="text-white hover:text-[hsl(214,84%,56%)] px-4 py-3 text-sm font-medium transition-all duration-200 font-heading"
              >
                Strategy
              </button>
              <button 
                onClick={() => scrollToSection('investor-materials')}
                className="text-white hover:text-[hsl(214,84%,56%)] px-4 py-3 text-sm font-medium transition-all duration-200 font-heading"
              >
                Investors
              </button>
              <button 
                onClick={() => scrollToSection('credentials')}
                className="text-white hover:text-[hsl(214,84%,56%)] px-4 py-3 text-sm font-medium transition-all duration-200 font-heading"
              >
                Credentials
              </button>
              <button 
                onClick={() => scrollToSection('market-insights')}
                className="text-white hover:text-[hsl(214,84%,56%)] px-4 py-3 text-sm font-medium transition-all duration-200 font-heading"
              >
                News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[hsl(214,84%,56%)] px-4 py-3 text-sm font-medium transition-all duration-200 font-heading"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handlePartnershipInquiry}
              className="bg-[hsl(214,84%,56%)] hover:bg-[hsl(214,84%,50%)] text-white px-6 py-2 text-sm font-medium transition-all duration-200 font-heading"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('strategic-positioning')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-heading"
              >
                Strategy
              </button>
              <button 
                onClick={() => scrollToSection('investor-materials')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-heading"
              >
                Investors
              </button>
              <button 
                onClick={() => scrollToSection('credentials')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-heading"
              >
                Credentials
              </button>
              <button 
                onClick={() => scrollToSection('market-insights')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-heading"
              >
                News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-heading"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={handlePartnershipInquiry}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
