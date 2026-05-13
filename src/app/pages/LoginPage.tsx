import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BookOpen, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex items-center gap-12">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-white shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.9)] flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-3xl bg-secondary shadow-[8px_8px_20px_rgba(255,138,91,0.2)] flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-3xl">📚</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-3xl bg-accent shadow-[8px_8px_20px_rgba(255,213,107,0.2)] flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-[30px] shadow-[12px_12px_24px_rgba(0,0,0,0.08),-12px_-12px_24px_rgba(255,255,255,0.9)] p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="mb-2">Welcome Back!</h1>
              <p className="text-muted-foreground">Sign in to continue your learning journey</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@school.edu"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-input-background border-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] focus:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] transition-shadow outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-input-background border-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] focus:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] transition-shadow outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 rounded-lg border-2 border-muted-foreground/30 checked:bg-primary checked:border-primary cursor-pointer"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-[8px_8px_20px_rgba(76,111,255,0.3)] hover:shadow-[10px_10px_24px_rgba(76,111,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <button className="text-primary hover:text-primary/80 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
