import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Simply join our Discord community to get started with the free tier. For premium plans, visit our control panel to create an account and choose your preferred plan."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support through our active Discord community for all users. Premium users get priority support with faster response times and dedicated assistance."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade to premium at any time through our control panel. We offer flexible billing and easy plan changes to match your evolving needs."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime for free tier users and 99.99% uptime SLA for premium users. Our infrastructure is designed for maximum reliability and performance."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for premium plans. If you're not satisfied with our service, we'll provide a full refund within the first 30 days."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="space-y-6">
            <h2 className="text-hero">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <div className="w-16 h-px bg-white mx-auto"></div>
            <p className="text-body max-w-2xl mx-auto">
              Everything you need to know about ErtixNodes. 
              Can't find what you're looking for? Join our Discord community.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-minimal fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors"
              >
                <h3 className="text-title pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-body">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-section">
          <div className="space-y-6">
            <p className="text-body">
              Still have questions? Our community is here to help.
            </p>
            <a 
              href="https://discord.gg/2YM3eYuZ5m" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;