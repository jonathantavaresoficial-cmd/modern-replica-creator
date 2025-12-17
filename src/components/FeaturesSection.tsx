import { Shield, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Audited smart contracts and blockchain technology",
    gradient: "from-accent to-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Profits",
    description: "Tested algorithms with proven track record",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Bot,
    title: "Advanced AI",
    description: "Machine learning and real-time market analysis",
    gradient: "from-secondary to-magenta-400",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/20">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon container with gradient border */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
