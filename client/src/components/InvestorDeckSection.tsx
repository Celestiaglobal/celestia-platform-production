import { Download, FileText, Presentation, Calendar, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InvestorDeckSection() {
  const investorMaterials = [
    {
      title: "Executive Summary",
      description: "2-page overview of market opportunity, competitive advantages, and financial projections",
      type: "PDF",
      size: "2.1 MB",
      confidentiality: "Public",
      icon: FileText,
      available: true
    },
    {
      title: "Full Investor Presentation",
      description: "Comprehensive 24-slide deck covering business model, market analysis, and growth strategy",
      type: "PDF",
      size: "8.7 MB", 
      confidentiality: "Qualified Investors Only",
      icon: Presentation,
      available: false
    },
    {
      title: "Financial Model & Projections",
      description: "5-year financial model with detailed assumptions and sensitivity analysis",
      type: "Excel",
      size: "1.4 MB",
      confidentiality: "Under NDA",
      icon: FileText,
      available: false
    },
    {
      title: "Market Research Report",
      description: "Independent analysis of Canadian crypto tax services market and competitive landscape",
      type: "PDF",
      size: "4.2 MB",
      confidentiality: "Qualified Investors Only",
      icon: FileText,
      available: false
    }
  ];

  const keyMetrics = [
    {
      metric: "Market Size",
      value: "$2.3T",
      context: "Global crypto market cap with 15% corporate adoption rate"
    },
    {
      metric: "TAM",
      value: "$847B",
      context: "Canadian financial services market undergoing digital transformation"
    },
    {
      metric: "Revenue Multiple",
      value: "8.2x",
      context: "Average valuation multiple for fintech SaaS companies"
    },
    {
      metric: "Growth Rate",
      value: "125%",
      context: "Annual crypto market growth driving compliance demand"
    }
  ];

  const fundingUse = [
    {
      category: "Technology Development",
      percentage: "40%",
      description: "Scale SaaS platform, AI-powered compliance automation"
    },
    {
      category: "Partnership Expansion",
      percentage: "25%",
      description: "White-label partnerships with Big 4 and regional accounting firms"
    },
    {
      category: "Regulatory & Compliance",
      percentage: "20%",
      description: "International expansion, additional jurisdiction expertise"
    },
    {
      category: "Team & Operations",
      percentage: "15%",
      description: "Senior hires in sales, engineering, and regulatory affairs"
    }
  ];

  const handleDownload = (material: any) => {
    if (material.available) {
      // In a real implementation, this would trigger actual download
      console.log(`Downloading ${material.title}`);
    } else {
      // Redirect to contact or data room access request
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRequestAccess = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investor-materials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Investor Relations
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Strategic Investment Opportunity
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive investment materials, financial projections, and market analysis 
            for qualified institutional investors and strategic partners.
          </p>
        </div>

        {/* Key Investment Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="font-display text-display-md text-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-heading text-heading-md text-foreground mb-3">
                  {metric.metric}
                </div>
                <p className="font-body text-body-sm text-muted-foreground">
                  {metric.context}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investor Materials */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Investment Materials
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {investorMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            {material.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {material.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{material.type} • {material.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                        <Badge 
                          variant={material.confidentiality === "Public" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {material.confidentiality}
                        </Badge>
                      </div>
                      
                      <Button 
                        variant={material.available ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleDownload(material)}
                        disabled={!material.available}
                      >
                        {material.available ? (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </>
                        ) : (
                          "Request Access"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Funding Use */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Use of Funds
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {fundingUse.map((use, index) => (
                <Card key={index} className="border-border/40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-foreground">
                        {use.category}
                      </h4>
                      <span className="text-2xl font-bold text-primary">
                        {use.percentage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {use.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Qualified Investor Access
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Request access to our secure data room containing detailed financial models, 
            due diligence materials, and confidential business information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleRequestAccess}>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Investor Meeting
            </Button>
            <Button variant="outline" size="lg" onClick={handleRequestAccess}>
              <Lock className="w-4 h-4 mr-2" />
              Request Data Room Access
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            All materials subject to confidentiality agreements and accredited investor verification
          </p>
        </div>
      </div>
    </section>
  );
}