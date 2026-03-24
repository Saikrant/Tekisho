import React from "react";
import { Timeline } from "./ui/timeline";

export const RoadmapSection = () => {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            <strong className="text-lg">AI Strategy & Assessment</strong><br/>
            We begin by deeply understanding your operational friction points. We evaluate your existing data structures and construct a comprehensive blueprint detailing exactly where AI can instantly reduce overhead and build measurable ROI.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="strategy assessment"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow border border-neutral-100"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow border border-neutral-100"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
           <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            <strong className="text-lg">Rapid Prototyping & Integration</strong><br/>
            Our engineering teams deploy tailored, secure LLM architectures within your private cloud. We construct retrieval-augmented generation pipelines directly connecting to your SAP schemas and legacy databases.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              alt="integration layer"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow border border-neutral-100"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            <strong className="text-lg">Enterprise Deployment & Scaling</strong><br/>
            Full-scale rollout of autonomous agents powering continuous workflows. We provide post-launch observability engines and fine-tuning mechanics to ensure the AI's efficiency actively scales with your operational demands.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white w-full border-t border-b border-neutral-100">
      <Timeline 
        data={data} 
        title="Your Transformation Roadmap" 
        description="A structured, heavily engineered approach to embedding autonomous systems inside complex legacy enterprise chains." 
      />
    </section>
  );
}
