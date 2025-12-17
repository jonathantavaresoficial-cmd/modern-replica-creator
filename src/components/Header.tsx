import { Globe, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-bynation.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="Bynation" className="h-10 md:h-12" />

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 mr-2">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Globe className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <span className="text-sm">🇺🇸</span>
            </button>
          </div>
          
          <button className="p-2.5 rounded-full bg-blue hover:bg-blue/80 transition-all hover:scale-110">
            <Send className="w-4 h-4 text-foreground" />
          </button>
          <button className="p-2.5 rounded-full bg-gradient-to-br from-magenta to-orange hover:scale-110 transition-all">
            <Instagram className="w-4 h-4 text-foreground" />
          </button>
          
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button variant="hero" size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
