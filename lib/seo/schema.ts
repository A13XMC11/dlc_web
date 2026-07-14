import type { Faq, ServiceData, Subcategory } from "@/components/servicios/servicios-data";

export const SITE_URL = "https://dlc.com.ec";
export const SITE_NAME = "DLC Tecnológica";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  image: `${SITE_URL}/logo-dlc.png`,
  logo: `${SITE_URL}/logo-dlc.png`,
  url: SITE_URL,
  telephone: "+593958689116",
  email: "info@dlc.com.ec",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "José Berrutieta y Miguel Acevedo",
    addressLocality: "Quito",
    addressCountry: "EC",
  },
  areaServed: {
    "@type": "Country",
    name: "Ecuador",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export function serviceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    url: `${SITE_URL}/servicios/${service.slug}`,
  };
}

export function faqSchema(faqs: Faq[]) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function subcategorySchema(service: ServiceData, subcategory: Subcategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: subcategory.title,
    description: subcategory.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    url: `${SITE_URL}/servicios/${service.slug}/${subcategory.slug}`,
  };
}
