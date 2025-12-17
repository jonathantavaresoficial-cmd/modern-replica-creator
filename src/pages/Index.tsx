import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlansSection from "@/components/PlansSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CalculatorSection from "@/components/CalculatorSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <PlansSection />
        <WhyChooseSection />
        <CalculatorSection />
      </main>
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Bynation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
