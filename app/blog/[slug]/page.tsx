import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import NavbarService from "@/components/servicios/NavbarService";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog/posts";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  blogPostingSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = absoluteUrl(post.image);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url: pageUrl,
      type: "article",
      locale: "es_EC",
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl || DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ])}
      />
      <NavbarService />

      <main className="flex-grow">
        <article>
          <section className="relative min-h-[68vh] flex items-end pt-32 pb-16 bg-dark-deep overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/70 via-dark-deep/30 to-dark-deep" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-8 font-sans">
                <Link href="/" className="hover:text-brand-cyan transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-slate-200">{post.category}</span>
              </nav>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-5">
                <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-brand-cyan">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                {post.title}
              </h1>
              <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                {post.description}
              </p>
            </div>
          </section>

          <section className="py-16 bg-[#080808]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-lg text-slate-300 leading-8 mb-10">{post.intro}</p>

              <div className="space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-sans text-3xl font-extrabold text-white mb-5">
                      {section.heading}
                    </h2>
                    <div className="space-y-5">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-slate-400 leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="mt-12 rounded-2xl border border-brand-cyan/20 bg-[#0e4956]/70 p-6 sm:p-8">
                <h2 className="font-sans text-2xl font-extrabold text-white mb-6">
                  Checklist antes de cotizar
                </h2>
                <ul className="space-y-4">
                  {post.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-neon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-slate-200 hover:border-brand-cyan/50 hover:text-brand-cyan font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-2xl transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al blog
                </Link>
                <Link
                  href={`/servicios/${post.relatedServiceSlug}`}
                  className="inline-flex items-center justify-center gap-2 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10 font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-2xl transition-all duration-300"
                >
                  Ver servicio relacionado
                </Link>
                <a
                  href="https://wa.me/593958689116?text=Hola,%20lei%20un%20artículo%20del%20blog%20y%20quisiera%20una%20cotización"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-2xl transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  Cotizar
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
