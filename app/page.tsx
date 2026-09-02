import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/seo/JsonLd";
import { serviciosData } from "@/components/servicios/servicios-data";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  servicesItemListSchema,
} from "@/lib/seo/schema";

const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Stats = dynamic(() => import("@/components/Stats"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Seguridad Electrónica, CCTV y Domótica en Quito",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DLC Tecnológica | Seguridad Electrónica, CCTV y Domótica en Quito",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3090,
        height: 1438,
        alt: "DLC Tecnológica - soluciones tecnológicas en Quito y Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLC Tecnológica | Seguridad Electrónica, CCTV y Domótica en Quito",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <JsonLd data={servicesItemListSchema(serviciosData)} />
      {/* Dynamic Header / Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
