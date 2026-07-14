import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import CategoriasIndexGrid from "@/components/servicios/CategoriasIndexGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servicios de Seguridad Electrónica y Automatización | DLC Tecnológica",
  description:
    "Conoce todos los servicios de DLC Tecnológica: CCTV, alarmas, control de accesos, domótica, portones automáticos, ingeniería eléctrica, soporte técnico y software especializado en Ecuador.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavbarService />

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 bg-dark-deep overflow-hidden">
          {/* Ambient grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-neon/[0.03] blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
              Nuestras Especialidades
            </p>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Todos los Servicios
            </h1>
            <div className="h-1 w-20 bg-brand-cyan rounded-full mx-auto mb-8" />
            <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Desde seguridad electrónica y automatización hasta ingeniería eléctrica y desarrollo de software,
              DLC Tecnológica cubre cada necesidad tecnológica de tu hogar o empresa.
            </p>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="py-20 bg-[#01313f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoriasIndexGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
