import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: "Is ErtixNodes really 100% free?",
      answer: "Yes, ErtixNodes offers a free tier VPS hosting. We provide a basic VPS with 1GB RAM and 1 CPU core at no cost, with options to upgrade for additional resources."
    },
    {
      question: "How do you offer free VPS hosting?",
      answer: "We're able to offer free VPS hosting through a combination of sponsorships, optimization of our infrastructure, and community contributions. Our goal is to provide accessible cloud computing resources to developers, students, and hobbyists."
    },
    {
      question: "What are the specs of the free VPS?",
      answer: "Our free VPS starts with 1GB RAM, 1 CPU core, and 10GB SSD storage. You can easily upgrade these resources through our control panel at my.ertixnodes.space if you need more power."
    },
    {
      question: "Is there a limit to how long I can use my VPS?",
      answer: "We don't impose arbitrary time limits on your VPS. As long as you're actively using it and not violating our acceptable use policy, you can keep your VPS running. We may reclaim inactive VPS instances after 30 days of inactivity."
    },
    {
      question: "How do I create a VPS?",
      answer: "Creating a VPS is simple: visit my.ertixnodes.space, create an account, and deploy your VPS. You'll get instant access to manage your server through our control panel."
    },
    {
      question: "What operating systems are available?",
      answer: "We offer a variety of Linux distributions including Ubuntu (18.04, 20.04, 22.04), Debian, CentOS, and Alpine. You can select your preferred OS directly from our control panel."
    },
    {
      question: "What can I use my VPS for?",
      answer: "You can use your VPS for development, testing, hosting websites, running bots, game servers (within resource limits), VPN services, and more. Any legal use case that fits within our resource limitations is generally acceptable."
    },
    {
      question: "How reliable is the service?",
      answer: "We strive for high availability for all VPS instances. Our infrastructure is built on enterprise-grade hardware with redundancy, and you can check our real-time status at status.ertixnodes.org."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about ErtixNodes and our VPS hosting services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-800 last:border-none"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
              >
                <h3 className={`text-lg font-medium ${openIndex === index ? 'text-green-400' : 'text-white'}`}>
                  {item.question}
                </h3>
                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-green-500/10 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                  {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;