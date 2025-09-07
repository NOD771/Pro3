import HeroSlider from '@/components/HeroSlider';
import ToolsSection from '@/components/ToolsSection';
import FeaturedGuides from '@/components/FeaturedGuides';
import CommunityGallery from '@/components/CommunityGallery';
import InfoSections from '@/components/InfoSections';

const Home = () => {
  return (
    <main className="flex-1" data-testid="home-page">
      <HeroSlider />
      <ToolsSection />
      <FeaturedGuides />
      <CommunityGallery />
      <InfoSections />
    </main>
  );
};

export default Home;
