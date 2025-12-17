import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <Calculator className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient mb-2">
                AI Profit Calculator
              </h2>
              <p className="text-muted-foreground">
                Calculate your potential earnings with our intelligent arbitrage robots
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Select AI Plan
                </label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="glass border-border">
                    <SelectValue placeholder="Select AI Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans.map((plan) => (
                      <SelectItem key={plan.name} value={plan.name}>
                        {plan.name} - {plan.rate}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Investment Amount
                </label>
                <Input
                  type="number"
                  placeholder="Investment Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="glass border-border"
                />
              </div>
            </div>

            {plan && amount && parseFloat(amount) > 0 && (
              <div className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-card/50 border border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Return</p>
                  <p className="text-3xl font-display font-bold text-accent">
                    ${monthlyReturn.toFixed(2)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Yearly Return</p>
                  <p className="text-3xl font-display font-bold text-primary">
                    ${yearlyReturn.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
