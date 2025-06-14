import { Globe } from "lucide-react";
import { FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import celestiaLogo from "@assets/Celestia Global - Logo Transparent_1749746805003.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Market Insights", href: "#insights" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Corporate Crypto Tax", href: "#" },
    { name: "Web 3 Development", href: "#" },
    { name: "Digital Asset Management", href: "#" },
    { name: "Blockchain Training", href: "#" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Compliance", href: "/compliance" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  const handleSocialLink = (platform: string) => {
    console.log(`${platform} link clicked`);
    // In a real implementation, these would link to actual social media profiles
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <img 
              src={celestiaLogo} 
              alt="Celestia Global" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-slate-300 mb-6 leading-relaxed">
              Comprehensive digital finance solutions for the modern economy.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialLink('linkedin')}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </button>
              <button 
                onClick={() => handleSocialLink('twitter')}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </button>
              <button 
                onClick={() => handleSocialLink('medium')}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Medium"
              >
                <FaMedium className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(service.href)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(item.href)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © {currentYear} Celestia Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
