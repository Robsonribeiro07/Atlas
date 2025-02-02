"use client"
import React, { useEffect, useRef } from "react";

interface ParticlesCanvasProps {
theme: string
}

const ParticlesCanvas: React.FC<ParticlesCanvasProps> = ({ theme = 'dark' }) => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const mouse = useRef({ x: 0, y: 0 });


console.log(theme)
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
  const particleCount = 100;
  const connectionDistance = 120;
  const repulsionRadius = 100;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
    });
  }

  const drawParticle = (particle: typeof particles[0]) => {
    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y - particle.size);
    ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
    ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
    ctx.closePath();
    ctx.fillStyle = theme === "dark" ? "#fff" : theme === "system" ? "#fff" : "#000";
    ctx.fill();
  };

  const connectParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  };

  const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      const dx = particle.x - mouse.current.x;
      const dy = particle.y - mouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < repulsionRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (repulsionRadius - distance) / repulsionRadius;
        const repulsionX = Math.cos(angle) * force * 5;
        const repulsionY = Math.sin(angle) * force * 5;

        particle.x += repulsionX;
        particle.y += repulsionY;
      }

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      drawParticle(particle);
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
  };

  const handleMouseMove = (event: MouseEvent) => {
    mouse.current.x = event.clientX;
    mouse.current.y = event.clientY;
  };

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);

  animateParticles();

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
  };
}, [theme]);

return (
  <canvas
    ref={canvasRef}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  />
);
};

export default ParticlesCanvas;
