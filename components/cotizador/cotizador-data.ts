export type OptionItem = {
  id: string;
  label: string;
  description?: string;
};

export type ServiceOption = {
  id: string;
  label: string;
  iconName: string;
  description: string;
};

export const STEP_INFO = [
  { title: "¿Qué necesitas?", subtitle: "Selecciona uno o más servicios que requieres" },
  { title: "Tu espacio", subtitle: "Cuéntanos sobre el lugar donde lo instalaremos" },
  { title: "Detalles técnicos", subtitle: "Configura los parámetros específicos de cada servicio" },
  { title: "Tus datos", subtitle: "Para prepararte una cotización personalizada" },
  { title: "Resumen", subtitle: "Revisa tu solicitud y envíala a nuestro equipo" },
];

export const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "cctv",      label: "Videovigilancia CCTV",      iconName: "Camera",            description: "Cámaras HD, 4K y sistemas de grabación" },
  { id: "accesos",   label: "Control de Accesos",         iconName: "Lock",              description: "Biométrico, RFID y reconocimiento facial" },
  { id: "alarmas",   label: "Alarmas de Seguridad",       iconName: "BellRing",          description: "Sensores de movimiento, puertas y monitoreo" },
  { id: "domotica",  label: "Domótica / Smart Home",      iconName: "Home",              description: "Automatización de iluminación, clima y más" },
  { id: "incendios", label: "Control de Incendios",       iconName: "Flame",             description: "Detección, alarma y supresión de incendios" },
  { id: "portones",  label: "Portones / Automatización",  iconName: "SlidersHorizontal", description: "Motores, barreras vehiculares y peatonales" },
  { id: "electrica", label: "Ingeniería Eléctrica",       iconName: "Zap",               description: "Instalaciones, tableros y diseño eléctrico" },
  { id: "soporte",   label: "Soporte Técnico / TI",       iconName: "Settings",          description: "Redes, software y mantenimiento preventivo" },
];

export const SPACE_TYPES: OptionItem[] = [
  { id: "hogar",    label: "Hogar / Residencia" },
  { id: "oficina",  label: "Oficina / Empresa" },
  { id: "comercio", label: "Local Comercial" },
  { id: "industria",label: "Industrial / Bodega" },
  { id: "edificio", label: "Edificio / Condominio" },
];

export const SPACE_SIZES: OptionItem[] = [
  { id: "pequeno", label: "Pequeño",  description: "Menos de 100 m²" },
  { id: "mediano", label: "Mediano",  description: "100 a 500 m²" },
  { id: "grande",  label: "Grande",   description: "Más de 500 m²" },
];

// CCTV
export const CCTV_COUNTS: OptionItem[] = [
  { id: "1-4",  label: "1 a 4 cámaras" },
  { id: "5-8",  label: "5 a 8 cámaras" },
  { id: "9-16", label: "9 a 16 cámaras" },
  { id: "17+",  label: "Más de 16 cámaras" },
];
export const CCTV_TYPES: OptionItem[] = [
  { id: "domo",     label: "Domo HD (interior)" },
  { id: "bala",     label: "Bala 4K (exterior)" },
  { id: "ptz",      label: "PTZ (giro y zoom)" },
  { id: "fisheye",  label: "360° Fisheye" },
  { id: "nocturna", label: "Visión nocturna avanzada" },
  { id: "termica",  label: "Cámara térmica" },
];
export const CCTV_STORAGE: OptionItem[] = [
  { id: "nvr",   label: "Grabador NVR local" },
  { id: "nube",  label: "Almacenamiento en la nube" },
  { id: "ambos", label: "NVR + Nube (híbrido)" },
];

// Accesos
export const ACCESS_DOORS: OptionItem[] = [
  { id: "1",    label: "1 acceso" },
  { id: "2-4",  label: "2 a 4 accesos" },
  { id: "5-10", label: "5 a 10 accesos" },
  { id: "10+",  label: "Más de 10 accesos" },
];
export const ACCESS_TYPES: OptionItem[] = [
  { id: "biometrico", label: "Huella dactilar" },
  { id: "facial",     label: "Reconocimiento facial" },
  { id: "rfid",       label: "Tarjeta RFID / NFC" },
  { id: "pin",        label: "Código PIN" },
  { id: "movil",      label: "App móvil / Bluetooth" },
];

