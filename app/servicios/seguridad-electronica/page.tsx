import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { serviciosData } from "@/components/servicios/servicios-data";

export const metadata: Metadata = {
  title: "Seguridad Electrónica en Quito, Ecuador | DLC Tecnológica",
  description:
    "Sistemas integrales de seguridad electrónica en Quito y Ecuador: control de incendios, control de accesos, alarmas perimetrales y videovigilancia CCTV con tecnología certificada.",
  alternates: {
    canonical: "/servicios/seguridad-electronica",
  },
};

export default function SeguridadElectronicaPage() {
  const service = serviciosData.find((s) => s.slug === "seguridad-electronica")!;

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavbarService />

      <main className="flex-grow">
        <ServiceDetail service={service} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
