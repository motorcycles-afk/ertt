import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Zap, Server, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kvm' | 'lxc'>('kvm');

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

  const kvmPlans = [
    {
      name: "KVM Starter",
      price: "$1.50",
      period: "month",
      description: "Perfect for small projects and development",
      features: [
        "2GB RAM",
        "1 vCore",
        "15GB NVMe Storage",
        "Full KVM Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Server className="w-5 h-5" />
    },
    {
      name: "KVM Standard",
      price: "$2.50",
      period: "month",
      description: "Great for production applications",
      features: [
        "4GB RAM",
        "2 vCores",
        "25GB NVMe Storage",
        "Full KVM Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: true,
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "KVM Pro",
      price: "$3.50",
      period: "month",
      description: "Enhanced performance for demanding workloads",
      features: [
        "6GB RAM",
        "3 vCores",
        "35GB NVMe Storage",
        "Full KVM Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Server className="w-5 h-5" />
    },
    {
      name: "KVM Premium",
      price: "$5.00",
      period: "month",
      description: "Maximum performance for enterprise needs",
      features: [
        "8GB RAM",
        "4 vCores",
        "40GB NVMe Storage",
        "Full KVM Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Crown className="w-5 h-5" />
    }
  ];

  const lxcPlans = [
    {
      name: "LXC Micro",
      price: "$0.50",
      period: "month",
      description: "Ultra-affordable for lightweight services",
      features: [
        "2GB RAM",
        "1 vCore",
        "15GB NVMe Storage",
        "Container Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Server className="w-5 h-5" />
    },
    {
      name: "LXC Standard",
      price: "$1.00",
      period: "month",
      description: "Best value for most applications",
      features: [
        "4GB RAM",
        "2 vCores",
        "25GB NVMe Storage",
        "Container Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: true,
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "LXC Pro",
      price: "$1.50",
      period: "month",
      description: "Enhanced resources for growing projects",
      features: [
        "6GB RAM",
        "3 vCores",
        "35GB NVMe Storage",
        "Container Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Server className="w-5 h-5" />
    },
    {
      name: "LXC Premium",
      price: "$2.00",
      period: "month",
      description: "Maximum container performance",
      features: [
        "8GB RAM",
        "4 vCores",
        "50GB NVMe Storage",
        "Container Virtualization",
        "Full Root Access",
        "Shared IPv4 + NAT IPv6"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Crown className="w-5 h-5" />
    }
  ];

  const lifetimePlans = [
    {
      name: "KVM Lifetime",
      price: "$5",
      period: "one-time",
      description: "Pay once, use forever - incredible value!",
      features: [
        "8GB RAM",
        "4 vCores",
        "40GB NVMe Storage",
        "Full KVM Virtualization",
        "Full Root Access",
        "Lifetime Access"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: true,
      icon: <Crown className="w-5 h-5" />,
      badge: "🔥 LIFETIME"
    },
    {
      name: "LXC Lifetime",
      price: "$4",
      period: "one-time",
      description: "Ultimate container hosting deal",
      features: [
        "12GB RAM",
        "4 vCores",
        "100GB NVMe Storage",
        "Container Virtualization",
        "Full Root Access",
        "Lifetime Access"
      ],
      cta: "Order via Discord",
      href: "https://discord.gg/2YM3eYuZ5m",
      popular: false,
      icon: <Crown className="w-5 h-5" />,
      badge: "🔥 LIFETIME"
    }
  ];

  const currentPlans = activeTab === 'kvm' ? kvmPlans : lxcPlans;

  return (
    <section id="pricing" className="section-padding bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <h2 className="text-hero">
              Simple
              <br />
              <span className="gradient-text">Pricing</span>
            </h2>
            <div className="w-16 h-px bg-white mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto">
              Choose between KVM for full virtualization or LXC for better value and performance. 
              All plans include full root access and friendly support.
            </p>
          </div>
        </div>

        {/* Plan Type Tabs */}
        <div className="flex justify-center mb-16 fade-in-section">
          <div className="pricing-tabs">
            <button
              onClick={() => setActiveTab('kvm')}
              className={`pricing-tab ${activeTab === 'kvm' ? 'pricing-tab-active' : ''}`}
            >
              <Server className="w-4 h-4" />
              KVM Plans
            </button>
            <button
              onClick={() => setActiveTab('lxc')}
              className={`pricing-tab ${activeTab === 'lxc' ? 'pricing-tab-active' : ''}`}
            >
              <Zap className="w-4 h-4" />
              LXC Plans
            </button>
          </div>
        </div>

        {/* Plan Type Description */}
        <div className="text-center mb-12 fade-in-section">
          {activeTab === 'kvm' ? (
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">🔥 KVM Plans</h3>
              <p className="text-body max-w-3xl mx-auto">
                Full hardware virtualization with complete isolation. Perfect for running any operating system 
                and applications that require dedicated resources.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">🌱 LXC VPS – More Specs for Less!</h3>
              <p className="text-body max-w-3xl mx-auto">
                Container virtualization offering better value and faster performance at lower prices. 
                Perfect for running lightweight services, testing, websites, bots, and more.
              </p>
            </div>
          )}
        </div>

        {/* Monthly Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} fade-in-section`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="pricing-card-badge">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="pricing-card-icon">
                      {plan.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-light text-white">{plan.price}</span>
                      <span className="text-sm text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${plan.popular ? 'btn-hero-primary' : 'btn-hero-secondary'} w-full text-sm group`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Plans Section */}
        <div className="fade-in-section">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-white mb-4">🔥 Lifetime Deals</h3>
            <p className="text-body max-w-2xl mx-auto">
              Pay once and enjoy your VPS forever! These exclusive lifetime deals offer incredible value 
              for long-term projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {lifetimePlans.map((plan, index) => (
              <div 
                key={index}
                className="pricing-card pricing-card-lifetime fade-in-section"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="pricing-card-badge-lifetime">
                  {plan.badge}
                </div>
                
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="pricing-card-icon-lifetime">
                        {plan.icon}
                      </div>
                      <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-4xl font-light text-white">{plan.price}</span>
                        <span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-primary w-full group"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
