import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollReset from "@/components/ScrollReset";
import CursorGlow from "@/components/CursorGlow";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo/schema";

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
  metadataBase: new URL("https://dlc.com.ec"),
  title: "DLC Tecnológica | Seguridad Electrónica y Domótica en Ecuador",
  description: "Expertos en CCTV, alarmas, control de accesos, domótica y portones automáticos en Ecuador. Más de 25 años protegiendo hogares y empresas.",
  keywords: [
    "DLC Tecnológica", "Seguridad Electrónica", "CCTV", "Alarmas de seguridad", "Control de accesos",
    "Puertas automáticas Ecuador", "Domótica", "Smart Home Ecuador", "Redes estructuradas",
    "Diseño eléctrico", "Energías renovables Ecuador", "Motores para portones"
  ],
  authors: [{ name: "DLC Tecnológica" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://dlc.com.ec",
    title: "DLC Tecnológica | Soluciones Tecnológicas Premium",
    description: "Expertos en seguridad electrónica, domótica y automatizaciones avanzadas en Ecuador. Estilo y fiabilidad tecnológica de vanguardia.",
    siteName: "DLC Tecnológica",
    images: [
      {
        url: "/logo-dlc.png",
        width: 3090,
        height: 1438,
        alt: "DLC Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLC Tecnológica | Seguridad Electrónica y Domótica en Ecuador",
    description: "Expertos en CCTV, alarmas, control de accesos, domótica y portones automáticos en Ecuador.",
    images: ["/logo-dlc.png"],
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
        <CursorGlow />
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
