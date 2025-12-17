import { TrendingUp, Users, Zap, Star } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "7.58M", label: "Total Invested", color: "text-foreground" },
  { icon: Users, value: "2276", label: "Active Users", color: "text-primary" },
  { icon: Zap, value: "3.86K", label: "Robots Operating", color: "text-foreground" },
  { icon: Star, value: "99%", label: "Success Rate", color: "text-foreground" },
];

const StatsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
              <div className={`text-3xl md:text-4xl font-display font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
