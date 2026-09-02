import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de DLC Tecnológica para solicitudes de cotización, contacto comercial y tratamiento de datos personales en Ecuador.",
  alternates: {
    canonical: "/politica-privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="text-slate-400 leading-relaxed">
              En {SITE_NAME} usamos los datos que nos envías únicamente para atender solicitudes,
              preparar cotizaciones, coordinar visitas técnicas y dar seguimiento comercial o de soporte.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#080808]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Datos que podemos recopilar</h2>
              <p className="leading-relaxed">
                Nombre, teléfono, correo electrónico, ubicación del proyecto, tipo de servicio solicitado,
                mensajes enviados por formularios, WhatsApp o correo, y datos técnicos necesarios para
                dimensionar una solución.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Uso de la información</h2>
              <p className="leading-relaxed">
                Utilizamos la información para responder consultas, generar propuestas, agendar visitas,
                prestar soporte, mejorar nuestros servicios y cumplir obligaciones comerciales o legales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Conservación y seguridad</h2>
              <p className="leading-relaxed">
                Conservamos los datos durante el tiempo necesario para gestionar la relación comercial.
                Aplicamos medidas razonables para protegerlos frente a accesos no autorizados, pérdida o uso indebido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Para consultar, actualizar o solicitar la eliminación de tus datos, escríbenos a
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
