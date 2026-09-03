import type { Faq, ServiceData, Subcategory } from "@/components/servicios/servicios-data";
import type { BlogPost } from "@/lib/blog/posts";

export const SITE_URL = "https://dlc.com.ec";
export const SITE_NAME = "DLC Tecnológica";
export const SITE_DESCRIPTION =
  "DLC Tecnológica instala seguridad electrónica, CCTV, alarmas, control de accesos, domótica, portones automáticos, redes e ingeniería eléctrica en Quito y Ecuador.";
export const BUSINESS_PHONE = "+593958689116";
export const BUSINESS_LANDLINE = "+59326005137";
export const BUSINESS_EMAIL = "info@dlc.com.ec";
export const BUSINESS_ADDRESS = {
  streetAddress: "José Berrutieta y Miguel Acevedo",
  addressLocality: "Quito",
  addressRegion: "Pichincha",
  addressCountry: "EC",
};
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-dlc.webp`;
export const LOGO_IMAGE = `${SITE_URL}/logo-dlc.webp`;
export const SYMBOL_IMAGE = `${SITE_URL}/logo-dlctec-symbol.webp`;
export const LAST_MODIFIED = new Date("2026-09-01");

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["DLC Tec", "DLCtec", "DLC Tecnológica Ecuador"],
  description: SITE_DESCRIPTION,
  image: DEFAULT_OG_IMAGE,
  logo: LOGO_IMAGE,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=DLC+TECNOLOGICA+Jos%C3%A9+Berrutieta+y+Miguel+Acevedo+Quito+Ecuador",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  areaServed: [
    { "@type": "City", name: "Quito" },
    { "@type": "AdministrativeArea", name: "Pichincha" },
    { "@type": "Country", name: "Ecuador" },
  ],
  knowsAbout: [
    "Seguridad electrónica",
    "CCTV",
    "Alarmas de seguridad",
    "Control de accesos",
    "Domótica",
    "Portones automáticos",
    "Ingeniería eléctrica",
    "Redes estructuradas",
  ],
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "sales",
      areaServed: "EC",
      availableLanguage: ["es"],
    },
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "customer support",
      areaServed: "EC",
      availableLanguage: ["es"],
    },
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_LANDLINE,
      contactType: "customer support",
      areaServed: "EC",
      availableLanguage: ["es"],
    },
  ],
};

export function serviceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/servicios/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    image: service.mainImage ? absoluteUrl(service.mainImage) : DEFAULT_OG_IMAGE,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    category: service.seoCategory,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} - Soluciones DLC Tecnológica`,
      itemListElement: service.subcategories.map((subcategory) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: subcategory.title,
          description: subcategory.description,
          url: `${SITE_URL}/servicios/${service.slug}/${subcategory.slug}`,
        },
      })),
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
    "@id": `${SITE_URL}/servicios/${service.slug}/${subcategory.slug}#service`,
    name: subcategory.title,
    serviceType: subcategory.title,
    description: subcategory.description,
    image: subcategory.image ? absoluteUrl(subcategory.image) : DEFAULT_OG_IMAGE,
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "DLCtec",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "es-EC",
  };
}

export function siteNavigationSchema() {
  const links = [
    { name: "Inicio", url: SITE_URL },
    { name: "Nosotros", url: `${SITE_URL}/nosotros` },
    { name: "Servicios", url: `${SITE_URL}/servicios` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Cotizador", url: `${SITE_URL}/cotizador` },
    { name: "Trabaja con Nosotros", url: `${SITE_URL}/trabaja-con-nosotros` },
    { name: "Contacto", url: `${SITE_URL}/#contacto` },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: links.map((link) => link.name),
    url: links.map((link) => link.url),
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/nosotros#about`,
    name: `Sobre ${SITE_NAME}`,
    url: `${SITE_URL}/nosotros`,
    description:
      "Historia, experiencia, cobertura y forma de trabajo de DLC Tecnológica, integradores de seguridad electrónica, domótica, automatización e ingeniería eléctrica en Quito y Ecuador.",
    inLanguage: "es-EC",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function servicesItemListSchema(services: ServiceData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de DLC Tecnológica",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `${SITE_URL}/servicios/${service.slug}`,
    })),
  };
}

export function jobPostingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Técnico en Electrónica y Electricidad",
    description:
      "DLC Tecnológica busca técnico con experiencia en electrónica y electricidad para instalación, configuración y mantenimiento de sistemas de seguridad electrónica, domótica e ingeniería eléctrica en Quito.",
    datePosted: "2026-09-01",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
      logo: LOGO_IMAGE,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...BUSINESS_ADDRESS,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Ecuador",
    },
    directApply: true,
  };
}

export function blogSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `Blog de ${SITE_NAME}`,
    description:
      "Guías prácticas sobre seguridad electrónica, CCTV, control de accesos, domótica, redes e ingeniería eléctrica en Ecuador.",
    url: `${SITE_URL}/blog`,
    inLanguage: "es-EC",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: absoluteUrl(post.image),
      author: {
        "@id": `${SITE_URL}/#organization`,
      },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "es-EC",
  };
}
