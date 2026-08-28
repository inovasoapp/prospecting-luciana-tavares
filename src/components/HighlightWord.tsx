import type { ReactNode } from "react";
import { motion } from "motion/react";

interface HighlightWordProps {
  children: ReactNode;
}

export default function HighlightWord({ children }: HighlightWordProps) {
  return (
    <span className="relative inline-block whitespace-nowrap text-[#5A2028]">
      {children}
      <motion.svg
        viewBox="0 0 220 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-1 left-0 h-[0.35em] w-full text-[#5A2028]"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.35 }}
      >
        <motion.path
          d="M2 8 C 40 2, 80 10, 120 6 S 180 2, 218 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>
    </span>
  );
}
