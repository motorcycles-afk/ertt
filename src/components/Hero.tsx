import React, { useEffect, useRef, memo } from 'react';
import { ArrowRight, Shield, Zap, Globe, Server, Lock, Gauge } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section, .slide-in-left-section, .slide-in-right-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" ref={heroRef}>
      {/* Luxurious Background Elements */}
      <div className="absolute inset-0">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-floating-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Status Badge */}
            <div className="text-center mb-12 fade-in-section">
              <div className="inline-flex items-center space-x-3 hero-status-badge">
                <div className="status-dot-hero"></div>
                <span className="text-caption text-white/70">All Systems Operational • 99.9% Uptime</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column - Hero Text */}
              <div className="lg:col-span-7 space-y-12 slide-in-left-section">
                {/* Main Headline */}
                <div className="space-y-8">
                  <h1 className="hero-headline">
                    Premium
                    <br />
                    <span className="hero-gradient-text">VPS Hosting</span>
                    <br />
                    <span className="hero-accent-text">Redefined</span>
                  </h1>
                  <div className="hero-divider"></div>
                </div>

                {/* Description */}
                <p className="hero-description">
                  Experience enterprise-grade virtual private servers with uncompromising performance, 
                  security, and reliability. Built for developers who demand excellence.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Lock className="w-5 h-5" />, text: 'Enterprise Security', desc: 'Advanced DDoS protection' },
                    { icon: <Zap className="w-5 h-5" />, text: 'Instant Deployment', desc: 'Deploy in seconds' },
                    { icon: <Globe className="w-5 h-5" />, text: 'Global Network', desc: 'Worldwide data centers' },
                    { icon: <Server className="w-5 h-5" />, text: 'Full Root Access', desc: 'Complete control' }
                  ].map((feature, index) => (
                    <div key={index} className="hero-feature-card">
                      <div className="hero-feature-icon">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="hero-feature-title">{feature.text}</div>
                        <div className="hero-feature-desc">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://discord.gg/2YM3eYuZ5m" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-primary group"
                  >
                    <span>Join Community</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  
                  <a 
                    href="#pricing"
                    className="btn-hero-secondary"
                  >
                    View Pricing
                  </a>
                </div>

                {/* Stats */}
                <div className="hero-stats-grid">
                  <div className="hero-stat">
                    <div className="hero-stat-number">300+</div>
                    <div className="hero-stat-label">Active Users</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-number">99.9%</div>
                    <div className="hero-stat-label">Uptime</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-number">24/7</div>
                    <div className="hero-stat-label">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className="lg:col-span-5 slide-in-right-section">
                <div className="relative">
                  {/* Main Terminal Card */}
                  <div className="hero-terminal-card">
                    <div className="hero-terminal-header">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/15"></div>
                        <div className="w-3 h-3 rounded-full bg-white/10"></div>
                      </div>
                      <div className="hero-terminal-title">ErtixNodes VPS</div>
                    </div>
                    
                    <div className="hero-terminal-content">
                      <div className="space-y-3 font-mono text-sm">
                        <div className="text-gray-400">$ ssh root@your-vps.ertixnodes.space</div>
                        <div className="text-white">Welcome to ErtixNodes VPS</div>
                        <div className="text-gray-400">System load: <span className="text-green-400">0.08</span></div>
                        <div className="text-gray-400">Memory usage: <span className="text-blue-400">15%</span></div>
                        <div className="text-gray-400">Disk usage: <span className="text-yellow-400">8%</span></div>
                        <div className="text-white">$ docker run -d nginx</div>
                        <div className="text-green-400">Container started successfully</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-subtle-pulse"></div>
                          <span className="text-white">Ready for deployment</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics Card */}
                  <div className="hero-metrics-card">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">CPU Usage</span>
                        <span className="text-sm text-white">12%</span>
                      </div>
                      <div className="hero-progress-bar">
                        <div className="hero-progress-fill" style={{ width: '12%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Network I/O</span>
                        <span className="text-sm text-white">2.4 GB/s</span>
                      </div>
                      <div className="hero-progress-bar">
                        <div className="hero-progress-fill" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/10 rounded-lg animate-gentle-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-lg animate-gentle-float" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Highlights */}
      <div className="relative z-10 pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section">
            {[
              { 
                icon: <Gauge className="w-6 h-6" />,
                title: "Lightning Fast", 
                description: "NVMe SSD storage with optimized network infrastructure for maximum performance.",
              },
              { 
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security", 
                description: "Advanced DDoS protection and secure infrastructure to keep your data safe.",
              },
              { 
                icon: <Server className="w-6 h-6" />,
                title: "24/7 Support", 
                description: "Get help anytime through our active Discord community and support team.",
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="hero-bottom-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="hero-bottom-card-icon">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="hero-bottom-card-title">{feature.title}</h3>
                  <p className="hero-bottom-card-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
