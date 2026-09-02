import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviciosData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviciosData.find((s) => s.slug === slug);
  if (!service) return {};

  const seoDescription = `${service.description.slice(0, 145)} · DLC Tecnológica, Quito, Ecuador.`;
  const pageUrl = `${SITE_URL}/servicios/${slug}`;
  const imageUrl = service.mainImage ? absoluteUrl(service.mainImage) : DEFAULT_OG_IMAGE;

  return {
    title: `${service.title} en Quito, Ecuador`,
    description: seoDescription,
    openGraph: {
      title: `${service.title} en Quito, Ecuador | DLC Tecnológica`,
      description: seoDescription,
      url: pageUrl,
      type: "website",
      locale: "es_EC",
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} en Quito y Ecuador - DLC Tecnológica`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} en Quito, Ecuador`,
      description: seoDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = serviciosData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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
