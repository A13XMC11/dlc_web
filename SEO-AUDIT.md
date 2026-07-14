# SEO Content Audit
## Sitio: DLC Tecnológica (dlc.com.ec)
### Fecha: 2026-07-13

> Nota metodológica: el sitio aún no está desplegado en producción (el último intento de deploy en Vercel falló en el build — ver historial de sesión), por lo que esta auditoría se realizó mediante **análisis estático del código fuente** (metadata de Next.js, componentes, estructura de headings, imágenes y archivos públicos) en lugar de un crawl en vivo. Recomiendo re-ejecutar un análisis de URL en vivo (Lighthouse / PageSpeed Insights) una vez el sitio esté desplegado.

---

## SEO Health Score: 58/100

El sitio tiene buenos fundamentos de metadata (Next.js Metadata API bien usada en páginas de servicio, canonical tags, Open Graph), pero le faltan piezas críticas para SEO local/técnico: **robots.txt, sitemap.xml, schema.org (LocalBusiness), y title/description dentro de los límites recomendados en la home.**

---

## On-Page SEO Checklist

### Title Tag

**Homepage** (`app/layout.tsx`)
- Status: **Needs Work**
- Actual: `"DLC Tecnológica | Seguridad Electrónica, Domótica y Automatización en Ecuador"`
- Longitud: **77 caracteres** (excede el rango recomendado 50-60; Google lo truncará en el SERP)
- Recomendado: `"DLC Tecnológica | Seguridad Electrónica y Domótica en Ecuador"` (63 caracteres, aún ajustado pero visible casi completo)
- Positivo: incluye marca y keyword principal ("Seguridad Electrónica") cerca del inicio.

**Páginas de servicio** (`app/servicios/[slug]/page.tsx`)
- Status: **Pass**
- Patrón: `"{Servicio} en Quito, Ecuador | DLC Tecnológica"` — buena longitud, keyword local + marca. Ejemplo real: "Videovigilancia CCTV en Quito, Ecuador | DLC Tecnológica" (58 caracteres). ✅

**Índice de servicios** (`app/servicios/page.tsx`)
- Status: Pass — `"Servicios | DLC Tecnológica"` (28 caracteres, algo corto pero correcto; podría aprovechar más espacio con keywords).

### Meta Description

**Homepage**
- Status: **Needs Work**
- Actual: 174 caracteres (excede 150-160, se cortará en el SERP)
- Recomendado: recortar a ~155 caracteres manteniendo CTA implícito, ej.: *"Expertos en CCTV, alarmas, control de accesos, domótica y portones automáticos en Ecuador. Más de 25 años protegiendo hogares y empresas."* (145 caracteres)

**Páginas de servicio**
- Status: Pass — se genera dinámicamente desde `service.description.slice(0, 140)` + sufijo de ubicación. Correcto y escalable, aunque conviene verificar que ningún `slice(0,140)` corte una palabra a la mitad de forma antiestética (revisar visualmente cada una).

### Heading Hierarchy (H1-H6)

- **Homepage**: ✅ Un solo H1 en `Hero.tsx` ("Seguridad y Automatización Premium") — correcto y con buen valor de marca, aunque **no contiene la keyword principal** ("seguridad electrónica"). Oportunidad de mejora.
- **Índice de servicios**: ✅ H1 correcto ("Todos los Servicios") — genérico, podría ser más rico en keywords (ej. "Servicios de Seguridad Electrónica y Automatización").
- **Página de servicio individual** (`ServiceDetail.tsx`): ✅ H1 dinámico con el nombre del servicio — bien.
- ⚠️ **Riesgo de H1 duplicado en `/servicios` sub-rutas**: encontré H1 también en `CotizadorWizard.tsx` — confirmar que no coexista con otro H1 en la misma página renderizada (el cotizador parece ser una página independiente `/cotizador`, así que probablemente está bien, pero vale la pena verificar en runtime).

### Image Optimization

