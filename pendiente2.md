# Pendiente 2 — Observaciones del cliente que requieren assets o decisiones

Estado: aplicado lo que se pudo resolver solo con texto/código. Solo quedan 2 puntos abiertos,
ambos necesitan un archivo o una decisión del cliente antes de poder tocar código.

## 1. Logo "Seguridad Electrónica"

- Archivo: `public/seguridad-electrica.png`
- El cliente pidió que el logo diga "Seguridad Electrónica" (actualmente dice "Seguridad Eléctrica").
- El texto está incrustado en el PNG — no se puede editar por código.
- **Necesito**: que el cliente envíe el archivo de logo actualizado, o autorización para
  generar uno nuevo (IA / diseño) a partir del manual de marca.
- Ya corregí el `alt` text en código ("Seguridad Electrónica") mientras se resuelve la imagen.

## 2. Fotos de cámaras PTZ más grandes (CCTV)

- Ubicación: subcategoría "Cámaras IP" en `components/servicios/servicios-data.ts`
  (`image: "/images/camaraip.webp"`, sección CCTV).
- El cliente pidió que la foto muestre cámaras PTZ más grandes/visibles.
- **Necesito**: foto nueva de cámara PTZ (puede ser stock con licencia o foto de instalación real del cliente).

## 3. Arte/header image para Domótica & Smart Home y Energías Renovables

- La tarjeta **"Domótica & Smart Home"** en `Services.tsx` usa por ahora `public/images/dlc-smarthome.png`
  (imagen existente reutilizada, no diseñada para este uso específico como header de tarjeta).
- La tarjeta **"Energías Renovables"** no tiene `headerImage` — actualmente muestra un ícono genérico (Sun)
  en vez de una imagen de marca, a diferencia del resto de tarjetas que sí tienen arte propio.
- **Necesito**: A.M. (Alexander Mejía) debe generar/diseñar un arte específico para cada una de estas dos
  tarjetas, siguiendo el mismo estilo que los demás headerImage de servicios (`seguridad-electrica.png`,
  `portones-automaticos.png`, `ing-electrico.png`, `computers.png`, etc.).

---

## Ya aplicado (para referencia, no requiere acción)

- Hero: subtítulo actualizado, línea "Por integradores de tecnología eléctrica y electrónica en Ecuador" agregada bajo el headline.
- Alt de icono "Seguridad Eléctrica" → "Seguridad Electrónica"; alt de icono de software → "Computadores y Software".
- Control de Accesos → subcategoría "Video Porteros" ahora incluye cerraduras inteligentes en título, descripción y features.
- Alarmas → agregado "cercos infrarrojos perimetrales" a la subcategoría de vigilancia perimetral.
- Nueva subcategoría **Video Porteros** dentro de "Seguridad Electrónica" (con su propia página `/servicios/seguridad-electronica/video-porteros`).
- Nueva subcategoría **Paneles Solares** dentro de "Ingeniería Eléctrica" (con su propia página `/servicios/ingenieria-electrica/paneles-solares`).
- Chips correspondientes agregados en `Services.tsx` para ambos servicios nuevos.
- **Reestructuración completa de "Especialidades"**: la sección de Servicios ahora tiene exactamente
  las 6 tarjetas pedidas por el cliente:
  1. Seguridad Electrónica — CCTV, Alarmas, Control de Accesos, Control de Incendios, Video Porteros
  2. Puertas Automáticas (antes "Portones y Automatización")
  3. Domótica & Smart Home — tarjeta propia nueva (antes solo un chip dentro de Seguridad Electrónica), enlaza a `/servicios/domotica`
  4. Redes Estructuradas — Diseño Eléctrico, Redes de Voz y Datos, Tableros Eléctricos, Fibra Óptica (antes "Ingeniería Eléctrica")
  5. Energías Renovables — tarjeta propia nueva con Paneles Solares
  6. Computación & Soporte TI — fusión de las antiguas secciones "Soporte Técnico" y "Computación y Software"

  Nota técnica: "Redes Estructuradas" y "Energías Renovables" siguen apuntando al mismo servicio
  subyacente `ingenieria-electrica` en `servicios-data.ts` (mismo `/servicios/ingenieria-electrica`,
  solo se dividió la presentación visual en dos tarjetas). No se tocaron slugs ni URLs existentes,
  así que no se rompió SEO ni enlaces previos.

  Build verificado (`tsc` + `next build`) sin errores, 51 rutas generadas correctamente.
