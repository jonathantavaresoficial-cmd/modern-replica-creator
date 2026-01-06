import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, User, Rocket, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SignUpDialogProps {
  children: React.ReactNode;
}

const SignUpDialog = ({ children }: SignUpDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms || !passwordsMatch) return;
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
      <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none overflow-visible max-h-[90vh] overflow-y-auto">
        {/* Main glass card */}
        <div className="relative group">
          {/* Animated gradient orbs background */}
          <div className="absolute -inset-20 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-0 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px] animate-pulse-glow" />
            <div className="absolute bottom-0 -right-10 w-40 h-40 bg-magenta/30 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan/20 rounded-full blur-[60px] animate-float-slow" />
          </div>

          {/* Animated border gradient */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-secondary via-magenta to-cyan rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-secondary via-magenta to-cyan rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Card content */}
          <div className="relative glass rounded-3xl p-6 md:p-8 border border-white/10">
            {/* Top shine effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-secondary/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-magenta/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-magenta/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-secondary/50 rounded-br-lg" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary/20 to-magenta/20 border border-secondary/30 mb-3 animate-pulse-glow">
                  <Rocket className="w-3 h-3 text-secondary" />
                  <span className="text-xs text-secondary font-medium">Comece Agora</span>
                  <Sparkles className="w-3 h-3 text-magenta" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-1 font-display">
                  Crie sua conta
                </h1>
                <p className="text-muted-foreground text-sm">
                  Junte-se à revolução cripto com IA
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name field */}
                <div className="space-y-1">
                  <Label htmlFor="signup-name" className="text-foreground font-medium text-sm">
                    Nome Completo
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-secondary to-magenta rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'name' ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 h-10 bg-background/50 border-white/10 focus:border-secondary/50 rounded-xl text-sm transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1">
                  <Label htmlFor="signup-email" className="text-foreground font-medium text-sm">
                    E-mail
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-secondary to-magenta rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 h-10 bg-background/50 border-white/10 focus:border-secondary/50 rounded-xl text-sm transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-1">
                  <Label htmlFor="signup-phone" className="text-foreground font-medium text-sm">
                    Telefone
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-secondary to-magenta rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'phone' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'phone' ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 h-10 bg-background/50 border-white/10 focus:border-secondary/50 rounded-xl text-sm transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-1">
                  <Label htmlFor="signup-password" className="text-foreground font-medium text-sm">
                    Senha
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-secondary to-magenta rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'password' ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Mínimo 8 caracteres"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField(null)}
                        className="pl-10 pr-10 h-10 bg-background/50 border-white/10 focus:border-secondary/50 rounded-xl text-sm transition-all duration-300"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary transition-colors duration-300"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Password strength indicator */}
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          password.length >= level * 2
                            ? level <= 2
                              ? 'bg-orange'
                              : 'bg-green-500'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Confirm Password field */}
                <div className="space-y-1">
                  <Label htmlFor="signup-confirm-password" className="text-foreground font-medium text-sm">
                    Confirmar Senha
                  </Label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'confirmPassword' ? 'scale-[1.02]' : ''}`}>
                    <div className={`absolute -inset-[1px] bg-gradient-to-r from-secondary to-magenta rounded-xl opacity-0 blur-sm transition-opacity duration-300 ${focusedField === 'confirmPassword' ? 'opacity-100' : ''}`} />
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'confirmPassword' ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Repita sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={() => setFocusedField('confirmPassword')}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-10 pr-10 h-10 bg-background/50 border-white/10 focus:border-secondary/50 rounded-xl text-sm transition-all duration-300 ${
                          confirmPassword.length > 0 && !passwordsMatch ? 'border-red-500/50' : ''
                        } ${passwordsMatch ? 'border-green-500/50' : ''}`}
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary transition-colors duration-300"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  {confirmPassword.length > 0 && !passwordsMatch && (
                    <p className="text-xs text-red-400 mt-1">As senhas não coincidem</p>
                  )}
                  {passwordsMatch && (
                    <p className="text-xs text-green-400 mt-1">Senhas coincidem ✓</p>
                  )}
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-0.5 border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                  />
                  <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    Eu concordo com os{" "}
                    <button type="button" className="text-secondary hover:text-magenta transition-colors">
                      Termos de Uso
                    </button>{" "}
                    e{" "}
                    <button type="button" className="text-secondary hover:text-magenta transition-colors">
                      Política de Privacidade
                    </button>
                  </label>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-secondary via-magenta to-cyan hover:opacity-90 text-white rounded-xl group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading || !acceptTerms || !passwordsMatch}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Criando conta...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Criar conta grátis
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Login link */}
              <p className="mt-4 text-center text-muted-foreground text-sm">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-secondary hover:text-magenta font-semibold transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Faça login
                </button>
              </p>

              {/* Security badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3 text-secondary" />
                <span>Seus dados estão protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
