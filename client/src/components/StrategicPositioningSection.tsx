import { Target, Zap, Shield, TrendingUp, Users, Briefcase, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StrategicPositioningSection() {
  const competitiveAdvantages = [
    {
      icon: Zap,
      title: "Only Integrated Player",
      description: "Unique combination of crypto tax + SaaS + asset management under one roof",
      impact: "Eliminates vendor fragmentation for enterprise clients"
    },
    {
      icon: Shield,
      title: "Regulatory-First Approach",
      description: "Built-in compliance across Canadian and international jurisdictions",
      impact: "Reduces regulatory risk for institutional partners"
    },
    {
      icon: Target,
      title: "White-Label Partnership Model",
      description: "Enable accounting firms to offer crypto services without building expertise",
      impact: "Massive scalability through partner network"
    },
    {
      icon: TrendingUp,
      title: "Proven Enterprise Track Record",
      description: "$50M+ assets managed with Fortune 500 client base",
      impact: "De-risks investment for institutional partners"
    }
  ];

  const marketOpportunity = [
    {
      metric: "$2.3T",
      label: "Global Crypto Market Cap",
      trend: "+125% annually",
      opportunity: "Corporate adoption accelerating"
    },
    {
      metric: "$847B",
      label: "Canadian Financial Services Market",
      trend: "+8.2% annually",
      opportunity: "Digital transformation demand"
    },
    {
      metric: "73%",
      label: "Enterprises Planning Crypto Adoption",
      trend: "Next 24 months",
      opportunity: "Tax compliance bottleneck"
    },
    {
      metric: "15,000+",
      label: "Canadian Accounting Firms",
      trend: "Seeking crypto expertise",
      opportunity: "White-label partnership potential"
    }
  ];

  const strategicMoats = [
    {
      title: "Regulatory Expertise Barrier",
      description: "Complex crypto tax regulations require 3+ years to master",
      defensibility: "High entry barrier for competitors"
    },
    {
      title: "Enterprise Client Relationships",
      description: "Fortune 500 clients provide multi-year contracts and referrals",
      defensibility: "Switching costs exceed $500K+"
    },
    {
      title: "Proprietary Technology Stack",
      description: "Custom SaaS platform with institutional-grade security",
      defensibility: "18+ months development lead time"
    },
    {
      title: "Strategic Partner Network",
      description: "Exclusive relationships with Big 4 accounting firms",
      defensibility: "Network effects compound over time"
    }
  ];

  const investmentThesis = [
    {
      pillar: "Market Timing",
      rationale: "Corporate crypto adoption inflection point - early mover advantage",
      evidence: "73% enterprise crypto adoption planned, regulatory clarity emerging"
    },
    {
      pillar: "Scalable Business Model",
      rationale: "White-label partnerships enable exponential growth without linear costs",
      evidence: "15,000+ potential accounting firm partners, recurring revenue model"
    },
    {
      pillar: "Defensive Positioning",
      rationale: "Regulatory complexity creates high barriers to entry",
      evidence: "3+ years expertise required, established compliance frameworks"
    },
    {
      pillar: "Proven Execution",
      rationale: "Demonstrated ability to serve Fortune 500 clients profitably",
      evidence: "$50M+ AUM, 99.8% client retention, documented case studies"
    }
  ];

  return (
    <section id="strategic-positioning" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Strategic Analysis
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Investment & Partnership Strategy
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive strategic positioning analysis for institutional investors, 
            strategic partners, and enterprise clients.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="mb-20">
          <h3 className="font-display text-heading-xl text-foreground text-center mb-12">
            Market Opportunity
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {marketOpportunity.map((item, index) => (
              <Card key={index} className="text-center bg-card border-border shadow-sm hover:shadow-md transition-all duration-200">
                <CardContent className="pt-8 pb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.metric}
                  </div>
                  <div className="font-heading text-lg text-foreground mb-2 font-medium">
                    {item.label}
                  </div>
                  <div className="text-sm text-primary font-medium mb-2">
                    {item.trend}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.opportunity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          {advantage.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {advantage.description}
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <span className="text-sm font-semibold text-foreground">Impact: </span>
                          <span className="text-sm text-muted-foreground">{advantage.impact}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Strategic Moats */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Defensive Moats
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicMoats.map((moat, index) => (
              <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {moat.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {moat.description}
                  </p>
                  <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
                    <span className="text-sm font-semibold text-primary">{moat.defensibility}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Investment Thesis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {investmentThesis.map((thesis, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border/40">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">
                    {thesis.pillar}
                  </h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {thesis.rationale}
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <span className="text-sm font-semibold text-foreground">Evidence: </span>
                  <span className="text-sm text-muted-foreground">{thesis.evidence}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-8">
            Strategic Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Partner Acceleration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Scale through white-label partnerships with accounting firms and financial institutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Enterprise Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  Target Fortune 1000 companies requiring comprehensive crypto solutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Geographic Expansion
                </h4>
                <p className="text-sm text-muted-foreground">
                  Leverage Canadian regulatory expertise for US and European markets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}