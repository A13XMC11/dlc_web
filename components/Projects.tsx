"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Eye, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const categories = ["Todos", "Seguridad", "Automatización", "Smart Home"];

const projectsList = [
  {
    id: 1,
    title: "CCTV Corporativo Edificio Alpha",
    category: "Seguridad",
    location: "Quito, Ecuador",
    image: "/project-cctv.png",
    desc: "Instalación de 48 cámaras IP dome 4K con analíticas de detección de rostros e intrusiones.",
  },
  {
    id: 2,
    title: "Residencia Inteligente Cumbayá",
    category: "Smart Home",
    location: "Cumbayá, Pichincha",
    image: "/project-smart.png",
    desc: "Automatización de iluminación Lutron, persianas eléctricas, clima y sonido invisible multiroom.",
  },
  {
    id: 3,
    title: "Portón Automatizado Urbanización Valle",
    category: "Automatización",
    location: "Valle de los Chillos",
    image: "/project-gate.png",
    desc: "Portón corredizo de alto tráfico con motor italiano, apertura celular y control RFID.",
  },
  {
    id: 4,
    title: "Vigilancia Perimetral Planta Industrial",
    category: "Seguridad",
    location: "Guayaquil, Ecuador",
    image: "/dlc-image-5.jpg",
    desc: "Cámaras bullet en torre para perímetro industrial, con visión nocturna y alarma activa.",
  },
  {
    id: 5,
    title: "Instalación CCTV con PTZ Dome",
    category: "Seguridad",
    location: "Quito, Ecuador",
    image: "/images/dlc-image-2.jpg",
    desc: "Despliegue completo de sistema CCTV con cámara PTZ dome y cableado estructurado certificado.",
  },
  {
    id: 6,
    title: "Control de Acceso Edificio Residencial",
    category: "Automatización",
    location: "Samborondón, Guayas",
    image: "/dlc-image-1.jpg",
    desc: "Sistema de cámara bullet IP con control de acceso biométrico y videoportero integrado.",
  },
];

type Project = (typeof projectsList)[0];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "Todos"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // ESC key + body scroll lock while modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="relative py-24 bg-[#01313f] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.015] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2"
          >
            Casos de Éxito
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-5xl font-extrabold text-white"
          >
            Nuestros Proyectos Recientes
          </motion.h2>
          <div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-brand-cyan text-white shadow-[0_0_15px_rgba(8,180,255,0.4)]"
                  : "bg-[#1a1a1a]/80 text-slate-300 hover:text-white border border-[#242424] hover:border-[#333]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-dark-slate/40 border border-[#242424]/80 rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] transition-all duration-300 ease-in-out"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Eye button with tooltip */}
                  <button
                    onClick={(e) => { e.stopPropagation(); openModal(project); }}
                    aria-label="Ver detalles del proyecto"
                    className="group/eye absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1a1a1a]/80 border border-[#333]/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-[rgba(8,180,255,0.9)] hover:border-brand-cyan transition-all duration-200"
                  >
                    <Eye className="w-5 h-5" />
                    <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[#333] bg-[#1a1a1a] px-2 py-1 text-[10px] text-white opacity-0 group-hover/eye:opacity-100 transition-opacity duration-150">
                      Ver detalles
                    </span>
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms] ease-in-out z-20" />

                {/* Card Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-[#0e4956] border border-[#242424] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1a1a1a]/90 border border-[#333] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full image */}
              <div className="relative h-56 sm:h-72 flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 576px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4956] via-[#0e4956]/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-sans">
                  {selectedProject.desc}
                </p>

                <a
                  href={`https://wa.me/593958689116?text=${encodeURIComponent(
                    `Hola, me interesa solicitar un proyecto similar a "${selectedProject.title}". ¿Me pueden dar más información y una cotización?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(8,180,255,0.45)]"
                >
                  <BsWhatsapp className="w-5 h-5" />
                  Solicitar proyecto similar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
