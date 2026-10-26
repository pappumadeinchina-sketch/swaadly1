import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Flame, Wheat, ShieldCheck, Heart } from 'lucide-react';

const craftSteps = [
  {
    step: '01',
    icon: Wheat,
    title: 'Saurashtra Harvest',
    tagline: 'Gujarat Native Peanuts',
    description: 'Sourced directly from Saurashtra, Gujarat—renowned for mineral-rich soil that yields naturally sweet, oil-dense peanuts packed with clean plant protein.'
  },
  {
    step: '02',
    icon: Flame,
    title: 'Slow Dry-Roasting',
    tagline: 'Zero Burnt Bitter Notes',
    description: 'Roasted gently in small batches under precise thermal curves. Awakens the rich aromatic pyrazines while keeping the heart-healthy unsaturated fats intact.'
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Zero Palm Oil Milling',
    tagline: 'Pure Stone-Ground Emulsion',
    description: 'Commercial brands dump cheap hydrogenated palm oil to prevent oil separation. Swaadly uses patient stone milling—100% natural, honest, and smooth.'
  },
  {
    step: '04',
    icon: Heart,
    title: 'Acoustic Fresh Seal',
    tagline: 'Packed at Peak Aroma',
    description: 'Every tub is vacuum-sealed immediately after churning to lock in freshness. When you crack open the lid, you hear and smell the difference.'
  }
];

export default function CraftProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="craft-process" className="relative py-28 px-6 lg:px-12 bg-[#0F0C0A] text-[#F0EAE1] overflow-hidden">
      {/* Background warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>II. The Clean Craft</span>
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light italic leading-tight text-[#F0EAE1]">
            From Peanut To Jar.
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-5" />

          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#D4C4B5]/80 font-light max-w-xl mx-auto">
            No cheap palm oil fillers. No artificial emulsifiers. Just the honest, patient craft of India’s cleanest slow-roasted peanut butter.
          </p>
        </div>

        {/* Master Craft Process Visual (Swaadly Official from_peanut_to_jar) */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-[#171310] border border-[#C5A059]/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-4 sm:p-8">
            <img
              src="/assets/from_peanut_to_jar_opt.png"
              alt="From Peanut To Jar - Swaadly Craft Journey"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              loading="lazy"
            />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-['Cinzel'] text-[#D4C4B5]/60 px-2 uppercase tracking-widest text-[10px]">
            <span>Official Swaadly Production Standard</span>
            <span className="text-[#C5A059]">100% Saurashtra Peanuts · 0% Palm Oil</span>
          </div>
        </div>

        {/* 4 Interactive Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {craftSteps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={s.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl bg-[#171310] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#C5A059] shadow-[0_10px_30px_rgba(197,160,89,0.15)] -translate-y-1'
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Cinzel'] text-xs font-semibold text-[#C5A059]">
                      Stage {s.step}
                    </span>
                    <div className="p-2 rounded-lg bg-[#0F0C0A] border border-[#C5A059]/30 text-[#C5A059]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#F0EAE1] mb-1">
                    {s.title}
                  </h3>

                  <div className="text-[10px] font-['Cinzel'] uppercase tracking-wider text-[#C5A059]/80 mb-3">
                    {s.tagline}
                  </div>

                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#D4C4B5]/75 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-['Cinzel'] text-[#C5A059] tracking-wider uppercase">
                  <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                  <span>Quality Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Genuine Ways to Savor Swaadly (Real Food Culture) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#171310]/70 border border-[#C5A059]/25 text-left">
          <div className="text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] text-[#C5A059] mb-2">
            The Swaad Ritual
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-3xl font-light italic text-[#F0EAE1] mb-6">
            Three Ways to Savor the Real Thing.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0F0C0A] border border-[#C5A059]/15">
              <div className="text-xl font-['Cormorant_Garamond'] text-[#C5A059] mb-1 font-normal">
                01. Warm Sourdough Toast
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#D4C4B5]/75 font-light leading-relaxed">
                Spread across fresh toast right off the pan. The natural peanut oils warm and melt into a golden velvet sheen.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0F0C0A] border border-[#C5A059]/15">
              <div className="text-xl font-['Cormorant_Garamond'] text-[#C5A059] mb-1 font-normal">
                02. Crisp Apple & Banana
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#D4C4B5]/75 font-light leading-relaxed">
                Dip sliced Gala apples or bananas directly into the jar. Natural fruit acidity balances the rich roasted nut depth.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0F0C0A] border border-[#C5A059]/15">
              <div className="text-xl font-['Cormorant_Garamond'] text-[#C5A059] mb-1 font-normal">
                03. The Direct Spoonful
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#D4C4B5]/75 font-light leading-relaxed">
                The ultimate test of purity. Straight from the jar to palate—no greasy palm oil film, just pure roasted Gujarat peanuts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
