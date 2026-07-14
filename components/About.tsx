"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, Award, Radio } from "lucide-react";
import Image from "next/image";
import edificio from "@/public/images/edificio-dlc.webp";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="nosotros" className="relative py-28 overflow-hidden">

      {/* ── Background: building photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={edificio}
          alt=""
          aria-hidden="true"
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Multi-layer overlay for readability + depth */}
        {/* Base dark veil */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Gradient from top — darkens upper portion */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 via-transparent to-dark-deep/90" />
        {/* Gradient from sides — keeps center focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/60 via-transparent to-dark-deep/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
          >
            Quiénes Somos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg"
          >
            Tecnología que conecta, automatiza y protege
          </motion.h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Metric Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { icon: ShieldAlert,   value: "100%",  label: "Seguridad Integral",   desc: "Sistemas encriptados sin fallas" },
              { icon: Radio,         value: "< 30m", label: "Respuesta Rápida",      desc: "Asistencia técnica prioritaria" },
              { icon: Award,         value: "A+",    label: "Calidad Certificada",   desc: "Equipos homologados de fábrica" },
              { icon: CheckCircle2,  value: "25+",   label: "Años de Innovación",    desc: "Liderando proyectos en Ecuador" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative overflow-hidden group bg-[#0e4956]/70 backdrop-blur-md border border-[#333]/60 hover:border-[rgba(12,192,223,0.5)] p-5 rounded-2xl flex flex-col items-start hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(12,192,223,0.10)] transition-all duration-300 ease-in-out shadow-lg"
              >
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out" />

                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e]/80 border border-[#2d2d2d] flex items-center justify-center text-cyan-neon mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow">
                  {metric.value}
                </span>
                <span className="font-semibold text-slate-100 text-sm mt-1">
                  {metric.label}
                </span>
                <span className="text-slate-400 text-xs mt-1 leading-normal">
                  {metric.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Glass content card */}
            <div className="relative overflow-hidden group bg-[#0e4956]/60 backdrop-blur-md border border-[#333]/50 rounded-3xl p-8 shadow-xl hover:border-[rgba(12,192,223,0.45)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(12,192,223,0.10)] transition-all duration-300 ease-in-out">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon rounded-b-3xl transition-all duration-[400ms] ease-in-out" />
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4 drop-shadow">
                Llevamos la ingeniería de automatización y seguridad al siguiente nivel.
              </h3>
              <p className="text-slate-200 leading-relaxed font-sans mb-4">
                En <strong className="text-white">DLC Tecnológica</strong> nos enfocamos en proveer soluciones tecnológicas integrales para hogares, comercios e industrias. Desde el diseño e instalación de cercados eléctricos y alarmas, hasta el despliegue de redes estructuradas Gigabit de alta velocidad, nuestro equipo está capacitado para cumplir los estándares más exigentes.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans mb-6">
                Creemos firmemente en el poder de la automatización. Nos apasiona ver cómo una puerta automática, un sistema de climatización y luces controladas por voz (Smart Home) o una matriz de cámaras de seguridad de ultra alta definición pueden simplificar tu día a día, otorgándote paz mental y confort absoluto.
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#333]/60">
                {[
                  "Atención post-venta garantizada 24/7",
                  "Integración multimarca experta",
                  "Ingeniería eléctrica certificada",
                  "Tecnología de última generación",
                ].map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_6px_rgba(8,180,255,0.8)]" />
                    <span className="text-sm text-slate-200 font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Building caption */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pl-1">
              <span className="w-1 h-1 rounded-full bg-brand-cyan/50 inline-block" />
              Sede principal — José Berrutieta y Miguel Acevedo, Quito
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
