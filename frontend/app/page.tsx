import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import InfrastructureHighlights from "@/components/home/InfrastructureHighlights";
import FacilityGallery from "@/components/home/FacilityGallery";
import ServicesPreview from "@/components/home/ServicesPreview";
import CertificationsSection from "@/components/home/CertificationsSection";
import SecuritySection from "@/components/home/SecuritySection";
import TrustedBy from "@/components/home/TrustedBy";
import NepalPresence from "@/components/home/NepalPresence";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <InfrastructureHighlights />
      <ServicesPreview />
      <CertificationsSection />
      <SecuritySection />
      <TrustedBy />
      <NepalPresence />
      <FacilityGallery />
      <CTASection />
    </>
  );
}
