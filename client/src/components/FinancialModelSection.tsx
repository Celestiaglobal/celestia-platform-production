import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function FinancialModelSection() {
  const handleDownloadModel = () => {
    const csvContent = [
      "Year,Total Revenue ($M),Digital Finance ($M),Education ($M),Quantum ($M),Biotechnology ($M)",
      "2024,2.5,1.0,0.6,0.5,0.4",
      "2025,4.2,1.7,1.1,0.8,0.6",
      "2026,6.8,2.7,1.7,1.4,1.0",
      "2027,10.3,4.1,2.6,2.1,1.5",
      "2028,15.2,6.1,3.8,3.0,2.3"
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'celestia-global-financial-model.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="financial-model" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Financial Modeling
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            5-Year Financial Projections
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Strategic growth projections across our four core business sectors
          </p>
          <Button onClick={handleDownloadModel} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Model (CSV)
          </Button>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 text-center">
            <h3 className="text-lg font-bold text-foreground mb-1">Revenue Target</h3>
            <p className="text-2xl font-bold text-primary">$15.2M</p>
            <p className="text-xs text-muted-foreground">5-year projection</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-bold text-foreground mb-1">Growth Rate</h3>
            <p className="text-2xl font-bold text-primary">35%</p>
            <p className="text-xs text-muted-foreground">Annual average</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-bold text-foreground mb-1">Operating Margin</h3>
            <p className="text-2xl font-bold text-primary">25%</p>
            <p className="text-xs text-muted-foreground">Target efficiency</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-bold text-foreground mb-1">Client Base</h3>
            <p className="text-2xl font-bold text-primary">200+</p>
            <p className="text-xs text-muted-foreground">Projected clients</p>
          </Card>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Digital Finance</h4>
            <p className="text-xl font-bold text-primary mb-1">$6.1M</p>
            <p className="text-xs text-muted-foreground">40% of revenue</p>
          </Card>
          <Card className="p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Education</h4>
            <p className="text-xl font-bold text-primary mb-1">$3.8M</p>
            <p className="text-xs text-muted-foreground">25% of revenue</p>
          </Card>
          <Card className="p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Quantum Tech</h4>
            <p className="text-xl font-bold text-primary mb-1">$3.0M</p>
            <p className="text-xs text-muted-foreground">20% of revenue</p>
          </Card>
          <Card className="p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Biotechnology</h4>
            <p className="text-xl font-bold text-primary mb-1">$2.3M</p>
            <p className="text-xs text-muted-foreground">15% of revenue</p>
          </Card>
        </div>
      </div>
    </section>
  );
}