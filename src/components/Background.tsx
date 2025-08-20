"use client";
import React, { useRef, useEffect } from "react";

const ContourBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const animate = () => {
      timeRef.current += 0.005; // Very slow movement
      
      ctx.fillStyle = "#0a0f1c";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      // Draw random shaped contour lines
      for (let i = 0; i < 15; i++) {
        const y = (height / 15) * i;
        const offset = Math.sin(timeRef.current + i * 0.5) * 15;
        
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 10) {
          // Multiple random wave components for irregular shape
          const wave1 = Math.sin((x * 0.005) + timeRef.current + i * 0.7) * 20;
          const wave2 = Math.cos((x * 0.012) + timeRef.current * 1.3 + i * 0.4) * 15;
          const wave3 = Math.sin((x * 0.008) + timeRef.current * 0.7 + i * 1.2) * 10;
          const wave4 = Math.cos((x * 0.015) + timeRef.current * 2 + i * 0.9) * 8;
          
          const randomY = y + offset + wave1 + wave2 + wave3 + wave4;
          
          if (x === 0) {
            ctx.moveTo(x, randomY);
          } else {
            ctx.lineTo(x, randomY);
          }
        }
        
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    animate();

    return () => {
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

export default ContourBackground;