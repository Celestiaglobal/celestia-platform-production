import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, BarChart3, RefreshCw } from "lucide-react";

interface NewsInsightsHeaderProps {
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export default function NewsInsightsHeader({ onRefresh, isRefreshing = false }: NewsInsightsHeaderProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
            AI Quantum Intelligence • Real-Time Filtration
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Quantum-Powered Market Intelligence
          </h2>
          <p className="font-body text-body-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience premium investment insights filtered through our proprietary AI quantum technology system. 
            Every 30 minutes, our advanced algorithms curate only the highest-quality market intelligence from global sources, 
            prioritizing analytical depth over mainstream noise to deliver institutional-grade content that drives strategic decisions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onRefresh}
              disabled={isRefreshing}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 font-heading"
            >
              {isRefreshing ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Refreshing...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Refresh News
                </>
              )}
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://calendly.com/partners-celestiaholdings', '_blank')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 font-heading"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Schedule Analysis
            </Button>
          </div>
        </div>

        {/* AI Quantum Intelligence Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-heading-lg text-foreground mb-2">Quantum Filtration™</h3>
            <p className="font-body text-body-md text-muted-foreground">
              Advanced AI algorithms score content quality over 15 parameters, filtering 300+ sources down to premium insights
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-heading-lg text-foreground mb-2">30-Minute Intelligence</h3>
            <p className="font-body text-body-md text-muted-foreground">
              Real-time global market surveillance with institutional-grade analysis from McKinsey, BCG, Harvard Business Review
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-heading-lg text-foreground mb-2">Investment Focus</h3>
            <p className="font-body text-body-md text-muted-foreground">
              Content specifically curated for business executives, institutional investors, and strategic decision-makers
            </p>
          </div>
        </div>

        {/* Quantum Intelligence Coverage Matrix */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-lg">
          <h3 className="font-heading text-heading-xl text-foreground text-center mb-6">
            Quantum Intelligence Coverage Matrix
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 border-blue-200">
              Institutional Finance
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 border-purple-200">
              Quantum Computing
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-800 border-yellow-200">
              Cryptocurrency & DeFi
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 border-green-200">
              Central Banking & Policy
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-red-100 text-red-800 border-red-200">
              Regulatory Intelligence
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-indigo-100 text-indigo-800 border-indigo-200">
              Strategic M&A
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-800 border-slate-200">
              Executive Leadership
            </Badge>
          </div>
          <div className="text-center">
            <p className="font-body text-body-sm text-muted-foreground">
              <strong>Real-time filtration:</strong> McKinsey • BCG • Harvard Business Review • Financial Times • Nature • Bloomberg
            </p>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}