import React from 'react';
import { X, ExternalLink, Mail, Heart } from 'lucide-react';

export default function BrandManifestoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#171310] border border-[#C5A059]/30 p-8 sm:p-12 max-h-[90vh] overflow-y-auto text-left shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#D4C4B5]/60 hover:text-[#C5A059] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pb-6 border-b border-[#C5A059]/20">
          <div className="text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] text-[#C5A059] mb-2">
            Independent Creative Proposal
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-light italic text-[#F0EAE1]">
            Swaadly (Unofficial Concept)
          </h3>
          <p className="text-xs font-['Cinzel'] tracking-wider text-[#D4C4B5]/60 uppercase mt-1">
            Presented for Prashant Kirad & The Swaadly Core Team
          </p>
        </div>

        {/* BOLD HIRE ME CALLOUT */}
        <div className="p-6 rounded-2xl bg-[#0F0C0A] border border-[#C5A059]/40 mb-8 text-center">
          <div className="text-2xl font-black text-[#F0EAE1] tracking-wide mb-2">
            <strong>Swaadly please hire me! 🥺</strong>
          </div>
          <p className="text-xs text-[#D4C4B5]/80 font-light mb-4">
            Passionate about transforming brand narratives into unforgettable digital art and cognitive consumer experiences.
          </p>
          <a
            href="mailto:swaadly@proton.me"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-[#0F0C0A] text-xs font-['Cinzel'] uppercase tracking-widest font-bold shadow-md hover:bg-[#D4AF65] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Reach out: swaadly.proton.me</span>
          </a>
        </div>

        {/* Letter / Editorial Proposal */}
        <div className="space-y-6 text-[#D4C4B5]/85 font-['Plus_Jakarta_Sans'] font-light text-sm leading-relaxed mb-8">
          <p>
            <strong className="text-[#F0EAE1] font-medium font-['Cormorant_Garamond'] text-lg">To the Creators of Swaadly:</strong>
          </p>
          <p>
            Most modern food marketing relies on generic nutritional checklists or hyperbolic influencer soundbites. Swaadly has a far rarer foundation: an authentic community bond founded on trust, wholesome nourishment, and zero-compromise ingredients.
          </p>
          <p>
            This independent concept was developed to demonstrate how Swaadly can be elevated from an everyday grocery item into a lasting cultural icon of care — uniting <strong>cognitive brand psychology</strong>, <strong>commercial studio food photography</strong>, and <strong>bespoke interactive digital storytelling</strong>.
          </p>
        </div>

        {/* Strategic Pillars Summary */}
        <div className="space-y-4 mb-8 pt-6 border-t border-[#C5A059]/15">
          <div className="text-[10px] font-['Cinzel'] uppercase tracking-[0.25em] text-[#C5A059]">
            Key Explorations in this Proposal
          </div>
          
          <div className="border-l-2 border-[#C5A059]/40 pl-4 py-1">
            <div className="text-xs font-['Cinzel'] text-[#F0EAE1] font-semibold">1. Genuine Product Grounding</div>
            <p className="text-xs text-[#D4C4B5]/70 font-light mt-0.5">
              Highlighting the genuine Swaadly tubs (Classic Original 130g, Chocolate Crunchy 110g, Creamy Chocolate 110g) with natural lighting, contact shadows, and zero synthetic distortion.
            </p>
          </div>

          <div className="border-l-2 border-[#C5A059]/40 pl-4 py-1">
            <div className="text-xs font-['Cinzel'] text-[#F0EAE1] font-semibold">2. Cognitive Resonance</div>
            <p className="text-xs text-[#D4C4B5]/70 font-light mt-0.5">
              Transitioning customer perception from utilitarian protein counts to an emotional symbol of maternal assurance and daily dedication.
            </p>
          </div>

          <div className="border-l-2 border-[#C5A059]/40 pl-4 py-1">
            <div className="text-xs font-['Cinzel'] text-[#F0EAE1] font-semibold">3. Multi-Channel Assets</div>
            <p className="text-xs text-[#D4C4B5]/70 font-light mt-0.5">
              Master commercial display visual, photorealistic commercial product scenes, and verified customer review architecture.
            </p>
          </div>
        </div>

        {/* Disclaimer & Official Link */}
        <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[11px] text-[#D4C4B5]/50 font-light">
            Independent creative proposal · Email: <strong className="text-[#C5A059]">swaadly.proton.me</strong>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.swaadly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-['Cinzel'] tracking-wider text-[#C5A059] hover:underline uppercase"
            >
              <span>Visit swaadly.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#C5A059]/15 hover:bg-[#C5A059]/25 border border-[#C5A059]/40 text-[#F0EAE1] text-xs font-['Cinzel'] uppercase tracking-widest transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
