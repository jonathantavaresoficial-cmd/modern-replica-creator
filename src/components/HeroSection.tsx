import { Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotImage from "@/assets/robot-bitcoin.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 to-secondary/20 blur-[120px] rounded-full" />
      </div>

      {/* Robot positioned on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-[60px] rounded-full" />
          <img 
            src={robotImage} 
            alt="AI Robot" 
            className="relative w-72 xl:w-96 animate-float drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Banner */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 animate-pulse-glow">
            <Rocket className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">New: Theta AI with 18% monthly return!</span>
          </div>
        </div>

        {/* Main heading - centered */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-foreground">Revolutionize your Investments</span>
            <br />
            <span className="text-gradient">with</span>
            <br />
            <span className="text-gradient">AI-Powered Arbitrage Robots</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our platform uses advanced AI algorithms to maximize your profits in the cryptocurrency market with complete security and transparency.
          </p>

          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Investing
          </Button>
        </div>

        {/* Robot for mobile/tablet - below content */}
        <div className="mt-12 flex justify-center lg:hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-[60px] rounded-full" />
            <img 
              src={robotImage} 
              alt="AI Robot" 
              className="relative w-64 md:w-72 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
