"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Lock, BellRing, Home, Flame, SlidersHorizontal, Zap, Settings,
  ChevronRight, ChevronLeft, CheckCircle2, Send, User, Phone, Mail, MapPin,
  Clock, MessageSquare, Shield,
} from "lucide-react";
import {
  STEP_INFO, SERVICE_OPTIONS, SPACE_TYPES, SPACE_SIZES,
  CCTV_COUNTS, CCTV_TYPES, CCTV_STORAGE,
  ACCESS_DOORS, ACCESS_TYPES,
  ALARM_ZONES, ALARM_SENSORS,
  DOMOTICA_ROOMS, DOMOTICA_FEATURES,
  FIRE_ZONES, FIRE_DETECTORS,
  GATE_COUNTS, GATE_TYPES,
  URGENCY_OPTIONS,
  WizardConfig, OptionItem, initialConfig,
} from "./cotizador-data";

// ─── Icon map ───────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera, Lock, BellRing, Home, Flame, SlidersHorizontal, Zap, Settings,
};

// ─── Helpers ────────────────────────────────────────────────────────────────
function toggleArr(arr: string[], id: string): string[] {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
}

function buildWhatsAppMessage(cfg: WizardConfig): string {
  const svcLabels = SERVICE_OPTIONS
    .filter((s) => cfg.services.includes(s.id))
    .map((s) => s.label);

  const spaceType = SPACE_TYPES.find((t) => t.id === cfg.spaceType)?.label ?? cfg.spaceType;
  const spaceSize = SPACE_SIZES.find((s) => s.id === cfg.spaceSize)?.label ?? cfg.spaceSize;
  const spaceSizeDesc = SPACE_SIZES.find((s) => s.id === cfg.spaceSize)?.description ?? "";
  const urgency = URGENCY_OPTIONS.find((u) => u.id === cfg.contact.urgency);

  let msg = `Hola DLC Tecnológica 👋\nSolicito cotización personalizada:\n`;
  msg += `\n🔧 *SERVICIOS REQUERIDOS:*\n${svcLabels.map((l) => `• ${l}`).join("\n")}\n`;
  msg += `\n🏢 *ESPACIO:* ${spaceType} · ${spaceSize} (${spaceSizeDesc})\n`;

  if (cfg.services.includes("cctv")) {
    msg += `\n📹 *VIDEOVIGILANCIA CCTV:*\n`;
    if (cfg.cctv.count) msg += `• Cantidad: ${cfg.cctv.count}\n`;
    if (cfg.cctv.types.length)
      msg += `• Tipos: ${CCTV_TYPES.filter((t) => cfg.cctv.types.includes(t.id)).map((t) => t.label).join(", ")}\n`;
    if (cfg.cctv.storage)
      msg += `• Almacenamiento: ${CCTV_STORAGE.find((s) => s.id === cfg.cctv.storage)?.label}\n`;
  }

  if (cfg.services.includes("accesos")) {
    msg += `\n🚪 *CONTROL DE ACCESOS:*\n`;
    if (cfg.accesos.doors) msg += `• Accesos: ${cfg.accesos.doors}\n`;
    if (cfg.accesos.types.length)
      msg += `• Tecnología: ${ACCESS_TYPES.filter((t) => cfg.accesos.types.includes(t.id)).map((t) => t.label).join(", ")}\n`;
  }

  if (cfg.services.includes("alarmas")) {
    msg += `\n🔔 *ALARMAS DE SEGURIDAD:*\n`;
    if (cfg.alarmas.zones) msg += `• Zonas: ${cfg.alarmas.zones}\n`;
    if (cfg.alarmas.sensors.length)
      msg += `• Sensores: ${ALARM_SENSORS.filter((s) => cfg.alarmas.sensors.includes(s.id)).map((s) => s.label).join(", ")}\n`;
  }

  if (cfg.services.includes("domotica")) {
    msg += `\n🏠 *DOMÓTICA:*\n`;
    if (cfg.domotica.rooms) msg += `• Ambientes: ${cfg.domotica.rooms}\n`;
    if (cfg.domotica.features.length)
      msg += `• Funciones: ${DOMOTICA_FEATURES.filter((f) => cfg.domotica.features.includes(f.id)).map((f) => f.label).join(", ")}\n`;
  }

  if (cfg.services.includes("incendios")) {
    msg += `\n🔥 *CONTROL DE INCENDIOS:*\n`;
    if (cfg.incendios.zones) msg += `• Zonas: ${cfg.incendios.zones}\n`;
    if (cfg.incendios.detectors.length)
      msg += `• Detectores: ${FIRE_DETECTORS.filter((d) => cfg.incendios.detectors.includes(d.id)).map((d) => d.label).join(", ")}\n`;
  }

  if (cfg.services.includes("portones")) {
    msg += `\n🚧 *PORTONES / AUTOMATIZACIÓN:*\n`;
    if (cfg.portones.count) msg += `• Cantidad: ${cfg.portones.count}\n`;
    if (cfg.portones.types.length)
      msg += `• Tipos: ${GATE_TYPES.filter((t) => cfg.portones.types.includes(t.id)).map((t) => t.label).join(", ")}\n`;
  }

  if (cfg.services.includes("electrica")) msg += `\n⚡ *INGENIERÍA ELÉCTRICA:* Requiero cotización\n`;
  if (cfg.services.includes("soporte"))   msg += `\n💻 *SOPORTE TÉCNICO / TI:* Requiero cotización\n`;

  msg += `\n👤 *MIS DATOS:*\n`;
  msg += `• Nombre: ${cfg.contact.name}\n`;
  msg += `• Teléfono: ${cfg.contact.phone}\n`;
  if (cfg.contact.email)  msg += `• Email: ${cfg.contact.email}\n`;
  if (cfg.contact.sector) msg += `• Sector / Dirección: ${cfg.contact.sector}\n`;
  if (urgency) msg += `• Urgencia: ${urgency.label} — ${urgency.description}\n`;
  msg += `\n¡Gracias! Espero su respuesta.`;

  return msg;
}

