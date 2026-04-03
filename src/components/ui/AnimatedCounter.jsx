// src/components/ui/AnimatedCounter.jsx
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1.5,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, motionValue, end]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
