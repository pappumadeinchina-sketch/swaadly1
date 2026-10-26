import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

const products = [
  {
    edition: '01',
    name: 'Classic Original Crunchy',
    proteinTotal: '130g Protein',
    proteinPer100g: '26g / 100g',
    volume: '500g Tub',
    image: '/assets/ai-classic-original.jpg',
    tagline: 'The Undisputed King',
    oneLiner: 'Coarse Gujarat peanut crunch spreading across warm rustic sourdough. Zero palm oil.',
    notes: ['Gujarat Saurashtra Peanuts', 'Audible Crunch', 'Clean Finish']
  },
  {
    edition: '02',
    name: 'Chocolate Crunchy',
    proteinTotal: '110g Protein',
    proteinPer100g: '22g / 100g',
    volume: '500g Tub',
    image: '/assets/ai-chocolate-crunchy.jpg',
    tagline: 'Dark Cocoa Meets Power',
    oneLiner: 'Dark real cocoa blended with roasted crunchy clusters. Tastes like dessert, fuels like a beast.',
    notes: ['Real Dark Cocoa', 'Roasted Clusters', 'High Energy']
  },
  {
    edition: '03',
    name: 'Creamy Chocolate',
    proteinTotal: '110g Protein',
    proteinPer100g: '22g / 100g',
    volume: '500g Tub',
    image: '/assets/ai-creamy-chocolate.jpg',
    tagline: 'Pure Liquid Velvet',
    oneLiner: 'Melt-in-the-mouth silky cocoa spread gliding effortlessly over fresh toast or a spoon.',
    notes: ['Satin Viscosity', 'Deep Cocoa Luster', 'Zero Greasy Film']
  }
];

export default function ProductShowcase({ onOpenLightbox }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleCardClick = (product) => {
    if (onOpenLightbox) {
      onOpenLightbox({
        id: product.edition,
        title: product.name,
        tag: `${product.proteinTotal} · Real Commercial Scene`,
        image: product.image,
        oneLiner: product.oneLiner
      });
    }
  };

  return (
    <section id="products" className="relative py-28 px-6 lg:px-12 bg-[#0F0C0A] text-[#F0EAE1]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>IV. The Real Product Scenes</span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light italic leading-tight text-[#F0EAE1]">
            Slow-Roasted. Never Compromised.
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-5" />
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#D4C4B5]/80 font-light max-w-xl mx-auto">
            Real commercial food photography scenes. Genuine open Swaadly tubs, rich golden peanut swirls, and crusty sourdough spreads.
          </p>
        </div>

        {/* 3 Separate Real AI Generated Food Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {products.map((product, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div 
                key={product.edition} 
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleCardClick(product)}
                className="flex flex-col group cursor-pointer"
              >
                {/* Real Commercial Food Photography Frame */}
                <div className="relative w-full aspect-[9/15] overflow-hidden rounded-2xl bg-[#171310] border border-[#C5A059]/20 group-hover:border-[#C5A059]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                  {/* Protein Seal Tag */}
                  <div className="absolute top-4 right-4 bg-[#171310]/90 backdrop-blur-md border border-[#C5A059]/40 px-3 py-1.5 text-right shadow-lg">
                    <div className="font-['Cinzel'] text-xs font-semibold text-[#C5A059]">
                      {product.proteinTotal}
                    </div>
                    <div className="text-[9px] font-mono text-[#D4C4B5]/60 tracking-wider">
                      {product.volume}
                    </div>
                  </div>

                  {/* Flavor edition tag */}
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-[#C5A059]/30 px-3 py-1 text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#F0EAE1]">
                    Edition {product.edition}
                  </div>

                  {/* Sleek Lightbox Expand Trigger on Hover */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#171310]/85 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#F0EAE1] opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-105 duration-300">
                    <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </div>

                {/* Snappy Copy & Tasting Notes */}
                <div className="w-full pt-5 flex flex-col text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-['Cinzel'] tracking-[0.25em] text-[#C5A059] uppercase">
                      {product.tagline}
                    </span>
                    <span className="text-xs font-mono text-[#D4C4B5]/60">
                      {product.proteinPer100g}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light text-[#F0EAE1] mb-2 leading-tight">
                    {product.name}
                  </h3>

                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#D4C4B5]/80 font-light leading-relaxed mb-4">
                    {product.oneLiner}
                  </p>

                  {/* Notes Pills */}
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note) => (
                      <span 
                        key={note}
                        className="text-[9px] font-['Cinzel'] tracking-wider uppercase px-2.5 py-1 bg-white/[0.04] border border-white/10 text-[#D4C4B5]/75 rounded-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quality Footnote */}
        <div className="mt-20 pt-8 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-center gap-6 text-center text-[10px] font-['Cinzel'] tracking-[0.2em] text-[#D4C4B5]/60 uppercase">
          <span>Zero Hydrogenated Palm Oil</span>
          <span>·</span>
          <span>Real Saurashtra Crop</span>
          <span>·</span>
          <span>Authentic Open Tub Scenes</span>
          <span>·</span>
          <span>High Plant Protein</span>
        </div>

      </div>
    </section>
  );
}
