import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos de servicio de DLC Tecnológica para cotización, instalación y soporte de soluciones tecnológicas en Ecuador.",
  alternates: {
    canonical: "/terminos-servicio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosServicioPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavbarService />
      <main className="flex-grow">
        <section className="relative pt-36 pb-20 bg-dark-deep overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
              Información Legal
            </p>
            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Términos de Servicio
            </h1>
            <p className="text-slate-400 leading-relaxed">
              Estos términos resumen las condiciones generales para solicitudes, cotizaciones,
              instalación y soporte de soluciones contratadas con {SITE_NAME}.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#080808]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Cotizaciones</h2>
              <p className="leading-relaxed">
                Las cotizaciones son referenciales hasta completar la revisión técnica del sitio,
                definición de alcance, equipos, tiempos de instalación y condiciones de acceso.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Instalación y soporte</h2>
              <p className="leading-relaxed">
                Los tiempos de ejecución dependen de disponibilidad de equipos, complejidad técnica,
                permisos de ingreso, infraestructura existente y condiciones acordadas con el cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Garantías</h2>
              <p className="leading-relaxed">
                Las garantías aplican según el tipo de equipo, fabricante y servicio contratado.
                Daños por manipulación no autorizada, uso indebido o factores externos pueden quedar excluidos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Contacto comercial</h2>
              <p className="leading-relaxed">
                Para dudas sobre una propuesta o servicio, escríbenos a
                <a href="mailto:info@dlc.com.ec" className="text-cyan-neon hover:text-brand-cyan"> info@dlc.com.ec</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
