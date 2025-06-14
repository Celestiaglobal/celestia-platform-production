import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, Users, Award, MapPin, Calendar, DollarSign, Target, Zap, Shield } from "lucide-react";
import celestiaLogo from "@assets/Celestia Global - Logo Transparent_1749746805003.png";

export default function InvestorPresentationSection() {
  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/partners-celestiaholdings', '_blank');
  };

  const keyMetrics = [
    {
      metric: "$2.3T",
      label: "Global Crypto Market",
      growth: "+125% annually",
      icon: DollarSign
    },
    {
      metric: "73%",
      label: "Enterprise Crypto Adoption",
      growth: "Next 24 months",
      icon: TrendingUp
    },
    {
      metric: "$847B",
      label: "Canadian Financial Services",
      growth: "+8.2% annually",
      icon: Globe
    },
    {
      metric: "15,000+",
      label: "Potential Partner Firms",
      growth: "Accounting firms",
      icon: Users
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Multi-Sector Expertise",
      description: "Unique positioning across Digital Finance, Education, Quantum Computing, and Biotechnology",
      icon: Zap
    },
    {
      title: "Montreal Innovation Hub",
      description: "Strategic location in Canada's AI and quantum computing capital with government support",
      icon: MapPin
    },
    {
      title: "Regulatory Leadership",
      description: "Deep understanding of Canadian and international compliance frameworks",
      icon: Shield
    },
    {
      title: "Scalable Business Model",
      description: "White-label partnerships enabling rapid expansion without linear costs",
      icon: Target
    }
  ];

  const investmentHighlights = [
    "First-mover advantage in integrated digital finance and emerging technology consulting",
    "Montreal's strategic position as North American innovation gateway",
    "Proven demand with 73% of enterprises planning crypto adoption",
    "Scalable white-label model targeting 15,000+ accounting firms",
    "Government-backed innovation ecosystem and R&D incentives",
    "Leadership team with proven track record in finance and technology"
  ];

  return (
    <section id="investor-presentation" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src={celestiaLogo} 
              alt="Celestia Global" 
              className="h-20 w-auto"
            />
          </div>
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 font-heading">
            Investor Presentation
          </Badge>
          <h2 className="font-display text-display-lg text-foreground mb-6">
            Celestia Global Investment Opportunity
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Strategic consulting across Digital Finance, Education, Quantum Computing, and Biotechnology sectors
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Montreal, Canada</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-12">
              <h3 className="font-display text-heading-xl text-foreground text-center mb-8">
                Executive Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="font-heading text-heading-lg text-foreground mb-6">Investment Thesis</h4>
                  <ul className="space-y-4">
                    {investmentHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-body text-body-md text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/50 rounded-xl p-6 border border-primary/10">
                    <h5 className="font-heading text-heading-md text-foreground mb-4">Company Overview</h5>
                    <p className="font-body text-body-md text-muted-foreground mb-4">
                      Celestia Global is a Montreal-based strategic consulting firm positioned at the intersection of Digital Finance, Education Technology, Quantum Computing, and Biotechnology.
                    </p>
                    <p className="font-body text-body-md text-muted-foreground">
                      Founded to bridge the gap between traditional finance and emerging technologies, we serve institutional investors, strategic partners, and enterprise clients across North America.
                    </p>
                  </div>
                  <div className="text-center">
                    <Button 
                      onClick={handleScheduleMeeting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-heading"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Investor Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Opportunity */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-heading-xl text-foreground mb-4">
              Market Opportunity
            </h3>
            <p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Positioned at the convergence of multiple high-growth technology sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-all duration-200">
                  <CardContent className="pt-8 pb-6">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-display text-primary mb-2 font-bold">
                      {metric.metric}
                    </div>
                    <div className="font-heading text-sm text-foreground mb-2 font-medium">
                      {metric.label}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {metric.growth}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-heading-xl text-foreground mb-4">
              Competitive Advantages
            </h3>
            <p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic positioning and operational excellence creating sustainable moats
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-heading-md text-foreground mb-3">
                          {advantage.title}
                        </h4>
                        <p className="font-body text-body-md text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Montreal Advantage */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="font-display text-heading-xl text-foreground mb-4">
                  Montreal Innovation Ecosystem
                </h3>
                <p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto">
                  Strategic location in Canada's premier technology and innovation hub
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-heading-md text-foreground mb-2">AI Capital</h4>
                  <p className="font-body text-body-sm text-muted-foreground">
                    Home to world-renowned AI research institutes and quantum computing pioneers
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-heading-md text-foreground mb-2">Government Support</h4>
                  <p className="font-body text-body-sm text-muted-foreground">
                    Significant R&D tax credits and innovation incentives for technology companies
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-heading-md text-foreground mb-2">Strategic Gateway</h4>
                  <p className="font-body text-body-sm text-muted-foreground">
                    Bridge between North American and European markets with favorable regulatory environment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h3 className="font-display text-heading-xl text-foreground mb-6">
                Partner with Celestia Global
              </h3>
              <p className="font-body text-body-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join us in shaping the future of digital finance and emerging technology consulting. Schedule a meeting to discuss investment and partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleScheduleMeeting}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-heading"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Investor Meeting
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-heading"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Our Team
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Montreal, Quebec, Canada</span>
                <span className="text-muted-foreground/60">•</span>
                <span>partners@celestiaholdings.co</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}