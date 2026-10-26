import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function Navbar({ onOpenPitch, onOpenManifesto }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const handleOpenProposal = onOpenPitch || onOpenManifesto;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0F0C0A]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-b border-[#C5A059]/20' 
        : 'bg-[#0F0C0A]/80 backdrop-blur-sm border-b border-white/5'
    }`}>
      {/* Top Announcement Bar like swaadly.com */}
      <div className="bg-[#171310] border-b border-[#C5A059]/15 py-1 px-4 text-center text-[10px] font-['Cinzel'] tracking-[0.2em] uppercase text-[#C5A059]">
        <span>Swaadly · India's First Clean Peanut Butter Brand Serving Health With Taste</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Official Swaadly Logo (exact as swaadly.com) */}
          <div className="shrink-0 flex items-center gap-3">
            <a aria-label="Swaadly Home" href="#" className="flex items-center gap-3 group">
              <img
                src="/assets/logo.svg"
                alt="Swaadly Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-['Cormorant_Garamond'] text-lg tracking-wider font-light text-[#F0EAE1]">
                  SWAADLY
                </span>
                <span className="text-[9px] tracking-[0.25em] font-['Cinzel'] uppercase text-[#C5A059]">
                  Unofficial Concept
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links copied from swaadly.com */}
          <nav className="hidden md:flex items-center h-full gap-1 lg:gap-2 text-[#D4C4B5] font-['Plus_Jakarta_Sans'] text-sm">
            {/* Our products with dropdown */}
            <div className="relative h-full flex items-center">
              <button 
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="text-[#C5A059] hover:text-[#E39A49] flex items-center gap-1.5 px-3 lg:px-4 py-2 transition-colors cursor-pointer font-medium"
              >
                <span>Our products</span>
                <img 
                  src="/assets/down_arrow.svg" 
                  alt="" 
                  className={`w-2.5 h-2.5 filter invert brightness-200 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Products Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 bg-[#171310] border border-[#C5A059]/30 rounded-xl shadow-2xl py-3 z-50 text-left animate-fade-in"
                >
                  <a 
                    href="#products" 
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-[#C5A059]/15 text-xs text-[#F0EAE1] hover:text-[#C5A059] transition-colors"
                  >
                    <div className="font-semibold">Classic Original Crunchy</div>
                    <div className="text-[10px] text-[#C5A059]">130g Protein · Gujarat Peanuts</div>
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-[#C5A059]/15 text-xs text-[#F0EAE1] hover:text-[#C5A059] transition-colors"
                  >
                    <div className="font-semibold">Chocolate Crunchy</div>
                    <div className="text-[10px] text-[#C5A059]">110g Protein · Dark Real Cocoa</div>
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-[#C5A059]/15 text-xs text-[#F0EAE1] hover:text-[#C5A059] transition-colors"
                  >
                    <div className="font-semibold">Creamy Chocolate</div>
                    <div className="text-[10px] text-[#C5A059]">110g Protein · Velvet Silk</div>
                  </a>
                </div>
              )}
            </div>

            {/* About us */}
            <a 
              href="#brand-thesis" 
              className="text-[#D4C4B5] hover:text-[#C5A059] px-3 lg:px-4 py-2 transition-colors whitespace-nowrap"
            >
              About us
            </a>

            {/* Your love (copied directly from swaadly.com section) */}
            <a 
              href="#your-love" 
              className="text-[#D4C4B5] hover:text-[#C5A059] px-3 lg:px-4 py-2 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Your love</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            </a>

            {/* The Craft */}
            <a 
              href="#craft-process" 
              className="text-[#D4C4B5] hover:text-[#C5A059] px-3 lg:px-4 py-2 transition-colors whitespace-nowrap"
            >
              The Craft
            </a>

            {/* Campaign Exhibition */}
            <a 
              href="#campaign-gallery" 
              className="text-[#D4C4B5] hover:text-[#C5A059] px-3 lg:px-4 py-2 transition-colors whitespace-nowrap"
            >
              Campaign
            </a>
          </nav>

          {/* Right Action Icons from swaadly.com */}
          <div className="hidden md:flex items-center gap-3">
            {/* Profile / Account Icon from swaadly.com */}
            <a 
              href="https://www.swaadly.com/auth/login?redirect=%2Fprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Account Login" 
              className="p-2.5 rounded-full bg-[#171310] border border-[#C5A059]/20 hover:border-[#C5A059] text-[#D4C4B5] hover:text-[#C5A059] transition-all"
              title="Swaadly Account / Profile"
            >
              <img 
                src="/assets/profile.svg" 
                alt="Account" 
                className="w-4 h-4 object-contain filter invert brightness-150" 
              />
            </a>

            {/* Shopping Cart Icon from swaadly.com with item badge */}
            <a 
              href="https://www.swaadly.com/cart" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Shopping Cart" 
              className="relative p-2.5 rounded-full bg-[#171310] border border-[#C5A059]/20 hover:border-[#C5A059] text-[#D4C4B5] hover:text-[#C5A059] transition-all"
              title="Swaadly Cart"
            >
              <img 
                src="/assets/cart.svg" 
                alt="Cart" 
                className="w-4 h-4 object-contain filter invert brightness-150" 
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] text-[#0F0C0A] text-[9px] font-bold flex items-center justify-center font-mono">
                3
              </span>
            </a>

            {/* Proposal button */}
            <button
              onClick={handleOpenProposal}
              className="ml-2 px-4 py-2 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#F0EAE1] text-xs font-['Cinzel'] uppercase tracking-wider transition-all cursor-pointer"
            >
              Proposal
            </button>
          </div>

          {/* Mobile Hamburger Menu Icon copied from swaadly.com */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg bg-[#171310] border border-[#C5A059]/20 text-[#C5A059] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C5A059]" />
              ) : (
                <img 
                  src="/assets/hamburger.svg" 
                  alt="Menu" 
                  className="w-5 h-5 object-contain filter invert brightness-200" 
                />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171310] border-b border-[#C5A059]/30 px-6 py-6 space-y-4 animate-fade-in text-left">
          <a 
            href="#products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#C5A059] font-medium text-base py-1"
          >
            Our products (3 Real Scenes)
          </a>
          <a 
            href="#brand-thesis" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#D4C4B5] text-sm py-1"
          >
            About us & Brand Thesis
          </a>
          <a 
            href="#your-love" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#D4C4B5] text-sm py-1"
          >
            Your love (Customer Comments)
          </a>
          <a 
            href="#campaign-gallery" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#D4C4B5] text-sm py-1"
          >
            Campaign Exhibition
          </a>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <a 
              href="https://www.swaadly.com/cart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#C5A059] flex items-center gap-1.5 border border-[#C5A059]/30 px-3 py-1.5 rounded-full"
            >
              <img src="/assets/cart.svg" alt="" className="w-3.5 h-3.5 filter invert brightness-150" />
              <span>Cart (3)</span>
            </a>
            <a 
              href="https://www.swaadly.com/auth/login?redirect=%2Fprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#D4C4B5] flex items-center gap-1.5 border border-white/15 px-3 py-1.5 rounded-full"
            >
              <img src="/assets/profile.svg" alt="" className="w-3.5 h-3.5 filter invert brightness-150" />
              <span>Account</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenProposal();
              }}
              className="px-3.5 py-1.5 rounded-full bg-[#C5A059] text-black text-xs font-['Cinzel'] uppercase"
            >
              Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
