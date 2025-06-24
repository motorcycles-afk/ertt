import React, { useState, useEffect } from 'react';
import { Server, Users, Clock, ArrowUpCircle } from 'lucide-react';

const Stats: React.FC = () => {
  const [count, setCount] = useState({
    servers: 0,
    users: 0,
    uptime: 0,
    locations: 0
  });
  
  const targets = {
    servers: 250,
    users: 300,
    uptime: 99.9,
    locations: 1
  };
  
  // Animate stat numbers on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const fps = 60;
    const frames = duration / 1000 * fps;
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / frames;
      
      if (frame <= frames) {
        setCount({
          servers: Math.floor(progress * targets.servers),
          users: Math.floor(progress * targets.users),
          uptime: parseFloat((progress * targets.uptime).toFixed(1)),
          locations: Math.floor(progress * targets.locations)
        });
      } else {
        clearInterval(timer);
        setCount(targets);
      }
    }, 1000 / fps);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Server className="h-6 w-6 text-green-400" />,
      value: count.servers.toLocaleString(),
      label: "Active VPS",
      suffix: "+"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      value: count.users.toLocaleString(),
      label: "Happy Users",
      suffix: "+"
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6 text-purple-400" />,
      value: count.uptime,
      label: "Uptime",
      suffix: "%"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      value: count.locations,
      label: "Location",
      suffix: ""
    }
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`p-8 flex flex-col items-center text-center ${
                  index < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-700' : ''
                }`}
              >
                <div className="p-3 rounded-full bg-gray-700/50 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 flex items-end">
                  {stat.value}<span className="text-green-400">{stat.suffix}</span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;