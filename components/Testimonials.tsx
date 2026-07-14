"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ing. Carlos Mendoza",
    role: "Administrador de Condominio",
    content: "El sistema de automatización para nuestro portón vehicular quedó perfecto. Es sumamente silencioso y rápido. La atención post-venta de DLC ha sido verdaderamente excelente.",
    stars: 5,
  },
  {
    name: "Arq. Lucía Jaramillo",
    role: "Constructora Inmodesarrollo",
    content: "Automatizamos nuestras oficinas principales con cámaras 4K e inteligencia artificial y lectores de rostro. El profesionalismo técnico de su equipo fue impecable.",
    stars: 5,
  },
  {
    name: "Dra. Marta Viteri",
    role: "Propietaria Residencial",
    content: "Instalaron el sistema de domótica completo en nuestra quinta. Control total desde el celular: luces, cámaras, accesos y clima. Trabajo impecable y atención post-venta excelente.",
    stars: 5,
  },
  {
    name: "Lic. Fernando Ponce",
    role: "Gerente de TI - Connecta Corp",
    content: "El rediseño e instalación de nuestra red empresarial Wi-Fi 6 y el cableado estructurado categoría 6A fue realizado a tiempo y con certificación profesional.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section
      id="testimonios"
      className="relative py-24 bg-[#f1f5f9] overflow-hidden"
      data-section-theme="light"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
          >
            Opiniones Reales
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-5xl font-extrabold text-[#01313f]"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
        </div>

        {/* Carousel Card */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden group bg-white border border-[#e2e8f0] shadow-[0_2px_12px_rgba(10,15,30,0.06)] w-full p-8 sm:p-12 rounded-3xl flex flex-col justify-between hover:-translate-y-1 hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] transition-all duration-300 ease-in-out"
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon rounded-b-3xl transition-all duration-[400ms] ease-in-out" />

              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-[#01313f]/5 pointer-events-none z-0" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: reviews[index].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-sans text-lg sm:text-xl text-[#334155] italic leading-relaxed mb-8">
                  &ldquo;{reviews[index].content}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#e2e8f0] pt-6">
                <div>
                  <h4 className="font-bold text-[#01313f] text-base">
                    {reviews[index].name}
                  </h4>
                  <p className="text-[#334155] text-xs mt-0.5">
                    {reviews[index].role}
                  </p>
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-[#e2e8f0] hover:border-[rgba(12,192,223,0.5)] flex items-center justify-center text-slate-400 hover:text-cyan-neon bg-white hover:bg-slate-50 transition-all duration-300 cursor-pointer"
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-[#e2e8f0] hover:border-[rgba(12,192,223,0.5)] flex items-center justify-center text-slate-400 hover:text-cyan-neon bg-white hover:bg-slate-50 transition-all duration-300 cursor-pointer"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
