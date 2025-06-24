import React, { useState, useEffect } from 'react';
import { Server, Shield, Zap, Globe, Database, Lock } from 'lucide-react';

const Cube3D: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(0);

  const faces = [
    { icon: <Server className="h-8 w-8" />, title: "VPS Hosting", color: "from-green-500 to-emerald-700" },
    { icon: <Shield className="h-8 w-8" />, title: "Security", color: "from-blue-500 to-indigo-700" },
    { icon: <Zap className="h-8 w-8" />, title: "Performance", color: "from-yellow-500 to-orange-700" },
    { icon: <Globe className="h-8 w-8" />, title: "Global", color: "from-purple-500 to-pink-700" },
    { icon: <Database className="h-8 w-8" />, title: "Storage", color: "from-red-500 to-rose-700" },
    { icon: <Lock className="h-8 w-8" />, title: "Privacy", color: "from-teal-500 to-cyan-700" }
  ];

  useEffect(() => {
    if (!isAutoRotating) {
      const timer = setTimeout(() => {
        if (Date.now() - lastInteraction > 3000) {
          setIsAutoRotating(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (isAutoRotating) {
      let frame = 0;
      const animate = () => {
        frame = requestAnimationFrame(() => {
          setRotation(prev => ({
            x: prev.x + 0.5,
            y: prev.y + 0.5
          }));
          animate();
        });
      };
      animate();
      return () => cancelAnimationFrame(frame);
    }
  }, [isAutoRotating, lastInteraction]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientY - top) / height - 0.5) * 180;
    const y = ((clientX - left) / width - 0.5) * 180;

    setRotation({ x, y });
    setLastInteraction(Date.now());
    setIsAutoRotating(false);
  };

  return (
    <div 
      className="w-full h-[400px] perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsAutoRotating(true)}
    >
      <div
        className="relative w-64 h-64 mx-auto transform-style-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isAutoRotating ? 'none' : 'transform 0.1s'
        }}
      >
        {faces.map((face, index) => {
          const transforms = [
            'translateZ(128px)',
            'rotateY(180deg) translateZ(128px)',
            'rotateY(90deg) translateZ(128px)',
            'rotateY(-90deg) translateZ(128px)',
            'rotateX(90deg) translateZ(128px)',
            'rotateX(-90deg) translateZ(128px)'
          ];

          return (
            <div
              key={index}
              className={`absolute w-64 h-64 bg-gradient-to-br ${face.color} rounded-xl flex flex-col items-center justify-center text-white p-6 backface-hidden shadow-2xl`}
              style={{ transform: transforms[index] }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">
                {face.icon}
              </div>
              <h3 className="text-xl font-bold">{face.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cube3D;