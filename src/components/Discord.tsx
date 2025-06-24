import React from 'react';
import { MessageSquare, Users, Headphones, Share2 } from 'lucide-react';

const Discord: React.FC = () => {
  const discordFeatures = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Community Support",
      description: "Get help from our friendly community and staff members"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Connect",
      description: "Connect with other developers and share your projects"
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Resources",
      description: "Access tutorials, guides, and resources to help you succeed"
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      title: "Updates",
      description: "Stay updated with the latest features and announcements"
    }
  ];

  return (
    <div id="discord" className="bg-indigo-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
              JOIN OUR COMMUNITY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our <span className="text-indigo-400">Discord</span> Community
            </h2>
            <p className="text-indigo-200 mb-8 max-w-lg">
              Connect with our community, get support, and stay updated with the latest news and features.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {discordFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded bg-indigo-800/50 text-indigo-300 mr-3 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-indigo-200 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/2YM3eYuZ5m" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
                Join Discord Community
              </a>
              <a 
                href="https://my.ertixnodes.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-indigo-600 hover:bg-indigo-600/10 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all"
              >
                Access Panel
              </a>
            </div>
          </div>
          
          <div className="lg:ml-auto">
            <div className="bg-indigo-800/30 backdrop-blur-sm border border-indigo-700/50 rounded-xl p-6 shadow-xl shadow-indigo-900/30 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs mr-3">
                    #
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Community Chat</h3>
                    <p className="text-indigo-300 text-xs">General Discussion</p>
                  </div>
                </div>
                <div className="bg-indigo-500 text-xs text-white px-2 py-1 rounded-full">
                  Active
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-indigo-700/30 rounded-lg p-3">
                  <p className="text-indigo-200 text-sm mb-1">
                    <span className="text-white font-medium">User</span>
                    <span className="text-indigo-400 ml-2 text-xs">12:42 PM</span>
                  </p>
                  <p className="text-indigo-100">How do I access the control panel?</p>
                </div>
                
                <div className="bg-indigo-700/30 rounded-lg p-3">
                  <p className="text-indigo-200 text-sm mb-1">
                    <span className="text-white font-medium">Staff</span>
                    <span className="text-indigo-400 ml-2 text-xs">12:43 PM</span>
                  </p>
                  <p className="text-indigo-100">
                    You can access the control panel at my.ertixnodes.org. Let me know if you need help getting started!
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full bg-indigo-700/30 border border-indigo-600/30 text-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-indigo-400"
                  placeholder="Type your message..."
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;