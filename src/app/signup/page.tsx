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
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
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
            <label className="text-sm font-medium text-text-main ml-1 mb-1.5 block">Password</label>
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
          <p className="text-xs text-text-muted leading-relaxed">
            I agree to the <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>

        <Button variant="auth" className="w-full h-12 text-sm font-medium" type="submit">
          Create Account
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-surface px-2 text-text-muted font-medium">Or continue with</span>
          </div>
        </div>

        <button 
          type="button"
          className="w-full flex items-center justify-center gap-3 h-12 border border-muted/20 rounded-lg hover:bg-muted/5 transition-colors font-medium text-sm"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/pjax/google.png" alt="Google" className="w-5 h-5" />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign In</Link>
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-text-muted pt-4">
          <ShieldCheck className="w-4 h-4" />
          Your data is secure and encrypted
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
