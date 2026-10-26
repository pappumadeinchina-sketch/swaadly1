import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';

export default function Lightbox({ piece, onClose }) {
  if (!piece) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Header - Clean & Minimal */}
        <div className="w-full flex items-center justify-between pb-4 text-[#F0EAE1]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#171310] border border-[#C5A059]/30 text-[#C5A059] font-['Cinzel'] text-[10px] uppercase tracking-widest">
              {piece.tag || 'Master Visual'}
            </span>
            <span className="text-base font-['Cormorant_Garamond'] text-[#F0EAE1] italic hidden sm:inline">
              {piece.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={piece.image}
              download
              className="p-2 border border-[#C5A059]/30 bg-[#171310] text-[#D4C4B5] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors cursor-pointer"
              title="Download high-resolution master asset"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 border border-[#C5A059]/30 bg-[#171310] text-[#D4C4B5] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High-Resolution Plate Display */}
        <div className="w-full bg-[#120F0D] border border-[#C5A059]/20 shadow-2xl flex items-center justify-center overflow-hidden">
          <img
            src={piece.image}
            alt={piece.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Exhibition Plate Caption */}
        <div className="mt-4 text-center text-xs text-[#D4C4B5]/75 max-w-2xl font-['Plus_Jakarta_Sans'] font-light leading-relaxed">
          {piece.oneLiner || piece.description}
        </div>
      </div>
    </div>
  );
}
