import React from 'react';
import { Maximize2, Sparkles } from 'lucide-react';

const campaignPieces = [
  {
    id: 'big-energy',
    title: 'Big Peanut Energy',
    tag: 'Master Display',
    image: '/assets/Banner1.png',
    oneLiner: 'Vibrant waves of pure roasted fuel designed to turn heads at 60mph.'
  },
  {
    id: 'classic-master',
    title: 'Classic Original Crunchy',
    tag: 'Gujarat Gold',
    image: '/assets/peanut_butter_classic.png',
    oneLiner: 'Slow-roasted Saurashtra peanuts churned with coarse crunch and stone-ground velvet.'
  },
  {
    id: 'chocolate-feast',
    title: 'Chocolate Crunch Feast',
    tag: 'Dessert Fuel',
    image: '/assets/chocolate_crunch_feast.png',
    oneLiner: 'Dark Dutch-style cocoa blended with roasted crunchy clusters. Tastes like dessert, fuels like an athlete.'
  },
  {
    id: 'creamy-silk',
    title: 'Creamy Chocolate Silk',
    tag: 'Liquid Velvet',
    image: '/assets/creamy_chocolate.png',
    oneLiner: 'Melt-in-the-mouth silky cocoa spread gliding effortlessly over warm toast or fruit.'
  }
];

export default function CampaignAdGallery({ onOpenLightbox }) {
  return (
    <section id="campaign-gallery" className="relative py-28 px-6 lg:px-12 bg-[#0B0908] text-[#F0EAE1] border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Punchy & Entertaining */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>V. Campaign Exhibition</span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light italic leading-tight text-[#F0EAE1]">
            Visuals Built to Turn Heads.
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-5" />
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#D4C4B5]/80 font-light">
            Click any piece to inspect high-resolution details in full view.
          </p>
        </div>

        {/* Gallery Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {campaignPieces.map((piece, index) => {
            const isWide = index === 0;
            return (
              <div
                key={piece.id}
                className={`group flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Visual Frame */}
                <div 
                  onClick={() => onOpenLightbox(piece)}
                  className="relative overflow-hidden cursor-pointer bg-[#171310] shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#C5A059]/15 group-hover:border-[#C5A059]/60 transition-all duration-500 rounded-sm"
                >
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-auto max-h-[500px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Sleek expand trigger on hover */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#171310]/85 backdrop-blur-md border border-[#C5A059]/30 flex items-center justify-center text-[#F0EAE1] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                    <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>

                {/* Minimalist, entertaining caption */}
                <div className="pt-4 border-t border-[#C5A059]/15 mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-['Cinzel'] uppercase tracking-[0.2em] text-[#C5A059]">
                      {piece.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#D4C4B5]/40">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#F0EAE1] mb-1 leading-snug">
                    {piece.title}
                  </h3>

                  <p className="text-xs text-[#D4C4B5]/70 font-light font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {piece.oneLiner}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
