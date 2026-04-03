// src/components/ui/stacking-card.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';

export interface StackCardData {
  title: string;
  description: string;
  link: string;
  color: string;
  category: string;
  badge: string;
  stats: string[];
}

interface CardProps {
  i: number;
  data: StackCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const StackCard = ({ i, data, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: data.color,
          scale,
          top: `calc(-5vh + ${i * 28}px)`,
        }}
        className="relative flex flex-col lg:flex-row -top-[25%] h-auto lg:h-[420px] w-[90%] max-w-[1000px] rounded-3xl overflow-hidden origin-top shadow-[0_12px_60px_rgba(0,0,0,0.10)] border border-[rgba(0,0,0,0.06)]"
      >
        {/* Left panel */}
        <div className="flex flex-col justify-between p-8 lg:p-10 w-full lg:w-[45%] flex-shrink-0">
          {/* Badge + category */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#5A6A85]">
                {data.category}
              </span>
              <span className="font-mono text-[10px] font-semibold rounded-full px-2.5 py-0.5 bg-[rgba(27,79,216,0.08)] text-[#1B4FD8]">
                {data.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-[28px] lg:text-[34px] text-[#0B1629] leading-[1.05] tracking-[-0.03em] mb-3">
              {data.title}
            </h2>
            <p className="font-body text-[14px] leading-[1.7] text-[#5A6A85]">
              {data.description}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-3 flex-wrap mt-6">
            {data.stats.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] rounded-xl px-3 py-1.5 bg-white border border-[rgba(0,0,0,0.08)] text-[#0B1629]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 font-body font-semibold text-[13px] text-[#1B4FD8] cursor-pointer hover:gap-3 transition-all duration-200">
              Explore product
              <svg width="16" height="10" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="#1B4FD8" />
              </svg>
            </span>
          </div>
        </div>

        {/* Right panel — image */}
        <div className="relative flex-1 min-h-[200px] lg:min-h-0 overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <img
              src={data.link}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Light overlay so image doesn't feel too raw */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.15)]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  cards: StackCardData[];
}

export default function StackingCards({ cards }: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      <main ref={container} className="bg-[#F7F9FC]">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.04;
          return (
            <StackCard
              key={card.title}
              i={i}
              data={card}
              progress={scrollYProgress}
              range={[i / cards.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}
