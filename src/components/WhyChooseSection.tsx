import { Shield, TrendingUp, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Safe",
    description: "Blockchain technology and smart contracts",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Consistent Profits",
    description: "Tested and optimized algorithms",
    color: "text-primary",
  },
  {
    icon: Rocket,
    title: "Easy to Use",
    description: "Intuitive interface and full automation",
    color: "text-secondary",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient text-center mb-10">
            Why choose our AI Robots?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <reason.icon className={`w-12 h-12 mx-auto mb-4 ${reason.color}`} />
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
