import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrategicPositioningSection from "@/components/StrategicPositioningSection";
import InvestorDeckSection from "@/components/InvestorDeckSection";
import CredentialsSection from "@/components/CredentialsSection";

import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import NewsInsights from "@/components/NewsInsights";
import QuantumMarketSection from "@/components/QuantumMarketSection";
import BiotechMarketSection from "@/components/BiotechMarketSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StrategicPositioningSection />
        <InvestorDeckSection />
        <CredentialsSection />

        <SolutionsSection />
        <QuantumMarketSection />
        <BiotechMarketSection />
        <NewsInsights />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
