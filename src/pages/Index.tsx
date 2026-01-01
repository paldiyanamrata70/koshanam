import { useState, useEffect, Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';

// Lazy load components below the fold
const StorySection = lazy(() => import('@/components/StorySection'));
const DividerBand = lazy(() => import('@/components/DividerBand'));
const FeaturedCollection = lazy(() => import('@/components/FeaturedCollection'));
const FabricArtistry = lazy(() => import('@/components/FabricArtistry'));
const JourneySection = lazy(() => import('@/components/JourneySection'));
const ReviewsSection = lazy(() => import('@/components/ReviewsSection'));
const WatchFinest = lazy(() => import('@/components/WatchFinest'));
const ArtisanalExcellence = lazy(() => import('@/components/ArtisanalExcellence'));
const FacesOfKosha = lazy(() => import('@/components/FacesOfKosha'));
const MapSection = lazy(() => import('@/components/MapSection'));
const Footer = lazy(() => import('@/components/Footer'));
const WhatsAppButton = lazy(() => import('@/components/WhatsAppButton'));

interface IndexProps {
  showPreloader: boolean;
}

const Index = ({ showPreloader }: IndexProps) => {
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
      {!showPreloader && <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main>
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      {!showPreloader && <WhatsAppButton isSidebarOpen={sidebarOpen} />}
    </>
  );
};

export default Index;
