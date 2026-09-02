import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import CotizadorWizard from "@/components/cotizador/CotizadorWizard";
import Footer from "@/components/Footer";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Cotizador de Seguridad Electrónica, CCTV y Domótica",
  description:
    "Cotiza sistemas de seguridad electrónica, CCTV, alarmas, control de accesos, domótica, portones e ingeniería eléctrica en Quito y Ecuador con DLC Tecnológica.",
  alternates: {
    canonical: "/cotizador",
  },
  openGraph: {
    title: "Cotizador de Seguridad Electrónica, CCTV y Domótica | DLC Tecnológica",
    description:
      "Configura tu requerimiento y solicita una cotización para cámaras, alarmas, accesos, domótica, portones e ingeniería eléctrica en Ecuador.",
    url: `${SITE_URL}/cotizador`,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3090,
        height: 1438,
        alt: "Cotizador de servicios tecnológicos DLC Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotizador de Seguridad Electrónica, CCTV y Domótica",
    description:
      "Solicita una cotización para cámaras, alarmas, accesos, domótica, portones e ingeniería eléctrica en Ecuador.",
    images: [DEFAULT_OG_IMAGE],
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
