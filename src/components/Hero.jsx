import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onOpenPitch, onOpenManifesto }) {
  const handleOpen = onOpenPitch || onOpenManifesto;
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15;
    const y = (clientY / window.innerHeight - 0.5) * 15;
    setMouseOffset({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 sm:px-12 overflow-hidden bg-grain select-none"
    >
      {/* Dynamic ambient glow following subtle parallax */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#C5A059]/[0.08] rounded-full blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(calc(-50% + ${mouseOffset.x}px), calc(-50% + ${mouseOffset.y}px))` }}
      />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#B87333]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Subtle Antique Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#C5A059]/40" />
          <span className="text-[11px] font-['Cinzel'] uppercase tracking-[0.3em] text-[#C5A059]">
            Swaadly · Unofficial Brand Study
          </span>
          <span className="w-8 h-[1px] bg-[#C5A059]/40" />
        </div>

        {/* Master Editorial Headline */}
        <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl lg:text-8xl font-normal text-[#F0EAE1] tracking-tight leading-[1.05] max-w-5xl">
          Real Peanuts.<br />
          <span className="italic font-light text-[#C5A059]">
            Real Swaad.
          </span>
        </h1>

        {/* Entertaining & Punchy Subtext */}
        <p className="mt-6 text-[#D4C4B5] text-base sm:text-xl font-['Plus_Jakarta_Sans'] font-light max-w-2xl leading-relaxed">
          100% slow-roasted Saurashtra peanuts. Stone-ground for pure velvet mouthfeel. <strong className="text-[#F0EAE1] font-medium">Zero palm oil. Zero BS.</strong>
        </p>

        {/* Action Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#craft-process"
            className="group px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF65] text-[#0F0C0A] font-['Cinzel'] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.35)] cursor-pointer flex items-center gap-2"
          >
            <span>The Clean Craft</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={handleOpen}
            className="px-7 py-3.5 rounded-full border border-[#F0EAE1]/20 hover:border-[#C5A059] text-[#F0EAE1] hover:text-[#C5A059] font-['Cinzel'] text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
          >
            Read Brand Thesis
          </button>
        </div>

        {/* Cinematic Master Key Visual with subtle 3D tilt */}
        <div className="mt-16 w-full relative">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-[#C5A059]/15 transition-transform duration-700 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.15}deg) rotateX(${-mouseOffset.y * 0.15}deg)`
            }}
          >
            <img
              src="/assets/real-peanuts-hero.png"
              alt="Swaadly Real Peanuts Real Swaad Master Key Visual"
              className="w-full h-auto object-cover filter contrast-[1.03] brightness-[0.98]"
            />
            {/* Soft antique vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>

          {/* Understated caption beneath the image */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-['Cormorant_Garamond'] text-[#D4C4B5]/70 px-2 italic">
            <span>Plate I — The Authentic Trio Lineup & Slow-Roasted Peanuts</span>
            <span className="font-['Cinzel'] tracking-[0.2em] uppercase text-[10px] text-[#C5A059]/80 not-italic">Zero Palm Oil · Clean Label</span>
          </div>
        </div>

      </div>
    </section>
  );
}