- 12 usos de `<Image>` de Next.js en todo el sitio — bien, usa el componente optimizado (WebP automático, lazy loading por defecto salvo `priority`).
- **Alt text**: 10 de 12 imágenes tienen alt descriptivo. 2 tienen `alt=""` (en `Services.tsx` y `About.tsx`) — **aceptable solo si son puramente decorativas**; si son fotos de instalaciones/equipos reales, deberían tener alt descriptivo con keywords (ej. "Instalación de domótica DLC Tecnológica en Quito").
- Archivos en `public/`: nombres genéricos como `dlc-image-1.jpg`, `dlc-image-5.jpg`, `hero-bg.png` — no son descriptivos para SEO de imágenes (Google Images). Recomendado renombrar a algo como `instalacion-cctv-dlc-quito.jpg` en futuras subidas (no es necesario renombrar los actuales para no romper referencias, pero aplicar la convención de aquí en adelante).

### Internal Linking

- Navbar principal enlaza a anclas de la home (`/#servicios`, etc.) y `NavbarService` enlaza de vuelta con `href="/#section"` — correcto para single-page + sub-páginas.
- Los 9 slugs de servicio (`servicios-data.ts`) generan páginas individuales — buena arquitectura de contenido (pillar `/servicios` → cluster `/servicios/[slug]`).
- **Oportunidad no explotada**: no vi enlaces cruzados entre páginas de servicio relacionadas (ej. desde "CCTV" hacia "Control de Accesos" o "Domótica"). Añadir una sección "Servicios relacionados" al final de cada `ServiceDetail.tsx` mejoraría tiempo en sitio y distribución de link equity.

### URL Structure

- Status: **Pass**
- `/servicios/cctv`, `/servicios/domotica`, `/servicios/control-accesos` — limpias, en minúsculas, con guiones, sin parámetros. Excelente.

---

## Content Quality (E-E-A-T)

| Dimensión | Score | Evidencia |
|---|---|---|
| Experience | Present | "25 AÑOS PROTEGIENDO ECUADOR" en el hero — buena señal, pero no hay casos de estudio ni fotos de proyectos reales con detalle (el componente `Projects.tsx` existe, valdría la pena revisar su contenido en detalle). |
| Expertise | Weak | No hay bios de equipo técnico, certificaciones, ni marcas/fabricantes con los que trabajan (ej. Hikvision, Dahua, Ajax) mencionados en el texto — esto refuerza expertise ante Google y usuarios. |
| Authoritativeness | Weak | No se encontró página "Nosotros"/About dedicada con historia de la empresa, ni menciones de prensa/certificaciones. Testimonials existe (`Testimonials.tsx`) — positivo si son reales y verificables. |
| Trustworthiness | Present | Contacto claro (WhatsApp, teléfono, dirección, horario) en `Contact.tsx`/`Footer.tsx`. Falta: política de privacidad, términos de servicio (no encontrados en el árbol de archivos). |

**Recomendación clave**: agregar una página `/nosotros` (nueva, no toca archivos existentes) con historia, certificaciones, marcas representadas y equipo — impacto directo en E-E-A-T y en conversión.

---

## Keyword Analysis

- **Keyword principal (home)**: "seguridad electrónica Ecuador" — intención comercial/local.
- **Alineación de intención**: correcta — la home es una landing comercial, no un blog informativo.
- Keyword en title: ✅ | en H1: ❌ (H1 usa "Seguridad y Automatización Premium", no la frase exacta) | en primeras 100 palabras: ✅ (subtítulo del Hero) | en meta description: ✅ | en URL: N/A (dominio raíz).
- **Keywords secundarias identificadas en el propio código** (`metadata.keywords`): CCTV, Alarmas de seguridad, Control de accesos, Puertas automáticas Ecuador, Domótica, Smart Home Ecuador, Redes estructuradas, Diseño eléctrico, Energías renovables Ecuador, Motores para portones.
  - ⚠️ Nota: el meta tag `keywords` no tiene peso en rankings de Google desde hace años — no es dañino tenerlo, pero no invertir tiempo ahí. Mejor usarlas como guía para distribuir en H2/H3 y copy de cada página de servicio.
