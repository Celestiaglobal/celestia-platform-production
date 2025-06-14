import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Cpu, TrendingUp, Users, Zap, MapPin } from "lucide-react";

export default function QuantumMarketSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Strategic Market Opportunity
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Quantum Technology Market
          </h2>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Korea ↔ Canada Partnership
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bridging Asia-Pacific and North American quantum ecosystems through strategic partnerships and technology commercialization.
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-700">$12.8B</div>
            <p className="text-slate-600">Market potential by 2030</p>
          </Card>
          <Card className="text-center p-6">
            <Cpu className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-700">Quantum Tech</div>
            <p className="text-slate-600">Computing, Communications, Sensing</p>
          </Card>
          <Card className="text-center p-6">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-700">42%</div>
            <p className="text-slate-600">Annual growth rate</p>
          </Card>
        </div>

        {/* Investment Strategy */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8">
          <h3 className="text-2xl font-bold mb-6">Strategic Investment Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold">$500M+</div>
              <div className="text-blue-100">Cross-border fund potential</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100">Joint ventures identified</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2025</div>
              <div className="text-blue-100">Commercial deployments</div>
            </div>
          </div>
          <p className="text-blue-100">
            Bridge Korean quantum manufacturing with Canadian quantum innovation
          </p>
        </Card>
      </div>
    </section>
  );
}