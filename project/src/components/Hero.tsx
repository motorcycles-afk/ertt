import React from 'react';
import { ArrowRight, CloudLightning, Database, Lock, Zap } from 'lucide-react';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="particles"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500/10 mr-2">
              <CloudLightning className="text-green-400 h-6 w-6" />
            </div>
            <h1 className="text-white text-xl font-bold">ErtixNodes</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="https://status.ertixnodes.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Status</a>
            <a 
              href="https://my.ertixnodes.space" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Control Panel
            </a>
          </nav>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
              Premium VPS Hosting
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get Your <span className="text-green-400">8GB RAM</span><br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                VPS For Free
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              Start with 8GB RAM, 2 CPU cores, and 15GB storage completely free. 
              Join our growing community of over 300 users.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="https://my.ertixnodes.space" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 group"
              >
                Access Control Panel
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://discord.gg/2YM3eYuZ5m" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-all"
              >
                Join Discord
              </a>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <a 
                href="https://status.ertixnodes.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900/50 rounded-full px-4 py-2 hover:bg-gray-800/70 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-300 text-sm">System Status</span>
              </a>
              <div className="text-gray-400 text-sm">
                <span className="text-green-400 font-medium">300+</span> active users
              </div>
            </div>
          </div>
          
          <div id="terminal" className="lg:ml-auto order-first lg:order-last">
            <Terminal />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            { 
              icon: <Zap className="h-6 w-6 text-green-400" />, 
              title: "KVM & LXC Options", 
              description: "Choose between full virtualization or container-based solutions."
            },
            { 
              icon: <Database className="h-6 w-6 text-blue-400" />, 
              title: "Instant Deploy", 
              description: "Get your VPS up and running in seconds with our automated system."
            },
            { 
              icon: <Lock className="h-6 w-6 text-purple-400" />, 
              title: "Premium Support", 
              description: "Get priority support and dedicated assistance on our Discord."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all hover:shadow-lg hover:shadow-green-500/5 group">
              <div className="p-3 rounded-lg bg-gray-800/50 w-fit mb-4 group-hover:bg-gray-800 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;