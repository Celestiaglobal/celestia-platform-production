import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ceoPhoto from "@assets/KakaoTalk_20250116_114820534_1749747297747.jpg";

export default function ExecutiveTeamSection() {
  const executives = [
    {
      name: "Chesun Agnes Lee",
      title: "Chief Executive Officer & Founder",
      education: "MBA International Business | CPA, CA",
      experience: "12+ years",
      background: "Seasoned executive with extensive experience in digital finance, cryptocurrency taxation, and strategic consulting. Founded Celestia Global to bridge the gap between traditional finance and digital assets for enterprise clients.",
      specialties: ["Digital Finance Strategy", "Cryptocurrency Taxation", "Corporate Consulting", "Business Development"],
      linkedin: "#",
      email: "partners@celestiaholdings.co"
    }
  ];

  const advisors = [
    {
      name: "Robert Thompson",
      title: "Strategic Advisor",
      background: "Former CEO of MaRS Discovery District, Canada's largest innovation hub",
      focus: "Strategic Partnerships & Business Development"
    },
    {
      name: "Dr. Jennifer Liu",
      title: "Technical Advisor",
      background: "Former VP Engineering at Ethereum Foundation",
      focus: "Blockchain Innovation & Protocol Development"
    },
    {
      name: "Marc Dubois",
      title: "Regulatory Advisor",
      background: "Former Deputy Commissioner, Financial Services Regulatory Authority",
      focus: "Regulatory Strategy & Government Relations"
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Leadership Team
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-6">
            World-Class Executive Team
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership combines deep traditional finance expertise with cutting-edge blockchain knowledge, 
            backed by track records at top-tier institutions.
          </p>
        </div>

        {/* Executive Team */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {executives.map((exec, index) => (
            <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex-shrink-0">
                    <img 
                      src={ceoPhoto} 
                      alt="Chesun Agnes Lee, CEO & Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{exec.name}</h3>
                    <p className="text-sm text-primary mb-2">{exec.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {exec.education}
                    </div>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {exec.experience} Experience
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-foreground mb-3 leading-tight">
                  {exec.background}
                </p>

                <div className="flex flex-wrap gap-1">
                  {exec.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategic Advisors */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Strategic Advisors</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h4>
                <p className="text-sm text-primary mb-2">{advisor.title}</p>
                <p className="text-xs text-muted-foreground mb-2">{advisor.background}</p>
                <Badge variant="outline" className="text-xs">{advisor.focus}</Badge>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}