import { ArrowRight, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Crypto Tax Optimization",
      client: "Fortune 500 Mining Company",
      challenge: "$50M+ annual crypto volume across 15 jurisdictions",
      results: ["$2.3M penalty savings", "75% compliance reduction", "100% audit success"],
      roi: "1,533% ROI",
      timeline: "3 months"
    },
    {
      title: "DeFi Protocol Launch", 
      client: "Institutional Investment Fund",
      challenge: "Custom yield farming with institutional security",
      results: ["$500M+ TVL", "Zero security incidents", "45% annual yield"],
      roi: "2,250% ROI",
      timeline: "6 months"
    },
    {
      title: "Unified Asset Management",
      client: "Multi-Family Office",
      challenge: "$1.2B+ portfolio across traditional and digital assets",
      results: ["40% cost reduction", "Real-time compliance", "98% client satisfaction"],
      roi: "667% ROI",
      timeline: "8 months"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Proven Results
          </Badge>
          <h2 className="text-4xl font-display font-bold text-foreground mb-6">
            Client Success Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real implementations delivering measurable results for Fortune 500 companies, 
            institutional investors, and high-growth enterprises.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow p-4">
              <h3 className="text-lg font-bold text-foreground mb-1">{study.title}</h3>
              <Badge variant="outline" className="mb-3 text-xs">{study.client}</Badge>
              
              <p className="text-muted-foreground mb-3 text-xs leading-tight">{study.challenge}</p>
              
              <div className="space-y-1 mb-3">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs">{result}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">ROI:</span>
                  <span className="text-xs font-semibold text-primary">{study.roi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Timeline:</span>
                  <span className="text-xs font-semibold">{study.timeline}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss how we can deliver 
            measurable outcomes for your organization.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Schedule Strategy Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}