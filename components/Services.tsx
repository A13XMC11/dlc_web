"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera, Bell, Fingerprint, Flame, Home,
  DoorOpen, Zap, Wrench, Code2,
  Users, Video, GitMerge, Radio, Monitor,
  BellRing, Wifi, Globe, Signal, Cpu,
  ShieldAlert, Move, ShieldCheck, Layers,
  Network, LayoutGrid, UserCheck, Lock,
  type LucideIcon,
} from "lucide-react";
import { MdOutlineSecurity } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import servicesBg from "@/public/images/services-bg-2.jpg";
import { serviciosData } from "@/components/servicios/servicios-data";

const ICON_MAP: Record<string, LucideIcon> = {
  Camera, Bell, Fingerprint, Flame, Home, DoorOpen, Zap, Wrench, Code2,
  Users, Video, GitMerge, Radio, Monitor, BellRing, Wifi, Globe, Signal, Cpu,
  ShieldAlert, Move, ShieldCheck, Layers, Network, LayoutGrid, UserCheck, Lock,
};

type Chip = {
  title: string;
  href: string;
  Icon: LucideIcon;
};

type Section = {
  anchorId: string;
  eyebrow: string;
  title: string;
  renderSectionIcon: (className: string) => React.ReactNode;
  allHref: string;
  allLabel: string;
  chips: Chip[];
};

function getServiceChips(slug: string): Chip[] {
  const service = serviciosData.find((s) => s.slug === slug);
  if (!service) return [];
  return service.subcategories.map((sub) => ({
    title: sub.title,
    href: `/servicios/${slug}`,
    Icon: ICON_MAP[sub.iconName] ?? Wrench,
  }));
}

const sections: Section[] = [
  {
    anchorId: "especialidad-seguridad-electronica",
    eyebrow: "Área Principal",
    title: "Seguridad Electrónica",
    renderSectionIcon: (className) => (
      <MdOutlineSecurity size={34} className={className} />
    ),
    allHref: "/servicios/seguridad-electronica",
    allLabel: "Ver servicio",
    chips: [
      { title: "CCTV",                  href: "/servicios/cctv",              Icon: Camera      },
      { title: "Alarmas",               href: "/servicios/alarmas",           Icon: Bell        },
      { title: "Control de Accesos",    href: "/servicios/control-accesos",   Icon: Fingerprint },
      { title: "Control de Incendios",  href: "/servicios/control-incendios", Icon: Flame       },
      { title: "Domótica y Smart Home", href: "/servicios/domotica",          Icon: Home        },
    ],
  },
  {
    anchorId: "especialidad-portones-automatizacion",
    eyebrow: "Accesos Automatizados",
    title: "Portones y Automatización",
    renderSectionIcon: (className) => <DoorOpen size={26} className={className} />,
    allHref: "/servicios/portones-automatizacion",
    allLabel: "Ver servicio",
    chips: getServiceChips("portones-automatizacion"),
  },
  {
    anchorId: "especialidad-ingenieria-electrica",
    eyebrow: "Diseño y Construcción Eléctrica",
    title: "Ingeniería Eléctrica",
    renderSectionIcon: (className) => <Zap size={26} className={className} />,
    allHref: "/servicios/ingenieria-electrica",
    allLabel: "Ver servicio",
    chips: getServiceChips("ingenieria-electrica"),
  },
  {
    anchorId: "especialidad-soporte-tecnico",
    eyebrow: "Acompañamiento Continuo",
    title: "Soporte Técnico",
    renderSectionIcon: (className) => <Wrench size={26} className={className} />,
    allHref: "/servicios/soporte-tecnico",
    allLabel: "Ver servicio",
    chips: getServiceChips("soporte-tecnico"),
  },
  {
    anchorId: "especialidad-software-ti",
    eyebrow: "Soluciones de Software",
    title: "Software y TI",
    renderSectionIcon: (className) => <Code2 size={26} className={className} />,
    allHref: "/servicios/software-ti",
    allLabel: "Ver servicio",
    chips: getServiceChips("software-ti"),
  },
];

const colsMap: Record<number, string> = {
  1: "grid-cols-1 sm:grid-cols-1 lg:grid-cols-1",
  2: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

function ServiceSectionCard({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  const gridClass =
    colsMap[Math.min(section.chips.length, 5)] ??
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";

  return (
    <motion.div
      id={section.anchorId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="mb-5 relative group bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.35)] rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_12px_60px_rgba(12,192,223,0.1)] scroll-mt-24"
    >
      {/* Subtle inner grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF04_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF04_1px,transparent_1px)] bg-size-[3rem_3rem] pointer-events-none" />
      {/* Glow orb */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-neon/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-neon/10 transition-all duration-700" />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-cyan-neon transition-all duration-500 ease-in-out" />

      <div className="relative z-10">
        {/* Card header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a]/80 border border-[#242424] group-hover:border-cyan-neon/30 group-hover:shadow-[0_0_24px_rgba(12,192,223,0.2)] flex items-center justify-center transition-all duration-300 shrink-0">
              {section.renderSectionIcon(
                "text-slate-400 group-hover:text-cyan-neon transition-colors duration-300"
              )}
            </div>
            <div>
              <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-1">
                {section.eyebrow}
              </p>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-neon transition-colors duration-300 leading-tight">
                {section.title}
              </h3>
            </div>
          </div>
          <Link
            href={section.allHref}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-neon transition-colors duration-200 font-semibold uppercase tracking-wider"
          >
            {section.allLabel} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Chips */}
        <div className={`grid ${gridClass} gap-3`}>
          {section.chips.map((chip, i) => (
            <motion.div
              key={`${chip.href}-${chip.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <Link
                href={chip.href}
                className="group/sub flex flex-col items-center gap-3 bg-dark-slate/80 border border-[#2a2a2a] hover:border-cyan-neon/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(12,192,223,0.15)] hover:-translate-y-1 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] group-hover/sub:border-cyan-neon/40 group-hover/sub:shadow-[0_0_16px_rgba(12,192,223,0.2)] flex items-center justify-center transition-all duration-300">
                  <chip.Icon
                    size={20}
                    className="text-slate-400 group-hover/sub:text-cyan-neon transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover/sub:text-white transition-colors duration-300 leading-tight">
                  {chip.title}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover/sub:text-cyan-neon group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={servicesBg}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-dark-deep to-transparent" />
      </div>

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
            Servicios de Ingeniería
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
          >
            Nuestras Áreas de Especialización
          </motion.h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
        </div>

        {/* Service sections — all use the same card format */}
        {sections.map((section, i) => (
          <ServiceSectionCard key={section.title} section={section} index={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mt-4"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(8,180,255,0.4)]"
          >
            Ver catálogo completo de servicios
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
