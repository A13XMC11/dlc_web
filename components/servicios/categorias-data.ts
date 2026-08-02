export type CategoriaIndexCard = {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  href: string;
  cardCount: number;
  cardCountLabel: string;
  image?: string;
};

export type CategoriaSubservice = {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image?: string;
};

export type KeyStat = {
  value: string;
  label: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type CategoriaData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  targetAudience: string;
  seoCategory: string;
  seoParagraphs: string[];
  keyStats: KeyStat[];
  mainImage?: string;
  subservices: CategoriaSubservice[];
  highlight?: { label: string; description: string };
  benefits: Benefit[];
  faqs: Faq[];
  waMessage: string;
  indexIconName: string;
};

// ── Índice de categorías que se muestra en /servicios ──────────────────────
export const categoriasIndex: CategoriaIndexCard[] = [
  {
    slug: "seguridad-electronica",
    title: "Seguridad Electrónica",
    description:
      "Protección integral para hogares, comercios e industrias: detección de incendios, control de accesos, alarmas perimetrales y videovigilancia CCTV en Quito y Ecuador.",
    iconName: "ShieldCheck",
    href: "/servicios/seguridad-electronica",
    cardCount: 4,
    cardCountLabel: "especialidades de seguridad",
    image: "/images/equipoinstalando.webp",
  },
  {
    slug: "domotica",
    title: "Domótica y Smart Home",
    description:
      "Convertimos tu hogar o negocio en un espacio inteligente con automatización de iluminación, cortinas, piscinas y control por voz mediante Alexa y Google Home.",
    iconName: "Home",
    href: "/servicios/domotica",
    cardCount: 1,
    cardCountLabel: "soluciones disponibles",
    image: "/images/domotica-index.webp",
  },
  {
    slug: "portones-automatizacion",
    title: "Portones y Automatización",
    description:
      "Fabricamos e instalamos portones automáticos, puertas industriales y estructuras metálicas a medida para residencias, condominios y empresas en Ecuador.",
    iconName: "DoorOpen",
    href: "/servicios/portones-automatizacion",
    cardCount: 3,
    cardCountLabel: "soluciones disponibles",
    image: "/images/portones-index.webp",
  },
  {
    slug: "ingenieria-electrica",
    title: "Ingeniería Eléctrica",
    description:
      "Ejecutamos proyectos de ingeniería eléctrica: diseño de instalaciones, redes de voz y datos, tableros eléctricos y fibra óptica para proyectos de cualquier escala.",
    iconName: "Zap",
    href: "/servicios/ingenieria-electrica",
    cardCount: 4,
    cardCountLabel: "soluciones disponibles",
    image: "/images/ingelectrica.webp",
  },
  {
    slug: "software-ti",
    title: "Software y TI",
    description:
      "Desarrollamos software a medida e integraciones tecnológicas para control de accesos, gestión de personal y visitas, con integración RFID y biometría.",
    iconName: "Code2",
    href: "/servicios/software-ti",
    cardCount: 5,
    cardCountLabel: "soluciones disponibles",
    image: "/images/softwaresolution.webp",
  },
  {
    slug: "soporte-tecnico",
    title: "Soporte Técnico",
    description:
      "Mantenimiento preventivo y correctivo de todos los sistemas instalados por DLC Tecnológica, con SLAs garantizados y soporte remoto sin necesidad de desplazamiento.",
    iconName: "Wrench",
    href: "/servicios/soporte-tecnico",
    cardCount: 1,
    cardCountLabel: "soluciones disponibles",
    image: "/images/edificio-dlc.webp",
  },
];

