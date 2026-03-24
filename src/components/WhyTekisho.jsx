import React from "react";
import {
  TrendingUp,
  ShieldCheck,
  Settings,
  Zap,
} from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    Icon: TrendingUp,
    name: "AI-first mindset with measurable ROI",
    description: "Every AI solution we build is designed with clear success metrics and measurable business outcomes from day one.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-10 bg-gradient-to-br from-blue-500 to-transparent w-full h-full rounded-full" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: ShieldCheck,
    name: "Trusted enterprise backbone",
    description: "Deep expertise in SAP, Cloud, and Security ensures your AI solutions integrate seamlessly with existing systems.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-10 bg-gradient-to-br from-blue-500 to-transparent w-full h-full rounded-full" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Settings,
    name: "Tailored solutions, not off-the-shelf",
    description: "Custom-built solutions that address your unique business challenges and industry-specific requirements.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-10 bg-gradient-to-br from-indigo-500 to-transparent w-full h-full rounded-full" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Faster time-to-value",
    description: "Proven frameworks and accelerators reduce implementation time while maintaining quality and customization.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-10 bg-gradient-to-br from-blue-600 to-transparent w-full h-full rounded-full" />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
];

const WhyTekisho = () => {
  return (
    <section className="py-24 bg-white" id="why-tekisho">
      <div className="container max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ letterSpacing: '-0.02em'}}>
            Why <span className="text-[#0055FF]">Tekisho</span>?
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            We bring together AI innovation and enterprise expertise to deliver end-to-end transformation. Responsible, future-ready innovation that creates measurable, real-world impact for our clients, partners, and communities.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default WhyTekisho;
