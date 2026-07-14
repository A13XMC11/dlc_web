@AGENTS.md

---

# DLC Tecnológica — Contexto del Proyecto

Sitio web corporativo de **DLC Tecnológica**, empresa ecuatoriana de seguridad electrónica, automatización e ingeniería eléctrica.

**Stack:** Next.js 16.2.9 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · React Icons · Shadcn · Vercel

---

## REGLA PRINCIPAL — No modificar archivos existentes

**NUNCA** toques, refactorices, renombres ni cambies ningún archivo, componente, estilo, fuente, color, efecto visual, animación ni lógica que ya exista en el proyecto.

Tu único trabajo es **AGREGAR archivos nuevos**.

- Si necesitas un componente nuevo, créalo en `components/<feature>/` sin afectar los existentes.
- Si necesitas una página nueva, créala en `app/<ruta>/` sin tocar `app/page.tsx`, `app/layout.tsx` ni `app/globals.css`.

---

## Sistema de diseño (tokens a replicar en archivos nuevos)

> **Actualizado 2026-07-10** a partir de `Manual de marca DLC.pdf` (rebrand completo "DLCtec"). Los valores de abajo son la fuente de verdad actual; sustituyen cualquier referencia previa a rojo de marca (`#cc2936`), fondo `#0a0a0a`/`#141414` u Outfit/Inter.

### Colores
- Fondo principal: `bg-[#01313f]` / `bg-dark-deep` → `#01313f`
- Fondo de tarjetas: `bg-[#0e4956]` / `bg-dark-slate/40` → `#0e4956`
- Cian de marca (CTAs, antes rojo): `text-brand-cyan` / `bg-brand-cyan` / `border-brand-cyan` → `#08b4ff` (hover: `bg-brand-cyan-dark` → `#0090d6`)
- Cian neón (acentos, hovers, glow): `text-cyan-neon` / `border-cyan-neon` / `bg-cyan-neon` → `#0cc0df`
- Secundarios de paleta (degradado teal→cyan del manual): `teal-deep` `#167a85`, `mint` `#5ce1e6`, `navy-ink` `#0f1e2b`
- Texto secundario: `text-slate-400` / `text-[#94a3b8]`
- Bordes: `border-[#242424]` / `border-[#2a2a2a]`
- **Ya no existe rojo de marca** — no reintroducir `brand-red`, `#cc2936` ni `hover:bg-red-700` en archivos nuevos (excepción: indicadores literales como el badge "● REC" de cámara en vivo, que usa rojo semántico, no de marca).

### Tipografía
- Fuente de headings (`h1`–`h6`, forzada globalmente vía CSS en `globals.css`): **League Spartan** (variable `--font-heading`, Google Font)
- Fuente de cuerpo (`font-sans`): **Plus Jakarta Sans** (variable `--font-sans`, Google Font) — sustituto abierto de "Canva Sans" (fuente propietaria del manual, no disponible como web font)
- Headings: `font-extrabold tracking-tight text-white` (el `font-family` correcto se aplica solo por ser un tag `h1`–`h6`; no hace falta añadir `font-heading` a mano)

### Tarjetas (patrón estándar)
```
bg-dark-slate/40 border border-[#242424]
hover:border-[rgba(12,192,223,0.5)]
hover:shadow-[0_8px_32px_rgba(12,192,223,0.12)]
rounded-3xl p-8 transition-all duration-300
overflow-hidden group relative
```
- Línea inferior hover: `absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyan-neon transition-all duration-[400ms]`

### Encabezados de sección
```tsx
<p className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2">
  Eyebrow
</p>
<h2 className="text-3xl sm:text-5xl font-extrabold text-white">
  Título
</h2>
<div className="h-1 w-20 bg-brand-cyan mt-4 rounded-full mx-auto" />
```

### Contenedor principal
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Glassmorphism (clase utilitaria ya definida en globals.css)
```
.glassmorphism → fondo semi-transparente + blur
```

