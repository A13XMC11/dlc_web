import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavbarService from "@/components/servicios/NavbarService";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { serviciosData } from "@/components/servicios/servicios-data";

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

  const seoDescription = `${service.description.slice(0, 140)} · DLC Tecnológica, Quito, Ecuador.`;

  return {
    title: `${service.title} en Quito, Ecuador | DLC Tecnológica`,
    description: seoDescription,
    openGraph: {
      title: `${service.title} | DLC Tecnológica`,
      description: seoDescription,
      type: "website",
      locale: "es_EC",
      siteName: "DLC Tecnológica",
    },
    alternates: {
      canonical: `https://dlc.com.ec/servicios/${slug}`,
    },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = serviciosData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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
