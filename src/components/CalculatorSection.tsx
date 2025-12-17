import { Calculator, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const plans = [
  { name: "SIGMA", rate: 12 },
  { name: "NEBULA", rate: 12.5 },
  { name: "QUANTUM", rate: 13 },
  { name: "GENESIS", rate: 14 },
  { name: "ECLIPSE", rate: 15 },
  { name: "AETHER", rate: 16 },
  { name: "NOVA", rate: 17 },
  { name: "INFINITY", rate: 18 },
];

const CalculatorSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [amount, setAmount] = useState("");

  const plan = plans.find((p) => p.name === selectedPlan);
  const monthlyReturn = plan && amount ? (parseFloat(amount) * plan.rate) / 100 : 0;
  const yearlyReturn = monthlyReturn * 12;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main card with enhanced styling */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/30 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <Calculator className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">
                  AI Profit Calculator
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Calculate your potential earnings with our intelligent arbitrage robots
                </p>
              </div>

              {/* Input fields */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Sparkles className="w-4 h-4" />
                    Select AI Plan
                  </label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger className="glass border-border/50 hover:border-primary/50 transition-colors h-14 text-base">
                      <SelectValue placeholder="Choose your plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan.name} value={plan.name}>
                          <span className="font-display font-semibold">{plan.name}</span>
                          <span className="text-primary ml-2">({plan.rate}%)</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-secondary">
                    <Calculator className="w-4 h-4" />
                    Investment Amount
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter amount in USD"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="glass border-border/50 hover:border-secondary/50 focus:border-secondary/50 transition-colors h-14 text-base"
                  />
                </div>
              </div>

              {/* Results */}
              {plan && amount && parseFloat(amount) > 0 && (
                <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
                  <div className="glass rounded-2xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 group">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Monthly Return</p>
                      <p className="text-4xl font-display font-bold text-accent group-hover:scale-105 transition-transform">
                        ${monthlyReturn.toFixed(2)}
                      </p>
                      <p className="text-xs text-accent/70 mt-2">per month</p>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <div className="text-center relative z-10">
                      <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Yearly Return</p>
                      <p className="text-4xl font-display font-bold text-gradient group-hover:scale-105 transition-transform">
                        ${yearlyReturn.toFixed(2)}
                      </p>
                      <p className="text-xs text-primary/70 mt-2">per year</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
