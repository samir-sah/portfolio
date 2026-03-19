import React, { useEffect, useRef } from 'react';

const Plum = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let steps = [];
    let prevSteps = [];
    let rafId;

    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      start(width, height);
    };

    const step = (x, y, rad, width, height, counter = { value: 0 }) => {
      const length = Math.random() * 6;
      counter.value += 1;
      const nx = x + length * Math.cos(rad);
      const ny = y + length * Math.sin(rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100) return;

      const rate = counter.value <= 30 ? 0.8 : 0.5;
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad + Math.random() * (Math.PI / 12), width, height, counter));
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad - Math.random() * (Math.PI / 12), width, height, counter));
    };

    const frame = () => {
      prevSteps = steps;
      steps = [];
      prevSteps.forEach((fn) => {
        if (Math.random() < 0.5) steps.push(fn);
        else fn();
      });
      if (steps.length || prevSteps.length) rafId = requestAnimationFrame(frame);
    };

    const start = (w, h) => {
      cancelAnimationFrame(rafId);
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      
      // BRANCH COLOR: White with 15% opacity looks sick on black
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; 
      
      const rM = () => Math.random() * 0.6 + 0.2;
      steps = [
        () => step(rM() * w, -5, Math.PI / 2, w, h),
        () => step(rM() * w, h + 5, -Math.PI / 2, w, h),
        () => step(-5, rM() * h, 0, w, h),
        () => step(w + 5, rM() * h, Math.PI, w, h),
      ];
      frame();
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Plum;