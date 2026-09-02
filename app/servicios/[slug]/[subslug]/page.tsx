import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavbarService from "@/components/servicios/NavbarService";
import SubcategoryDetail from "@/components/servicios/SubcategoryDetail";
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
  subcategorySchema,
} from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string; subslug: string }>;
};

export async function generateStaticParams() {
  return serviciosData.flatMap((service) =>
    service.subcategories.map((sub) => ({
      slug: service.slug,
      subslug: sub.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params;
  const service = serviciosData.find((s) => s.slug === slug);
  const subcategory = service?.subcategories.find((s) => s.slug === subslug);

  if (!service || !subcategory) return {};

  const seoDescription = `${subcategory.description.slice(0, 145)} · DLC Tecnológica, Quito, Ecuador.`;
  const pageUrl = `${SITE_URL}/servicios/${slug}/${subslug}`;
  const imageUrl = subcategory.image ? absoluteUrl(subcategory.image) : DEFAULT_OG_IMAGE;

  return {
    title: `${subcategory.title} en Quito | ${service.title}`,
    description: seoDescription,
    openGraph: {
      title: `${subcategory.title} en Quito | DLC Tecnológica`,
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
          alt: `${subcategory.title} en Quito y Ecuador - DLC Tecnológica`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${subcategory.title} en Quito | DLC Tecnológica`,
      description: seoDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug, subslug } = await params;
  const service = serviciosData.find((s) => s.slug === slug);
  const subcategory = service?.subcategories.find((s) => s.slug === subslug);

  if (!service || !subcategory) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Servicios", url: `${SITE_URL}/servicios` },
    { name: service.title, url: `${SITE_URL}/servicios/${service.slug}` },
    { name: subcategory.title, url: `${SITE_URL}/servicios/${service.slug}/${subcategory.slug}` },
  ]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={subcategorySchema(service, subcategory)} />
      <JsonLd data={breadcrumbs} />

      <NavbarService />

      <main className="flex-grow">
        <SubcategoryDetail service={service} subcategory={subcategory} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
