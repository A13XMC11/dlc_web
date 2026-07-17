export type Subcategory = {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image?: string;
  /** CSS object-position for the square hero thumbnail, e.g. "15% center". Defaults to "center". */
  imagePosition?: string;
};

export type ServiceHighlight = {
  label: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type KeyStat = {
  value: string;
  label: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  targetAudience: string;
  seoCategory: string;
  seoParagraphs: string[];
  keyStats: KeyStat[];
  mainImage?: string;
  subcategories: Subcategory[];
  highlight?: ServiceHighlight;
  benefits: Benefit[];
  faqs: Faq[];
  waMessage: string;
  indexIconName: string;
};

export const serviciosData: ServiceData[] = [
  {
    slug: "control-incendios",
    title: "Sistemas de Control de Incendios",
    eyebrow: "Protección Contra Incendios",
    description:
      "Diseñamos e instalamos sistemas integrales de detección, alarma y extinción de incendios en Quito y Ecuador. Protegemos vidas e instalaciones con tecnología certificada, cumpliendo todas las normativas del Cuerpo de Bomberos.",
    targetAudience:
      "Edificios residenciales, centros comerciales, hoteles, hospitales, bodegas industriales y empresas que requieren certificación contra incendios.",
    seoCategory: "Seguridad Electrónica",
    seoParagraphs: [
      "Los incendios en Ecuador representan una de las principales causas de pérdidas materiales y humanas en instalaciones comerciales e industriales. Un sistema de detección temprana puede contener más del 80% de los siniestros antes de que se propaguen. En DLC Tecnológica diseñamos e instalamos sistemas certificados bajo los estándares NFPA y los requisitos del Cuerpo de Bomberos del Ecuador.",
      "Cada instalación comienza con un estudio técnico del espacio: tipo de carga combustible, altura de techos, zonificación y rutas de evacuación. El resultado es un sistema a medida —no un kit genérico— que detecta, alerta y extingue de acuerdo a las características reales de su edificio en Quito y en todo el país.",
      "Acompañamos el proceso completo: diseño, instalación, puesta en marcha, capacitación al personal responsable y emisión de documentación técnica para la inspección del Cuerpo de Bomberos. Con DLC Tecnológica, el permiso de funcionamiento no es un obstáculo, es una formalidad.",
    ],
    keyStats: [
      { value: "+200", label: "Sistemas instalados" },
      { value: "100%", label: "Cumplimiento Bomberos" },
      { value: "24h", label: "Soporte post-instalación" },
    ],
    mainImage: "/images/controlincendio.webp",
    subcategories: [
      {
        slug: "deteccion-alarmas-extintores",
        title: "Detección, Alarmas y Extintores",
        description:
          "Soluciones completas para detectar y extinguir incendios: sistemas de extinción por rociadores (Sprinklers), equipos de extinción activa y extintores portátiles certificados para fuegos clase A, B, C y K.",
        iconName: "BellRing",
        image: "/images/controlincendio.webp",
        imagePosition: "10% center",
        features: [
          "Detectores de humo iónico, fotoeléctrico y óptico",
          "Detectores de calor fijo y diferencial certificados",
          "Sistemas de extinción por rociadores (Sprinklers)",
          "Extintores portátiles clase A, B, C y K",
          "Panel de control inteligente con supervisión por zona",
          "Sirenas y luces estroboscópicas de alarma",
          "Interconexión con sistemas de evacuación de emergencia",
          "Mantenimiento y recarga de extintores programada",
        ],
      },
    ],
    highlight: {
      label: "Producto Destacado: Puerta Cortafuegos",
      description:
        "Barreras físicas de alta resistencia que impiden la propagación del fuego entre sectores del edificio, cumpliendo normativas internacionales de seguridad pasiva contra incendios.",
    },
    benefits: [
      {
        title: "Detección Temprana",
        description:
          "Sensores de humo, calor y gases con paneles de control inteligentes que alertan en tiempo real ante el primer indicio de incendio, antes de que se propague.",
      },
      {
        title: "Cumplimiento Normativo",
        description:
          "Instalaciones diseñadas bajo las normativas vigentes del Cuerpo de Bomberos del Ecuador y estándares NFPA, garantizando permisos de funcionamiento sin contratiempos.",
      },
      {
        title: "Mantenimiento Certificado",
        description:
          "Planes de revisión periódica de detectores, rociadores y extintores que garantizan el funcionamiento óptimo del sistema en todo momento.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de detectores de incendio instalan?",
        answer:
          "Instalamos detectores de humo iónico y fotoeléctrico, detectores de calor fijo y diferencial, detectores de llama y detectores de gases. La elección depende del tipo de ambiente a proteger.",
      },
      {
        question: "¿La instalación cumple con el Cuerpo de Bomberos de Quito?",
        answer:
          "Sí. Todos nuestros sistemas se diseñan bajo las normativas NFPA y los requisitos del Cuerpo de Bomberos del Ecuador. Le acompañamos en el proceso de inspección y obtención de permisos.",
      },
      {
        question: "¿Cada cuánto tiempo se deben revisar los extintores?",
        answer:
          "Los extintores portátiles deben revisarse anualmente y recargarse según el tipo. Ofrecemos planes de mantenimiento preventivo que garantizan su operatividad en todo momento.",
      },
      {
        question: "¿Cuánto tiempo toma una instalación completa?",
        answer:
          "Depende del tamaño de la instalación. Un local comercial pequeño puede completarse en 1-2 días. Proyectos en edificios de varios pisos se planifican en fases y pueden tomar entre 1 y 4 semanas.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Control de Incendios, quisiera más información.",
    indexIconName: "Flame",
  },

  {
    slug: "control-accesos",
    title: "Control de Accesos",
    eyebrow: "Gestión de Accesos Avanzada",
    description:
      "Implementamos sistemas de control de acceso para instituciones educativas, empresas, gimnasios y espacios de alto tráfico en Ecuador. Tecnología biométrica, RFID y reconocimiento facial para gestionar quién entra y cuándo.",
    targetAudience:
      "Universidades, colegios, gimnasios, edificios corporativos, condominios y cualquier instalación que requiera controlar el acceso de personas o vehículos.",
    seoCategory: "Seguridad Electrónica",
    seoParagraphs: [
      "El control de accesos moderno es mucho más que una cerradura electrónica. Es la capa de seguridad que define quién puede ingresar a cada espacio, en qué horario y con qué credencial, dejando un registro auditado de cada evento. En DLC Tecnológica hemos implementado sistemas para instituciones con más de 50,000 usuarios activos en Ecuador.",
      "Desde torniquetes para universidades de alto tráfico hasta videoporteros IP para conjuntos residenciales, cada solución se diseña según el volumen de personas, los puntos de acceso y las políticas de seguridad del cliente. La plataforma de gestión centralizada permite administrar múltiples sedes desde cualquier dispositivo con conexión a internet.",
      "El sistema se integra con tu plataforma de RRHH, ERP o nómina, eliminando la gestión doble de usuarios. Un solo registro en el sistema actualiza permisos, horarios y credenciales en todos los puntos de acceso de forma simultánea.",
    ],
    keyStats: [
      { value: "+500", label: "Puertas gestionadas" },
      { value: "100k+", label: "Usuarios registrados" },
      { value: "5", label: "Tipos de credencial" },
    ],
    mainImage: "/images/controlacceso.webp",
    subcategories: [
      {
        slug: "acceso-masivo",
        title: "Control de Acceso Masivo",
        description:
          "Sistemas diseñados para universidades, colegios y entidades con alta concurrencia (ej. UDLA), integrando lectores múltiples y gestión centralizada de usuarios.",
        iconName: "Users",
        image: "/images/controlacceso.webp",
        features: [
          "Lectores biométricos: huella dactilar, facial y tarjeta RFID",
          "Gestión centralizada de hasta 100,000+ usuarios registrados",
          "Paneles de control multi-puerta en red",
          "Software de administración web con reportes automáticos",
          "Grupos de acceso y horarios completamente personalizables",
          "Integración con sistemas de nómina y RRHH",
          "Compatibilidad con estándares Wiegand y OSDP",
          "Auditoría completa de todos los eventos de acceso",
        ],
      },
      {
        slug: "video-porteros",
        title: "Porteros y Video Porteros",
        description:
          "Teléfonos con video de portería: videoporteros IP con cámara HD y comunicación bidireccional para identificar y autorizar visitas de forma remota desde cualquier dispositivo.",
        iconName: "Video",
        image: "/images/services/video-portero.jpg",
        features: [
          "Videoportero IP con cámara HD 2MP gran angular",
          "Comunicación bidireccional de audio y video en tiempo real",
          "Apertura remota desde smartphone (Android e iOS)",
          "Registro fotográfico de visitas con fecha y hora",
          "Integración nativa con sistema de control de accesos",
          "Visión nocturna por infrarrojo para uso 24/7",
          "Compatibilidad con múltiples monitores interiores",
          "Protección para exterior con clasificación IP54",
        ],
      },
      {
        slug: "control-flujo",
        title: "Control de Flujo",
        description:
          "Control físico del paso de personas mediante torniquetes de trípode y bayas de alta resistencia para accesos de alta concurrencia.",
        iconName: "GitMerge",
        image: "/images/services/control-flujo.jpg",
        features: [
          "Torniquetes de trípode para accesos peatonales de alto tráfico",
          "Bayas motorizadas bidireccionales de alta resistencia",
          "Integración con lectores biométricos y RFID",
          "Control de dirección: solo entrada, solo salida o ambidireccional",
          "Contador de personas en tiempo real por acceso",
          "Apertura de emergencia automática ante corte de luz",
          "Acabado en acero inoxidable o pintura electrostática",
          "Capacidad de hasta 2,000+ personas por hora",
        ],
      },
      {
        slug: "antenas-rfid",
        title: "Antenas RFID",
        description:
          "Lectura automática de credenciales RFID de largo alcance para control de acceso vehicular y peatonal sin contacto, compatible con tarjetas, llaveros y stickers.",
        iconName: "Radio",
        image: "/images/services/antena-rfid.jpg",
        features: [
          "Lectura de largo alcance hasta 10 metros sin detener la marcha",
          "Compatible con tarjetas ISO 14443/15693, llaveros y stickers",
          "Identificación de vehículos en movimiento (Hands-Free)",
          "Tiempo de lectura inferior a 100ms por credencial",
          "Integración con barreras vehiculares y plumas de parqueo",
          "Software de control con registro de placas y usuarios",
          "Instalación discreta en entradas y salidas vehiculares",
          "Configuración multi-antena para mayor cobertura",
        ],
      },
      {
        slug: "software-accesos",
        title: "Software de Control de Accesos y Visitas",
        description:
          "Plataforma centralizada para gestión de accesos, registro de visitantes, generación de reportes y control de horarios del personal con trazabilidad completa.",
        iconName: "Monitor",
        image: "/images/services/software-accesos.jpg",
        features: [
          "Panel de administración web multi-sede desde cualquier navegador",
          "Registro digital de visitantes con captura de foto",
          "Control de horarios y grupos de acceso personalizables",
          "Generación de reportes y auditoría de eventos por fecha",
          "Pre-autorización de visitas por correo electrónico",
          "Integración API con sistemas ERP, nómina y RRHH",
          "Alertas en tiempo real por eventos de seguridad críticos",
          "Exportación de datos a Excel, PDF o CSV",
        ],
      },
    ],
    highlight: {
      label: "Caso de Uso Destacado: Reconocimiento Facial en GYM",
      description:
        "Implementación de acceso por reconocimiento facial en centros deportivos: ingreso sin contacto, control de membresías activas y registro automático de asistencia sin necesidad de tarjetas ni códigos.",
    },
    benefits: [
      {
        title: "Control Total en Tiempo Real",
        description:
          "Gestión centralizada de quién entra y sale, con registros de eventos, alertas instantáneas y reportes automáticos disponibles desde cualquier dispositivo.",
      },
      {
        title: "Escalabilidad sin Límites",
        description:
          "Sistemas que crecen con tu organización: desde una sola puerta hasta cientos de puntos de acceso en múltiples edificios gestionados desde una sola plataforma.",
      },
      {
        title: "Integración con tu Ecosistema",
        description:
          "Compatible con sistemas de nómina, ERP, CCTV y plataformas de monitoreo. Los datos de acceso alimentan directamente tus procesos de RRHH y seguridad.",
      },
    ],
    faqs: [
      {
        question: "¿El sistema funciona si se va la electricidad?",
        answer:
          "Sí. Todos los equipos incluyen batería de respaldo (UPS integrado o externo). En caso de corte de luz, el sistema puede configurarse para abrir o mantener cerrados los accesos según su política de seguridad.",
      },
      {
        question: "¿Puedo gestionar varios edificios desde un solo sistema?",
        answer:
          "Absolutamente. La plataforma de gestión permite administrar múltiples sedes, grupos de acceso, horarios y usuarios desde un panel web centralizado accesible desde cualquier lugar.",
      },
      {
        question: "¿El reconocimiento facial funciona con lentes o mascarilla?",
        answer:
          "Los equipos de reconocimiento facial que instalamos utilizan algoritmos de última generación con alta precisión incluso con lentes. Para personas con mascarilla, el sistema puede combinarse con verificación de temperatura o credencial RFID.",
      },
      {
        question: "¿Cuántos usuarios puede manejar el sistema?",
        answer:
          "Depende del equipo seleccionado. Los sistemas que instalamos van desde 500 hasta más de 100,000 usuarios registrados. Para instalaciones grandes como universidades, utilizamos soluciones de gestión centralizada sin límite práctico de usuarios.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Control de Accesos, quisiera más información.",
    indexIconName: "Fingerprint",
  },

  {
    slug: "domotica",
    title: "Domótica y Smart Home",
    eyebrow: "Automatización del Hogar",
    description:
      "Convertimos tu hogar o negocio en un espacio inteligente con automatización de iluminación, cortinas, piscinas y control por voz mediante Alexa y Google Home. Domótica profesional en Quito y Ecuador.",
    targetAudience:
      "Propietarios de viviendas, apartamentos, condominios y espacios comerciales que buscan comodidad, ahorro energético y control remoto de su propiedad.",
    seoCategory: "Automatización Inteligente",
    seoParagraphs: [
      "La domótica ha dejado de ser un lujo exclusivo para convertirse en una inversión accesible con retorno medible. La automatización inteligente del hogar o negocio reduce el consumo eléctrico entre un 20% y 40%, mejora la seguridad y eleva significativamente la comodidad y el valor de la propiedad en Quito y en todo Ecuador.",
      "En DLC Tecnológica integramos los principales ecosistemas del mercado: Amazon Alexa, Google Home y Apple HomeKit. Esto significa que no tienes que cambiar los dispositivos que ya usas — los conectamos e integramos en un sistema unificado que responde a tu voz y a tus rutinas diarias.",
      "La instalación no requiere obras mayores. En la mayoría de las viviendas y negocios existentes podemos instalar módulos inteligentes compatibles con el cableado actual, empezando por las áreas prioritarias y expandiendo el sistema gradualmente según tus necesidades.",
    ],
    keyStats: [
      { value: "20-40%", label: "Ahorro energético" },
      { value: "3", label: "Ecosistemas integrados" },
      { value: "1 día", label: "Instalación inicial" },
    ],
    mainImage: "/images/domotica-index.webp",
    subcategories: [
      {
        slug: "automatizacion-inmobiliaria",
        title: "Automatización Inmobiliaria",
        description:
          "Control inteligente de todo el hogar: luces compatibles con Alexa y Google Home, cortinas motorizadas, bombas de piscinas automatizadas y control integral de toda la propiedad desde una sola aplicación.",
        iconName: "Home",
        image: "/images/domotica-index.webp",
        features: [
          "Control de iluminación compatible con Amazon Alexa y Google Home",
          "Cortinas y persianas motorizadas controladas por app o voz",
          "Automatización de bombas de piscina y sistemas de riego",
          "Escenas inteligentes programables: despertar, cine, noche",
          "Control desde iOS y Android en tiempo real desde cualquier lugar",
          "Rutinas automáticas por horario para ahorro energético",
          "Compatible con Amazon Alexa, Google Home y Apple HomeKit",
          "Instalación no invasiva adaptable a hogares y negocios existentes",
        ],
      },
    ],
    benefits: [
      {
        title: "Control desde Cualquier Lugar",
        description:
          "Enciende las luces, baja las cortinas o activa la bomba de piscina desde tu smartphone, estés donde estés. La aplicación funciona en iOS y Android con respuesta en tiempo real.",
      },
      {
        title: "Ahorro Energético Medible",
        description:
          "Las rutinas automáticas de iluminación y climatización reducen el consumo eléctrico entre un 20% y 40%, apagando dispositivos cuando no hay presencia y optimizando el uso de energía.",
      },
      {
        title: "Compatible con tu Ecosistema",
        description:
          "Integramos Amazon Alexa, Google Home y Apple HomeKit según tu preferencia. El sistema es agnóstico: funciona con los dispositivos que ya tienes y se expande cuando quieras.",
      },
    ],
    faqs: [
      {
        question: "¿Necesito renovar toda la instalación eléctrica de mi casa?",
        answer:
          "No necesariamente. Evaluamos tu instalación eléctrica actual y en la mayoría de los casos podemos instalar módulos inteligentes compatibles sin necesidad de reemplazar el cableado existente.",
      },
      {
        question: "¿Qué pasa si no hay internet en casa?",
        answer:
          "El sistema puede configurarse para funcionar en red local (LAN) sin depender de internet. Las funciones de control remoto requieren conexión, pero las automatizaciones programadas siguen funcionando localmente.",
      },
      {
        question: "¿Puedo empezar con poco y ampliar después?",
        answer:
          "Sí, es una de las ventajas del sistema. Puedes comenzar automatizando una habitación o el sistema de luces, y expandir progresivamente a toda la vivienda sin necesidad de cambiar el controlador central.",
      },
      {
        question: "¿Funciona con Alexa y Google al mismo tiempo?",
        answer:
          "Sí. Nuestras instalaciones son compatibles con múltiples asistentes de voz de forma simultánea. Puedes usar Alexa en la sala y Google en la cocina, todos controlando el mismo sistema.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Domótica, quisiera más información.",
    indexIconName: "Home",
  },

  {
    slug: "alarmas",
    title: "Alarmas",
    eyebrow: "Protección Comercial y del Hogar",
    description:
      "Instalamos sistemas de alarma de seguridad para hogares y comercios en Quito y Ecuador. Detección perimetral, sensores de movimiento y calor, cercos eléctricos y botón de pánico con alertas inmediatas.",
    targetAudience:
      "Hogares, locales comerciales, oficinas, bodegas y cualquier espacio que requiera protección contra robos e intrusiones en Ecuador.",
    seoCategory: "Seguridad Electrónica",
    seoParagraphs: [
      "Los hogares y comercios con sistemas de alarma visibles tienen hasta un 70% menos de probabilidades de sufrir un intento de robo. La presencia de sensores, sirenas y cercos eléctricos actúa como el primer y más efectivo disuasor. En DLC Tecnológica diseñamos sistemas de alarma adaptados al tamaño y las vulnerabilidades específicas de cada propiedad en Quito y Ecuador.",
      "Realizamos un levantamiento técnico previo para identificar los puntos de entrada, las zonas de mayor riesgo y la tecnología óptima para cada caso: sistemas alámbricos para instalaciones permanentes, inalámbricos para espacios donde no se puede cablear, o híbridos para mayor flexibilidad.",
      "Cada instalación incluye configuración de notificaciones en tiempo real, capacitación al propietario y, si lo desea, integración con una central de monitoreo certificada que coordina con la policía o guardianía ante una activación real.",
    ],
    keyStats: [
      { value: "70%", label: "Menos riesgo de robo" },
      { value: "12h", label: "Batería de respaldo" },
      { value: "10", label: "Contactos de alerta" },
    ],
    mainImage: "/images/alarma.webp",
    subcategories: [
      {
        slug: "alarmas-robos",
        title: "Alarmas contra Robos y Asaltos",
        description:
          "Soluciones alámbicas e inalámbricas para protección integral: sensores de intrusión en puertas y ventanas, sensores de movimiento PIR, sensores de calor, botón de pánico, cercos eléctricos perimetrales y cobertura total para cualquier espacio.",
        iconName: "ShieldAlert",
        image: "/images/alarma.webp",
        imagePosition: "75% center",
        features: [
          "Sensores de intrusión alámbricos e inalámbricos para puertas y ventanas",
          "Sensores de movimiento PIR de doble tecnología anti-mascotas",
          "Sensores de rotura de vidrio y vibración de alta sensibilidad",
          "Cercos eléctricos perimetrales certificados con energizador",
          "Botón de pánico inalámbrico portátil para cualquier emergencia",
          "Central de alarma con batería de respaldo de hasta 12 horas",
          "Sirena exterior con luz estroboscópica de alta visibilidad",
          "Notificación inmediata al teléfono del propietario por app",
        ],
      },
    ],
    benefits: [
      {
        title: "Alerta Instantánea",
        description:
          "Cuando se activa la alarma, recibes una notificación inmediata en tu teléfono. Puedes configurar hasta 10 contactos de emergencia para que todos sean alertados de forma simultánea.",
      },
      {
        title: "Disuasión Visible",
        description:
          "Los cercos eléctricos y las sirenas exteriores tienen un efecto disuasorio comprobado. La presencia visual del sistema reduce significativamente el riesgo de intrusión antes de que ocurra.",
      },
      {
        title: "Solución a tu Medida",
        description:
          "Diseñamos el sistema según el tamaño y las características de tu propiedad. Desde una alarma básica con 4 zonas hasta un sistema avanzado con decenas de sensores y monitoreo centralizado.",
      },
    ],
    faqs: [
      {
        question: "¿La alarma inalámbrica puede ser saboteada cortando cables?",
        answer:
          "No. Los sistemas inalámbricos no dependen de cables para transmitir señales entre sensores y la central. Adicionalmente, la central incluye batería de respaldo para funcionar sin electricidad hasta 12 horas.",
      },
      {
        question: "¿Incluyen monitoreo 24/7?",
        answer:
          "Sí, ofrecemos integración con centrales de monitoreo certificadas que verifican la alarma y coordinan con la policía o guardianía. También configuramos notificaciones directas al propietario sin costo de monitoreo mensual.",
      },
      {
        question: "¿El cerco eléctrico es peligroso para personas o mascotas?",
        answer:
          "No. Los cercos eléctricos que instalamos generan una descarga de alta tensión pero bajo amperaje: produce una sensación dolorosa que disuade, pero no causa daño permanente a personas ni animales.",
      },
      {
        question: "¿Qué ocurre si hay una falsa alarma?",
        answer:
          "El sistema permite configurar retardos de entrada y salida para evitar falsas alarmas al ingresar con código. Los sensores PIR de doble tecnología reducen activaciones por mascotas. En caso de activación accidental, se puede cancelar con código en el teclado.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Alarmas de Seguridad, quisiera más información.",
    indexIconName: "Bell",
  },

  {
    slug: "cctv",
    title: "CCTV — Videovigilancia",
    eyebrow: "Circuito Cerrado de Televisión",
    description:
      "Instalamos sistemas de videovigilancia CCTV profesional en Quito y Ecuador: cámaras analógicas, IP, inalámbricas, GSM y con inteligencia artificial para monitoreo 24/7 de residencias, comercios e industrias.",
    targetAudience:
      "Hogares, locales comerciales, empresas, condominios, parqueaderos, industrias y cualquier espacio que requiera videovigilancia continua en Ecuador.",
    seoCategory: "Seguridad Electrónica",
    seoParagraphs: [
      "La videovigilancia profesional es el sistema de seguridad con mayor impacto disuasorio y el único que proporciona evidencia verificable ante autoridades y compañías de seguros. En DLC Tecnológica instalamos sistemas CCTV desde 2 hasta 64 cámaras en alta definición 4K, con grabación continua y acceso remoto desde cualquier dispositivo en Quito y Ecuador.",
      "Nuestro catálogo cubre todas las tecnologías disponibles: cámaras analógicas para actualizaciones de bajo costo, cámaras IP sobre red estructurada, cámaras inalámbricas WiFi de rápida instalación, cámaras 4G/GSM para zonas sin conectividad fija y cámaras con inteligencia artificial para detección facial y reconocimiento de placas.",
      "Cada proyecto comienza con una visita técnica gratuita donde diseñamos el plano de cobertura óptimo para que no quede ningún punto ciego en las zonas críticas. La instalación incluye DVR/NVR, cableado, configuración de acceso remoto y capacitación al personal.",
    ],
    keyStats: [
      { value: "4K", label: "Resolución máxima" },
      { value: "30 días", label: "Grabación continua" },
      { value: "64", label: "Cámaras por sistema" },
    ],
    mainImage: "/images/equipoinstalando.webp",
    subcategories: [
      {
        slug: "camaras-analogas",
        title: "Cámaras Análogas",
        description:
          "Sistemas HDCVI, AHD y TVI de alta definición hasta 8 MP, compatibles con infraestructura existente. Ideal para actualizaciones de sistemas analógicos sin cambiar todo el cableado.",
        iconName: "Camera",
        image: "/images/analogas.webp",
        imagePosition: "15% center",
        features: [
          "Resolución HDCVI, AHD y TVI de hasta 8 MP (4K Ultra HD)",
          "Compatible con cableado coaxial existente sin obras adicionales",
          "DVR hasta 32 canales de grabación simultánea en HD",
          "Visión nocturna infrarroja hasta 40 metros de alcance",
          "Compresión H.265+ para máximo ahorro de almacenamiento",
          "Acceso remoto por app móvil y portal web 24/7",
          "Detección de movimiento con alertas configurables",
          "Ideal para modernizar sistemas analógicos sin reemplazar cableado",
        ],
      },
      {
        slug: "camaras-inalambricas",
        title: "Cámaras Inalámbricas",
        description:
          "Cámaras WiFi de interior y exterior con instalación ágil, grabación en la nube y acceso remoto desde cualquier smartphone. Sin obras, sin cableado complejo.",
        iconName: "Wifi",
        image: "/images/inalambrica.webp",
        imagePosition: "80% center",
        features: [
          "Conectividad WiFi dual band 2.4/5GHz de alta estabilidad",
          "Resolución 2K-4K con lente gran angular de 120°",
          "Almacenamiento en la nube o tarjeta microSD local",
          "Detección de movimiento inteligente con alerta por app",
          "Instalación en minutos sin obra ni cableado complejo",
          "Visión nocturna a color Starlight en ambientes con poca luz",
          "Compatible con sistemas de alarma y domótica existentes",
          "Ideal para residencias, oficinas pequeñas y locales comerciales",
        ],
      },
      {
        slug: "camaras-ip",
        title: "Cámaras IP",
        description:
          "Videovigilancia IP de alta resolución sobre red estructurada, con alimentación PoE, zoom PTZ motorizado y visualización remota en tiempo real desde cualquier dispositivo.",
        iconName: "Globe",
        image: "/images/camaraip.webp",
        features: [
          "Resolución hasta 8 MP (4K) sobre red IP estructurada Cat 6",
          "Alimentación Power over Ethernet (PoE) sin cableado adicional",
          "Zoom PTZ motorizado con control remoto de paneo y tilt",
          "NVR de alta capacidad para hasta 64 canales simultáneos",
          "Visualización en tiempo real desde cualquier dispositivo",
          "Grabación inteligente H.265 con detección por zonas",
          "Integración con plataformas VMS de terceros (Milestone, Genetec)",
          "Solución profesional para instalaciones corporativas e industriales",
        ],
      },
      {
        slug: "camaras-gsm",
        title: "Cámaras GSM (chip de celular)",
        description:
          "Cámaras con chip 4G/LTE integrado para zonas sin internet o electricidad permanente. Funcionan con batería de respaldo autónoma. Alertas por movimiento y acceso remoto en tiempo real.",
        iconName: "Signal",
        image: "/images/chipcamara.webp",
        features: [
          "Chip 4G/LTE integrado: no requiere internet fijo ni cableado",
          "Panel solar o batería autónoma de larga duración recargable",
          "Alertas de movimiento con foto o video en tiempo real al celular",
          "Ideal para terrenos rurales, fincas y zonas remotas",
          "Acceso remoto desde cualquier lugar del mundo por app",
          "Instalación rápida en menos de 30 minutos sin infraestructura",
          "Configuración por SMS o aplicación móvil intuitiva",
          "Sin costos de tendido de red ni infraestructura eléctrica",
        ],
      },
      {
        slug: "camaras-ia",
        title: "Cámaras con Inteligencia Artificial",
        description:
          "Detección facial, reconocimiento de placas vehiculares, conteo de personas y análisis de comportamiento con IA embebida. Reduce falsas alarmas y genera inteligencia operativa.",
        iconName: "Cpu",
        image: "/images/services/camara-ia-fixed.jpg",
        features: [
          "Reconocimiento facial en tiempo real con IA embebida",
          "Lectura automática de placas vehiculares LPR/ALPR",
          "Conteo de personas y análisis de flujo de afluencia",
          "Detección de intrusión en zonas delimitadas virtualmente",
          "Alertas inteligentes con baja tasa de falsas alarmas",
          "Integración directa con control de accesos y sistemas de alarma",
          "Dashboard analítico con estadísticas y reportes visuales",
          "Almacenamiento de metadatos para búsqueda forense rápida",
        ],
      },
    ],
    benefits: [
      {
        title: "Acceso Remoto en Tiempo Real",
        description:
          "Ve las cámaras de tu negocio o casa desde tu teléfono en cualquier momento. Recibe alertas con foto o video cuando se detecte movimiento en zonas configuradas.",
      },
      {
        title: "Grabación Continua e Historial",
        description:
          "DVR/NVR con almacenamiento local de hasta 30 días de grabación continua en alta definición. Posibilidad de respaldo en la nube para acceso al historial desde cualquier lugar.",
      },
      {
        title: "Disuasión y Evidencia Legal",
        description:
          "Las cámaras visibles reducen la incidencia de robos y vandalismo. En caso de incidente, las grabaciones en HD sirven como evidencia legal ante autoridades y seguros.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas cámaras necesito para mi local?",
        answer:
          "Depende del tamaño y la distribución del espacio. Realizamos una visita técnica gratuita para diseñar el plano de cobertura óptimo, garantizando que no queden puntos ciegos en las zonas críticas.",
      },
      {
        question: "¿Puedo ver las cámaras desde mi celular fuera del país?",
        answer:
          "Sí. Con conexión a internet, puedes acceder a las cámaras desde cualquier parte del mundo mediante la aplicación móvil o el portal web, con video en tiempo real o grabaciones históricas.",
      },
      {
        question: "¿Qué resolución tienen las cámaras que instalan?",
        answer:
          "Trabajamos con cámaras desde 2 MP (Full HD) hasta 8 MP (4K Ultra HD) según el requerimiento. Para identificación de personas a distancia recomendamos mínimo 4 MP con lente de largo alcance.",
      },
      {
        question: "¿Las cámaras funcionan de noche?",
        answer:
          "Sí. Todas las cámaras que instalamos incluyen visión nocturna por infrarrojo o tecnología de color nocturno (Starlight/ColorVu), que captura imágenes a color incluso con muy poca luz.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Videovigilancia CCTV, quisiera más información.",
    indexIconName: "Camera",
  },

  {
    slug: "portones-automatizacion",
    title: "Portones y Automatización – Metalmecánica",
    eyebrow: "Accesos Automatizados",
    description:
      "Fabricamos e instalamos portones automáticos, puertas industriales y estructuras metálicas en Quito y Ecuador. Soluciones metalmecánicas a medida para residencias, condominios y empresas.",
    targetAudience:
      "Residencias, condominios, parqueaderos, industrias, bodegas y empresas que requieren control automatizado de accesos vehiculares o soluciones metalmecánicas.",
    seoCategory: "Automatización y Metalmecánica",
    seoParagraphs: [
      "La automatización de accesos vehiculares combina seguridad, comodidad y valor estético para cualquier propiedad. Un portón automatizado de calidad protege el perímetro, reduce la necesidad de personal de guardia y eleva la percepción de valor de la propiedad de forma inmediata.",
      "En DLC Tecnológica fabricamos e instalamos: somos uno de los pocos proveedores en Ecuador con taller metalmecánico propio. Esto nos permite diseñar y construir portones completamente a medida —no kits prefabricados de importación— con acabados en hierro forjado, tubo estructural o lámina galvanizada según el diseño del cliente.",
      "Integramos los motores automáticos con sistemas RFID, videoportero, control por app y sensor de presencia anti-aplastamiento certificado. El resultado es un acceso inteligente, seguro y estéticamente integrado con la arquitectura de cada propiedad en Quito y Ecuador.",
    ],
    keyStats: [
      { value: "5-10", label: "Días de fabricación" },
      { value: "50+", label: "Ciclos diarios soportados" },
      { value: "2 años", label: "Garantía de motor" },
    ],
    mainImage: "/images/portones-index.webp",
    subcategories: [
      {
        slug: "puertas-vehiculares",
        title: "Puertas de Acceso Vehicular",
        description:
          "Soluciones completas para accesos vehiculares: puertas corredizas para alto tráfico, basculantes para espacios reducidos, segmentadas industriales importadas, batientes de una o dos hojas y pérgolas bioclimáticas con lamas motorizadas.",
        iconName: "Move",
        image: "/images/portones-index.webp",
        features: [
          "Puertas corredizas motorizadas para alto tráfico vehicular",
          "Puertas basculantes optimizadas para espacios reducidos",
          "Puertas seccionales industriales importadas de alta durabilidad",
          "Puertas batientes de una o dos hojas con motor integrado",
          "Pérgolas bioclimáticas con lamas motorizadas para exteriores",
          "Control remoto incluido, apertura por app, RFID o videoportero",
          "Sensor de presencia anti-aplastamiento homologado",
          "Batería de respaldo para funcionamiento sin electricidad",
        ],
      },
      {
        slug: "puertas-cortafuegos",
        title: "Puertas Cortafuegos",
        description:
          "Puertas cortafuegos certificadas con cerraduras antipánico y cierre automático, cumpliendo normativas de evacuación de emergencia y regulaciones del Cuerpo de Bomberos.",
        iconName: "ShieldCheck",
        image: "/images/puertascortafuego.webp",
        features: [
          "Resistencia al fuego certificada de RF30 hasta RF120 minutos",
          "Cerradura antipánico conforme a normativa NFPA y Bomberos",
          "Cierre automático mediante brazo hidráulico regulable",
          "Sellado perimetral intumescente anti-humo en los cuatro lados",
          "Acabados en acero galvanizado, pintado o chapado en madera",
          "Compatibilidad con sistemas de evacuación y control de incendios",
          "Señalización de emergencia e iluminación integrable",
          "Inspección, certificación y documentación para Cuerpo de Bomberos",
        ],
      },
      {
        slug: "estructuras-metalicas",
        title: "Estructuras Metálicas",
        description:
          "Fabricación e instalación de estructuras metálicas a medida: cobertizos, pérgolas, portones decorativos y estructuras industriales con acabado galvanizado o pintura electrostática.",
        iconName: "Layers",
        image: "/images/services/estructuras-metalicas.jpg",
        features: [
          "Fabricación completamente a medida en taller metalmecánico propio",
          "Cobertizos y pérgolas para exteriores residenciales y comerciales",
          "Portones decorativos artísticos en hierro forjado y tubo estructural",
          "Estructuras industriales en acero estructural con cálculo técnico",
          "Acabado galvanizado en caliente o pintura electrostática duradera",
          "Diseño con planos técnicos y memoria de cálculo estructural",
          "Instalación y soldadura certificada directamente en sitio",
          "Garantía en materiales y mano de obra con servicio post-venta",
        ],
      },
    ],
    benefits: [
      {
        title: "Fabricación Propia",
        description:
          "Contamos con taller metalmecánico propio que nos permite fabricar portones y estructuras completamente a medida, con tiempos de entrega más cortos y control total de la calidad.",
      },
      {
        title: "Automatización Inteligente",
        description:
          "Integramos motores de marcas líderes con control remoto, sensor de presencia, apertura por celular y compatibilidad con sistemas RFID o videoportero para un acceso seguro y conveniente.",
      },
      {
        title: "Garantía y Mantenimiento",
        description:
          "Todos los portones e instalaciones incluyen garantía en materiales y mano de obra. Ofrecemos planes de mantenimiento preventivo para asegurar la operatividad a largo plazo.",
      },
    ],
    faqs: [
      {
        question: "¿Fabrican los portones o solo los instalan?",
        answer:
          "Fabricamos e instalamos. Contamos con taller metalmecánico propio donde diseñamos y construimos portones, puertas y estructuras según las medidas y especificaciones de cada cliente.",
      },
      {
        question: "¿Cuánto tiempo tarda la fabricación e instalación de un portón?",
        answer:
          "Para portones residenciales estándar, el proceso completo toma entre 5 y 10 días hábiles desde la medición hasta la instalación. Proyectos industriales o con diseños especiales pueden requerir plazos adicionales.",
      },
      {
        question: "¿El motor funciona sin electricidad?",
        answer:
          "Los motores automáticos incluyen batería de respaldo que permite operar el portón durante cortes eléctricos. También pueden abrirse manualmente con la llave de emergencia incluida.",
      },
      {
        question: "¿Qué tipo de motor recomiendan para uso intensivo?",
        answer:
          "Para accesos de alto tráfico (más de 50 ciclos diarios) recomendamos motores industriales de ciclo continuo con clasificación IP54 o superior, con garantía de fabricante de 2 años.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Portones y Automatización, quisiera más información.",
    indexIconName: "DoorOpen",
  },

  {
    slug: "ingenieria-electrica",
    title: "Ingeniería Eléctrica y Electrónica",
    eyebrow: "Diseño y Construcción Eléctrica",
    description:
      "Ejecutamos proyectos de ingeniería eléctrica en Quito y Ecuador: diseño de instalaciones, redes de voz y datos, tableros eléctricos y fibra óptica para proyectos residenciales, comerciales e industriales.",
    targetAudience:
      "Constructoras, empresas, industrias, hospitales, centros comerciales y propietarios que requieren instalaciones eléctricas certificadas o infraestructura de red de datos.",
    seoCategory: "Ingeniería Eléctrica",
    seoParagraphs: [
      "Una instalación eléctrica deficiente no solo genera riesgos de incendio y electrocución: también produce pérdidas de energía, interrupciones de operación y problemas con permisos municipales. En DLC Tecnológica ejecutamos proyectos de ingeniería eléctrica con diseño técnico firmado por ingeniero calificado, listo para tramitar ante la empresa eléctrica distribuidora y el ARCONEL.",
      "Nuestro alcance cubre el ciclo completo: diseño de planos, instalación física, tableros de distribución, redes de voz y datos Cat 6A certificadas, fibra óptica y entrega de documentación as-built. Trabajamos en proyectos residenciales, comerciales e industriales de cualquier escala en Quito y todo Ecuador.",
      "La infraestructura de datos que diseñamos soporta las demandas actuales y futuras: cableado categoría 6A certificado con equipos FLUKE, WiFi 6 empresarial con cobertura total sin zonas muertas, segmentación por VLANs para máxima seguridad y enlaces de fibra óptica entre edificios o plantas.",
    ],
    keyStats: [
      { value: "Cat 6A", label: "Cableado certificado" },
      { value: "ARCONEL", label: "Certificación oficial" },
      { value: "WiFi 6", label: "Tecnología inalámbrica" },
    ],
    mainImage: "/images/ingelectrica.webp",
    subcategories: [
      {
        slug: "diseno-electrico",
        title: "Diseño Eléctrico e Iluminación",
        description:
          "Proyectos de instalaciones eléctricas residenciales, comerciales e industriales con diseño de iluminación eficiente LED, planos técnicos y certificación ante el ARCONEL.",
        iconName: "Zap",
        image: "/images/iluminacion.webp",
        features: [
          "Diseño de instalaciones eléctricas residenciales, comerciales e industriales",
          "Planos eléctricos con memoria técnica para permisos municipales",
          "Diseño de iluminación eficiente con tecnología LED certificada",
          "Cálculo de cargas y dimensionamiento correcto de conductores",
          "Certificación ante ARCONEL y empresa eléctrica distribuidora",
          "Coordinación técnica con arquitectos y constructoras del proyecto",
          "Supervisión de obra y entrega de planos as-built finales",
          "Diseño de sistemas de puesta a tierra y protección contra rayos",
        ],
      },
      {
        slug: "redes-voz-datos",
        title: "Redes de Voz y Datos",
        description:
          "Infraestructura de conectividad interna: redes inalámbricas WiFi empresarial, enlaces punto a punto y cableado estructurado categoría 6A certificado.",
        iconName: "Network",
        image: "/images/vozydatos.webp",
        features: [
          "Cableado estructurado Cat 6A certificado con equipos FLUKE",
          "Redes WiFi 6 empresarial de alta densidad y baja latencia",
          "Segmentación de red por VLANs para mayor seguridad y rendimiento",
          "Instalación de racks, patch panels y accesorios certificados",
          "Fibra óptica interna entre pisos, salas técnicas y edificios",
          "Puntos de acceso inalámbrico con cobertura total sin zonas muertas",
          "Diseño de topología de red y documentación técnica completa",
          "Diagnóstico, optimización y certificación de redes existentes",
        ],
      },
      {
        slug: "tableros-electricos",
        title: "Tableros Eléctricos",
        description:
          "Montaje y certificación de tableros de distribución residencial e industrial, transferencias automáticas (ATS) y tableros de control con protecciones termomagnéticas y diferenciales.",
        iconName: "LayoutGrid",
        image: "/images/tableros.webp",
        features: [
          "Tableros de distribución residencial e industrial a medida",
          "Transferencias automáticas (ATS) para generadores de emergencia",
          "Tableros de control con PLC para automatización industrial",
          "Protecciones termomagnéticas y diferenciales de alta calidad",
          "Balanceo de cargas y análisis de calidad de energía eléctrica",
          "Instalación de UPS, inversores y sistemas de respaldo energético",
          "Certificación eléctrica con memoria técnica para inspecciones",
          "Mantenimiento preventivo y correctivo de tableros existentes",
        ],
      },
      {
        slug: "fibra-optica",
        title: "Fibra Óptica",
        description:
          "Tendido, fusión y certificación de fibra óptica monomodo y multimodo para enlaces de alta capacidad y baja latencia entre edificios o dentro de instalaciones industriales.",
        iconName: "Cpu",
        image: "/images/fibraoptica.webp",
        features: [
          "Fibra monomodo (OS2) y multimodo (OM3/OM4) según requerimiento",
          "Fusión de empalmes con fusionadora de arco eléctrico de alta precisión",
          "Certificación OTDR completa con reporte técnico de pérdidas",
          "Tendido aéreo autosoportado y subterráneo en canalización",
          "Enlaces de alta velocidad entre edificios en campus universitarios",
          "Backbone de fibra para data centers y salas técnicas",
          "Conectores LC, SC y ST según estándar definido por el cliente",
          "Documentación técnica de planta externa e interna entregada",
        ],
      },
    ],
    benefits: [
      {
        title: "Proyectos con Planos Certificados",
        description:
          "Entregamos planos eléctricos y de red firmados por ingeniero calificado, listos para tramitar permisos municipales y de la empresa eléctrica, evitando observaciones en inspecciones.",
      },
      {
        title: "Red de Datos de Alto Rendimiento",
        description:
          "Diseñamos infraestructuras de red que soportan las demandas actuales y futuras de tu empresa: WiFi 6, cableado categoría 6A certificado y segmentación por VLANs para máxima seguridad.",
      },
      {
        title: "Ahorro Energético desde el Diseño",
        description:
          "Integramos criterios de eficiencia energética desde la etapa de diseño: luminarias LED, control de iluminación por zonas y protecciones adecuadas para reducir el consumo y los costos eléctricos.",
      },
    ],
    faqs: [
      {
        question: "¿Realizan diseño eléctrico para proyectos de construcción nueva?",
        answer:
          "Sí. Participamos desde la etapa de diseño arquitectónico para integrar las instalaciones eléctricas y de datos de forma eficiente. Entregamos planos técnicos compatibles con los requisitos de la empresa eléctrica local.",
      },
      {
        question: "¿El cableado estructurado incluye certificación?",
        answer:
          "Sí. Certificamos cada punto de red con equipos FLUKE o equivalente, entregando reporte de certificación que valida el cumplimiento de la categoría instalada (Cat 6A). Esta certificación la exigen muchos clientes corporativos y licitaciones.",
      },
      {
        question: "¿Pueden instalar fibra óptica entre dos edificios?",
        answer:
          "Sí. Realizamos enlaces de fibra óptica aérea o subterránea entre edificios, con fusión de empalmes y certificación OTDR. Ideal para campus universitarios, conjuntos residenciales o grupos de bodegas.",
      },
      {
        question: "¿Qué es un ATS y cuándo lo necesito?",
        answer:
          "Un ATS (Automatic Transfer Switch) es una transferencia automática que cambia la alimentación eléctrica de la red pública a un generador cuando detecta un corte. Es esencial en hospitales, data centers, hoteles y cualquier instalación que no puede permitirse interrupciones eléctricas.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Ingeniería Eléctrica, quisiera más información.",
    indexIconName: "Zap",
  },

  {
    slug: "soporte-tecnico",
    title: "Soporte y Servicio Técnico",
    eyebrow: "Acompañamiento Continuo",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo de todos los sistemas instalados por DLC Tecnológica en Ecuador. El soporte post-venta y el acompañamiento continuo son uno de nuestros valores más diferenciadores.",
    targetAudience:
      "Clientes de DLC Tecnológica con sistemas de CCTV, alarmas, control de accesos, portones, redes o cualquier instalación que requiera mantenimiento continuo.",
    seoCategory: "Servicio Post-Venta",
    seoParagraphs: [
      "El soporte post-venta es el verdadero diferenciador de DLC Tecnológica. No instalamos y desaparecemos: establecemos relaciones de largo plazo con nuestros clientes, manteniendo sus sistemas de seguridad en operación óptima año tras año en Quito y todo Ecuador.",
      "Contamos con técnicos especializados en cada línea de producto que instalamos: CCTV, alarmas, control de accesos, redes y portones. Esto significa que el mismo equipo que instaló tu sistema es el que lo mantiene — sin curvas de aprendizaje ni diagnósticos interminables ante una falla.",
      "Ofrecemos contratos anuales de mantenimiento preventivo con visitas programadas, soporte remoto con acceso seguro a los sistemas y SLAs personalizados para clientes con infraestructura crítica. El objetivo es que tus sistemas nunca fallen cuando más los necesitas.",
    ],
    keyStats: [
      { value: "SLA", label: "Tiempos garantizados" },
      { value: "Remoto", label: "Soporte sin desplazamiento" },
      { value: "1", label: "Proveedor para todo" },
    ],
    mainImage: "/images/edificio-dlc.webp",
    subcategories: [
      {
        slug: "mantenimiento",
        title: "Mantenimiento de Todos los Servicios",
        description:
          "Acompañamiento continuo — vital para DLC. Mantenimiento preventivo y correctivo de CCTV, alarmas, control de accesos, portones, redes y todos los sistemas instalados, con tiempos de respuesta garantizados y reportes de cada visita.",
        iconName: "Wrench",
        image: "/images/edificio-dlc.webp",
        features: [
          "Mantenimiento preventivo de sistemas CCTV y grabadores DVR/NVR",
          "Revisión y prueba periódica de alarmas, sensores y centrales",
          "Actualización de firmware en equipos de control de accesos",
          "Limpieza, lubricación y ajuste de portones y motores automáticos",
          "Verificación de redes, conectividad y rendimiento de datos",
          "Reportes técnicos detallados de cada visita de mantenimiento",
          "Soporte remoto con acceso seguro a los sistemas del cliente",
          "SLAs personalizados con tiempos de respuesta garantizados",
        ],
      },
    ],
    benefits: [
      {
        title: "Respuesta Rápida Garantizada",
        description:
          "Nuestros técnicos responden a solicitudes de emergencia en el menor tiempo posible. Para clientes con contrato de mantenimiento, establecemos SLAs específicos según la criticidad del sistema.",
      },
      {
        title: "Un Solo Proveedor para Todo",
        description:
          "Si DLC instaló tu sistema de seguridad, redes y portón, un solo proveedor conoce toda tu infraestructura. Esto elimina la fricción de coordinar múltiples empresas y reduce los tiempos de diagnóstico.",
      },
      {
        title: "Mantenimiento Preventivo Programado",
        description:
          "Agendamos visitas periódicas para revisar, limpiar y actualizar tus sistemas antes de que fallen. Esto prolonga la vida útil de los equipos y evita interrupciones inesperadas en tu operación.",
      },
    ],
    faqs: [
      {
        question: "¿Ofrecen soporte técnico remoto?",
        answer:
          "Sí. Muchas incidencias pueden resolverse de forma remota mediante acceso seguro a los sistemas. Esto nos permite dar respuesta inmediata sin necesidad de desplazamiento, ahorrando tiempo al cliente.",
      },
      {
        question: "¿El soporte técnico cubre solo equipos instalados por DLC?",
        answer:
          "Preferentemente sí, ya que conocemos los sistemas que hemos instalado. Sin embargo, evaluamos caso a caso el soporte de sistemas instalados por terceros, especialmente si son marcas con las que trabajamos regularmente.",
      },
      {
        question: "¿Tienen contratos de mantenimiento anuales?",
        answer:
          "Sí. Ofrecemos contratos anuales de mantenimiento preventivo que incluyen visitas programadas, limpieza de equipos, actualización de firmware y atención prioritaria en incidencias correctivas.",
      },
      {
        question: "¿Qué pasa si un equipo instalado por DLC falla en garantía?",
        answer:
          "Los equipos instalados por DLC tienen garantía en mano de obra y gestionamos la garantía de fabricante en caso de fallo del hardware. Cubrimos el diagnóstico, la coordinación con el fabricante y la reinstalación sin costo adicional durante el período de garantía.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Soporte Técnico, quisiera más información.",
    indexIconName: "Wrench",
  },

  {
    slug: "software-ti",
    title: "Software y TI",
    eyebrow: "Soluciones de Software Especializado",
    description:
      "Desarrollamos software a medida e integraciones tecnológicas para control de accesos, gestión de personal y visitas en Ecuador. Soluciones adaptadas a las necesidades específicas de cada empresa.",
    targetAudience:
      "Empresas, instituciones educativas y organizaciones que necesitan software personalizado para gestionar personas, accesos, visitas o integrar sistemas RFID con sus plataformas existentes.",
    seoCategory: "Software Especializado",
    seoParagraphs: [
      "Los sistemas de control de accesos, biometría y RFID generan un volumen de datos que ningún software genérico puede gestionar con la eficiencia que requiere tu operación. En DLC Tecnológica desarrollamos software a medida que se integra directamente con el hardware que instalamos, creando una solución end-to-end sin fisuras en Ecuador.",
      "Nuestras plataformas cubren los principales casos de uso en empresas e instituciones ecuatorianas: control de personal y asistencia con exportación automática a nómina, registro digital de visitantes con pre-autorización y credenciales temporales, y gestión de accesos multi-sede con trazabilidad completa de cada evento.",
      "Trabajamos en sprints cortos con entregables y demos semanales, para que el cliente vea avance desde la primera semana. El software es propiedad del cliente al 100%: el código fuente, la base de datos y la documentación técnica se entregan junto con el sistema terminado.",
    ],
    keyStats: [
      { value: "100%", label: "Código del cliente" },
      { value: "API REST", label: "Integración ERP/nómina" },
      { value: "3-4 sem", label: "Primer módulo listo" },
    ],
    mainImage: "/images/softwaresolution.webp",
    subcategories: [
      {
        slug: "desarrollo-software",
        title: "Desarrollo de Software Especializado",
        description:
          "Aplicaciones a medida para automatización de procesos empresariales con integración a hardware de seguridad, lectores biométricos y sistemas de control de accesos.",
        iconName: "Code2",
        image: "/images/softwaresolution.webp",
        features: [
          "Análisis de requerimientos y diseño UX/UI orientado al usuario",
          "Desarrollo de aplicaciones web y mobile (Android e iOS)",
          "Integración con hardware de seguridad, biometría y RFID",
          "Arquitectura en la nube (AWS, Azure) o servidor local según política",
          "APIs REST para integración limpia con sistemas empresariales",
          "Metodología ágil con entregas y demos semanales al cliente",
          "Pruebas QA exhaustivas antes de cada despliegue a producción",
          "Documentación técnica completa y capacitación al equipo usuario",
        ],
      },
      {
        slug: "integraciones-rfid",
        title: "Integraciones con RFID",
        description:
          "Desarrollo de módulos de integración entre sistemas RFID y plataformas ERP/CRM para automatización de registros de asistencia, inventario y trazabilidad de activos.",
        iconName: "Radio",
        image: "/images/rfid.webp",
        features: [
          "Módulos de integración RFID para plataformas ERP y CRM existentes",
          "Automatización del registro de asistencia sin intervención manual",
          "Control de inventario y trazabilidad de activos en tiempo real",
          "Compatible con lectores RFID de largo y corto alcance de múltiples marcas",
          "Middleware de comunicación entre hardware y software empresarial",
          "Reportes de movimientos con alertas automáticas por anomalías",
          "Sincronización en tiempo real con bases de datos corporativas",
          "Soporte a protocolos UHF, HF y NFC para máxima compatibilidad",
        ],
      },
      {
        slug: "control-personal",
        title: "Control de Personal",
        description:
          "Software de gestión de horarios, asistencia y registros del personal, integrado con biometría y control de acceso físico. Exportación automática a sistemas de nómina.",
        iconName: "Users",
        image: "/images/controlpersonal.webp",
        features: [
          "Gestión completa de horarios, turnos y calendarios del personal",
          "Registro biométrico de asistencia por huella dactilar o reconocimiento facial",
          "Control de horas extras, permisos y ausencias con flujo de aprobación",
          "Exportación automática de datos a sistemas de nómina (SAP, Odoo, etc.)",
          "Dashboard en tiempo real con presencia y estado del personal",
          "Notificaciones automáticas por retrasos, ausencias o irregularidades",
          "Reportes de asistencia por período, departamento o empleado",
          "Integración directa con hardware de control de acceso físico",
        ],
      },
      {
        slug: "control-visitas",
        title: "Control de Visitas",
        description:
          "Sistema digital de registro de visitantes con pre-autorización por correo, captura de foto, impresión de credenciales temporales y reportes de concurrencia en tiempo real.",
        iconName: "UserCheck",
        image: "/images/controlvisitas.webp",
        features: [
          "Registro digital de visitantes con foto y captura de documento",
          "Pre-autorización de visitas enviada por correo electrónico al anfitrión",
          "Impresión automática de credenciales temporales con código QR",
          "Historial completo de visitas filtrable por persona o área visitada",
          "Notificación instantánea al anfitrión al momento del ingreso",
          "Control de acceso a áreas restringidas con validación automática",
          "Reportes de concurrencia y estadísticas por período y zona",
          "Integración con videoportero para ingreso automatizado de visitantes",
        ],
      },
      {
        slug: "control-accesos-sw",
        title: "Control de Accesos",
        description:
          "Plataforma de administración de permisos, grupos de acceso, horarios y zonas restringidas con trazabilidad completa de todos los eventos de entrada y salida.",
        iconName: "Lock",
        image: "/images/controacceso2.webp",
        features: [
          "Panel web de administración multi-sede accesible desde cualquier lugar",
          "Gestión granular de permisos por zona, horario y grupo de usuarios",
          "Trazabilidad completa de todos los eventos de entrada y salida",
          "Bloqueo y desbloqueo remoto de puertas y lectores en tiempo real",
          "Integración nativa con lectores biométricos y antenas RFID",
          "Alertas inmediatas por intentos de acceso no autorizados",
          "Gestión de credenciales digitales, tarjetas y llaveros RFID",
          "Cumplimiento de normativas de seguridad y generación de auditorías",
        ],
      },
    ],
    benefits: [
      {
        title: "Hecho a tu Medida",
        description:
          "No adaptamos tu empresa a un software genérico. Desarrollamos la solución específica que tu operación necesita, integrando los procesos y flujos de trabajo que ya tienes establecidos.",
      },
      {
        title: "Integración Total con el Hardware",
        description:
          "Nuestro software se comunica directamente con lectores biométricos, antenas RFID y torniquetes que también instalamos. Una solución end-to-end de un solo proveedor.",
      },
      {
        title: "Reportes e Inteligencia de Datos",
        description:
          "Dashboards en tiempo real, reportes automáticos de asistencia, alertas por anomalías y exportación de datos a Excel, PDF o APIs para conectar con tus sistemas de nómina o ERP.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo toma desarrollar un software a medida?",
        answer:
          "Depende del alcance. Un módulo de control de visitas básico puede estar listo en 3-4 semanas. Un sistema integrado con biometría, RFID y nómina puede tomar 2-4 meses. Trabajamos en sprints para que puedas ver avances desde la primera semana.",
      },
      {
        question: "¿El software funciona en la nube o en servidor local?",
        answer:
          "Ofrecemos ambas opciones. La nube permite acceso desde cualquier lugar y no requiere servidor propio. El servidor local mantiene los datos dentro de la empresa. También ofrecemos soluciones híbridas según tus políticas de seguridad.",
      },
      {
        question: "¿Pueden integrar el sistema con nuestro ERP actual?",
        answer:
          "Sí. Desarrollamos conectores e integraciones con los principales ERPs del mercado (SAP, Odoo, etc.) mediante APIs REST o conexión directa a bases de datos, siempre que el ERP lo permita.",
      },
      {
        question: "¿Qué pasa si necesitamos cambios después de la entrega?",
        answer:
          "El software es tuyo y puedes solicitar modificaciones en cualquier momento. Ofrecemos paquetes de soporte y desarrollo continuo con horas mensuales asignadas para evolucionar el sistema según las necesidades de tu empresa.",
      },
    ],
    waMessage: "Hola, me interesa el servicio de Software y TI, quisiera más información.",
    indexIconName: "Code2",
  },
  {
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
      { value: "4", label: "Especialidades" },
      { value: "24h", label: "Soporte post-instalación" },
    ],
    mainImage: "/images/equipoinstalando.webp",
    subcategories: [
      {
        slug: "control-incendios",
        title: "Control de Incendios",
        description:
          "Sistemas integrales de detección, alarma y extinción de incendios certificados por el Cuerpo de Bomberos del Ecuador, con detectores de humo, rociadores y paneles inteligentes.",
        iconName: "Flame",
        image: "/images/controlincendio.webp",
        imagePosition: "10% center",
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
        imagePosition: "75% center",
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
  },
];
