import React from 'react';
import { Check, Monitor, Box, Shield, Cpu, HardDrive, Network, Cloud } from 'lucide-react';

const Pricing: React.FC = () => {
  const sharedFeatures = [
    "Full Root Access",
    "Shared IPv4 + NAT IPv6",
    "Fair Usage Bandwidth",
    "Easy Control Panel Access",
    "Discord Community Support",
    "99.9% Uptime Target",
    "DDoS Protection"
  ];

  return (
    <div id="pricing" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="text-green-400">Perfect Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with our generous free tier or upgrade to a premium plan for more power.
            All plans include professional features and support.
          </p>
        </div>

        {/* Free Tier */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-500/30 shadow-xl shadow-green-500/5">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    FREE TIER
                  </div>
                  <h3 className="text-3xl font-bold text-white">Start Free</h3>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-5xl font-bold text-white">$0</div>
                  <div className="text-gray-400 mt-1">forever</div>
                </div>
              </div>
              
              <div className="bg-gray-950/50 rounded-lg p-4 mb-8">
                <h4 className="text-white font-medium mb-2">Free Tier Specs:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    8GB RAM
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    2 CPU Cores
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    15GB SSD
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {sharedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://my.ertixnodes.space" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                >
                  Get Started Free
                </a>
                <a 
                  href="https://status.ertixnodes.org" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all"
                >
                  View System Status
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* KVM Plans */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">KVM VPS</h3>
              </div>
              <p className="text-gray-300">Full virtualization for advanced users</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-950 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Lifetime Plan</span>
                  <span className="text-green-400 font-bold">$5</span>
                </div>
                <p className="text-sm text-gray-400">8GB RAM • 4 vCores • 40GB Disk</p>
              </div>

              {[
                { price: "1.50", specs: "2GB RAM • 1 vCore • 15GB Disk" },
                { price: "2.50", specs: "4GB RAM • 2 vCores • 25GB Disk" },
                { price: "3.50", specs: "6GB RAM • 3 vCores • 35GB Disk" },
                { price: "5.00", specs: "8GB RAM • 4 vCores • 40GB Disk" }
              ].map((plan, index) => (
                <div key={index} className="bg-gray-950 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">Monthly Plan</span>
                    <span className="text-green-400 font-bold">${plan.price}/mo</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.specs}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LXC Plans */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Box className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">LXC VPS</h3>
              </div>
              <p className="text-gray-300">Container virtualization for better value</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-950 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Lifetime Plan</span>
                  <span className="text-green-400 font-bold">$4</span>
                </div>
                <p className="text-sm text-gray-400">12GB RAM • 4 Cores • 100GB Disk</p>
              </div>

              {[
                { price: "0.50", specs: "2GB RAM • 1 vCore • 15GB Disk" },
                { price: "1.00", specs: "4GB RAM • 2 vCores • 25GB Disk" },
                { price: "1.50", specs: "6GB RAM • 3 vCores • 35GB Disk" },
                { price: "2.00", specs: "8GB RAM • 4 vCores • 50GB Disk" }
              ].map((plan, index) => (
                <div key={index} className="bg-gray-950 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">Monthly Plan</span>
                    <span className="text-green-400 font-bold">${plan.price}/mo</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Join our Discord server to purchase paid plans and get premium support
          </p>
          <a 
            href="https://discord.gg/2YM3eYuZ5m" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
          >
            <Cloud className="w-5 h-5 mr-2" />
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;