import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import InnovationSection from "@/components/InnovationSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactSection from "@/components/ImpactSection";
import DashboardSection from "@/components/DashboardSection";
import ResultsSection from "@/components/ResultsSection";
import PresentationSection from "@/components/PresentationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <InnovationSection />
      <ArchitectureSection />
      <FeaturesSection />
      <ImpactSection />
      <DashboardSection />
      <ResultsSection />
      <PresentationSection />
      <Footer />
    </main>
  );
}
