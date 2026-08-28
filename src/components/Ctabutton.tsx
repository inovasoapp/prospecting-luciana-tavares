import { motion } from "motion/react";

export default function CTAButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?l=pt&phone=5519997404882"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 rounded-full bg-[#f5eeea] px-8 py-4 text-base font-semibold text-[#43261F] transition-colors hover:bg-[#E4D0C5]"
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-[#f5eeea]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
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
      Agendar pelo WhatsApp
    </a>
  );
}
