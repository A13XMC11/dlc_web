"use client";

import { motion } from "framer-motion";
import { PhoneCall, CheckCircle, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
  Flame, Bell, Fingerprint,
} from "lucide-react";
import type { CategoriaData } from "./categorias-data";

const ICON_MAP: Record<string, LucideIcon> = {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
  Flame, Bell, Fingerprint,
};

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
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-cyan-neon" : ""}`}
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
  categoria: CategoriaData;
}

export default function CategoriaDetail({ categoria }: Props) {
  const waHref = `https://wa.me/593958689116?text=${encodeURIComponent(categoria.waMessage)}`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-center py-36 bg-dark-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/[0.04] blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-neon/[0.04] blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-sans"
          >
            <Link href="/" className="hover:text-brand-cyan transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-brand-cyan transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-slate-300">{categoria.title}</span>
          </motion.nav>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3"
          >
            {categoria.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl"
          >
            {categoria.title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-brand-cyan rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl mb-4 leading-relaxed"
          >
            {categoria.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-sm text-slate-500 max-w-2xl mb-10 leading-relaxed"
          >
            <span className="text-slate-400 font-semibold">Para quién: </span>
            {categoria.targetAudience}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark active:scale-[0.98] text-white font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(8,180,255,0.4)] hover:shadow-[0_0_40px_rgba(8,180,255,0.6)]"
            >
              <PhoneCall className="w-5 h-5" />
              Cotizar este Servicio
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0e4956]/50 hover:bg-[#0e4956]/80 text-white border border-[#2d2d2d] hover:border-brand-cyan/50 transition-all duration-300 font-semibold text-base"
            >
              Ver Todos los Servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SEO Intro ── */}
      <section className="py-24 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                {categoria.seoCategory}
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                ¿Por qué elegir a DLC para{" "}
                <span className="text-cyan-neon">{categoria.title}</span>?
              </h2>
              <div className="h-1 w-16 bg-brand-cyan rounded-full mb-8" />

              <div className="space-y-4 mb-10">
                {categoria.seoParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-slate-400 text-base leading-relaxed font-sans">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {categoria.keyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#0e4956]/80 border border-[#242424] rounded-2xl p-4 text-center hover:border-cyan-neon/30 transition-colors duration-300"
                  >
                    <p className="text-xl sm:text-2xl font-extrabold text-cyan-neon font-sans leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 font-sans leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {categoria.mainImage ? (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden"
              >
                <div className="relative h-[420px] w-full">
                  <Image
                    src={categoria.mainImage}
                    alt={`${categoria.title} — DLC Tecnológica Ecuador`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/20 to-transparent" />
                </div>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan-neon/10 pointer-events-none" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="h-[420px] rounded-3xl bg-[#0e4956] border border-[#242424] flex items-center justify-center"
              >
                <p className="text-slate-600 text-sm font-sans">Imagen próximamente</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Subservices grid ── */}
      <section className="py-24 bg-[#01313f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
            >
              Lo que incluye
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
            >
              Soluciones y Especialidades
            </motion.h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.subservices.map((sub, index) => {
              const SubIcon = ICON_MAP[sub.iconName];
              return (
                <motion.div
                  key={sub.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  {/* Links directly to /servicios/[sub.slug] — not a subcategory route */}
                  <Link
                    href={`/servicios/${sub.slug}`}
                    className="relative group flex flex-col bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] rounded-3xl transition-all duration-300 overflow-hidden h-full"
                  >
                    {sub.image ? (
                      <div className="relative h-48 w-full overflow-hidden rounded-t-3xl flex-shrink-0">
                        <Image
                          src={sub.image}
                          alt={`${sub.title} — DLC Tecnológica`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          {SubIcon && (
                            <div className="w-10 h-10 rounded-xl bg-[#0f0f0f]/80 border border-[#2a2a2a] flex items-center justify-center backdrop-blur-sm group-hover:border-brand-cyan/40 transition-colors duration-300">
                              <SubIcon size={20} className="text-cyan-neon" />
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-cyan-neon text-xs font-bold uppercase tracking-widest">
                          Ver servicio
                          <ArrowRight size={10} />
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 pb-0 flex items-start justify-between mb-2 flex-shrink-0">
                        {SubIcon && (
                          <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a]/80 border border-[#242424] flex items-center justify-center group-hover:border-brand-cyan/40 group-hover:scale-110 transition-all duration-300">
                            <SubIcon size={28} className="text-slate-400 group-hover:text-cyan-neon transition-colors duration-300" />
                          </div>
                        )}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-cyan-neon text-xs font-bold uppercase tracking-widest mt-3">
                          Ver servicio
                          <ArrowRight size={12} />
                        </span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight group-hover:text-cyan-neon transition-colors duration-300">
                        {sub.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-sans flex-1 line-clamp-3">
                        {sub.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-[#1e1e1e] flex items-center gap-2 text-slate-500 group-hover:text-cyan-neon transition-colors duration-300">
                        <span className="text-xs font-semibold font-sans">Ver todas las soluciones</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {categoria.highlight && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-10 relative group bg-gradient-to-r from-brand-cyan/10 to-cyan-neon/5 border border-brand-cyan/30 hover:border-brand-cyan/60 rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-300"
            >
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-brand-cyan transition-all duration-[400ms]" />
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                    {categoria.highlight.label}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed font-sans">
                    {categoria.highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
            >
              Por qué elegirnos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
            >
              Ventajas de Trabajar con DLC
            </motion.h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoria.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.4)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.08)] rounded-3xl p-8 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms]" />
                <CheckCircle className="w-8 h-8 text-brand-cyan mb-5 flex-shrink-0" />
                <h3 className="font-sans text-lg font-bold text-white mb-3 group-hover:text-cyan-neon transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 bg-[#01313f] overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
            >
              Preguntas Frecuentes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl sm:text-4xl font-extrabold text-white"
            >
              Resolvemos tus Dudas
            </motion.h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {categoria.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
