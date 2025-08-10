"use client";
import React, { useRef, useEffect } from "react";

const NeonFloatingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const clickPos = useRef<{ x: number; y: number; time: number | null }>({ x: 0, y: 0, time: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const attractionRadius = 150;
    const friction = 0.97;
    const orbitingPlanets: {
      angle: number;
      radius: number;
      centerX: number;
      centerY: number;
      orbitSpeed: number;
    }[] = [];

    const isMobile = window.innerWidth <= 768;
    const neonCircleCount = isMobile ? 6 : 25;

    const neonCircles = Array.from({ length: 8 }, (_, i) => ({
      layer: i % 3,
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 3 + Math.random() * 3,
      dx: (-0.2 + Math.random() * 0.4) * (0.5 + i % 3 * 0.5),
      dy: (-0.2 + Math.random() * 0.4) * (0.5 + i % 3 * 0.5),
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    }));

    const planets = Array.from({ length: 20 }, (_, i) => {
      if (i < 3) {
        const centerX = Math.random() * width;
        const centerY = Math.random() * height;
        const radius = 5 + Math.random() * 30;
        const angle = Math.random() * Math.PI * 2;
        const orbitSpeed = 0.002 + Math.random() * 0.004;
        orbitingPlanets.push({ angle, radius, centerX, centerY, orbitSpeed });
        return { orbit: true, angle, radius, centerX, centerY, dx: 0, dy: 0, x: 0, y: 0 };
      } else {
        return {
          orbit: false,
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 1 + Math.random() * 2,
          dx: -0.1 + Math.random() * 0.2,
          dy: -0.1 + Math.random() * 0.2
        };
      }
    });

    const applyAttraction = (circle: any) => {
      const dx = mouse.current.x - circle.x;
      const dy = mouse.current.y - circle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < attractionRadius) {
        const force = (1 - dist / attractionRadius) * 0.004;
        circle.dx += dx * force;
        circle.dy += dy * force;
      }
    };

    const animate = () => {
      ctx.fillStyle = "#0a0f2c";
      ctx.fillRect(0, 0, width, height);

      const now = performance.now();
      const burstActive = clickPos.current.time !== null && now - clickPos.current.time < 500;

      // Neon Circles
      for (let c of neonCircles) {
        applyAttraction(c);

        if (burstActive) {
          const dx = c.x - clickPos.current.x;
          const dy = c.y - clickPos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const strength = (1 - dist / 200) * 0.4;
            c.dx += dx * strength;
            c.dy += dy * strength;
          }
        }

        // Apply friction
        c.dx *= friction;
        c.dy *= friction;

        c.x += c.dx;
        c.y += c.dy;

        if (c.x < 0 || c.x > width) c.dx *= -1;
        if (c.y < 0 || c.y > height) c.dy *= -1;

        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = c.color;
        ctx.fill();
        ctx.closePath();
      }

      // Planets
      for (let i = 0; i < planets.length; i++) {
        const p = planets[i];

        if (p.orbit) {
          const orbit = orbitingPlanets[i];
          orbit.angle += orbit.orbitSpeed;
          p.x = orbit.centerX + Math.cos(orbit.angle) * orbit.radius;
          p.y = orbit.centerY + Math.sin(orbit.angle) * orbit.radius;
        } else {
          applyAttraction(p);

          if (burstActive) {
            const dx = p.x - clickPos.current.x;
            const dy = p.y - clickPos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              const strength = (1 - dist / 200) * 0.3;
              p.dx += dx * strength;
              p.dy += dy * strength;
            }
          }

          // Apply friction
          p.dx *= friction;
          p.dy *= friction;

          p.x += p.dx;
          p.y += p.dy;

          if (p.x < 0 || p.x > width) p.dx *= -1;
          if (p.y < 0 || p.y > height) p.dy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius ?? 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.closePath();
      }

      if (burstActive && now - clickPos.current.time! > 500) {
        clickPos.current.time = null;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    window.addEventListener("click", (e) => {
      clickPos.current = {
        x: e.clientX,
        y: e.clientY,
        time: performance.now()
      };
    });

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("click", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
  ref={canvasRef}
  className="fixed inset-0 pointer-events-none"
/>

  );
};

export default NeonFloatingBackground;