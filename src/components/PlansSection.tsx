import { Bot } from "lucide-react";

const plans = [
  {
    name: "SIGMA",
    rate: "12%",
    dailyReturn: "~0.40%",
    min: "$50",
    maxMultiplier: "10x",
    maxValue: "$500",
  },
  {
    name: "NEBULA",
    rate: "12.5%",
    dailyReturn: "~0.42%",
    min: "$100",
    maxMultiplier: "10x",
    maxValue: "$1000",
  },
  {
    name: "QUANTUM",
    rate: "13%",
    dailyReturn: "~0.43%",
    min: "$300",
    maxMultiplier: "10x",
    maxValue: "$3000",
  },
  {
    name: "GENESIS",
    rate: "14%",
    dailyReturn: "~0.47%",
    min: "$500",
    maxMultiplier: "10x",
    maxValue: "$5000",
  },
  {
    name: "ECLIPSE",
    rate: "15%",
    dailyReturn: "~0.50%",
    min: "$800",
    maxMultiplier: "10x",
    maxValue: "$8000",
  },
  {
    name: "AETHER",
    rate: "16%",
    dailyReturn: "~0.53%",
    min: "$1000",
    maxMultiplier: "10x",
    maxValue: "$10000",
  },
  {
    name: "NOVA",
    rate: "17%",
    dailyReturn: "~0.57%",
    min: "$2000",
    maxMultiplier: "10x",
    maxValue: "$20000",
  },
  {
    name: "INFINITY",
    rate: "18%",
    dailyReturn: "~0.60%",
    min: "$3000",
    maxMultiplier: "10x",
    maxValue: "$30000",
  },
];

const PlansSection = () => {
  return (
    <section className="pt-6 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #d4a574 0%, #f5d742 50%, #d4a574 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
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
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(139, 92, 246, 0.3) 100%)",
                padding: "1px",
              }}
            >
              {/* Animated border glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, transparent 50%, rgba(139, 92, 246, 0.5) 100%)",
                  animation: `borderPulse 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                }}
              />
              
              {/* Card Inner */}
              <div 
                className="relative rounded-2xl p-6 overflow-hidden h-full"
                style={{
                  background: "linear-gradient(180deg, #0f0f1a 0%, #0a0a12 100%)",
                }}
              >
                {/* Diagonal Stripes Background */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(139, 92, 246, 0.3) 10px, rgba(139, 92, 246, 0.3) 11px)",
                  }}
                />

                {/* Ambient purple glow - top */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    animation: `floatGlow 4s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />

                {/* Ambient purple glow - bottom */}
                <div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    background: "rgba(139, 92, 246, 0.1)",
                    animation: `floatGlow 5s ease-in-out infinite reverse`,
                    animationDelay: `${index * 0.4}s`,
                  }}
                />

                {/* Subtle moving light streak */}
                <div 
                  className="absolute inset-0 overflow-hidden rounded-2xl"
                >
                  <div 
                    className="absolute w-32 h-full opacity-[0.03]"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)",
                      animation: `lightStreak 6s ease-in-out infinite`,
                      animationDelay: `${index * 0.7}s`,
                    }}
                  />
                </div>
                
                <div className="relative text-center z-10">
                  {/* Icon Circle with pulse */}
                  <div 
                    className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                    style={{
                      background: "rgba(139, 92, 246, 0.1)",
                      border: "2px solid rgba(139, 92, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)",
                    }}
                  >
                    {/* Pulsing ring */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(139, 92, 246, 0.3)",
                        animation: `ringPulse 3s ease-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                    <Bot className="w-12 h-12 text-[#8b5cf6]" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-display font-bold mb-3 text-white tracking-wide">
                    {plan.name}
                  </h3>

                  {/* Return Rate with Lines */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#8b5cf6]/50" />
                    <span className="text-muted-foreground text-sm">
                      Return: <span className="text-[#22c55e] font-semibold">{plan.rate}</span>
                    </span>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#8b5cf6]/50" />
                  </div>

                  {/* Price with Chrome Gradient */}
                  <div 
                    className="text-6xl font-poppins font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #a855f7 0%, #c084fc 30%, #d4a574 50%, #f5d742 70%, #d4a574 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.2))",
                    }}
                  >
                    {plan.min}
                  </div>
                  <p className="text-muted-foreground text-sm mb-8 tracking-widest">USDT</p>

                  {/* Details Box */}
                  <div 
                    className="rounded-xl p-5 mb-6 space-y-4"
                    style={{
                      background: "rgba(15, 15, 30, 0.8)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Max investment:</span>
                      <span className="text-white font-bold text-sm">{plan.maxMultiplier} ({plan.maxValue})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Daily return:</span>
                      <span className="text-[#22c55e] font-bold text-sm">{plan.dailyReturn}</span>
                    </div>
                  </div>

                  {/* Button with Chrome Gradient */}
                  <button 
                    className="w-full py-4 px-6 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-95"
                    style={{
                      background: "linear-gradient(90deg, #8b5cf6 0%, #a855f7 25%, #d4a574 50%, #f5d742 75%, #f5d742 100%)",
                      color: "#1a1a2e",
                    }}
                  >
                    To Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes borderPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes floatGlow {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: translate(10px, -10px) scale(1.1);
            opacity: 0.25;
          }
        }
        
        @keyframes lightStreak {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(400%); }
          100% { transform: translateX(400%); }
        }
        
        @keyframes ringPulse {
          0% { 
            transform: scale(1);
            opacity: 0.5;
          }
          100% { 
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PlansSection;
