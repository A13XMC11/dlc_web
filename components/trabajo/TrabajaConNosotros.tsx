import Image from "next/image";
import {
  Mail,
  CheckCircle,
  Zap,
  ClipboardCheck,
  GraduationCap,
  Users,
  TrendingUp,
} from "lucide-react";

const EMAIL = "info@dlc.com.ec";
const SUBJECT = "Postulación - Técnico en Electrónica y Electricidad";
const BODY = [
  "Hola equipo de DLC Tecnológica,",
  "",
  "Quisiera postular a la vacante de Técnico con experiencia en Electrónica y Electricidad.",
  "Adjunto mi hoja de vida (CV) en formato PDF.",
  "",
  "Nombre completo:",
  "Teléfono de contacto:",
  "Años de experiencia:",
  "",
  "Saludos.",
].join("\n");

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const requisitos = [
  "Formación técnica o tecnológica en Electrónica, Electricidad o afines",
  "Experiencia comprobable en instalación y mantenimiento de sistemas eléctricos/electrónicos",
  "Conocimientos en CCTV, alarmas, control de accesos o automatización (deseable)",
  "Capacidad de trabajo en campo y atención a clientes",
  "Disponibilidad de tiempo completo",
  "Licencia de conducir tipo B (deseable)",
];

const beneficios = [
  { icon: TrendingUp, title: "Crecimiento profesional", description: "Proyectos variados en seguridad electrónica, domótica e ingeniería eléctrica." },
  { icon: GraduationCap, title: "Capacitación constante", description: "Formación en nuevas tecnologías y certificaciones del sector." },
  { icon: Users, title: "Buen ambiente de trabajo", description: "Equipo técnico consolidado y con proyectos de alto nivel en Quito." },
];

export default function TrabajaConNosotros() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center py-32 bg-dark-deep overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/[0.04] blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-neon/[0.04] blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                Trabaja con Nosotros
              </p>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl">
                Técnico en Electrónica y Electricidad
              </h1>
              <div className="h-1 w-20 bg-brand-cyan rounded-full mb-8" />
              <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Buscamos un técnico con experiencia en electrónica y electricidad para
                sumarse al equipo de DLC Tecnológica en Quito, apoyando la instalación y
                mantenimiento de proyectos de seguridad electrónica, domótica e ingeniería eléctrica.
              </p>

              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark active:scale-[0.98] text-white font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(8,180,255,0.4)] hover:shadow-[0_0_40px_rgba(8,180,255,0.6)]"
              >
                <Mail className="w-5 h-5" />
                Postular por Correo
              </a>
            </div>

            <div className="hidden lg:block relative w-[420px] h-[340px] flex-shrink-0 rounded-3xl overflow-hidden border border-[#242424]">
              <Image
                src="/images/trabaja-tecnico.webp"
                alt="Técnico de DLC Tecnológica trabajando en un panel de electrónica y electricidad"
                fill
                priority
                className="object-cover"
                sizes="420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vacante ── */}
      <section className="py-24 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Descripción y requisitos */}
            <div>
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                Descripción del Puesto
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Lo que harás en DLC
              </h2>
              <p className="text-slate-400 text-base leading-relaxed font-sans mb-10">
                Instalación, configuración y mantenimiento de sistemas de seguridad
                electrónica (CCTV, alarmas, control de accesos), automatización y
                proyectos de ingeniería eléctrica, brindando soporte técnico en sitio
                a clientes residenciales y corporativos.
              </p>

              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
                Requisitos
              </p>
              <ul className="space-y-3">
                {requisitos.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm font-sans leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficios */}
            <div>
              <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                Por qué unirte
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight">
                Beneficios
              </h2>

              <div className="space-y-6">
                {beneficios.map((b) => (
                  <div
                    key={b.title}
                    className="relative group bg-dark-slate/40 border border-[#242424] hover:border-[rgba(12,192,223,0.5)] hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)] rounded-3xl p-8 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms]" />
                    <b.icon className="w-8 h-8 text-brand-cyan mb-4 flex-shrink-0" />
                    <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-cyan-neon transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Postulación ── */}
      <section className="py-24 bg-[#01313f] overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative group bg-gradient-to-r from-brand-cyan/10 to-cyan-neon/5 border border-brand-cyan/30 hover:border-brand-cyan/60 rounded-3xl p-10 sm:p-14 overflow-hidden transition-all duration-300">
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-brand-cyan transition-all duration-[400ms]" />

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0e4956]/80 border border-brand-cyan/30 flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-cyan-neon" />
              </div>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mb-4">
              ¿Te interesa esta vacante?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed font-sans mb-8 max-w-xl mx-auto">
              Envíanos tu hoja de vida (CV) adjunta por correo electrónico a{" "}
              <span className="text-cyan-neon font-semibold">{EMAIL}</span> con el
              asunto &ldquo;Postulación - Técnico en Electrónica y Electricidad&rdquo;.
            </p>

            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark active:scale-[0.98] text-white font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(8,180,255,0.4)] hover:shadow-[0_0_40px_rgba(8,180,255,0.6)]"
            >
              <Zap className="w-5 h-5" />
              Enviar mi CV por Correo
            </a>

            <p className="text-slate-500 text-xs font-sans mt-6">
              También puedes escribirnos directamente a {EMAIL}
              {" "}con tu CV adjunto en PDF.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
