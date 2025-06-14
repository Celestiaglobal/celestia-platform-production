import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Handshake, Zap, Building2, Code, TrendingUp, Shield } from "lucide-react";

export default function PartnershipsSection() {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Accounting Firms",
      description: "Partner with traditional accounting firms to offer specialized crypto tax services. Bridge the gap between traditional finance and digital assets.",
      value: "High demand, steady revenue stream",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Code,
      title: "Tech Companies",
      description: "Collaborate with software companies needing fintech expertise, crypto integration, or regulatory compliance solutions.",
      value: "Technical synergy, innovation opportunities",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Legal Firms",
      description: "Work with law firms specializing in crypto regulation, providing technical expertise for complex digital asset cases.",
      value: "Premium billing rates, expert positioning",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Funds",
      description: "Provide specialized services to hedge funds, family offices, and institutional investors managing digital assets.",
      value: "Large-scale projects, recurring consulting",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const competitiveAdvantages = [
    "Deep crypto tax expertise in rapidly evolving regulatory landscape",
    "Custom SaaS development capabilities for unique client needs",
    "Asset management consulting combining traditional and digital strategies",
    "End-to-end Web 3 development from concept to deployment",
    "Regulatory compliance focus reducing client risk exposure"
  ];

  const marketGaps = [
    {
      gap: "Crypto Tax Education",
      opportunity: "Most accountants lack crypto expertise - offer training programs",
      icon: Target
    },
    {
      gap: "Integrated Solutions",
      opportunity: "Few providers offer both technical development AND compliance consulting",
      icon: Zap
    },
    {
      gap: "SME Focus",
      opportunity: "Large consulting firms focus on enterprises - serve growing SME crypto market",
      icon: Users
    }
  ];

  const handlePartnershipInquiry = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Positioning */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Strategic Market Positioning
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Position yourself at the intersection of traditional finance and emerging technology. Your unique combination of services creates multiple partnership and growth opportunities.
          </p>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-8">
            High-Value Partnership Opportunities
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {partnershipTypes.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className={`w-8 h-8 ${partner.color} rounded-lg flex items-center justify-center mb-2`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      {partner.title}
                    </h4>
                    <p className="text-slate-600 text-xs mb-2 leading-tight">
                      {partner.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {partner.value}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Market Gaps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
              Market Gaps You Can Fill
            </h3>
            <div className="space-y-4">
              {marketGaps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">{item.gap}</h4>
                          <p className="text-slate-600 text-sm">{item.opportunity}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
              Your Competitive Advantages
            </h3>
            <div className="space-y-3">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Positioning Strategy */}
        <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-0">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                Recommended Market Positioning
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Position as the "Complete Digital Finance Partner" - the only firm offering crypto tax expertise, 
                custom SaaS development, asset management consulting, and Web 3 development under one roof.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">White-Label Partnerships</h4>
                <p className="text-slate-600 text-sm">Offer your services through established firms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Referral Networks</h4>
                <p className="text-slate-600 text-sm">Build relationships with complementary service providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Niche Expertise</h4>
                <p className="text-slate-600 text-sm">Become the go-to expert for complex crypto compliance</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handlePartnershipInquiry}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explore Partnership Opportunities
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}