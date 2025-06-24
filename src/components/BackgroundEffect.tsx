import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Advanced particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;
      pulse: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.6 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 400 + 300;
        this.pulse = Math.random() * Math.PI * 2;
      }

      getRandomColor(): string {
        const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ec4899'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        this.pulse += 0.02;

        // Pulsing effect
        this.size = (Math.sin(this.pulse) + 1) * 2 + 1;

        // Fade in and out
        if (this.life < this.maxLife * 0.3) {
          this.opacity = (this.life / (this.maxLife * 0.3)) * 0.6;
        } else if (this.life > this.maxLife * 0.7) {
          this.opacity = ((this.maxLife - this.life) / (this.maxLife * 0.3)) * 0.6;
        }

        // Reset particle if it goes off screen or dies
        if (this.x < -50 || this.x > canvas.width + 50 || 
            this.y < -50 || this.y > canvas.height + 50 || 
            this.life > this.maxLife) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = 0;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
          this.color = this.getRandomColor();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    let mouseInfluence = 0;

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouseInfluence = 1;
    });

    canvas.addEventListener('mouseleave', () => {
      mouseInfluence = 0;
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 120) * 0.15;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });

        // Mouse interaction
        if (mouseInfluence > 0) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 200) * 0.4 * mouseInfluence;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, mouse.x, mouse.y);
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, '#ffffff');
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.restore();

            // Push particles away from mouse
            const force = (200 - distance) / 200;
            particle.speedX += (dx / distance) * force * 0.8;
            particle.speedY += (dy / distance) * force * 0.8;
          }
        }

        particle.update();
        particle.draw();
      });

      // Gradually reduce mouse influence
      mouseInfluence *= 0.95;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-grid-pattern {
          background-size: 80px 80px;
          background-image: 
            linear-gradient(toright, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          position: relative;
        }

        .bg-grid-pattern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          animation: moveBackground 25s ease-in-out infinite;
        }

        @keyframes moveBackground {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 50%; 
          }
          33% { 
            background-position: 100% 0%, 0% 100%, 30% 70%; 
          }
          66% { 
            background-position: 50% 100%, 100% 0%, 70% 30%; 
          }
        }
        
        /* Floating geometric shapes */
        .geometric-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .geometric-shapes::before {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          border: 3px solid rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          top: 15%;
          left: 10%;
          animation: floatRotate 20s infinite ease-in-out;
        }

        .geometric-shapes::after {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          border: 2px solid rgba(139, 92, 246, 0.1);
          top: 70%;
          right: 15%;
          transform: rotate(45deg);
          animation: floatRotate 15s infinite ease-in-out reverse;
        }

        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-30px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-60px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-30px) rotate(270deg) scale(1.05);
          }
        }

        /* Advanced ambient effects */
        .ambient-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse at bottom center, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
          animation: ambientPulse 12s ease-in-out infinite;
        }

        @keyframes ambientPulse {
          0%,100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Dynamic light rays */
        .light-rays {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .light-rays::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(59, 130, 246, 0.05) 45deg,
            transparent 90deg,
            rgba(139, 92, 246, 0.05) 135deg,
            transparent 180deg,
            rgba(16, 185, 129, 0.05) 225deg,
            transparent 270deg,
            rgba(245, 158, 11, 0.05) 315deg,
            transparent 360deg
          );
          animation: rotateRays 60s linear infinite;
        }

        @keyframes rotateRays {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      ` }} />
      <div className="geometric-shapes"></div>
      <div className="ambient-glow"></div>
      <div className="light-rays"></div>
    </>
  );
};

export default BackgroundEffect;