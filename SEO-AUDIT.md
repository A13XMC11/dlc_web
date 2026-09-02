# Auditoría SEO y Posicionamiento IA
## Sitio: DLC Tecnológica (dlc.com.ec)
### Fecha: 2026-09-02

## Estado Actual

**SEO Health Score estimado: 92/100.**

El sitio ya cuenta con fundamentos sólidos: metadata por página, canonical tags, `robots.txt`, `sitemap.xml`, datos estructurados `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `AboutPage`, `ItemList` y `SiteNavigationElement`, páginas de servicio profundas, URLs limpias, imágenes WebP, `llms.txt`, manifest web e iconos generados por Next. La compilación de producción genera 57 páginas/artefactos estáticos.

## Mejoras Aplicadas

1. Se corrigió el lint para ignorar `.next.nosync/**`, evitando que ESLint analice artefactos generados.
2. Se sanitizó el JSON-LD reemplazando `<` por `\u003c`, siguiendo la recomendación de Next para reducir riesgo XSS.
3. Se añadieron páginas `/politica-privacidad` y `/terminos-servicio`, enlazadas desde el footer para reforzar confianza.
4. Se amplió el sitemap con páginas legales e imágenes relevantes por home, índice de servicios, servicios y subservicios.
5. Se añadió `/llms.txt` con resumen estructurado de la empresa, servicios y subservicios para asistentes de IA y crawlers que lo consulten.
6. Se reforzó schema `LocalBusiness` con teléfono fijo, enlace de mapa y datos de contacto consistentes.
7. Se añadió la página `/nosotros` con contenido de confianza, metodología, cobertura, experiencia y enlaces internos.
8. Se corrigieron enlaces internos de subservicios para apuntar a URLs específicas en vez de páginas padre.
9. Se corrigieron enlaces del footer a especialidades para llevar autoridad interna hacia páginas reales de servicios y subservicios.
10. Se reemplazaron enlaces sociales genéricos por acciones verificables: WhatsApp, correo y ubicación.
11. Se añadió `manifest.webmanifest`, `/icon` y `/apple-icon` para reforzar identidad técnica del sitio.
12. Se añadieron breadcrumbs JSON-LD en `/servicios` y `/nosotros`.

## Lo Que Ya Está Bien

- Home con H1 orientado a “Seguridad Electrónica” y “Ecuador”.
- Páginas individuales para servicios y subservicios.
- FAQ visible en páginas de servicio con schema `FAQPage`.
- Breadcrumb visible y schema en rutas de servicio.
- Canonicals definidos.
- Sitemap y robots generados por Next App Router.
- Imágenes servidas en WebP y mayoritariamente con `next/image`.
- CTAs claros a WhatsApp y cotizador.
- Página `/nosotros` indexable para reforzar entidad, marca, experiencia y confianza.
- Manifest e iconos de aplicación generados por Next.
- Footer con enlaces internos a URLs indexables de servicios clave.

## Lo Que Aún Depende del Negocio

1. **Google Business Profile**: reclamar/optimizar la ficha con misma dirección, teléfono, horario, sitio web, fotos reales y categorías correctas.
2. **Backlinks locales**: directorios ecuatorianos, cámaras/comunidades empresariales, proveedores, clientes y casos de éxito enlazando a páginas específicas.
3. **Prueba social verificable**: reseñas reales, testimonios con nombre/empresa y proyectos documentados.
4. **Contenido experto**: casos de estudio y guías locales como “cuánto cuesta instalar CCTV en Quito” o “requisitos de control de incendios para Bomberos”.
5. **Métricas post-deploy**: validar Search Console, PageSpeed Insights/Core Web Vitals y Rich Results Test en URLs públicas.

## Prioridades Siguientes

1. Conectar Google Search Console y enviar `https://dlc.com.ec/sitemap.xml`.
2. Conectar Bing Webmaster Tools y enviar el sitemap.
3. Validar datos estructurados en Rich Results Test y Schema Markup Validator.
4. Crear 3-5 casos de éxito con fotos reales, ubicación, problema, solución y resultado.
5. Añadir nombres de marcas, certificaciones y garantías reales cuando el negocio confirme esos datos.
6. Confirmar el dominio oficial definitivo (`dlc.com.ec` vs. `DLCtecnologia.com`) para mantener canonicals, ficha de Google y materiales externos 100% consistentes.
