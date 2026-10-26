import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Droplets } from 'lucide-react';

export default function PeanutDripFinale() {
  const [dripCount, setDripCount] = useState(154);
  const [fallingDrops, setFallingDrops] = useState([]);
  const [sectionStretch, setSectionStretch] = useState(110);
  const sectionRef = useRef(null);

  // Measure scroll down into this finale section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // As user scrolls down further into the section, it stretches downward from above!
        const progress = Math.min(1.8, Math.max(0.4, (windowHeight - rect.top) / windowHeight));
        setSectionStretch(Math.round(80 + progress * 85));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous periodic droplets dropping from above
  useEffect(() => {
    const timer = setInterval(() => {
      spawnDripFromAbove(Math.random() * 80 + 10);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const spawnDripFromAbove = (xPercent) => {
    const dropId = Date.now() + Math.random();
    const duration = 2.2 + Math.random() * 0.8;
    const size = 12 + Math.random() * 8;

    setFallingDrops((prev) => [
      ...prev.slice(-10),
      { id: dropId, x: xPercent, duration, size }
    ]);
    setDripCount((c) => c + 1);

    setTimeout(() => {
      setFallingDrops((prev) => prev.filter((d) => d.id !== dropId));
    }, duration * 1000);
  };

  const handleSectionClick = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    spawnDripFromAbove(Math.max(5, Math.min(95, clickX)));
  };

  return (
    <section 
      ref={sectionRef}
      id="peanut-drip-finale"
      onClick={handleSectionClick}
      className="relative pt-36 pb-24 px-6 bg-[#0B0908] text-[#F0EAE1] overflow-hidden select-none cursor-pointer border-t border-[#C5A059]/10"
    >
      {/* 
        PEANUT BUTTER DRIPPING DIRECTLY FROM ABOVE (Y = 0 of this section) 
        Hangs from the ceiling and stretches downward as you scroll from above!
      */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-20">
        
        {/* Layer 1: Dark Roasted Caramel Peanut Butter Base */}
        <svg 
          className="w-full filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)]"
          viewBox="0 0 1440 280" 
          preserveAspectRatio="none"
          style={{ height: `${sectionStretch + 60}px`, transition: 'height 120ms ease-out' }}
        >
          <defs>
            <linearGradient id="finaleDeepPB" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1C0D05" />
              <stop offset="40%" stopColor="#3E1C0A" />
              <stop offset="85%" stopColor="#753C14" />
              <stop offset="100%" stopColor="#9C531F" />
            </linearGradient>
          </defs>
          <path
            d={`M 0,0 
               L 1440,0 
               L 1440,25 
               Q 1350,${25 + sectionStretch * 0.7} 1280,30 
               Q 1190,${30 + sectionStretch * 1.3} 1110,25 
               Q 1000,${25 + sectionStretch * 0.55} 930,35 
               Q 830,${35 + sectionStretch * 1.55} 740,25 
               Q 640,${25 + sectionStretch * 0.75} 560,30 
               Q 450,${30 + sectionStretch * 1.4} 360,25 
               Q 240,${25 + sectionStretch * 0.6} 160,35 
               Q 70,${35 + sectionStretch * 1.15} 0,25 
               Z`}
            fill="url(#finaleDeepPB)"
          />
        </svg>

        {/* Layer 2: Rich Golden Viscous Peanut Butter Flow Cascading Down From Above */}
        <svg 
          className="w-full absolute top-0 left-0 filter drop-shadow-[0_10px_20px_rgba(212,139,56,0.4)]"
          viewBox="0 0 1440 280" 
          preserveAspectRatio="none"
          style={{ height: `${sectionStretch + 40}px`, transition: 'height 100ms ease-out' }}
        >
          <defs>
            <linearGradient id="finaleGoldenPB" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3E1C0A" />
              <stop offset="30%" stopColor="#753C14" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#E5A352" />
            </linearGradient>

            <linearGradient id="finaleGlossSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F9D976" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D48B38" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M 0,0 
               L 1440,0 
               L 1440,18 
               Q 1360,${18 + sectionStretch * 0.65} 1290,22 
               Q 1200,${22 + sectionStretch * 1.25} 1120,18 
               Q 1010,${18 + sectionStretch * 0.5} 940,26 
               Q 840,${26 + sectionStretch * 1.45} 750,18 
               Q 650,${18 + sectionStretch * 0.7} 570,22 
               Q 460,${22 + sectionStretch * 1.35} 370,18 
               Q 250,${18 + sectionStretch * 0.55} 170,26 
               Q 80,${26 + sectionStretch * 1.05} 0,18 
               Z`}
            fill="url(#finaleGoldenPB)"
          />

          {/* Specular honey gloss crests on the dripping tips */}
          <ellipse cx="750" cy={20 + sectionStretch * 1.25} rx="14" ry={sectionStretch * 0.15} fill="url(#finaleGlossSheen)" />
          <ellipse cx="370" cy={20 + sectionStretch * 1.15} rx="12" ry={sectionStretch * 0.14} fill="url(#finaleGlossSheen)" />
          <ellipse cx="1120" cy={20 + sectionStretch * 1.05} rx="11" ry={sectionStretch * 0.13} fill="url(#finaleGlossSheen)" />
        </svg>

        {/* Dynamic Falling Golden Droplets Dropping from the Ceiling */}
        {fallingDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute top-0 pointer-events-none z-30"
            style={{
              left: `${drop.x}%`,
              animation: `dripDropCascade ${drop.duration}s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards`
            }}
          >
            <div 
              className="rounded-full bg-gradient-to-b from-[#FFF0C2] via-[#E5A352] to-[#7B4119] shadow-[0_4px_16px_rgba(212,139,56,0.7)]"
              style={{
                width: `${drop.size}px`,
                height: `${drop.size * 1.4}px`,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/80 ml-1 mt-0.5" />
            </div>
          </div>
        ))}

      </div>

      {/* Entertaining Center Copy (Framed Underneath the Drip from Above) */}
      <div className="max-w-3xl mx-auto text-center relative z-30 pt-16 sm:pt-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
          <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Dripping From Above</span>
        </div>

        <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-light italic text-[#F0EAE1] leading-tight">
          Never Leave A Single <span className="text-[#C5A059] font-normal">Drop.</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base font-['Plus_Jakarta_Sans'] font-light text-[#D4C4B5]/80 max-w-lg mx-auto">
          Slow-roasted Gujarat Saurashtra peanuts churned into pure golden velvet. Scrape the jar, lick the spoon, and savor the finale.
        </p>

        {/* Entertaining Interactive Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#171310] border border-[#C5A059]/25 text-xs text-[#D4C4B5] font-mono">
            <Droplets className="w-4 h-4 text-[#C5A059]" />
            <span>Total Dripped: <strong className="text-[#C5A059]">{dripCount}g</strong></span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              spawnDripFromAbove(25);
              setTimeout(() => spawnDripFromAbove(50), 180);
              setTimeout(() => spawnDripFromAbove(75), 360);
            }}
            className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF65] text-[#0F0C0A] font-['Cinzel'] text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Drop From Above
          </button>
        </div>

        <div className="text-[10px] font-['Cinzel'] tracking-widest text-[#D4C4B5]/50 uppercase mt-4">
          (Click or scroll anywhere to release more golden peanut butter from above)
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes dripDropCascade {
          0% {
            transform: translateY(30px) scaleY(1.3) scaleX(0.8);
            opacity: 1;
          }
          75% {
            transform: translateY(220px) scaleY(1.6) scaleX(0.65);
            opacity: 1;
          }
          95% {
            transform: translateY(310px) scaleY(0.7) scaleX(1.4);
            opacity: 0.9;
          }
          100% {
            transform: translateY(340px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
