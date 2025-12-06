import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AwarenessSection from "@/components/AwarenessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AwarenessSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
