import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, CloudCog, Code, Disc as Discord, Globe, LayoutGrid, ShieldCheck, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuresList = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Easy Management",
      description: "Control your VPS through our intuitive panel at my.ertixnodes.space."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-400" />,
      title: "Free Tier Available",
      description: "Start with 8GB RAM, 2 Cores, and 15GB SSD storage completely free."
    },
    {
      icon: <Discord className="h-6 w-6 text-indigo-400" />,
      title: "Discord Support",
      description: "Get help and support through our active Discord community."
    },
    {
      icon: <CloudCog className="h-6 w-6 text-blue-400" />,
      title: "Full Root Access",
      description: "Complete control over your server with root access to install any software you need."
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Global Network",
      description: "Deploy your VPS in our optimized network location for the best performance."
    },
    {
      icon: <Code className="h-6 w-6 text-pink-400" />,
      title: "Multiple Plans",
      description: "Choose between KVM and LXC virtualization with various resource options."
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-orange-400" />,
      title: "Multiple OS Options",
      description: "Choose from a variety of Linux distributions to suit your project needs."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-400" />,
      title: "DDoS Protection",
      description: "Built-in protection against DDoS attacks to keep your services running smoothly."
    }
  ];

  return (
    <div id="features" className="bg-gray-900 py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features, <span className="animate-gradient-text">Great Value</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with our generous free tier or choose from our affordable premium plans. We provide everything you need to run your applications and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="fade-in-section bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all group card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg bg-gray-700/50 w-fit mb-4 group-hover:bg-gray-700 transition-colors animate-float">
                {feature.icon}
              </div>
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-section">
          <a 
            href="https://my.ertixnodes.space" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group hover-lift"
          >
            Access Control Panel
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;