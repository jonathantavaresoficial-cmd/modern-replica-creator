import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LoginDialogProps {
  children: React.ReactNode;
}

const LoginDialog = ({ children }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none overflow-visible">
        {/* Main glass card */}
        <div className="relative group">
          {/* Animated gradient orbs background */}
          <div className="absolute -inset-20 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-0 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-[80px] animate-pulse-glow" />
            <div className="absolute bottom-0 -right-10 w-40 h-40 bg-cyan/30 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>

          {/* Animated border gradient */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan to-magenta rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan to-magenta rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Card content */}
          <div className="relative glass rounded-3xl p-6 md:p-8 border border-white/10">
            {/* Top shine effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-cyan/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-cyan/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/50 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-300 hover:scale-110"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-cyan/20 border border-primary/30 mb-4 animate-pulse-glow">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">Acesso Seguro</span>
                  <Sparkles className="w-3 h-3 text-cyan" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2 font-display">
                  Bem-vindo de volta!
                </h1>
                <p className="text-muted-foreground text-sm">
                  Entre com suas credenciais
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email field */}
                <div className="space-y-1.5">
                  <Label htmlFor="dialog-email" className="text-foreground font-medium text-sm">
                    Email
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary to-cyan rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <Input
                        id="dialog-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 h-11 bg-background/50 border-white/10 focus:border-primary/50 rounded-xl text-sm transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dialog-password" className="text-foreground font-medium text-sm">
                      Senha
                    </Label>
                    <button
                      type="button"
                      className="text-xs text-primary hover:text-cyan transition-colors duration-300"
                    >
                      Esqueceu?
                    </button>
                  </div>
                  <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary to-cyan rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'password' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <Input
                        id="dialog-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 pr-10 h-11 bg-background/50 border-white/10 focus:border-primary/50 rounded-xl text-sm transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-cyan hover:opacity-90 text-white rounded-xl group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Entrando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Entrar
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-5">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-card/80 text-muted-foreground backdrop-blur-sm">
                      ou continue com
                    </span>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 bg-background/30 border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 group text-sm"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
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
                    className="h-10 bg-background/30 border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 group text-sm"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </div>

              {/* Sign up link */}
              <p className="mt-5 text-center text-muted-foreground text-sm">
                Não tem uma conta?{" "}
                <button
                  type="button"
                  className="text-primary hover:text-cyan font-semibold transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Registre-se
                </button>
              </p>

              {/* Security badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3 text-primary" />
                <span>Protegido com criptografia</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