// ── Datos completos de la página Seguridad Electrónica ─────────────────────
export const seguridadElectronicaData: CategoriaData = {
  slug: "seguridad-electronica",
  title: "Seguridad Electrónica",
  eyebrow: "Protección Integral",
  description:
    "Diseñamos e instalamos sistemas integrales de seguridad electrónica en Quito y Ecuador: control de incendios, control de accesos, alarmas perimetrales y videovigilancia CCTV con tecnología certificada.",
  targetAudience:
    "Residencias, edificios corporativos, centros comerciales, hospitales, bodegas industriales y cualquier instalación que requiera protección electrónica completa en Ecuador.",
  seoCategory: "Seguridad Electrónica",
  seoParagraphs: [
    "La seguridad electrónica moderna no se limita a una sola solución: es la combinación de múltiples capas de protección que trabajan de forma coordinada. En DLC Tecnológica diseñamos sistemas integrales que cubren la detección de incendios, el control de quién entra y sale, las alarmas perimetrales y la videovigilancia en circuito cerrado, todo gestionado desde una sola empresa en Quito y todo Ecuador.",
    "Trabajamos con instituciones educativas, centros de salud, conjuntos residenciales, industrias y empresas de todos los tamaños. Cada proyecto comienza con un levantamiento técnico del espacio para identificar vulnerabilidades, definir zonas de riesgo y diseñar un sistema a medida — nunca soluciones genéricas de catálogo.",
    "Nuestros técnicos están certificados en las principales marcas del mercado y en las normativas vigentes del Cuerpo de Bomberos y los estándares NFPA. El resultado: instalaciones que pasan inspecciones, generan confianza y protegen lo que más importa.",
  ],
  keyStats: [
    { value: "+500", label: "Sistemas instalados" },
    { value: "4", label: "Especialidades de seguridad" },
    { value: "24h", label: "Soporte post-instalación" },
  ],
  mainImage: "/images/equipoinstalando.webp",
  subservices: [
    {
      slug: "control-incendios",
      title: "Control de Incendios",
      description:
        "Sistemas integrales de detección, alarma y extinción de incendios certificados por el Cuerpo de Bomberos del Ecuador, con detectores de humo, rociadores y paneles inteligentes.",
      iconName: "Flame",
      image: "/images/controlincendio.webp",
      features: [
        "Detectores de humo iónico, fotoeléctrico y de calor certificados",
        "Sistemas de extinción por rociadores (Sprinklers) NFPA",
        "Panel de control inteligente con supervisión por zona",
        "Extintores portátiles clase A, B, C y K con mantenimiento",
        "Documentación técnica para inspección del Cuerpo de Bomberos",
        "Interconexión con sistemas de evacuación de emergencia",
      ],
    },
    {
      slug: "control-accesos",
      title: "Control de Accesos",
      description:
        "Soluciones biométricas, RFID y de reconocimiento facial para gestionar quién entra y cuándo, desde una sola puerta hasta cientos de puntos en múltiples sedes.",
      iconName: "Fingerprint",
      image: "/images/controlacceso.webp",
      features: [
        "Lectores biométricos: huella dactilar, facial y tarjeta RFID",
        "Gestión centralizada de hasta 100.000+ usuarios registrados",
        "Torniquetes de trípode y bayas para accesos de alto tráfico",
        "Videoporteros IP con apertura remota desde smartphone",
        "Software web multi-sede con reportes y auditoría completa",
        "Integración con sistemas de nómina, ERP y RRHH",
      ],
    },
    {
      slug: "alarmas",
      title: "Alarmas de Seguridad",
      description:
        "Protección perimetral para hogares y comercios: sensores de intrusión, cercos eléctricos, botón de pánico y notificación inmediata al propietario con monitoreo 24/7 opcional.",
      iconName: "Bell",
      image: "/images/alarma.webp",
      features: [
        "Sensores de intrusión alámbricos e inalámbricos para puertas y ventanas",
        "Sensores de movimiento PIR de doble tecnología anti-mascotas",
        "Cercos eléctricos perimetrales certificados con energizador",
        "Botón de pánico inalámbrico portátil para cualquier emergencia",
        "Central con batería de respaldo de hasta 12 horas",
        "Notificación inmediata por app y monitoreo 24/7 opcional",
      ],
    },
    {
      slug: "cctv",
      title: "CCTV — Videovigilancia",
      description:
        "Sistemas profesionales de videovigilancia en alta definición 4K: cámaras analógicas, IP, inalámbricas, GSM y con inteligencia artificial para monitoreo continuo.",
      iconName: "Camera",
      image: "/images/equipoinstalando.webp",
      features: [
        "Resolución hasta 8 MP (4K Ultra HD) en todas las tecnologías",
        "Cámaras analógicas, IP, WiFi, 4G/GSM y con IA embebida",
        "DVR/NVR hasta 64 canales con 30 días de grabación continua",
        "Acceso remoto en tiempo real desde cualquier dispositivo",
        "Reconocimiento facial y lectura de placas vehiculares (LPR)",
        "Diseño de plano de cobertura con visita técnica gratuita",
      ],
    },
  ],
  highlight: {
    label: "Solución Integral: Un solo proveedor, cuatro capas de protección",
    description:
      "DLC Tecnológica diseña e instala todos los sistemas de seguridad electrónica de forma coordinada: incendios, accesos, alarmas y CCTV trabajando juntos bajo una sola gestión técnica y un único punto de contacto para soporte.",
  },
  benefits: [
    {
      title: "Diseño a Medida",
      description:
        "Realizamos un levantamiento técnico previo de cada instalación para identificar vulnerabilidades reales y diseñar un sistema proporcional al riesgo, sin pagar de más por tecnología innecesaria.",
    },
    {
      title: "Cumplimiento Normativo Garantizado",
      description:
        "Todas nuestras instalaciones cumplen con las normativas del Cuerpo de Bomberos del Ecuador, estándares NFPA y requisitos municipales. Te acompañamos en el proceso de inspección y obtención de permisos.",
    },
    {
      title: "Soporte Continuo Post-Instalación",
      description:
        "El mismo equipo que instaló tu sistema lo mantiene. Ofrecemos planes anuales de mantenimiento preventivo, soporte remoto y atención correctiva con tiempos de respuesta garantizados.",
    },
  ],
  faqs: [
    {
      question: "¿Puedo contratar varias soluciones de seguridad con DLC al mismo tiempo?",
      answer:
        "Sí, y es la opción más eficiente. Al contratar múltiples sistemas con DLC — incendios, accesos, alarmas y CCTV — diseñamos la instalación de forma integrada, los sistemas se interconectan y tienes un solo proveedor para soporte. Esto reduce costos y elimina la fricción de coordinar múltiples empresas.",
    },
    {
      question: "¿Realizan visita técnica antes de cotizar?",
      answer:
        "Sí, realizamos una visita técnica gratuita para analizar el espacio, identificar los puntos críticos y dimensionar correctamente el sistema. No enviamos cotizaciones genéricas: cada propuesta refleja las necesidades reales de tu instalación.",
    },
    {
      question: "¿Los sistemas funcionan si se va la electricidad?",
      answer:
        "Todos nuestros sistemas críticos incluyen batería de respaldo: las centrales de alarma operan hasta 12 horas, las cámaras IP con PoE pueden respaldarse con UPS, y los lectores de control de acceso mantienen el estado de las puertas configurado. Además, los sistemas de incendios tienen alimentación redundante.",
    },
    {
      question: "¿Ofrecen mantenimiento después de la instalación?",
      answer:
        "Sí. Ofrecemos contratos anuales de mantenimiento preventivo que incluyen visitas programadas, revisión de equipos, actualización de firmware y atención prioritaria ante incidencias. El soporte post-venta es uno de los diferenciadores más valorados por nuestros clientes.",
    },
  ],
  waMessage: "Hola, me interesa el servicio de Seguridad Electrónica, quisiera más información.",
  indexIconName: "ShieldCheck",
};
