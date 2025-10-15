import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CalendarSection from "@/components/CalendarSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/Register";
import RegistrationClose from "@/components/RegistrationClose";
import OpenSourceQuotes from "@/components/OpenSourceQuotes";
import MindsBehindMovement from "@/components/MindsBehindMovement";
import SpeakerSessions from "@/components/SpeakerSessions";
import Speakers from "@/components/Speakers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <HeroSection />
      <CalendarSection />
      <BenefitsSection />
      <AboutSection />
      <OpenSourceQuotes />
      <MindsBehindMovement />
      <SpeakerSessions />
      <Speakers />
      {/* <FAQSection /> */}
      {/* <RegistrationSection /> */}
      {/* <RegistrationForm /> */}
      <RegistrationClose />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
