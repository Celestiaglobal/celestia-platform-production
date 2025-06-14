import { Shield, Award, Globe, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CredentialsSection() {
  const partnerCertifications = [
    {
      title: "CPA Canada Network",
      issuer: "Chartered Professional Accountants Canada",
      description: "Strategic partnerships with certified accounting professionals",
      icon: Shield
    },
    {
      title: "Certified Bitcoin Professional Partners",
      issuer: "C4 - Cryptocurrency Certification Consortium",
      description: "Collaboration with blockchain certified consultants",
      icon: Award
    },
    {
      title: "AWS Partner Network",
      issuer: "Amazon Web Services",
      description: "Access to cloud solutions architect expertise",
      icon: Globe
    },
    {
      title: "ISO 27001 Compliance Partners",
      issuer: "International Organization for Standardization",
      description: "Security and compliance audit capabilities",
      icon: Shield
    }
  ];

  const achievements = [
    {
      metric: "$50M+",
      label: "Assets Under Management",
      description: "Digital assets managed across 200+ clients"
    },
    {
      metric: "500+",
      label: "Tax Returns Filed",
      description: "Corporate crypto tax compliance completed"
    },
    {
      metric: "99.8%",
      label: "Client Retention Rate",
      description: "Long-term partnerships with satisfied clients"
    },
    {
      metric: "15+",
      label: "Years Combined Experience",
      description: "Deep expertise in finance and technology"
    }
  ];



  return (
    <section id="credentials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Enterprise Credentials
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven track record, professional certifications, and client success stories 
            demonstrate our commitment to excellence in digital finance solutions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-border/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">
                  {achievement.metric}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <p className="text-xs text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Certifications */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Partner Professional Networks
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {partnerCertifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>



        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Bank-Level Security</h4>
              <p className="text-muted-foreground">
                SOC 2 Type II certified with military-grade encryption for all client data and transactions.
              </p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Regulatory Compliance</h4>
              <p className="text-muted-foreground">
                Full compliance with CRA, FINTRAC, and provincial securities commission requirements.
              </p>
            </div>
            <div>
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Industry Recognition</h4>
              <p className="text-muted-foreground">
                Recognized by Canadian fintech associations and professional accounting bodies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}