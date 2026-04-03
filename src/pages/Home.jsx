// src/pages/Home.jsx
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ProductsBento from "@/components/home/ProductsBento";
import WhyTekisho from "@/components/home/WhyTekisho";
import ClaimValues from "@/components/home/ClaimValues";
import Industries from "@/components/home/Industries";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClaimValues />
      {/* <TrustStrip /> */}
      <ProductsBento />
      <WhyTekisho />
      <Industries />
      <CtaBand />
    </main>
  );
}