### Animaciones
- Librería: `framer-motion` v12
- Patrón estándar: `initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- Entrada de página (hero): `initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}`

### CTA de WhatsApp
```
href="https://wa.me/593958689116?text=..."
target="_blank" rel="noopener noreferrer"
className="... bg-brand-cyan hover:bg-brand-cyan-dark text-white ..."
```

### Logo
- Horizontal: `public/logo-dlc.png` (símbolo escudo+circuito en blanco/cian + wordmark "DLCtec" + "Eléctrica - electrónica")
- Solo símbolo: `public/logo-dlctec-symbol.png`
- Extraído y recortado del manual de marca; fondo transparente vía chroma-key. Usar siempre sobre fondos oscuros (`dark-deep`/`dark-slate`).

---

## Estructura de archivos existentes (NO TOCAR)

```
app/
  layout.tsx          ← fuentes, metadata global, CursorGlow, ScrollReset
  page.tsx            ← página principal (single-page)
  globals.css         ← variables CSS, tokens, utilidades

components/
  Navbar.tsx          ← navbar con scrollspy (solo para home)
  Hero.tsx
  About.tsx
  Services.tsx
  Stats.tsx
  Projects.tsx
  Testimonials.tsx
  Contact.tsx         ← formulario de contacto + mapa
  Footer.tsx
  CursorGlow.tsx
  ScrollReset.tsx

public/
  logo-dlc.png            ← logo horizontal DLCtec (rebrand 2026-07-10)
  logo-dlctec-symbol.png  ← solo símbolo (escudo+circuito)
  dlc-image-1.jpg
  dlc-image-5.jpg
  hero-bg.png
  project-cctv.png
  project-gate.png
  project-smart.png
  images/             ← imágenes adicionales (services-bg-2.jpg, etc.)
```

---

## Archivos nuevos ya creados

### Páginas de detalle de servicios (`/servicios/[slug]`)

```
components/servicios/
  servicios-data.ts       ← datos de los 9 servicios (slugs, subcategorías, highlights)
  NavbarService.tsx       ← navbar para páginas de servicio (links → /#section)
  ServiceDetail.tsx       ← hero + grid de subcategorías + tarjeta highlight
  ServiciosIndexGrid.tsx  ← grid de 9 cards para la página índice

app/servicios/
  page.tsx                ← /servicios (índice de todos los servicios)
  [slug]/
    page.tsx              ← /servicios/[slug] (página de detalle)
```

### Slugs disponibles
| Slug | Servicio |
|---|---|
| `control-incendios` | Control de Incendios |
| `control-accesos` | Control de Accesos |
| `domotica` | Domótica |
| `alarmas` | Alarmas de Seguridad |
| `cctv` | Videovigilancia CCTV |
| `portones-automatizacion` | Portones y Automatización |
| `ingenieria-electrica` | Ingeniería Eléctrica |
| `soporte-tecnico` | Soporte Técnico |
| `software-ti` | Software y TI |

---

## Convenciones para nuevas páginas de servicio

1. El `NavbarService` (en lugar del `Navbar` original) va en todas las sub-páginas porque sus links usan `href="/#section"` en vez de scroll en la misma página.
2. El componente `Contact` existente se importa directamente como sección CTA al final de cada página de detalle.
3. El `Footer` existente se reutiliza sin modificaciones.
4. Datos nuevos → agregar en `servicios-data.ts` manteniendo la misma interfaz `ServiceData`.
5. Para pasar datos del Server Component al Client Component, los datos deben ser **serializables** (sin funciones/componentes React). Los iconos se mapean por nombre de string en el cliente con `ICON_MAP`.

---

## Next.js 16 — Patrones obligatorios

```tsx
// params es una Promise en Next.js 15+
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { ... }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  ...
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  ...
}
```

---

## Información de contacto DLC (usar en CTAs y formularios)

- **WhatsApp:** +593 958 689 116
- **Teléfono:** 02 600-5137
- **Email:** info@dlc.com.ec
- **Dirección:** José Berrutieta y Miguel Acevedo, Quito, Ecuador *(actualizada 2026-07-10 según manual de marca; el embed de Google Maps en `Contact.tsx` conserva las coordenadas/Place ID anteriores y debe regenerarse manualmente con la ubicación real)*
- **Horario:** Lun–Vie 08:00–18:00 · Sáb 09:00–13:00
- **Web:** www.DLCtecnologia.com (según manual; el dominio en metadata sigue siendo `dlc.com.ec`, confirmar cuál es el oficial)
