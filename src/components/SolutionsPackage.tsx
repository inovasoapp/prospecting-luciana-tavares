import { motion, type Variants } from "motion/react";

interface PackageDetail {
  highlight: string;
  description: string;
}

const details: PackageDetail[] = [
  {
    highlight: "4 ou 6",
    description:
      "meses consecutivos de acompanhamento, divididos em até 10x no cartão.",
  },
  {
    highlight: "Todo",
    description:
      "atendimento inclui cardápio personalizado e avaliação física completa (adipômetro, fita e bioimpedância).",
  },
  {
    highlight: "Massa",
    description:
      "gorda perdida e massa magra ganha acompanhadas com precisão a cada retorno.",
  },
];

const audience = [
  "Quem já usou canetas emagrecedoras",
  "Mulheres no climatério (perimenopausa e menopausa)",
  "Adeptos de atividade física",
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SolutionsPackage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative mx-auto mt-16 max-w-4xl"
    >
      {/* Card de detalhes do pacote */}
      <motion.div
        variants={item}
        className="grid gap-8 rounded-4xl border border-[#B79A82]/25 bg-white/40 p-8 sm:grid-cols-3 sm:p-10"
      >
        {details.map((d, i) => (
          <div
            key={d.highlight}
            className={
              i > 0
                ? "flex flex-col gap-2 sm:border-l sm:border-[#B79A82]/25 sm:pl-8"
                : "flex flex-col gap-2"
            }
          >
            <span className="font-serif text-3xl text-[#5A2028]">
              {d.highlight}
            </span>
            <p className="text-sm leading-relaxed text-[#43261F]/70">
              {d.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Indicado para */}
      <motion.div
        variants={item}
        className="mt-10 flex flex-col items-center gap-5 text-center"
      >
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#B79A82]">
          Indicado especialmente para
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {audience.map((a) => (
            <span
              key={a}
              className="rounded-full border border-[#5A2028]/20 bg-[#E4D0C5]/30 px-5 py-2.5 text-sm text-[#43261F]"
            >
              {a}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
