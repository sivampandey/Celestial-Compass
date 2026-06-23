import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to your spiritual journey.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative px-4">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none" />
      
      <div className="w-full max-w-md bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="text-4xl text-primary mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">🕉️</div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to manage your consultations</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email or Mobile</label>
            <Input required placeholder="Enter your email or mobile" className="bg-background border-border/50 h-12" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">Password</label>
              <span className="text-xs text-primary hover:underline cursor-pointer">Forgot Password?</span>
            </div>
            <Input required type="password" placeholder="••••••••" className="bg-background border-border/50 h-12" />
          </div>
          
          <Button type="submit" className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            Login
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border/50"></div>
            <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm">or</span>
            <div className="flex-grow border-t border-border/50"></div>
          </div>

          <Button type="button" variant="outline" className="w-full h-12 bg-background border-border/50 hover:bg-card">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Don't have an account?{' '}
          <Link href="/signup">
            <span className="text-primary hover:underline cursor-pointer font-medium">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
