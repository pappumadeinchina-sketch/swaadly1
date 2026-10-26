import React from 'react';
import { ExternalLink, Mail, Heart } from 'lucide-react';

export default function Footer({ onOpenPitch }) {
  return (
    <footer className="bg-[#0B0908] border-t border-[#C5A059]/15 py-24 px-6 lg:px-12 text-[#F0EAE1]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Mark & Identity */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <img
            src="/assets/logo.svg"
            alt="Swaadly Official Logo"
            className="h-10 w-auto filter drop-shadow-[0_4px_16px_rgba(197,160,89,0.3)]"
          />
          <div className="font-['Cormorant_Garamond'] text-3xl font-light italic tracking-wider text-[#F0EAE1]">
            Swaadly
          </div>
          <div className="text-[10px] font-['Cinzel'] uppercase text-[#C5A059] tracking-[0.3em]">
            Health with Taste · Clean Indian Peanut Butter
          </div>
        </div>

        {/* BOLD HIRE ME CALLOUT & CONTACT MAIL */}
        <div className="mb-12 max-w-lg w-full p-8 rounded-2xl bg-[#171310] border border-[#C5A059]/40 text-center shadow-[0_15px_45px_rgba(197,160,89,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-2xl sm:text-3xl font-black text-[#F0EAE1] tracking-wide mb-3">
            <strong>Swaadly please hire me! 🥺</strong>
          </div>

          <p className="text-xs sm:text-sm text-[#D4C4B5]/85 font-['Plus_Jakarta_Sans'] font-light leading-relaxed mb-6">
            If you love this independent creative campaign, cognitive neuromarketing strategy, and digital craftsmanship—let's build the future of Swaadly together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:swaadly@proton.me"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#D4AF65] text-[#0F0C0A] font-['Cinzel'] text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>swaadly.proton.me</span>
            </a>

            <button
              onClick={onOpenPitch}
              className="px-5 py-3 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#F0EAE1] text-xs font-['Cinzel'] uppercase tracking-wider transition-all cursor-pointer"
            >
              Read Full Proposal
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="max-w-2xl border-t border-b border-[#C5A059]/15 py-6 mb-10 text-left sm:text-center text-xs text-[#D4C4B5]/60 font-['Plus_Jakarta_Sans'] font-light leading-relaxed">
          <p>
            <strong className="text-[#C5A059] font-['Cinzel'] tracking-wider text-[11px] block sm:inline mr-2 uppercase">
              Notice:
            </strong>
            This is an independently created, unofficial creative and brand positioning concept. Swaadly, its logo, product labels, and trademarks are the exclusive property of their respective owners. This work is not officially commissioned by, endorsed by, or affiliated with Swaadly or Prashant Kirad.
          </p>
        </div>

        {/* External Links */}
        <div className="flex items-center justify-center gap-6 text-xs font-['Cinzel'] tracking-[0.2em] text-[#D4C4B5]/70 uppercase mb-8">
          <a 
            href="https://www.swaadly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
          >
            <span>Official Website (swaadly.com)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span>·</span>
          <a 
            href="mailto:swaadly@proton.me"
            className="hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
          >
            <span>swaadly.proton.me</span>
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="text-[10px] font-['Cinzel'] tracking-[0.2em] text-[#D4C4B5]/40 uppercase">
          © {new Date().getFullYear()} Swaadly (Unofficial Concept) · Independent Brand Direction
        </div>

      </div>
    </footer>
  );
}