- **Long-tail sin explotar**: "cámaras de seguridad para casa Quito", "instalación de alarmas Quito precio", "empresas de domótica en Ecuador" — buenos candidatos para contenido tipo blog/FAQ si se decide invertir en ese canal.

---

## Technical SEO

| Elemento | Estado |
|---|---|
| `robots.txt` | ❌ **No existe** — Next.js App Router soporta generarlo con `app/robots.ts`. Sin esto, no hay directiva explícita ni referencia al sitemap para los crawlers. |
| `sitemap.xml` | ❌ **No existe** — soportado nativamente con `app/sitemap.ts` en Next.js 15+. Sin sitemap, Google descubre las páginas solo vía enlaces internos (funciona, pero es más lento e ineficiente, especialmente para las 9 páginas de servicio y sub-slugs). |
| Canonical tags | ⚠️ Parcial — presentes en `servicios/[slug]` vía `alternates.canonical`, pero **ausentes en la homepage** (`app/layout.tsx`) y en `/servicios` (índice). Next.js con `metadataBase` resolvería esto automáticamente para todas las páginas si se define una vez en el layout raíz. |
| `robots` meta | ✅ `"index, follow"` presente en homepage. |
| Viewport | ✅ Configurado correctamente (`width=device-width, initial-scale=1`). |
| HTTPS | No verificable aún (sitio no desplegado); Vercel lo provee por defecto una vez el build pase. |
| Mobile-friendly | ✅ Tailwind con clases responsive (`sm:`, `lg:`) usado extensivamente en todos los componentes revisados. |

**Bloqueador actual**: según el historial de la sesión, el último deploy a Vercel falló por un error de build (posible parseo de `tsconfig`/imports). **Hasta que el sitio esté en producción, no puede ser indexado por Google** — esto es más urgente que cualquier optimización de contenido.

---

## Schema Markup (Datos Estructurados)

| Tipo | Aplicable a | Estado |
|---|---|---|
| Organization / LocalBusiness | Homepage | ❌ **Ausente** — para un negocio local ecuatoriano con dirección física y horario, esto es la ganancia más grande y barata disponible. Habilita rich snippets, Google Business Profile linkage, y knowledge panel. |
| Service | Páginas `/servicios/[slug]` | ❌ Ausente |
| FAQ | Ninguna página tiene FAQ visible | ❌ N/A por ahora, pero recomendado agregar FAQs a páginas de servicio |
| BreadcrumbList | `/servicios/[slug]` y `/servicios/[slug]/[subslug]` | ❌ Ausente — hay jerarquía de contenido clara (índice → servicio → subcategoría) que se beneficiaría mucho de breadcrumbs con schema. |
| AggregateRating/Review | `Testimonials.tsx` | ❌ Ausente — si los testimonios son verificables, marcarlos con schema Review puede generar estrellas en el SERP. |

No se encontró ningún `application/ld+json` en el proyecto.

---

## Content Gap Analysis

| Tema faltante | Volumen potencial | Competencia | Tipo de contenido | Prioridad |
|---|---|---|---|---|
| Página "Nosotros" / historia de la empresa | Medio (branded search) | Baja | Página estática | 1 |
| FAQ por servicio (precios estimados, tiempos de instalación, garantías) | Alto (long-tail informacional) | Media | Sección FAQ + schema | 2 |
| Casos de éxito / proyectos con detalle (ya existe `Projects.tsx`, expandir a páginas propias) | Medio | Baja | Página de caso de estudio | 3 |
| Blog técnico (ej. "cómo elegir cámaras CCTV", "diferencia entre alarma cableada e inalámbrica") | Alto | Media-Alta | Blog | 4 |
| Página de precios/paquetes | Alto (intención transaccional) | Media | Página comercial | 2 |

---

## Featured Snippet Opportunities

