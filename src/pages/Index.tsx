
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MastermindOutcomes from "@/components/MastermindOutcomes";
import ScheduleSection from "@/components/ScheduleSection";
import AIToolsSection from "@/components/AIToolsSection";
import MentorsSection from "@/components/MentorsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import MarketStatsSection from "@/components/MarketStatsSection";
import FAQSection from "@/components/FAQSection";
import FixedFooterCTA from "@/components/FixedFooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <div className="bg-gray-950">
        <MastermindOutcomes />
      </div>
      <div className="bg-black">
        <ScheduleSection />
      </div>
      <div className="bg-gray-950">
        <AIToolsSection />
      </div>
      <div className="bg-gray-900">
        <MentorsSection />
      </div>
      <div className="bg-black">
        <TargetAudienceSection />
      </div>
      <div className="bg-gray-950">
        <SocialProofSection />
      </div>
      <div className="bg-black">
        <MarketStatsSection />
      </div>
      <div className="bg-gray-950">
        <FAQSection />
      </div>
      <FixedFooterCTA />
      {/* Add bottom padding to prevent content from being hidden behind fixed footer */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
