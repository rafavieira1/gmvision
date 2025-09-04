import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import NumbersSection from "@/components/NumbersSection";
import PlatformSection from "@/components/PlatformSection";
import BenefitsSection from "@/components/BenefitsSection";
import CasesSection from "@/components/CasesSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ContactFormSection from "@/components/ContactFormSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <NumbersSection />
      <PlatformSection />
      <BenefitsSection />
      <CasesSection />
      <FaqSection />
      <CtaSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Home;