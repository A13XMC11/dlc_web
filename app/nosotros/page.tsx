import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, ClipboardCheck, MapPin, ShieldCheck, Wrench } from "lucide-react";
import NavbarService from "@/components/servicios/NavbarService";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  aboutPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Seguridad Electrónica en Quito",
  description:
    "Conoce a DLC Tecnológica: integradores de seguridad electrónica, CCTV, domótica, automatización, redes e ingeniería eléctrica con 25 años de experiencia en Ecuador.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Sobre DLC Tecnológica | Seguridad Electrónica en Quito",
    description:
      "Equipo técnico ecuatoriano especializado en seguridad electrónica, domótica, automatización, redes e ingeniería eléctrica para hogares y empresas.",
    url: `${SITE_URL}/nosotros`,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/edificio-dlc.webp`,
        width: 1200,
        height: 630,
        alt: "Sede de DLC Tecnológica en Quito, Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre DLC Tecnológica | Seguridad Electrónica en Quito",
    description:
      "25 años integrando seguridad electrónica, domótica, automatización e ingeniería eléctrica en Ecuador.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const strengths = [
  {
    icon: Award,
    title: "25 años de experiencia",
    text: "Trayectoria en proyectos residenciales, comerciales, corporativos e industriales en Quito y otras ciudades de Ecuador.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad integral",
    text: "Integramos CCTV, alarmas, control de accesos, detección de incendios, portones automáticos y soporte técnico.",
  },
  {
    icon: ClipboardCheck,
    title: "Levantamiento técnico",
    text: "Cada propuesta se dimensiona según riesgos, infraestructura existente, puntos críticos, presupuesto y crecimiento futuro.",
  },
  {
    icon: Wrench,
    title: "Acompañamiento post-venta",
    text: "Mantenimiento, soporte, ajustes y asistencia técnica para que los sistemas sigan funcionando después de la instalación.",
  },
];

const process = [
  "Evaluación del sitio y diagnóstico de necesidades.",
  "Diseño técnico de la solución y selección de equipos.",
  "Instalación, configuración, pruebas y capacitación.",
  "Soporte preventivo y correctivo posterior a la entrega.",
];

export default function NosotrosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={aboutPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: "Sobre Nosotros", url: `${SITE_URL}/nosotros` },
        ])}
      />
      <NavbarService />

      <main className="flex-grow">
        <section className="relative min-h-[72vh] flex items-center pt-32 pb-20 bg-dark-deep overflow-hidden">
          <Image
            src="/images/edificio-dlc.webp"
            alt="Sede principal de DLC Tecnológica en Quito"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/70 via-dark-deep/30 to-dark-deep" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-sans">
              <Link href="/" className="hover:text-brand-cyan transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-slate-200">Sobre Nosotros</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                Integradores tecnológicos en Ecuador
              </p>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                Seguridad electrónica, automatización e ingeniería con respaldo técnico real
              </h1>
              <div className="h-1 w-20 bg-brand-cyan rounded-full mb-8" />
              <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                En DLC Tecnológica diseñamos, instalamos y mantenemos soluciones para proteger,
                conectar y automatizar hogares, edificios, comercios e industrias. Nuestro trabajo
                combina experiencia de campo, selección correcta de equipos y soporte cercano.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                  Nuestra forma de trabajo
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Soluciones pensadas para funcionar en campo, no solo en catálogo
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Un sistema de seguridad o automatización solo es bueno si responde al uso real del
                  lugar donde se instala. Por eso partimos de un levantamiento técnico, revisamos
                  riesgos, cableado, conectividad, accesos, energía, operación diaria y mantenimiento.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Esta metodología nos permite recomendar CCTV, alarmas, control de accesos,
                  domótica, portones, redes o ingeniería eléctrica según el caso, evitando compras
                  innecesarias y dejando una base lista para crecer.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {strengths.map((item) => (
                  <div key={item.title} className="bg-[#0e4956]/70 border border-[#242424] rounded-2xl p-6">
                    <item.icon className="w-8 h-8 text-cyan-neon mb-5" />
                    <h3 className="font-sans text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#01313f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                  Cobertura y confianza
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Atención para Quito y proyectos tecnológicos en Ecuador
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Trabajamos con viviendas, condominios, oficinas, locales comerciales, instituciones,
                  edificios corporativos e industrias. La sede principal está en José Berrutieta y
                  Miguel Acevedo, Quito, con atención técnica según alcance del proyecto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Ver servicios
                  </Link>
                  <Link
                    href="/cotizador"
                    className="inline-flex items-center justify-center gap-2 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Solicitar cotización
                  </Link>
                </div>
              </div>

              <div className="bg-[#0e4956]/70 border border-[#242424] rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-7 h-7 text-cyan-neon flex-shrink-0" />
                  <div>
                    <h3 className="font-sans text-xl font-bold text-white mb-2">Ubicación principal</h3>
                    <p className="text-slate-400">José Berrutieta y Miguel Acevedo, Quito, Ecuador</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/15 text-sm font-bold text-cyan-neon">
                        {index + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#080808]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle2 className="w-10 h-10 text-cyan-neon mx-auto mb-5" />
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-5">
              Una sola empresa para diseñar, instalar y mantener tu sistema
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Centralizar seguridad electrónica, automatización, redes e ingeniería eléctrica reduce
              errores de integración y facilita el soporte futuro.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Hablar con DLC
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
