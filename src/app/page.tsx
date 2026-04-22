import HeroSection from "@/components/sections/hero-section";
import TrustSection from "@/components/sections/trust-section";
import TemplatesSection from "@/components/sections/templates-section";
import OversightSection from "@/components/sections/oversight-section";
import PricingSection from "@/components/sections/pricing-section";
import CtaFooterSection from "@/components/sections/cta-footer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <TemplatesSection />
      <OversightSection />
      <PricingSection />
      <CtaFooterSection />
    </>
  )
};
