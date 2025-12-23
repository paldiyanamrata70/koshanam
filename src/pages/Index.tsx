import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import DividerBand from '@/components/DividerBand';
import FeaturedCollection from '@/components/FeaturedCollection';
import FabricArtistry from '@/components/FabricArtistry';
import JourneySection from '@/components/JourneySection';
import ReviewsSection from '@/components/ReviewsSection';
import WatchFinest from '@/components/WatchFinest';
import ArtisanalExcellence from '@/components/ArtisanalExcellence';
import FacesOfKosha from '@/components/FacesOfKosha';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main>
        <HeroSection />
        <StorySection />
        <DividerBand />
        <FeaturedCollection />
        <FabricArtistry />
        <JourneySection />
        <ReviewsSection />
        <WatchFinest />
        <ArtisanalExcellence />
        <FacesOfKosha />
        <MapSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
