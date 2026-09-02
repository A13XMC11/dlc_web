import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import TrabajaConNosotros from "@/components/trabajo/TrabajaConNosotros";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, jobPostingSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Trabajo Técnico en Electrónica y Electricidad en Quito",
  description:
    "DLC Tecnológica busca Técnico con experiencia en Electrónica y Electricidad para Quito, Ecuador. Postula enviando tu hoja de vida (CV) por correo electrónico.",
  alternates: {
    canonical: "/trabaja-con-nosotros",
  },
  openGraph: {
    title: "Trabajo Técnico en Electrónica y Electricidad en Quito",
    description:
      "Vacante para técnico en electrónica y electricidad en Quito: instalación y mantenimiento de CCTV, alarmas, control de accesos, domótica e ingeniería eléctrica.",
    url: `${SITE_URL}/trabaja-con-nosotros`,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3090,
        height: 1438,
        alt: "Vacante técnica en DLC Tecnológica Quito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabajo Técnico en Electrónica y Electricidad en Quito",
    description:
      "Postula a la vacante técnica de DLC Tecnológica en Quito, Ecuador.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TrabajaConNosotrosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={jobPostingSchema()} />
      <NavbarService />
      <main className="flex-grow">
        <TrabajaConNosotros />
      </main>
      <Footer />
    </div>
  );
}