// Alarmas
export const ALARM_ZONES: OptionItem[] = [
  { id: "1-4",  label: "1 a 4 zonas" },
  { id: "5-10", label: "5 a 10 zonas" },
  { id: "11+",  label: "Más de 10 zonas" },
];
export const ALARM_SENSORS: OptionItem[] = [
  { id: "movimiento", label: "Sensor de movimiento PIR" },
  { id: "puerta",     label: "Sensor de puerta / ventana" },
  { id: "humo",       label: "Detector de humo" },
  { id: "vibracion",  label: "Sensor de vibración / rotura" },
  { id: "panico",     label: "Botón de pánico" },
  { id: "gas",        label: "Detector de gas / CO" },
];

// Domótica
export const DOMOTICA_ROOMS: OptionItem[] = [
  { id: "1-3", label: "1 a 3 ambientes" },
  { id: "4-6", label: "4 a 6 ambientes" },
  { id: "7+",  label: "7 o más ambientes" },
];
export const DOMOTICA_FEATURES: OptionItem[] = [
  { id: "iluminacion",      label: "Iluminación inteligente" },
  { id: "clima",            label: "Climatización / AC" },
  { id: "persianas",        label: "Persianas / Cortinas motorizadas" },
  { id: "electrodomesticos",label: "Control de electrodomésticos" },
  { id: "seguridad",        label: "Integración con seguridad" },
  { id: "voz",              label: "Control por voz (Alexa / Google)" },
];

// Incendios
export const FIRE_ZONES: OptionItem[] = [
  { id: "1-4",  label: "1 a 4 zonas" },
  { id: "5-10", label: "5 a 10 zonas" },
  { id: "11+",  label: "Más de 10 zonas" },
];
export const FIRE_DETECTORS: OptionItem[] = [
  { id: "humo-optico",  label: "Detector de humo óptico" },
  { id: "temperatura",  label: "Sensor de temperatura" },
  { id: "co",           label: "Detector de monóxido de CO" },
  { id: "llama",        label: "Detector de llama" },
  { id: "sprinklers",   label: "Sistema de Sprinklers" },
  { id: "extintor-auto",label: "Extintor automático" },
];

// Portones
export const GATE_COUNTS: OptionItem[] = [
  { id: "1",   label: "1 portón" },
  { id: "2-3", label: "2 a 3 portones" },
  { id: "4+",  label: "4 o más portones" },
];
export const GATE_TYPES: OptionItem[] = [
  { id: "deslizante",       label: "Portón deslizante" },
  { id: "abatible",         label: "Portón abatible / batiente" },
  { id: "enrollable",       label: "Portón enrollable" },
  { id: "barrera-vehicular",label: "Barrera vehicular" },
  { id: "peatonal",         label: "Puerta peatonal automática" },
];

// Contacto
export const URGENCY_OPTIONS: OptionItem[] = [
  { id: "normal",    label: "Normal",    description: "En los próximos días" },
  { id: "urgente",   label: "Urgente",   description: "Esta semana" },
  { id: "inmediato", label: "Inmediato", description: "Hoy mismo" },
];

export const TECH_VISIT_OPTIONS: OptionItem[] = [
  { id: "si",       label: "Sí",         description: "Quiero una visita técnica de evaluación" },
  { id: "no",       label: "No",         description: "Ya tengo claro lo que necesito" },
  { id: "no-se",    label: "No estoy seguro", description: "Que nos contacten para definirlo" },
];

// Wizard state type
export type WizardConfig = {
  services: string[];
  spaceType: string;
  spaceSize: string;
  cctv:      { count: string; types: string[]; storage: string };
  accesos:   { doors: string; types: string[] };
  alarmas:   { zones: string; sensors: string[] };
  domotica:  { rooms: string; features: string[] };
  incendios: { zones: string; detectors: string[] };
  portones:  { count: string; types: string[] };
  contact:   { name: string; phone: string; email: string; sector: string; urgency: string; techVisit: string };
};

export const initialConfig: WizardConfig = {
  services:  [],
  spaceType: "",
  spaceSize: "",
  cctv:      { count: "", types: [], storage: "" },
  accesos:   { doors: "", types: [] },
  alarmas:   { zones: "", sensors: [] },
  domotica:  { rooms: "", features: [] },
  incendios: { zones: "", detectors: [] },
  portones:  { count: "", types: [] },
  contact:   { name: "", phone: "", email: "", sector: "", urgency: "normal", techVisit: "" },
};
