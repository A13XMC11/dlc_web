"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
            <Link href="#inicio" className="self-start">
              <Image
                src="/logo-dlc.png"
                alt="DLC TEC"
                width={140}
                height={65}
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              DLC Tecnológica se dedica a llevar la innovación a tu vida diaria a través de soluciones robustas en seguridad electrónica, automatizaciones inteligentes, domótica avanzada y conectividad.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook de DLC Tecnológica",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13c-3 0-4 2-4 4v3z" />
                    </svg>
                  ),
                  href: "https://facebook.com"
                },
                {
                  label: "Instagram de DLC Tecnológica",
                  icon: (
                    <svg className="w-4 h-4 text-current stroke-2 fill-none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  href: "https://instagram.com"
                },
                {
                  label: "LinkedIn de DLC Tecnológica",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: "https://linkedin.com"
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[#0e4956] border border-[#242424] flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300"
                >
                  {social.icon}
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
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre Nosotros", href: "#nosotros" },
                { name: "Servicios", href: "#servicios" },
                { name: "Estadísticas", href: "#estadisticas" },
                { name: "Proyectos", href: "#proyectos" },
                { name: "Testimonios", href: "#testimonios" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors font-sans"
                  >
                    {link.name}
                  </a>
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
                "Seguridad Electrónica",
                "Puertas Automáticas",
                "Domótica & Smart Home",
                "Redes Estructuradas",
                "Energías Renovables",
                "Computación & Soporte TI",
              ].map((spec) => (
                <li key={spec}>
                  <Link
                    href="#servicios"
                    onClick={(e) => handleScrollToSection(e, "#servicios")}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors font-sans"
                  >
                    {spec}
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
            <a href="#" className="text-xs text-slate-500 hover:text-cyan-neon transition-colors">
              Políticas de Privacidad
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-cyan-neon transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
