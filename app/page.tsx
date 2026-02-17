import FloatingShapes from "@/components/sections/FloatingShapes";
import HeroSection from "@/components/sections/HeroSection";
import FlipCardsSection from "@/components/sections/FlipCardsSection";
import HonestWordsSection from "@/components/sections/HonestWords";
import CuriousSection from "@/components/sections/CuriousSection";
import MoodBoardSection from "@/components/sections/MoodBoardSection";
import ClosingSection from "@/components/sections/ClosingSection";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <FloatingShapes />
    <main className="relative z-10">
      <HeroSection />
      <div className="bg-cream/50 backdrop-blur-sm">
        <FlipCardsSection />
      </div>
      <HonestWordsSection />
      <div className="bg-lavender/30 backdrop-blur-sm">
        <CuriousSection />
      </div>
      <MoodBoardSection />
      <div className="bg-mint/30 backdrop-blur-sm">
        <ClosingSection />
      </div>
    </main>
  </div>
);

export default Index;
