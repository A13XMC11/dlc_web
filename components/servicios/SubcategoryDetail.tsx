"use client";

import { motion } from "framer-motion";
import { PhoneCall, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
} from "lucide-react";
import type { ServiceData, Subcategory } from "./servicios-data";

const ICON_MAP: Record<string, LucideIcon> = {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
};

interface Props {
  service: ServiceData;
  subcategory: Subcategory;
}

export default function SubcategoryDetail({ service, subcategory }: Props) {
  const SubIcon = ICON_MAP[subcategory.iconName];
  const waHref = `https://wa.me/593958689116?text=${encodeURIComponent(
    `Hola, me interesa el servicio de ${subcategory.title} (${service.title}), quisiera más información.`
  )}`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center py-36 bg-dark-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/[0.04] blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-neon/[0.04] blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-sans flex-wrap"
          >
            <Link href="/" className="hover:text-brand-cyan transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-brand-cyan transition-colors">Servicios</Link>
            <span>/</span>
            <Link href={`/servicios/${service.slug}`} className="hover:text-brand-cyan transition-colors">
              {service.title}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{subcategory.title}</span>
          </motion.nav>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-8"
          >
            <Link
              href={`/servicios/${service.slug}`}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-neon transition-colors duration-200 text-sm font-sans"
            >
              <ArrowLeft size={14} />
              Volver a {service.title}
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3"
              >
                {service.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-2xl"
              >
                {subcategory.title}
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
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-sans text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
              >
                {subcategory.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0e4956]/50 hover:bg-[#0e4956]/80 text-white border border-[#2d2d2d] hover:border-brand-cyan/50 transition-all duration-300 font-semibold text-base"
                >
                  Ver todos los servicios de {service.eyebrow.split(" ")[0]}
                </Link>
              </motion.div>
            </div>

            {/* Image / icon display */}
            {subcategory.image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block relative w-80 h-80 rounded-3xl overflow-hidden border border-[#242424] flex-shrink-0"
              >
                <Image
                  src={subcategory.image}
                  alt={`${subcategory.title} — DLC Tecnológica`}
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: subcategory.imagePosition ?? "center" }}
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/70 via-transparent to-transparent" />
              </motion.div>
            ) : (
              SubIcon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="hidden lg:flex w-48 h-48 rounded-3xl bg-[#0e4956] border border-[#242424] items-center justify-center flex-shrink-0"
                >
                  <SubIcon size={72} className="text-cyan-neon opacity-60" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
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
              Qué incluye
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
            >
              Características del Servicio
            </motion.h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategory.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative group flex items-start gap-4 bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.4)] hover:shadow-[0_8px_24px_rgba(12,192,223,0.08)] rounded-2xl p-5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out" />
                <CheckCircle
                  size={18}
                  className="text-brand-cyan flex-shrink-0 mt-0.5"
                />
                <p className="text-slate-300 text-sm leading-relaxed font-sans group-hover:text-white transition-colors duration-300">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other subcategories ── */}
      {service.subcategories.length > 1 && (
        <section className="py-20 bg-[#080808] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
              >
                Más en {service.title}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-sans text-2xl sm:text-3xl font-extrabold text-white"
              >
                Otros Servicios Relacionados
              </motion.h2>
              <div className="h-1 w-16 bg-brand-cyan mt-4 rounded-full mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.subcategories
                .filter((s) => s.slug !== subcategory.slug)
                .map((sub, index) => {
                  const RelatedIcon = ICON_MAP[sub.iconName];
                  return (
                    <motion.div
                      key={sub.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                    >
                      <Link
                        href={`/servicios/${service.slug}/${sub.slug}`}
                        className="group inline-flex items-center gap-3 bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_4px_20px_rgba(12,192,223,0.1)] rounded-2xl px-5 py-3.5 transition-all duration-300"
                      >
                        {RelatedIcon && (
                          <RelatedIcon
                            size={16}
                            className="text-slate-500 group-hover:text-cyan-neon transition-colors duration-300 flex-shrink-0"
                          />
                        )}
                        <span className="font-sans text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">
                          {sub.title}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA final ── */}
      <section className="py-20 bg-[#01313f] overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-cyan/10 to-cyan-neon/5 border border-brand-cyan/20 rounded-3xl p-10"
          >
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
              ¿Listo para comenzar?
            </p>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Cotiza {subcategory.title} ahora
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Nuestro equipo técnico te asesora sin compromiso. Respuesta en menos de 24 horas.
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
