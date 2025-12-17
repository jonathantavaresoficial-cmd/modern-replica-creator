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
    color: "yellow",
  },
  {
    name: "NEBULA",
    rate: "12.5%",
    dailyReturn: "~0.42%",
    min: "$100",
    maxMultiplier: "10x",
    maxValue: "$1000",
    color: "purple",
  },
  {
    name: "QUANTUM",
    rate: "13%",
    dailyReturn: "~0.43%",
    min: "$300",
    maxMultiplier: "10x",
    maxValue: "$3000",
    color: "orange",
  },
  {
    name: "GENESIS",
    rate: "14%",
    dailyReturn: "~0.47%",
    min: "$500",
    maxMultiplier: "10x",
    maxValue: "$5000",
    color: "green",
  },
  {
    name: "ECLIPSE",
    rate: "15%",
    dailyReturn: "~0.50%",
    min: "$800",
    maxMultiplier: "10x",
    maxValue: "$8000",
    color: "yellow",
  },
  {
    name: "AETHER",
    rate: "16%",
    dailyReturn: "~0.53%",
    min: "$1000",
    maxMultiplier: "10x",
    maxValue: "$10000",
    color: "purple",
  },
  {
    name: "NOVA",
    rate: "17%",
    dailyReturn: "~0.57%",
    min: "$2000",
    maxMultiplier: "10x",
    maxValue: "$20000",
    color: "orange",
  },
  {
    name: "INFINITY",
    rate: "18%",
    dailyReturn: "~0.60%",
    min: "$3000",
    maxMultiplier: "10x",
    maxValue: "$30000",
    color: "green",
  },
];

const colorStyles = {
  yellow: {
    text: "text-yellow-400",
    border: "border-yellow-400/30",
    iconBorder: "border-yellow-400",
    iconBg: "bg-yellow-400/10",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-400/30",
    iconBorder: "border-purple-400",
    iconBg: "bg-purple-400/10",
  },
  orange: {
    text: "text-orange-400",
    border: "border-orange-400/30",
    iconBorder: "border-orange-400",
    iconBg: "bg-orange-400/10",
  },
  green: {
    text: "text-green-400",
    border: "border-green-400/30",
    iconBorder: "border-green-400",
    iconBg: "bg-green-400/10",
  },
};

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
          {plans.map((plan, index) => {
            const styles = colorStyles[plan.color as keyof typeof colorStyles];
            return (
              <div
                key={index}
                className={`relative rounded-2xl border ${styles.border} bg-[#0d0d1a] p-6`}
              >
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-2 ${styles.iconBorder} ${styles.iconBg} flex items-center justify-center`}>
                    <Bot className={`w-10 h-10 ${styles.text}`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-2xl font-display font-bold mb-4 ${plan.color === 'yellow' ? 'text-foreground' : styles.text}`}>
                    {plan.name}
                  </h3>

                  {/* Return Rate with Lines */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className={`h-px w-8 bg-gradient-to-r from-transparent ${plan.color === 'yellow' ? 'to-yellow-400/50' : plan.color === 'purple' ? 'to-purple-400/50' : plan.color === 'orange' ? 'to-orange-400/50' : 'to-green-400/50'}`} />
                    <span className="text-muted-foreground text-sm">Return: <span className={styles.text}>{plan.rate}</span></span>
                    <div className={`h-px w-8 bg-gradient-to-l from-transparent ${plan.color === 'yellow' ? 'to-yellow-400/50' : plan.color === 'purple' ? 'to-purple-400/50' : plan.color === 'orange' ? 'to-orange-400/50' : 'to-green-400/50'}`} />
                  </div>

                  {/* Price */}
                  <div className={`text-5xl font-display font-bold mb-1 ${styles.text}`}>
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
                      <span className={`font-semibold text-sm ${styles.text}`}>{plan.dailyReturn}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                    Get Plan
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
