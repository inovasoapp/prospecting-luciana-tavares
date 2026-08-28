import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}

const contacts: ContactItem[] = [
  {
    label: "WhatsApp",
    value: "(19) 99740-4882",
    href: "https://api.whatsapp.com/send?l=pt&phone=5519997404882",
    icon: (
      <svg
        viewBox="0 0 256 256"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,218.6a8,8,0,0,0,9.91,9.91l41.72-11.35A104,104,0,1,0,128,24Z" />
        <path d="M168.59,148.57,152.6,140.6a8,8,0,0,0-8.91,1.55l-7.94,7.94a53.86,53.86,0,0,1-23.75-23.75l7.94-7.94a8,8,0,0,0,1.55-8.91l-8-16A8,8,0,0,0,105,92a32.14,32.14,0,0,0-25 15.69,32.44,32.44,0,0,0,2.15,34.82,79.52,79.52,0,0,0,34.34,34.34,32.44,32.44,0,0,0,34.82,2.15A32.14,32.14,0,0,0,167,153,8,8,0,0,0,168.59,148.57Z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    // TODO: confirmar e-mail real — não encontrado no site/artes atuais.
    value: "nutricionistalucianatavares@gmail.com",
    href: "mailto:nutricionistalucianatavares@gmail.com",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <path d="M6 13l18 14 18-14" />
      </svg>
    ),
  },
  {
    label: "Endereço",
    value: "R. Bernardino de Campos, 1221, Sala 04, Bairro Alto, Piracicaba/SP",
    href: "https://www.google.com/maps/dir/?api=1&destination=Rua+Bernardino+de+Campos+1221+Piracicaba+SP",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M24 44s14-12.5 14-23a14 14 0 1 0-28 0c0 10.5 14 23 14 23z" />
        <circle cx="24" cy="21" r="5" />
      </svg>
    ),
  },
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4"
    >
      {contacts.map((c) => (
        <motion.a
          key={c.label}
          variants={item}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl bg-white/50 px-5 py-4 transition-colors hover:bg-white/80 w-full "
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E4D0C5] text-[#5A2028] transition-transform group-hover:scale-105">
            {c.icon}
          </span>
          <span className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#B79A82]">
              {c.label}
            </span>
            <span className="text-xs md:text-base font-medium text-[#43261F]">
              {c.value}
            </span>
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
