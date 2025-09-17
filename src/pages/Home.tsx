import { memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TextRevealSection from "@/components/TextRevealSection";
// import NumbersSection from "@/components/NumbersSection";
import TipoClienteSection from "@/components/TipoClienteSection";
import DifferencesSection from "@/components/DifferencesSection";
import TextHorizonSection from "@/components/TextHorizonSection";
import CasesSection from "@/components/CasesSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ContactFormSection from "@/components/ContactFormSection";

const Home = memo(() => {
  return (
    <main className="min-h-screen relative" role="main" aria-label="Página inicial da GMvision">
      <Header />
      <HeroSection />
      <TextRevealSection />
      <AboutSection />
      {/* <NumbersSection /> */}
      <DifferencesSection />
      <TextHorizonSection />
      <CasesSection />
      <TipoClienteSection />
      <FaqSection />
      <CtaSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
});

Home.displayName = 'Home';

export default Home;