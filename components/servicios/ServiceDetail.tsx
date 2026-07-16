import { PhoneCall, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
} from "lucide-react";
import type { ServiceData } from "./servicios-data";
import FaqAccordion from "./FaqAccordion";

const ICON_MAP: Record<string, LucideIcon> = {
  BellRing, Droplets, ShieldCheck, Users, Video, GitMerge, Radio, Monitor,
  Lightbulb, PanelTopClose, Mic, Cpu, Wifi, ShieldAlert, Activity, AlertCircle,
  Zap, Camera, Globe, Signal, Move, ArrowUpDown, LayoutGrid, DoorOpen, Sun,
  Layers, Wrench, Settings, Headphones, Code2, UserCheck, Lock, Network,
};

interface Props {
  service: ServiceData;
}

export default function ServiceDetail({ service }: Props) {
  const waHref = `https://wa.me/593958689116?text=${encodeURIComponent(service.waMessage)}`;

  return (
    <>
      <style>{`
        @keyframes dlc-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes dlc-scale-x {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        .dlc-a1 { animation: dlc-fade-up 0.4s ease forwards; }
        .dlc-a2 { opacity:0; animation: dlc-fade-up 0.5s ease 0.05s forwards; }
        .dlc-a3 { opacity:0; animation: dlc-fade-up 0.7s ease 0.10s forwards; }
        .dlc-a4 { animation: dlc-scale-x 0.6s ease 0.20s both; }
        .dlc-a5 { opacity:0; animation: dlc-fade-up 0.7s ease 0.22s forwards; }
        .dlc-a6 { opacity:0; animation: dlc-fade-up 0.6s ease 0.30s forwards; }
        .dlc-a7 { opacity:0; animation: dlc-fade-up 0.6s ease 0.35s forwards; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-center py-36 bg-dark-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/[0.04] blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-neon/[0.04] blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav
            aria-label="Breadcrumb"
            className="dlc-a1 flex items-center gap-2 text-xs text-slate-500 mb-8 font-sans"
          >
            <Link href="/" className="hover:text-brand-cyan transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-brand-cyan transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-slate-300">{service.title}</span>
          </nav>

          <p className="dlc-a2 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
            {service.eyebrow}
          </p>

          <h1 className="dlc-a3 font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl">
            {service.title}
          </h1>

          <div className="dlc-a4 h-1 w-20 bg-brand-cyan rounded-full mb-8" />

          <p className="dlc-a5 font-sans text-base sm:text-lg text-slate-400 max-w-2xl mb-4 leading-relaxed">
            {service.description}
          </p>

          <p className="dlc-a6 font-sans text-sm text-slate-500 max-w-2xl mb-10 leading-relaxed">
            <span className="text-slate-400 font-semibold">Para quién: </span>
            {service.targetAudience}
          </p>

          <div className="dlc-a7 flex flex-col sm:flex-row items-start gap-4">
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
          </div>
        </div>
      </section>

      {/* ── SEO Intro ── */}
      <section className="py-24 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text column */}
            <div>
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                {service.seoCategory}
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                ¿Por qué elegir a DLC para{" "}
                <span className="text-cyan-neon">{service.title}</span>?
              </h2>
              <div className="h-1 w-16 bg-brand-cyan rounded-full mb-8" />

              <div className="space-y-4 mb-10">
                {service.seoParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-slate-400 text-base leading-relaxed font-sans">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4">
                {service.keyStats.map((stat) => (
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
            </div>

            {/* Image column */}
            <div className="relative flex items-center justify-center h-[420px]">
              <div className="relative h-full w-full">
                <Image
                  src="/logo-dlctec-symbol.png"
                  alt={`Escudo DLCtec — ${service.title}`}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_50px_rgba(12,192,223,0.3)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subcategories ── */}
      <section className="py-24 bg-[#01313f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2">
              Lo que incluye
            </p>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white">
              Soluciones y Subcategorías
            </h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subcategories.map((sub) => {
              const SubIcon = ICON_MAP[sub.iconName];
              return (
                <Link
                  key={sub.title}
                  href={`/servicios/${service.slug}/${sub.slug}`}
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
                        Ver detalle
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
                        Ver detalle
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
                      <span className="text-xs font-semibold font-sans">Ver todas las características</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out" />
                </Link>
              );
            })}
          </div>

          {service.highlight && (
            <div className="mt-10 relative group bg-gradient-to-r from-brand-cyan/10 to-cyan-neon/5 border border-brand-cyan/30 hover:border-brand-cyan/60 rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-300">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-brand-cyan transition-all duration-[400ms]" />
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                    {service.highlight.label}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed font-sans">
                    {service.highlight.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2">
              Por qué elegirnos
            </p>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white">
              Ventajas de Trabajar con DLC
            </h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 bg-[#01313f] overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2">
              Preguntas Frecuentes
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white">
              Resolvemos tus Dudas
            </h2>
            <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
          </div>

          <FaqAccordion faqs={service.faqs} waHref={waHref} />
        </div>
      </section>
    </>
  );
}
