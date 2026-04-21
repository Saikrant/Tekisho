// src/pages/Home.jsx
import HeroSection from "@/components/home/HeroSection";
import ProductsBento from "@/components/home/ProductsBento";
import WhyTekisho from "@/components/home/WhyTekisho";
import ClaimValues from "@/components/home/ClaimValues";
import Industries from "@/components/home/Industries";
import CtaBand from "@/components/home/CtaBand";
import SEOHead from "@/components/SEOHead";
import { OrgSchema, FaqSchema } from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SEOHead page="home" />
      <OrgSchema />
      <FaqSchema />
      <main id="main-content">
        <HeroSection />
        <ClaimValues />
        <ProductsBento />
        <WhyTekisho />
        <Industries />
        <CtaBand />
      </main>
    </>
  );
}
