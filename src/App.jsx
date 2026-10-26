import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollDripFromAbove from './components/ScrollDripFromAbove';
import Hero from './components/Hero';
import CraftProcess from './components/CraftProcess';
import CognitiveFramework from './components/CognitiveFramework';
import ProductShowcase from './components/ProductShowcase';
import CustomerReviews from './components/CustomerReviews';
import CampaignAdGallery from './components/CampaignAdGallery';
import PeanutDripFinale from './components/PeanutDripFinale';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import BrandManifestoModal from './components/BrandManifestoModal';

export default function App() {
  const [selectedLightboxPiece, setSelectedLightboxPiece] = useState(null);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0F0C0A] text-[#F0EAE1] selection:bg-[#C5A059] selection:text-[#0F0C0A] overflow-x-hidden font-['Plus_Jakarta_Sans']">
      {/* Scroll-Driven Peanut Butter Dripping Animation from Above (Ceiling Flow) */}
      <ScrollDripFromAbove />

      {/* Official Swaadly Header (Replicated from swaadly.com: Logo, Products, About, Cart, Profile) */}
      <Navbar onOpenPitch={() => setIsProposalOpen(true)} />

      {/* Cinematic Full-Bleed Antique Hero Showcase */}
      <Hero onOpenPitch={() => setIsProposalOpen(true)} />

      {/* The Clean Craft: From Peanut To Jar (Authentic Production Journey & Savor Ritual) */}
      <CraftProcess />

      {/* Cognitive Framework & Brand Positioning Monograph */}
      <CognitiveFramework />

      {/* Artisanal Product Triptych Showcase with Separate Real AI Commercial Scenes */}
      <ProductShowcase onOpenLightbox={(piece) => setSelectedLightboxPiece(piece)} />

      {/* "Your love" — Real Customer Reviews Copied from swaadly.com */}
      <CustomerReviews />

      {/* Multi-Format Omnichannel Campaign Exhibition */}
      <CampaignAdGallery onOpenLightbox={(piece) => setSelectedLightboxPiece(piece)} />

      {/* Viscous Peanut Butter Cascading From Above as Website Comes to an End */}
      <PeanutDripFinale />

      {/* Minimalist Antique Footer & Official Attribution */}
      <Footer onOpenPitch={() => setIsProposalOpen(true)} />

      {/* Exhibition Lightbox Modal */}
      <Lightbox
        piece={selectedLightboxPiece}
        onClose={() => setSelectedLightboxPiece(null)}
      />

      {/* Unofficial Brand Concept Proposal Modal */}
      <BrandManifestoModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
}
