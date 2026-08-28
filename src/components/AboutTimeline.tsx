import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface Fact {
  text: ReactNode;
  icon: ReactNode;
}

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const facts: Fact[] = [
  {
    text: (
      <>
        Formada há{" "}
        <strong className="font-semibold text-[#5A2028]">19 anos</strong>
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M24 13 L42 19 L24 25 L6 19 Z" />
        <path d="M14 22v8c0 3 5 6 10 6s10-3 10-6v-8" />
        <path d="M42 19v10" />
      </svg>
    ),
  },
  {
    text: (
      <>
        Professora de Nutrição na Unip Bauru por{" "}
        <strong className="font-semibold text-[#5A2028]">5 anos</strong>
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M8 12c4-2 10-2 14 1v22c-4-3-10-3-14-1z" />
        <path d="M38 12c-4-2-10-2-14 1v22c4-3 10-3 14-1z" />
      </svg>
    ),
  },
  {
    text: (
      <>
        Nutricionista de time de{" "}
        <strong className="font-semibold text-[#5A2028]">vôlei feminino</strong>
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 10c4 6 4 18 0 28" />
        <path d="M12 16c6 3 18 3 24 0" />
        <path d="M12 32c6-3 18-3 24 0" />
      </svg>
    ),
  },
  {
    text: (
      <>
        Atendimento clínico há{" "}
        <strong className="font-semibold text-[#5A2028]">14 anos</strong>
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="12" y="10" width="24" height="30" rx="2" />
        <rect x="18" y="7" width="12" height="6" rx="1" />
        <line x1="17" y1="21" x2="31" y2="21" />
        <line x1="17" y1="27" x2="31" y2="27" />
        <line x1="17" y1="33" x2="26" y2="33" />
      </svg>
    ),
  },
  {
    text: <>Casada</>,
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M24 38C10 28 6 18 14 12c5-4 10 0 10 4 0-4 5-8 10-4 8 6 4 16-10 26Z" />
      </svg>
    ),
  },
  {
    text: (
      <>
        Mãe aos{" "}
        <strong className="font-semibold text-[#5A2028]">36 anos</strong>
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="15" cy="14" r="4" />
        <path d="M8 31c0-7 4-11 7-11s7 4 7 11" />
        <circle cx="24" cy="27" r="2.6" />
        <path d="M19 39c0-5 2-8 5-8s5 3 5 8" />
        <circle cx="33" cy="16" r="3.4" />
        <path d="M27 31c0-6 3-9 6-9s6 3 6 9" />
      </svg>
    ),
  },
  {
    text: (
      <>
        Já vivi mais de{" "}
        <strong className="font-semibold text-[#5A2028]">40 anos</strong> e
        trago essa experiência pra cada consulta
      </>
    ),
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="24" cy="24" r="7" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M11.5 36.5l4.2-4.2M32.3 15.7l4.2-4.2" />
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutTimeline() {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-6.75 top-2 w-px origin-top bg-[#B79A82]/50"
        style={{ height: "calc(100% - 16px)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative flex flex-col"
      >
        {facts.map((f, i) => (
          <motion.li
            key={i}
            variants={item}
            className="flex items-start gap-5 border-b border-[#43261F]/10 py-5 last:border-none"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E4D0C5] text-[#5A2028]">
              {f.icon}
            </span>
            <p className="pt-3.5 text-base leading-relaxed text-[#43261F]">
              {f.text}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
