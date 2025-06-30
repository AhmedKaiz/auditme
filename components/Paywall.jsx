import React, { useState } from 'react';
import { Check, Star, Zap, Target, Eye, Menu, X } from 'lucide-react';

export default function AuditMeLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('landing'); // landing, login, signup

  const handlePayment = () => {
    // Integrate with your payment processor (Stripe, etc.)
    alert('Redirecting to payment processor...');
  };

  const LoginForm = () => (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
      <div className="relative z-10 max-w-md w-full">
        <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Welcome Back
            </h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-0 text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-0 text-white placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
            
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-500 hover:to-purple-600 font-medium transition-all duration-300 active:scale-95 active:shadow-lg active:shadow-purple-500/50 active:from-purple-400 active:to-purple-500">
              Sign In
            </button>
            
            <div className="text-center">
              <button 
                onClick={() => setCurrentView('signup')}
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                Don't have an account? Sign up
              </button>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setCurrentView('landing')}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SignupForm = () => (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
      <div className="relative z-10 max-w-md w-full">
        <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Join Audit Me
            </h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-0 text-white placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-0 text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-0 text-white placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
            
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-500 hover:to-purple-600 font-medium transition-all duration-300 active:scale-95 active:shadow-lg active:shadow-purple-500/50 active:from-purple-400 active:to-purple-500">
              Create Account
            </button>
            
            <div className="text-center">
              <button 
                onClick={() => setCurrentView('login')}
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setCurrentView('landing')}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentView === 'login') return <LoginForm />;
  if (currentView === 'signup') return <SignupForm />;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                    backgroundImage: 'linear-gradient(to right, #5e1cc4, #c453f3)'
                }}
              >
                Audit Me
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setCurrentView('login')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </button>
              <button 
                onClick={() => setCurrentView('signup')}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 active:scale-95 active:shadow-lg active:shadow-purple-500/50 active:from-purple-400 active:to-purple-500"
              >
                Sign Up
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4 bg-gray-900/80 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                <button 
                  onClick={() => {setCurrentView('login'); setIsMenuOpen(false);}}
                  className="text-gray-300 hover:text-white transition-colors text-left py-2"
                >
                  Log In
                </button>
                <button 
                  onClick={() => {setCurrentView('signup'); setIsMenuOpen(false);}}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 text-left active:scale-95 active:shadow-lg active:shadow-purple-500/50 active:from-purple-400 active:to-purple-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent leading-tight mb-8"
                style={{
                    backgroundImage: 'linear-gradient(to right, #5e1cc4, #c453f3)'
                }}
              
            
            >
              Audit Me
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Uncover the invisible patterns in your Twitter presence
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Get brutally honest insights that most won't tell you. Transform your Twitter strategy with AI-powered analysis that reveals what's really working.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setCurrentView('signup')}
                className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-95 active:shadow-2xl active:shadow-purple-500/60 active:from-purple-400 active:to-purple-500"
              >
                Start Your Audit
              </button>
              <div className="flex items-center text-gray-400">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Join 1,000+ solopreneurs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-16">
              What You'll Discover
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <Eye className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Hidden Patterns</h3>
                <p className="text-gray-300 leading-relaxed">
                  Uncover the invisible engagement patterns that are killing your reach. See what your audience actually responds to.
                </p>
              </div>
              
              <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <Target className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Audience Insights</h3>
                <p className="text-gray-300 leading-relaxed">
                  Discover who's really following you and why. Get detailed analysis of your true audience vs. who you think you're reaching.
                </p>
              </div>
              
              <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <Zap className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Growth Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get a personalized roadmap to 10x your Twitter growth. No generic advice - specific actions based on your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-16">
              Get Your Audit Today
            </h2>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 border-2 border-purple-500/50 rounded-3xl p-8 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Complete Twitter Audit</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-black text-white">$10</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <p className="text-gray-300">Everything you need to transform your Twitter presence</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Comprehensive Twitter profile analysis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Audience engagement pattern breakdown</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Personalized growth strategy roadmap</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Downloadable JSON context profile</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Brutal honesty (no sugar-coating)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Instant results (5-minute analysis)</span>
                  </div>
                </div>
                
                <button 
                  onClick={handlePayment}
                  className="w-full py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-95 active:shadow-2xl active:shadow-purple-500/60 active:from-purple-400 active:to-purple-500"
                >
                  Get Your Audit Now
                </button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Secure payment • Instant access • No subscriptions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-gray-800">
                      <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                    backgroundImage: 'linear-gradient(to right, #5e1cc4, #c453f3)'
                }}
              
              >
                Audit Me
              </span>
            </div>
            <p className="text-gray-400">
              © 2025 Audit Me. Uncover what's hidden in your Twitter presence.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}