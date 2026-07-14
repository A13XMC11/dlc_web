"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ClipboardList } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Inicio",        href: "#inicio" },
  { name: "Sobre Nosotros", href: "#nosotros" },
  { name: "Servicios",     href: "#servicios" },
  { name: "Estadísticas",  href: "#estadisticas" },
  { name: "Proyectos",     href: "#proyectos" },
  { name: "Testimonios",   href: "#testimonios" },
  { name: "Contacto",      href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isOpen, setIsOpen]               = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Active zone: a band at 40%–45% from the top of the viewport.
        // A section fires when its top edge crosses this line coming down,
        // or its bottom edge crosses coming up.
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll + immediate active state on click
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.slice(1);

    // Set active immediately — don't wait for IntersectionObserver
    setActiveSection(sectionId);
    setIsOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glassmorphism h-16 shadow-lg border-b border-brand-cyan/20"
            : "bg-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="#inicio" className="flex items-center group">
            <Image
              src="/logo-dlc.png"
              alt="DLC TEC"
              width={129}
              height={60}
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={`font-sans text-sm font-medium relative group py-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Active / hover underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-in-out ${
                      isActive
                        ? "w-full bg-brand-cyan"
                        : "w-0 bg-brand-cyan/50 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cotizador"
              className="inline-flex items-center gap-2 border border-[#0cc0df]/30 hover:border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df]/10 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Cotizador</span>
            </Link>
            <a
              href="https://wa.me/593958689116?text=Hola,%20quisiera%20cotizar%20servicios%20tecnológicos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-neon/10 to-blue-500/10 hover:from-cyan-neon/20 hover:to-blue-500/20 text-brand-cyan border border-brand-cyan/30 hover:border-brand-cyan px-4 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(8,180,255,0.15)] hover:shadow-[0_0_20px_rgba(8,180,255,0.3)] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-deep/95 backdrop-blur-lg flex flex-col justify-between p-6 md:hidden border-l border-brand-cyan/10"
          >
            <div className="flex flex-col mt-20 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`font-sans text-2xl font-semibold transition-all duration-300 py-2 pl-4 border-l-2 ${
                      isActive
                        ? "text-white border-brand-cyan"
                        : "text-slate-400 hover:text-white border-transparent hover:border-brand-cyan/40"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mb-10 flex flex-col gap-3">
              <Link
                href="/cotizador"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#0cc0df]/40 hover:border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df]/10 font-bold py-4 rounded-xl transition-all cursor-pointer"
              >
                <ClipboardList className="w-5 h-5" />
                <span>Cotizador Interactivo</span>
              </Link>
              <a
                href="https://wa.me/593958689116?text=Hola,%20quisiera%20cotizar%20servicios%20tecnológicos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(8,180,255,0.4)] transition-all cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
