# Despliegue de DLC Tecnologica

Aplicacion web en Next.js 16.2.9.

## Requisitos del servidor

- Node.js 20 o superior
- npm
- Dominio final: `https://dlc.com.ec`

## Comandos

```bash
npm install
npm run build
npm run start
```

Por defecto, `npm run start` levanta Next.js en el puerto `3000`. Si el hosting usa un proxy inverso, apuntar el dominio real al puerto donde quede corriendo la aplicacion.

## Variables de entorno

No se requieren variables de entorno para levantar esta version del sitio.

## Archivos SEO incluidos

- `robots.txt`, generado desde `app/robots.ts`
- `sitemap.xml`, generado desde `app/sitemap.ts`
- `manifest.webmanifest`, generado desde `app/manifest.ts`
- `/llms.txt`, generado desde `app/llms.txt/route.ts`
- Metadata, Open Graph y JSON-LD en las paginas principales, servicios y blog

## Verificacion recomendada despues de publicar

- Abrir `https://dlc.com.ec`
- Abrir `https://dlc.com.ec/blog`
- Abrir `https://dlc.com.ec/sitemap.xml`
- Enviar `https://dlc.com.ec/sitemap.xml` en Google Search Console
