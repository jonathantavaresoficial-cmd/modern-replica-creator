import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "SIGMA",
    rate: "12%",
    dailyReturn: "~0.40%",
    min: "$50",
    maxMultiplier: "10x",
    maxValue: "$500",
    nameColor: "text-white",
    accentColor: "text-[#f5a623]",
    borderColor: "border-[#f5a623]",
    iconBg: "bg-[#f5a623]/10",
  },
  {
    name: "NEBULA",
    rate: "12.5%",
    dailyReturn: "~0.42%",
    min: "$100",
    maxMultiplier: "10x",
    maxValue: "$1000",
    nameColor: "text-[#a855f7]",
    accentColor: "text-[#a855f7]",
    borderColor: "border-[#a855f7]",
    iconBg: "bg-[#a855f7]/10",
  },
  {
    name: "QUANTUM",
    rate: "13%",
    dailyReturn: "~0.43%",
    min: "$300",
    maxMultiplier: "10x",
    maxValue: "$3000",
    nameColor: "text-[#f97316]",
    accentColor: "text-[#f97316]",
    borderColor: "border-[#f97316]",
    iconBg: "bg-[#f97316]/10",
  },
  {
    name: "GENESIS",
    rate: "14%",
    dailyReturn: "~0.47%",
    min: "$500",
    maxMultiplier: "10x",
    maxValue: "$5000",
    nameColor: "text-[#22c55e]",
    accentColor: "text-[#22c55e]",
    borderColor: "border-[#22c55e]",
    iconBg: "bg-[#22c55e]/10",
  },
  {
    name: "ECLIPSE",
    rate: "15%",
    dailyReturn: "~0.50%",
    min: "$800",
    maxMultiplier: "10x",
    maxValue: "$8000",
    nameColor: "text-white",
    accentColor: "text-[#f5a623]",
    borderColor: "border-[#f5a623]",
    iconBg: "bg-[#f5a623]/10",
  },
  {
    name: "AETHER",
    rate: "16%",
    dailyReturn: "~0.53%",
    min: "$1000",
    maxMultiplier: "10x",
    maxValue: "$10000",
    nameColor: "text-[#a855f7]",
    accentColor: "text-[#a855f7]",
    borderColor: "border-[#a855f7]",
    iconBg: "bg-[#a855f7]/10",
  },
  {
    name: "NOVA",
    rate: "17%",
    dailyReturn: "~0.57%",
    min: "$2000",
    maxMultiplier: "10x",
    maxValue: "$20000",
    nameColor: "text-[#f97316]",
    accentColor: "text-[#f97316]",
    borderColor: "border-[#f97316]",
    iconBg: "bg-[#f97316]/10",
  },
  {
    name: "INFINITY",
    rate: "18%",
    dailyReturn: "~0.60%",
    min: "$3000",
    maxMultiplier: "10x",
    maxValue: "$30000",
    nameColor: "text-[#22c55e]",
    accentColor: "text-[#22c55e]",
    borderColor: "border-[#22c55e]",
    iconBg: "bg-[#22c55e]/10",
  },
];

const PlansSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Available AI Plans
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the AI robot that best suits your investment profile
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border ${plan.borderColor}/30 bg-[#0d0d1a] p-6`}
            >
              <div className="text-center">
                {/* Icon Circle */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-2 ${plan.borderColor} ${plan.iconBg} flex items-center justify-center`}>
                  <Bot className={`w-10 h-10 ${plan.accentColor}`} />
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-display font-bold mb-4 ${plan.nameColor}`}>
                  {plan.name}
                </h3>

                {/* Return Rate with Lines */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className={`h-px w-8 bg-gradient-to-r from-transparent to-current ${plan.accentColor} opacity-50`} />
                  <span className="text-muted-foreground text-sm">Return: <span className={plan.accentColor}>{plan.rate}</span></span>
                  <div className={`h-px w-8 bg-gradient-to-l from-transparent to-current ${plan.accentColor} opacity-50`} />
                </div>

                {/* Price */}
                <div className={`text-5xl font-display font-bold mb-1 ${plan.accentColor}`}>
                  {plan.min}
                </div>
                <p className="text-muted-foreground text-sm mb-6">USDT</p>

                {/* Details Box */}
                <div className="bg-[#1a1a2e] rounded-lg p-4 mb-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Max investment:</span>
                    <span className="text-foreground font-semibold text-sm">{plan.maxMultiplier} ({plan.maxValue})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Daily return:</span>
                    <span className={`font-semibold text-sm ${plan.accentColor}`}>{plan.dailyReturn}</span>
                  </div>
                </div>

                {/* Button */}
                <Button className="w-full bg-gradient-to-r from-[#f5a623] to-[#f97316] hover:from-[#e09620] hover:to-[#e86815] text-black font-semibold">
                  Get Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
