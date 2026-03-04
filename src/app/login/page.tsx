import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Chrome, Github, Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background pt-20 pb-10 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-secondary">LAZAK</span>
          </Link>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-text-muted">Enter your credentials to access your account</p>
        </div>
        
        <Card className="p-8 space-y-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              label="Email Address" 
              placeholder="name@example.com" 
              type="email" 
              required 
            />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-text-main ml-1 uppercase tracking-widest text-[10px] font-bold">Password</label>
                <a href="#" className="text-[10px] text-primary hover:underline uppercase tracking-widest font-bold">Forgot password?</a>
              </div>
              <Input placeholder="••••••••" type="password" required />
            </div>
            <Button className="w-full gap-2 rounded-none uppercase tracking-widest text-xs font-black" size="lg">
              Sign In <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </Card>
        
        <p className="text-center text-sm text-text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-bold hover:underline">Create an account</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
