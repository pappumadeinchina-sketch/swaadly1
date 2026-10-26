import React, { useState, useEffect, useRef } from 'react';

export default function ScrollDripFromAbove() {
  const [stretch, setStretch] = useState(20);
  const [drops, setDrops] = useState([]);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const animFrameId = useRef(null);
  const currentStretch = useRef(20);
  const targetStretch = useRef(20);

  useEffect(() => {
    let lastTime = performance.now();

    const handleScroll = () => {
      const currentY = window.scrollY;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const deltaY = currentY - lastScrollY.current;
      
      // Calculate scroll velocity (only downward scroll stretches the drip from above)
      if (deltaY > 0) {
        scrollVelocity.current = Math.min(80, scrollVelocity.current + deltaY * 0.4);
        targetStretch.current = Math.min(130, 25 + scrollVelocity.current * 1.5);

        // Spawn a falling droplet if scrolling fast enough
        if (scrollVelocity.current > 25 && Math.random() > 0.65) {
          spawnDrop();
        }
      }

      lastScrollY.current = currentY;
      lastTime = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Physics loop with viscous elastic spring damping
    const updatePhysics = () => {
      // Decay velocity
      scrollVelocity.current *= 0.88;
      targetStretch.current = 18 + scrollVelocity.current * 1.2;

      // Spring physics towards target
      const diff = targetStretch.current - currentStretch.current;
      currentStretch.current += diff * 0.12;

      setStretch(Math.round(currentStretch.current * 10) / 10);
      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const spawnDrop = () => {
    const dripPositions = [12, 28, 45, 62, 78, 91];
    const x = dripPositions[Math.floor(Math.random() * dripPositions.length)] + (Math.random() * 4 - 2);
    const newId = Date.now() + Math.random();
    const duration = 1.4 + Math.random() * 0.6;
    const size = 10 + Math.random() * 8;

    setDrops((prev) => [
      ...prev.slice(-10),
      { id: newId, x, duration, size }
    ]);

    setTimeout(() => {
      setDrops((prev) => prev.filter((d) => d.id !== newId));
    }, duration * 1000);
  };

  // Viscous drip wave points hanging from the ceiling (Y = 0)
  const d1 = stretch * 0.55;
  const d2 = stretch * 1.35;
  const d3 = stretch * 0.45;
  const d4 = stretch * 1.6;
  const d5 = stretch * 0.7;
  const d6 = stretch * 1.4;
  const d7 = stretch * 0.5;

  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-40 overflow-visible">
      {/* SVG Peanut Butter Flow Hanging From Above */}
      <svg
        className="w-full filter drop-shadow-[0_10px_20px_rgba(46,22,8,0.7)]"
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: `${Math.max(45, stretch + 40)}px`, transition: 'height 80ms ease-out' }}
      >
        <defs>
          {/* Deep Viscous Peanut Butter Gradient */}
          <linearGradient id="pbTopDripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E170B" />
            <stop offset="25%" stopColor="#5E2C0C" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#E5A352" />
          </linearGradient>

          {/* Golden Specular Sheen */}
          <linearGradient id="pbTopGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#F9D976" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D48B38" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main Viscous Peanut Butter Body Hanging From Above */}
        <path
          d={`M 0,0 
             L 1440,0 
             L 1440,15 
             Q 1380,${15 + d1} 1330,18 
             Q 1260,${18 + d2} 1190,16 
             Q 1120,${16 + d3} 1050,20 
             Q 960,${20 + d4} 870,18 
             Q 790,${18 + d5} 710,22 
             Q 610,${22 + d6} 510,16 
             Q 420,${16 + d3} 340,20 
             Q 250,${20 + d2} 170,16 
             Q 90,${16 + d7} 0,18 
             Z`}
          fill="url(#pbTopDripGrad)"
        />

        {/* Specular Highlight Ribbons on the lowest hanging tips */}
        <ellipse cx="870" cy={16 + d4 * 0.9} rx="12" ry={d4 * 0.12} fill="url(#pbTopGloss)" />
        <ellipse cx="510" cy={16 + d6 * 0.9} rx="10" ry={d6 * 0.11} fill="url(#pbTopGloss)" />
        <ellipse cx="1190" cy={14 + d2 * 0.9} rx="9" ry={d2 * 0.1} fill="url(#pbTopGloss)" />
        <ellipse cx="170" cy={14 + d2 * 0.9} rx="8" ry={d2 * 0.1} fill="url(#pbTopGloss)" />
      </svg>

      {/* Falling Droplets That Drop From Above As You Scroll */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0 pointer-events-none z-50"
          style={{
            left: `${drop.x}%`,
            animation: `fallFromAbove ${drop.duration}s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards`
          }}
        >
          {/* Elongated teardrop droplet */}
          <div
            className="rounded-full bg-gradient-to-b from-[#FFF0C2] via-[#E5A352] to-[#7B4119] shadow-[0_4px_14px_rgba(212,139,56,0.7)]"
            style={{
              width: `${drop.size}px`,
              height: `${drop.size * 1.5}px`,
              borderRadius: '50% 50% 50% 50% / 65% 65% 35% 35%'
            }}
          >
            <div className="w-1 h-1 rounded-full bg-white/90 ml-1 mt-0.5" />
          </div>
        </div>
      ))}

      {/* Droplet Fall Animation Keyframes */}
      <style>{`
        @keyframes fallFromAbove {
          0% {
            transform: translateY(20px) scaleY(1.4) scaleX(0.7);
            opacity: 1;
          }
          70% {
            transform: translateY(60vh) scaleY(1.6) scaleX(0.6);
            opacity: 0.95;
          }
          95% {
            transform: translateY(92vh) scaleY(0.8) scaleX(1.3);
            opacity: 0.8;
          }
          100% {
            transform: translateY(98vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
