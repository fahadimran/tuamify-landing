import {
  Banner,
  ContactSection,
  HeroSection,
  OurPartners,
  OurValuesSection,
  PricingSection,
  ProductsSection,
} from "../components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="pt-24"></div>
      <OurValuesSection />
      <div className="pt-12 md:pt-24"></div>
      <ProductsSection />
      <div className="pt-12 lg:pt-24"></div>
      <OurPartners />
      <div className="pt-24"></div>
      <Banner />
      <div className="pt-24"></div>
      <PricingSection />
      <div className="pt-24"></div>
      <ContactSection />
      <div className="pt-24"></div>
    </>
  );
}
