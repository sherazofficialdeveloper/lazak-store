import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { User, Mail, Phone, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const SignupPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background pt-32 pb-20 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-secondary">LAZAK</span>
          </Link>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-text-muted">Join LAZAK and experience premium shopping</p>
        </div>
        
        <Card className="p-8 space-y-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              label="Email Address" 
              placeholder="name@example.com" 
              type="email" 
              required 
            />
            <Input 
              label="Mobile Number" 
              placeholder="+1 (555) 000-0000" 
              type="tel" 
              required 
            />
            <Input 
              label="Password" 
              placeholder="••••••••" 
              type="password" 
              required 
            />
            
            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" className="mt-1 border-muted/20 text-primary focus:ring-primary/20" required />
              <p className="text-xs text-text-muted leading-relaxed uppercase tracking-widest font-bold">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>
            
            <Button className="w-full gap-2 rounded-none uppercase tracking-widest text-xs font-black" size="lg">
              Create Account <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          
          <div className="pt-4 border-t border-muted/10 flex items-center justify-center gap-2 text-xs text-text-muted">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Your data is encrypted and secure
          </div>
        </Card>
        
        <p className="text-center text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-bold hover:underline">Sign in instead</Link>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;
