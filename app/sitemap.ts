import type { MetadataRoute } from "next";
import { serviciosData } from "@/components/servicios/servicios-data";

const SITE_URL = "https://dlc.com.ec";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/cotizador`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviciosData.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const subcategoryRoutes: MetadataRoute.Sitemap = serviciosData.flatMap((service) =>
    service.subcategories.map((sub) => ({
      url: `${SITE_URL}/servicios/${service.slug}/${sub.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...subcategoryRoutes];
}
