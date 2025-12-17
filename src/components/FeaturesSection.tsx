import { Shield, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Audited smart contracts and blockchain technology",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Profits",
    description: "Tested algorithms with proven track record",
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Advanced AI",
    description: "Machine learning and real-time market analysis",
    color: "text-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-display font-semibold mb-2 ${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
