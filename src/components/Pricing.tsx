import React, { useState, useMemo } from 'react';
import { Check, ArrowRight, Zap, Server, Crown } from 'lucide-react';
import { vpsPlans, vdsPlans, locations } from './plans';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
  icon: React.ReactNode;
  install_fee?: string;
}

type PlanType = 'vps' | 'vds';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanType>('vps');
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);

  const currentPlans = useMemo(() => {
    switch (activeTab) {
      case 'vps':
        return vpsPlans;
      case 'vds':
        return vdsPlans;
      default:
        return [];
    }
  }, [activeTab]);

  const selectedLocationName = useMemo(() => {
    return locations.find(loc => loc.id === selectedLocation)?.name || 'Germany';
  }, [selectedLocation]);

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl font-extralight text-white mb-6 tracking-tight">
            Our Pricing
         </h2>
         <div className="w-12 h-px bg-white/20 mx-auto mb-8"></div>
         <p className="text-xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
           Explore our competitive pricing for VPS and VDS plans. All plans are backed by our robust infrastructure and expert support.
         </p>
       </div>

       {/* Discount Banner */}
       <div className="text-center mb-12 bg-green-500/10 border border-green-500/20 rounded-lg p-4 max-w-2xl mx-auto">
         <p className="text-green-400 font-semibold">🎉 Special Offer: 20% off on all VPS plans and no setup fees for VDS! 🎉</p>
       </div>

       {/* Location Selector */}
       <div className="flex justify-center mb-12">
         <div className="flex items-center space-x-4">
           <span className="text-white/70">Location:</span>
           <select
             value={selectedLocation}
             onChange={(e) => setSelectedLocation(e.target.value)}
             className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
           >
             {locations.map(loc => (
               <option key={loc.id} value={loc.id} className="bg-black text-white">{loc.name}</option>
             ))}
           </select>
         </div>
       </div>

       {/* Tabs */}
       <div className="flex justify-center mb-20">
         <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
           <button
             onClick={() => setActiveTab('vps')}
             className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
               activeTab === 'vps' ? 'bg-white text-black shadow-lg' : 'text-white/70 hover:text-white'
             }`}
           >
             VPS
           </button>
           <button
             onClick={() => setActiveTab('vds')}
             className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
               activeTab === 'vds' ? 'bg-white text-black shadow-lg' : 'text-white/70 hover:text-white'
             }`}
           >
             VDS
           </button>
         </div>
       </div>

       {/* Plan Type Description */}
       <div className="text-center mb-16">
         <div className="space-y-4">
           <h3 className="text-xl font-medium text-white">
             {activeTab === 'vps' && 'Virtual Private Server Plans'}
             {activeTab === 'vds' && 'Virtual Dedicated Server Plans'}
           </h3>
           <p className="text-white/60 max-w-3xl mx-auto">
             {activeTab === 'vps' && 'High-performance virtual servers with flexible configurations.'}
             {activeTab === 'vds' && 'Get dedicated performance with our high-spec virtual servers, ideal for demanding enterprise applications.'}
           </p>
         </div>
       </div>

       {/* Plans Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
         {currentPlans.map((plan: Plan, index: number) => (
           <div
             key={`${activeTab}-${plan.name}-${index}`}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                </div>
              )}

              <div className={`h-full bg-white/[0.02] backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 ${
                plan.popular ? 'border-white/15 shadow-2xl' : 'border-white/10 hover:shadow-xl'
              }`}>
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-extralight text-white">{plan.price}</span>
                    <span className="text-white/50 text-sm ml-1">/{plan.period}</span>
                  </div>
                  {activeTab === 'vds' && <p className="text-white/60 text-sm">No setup fee!</p>}
                  <p className="text-white/60 text-sm">Location: {selectedLocationName}</p>
                  <p className="text-white/60 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <Check className="w-4 h-4 text-white/60 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group/btn ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;