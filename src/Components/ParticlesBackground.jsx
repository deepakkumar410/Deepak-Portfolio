import { useEffect, useRef, useState } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId;
    let time = 0;
    const mouse = { x: 0, y: 0 };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Color gradients for particles
    const colors = [
      { r: 56, g: 189, b: 248 },   // cyan-400
      { r: 167, g: 139, b: 250 },  // purple-400
      { r: 244, g: 114, b: 182 },  // pink-400
      { r: 139, g: 92, b: 246 },   // violet-500
    ];

    // Particle class with enhanced features
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseSize = this.size;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Mouse interaction - particles repel from mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.speedX += Math.cos(angle) * force * 0.03;
          this.speedY += Math.sin(angle) * force * 0.03;
        }

        // Apply speed with damping
        this.speedX *= 0.98;
        this.speedY *= 0.98;

        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges with smooth transition
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.y > canvas.height + 10) this.y = -10;
        if (this.y < -10) this.y = canvas.height + 10;

        // Pulsing animation
        time += 0.02;
        this.pulsePhase += 0.05;
        this.size = this.baseSize + Math.sin(this.pulsePhase) * 0.5;
      }

      draw() {
        // Gradient glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Enhanced connection lines with gradient
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            const opacity = 0.3 * (1 - distance / 160);
            
            // Gradient line based on particle colors
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Mouse trail effect
    const drawMouseTrail = () => {
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 80
        );
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (behind particles)
      connectParticles();

      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw mouse trail
      drawMouseTrail();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none overflow-hidden particles-wrapper">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full block opacity-100 bg-transparent max-[768px]:opacity-60 particles-canvas" />
    </div>
  );
};

export default ParticlesBackground;

