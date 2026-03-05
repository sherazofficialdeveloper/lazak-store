import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AuthLayout } from '../../components/layout/AuthLayout';
import { Mail, Lock, Eye, EyeOff, User, ShieldCheck } from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join LAZAK and experience premium shopping"
      fullHeight={true}
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3">
          <div className="relative">
            <Input 
              label="Full Name" 
              placeholder="Enter your full name" 
              type="text" 
              required 
              className="pl-11"
            />
            <User className="absolute left-4 top-[38px] w-5 h-5 text-muted/50" />
          </div>

          <div className="relative">
            <Input 
              label="Email or Phone Number" 
              placeholder="email@example.com or 03XX XXXXXXX" 
              type="text" 
              required 
              className="pl-11"
            />
            <Mail className="absolute left-4 top-[38px] w-5 h-5 text-muted/50" />
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-text-main ml-1 mb-1 block">Password</label>
            <div className="relative">
              <Input 
                placeholder="Create a strong password" 
                type={showPassword ? "text" : "password"} 
                required 
                className="pl-11 pr-11"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/50" />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/50 hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 border-muted/20 text-primary focus:ring-primary/20 rounded" required />
          <p className="text-[10px] text-text-muted leading-tight">
            I agree to the <a href="#" className="text-primary hover:underline font-medium">Terms</a> and <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>

        <Button variant="auth" className="w-full h-11 text-sm font-medium" type="submit">
          Create Account
        </Button>

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted/10"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-surface px-2 text-text-muted font-medium">Or continue with</span>
          </div>
        </div>

        <button 
          type="button"
          className="w-full flex items-center justify-center gap-3 h-11 border border-muted/20 rounded-lg hover:bg-muted/5 transition-colors font-medium text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign In</Link>
        </p>

        <div className="flex items-center justify-center gap-2 text-[10px] text-text-muted pt-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          Your data is secure and encrypted
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
