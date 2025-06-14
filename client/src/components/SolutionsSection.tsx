import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calculator, GraduationCap, Cloud, ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Calculator,
      title: "Corporate Crypto Tax Consultation",
      description: "Expert cryptocurrency tax compliance, DeFi transaction analysis, and regulatory guidance for corporations navigating digital asset taxation.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Cloud,
      title: "Custom SaaS Development",
      description: "Tailored software-as-a-service solutions for fintech, crypto trading platforms, portfolio management tools, and regulatory compliance systems.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Asset Management Consulting",
      description: "Strategic investment advisory services for traditional and digital assets, portfolio optimization, risk assessment, and institutional wealth management.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Web 3 Project Development",
      description: "End-to-end blockchain application development, smart contract creation, DeFi protocols, and decentralized platform architecture.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const handleLearnMore = (service: string) => {
    // Navigate to service details or contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleConsultation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md text-foreground mb-6">
            Complete Digital Finance Ecosystem
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto">
            From crypto tax compliance to custom software development and strategic asset management. Your comprehensive partner for digital finance transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden">
                <CardContent className="p-4">
                  <div className={`w-10 h-10 ${solution.color} rounded-lg flex items-center justify-center mb-3`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-tight">
                    {solution.description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => handleLearnMore(solution.title.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-primary hover:text-primary/80 font-semibold p-0 h-auto inline-flex items-center gap-1 text-xs"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="bg-foreground text-white border-0 rounded-lg overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Navigate Crypto Tax Compliance & Build Web 3?
              </h3>
              <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join innovative corporations who trust Celestia Global for cryptocurrency tax expertise and cutting-edge Web 3 development.
              </p>
              <Button 
                onClick={handleScheduleConsultation}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
