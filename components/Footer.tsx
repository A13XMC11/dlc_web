"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const contactActions = [
    {
      label: "WhatsApp de DLC Tecnológica",
      href: "https://wa.me/593958689116",
      icon: Phone,
    },
    {
      label: "Correo de DLC Tecnológica",
      href: "mailto:info@dlc.com.ec",
      icon: Mail,
    },
    {
      label: "Ubicación de DLC Tecnológica en Quito",
      href: "https://www.google.com/maps/search/?api=1&query=DLC+TECNOLOGICA+Jos%C3%A9+Berrutieta+y+Miguel+Acevedo+Quito+Ecuador",
      icon: MapPin,
    },
  ];

  // On the homepage, scroll smoothly to the in-page anchor. On any other
  // page, let next/link navigate to "/#hash" normally — it handles the
  // scroll itself once the homepage mounts.
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#050505] pt-16 pb-8 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_right,#00F0FF02_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core footer mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link
              href="/#inicio"
              onClick={(e) => handleScrollToSection(e, "#inicio")}
              className="self-start"
            >
              <Image
                src="/logo-dlc.webp"
                alt="DLC TEC"
                width={140}
                height={65}
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              DLC Tecnológica se dedica a llevar la innovación a tu vida diaria a través de soluciones robustas en seguridad electrónica, automatizaciones inteligentes, domótica avanzada y conectividad.
            </p>

            {/* Contact actions */}
            <div className="flex items-center gap-3">
              {contactActions.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-[#0e4956] border border-[#242424] flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: "Inicio", href: "/#inicio" },
                { name: "Sobre Nosotros", href: "/nosotros" },
                { name: "Servicios", href: "/#servicios" },
                { name: "Estadísticas", href: "/#estadisticas" },
                { name: "Proyectos", href: "/#proyectos" },
                { name: "Testimonios", href: "/#testimonios" },
                { name: "Contacto", href: "/#contacto" },
                { name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={
                      link.href.startsWith("/#")
                        ? (e) => handleScrollToSection(e, link.href.slice(1))
                        : undefined
                    }
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
              Especialidades
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: "Seguridad Electrónica", href: "/servicios/seguridad-electronica" },
                { name: "Puertas Automáticas", href: "/servicios/portones-automatizacion" },
                { name: "Domótica & Smart Home", href: "/servicios/domotica" },
                { name: "Redes Estructuradas", href: "/servicios/ingenieria-electrica/redes-voz-datos" },
                { name: "Energías Renovables", href: "/servicios/ingenieria-electrica/paneles-solares" },
                { name: "Computación & Soporte TI", href: "/servicios/software-ti" },
              ].map((spec) => (
                <li key={spec.name}>
                  <Link
                    href={spec.href}
                    onClick={
                      spec.href.startsWith("/#")
                        ? (e) => handleScrollToSection(e, spec.href.slice(1))
                        : undefined
                    }
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors font-sans"
                  >
                    {spec.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">
              Contacto
            </h4>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-neon mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed font-sans">
                  José Berrutieta y Miguel Acevedo, Quito, Ecuador
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-neon flex-shrink-0" />
                <a href="tel:+593958689116" className="text-sm text-slate-400 hover:text-cyan-neon transition-colors font-sans">
                  02 6005137 / 0958689116
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-neon flex-shrink-0" />
                <a href="mailto:info@dlc.com.ec" className="text-sm text-slate-400 hover:text-cyan-neon transition-colors font-sans">
                  info@dlc.com.ec
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-[#1e1e1e] pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-sans text-center sm:text-left">
            &copy; {currentYear} DLC Tecnológica. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/politica-privacidad" className="text-xs text-slate-500 hover:text-cyan-neon transition-colors">
              Políticas de Privacidad
            </Link>
            <Link href="/terminos-servicio" className="text-xs text-slate-500 hover:text-cyan-neon transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
