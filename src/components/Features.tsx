import React, { useEffect } from 'react';
import { Shield, Zap, Globe, Database, Lock, Cpu } from 'lucide-react';

const Features: React.FC = () => {
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

  const features = [
    {
      icon: <Shield className="icon-large" />,
      title: "Enterprise Security",
      description: "Advanced DDoS protection, firewall configuration, and secure infrastructure to keep your applications safe from threats."
    },
    {
      icon: <Zap className="icon-large" />,
      title: "Instant Deployment",
      description: "Deploy your applications in seconds with our automated provisioning system and pre-configured environments."
    },
    {
      icon: <Globe className="icon-large" />,
      title: "Global Network",
      description: "Multiple data centers worldwide ensure low latency and high availability for your global user base."
    },
    {
      icon: <Database className="icon-large" />,
      title: "NVMe Storage",
      description: "Lightning-fast NVMe SSD storage with automatic backups and 99.9% data durability guarantee."
    },
    {
      icon: <Lock className="icon-large" />,
      title: "Full Root Access",
      description: "Complete control over your server environment with root access and custom configuration capabilities."
    },
    {
      icon: <Cpu className="icon-large" />,
      title: "High Performance",
      description: "Latest generation processors with dedicated resources and guaranteed performance levels."
    }
  ];

  return (
    <section id="features" className="section-padding bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <h2 className="text-hero">
              Built for
              <br />
              <span className="gradient-text">Performance</span>
            </h2>
            <div className="w-16 h-px bg-white mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto">
              Every feature is designed with performance, security, and reliability in mind. 
              Experience enterprise-grade hosting that scales with your needs.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-minimal p-8 hover-lift fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className="text-white">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-title">{feature.title}</h3>
                  <p className="text-body">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 fade-in-section">
          <div className="space-y-6">
            <p className="text-body">
              Ready to experience the difference?
            </p>
            <a 
              href="#pricing" 
              className="btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
