"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, SlidersHorizontal, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const COTIZADOR_HIGHLIGHTS = [
  "Elige solo los servicios que necesitas",
  "Configura los detalles paso a paso",
  "Recibe tu propuesta directo por WhatsApp",
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 bg-[#01313f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
          >
            Hablemos de tu Proyecto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
          >
            Contáctanos Hoy Mismo
          </motion.h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── LEFT: Cotizador CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden group bg-[#0e4956] border border-[#242424] hover:border-[rgba(12,192,223,0.4)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.08)] p-8 sm:p-10 rounded-3xl h-full transition-all duration-300 ease-in-out flex flex-col justify-center">
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon rounded-b-3xl transition-all duration-[400ms] ease-in-out" />

              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-6">
                <SlidersHorizontal className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-sans">
                Arma tu Cotización a tu Medida
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-md">
                Configura exactamente los servicios que necesitas en nuestro cotizador interactivo
                y recibe una propuesta personalizada en minutos, directo a nuestro WhatsApp.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {COTIZADOR_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/cotizador"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-fit bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(8,180,255,0.4)]"
              >
                Iniciar Cotización
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Map + Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Map card */}
            <div className="relative group rounded-3xl overflow-hidden border border-[#242424] shadow-[0_2px_20px_rgba(0,0,0,0.3)] hover:border-[rgba(12,192,223,0.4)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.08)] transition-all duration-300 ease-in-out">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out z-10" />

              {/* Header bar */}
              <div className="flex items-center justify-between bg-[#01313f] px-4 py-3 border-b border-[#242424]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-semibold text-slate-200 font-mono tracking-wide">DLC Tecnológica</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Quito · Ecuador</span>
              </div>

              {/* Google Maps iframe */}
              <div className="relative" style={{ minHeight: "450px" }}>
                <iframe
                  title="DLC TECNOLÓGICA, José Berrutieta y Miguel Acevedo, Quito, Ecuador"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8234567!2d-78.50123456789!3d-0.20456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7d9b8c1234%3A0xabcdef1234567890!2sDLC%20TECNOL%C3%93GICA!5e0!3m2!1ses!2sec!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: "none", borderRadius: "12px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {["top-2 left-2 border-t border-l", "top-2 right-2 border-t border-r",
                  "bottom-2 left-2 border-b border-l", "bottom-2 right-2 border-b border-r",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-4 h-4 ${cls} border-[#0cc0df]/50 pointer-events-none`} />
                ))}
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=DLC+TECNOLOGICA+José+Berrutieta+y+Miguel+Acevedo+Quito+Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#01313f] hover:bg-[#1a1a1a] border-t border-[#242424] py-2.5 text-xs text-slate-400 hover:text-brand-cyan transition-colors font-mono"
              >
                <MapPin className="w-3.5 h-3.5" />
                Abrir en Google Maps ↗
              </a>
            </div>

            {/* Contact info card */}
            <div className="relative overflow-hidden group bg-[#0e4956] border border-[#242424] rounded-3xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:border-[rgba(12,192,223,0.4)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.08)] transition-all duration-300 ease-in-out">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon rounded-b-3xl transition-all duration-[400ms] ease-in-out" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#0cc0df] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Dirección</p>
                  <p className="text-sm text-white font-medium leading-snug">
                    José Berrutieta y Miguel Acevedo
                  </p>
                  <p className="text-xs text-slate-400">Quito · Ecuador</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#0cc0df] flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Teléfonos</p>
                  <a href="tel:+59326005137" className="block text-sm text-white font-medium hover:text-[#0cc0df] transition-colors">02 600-5137</a>
                  <a href="tel:+593958689116" className="block text-xs text-slate-400 hover:text-[#0cc0df] transition-colors">+593 958 689 116</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#0cc0df] flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Correo</p>
                  <a href="mailto:info@dlc.com.ec" className="text-sm text-white font-medium hover:text-[#0cc0df] transition-colors">
                    info@dlc.com.ec
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#0cc0df] flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Horario</p>
                  <p className="text-sm text-white font-medium">Lun – Vie: 08:00 – 18:00</p>
                  <p className="text-xs text-slate-400">Sáb: 09:00 – 13:00</p>
                </div>
              </div>

              <a
                href="https://wa.me/593958689116?text=Hola,%20quisiera%20cotizar%20servicios%20tecnológicos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 hover:border-brand-cyan/60 text-brand-cyan font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,180,255,0.2)]"
              >
                <BsWhatsapp className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
