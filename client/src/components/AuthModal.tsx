import { useState } from 'react';
import { signInWithGoogle } from '@/lib/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'signup' | 'login'>('signup');

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      onClose();
    } catch (error) {
      console.error('Google sign-in failed:', error);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      data-testid="auth-modal"
    >
      <div className="bg-card border border-border/50 rounded-2xl max-w-md w-full p-8 animate-slide-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-purple-pink rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-headline text-foreground">Welcome to Visionary AI</h2>
        </div>

        {/* Auth Tabs */}
        <div className="flex bg-muted/30 rounded-lg mb-6">
          <button 
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'signup' 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            data-testid="tab-signup"
          >
            Sign Up
          </button>
          <button 
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'login' 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            data-testid="tab-login"
          >
            Login
          </button>
        </div>

        {/* Sign Up Form */}
        {activeTab === 'signup' && (
          <div className="space-y-4" data-testid="signup-form">
            <div>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-input border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                data-testid="input-signup-email"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-input border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                data-testid="input-signup-password"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full bg-input border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                data-testid="input-signup-confirm-password"
              />
            </div>
            <button 
              className="w-full bg-gradient-purple-pink hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-testid="button-create-account"
            >
              Create Account
            </button>
          </div>
        )}

        {/* Login Form */}
        {activeTab === 'login' && (
          <div className="space-y-4" data-testid="login-form">
            <div>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-input border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                data-testid="input-login-email"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-input border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                data-testid="input-login-password"
              />
            </div>
            <button 
              className="w-full bg-gradient-purple-pink hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-testid="button-sign-in"
            >
              Sign In
            </button>
          </div>
        )}

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>

        {/* Google Login */}
        <button 
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          data-testid="button-google-signin"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
