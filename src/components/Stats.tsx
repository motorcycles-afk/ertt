import React, { useEffect } from 'react';

const Stats: React.FC = () => {
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

  const stats = [
    {
      number: "300+",
      label: "Active Users",
      description: "Developers trust our platform"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Guaranteed availability"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    },
    {
      number: "15GB",
      label: "NVMe Storage",
      description: "Lightning-fast performance"
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <h2 className="text-hero">
              Trusted by
              <br />
              <span className="gradient-text">Developers</span>
            </h2>
            <div className="w-16 h-px bg-white mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto">
              Join hundreds of developers who have chosen ErtixNodes for their hosting needs. 
              Our numbers speak for themselves.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="text-display gradient-text">
                  {stat.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-title">{stat.label}</h3>
                  <p className="text-body">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20 fade-in-section">
          <div className="max-w-4xl mx-auto space-y-8">
            <blockquote className="text-title font-light italic">
              "ErtixNodes has transformed how we deploy and manage our applications. 
              The performance and reliability are unmatched."
            </blockquote>
            <div className="space-y-2">
              <div className="text-white font-medium">Alex Chen</div>
              <div className="text-caption">Senior Developer, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
