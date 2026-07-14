import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import CotizadorWizard from "@/components/cotizador/CotizadorWizard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cotizador Interactivo | DLC Tecnológica",
  description:
    "Arma tu requerimiento de seguridad electrónica, domótica o ingeniería eléctrica en minutos. Configura cámaras, alarmas, accesos y más para recibir una cotización personalizada.",
  alternates: {
    canonical: "/cotizador",
  },
};

export default function CotizadorPage() {
  return (
    <>
      <NavbarService />
      <main>
        <CotizadorWizard />
      </main>
      <Footer />
    </>
  );
}
