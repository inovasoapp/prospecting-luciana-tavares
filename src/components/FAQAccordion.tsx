import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "As consultas são presenciais ou online?",
    answer:
      "As duas modalidades estão disponíveis. Você pode optar por atendimento presencial no consultório em Piracicaba/SP ou consulta online, com a mesma qualidade de acompanhamento.",
  },
  {
    question: "Vocês atendem convênios?",
    answer:
      "Sim, atendemos alguns convênios — a lista completa está na seção de Convênios aqui no site. Se tiver dúvida sobre o seu plano, é só chamar no WhatsApp que a gente confirma.",
  },
  {
    question: "O que é a avaliação por bioimpedância?",
    answer:
      "É uma análise corporal de alta precisão, feita com aparelho profissional, que mede gordura corporal, massa magra, água extracelular e gordura visceral — muito mais completa do que só subir na balança.",
  },
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer:
      "Cada corpo responde num ritmo diferente, mas a maioria das pacientes já sente mudanças de energia e disposição nas primeiras semanas. Resultados consistentes vêm do acompanhamento contínuo, não de dietas relâmpago.",
  },
  {
    question: "Com que frequência são as consultas de retorno?",
    answer:
      "O intervalo é definido junto com você, de acordo com o seu objetivo — geralmente a cada 3 ou 4 semanas, pra ajustar o plano com base na sua evolução.",
  },
  {
    question: "Onde fica o consultório?",
    answer:
      "Rua Bernardino de Campos, 1221, Sala 04 — Bairro Alto, Piracicaba/SP.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-2xl divide-y divide-[#43261F]/10 border-b border-t border-[#43261F]/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-[#43261F] md:text-lg">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4D0C5] text-[#5A2028]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-sm leading-relaxed text-[#43261F]/70 md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
