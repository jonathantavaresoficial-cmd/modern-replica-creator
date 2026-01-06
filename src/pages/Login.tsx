import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CryptoBackground from "@/components/CryptoBackground";
import logo from "@/assets/logo-bynation.png";
import robotImage from "@/assets/robot-bitcoin.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <CryptoBackground />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] animate-float-slow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Branding */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
          <Link to="/" className="group">
            <img 
              src={logo} 
              alt="Bynation" 
              className="h-16 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]" 
            />
          </Link>
          
          <div className="relative">
            {/* Multi-layer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/40 via-primary/40 to-magenta/40 rounded-full blur-[80px] animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-[60px]" />
            
            {/* Robot image */}
            <img 
              src={robotImage} 
              alt="AI Robot" 
              className="relative w-72 animate-float drop-shadow-[0_20px_50px_rgba(139,92,246,0.4)]"
              loading="eager"
              fetchPriority="high"
            />
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-3 h-3 bg-cyan rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-2 h-2 bg-magenta rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
            </div>
          </div>
          
          <div className="text-center space-y-4 max-w-md">
            <h2 className="text-3xl font-bold text-gradient font-display">
              Bem-vindo de volta!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Entre na sua conta e continue sua jornada no mundo das criptomoedas com a ajuda da nossa IA avançada.
            </p>
            
            {/* Feature badges */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary">Seguro</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/30">
                <Zap className="w-4 h-4 text-cyan" />
                <span className="text-xs text-cyan">Rápido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/">
              <img src={logo} alt="Bynation" className="h-12 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
            </Link>
          </div>

          {/* Main glass card */}
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan to-magenta rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan to-magenta rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Card content */}
            <div className="relative glass rounded-3xl p-8 md:p-10 border border-white/10">
              {/* Top shine effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-cyan/20 border border-primary/30 mb-6 animate-pulse-glow">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Acesso Seguro</span>
                    <Sparkles className="w-4 h-4 text-cyan" />
                  </div>
                  <h1 className="text-4xl font-bold text-foreground mb-3 font-display">
                    Login
                  </h1>
                  <p className="text-muted-foreground">
                    Entre com suas credenciais para continuar
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email
                    </Label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                      <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary to-cyan rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`} />
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="pl-12 h-14 bg-background/50 border-white/10 focus:border-primary/50 rounded-xl text-base transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-foreground font-medium">
                        Senha
                      </Label>
                      <button
                        type="button"
                        className="text-sm text-primary hover:text-cyan transition-colors duration-300"
                      >
                        Esqueceu a senha?
                      </button>
                    </div>
                    <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.02]' : ''}`}>
                      <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary to-cyan rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-100' : ''}`} />
                      <div className="relative">
                        <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'password' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          className="pl-12 pr-12 h-14 bg-background/50 border-white/10 focus:border-primary/50 rounded-xl text-base transition-all duration-300"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary via-secondary to-cyan hover:opacity-90 text-white rounded-xl group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                      disabled={isLoading}
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Entrando...
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          Entrar na conta
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Divider */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-card/80 text-muted-foreground backdrop-blur-sm">
                        ou continue com
                      </span>
                    </div>
                  </div>

                  {/* Social buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 bg-background/30 border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 bg-background/30 border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Sign up link */}
                <p className="mt-8 text-center text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link
                    to="/"
                    className="text-primary hover:text-cyan font-semibold transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    Registre-se grátis
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Security badge */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/30 border border-white/10 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>Criptografia de ponta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
