import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dna, Activity, Beaker, Brain, Heart, Shield } from "lucide-react";

export default function BiotechMarketSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
            Biotechnology Innovation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Biotechnology Solution Market
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Advanced biotechnology solutions driving healthcare innovation and sustainable development.
          </p>
        </div>

        {/* Market Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-green-700">$2.4T</div>
            <p className="text-slate-600">Global market by 2030</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-teal-700">18.7%</div>
            <p className="text-slate-600">Annual growth rate</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-blue-700">4,500+</div>
            <p className="text-slate-600">Active companies</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-purple-700">$180B</div>
            <p className="text-slate-600">Annual R&D</p>
          </Card>
        </div>

        {/* Core Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Dna className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Precision Medicine</h3>
            <p className="text-sm text-slate-600 mb-3">Personalized therapies and diagnostics</p>
            <div className="text-xl font-bold text-green-700">$650B</div>
          </Card>
          <Card className="text-center p-6">
            <Activity className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Digital Health</h3>
            <p className="text-sm text-slate-600 mb-3">AI diagnostics and remote monitoring</p>
            <div className="text-xl font-bold text-blue-700">$450B</div>
          </Card>
          <Card className="text-center p-6">
            <Beaker className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Synthetic Biology</h3>
            <p className="text-sm text-slate-600 mb-3">Engineered biological systems</p>
            <div className="text-xl font-bold text-purple-700">$240B</div>
          </Card>
        </div>

        {/* Investment Strategy */}
        <Card className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-center p-8">
          <h3 className="text-2xl font-bold mb-6">Celestia Global Biotechnology Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold">$1.2B+</div>
              <div className="text-green-100">Target investment portfolio</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4</div>
              <div className="text-green-100">Core therapeutic areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2030</div>
              <div className="text-green-100">Market leadership goal</div>
            </div>
          </div>
          <p className="text-green-100">
            Leading biotechnology investments across precision medicine, digital health, and synthetic biology
          </p>
        </Card>
      </div>
    </section>
  );
}