// ─── Shared UI primitives ────────────────────────────────────────────────────
function ToggleCard({
  label, description, selected, onClick, icon,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative text-left w-full p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[#0cc0df] bg-[rgba(12,192,223,0.08)] shadow-[0_0_16px_rgba(12,192,223,0.15)]"
          : "border-[#242424] bg-[#0e4956] hover:border-[rgba(12,192,223,0.3)] hover:bg-[#1a1a1a]"
      }`}
    >
      {icon && <div className="mb-2 text-[#0cc0df]">{icon}</div>}
      <p className={`font-semibold text-sm leading-tight ${selected ? "text-[#0cc0df]" : "text-white"}`}>
        {label}
      </p>
      {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
      {selected && (
        <div className="absolute top-2.5 right-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#0cc0df]" />
        </div>
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
      {children}
    </p>
  );
}

function InputField({
  label, icon, type = "text", value, onChange, placeholder, required,
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
        {label} {required && <span className="text-[#08b4ff]">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#0e4956] border border-[#242424] rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#0cc0df] focus:shadow-[0_0_12px_rgba(12,192,223,0.15)] transition-all"
        />
      </div>
    </div>
  );
}

// ─── Step 0 — Servicios ──────────────────────────────────────────────────────
function StepServicios({ cfg, setCfg }: { cfg: WizardConfig; setCfg: (c: WizardConfig) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {SERVICE_OPTIONS.map((svc) => {
        const Icon = ICON_MAP[svc.iconName];
        return (
          <ToggleCard
            key={svc.id}
            label={svc.label}
            description={svc.description}
            selected={cfg.services.includes(svc.id)}
            onClick={() => setCfg({ ...cfg, services: toggleArr(cfg.services, svc.id) })}
            icon={Icon ? <Icon className="w-5 h-5" /> : undefined}
          />
        );
      })}
    </div>
  );
}

// ─── Step 1 — Espacio ────────────────────────────────────────────────────────
function StepEspacio({ cfg, setCfg }: { cfg: WizardConfig; setCfg: (c: WizardConfig) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <SectionLabel>Tipo de propiedad</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SPACE_TYPES.map((opt) => (
            <ToggleCard
              key={opt.id}
              label={opt.label}
              selected={cfg.spaceType === opt.id}
              onClick={() => setCfg({ ...cfg, spaceType: opt.id })}
            />
          ))}
        </div>
      </div>
      <div>
        <SectionLabel>Tamaño del espacio</SectionLabel>
        <div className="grid grid-cols-3 gap-3">
          {SPACE_SIZES.map((opt) => (
            <ToggleCard
              key={opt.id}
              label={opt.label}
              description={opt.description}
              selected={cfg.spaceSize === opt.id}
              onClick={() => setCfg({ ...cfg, spaceSize: opt.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 2 — Detalles ───────────────────────────────────────────────────────
function StepDetalles({ cfg, setCfg }: { cfg: WizardConfig; setCfg: (c: WizardConfig) => void }) {
  const has = (id: string) => cfg.services.includes(id);

  const grid = (items: OptionItem[], selected: string[], onToggle: (id: string) => void, single = false) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {items.map((opt) => (
        <ToggleCard
          key={opt.id}
          label={opt.label}
          selected={selected.includes(opt.id)}
          onClick={() => onToggle(opt.id)}
        />
      ))}
    </div>
  );

  const singleGrid = (items: OptionItem[], val: string, set: (v: string) => void) =>
    grid(items, val ? [val] : [], (id) => set(val === id ? "" : id), true);

  const multiGrid = (items: OptionItem[], arr: string[], set: (a: string[]) => void) =>
    grid(items, arr, (id) => set(toggleArr(arr, id)));

  const noDetails = !has("cctv") && !has("accesos") && !has("alarmas") && !has("domotica") && !has("incendios") && !has("portones");

  if (noDetails) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
        <Shield className="w-12 h-12 text-[#0cc0df] opacity-50" />
        <p className="text-slate-400 text-sm">
          Los servicios que seleccionaste no requieren detalles adicionales.<br />
          Puedes continuar al siguiente paso.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {has("cctv") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#0cc0df]" /> Videovigilancia CCTV
          </h3>
          <div>
            <SectionLabel>¿Cuántas cámaras necesitas?</SectionLabel>
            {singleGrid(CCTV_COUNTS, cfg.cctv.count, (v) => setCfg({ ...cfg, cctv: { ...cfg.cctv, count: v } }))}
          </div>
          <div>
            <SectionLabel>Tipo de cámaras (selección múltiple)</SectionLabel>
            {multiGrid(CCTV_TYPES, cfg.cctv.types, (a) => setCfg({ ...cfg, cctv: { ...cfg.cctv, types: a } }))}
          </div>
          <div>
            <SectionLabel>Almacenamiento de grabaciones</SectionLabel>
            {singleGrid(CCTV_STORAGE, cfg.cctv.storage, (v) => setCfg({ ...cfg, cctv: { ...cfg.cctv, storage: v } }))}
          </div>
        </div>
      )}

      {has("accesos") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#0cc0df]" /> Control de Accesos
          </h3>
          <div>
            <SectionLabel>¿Cuántos accesos / puertas?</SectionLabel>
            {singleGrid(ACCESS_DOORS, cfg.accesos.doors, (v) => setCfg({ ...cfg, accesos: { ...cfg.accesos, doors: v } }))}
          </div>
          <div>
            <SectionLabel>Tecnología de acceso (selección múltiple)</SectionLabel>
            {multiGrid(ACCESS_TYPES, cfg.accesos.types, (a) => setCfg({ ...cfg, accesos: { ...cfg.accesos, types: a } }))}
          </div>
        </div>
      )}

      {has("alarmas") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <BellRing className="w-4 h-4 text-[#0cc0df]" /> Alarmas de Seguridad
          </h3>
          <div>
            <SectionLabel>¿Cuántas zonas de alarma?</SectionLabel>
            {singleGrid(ALARM_ZONES, cfg.alarmas.zones, (v) => setCfg({ ...cfg, alarmas: { ...cfg.alarmas, zones: v } }))}
          </div>
          <div>
            <SectionLabel>Sensores requeridos (selección múltiple)</SectionLabel>
            {multiGrid(ALARM_SENSORS, cfg.alarmas.sensors, (a) => setCfg({ ...cfg, alarmas: { ...cfg.alarmas, sensors: a } }))}
          </div>
        </div>
      )}

      {has("domotica") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Home className="w-4 h-4 text-[#0cc0df]" /> Domótica / Smart Home
          </h3>
          <div>
            <SectionLabel>¿Cuántos ambientes automatizar?</SectionLabel>
            {singleGrid(DOMOTICA_ROOMS, cfg.domotica.rooms, (v) => setCfg({ ...cfg, domotica: { ...cfg.domotica, rooms: v } }))}
          </div>
          <div>
            <SectionLabel>Funciones que deseas (selección múltiple)</SectionLabel>
            {multiGrid(DOMOTICA_FEATURES, cfg.domotica.features, (a) => setCfg({ ...cfg, domotica: { ...cfg.domotica, features: a } }))}
          </div>
        </div>
      )}

      {has("incendios") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#0cc0df]" /> Control de Incendios
          </h3>
          <div>
            <SectionLabel>¿Cuántas zonas de detección?</SectionLabel>
            {singleGrid(FIRE_ZONES, cfg.incendios.zones, (v) => setCfg({ ...cfg, incendios: { ...cfg.incendios, zones: v } }))}
          </div>
          <div>
            <SectionLabel>Equipos requeridos (selección múltiple)</SectionLabel>
            {multiGrid(FIRE_DETECTORS, cfg.incendios.detectors, (a) => setCfg({ ...cfg, incendios: { ...cfg.incendios, detectors: a } }))}
          </div>
        </div>
      )}

      {has("portones") && (
        <div className="space-y-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#0cc0df]" /> Portones / Automatización
          </h3>
          <div>
            <SectionLabel>¿Cuántos portones / barreras?</SectionLabel>
            {singleGrid(GATE_COUNTS, cfg.portones.count, (v) => setCfg({ ...cfg, portones: { ...cfg.portones, count: v } }))}
          </div>
          <div>
            <SectionLabel>Tipo de portones (selección múltiple)</SectionLabel>
            {multiGrid(GATE_TYPES, cfg.portones.types, (a) => setCfg({ ...cfg, portones: { ...cfg.portones, types: a } }))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Step 3 — Contacto ───────────────────────────────────────────────────────
function StepContacto({ cfg, setCfg }: { cfg: WizardConfig; setCfg: (c: WizardConfig) => void }) {
  const set = (field: keyof WizardConfig["contact"], v: string) =>
    setCfg({ ...cfg, contact: { ...cfg.contact, [field]: v } });

  return (
    <div className="space-y-5">
      <InputField
        label="Nombre completo"
        icon={<User className="w-4 h-4" />}
        value={cfg.contact.name}
        onChange={(v) => set("name", v)}
        placeholder="Ej: Juan Pérez"
        required
      />
      <InputField
        label="Teléfono / WhatsApp"
        icon={<Phone className="w-4 h-4" />}
        type="tel"
        value={cfg.contact.phone}
        onChange={(v) => set("phone", v)}
        placeholder="Ej: 099 123 4567"
        required
      />
      <InputField
        label="Correo electrónico (opcional)"
        icon={<Mail className="w-4 h-4" />}
        type="email"
        value={cfg.contact.email}
        onChange={(v) => set("email", v)}
        placeholder="tucorreo@ejemplo.com"
      />
      <InputField
        label="Sector / Dirección (opcional)"
        icon={<MapPin className="w-4 h-4" />}
        value={cfg.contact.sector}
        onChange={(v) => set("sector", v)}
        placeholder="Ej: La Gasca, Quito"
      />
      <div>
        <SectionLabel>Urgencia de la instalación</SectionLabel>
        <div className="grid grid-cols-3 gap-3">
          {URGENCY_OPTIONS.map((opt) => (
            <ToggleCard
              key={opt.id}
              label={opt.label}
              description={opt.description}
              selected={cfg.contact.urgency === opt.id}
              onClick={() => set("urgency", opt.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 4 — Resumen ────────────────────────────────────────────────────────
function StepResumen({ cfg }: { cfg: WizardConfig }) {
  const whatsappUrl = `https://wa.me/593958689116?text=${encodeURIComponent(buildWhatsAppMessage(cfg))}`;

  const svcLabels = SERVICE_OPTIONS.filter((s) => cfg.services.includes(s.id)).map((s) => s.label);
  const spaceType = SPACE_TYPES.find((t) => t.id === cfg.spaceType)?.label ?? "";
  const spaceSize = SPACE_SIZES.find((s) => s.id === cfg.spaceSize);
  const urgency   = URGENCY_OPTIONS.find((u) => u.id === cfg.contact.urgency);

  const Row = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex items-start gap-3 py-3 border-b border-[#1e1e1e] last:border-0">
      <span className="text-[#0cc0df] mt-0.5 shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{label}</p>
        <p className="text-white text-sm mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-[#0e4956] border border-[#242424] rounded-2xl p-5 space-y-0.5">
        <Row
          icon={<Settings className="w-4 h-4" />}
          label="Servicios"
          value={svcLabels.join(", ")}
        />
        <Row
          icon={<MapPin className="w-4 h-4" />}
          label="Espacio"
          value={`${spaceType} · ${spaceSize?.label} (${spaceSize?.description ?? ""})`}
        />
        <Row
          icon={<User className="w-4 h-4" />}
          label="Nombre"
          value={cfg.contact.name}
        />
        <Row
          icon={<Phone className="w-4 h-4" />}
          label="Teléfono"
          value={cfg.contact.phone}
        />
        {cfg.contact.email && (
          <Row icon={<Mail className="w-4 h-4" />} label="Correo" value={cfg.contact.email} />
        )}
        {cfg.contact.sector && (
          <Row icon={<MapPin className="w-4 h-4" />} label="Sector" value={cfg.contact.sector} />
        )}
        <Row
          icon={<Clock className="w-4 h-4" />}
          label="Urgencia"
          value={`${urgency?.label} — ${urgency?.description}`}
        />
      </div>

      <div className="bg-[rgba(12,192,223,0.05)] border border-[rgba(12,192,223,0.2)] rounded-2xl p-4 text-sm text-slate-400">
        <MessageSquare className="w-4 h-4 text-[#0cc0df] inline mr-2" />
        Al hacer clic enviarás un mensaje de WhatsApp con todos los detalles de tu requerimiento. Nuestro equipo te contactará con la cotización.
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-[#08b4ff] hover:bg-brand-cyan-dark text-white font-bold py-4 px-6 rounded-2xl text-base shadow-[0_0_24px_rgba(8,180,255,0.35)] hover:shadow-[0_0_32px_rgba(8,180,255,0.5)] transition-all cursor-pointer"
      >
        <Send className="w-5 h-5" />
        Enviar cotización por WhatsApp
      </a>

      <p className="text-center text-xs text-slate-600">
        También puedes llamarnos al <span className="text-slate-400">02 600-5137</span> o escribir a{" "}
        <span className="text-slate-400">info@dlc.com.ec</span>
      </p>
    </div>
  );
}

// ─── Main wizard ─────────────────────────────────────────────────────────────
const TOTAL_STEPS = STEP_INFO.length;

export default function CotizadorWizard() {
  const [step, setStep]       = useState(0);
  const [direction, setDir]   = useState(1);
  const [cfg, setCfg]         = useState<WizardConfig>(initialConfig);

  const canProceed = (): boolean => {
    if (step === 0) return cfg.services.length > 0;
    if (step === 1) return !!cfg.spaceType && !!cfg.spaceSize;
    if (step === 3) return !!cfg.contact.name.trim() && !!cfg.contact.phone.trim();
    return true;
  };

  const goNext = () => { setDir(1);  setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)); };
  const goPrev = () => { setDir(-1); setStep((s) => Math.max(s - 1, 0)); };

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ?  50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -50 :  50, opacity: 0 }),
  };

  const stepContent = [
    <StepServicios  key={0} cfg={cfg} setCfg={setCfg} />,
    <StepEspacio    key={1} cfg={cfg} setCfg={setCfg} />,
    <StepDetalles   key={2} cfg={cfg} setCfg={setCfg} />,
    <StepContacto   key={3} cfg={cfg} setCfg={setCfg} />,
    <StepResumen    key={4} cfg={cfg} />,
  ];

  return (
    <div className="min-h-screen bg-[#01313f] pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[#08b4ff] font-bold text-xs uppercase tracking-widest mb-2">
            Cotizador Interactivo
          </p>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Arma tu requerimiento
          </h1>
          <p className="text-slate-400 mt-3 text-sm">
            Configura exactamente lo que necesitas y recibe una cotización personalizada
          </p>
          <div className="h-1 w-16 bg-[#08b4ff] mt-5 rounded-full mx-auto" />
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {STEP_INFO.map((info, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i < step
                      ? "bg-[#0cc0df] text-[#01313f]"
                      : i === step
                      ? "bg-[#08b4ff] text-white shadow-[0_0_12px_rgba(8,180,255,0.5)]"
                      : "bg-[#1a1a1a] text-slate-600 border border-[#2a2a2a]"
                  }`}
                >
                  {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`hidden sm:block text-[10px] font-medium text-center leading-tight max-w-[60px] ${
                  i === step ? "text-white" : "text-slate-600"
                }`}>
                  {info.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#08b4ff] to-[#0cc0df] rounded-full"
              animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-3xl p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-white">{STEP_INFO[step].title}</h2>
            <p className="text-slate-400 text-sm mt-1">{STEP_INFO[step].subtitle}</p>
          </div>

          {/* Step content with slide animation */}
          <div className="overflow-hidden min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {stepContent[step]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {step < TOTAL_STEPS - 1 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#1e1e1e]">
              <button
                onClick={goPrev}
                disabled={step === 0}
                className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <button
                onClick={goNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-[#08b4ff] hover:bg-brand-cyan-dark disabled:bg-[#16262b] disabled:text-slate-600 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-[0_0_16px_rgba(8,180,255,0.3)] hover:shadow-[0_0_24px_rgba(8,180,255,0.5)] disabled:shadow-none cursor-pointer"
              >
                {step === TOTAL_STEPS - 2 ? "Ver resumen" : "Siguiente"} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Step counter */}
        <p className="text-center text-xs text-slate-600 mt-4">
          Paso {step + 1} de {TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
}
