import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Newspaper, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import NavbarService from "@/components/servicios/NavbarService";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog/posts";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  blogSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Blog de Seguridad Electrónica, CCTV y Domótica",
  description:
    "Guías prácticas de DLC Tecnológica sobre CCTV, control de accesos, alarmas, domótica, redes e ingeniería eléctrica para hogares y empresas en Ecuador.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Seguridad Electrónica, CCTV y Domótica | DLC Tecnológica",
    description:
      "Consejos técnicos para elegir, instalar y mantener sistemas de seguridad electrónica, automatización y conectividad en Ecuador.",
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3090,
        height: 1438,
        alt: "Blog técnico de DLC Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Seguridad Electrónica, CCTV y Domótica",
    description:
      "Guías prácticas sobre seguridad electrónica, automatización, domótica y redes para Ecuador.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={blogSchema(blogPosts)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />
      <NavbarService />

      <main className="flex-grow">
        <section className="relative pt-36 pb-20 bg-dark-deep overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
                <Newspaper className="h-4 w-4" />
                Blog técnico
              </p>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                Guías de seguridad electrónica, CCTV y domótica
              </h1>
              <div className="h-1 w-20 bg-brand-cyan rounded-full mb-8" />
              <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Artículos prácticos para tomar mejores decisiones antes de instalar cámaras,
                alarmas, controles de acceso, automatizaciones y soluciones eléctricas en Ecuador.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0e4956]/60"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-dark-deep">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-brand-cyan">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-sans text-2xl font-extrabold text-white mb-3 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
                        Leer artículo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
