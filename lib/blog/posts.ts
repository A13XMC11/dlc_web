export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  relatedServiceSlug: string;
  keywords: string[];
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  checklist: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-cctv-quito-empresas",
    title: "Guía para instalar CCTV en empresas de Quito",
    description:
      "Conoce qué evaluar antes de instalar cámaras de seguridad en oficinas, edificios, bodegas y comercios de Quito.",
    category: "Seguridad electrónica",
    readTime: "6 min",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    image: "/images/hero-ai-cctv.webp",
    imageAlt: "Sistema de CCTV con cámaras de seguridad para empresas en Quito",
    relatedServiceSlug: "seguridad-electronica",
    keywords: [
      "CCTV Quito",
      "cámaras de seguridad para empresas",
      "seguridad electrónica Quito",
      "instalación de cámaras Ecuador",
    ],
    intro:
      "Un sistema de CCTV empresarial no debería elegirse solo por cantidad de cámaras. Para que realmente ayude a prevenir pérdidas, controlar accesos y revisar incidentes, debe partir del riesgo del sitio, los puntos críticos y la forma en que opera el negocio.",
    sections: [
      {
        heading: "Empieza por el levantamiento de riesgos",
        body: [
          "Antes de comprar equipos conviene identificar ingresos, perímetros, cajas, bodegas, parqueaderos, recepción, pasillos y zonas con poca visibilidad. Cada punto requiere un tipo de cámara, ángulo, resolución y capacidad nocturna distinta.",
          "También es importante revisar iluminación, conectividad, canalizaciones y respaldo eléctrico. Una cámara bien ubicada con mala energía o red inestable termina generando puntos ciegos operativos.",
        ],
      },
      {
        heading: "Define grabación, monitoreo y acceso remoto",
        body: [
          "La retención de video depende del número de cámaras, resolución, frames por segundo, compresión y capacidad del grabador. Para empresas, el acceso remoto debe configurarse con controles adecuados para proteger la privacidad y evitar accesos no autorizados.",
          "Cuando el sitio tiene varias áreas o sedes, conviene centralizar la administración y dejar perfiles separados para gerencia, seguridad, operaciones y soporte técnico.",
        ],
      },
      {
        heading: "Integra CCTV con otros sistemas",
        body: [
          "El valor del CCTV aumenta cuando se conecta con alarmas, control de accesos, videoporteros o detección perimetral. Así se puede revisar un evento por puerta, usuario, horario o zona sin perder tiempo buscando manualmente.",
          "Esta integración debe planificarse desde el inicio para elegir equipos compatibles y dejar una infraestructura preparada para crecer.",
        ],
      },
    ],
    checklist: [
      "Mapa de puntos críticos y zonas de cobertura.",
      "Cálculo de almacenamiento según días de grabación requeridos.",
      "Revisión de red, energía, UPS y canalización.",
      "Política de usuarios para acceso remoto.",
      "Plan de mantenimiento preventivo y limpieza de lentes.",
    ],
  },
  {
    slug: "control-accesos-condominios-edificios",
    title: "Control de accesos para condominios y edificios",
    description:
      "Aprende cómo combinar tarjetas, biometría, videoporteros y registros de visita para mejorar la seguridad en edificios.",
    category: "Control de accesos",
    readTime: "5 min",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    image: "/images/controlacceso.webp",
    imageAlt: "Control de accesos para edificios y condominios en Ecuador",
    relatedServiceSlug: "seguridad-electronica",
    keywords: [
      "control de accesos Quito",
      "seguridad para condominios",
      "videoporteros Ecuador",
      "registro de visitas edificios",
    ],
    intro:
      "En edificios residenciales y corporativos, el control de accesos debe equilibrar seguridad, rapidez y facilidad de uso. La mejor solución suele mezclar identificación de residentes, gestión de visitantes, apertura remota y trazabilidad de eventos.",
    sections: [
      {
        heading: "No todos los accesos tienen el mismo riesgo",
        body: [
          "Una puerta peatonal, un ingreso vehicular, una recepción y un cuarto técnico requieren reglas distintas. El diseño debe separar accesos públicos, restringidos y de emergencia para no crear bloqueos innecesarios.",
          "También es clave definir horarios, permisos temporales, usuarios administradores y protocolos cuando se pierde una tarjeta o un residente cambia de departamento.",
        ],
      },
      {
        heading: "Visitantes, proveedores y residentes",
        body: [
          "Los visitantes necesitan un flujo rápido, pero registrable. Los proveedores pueden requerir autorizaciones por horario o por zona. Los residentes necesitan una experiencia simple que no dependa de procesos manuales en cada ingreso.",
          "Cuando se combina control de accesos con videoportero y cámaras, el personal de seguridad puede validar mejor quién entra y dejar evidencia de eventos relevantes.",
        ],
      },
      {
        heading: "Mantenimiento y administración",
        body: [
          "Un sistema sin administración ordenada se vuelve difícil de auditar. Es recomendable revisar usuarios activos, tarjetas duplicadas, respaldos, cerraduras, fuentes de energía y reportes de eventos.",
          "La capacitación a administradores y conserjería evita errores cotidianos y mejora la continuidad del sistema.",
        ],
      },
    ],
    checklist: [
      "Clasificación de accesos por nivel de riesgo.",
      "Reglas para residentes, visitas y proveedores.",
      "Integración con cámaras y videoporteros.",
      "Respaldo eléctrico para puertas críticas.",
      "Proceso mensual de depuración de usuarios.",
    ],
  },
  {
    slug: "domotica-ahorro-seguridad-hogar",
    title: "Domótica para ahorrar energía y aumentar seguridad en casa",
    description:
      "Ideas prácticas para automatizar iluminación, accesos, alarmas y energía sin complicar la operación diaria del hogar.",
    category: "Domótica",
    readTime: "5 min",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    image: "/images/domotica-index.webp",
    imageAlt: "Domótica residencial para seguridad y ahorro energético",
    relatedServiceSlug: "domotica",
    keywords: [
      "domótica Quito",
      "smart home Ecuador",
      "automatización residencial",
      "ahorro energético hogar",
    ],
    intro:
      "La domótica funciona mejor cuando resuelve rutinas reales: encender luces por presencia, simular ocupación, controlar accesos, recibir alertas y reducir consumos. El objetivo no es llenar la casa de dispositivos, sino integrar lo necesario de forma estable.",
    sections: [
      {
        heading: "Automatizaciones con impacto real",
        body: [
          "Las mejores primeras automatizaciones suelen ser iluminación exterior, sensores de movimiento, escenas nocturnas, apagado de equipos y control de portones o cerraduras. Son usos visibles, frecuentes y fáciles de medir.",
          "También se puede programar simulación de presencia cuando la familia viaja, combinando luces, horarios y alertas de seguridad.",
        ],
      },
      {
        heading: "Seguridad conectada",
        body: [
          "La domótica puede trabajar junto a alarmas, cámaras, sensores de apertura y videoporteros. Así el usuario recibe alertas más claras y puede revisar qué ocurre antes de tomar una decisión.",
          "Para evitar falsas alarmas, los sensores deben ubicarse correctamente y configurarse según mascotas, horarios y zonas de uso.",
        ],
      },
      {
        heading: "Escalabilidad y soporte",
        body: [
          "Un proyecto residencial debe dejar espacio para crecer. La red Wi-Fi, la calidad de energía, la compatibilidad entre marcas y el respaldo de soporte son tan importantes como los dispositivos visibles.",
          "La instalación profesional ayuda a documentar escenas, usuarios y configuraciones para que el sistema no dependa de una sola persona.",
        ],
      },
    ],
    checklist: [
      "Rutinas prioritarias antes de elegir dispositivos.",
      "Revisión de red Wi-Fi y cobertura del hogar.",
      "Escenas de seguridad, noche, salida y vacaciones.",
      "Integración con cámaras, alarmas o portones.",
      "Documentación de usuarios y configuraciones.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
