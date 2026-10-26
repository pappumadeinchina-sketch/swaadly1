import React, { useState } from 'react';
import { Heart, ShieldCheck, Flame, Sparkles } from 'lucide-react';

export default function CognitiveFramework() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      num: '01',
      icon: Heart,
      title: 'Love > Macros',
      tagline: 'Emotional Resonance',
      punchline: 'Nobody hugs a jar for its barcode numbers.',
      body: 'Swaadly moves past sterile protein charts to celebrate warm morning memories, shared kitchen laughter, and reassuring care.',
      badge: 'From "Protein Spread" → "Gesture of Love"'
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'Zero Secrets. Zero BS.',
      tagline: 'Clean Label Truth',
      punchline: 'Turn the tub around. No chemistry degree required.',
      body: 'Slow-roasted Gujarat peanuts, dark real cocoa, Himalayan pink salt. Zero hydrogenated palm oil, zero fake preservatives.',
      badge: 'From "Corporate Claims" → "Kitchen Honesty"'
    },
    {
      num: '03',
      icon: Flame,
      title: 'Dessert That Fuels.',
      tagline: 'Indulgence as Care',
      punchline: 'Tastes like melted chocolate. Packs 110g protein.',
      body: 'Rich cocoa blended seamlessly with slow-roasted peanuts. Satisfies intense sweet cravings while powering demanding study and training days.',
      badge: 'From "Guilty Cheat" → "Clean Muscle Fuel"'
    }
  ];

  return (
    <section id="brand-thesis" className="relative py-28 px-6 lg:px-12 bg-[#0B0908] text-[#F0EAE1] border-t border-b border-[#C5A059]/15">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Monograph Header - Punchy & Entertaining */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>III. Brand Psychology</span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light italic leading-tight text-[#F0EAE1]">
            Why Swaadly Hits Different.
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-5" />
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#D4C4B5]/80 font-light max-w-xl mx-auto">
            Most brands sell commodity protein. Swaadly elevates itself into a symbolic gesture of care, honest nutrition, and family assurance.
          </p>
        </div>

        {/* 3 Interactive Visual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activeTab === idx;
            return (
              <div 
                key={pillar.num}
                onMouseEnter={() => setActiveTab(idx)}
                className={`p-8 bg-[#171310]/70 border transition-all duration-300 rounded-2xl flex flex-col justify-between group cursor-pointer ${
                  isHovered
                    ? 'border-[#C5A059] shadow-[0_15px_40px_rgba(197,160,89,0.15)] -translate-y-1.5 bg-[#171310]'
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['Cinzel'] text-xs text-[#C5A059] tracking-widest uppercase">
                      Pillar {pillar.num}
                    </span>
                    <div className={`p-2.5 rounded-full border transition-colors ${
                      isHovered ? 'bg-[#C5A059] text-[#0F0C0A] border-[#C5A059]' : 'bg-[#0F0C0A] text-[#C5A059] border-[#C5A059]/30'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#D4C4B5]/60 mb-1">
                    {pillar.tagline}
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#F0EAE1] mb-2 leading-tight">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-medium text-[#C5A059] italic mb-3 font-['Cormorant_Garamond'] text-base">
                    "{pillar.punchline}"
                  </div>

                  <p className="text-xs text-[#D4C4B5]/75 font-light leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                    {pillar.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[10px] font-['Cinzel'] tracking-wider text-[#C5A059] uppercase">
                  {pillar.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Entertaining Strategic Insight Quote */}
        <div className="text-center max-w-3xl mx-auto pt-8 border-t border-[#C5A059]/20">
          <blockquote className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl italic font-light text-[#F0EAE1] leading-relaxed mb-3">
            “You don't sell peanut butter. You sell the unmistakable aroma of slow-roasted peanuts when cracking open a fresh seal.”
          </blockquote>
          <div className="text-[10px] font-['Cinzel'] tracking-[0.25em] text-[#C5A059] uppercase">
            Swaadly Cognitive Analysis · Strategic Insight
          </div>
        </div>

      </div>
    </section>
  );
}
