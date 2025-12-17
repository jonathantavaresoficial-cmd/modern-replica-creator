import { Shield, TrendingUp, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Safe",
    description: "Blockchain technology and smart contracts",
    gradient: "from-cyan-400 to-cyan-600",
    glow: "shadow-cyan-500/50",
  },
  {
    icon: TrendingUp,
    title: "Consistent Profits",
    description: "Tested and optimized algorithms",
    gradient: "from-primary to-secondary",
    glow: "shadow-primary/50",
  },
  {
    icon: Rocket,
    title: "Easy to Use",
    description: "Intuitive interface and full automation",
    gradient: "from-magenta-400 to-magenta-600",
    glow: "shadow-magenta-500/50",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
            Why choose our AI Robots?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced technology and proven results for your investments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/20">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon container with gradient */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.gradient} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <reason.icon className={`w-10 h-10 bg-gradient-to-br ${reason.gradient} bg-clip-text`} style={{ color: 'hsl(var(--primary))' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
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

export default WhyChooseSection;
