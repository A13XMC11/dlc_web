"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, FolderCheck, Clock, Wrench } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <span
      ref={ref}
      className="font-sans font-extrabold text-5xl sm:text-6xl text-[#01313f] group-hover:text-[#007a8c] tracking-tight transition-colors duration-300"
    >
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users,       value: 5000,  suffix: "+", label: "Clientes Satisfechos",    desc: "Empresas y hogares protegidos en Ecuador" },
  { icon: FolderCheck, value: 12000, suffix: "+", label: "Proyectos Completados",   desc: "Instalaciones exitosas a nivel nacional" },
  { icon: Clock,       value: 25,    suffix: "+", label: "Años de Experiencia",     desc: "Liderando el sector tecnológico" },
  { icon: Wrench,      value: 25,    suffix: "+", label: "Técnicos Especializados", desc: "Equipo certificado y en constante formación" },
];

export default function Stats() {
  return (
    <section
      id="estadisticas"
      className="relative py-24 bg-[#f1f5f9] overflow-hidden"
      data-section-theme="light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden bg-white border border-[#e2e8f0] shadow-[0_2px_12px_rgba(10,15,30,0.06)] p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-[#e8f4f8] hover:-translate-y-1 hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] transition-all duration-300 ease-in-out"
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon rounded-b-3xl transition-all duration-[400ms] ease-in-out" />

              <div className="w-12 h-12 rounded-2xl bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-cyan-neon mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>

              <div className="flex flex-col items-center mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
                {/* Red underline under counter, expands on hover */}
                <div className="h-[2px] w-0 group-hover:w-8 bg-brand-cyan rounded-full transition-all duration-300 ease-in-out mt-2" />
              </div>

              <h3 className="font-bold text-[#01313f] text-base mb-1">{stat.label}</h3>
              <p className="text-xs text-[#334155] font-sans">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
