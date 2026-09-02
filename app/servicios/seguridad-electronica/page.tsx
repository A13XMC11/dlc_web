import type { Metadata } from "next";
import NavbarService from "@/components/servicios/NavbarService";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { serviciosData } from "@/components/servicios/servicios-data";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Seguridad Electrónica en Quito, Ecuador",
  description:
    "Sistemas integrales de seguridad electrónica en Quito y Ecuador: control de incendios, control de accesos, alarmas perimetrales y videovigilancia CCTV con tecnología certificada.",
  alternates: {
    canonical: "/servicios/seguridad-electronica",
  },
  openGraph: {
    title: "Seguridad Electrónica en Quito, Ecuador | DLC Tecnológica",
    description:
      "Sistemas integrales de seguridad electrónica en Quito y Ecuador: control de incendios, control de accesos, alarmas perimetrales y videovigilancia CCTV.",
    url: `${SITE_URL}/servicios/seguridad-electronica`,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: absoluteUrl("/images/equipoinstalando.webp"),
        width: 1200,
        height: 630,
        alt: "Seguridad electrónica en Quito y Ecuador - DLC Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguridad Electrónica en Quito, Ecuador",
    description:
      "CCTV, alarmas, control de accesos y control de incendios para hogares, edificios y empresas en Ecuador.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SeguridadElectronicaPage() {
  const service = serviciosData.find((s) => s.slug === "seguridad-electronica")!;
  const breadcrumbs = breadcrumbSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Servicios", url: `${SITE_URL}/servicios` },
    { name: service.title, url: `${SITE_URL}/servicios/${service.slug}` },
  ]);
  const faqs = faqSchema(service.faqs);

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbs} />
      {faqs && <JsonLd data={faqs} />}

      <NavbarService />

      <main className="flex-grow">
        <ServiceDetail service={service} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
