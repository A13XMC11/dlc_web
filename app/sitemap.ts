import type { MetadataRoute } from "next";
import { serviciosData } from "@/components/servicios/servicios-data";
import { LAST_MODIFIED, SITE_URL } from "@/lib/seo/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/logo-dlc.webp`,
        `${SITE_URL}/dlc-image-5.webp`,
        `${SITE_URL}/images/hero-ai-cctv.webp`,
        `${SITE_URL}/images/edificio-dlc.webp`,
      ],
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${SITE_URL}/images/services-bg-2.webp`],
    },
    { url: `${SITE_URL}/cotizador`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.85 },
    {
      url: `${SITE_URL}/nosotros`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${SITE_URL}/images/edificio-dlc.webp`, `${SITE_URL}/logo-dlc.webp`],
    },
    { url: `${SITE_URL}/trabaja-con-nosotros`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.55 },
    { url: `${SITE_URL}/politica-privacidad`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.25 },
    { url: `${SITE_URL}/terminos-servicio`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.25 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviciosData.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: service.slug === "seguridad-electronica" ? 0.95 : 0.85,
    images: service.mainImage ? [`${SITE_URL}${service.mainImage}`] : undefined,
  }));

  const subcategoryRoutes: MetadataRoute.Sitemap = serviciosData.flatMap((service) =>
    service.subcategories.map((sub) => ({
      url: `${SITE_URL}/servicios/${service.slug}/${sub.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: sub.image ? [`${SITE_URL}${sub.image}`] : undefined,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...subcategoryRoutes];
}
