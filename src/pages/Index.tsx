
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScheduleSection from "@/components/ScheduleSection";
import AIToolsSection from "@/components/AIToolsSection";
import MentorsSection from "@/components/MentorsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import MarketStatsSection from "@/components/MarketStatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ScheduleSection />
      <AIToolsSection />
      <MentorsSection />
      <TargetAudienceSection />
      <SocialProofSection />
      <MarketStatsSection />
      <Footer />
    </div>
  );
};

export default Index;
