"use client";

import { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";
import type { ServiceData } from "./servicios-data";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#242424] hover:border-[#2a2a2a] rounded-2xl overflow-hidden transition-colors duration-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-sans font-semibold text-white text-sm sm:text-base leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-cyan-neon" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-slate-400 text-sm leading-relaxed font-sans">{answer}</p>
        </div>
      )}
    </div>
  );
}

interface Props {
  faqs: ServiceData["faqs"];
  waHref: string;
}

export default function FaqAccordion({ faqs, waHref }: Props) {
  return (
    <>
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-sm mb-4 font-sans">
          ¿Tienes más preguntas? Contáctanos directamente.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(8,180,255,0.4)]"
        >
          <PhoneCall className="w-4 h-4" />
          Hablar con un Especialista
        </a>
      </div>
    </>
  );
}
