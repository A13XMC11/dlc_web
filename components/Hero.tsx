"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ShieldCheck, Zap, Laptop, Wrench, Sparkles } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import cameraHero from "@/public/dlc-image-5.jpg";
import cameraHero2 from "@/public/images/hero-ai-cctv.webp";
import cameraHero3 from "@/public/images/hero-gate.webp";
import cameraHero4 from "@/public/images/hero-network.webp";
import cameraHero5 from "@/public/images/hero-solar.webp";

interface HeroSlide {
  src: StaticImageData;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  { src: cameraHero, label: "CAM-01" },
  { src: cameraHero2, label: "CAM-02" },
  { src: cameraHero3, label: "CAM-03" },
  { src: cameraHero4, label: "CAM-04" },
  { src: cameraHero5, label: "CAM-05" },
];

const SLIDE_INTERVAL_MS = 4000;

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    heroRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#servicios");
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-deep py-20"
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(12, 192, 223, 0.09), transparent 80%)" }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism text-xs font-semibold tracking-wider text-brand-cyan mb-6 border border-brand-cyan/40"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>25 AÑOS PROTEGIENDO ECUADOR</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6"
            >
              Seguridad Electrónica y
              <span className="block mt-1 bg-gradient-to-r from-cyan-neon via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Automatización
              </span>
              <span className="block mt-1 text-white">Premium en Ecuador</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
            >
              En <span className="text-white font-semibold">DLC Tecnológica</span> diseñamos e instalamos sistemas de CCTV, portones automáticos, Smart Home y redes estructuradas para empresas y hogares en Ecuador.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/593958689116?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20con%20DLC%20Tecnológica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark active:scale-[0.98] text-white font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(8,180,255,0.4)] hover:shadow-[0_0_40px_rgba(8,180,255,0.6)] text-center flex items-center justify-center gap-2"
              >
                <span>Cotizar Proyecto</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>
              <a
                href="#servicios"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0e4956]/50 hover:bg-[#0e4956]/80 text-white border border-[#2d2d2d] hover:border-brand-cyan/50 transition-all duration-300 font-semibold text-base text-center"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Feature mini-grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl mt-12 pt-10 border-t border-[#242424]/80"
            >
              {[
                { icon: ShieldCheck, title: "CCTV & Alarmas", desc: "Monitoreo 24/7" },
                { icon: Zap,         title: "Smart Home",    desc: "Hogar inteligente" },
                { icon: Laptop,      title: "Redes & TI",    desc: "Infraestructura" },
                { icon: Wrench,      title: "Ingeniería",    desc: "Eléctrica" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#0e4956] border border-[#242424] flex items-center justify-center mb-2 text-cyan-neon">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-white text-xs leading-tight">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: CCTV Monitor frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg"
          >
            {/* Monitor outer frame */}
            <div className="relative rounded-2xl border border-[#2d2d2d]/80 bg-[#0e4956]/60 p-3 shadow-[0_0_60px_rgba(12,192,223,0.06)] backdrop-blur-sm">

              {/* Top bar — monitor UI */}
              <div className="flex items-center justify-between px-3 py-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="text-xs font-mono text-red-400 font-semibold tracking-widest">● REC</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span>{HERO_SLIDES[activeSlide].label}</span>
                  <span className="text-cyan-neon/60">|</span>
                  <span>4K UHD</span>
                  <span className="text-cyan-neon/60">|</span>
                  <span className="text-cyan-neon">LIVE</span>
                </div>
              </div>

              {/* Image container — carousel */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_SLIDES[activeSlide].src}
                      alt="DLC Tecnológica — Instalación CCTV profesional"
                      fill
                      priority={activeSlide === 0}
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4956]/70 via-transparent to-transparent" />

                {/* Scan lines texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(12,192,223,0.04) 3px, rgba(12,192,223,0.04) 4px)" }}
                />

                {/* Corner brackets — tech feel */}
                {[
                  "top-3 left-3 border-t border-l",
                  "top-3 right-3 border-t border-r",
                  "bottom-3 left-3 border-b border-l",
                  "bottom-3 right-3 border-b border-r",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-5 h-5 ${cls} border-cyan-neon/60`} />
                ))}

                {/* Bottom metadata overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-mono text-cyan-neon/80 mb-0.5">DLC-SECURITY</p>
                    <p className="text-[10px] font-mono text-slate-400">2025-06-10 · 00:00 UTC</p>
                  </div>
                  <div className="px-2 py-1 rounded bg-cyan-neon/10 border border-cyan-neon/20">
                    <p className="text-[10px] font-mono text-cyan-neon">IR NIGHT VISION</p>
                  </div>
                </div>

                {/* Carousel dot indicators */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Ver ${slide.label}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? "w-5 bg-cyan-neon" : "w-1.5 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between px-3 pt-3">
                <div className="flex items-center gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-cyan-neon/40"
                      style={{ height: `${[10, 16, 12, 8][i]}px` }}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-slate-500 ml-1">SIGNAL</span>
                </div>
                <span className="text-[10px] font-mono text-slate-600">DLC TEC · Ecuador</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
