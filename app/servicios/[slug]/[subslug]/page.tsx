import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavbarService from "@/components/servicios/NavbarService";
import SubcategoryDetail from "@/components/servicios/SubcategoryDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { serviciosData } from "@/components/servicios/servicios-data";

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

  const seoDescription = `${subcategory.description.slice(0, 140)} · DLC Tecnológica, Quito, Ecuador.`;

  return {
    title: `${subcategory.title} — ${service.title} | DLC Tecnológica`,
    description: seoDescription,
    openGraph: {
      title: `${subcategory.title} | DLC Tecnológica`,
      description: seoDescription,
      type: "website",
      locale: "es_EC",
      siteName: "DLC Tecnológica",
    },
    alternates: {
      canonical: `https://dlc.com.ec/servicios/${slug}/${subslug}`,
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

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavbarService />

      <main className="flex-grow">
        <SubcategoryDetail service={service} subcategory={subcategory} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
