import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollReset from "@/components/ScrollReset";
import CursorGlow from "@/components/CursorGlow";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  LOGO_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  localBusinessSchema,
  siteNavigationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "DLC Tecnológica | Seguridad Electrónica, CCTV y Domótica en Quito",
    template: "%s | DLC Tecnológica",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "DLC Tecnológica",
    "seguridad electrónica Quito",
    "seguridad electrónica Ecuador",
    "CCTV Quito",
    "cámaras de seguridad Quito",
    "alarmas de seguridad Quito",
    "control de accesos Quito",
    "domótica Quito",
    "smart home Ecuador",
    "portones automáticos Quito",
    "ingeniería eléctrica Quito",
    "redes estructuradas Quito",
    "paneles solares Ecuador",
  ],
  authors: [{ name: "DLC Tecnológica" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: {
      "es-EC": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE_URL,
    title: "DLC Tecnológica | Seguridad Electrónica, CCTV y Domótica en Quito",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3090,
        height: 1438,
        alt: "DLC Tecnológica - seguridad electrónica, domótica e ingeniería eléctrica en Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLC Tecnológica | Seguridad Electrónica, CCTV y Domótica en Quito",
    description: SITE_DESCRIPTION,
    images: [LOGO_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${leagueSpartan.variable} ${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteNavigationSchema()} />
        <CursorGlow />
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
