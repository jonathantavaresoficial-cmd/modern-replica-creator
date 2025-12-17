import { Rocket, Star, Zap, Shield, TrendingUp, Cpu, Bot, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: Rocket,
    name: "SIGMA",
    subtitle: "Perfeito para iniciantes",
    rate: "12.00%",
    min: "$50 USDT",
    color: "from-cyan/20 to-transparent",
    accentColor: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: Star,
    name: "NEBULA",
    subtitle: "Crescimento estável",
    rate: "12.50%",
    min: "$100 USDT",
    color: "from-blue/20 to-transparent",
    accentColor: "text-blue",
    borderColor: "border-blue/30",
  },
  {
    icon: Zap,
    name: "QUANTUM",
    subtitle: "Performance otimizada",
    rate: "13.00%",
    min: "$300 USDT",
    color: "from-secondary/20 to-transparent",
    accentColor: "text-secondary",
    borderColor: "border-secondary/30",
  },
  {
    icon: Shield,
    name: "GENESIS",
    subtitle: "Estratégias avançadas",
    rate: "14.00%",
    min: "$500 USDT",
    color: "from-accent/20 to-transparent",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
  },
  {
    icon: TrendingUp,
    name: "ECLIPSE",
    subtitle: "Alto desempenho",
    rate: "15.00%",
    min: "$800 USDT",
    max: "Up to 8000 USDT",
    color: "from-primary/20 to-transparent",
    accentColor: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: Cpu,
    name: "AETHER",
    subtitle: "Profissional",
    rate: "16.00%",
    min: "$1000 USDT",
    max: "Up to 10000 USDT",
    color: "from-blue/20 to-transparent",
    accentColor: "text-blue",
    borderColor: "border-blue/30",
  },
  {
    icon: Bot,
    name: "NOVA",
    subtitle: "Elite Premium",
    rate: "17.00%",
    min: "$2000 USDT",
    max: "Up to 20000 USDT",
    color: "from-secondary/20 to-transparent",
    accentColor: "text-secondary",
    borderColor: "border-secondary/30",
  },
  {
    icon: Crown,
    name: "INFINITY",
    subtitle: "Máximo Potencial",
    rate: "18.00%",
    min: "$3000 USDT",
    max: "Up to 30000 USDT",
    color: "from-accent/20 to-transparent",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
    featured: true,
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
              className={`relative rounded-2xl border ${plan.borderColor} bg-gradient-to-b ${plan.color} backdrop-blur-sm p-6 card-hover ${
                plan.featured ? "ring-2 ring-accent/50" : ""
              }`}
            >
              <div className="text-center">
                <plan.icon className={`w-10 h-10 mx-auto mb-4 ${plan.accentColor}`} />
                <h3 className={`text-xl font-display font-bold mb-1 ${plan.accentColor}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                
                <div className={`text-4xl font-display font-bold mb-1 ${plan.accentColor}`}>
                  {plan.rate}
                </div>
                <p className="text-sm text-muted-foreground mb-4">monthly return</p>
                
                <div className={`text-xl font-bold mb-1 ${plan.accentColor}`}>
                  {plan.min}
                </div>
                {plan.max && (
                  <p className="text-xs text-muted-foreground mb-4">{plan.max}</p>
                )}
                
                <Button variant="glass" className="w-full mt-4">
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