Ninguna página actual está optimizada para snippets tipo pregunta-respuesta. Si se agregan FAQs a las páginas de servicio (ej. "¿Cuánto cuesta instalar CCTV en Quito?"), estructurarlas como H3 + respuesta de 40-60 palabras inmediatamente debajo, con schema FAQPage, es la vía más rápida para capturar snippets locales.

---

## Internal Linking Opportunities

1. **Servicios relacionados**: agregar 2-3 enlaces cruzados al final de cada `ServiceDetail.tsx` (ej. CCTV → Control de Accesos → Alarmas).
2. **CTA hacia Cotizador**: verificar que cada página de servicio enlace al `/cotizador` (mencionado en memoria de sesión que ya se agregó el botón al navbar móvil — confirmar que también esté en el cuerpo de cada página de servicio, no solo en nav).
3. **Breadcrumbs visibles** (no solo schema) en `/servicios/[slug]` y `[subslug]` — mejora UX y refuerza arquitectura de enlaces internos.

---

## Core Web Vitals

No medible aún sin sitio desplegado (Lighthouse/PSI requieren una URL en vivo). Señales positivas en el código:
- Uso de `next/image` con `priority` en el hero y `placeholder="blur"` — buena práctica para LCP.
- `sizes` configurado correctamente en imágenes responsive.

Riesgo a vigilar una vez desplegado: Framer Motion se usa extensivamente (animaciones `whileInView` en casi todos los componentes) — si el bundle de JS crece mucho, puede afectar FID/INP. Verificar con Lighthouse post-deploy.

---

## Content Strategy Recommendations

1. **Cadencia**: dado que es un sitio de servicios locales (no un blog), priorizar profundidad sobre frecuencia — 1-2 páginas de alto valor (Nosotros, FAQ, Precios) antes que un blog regular.
2. **Tipo de contenido prioritario**: páginas de conversión (Nosotros, FAQ, Precios) > contenido educativo (blog) en esta etapa.
3. **Longitud**: las páginas de servicio actuales son cortas (hero + highlights). Para keywords competitivas como "seguridad electrónica Ecuador", competidores probablemente tienen 800-1500 palabras por página de servicio — considerar expandir con secciones de "cómo funciona", "beneficios", "FAQ".

---

## Prioritized Recommendations

### Critical (Fix Immediately)
1. **Resolver el error de build y desplegar el sitio** — sin esto, nada de lo demás importa; Google no puede indexar un sitio que no existe en producción.
2. **Agregar `app/robots.ts` y `app/sitemap.ts`** (archivos nuevos, no tocan nada existente) — sin sitemap, el descubrimiento de las 9+ páginas de servicio depende 100% del crawling manual de enlaces.
3. **Agregar schema `LocalBusiness`** vía JSON-LD en el layout raíz o un componente nuevo — máximo impacto para negocio local, esfuerzo bajo (un `<script type="application/ld+json">` con nombre, dirección, teléfono, horario, que ya están documentados en `CLAUDE.md`).

### High Priority (This Month)
1. **Acortar title (77→~60 caracteres) y meta description (174→~155 caracteres) de la homepage.**
2. **Definir `metadataBase` + `alternates.canonical` en `app/layout.tsx`** para que todas las páginas (incluida la home y `/servicios` índice) tengan canonical automático.
3. **Agregar 1-2 keywords locales al H1 de la homepage** sin romper el diseño de marca (ej. mantener "Seguridad y Automatización Premium" pero añadir un span con "en Ecuador").

### Medium Priority (This Quarter)
1. Crear página `/nosotros` con historia, certificaciones y marcas de equipos.
2. Agregar sección FAQ (con schema FAQPage) a cada página de servicio.
3. Agregar enlaces internos cruzados entre servicios relacionados.
4. Nombrar descriptivamente las nuevas imágenes que se suban (evitar `dlc-image-N.jpg` genéricos).

### Low Priority (When Resources Allow)
1. Blog técnico con contenido educativo long-tail.
2. Schema Review/AggregateRating sobre testimonios verificados.
3. Página de precios/paquetes con schema Product/Offer si aplica.
