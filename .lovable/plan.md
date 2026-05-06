
# Auba — Digital Ecosystem · Fase 1

Auba está en **Fase 1 (cimientos)** según tu manual: aún no hay producto fabricado. Lo que necesitas ahora **no es un e-commerce** — es una **landing con lista de espera** para validar interés antes de invertir los 8.800€ en producción. Si superas 300–500 emails orgánicos, el modelo está validado.

Este plan construye exactamente eso, fiel al brand book: tres colores (blanco roto `#f4f1ea`, verde musgo `#5a6b4a`, negro grafito `#1a1a1a`), tipografía Outfit + DM Mono, frases cortas, datos concretos, cero adjetivos vacíos.

## Qué se construye

### 1. Sitio web (TanStack Start, bilingüe ES/EN)

```text
/                    Home — manifesto + CTA waitlist
/producto            Camiseta merino/Tencel — ficha técnica + desglose 72€
/transparencia       Costes, fabricante, fibras, certificaciones
/manifiesto          Lo que Auba es y lo que no es nunca
/sobre               Origen del nombre, Mediterráneo, Barcelona
/lista-de-espera     Form prominente + contador público de emails
```

Cada página tiene su propio `<head>` con title/description/og únicos.

### 2. Secciones clave de la home

- **Hero**: logotipo `auba` sobre verde musgo, una frase: *"ropa técnica honesta. Barcelona."* + CTA "únete a la lista" + email inline
- **El argumento**: el bloque comparativo del manual — Decathlon 15€ · Nike 90€ · **Auba: los dos, y sabes de dónde viene cada cosa**
- **Producto piloto**: foto producto-en-contexto + precio 72€ visible
- **Desglose de coste** (componente estrella, replicando la página 6 del brand book):
  - Tejido merino/Tencel · 11€
  - Mano de obra Braga, Portugal · 6€
  - Packaging · 2€
  - Logística · 3€
  - Plataforma · 3€
  - Margen Auba · 47€ → "sobre estructura e inversión de futuro"
- **Cuatro pilares**: anti-olor, diseño discreto, sostenibilidad estructural, honestidad de precio
- **Lo que Auba es / no es nunca**: tabla en dos columnas
- **Waitlist** con contador en vivo ("327 personas esperan la primera tirada")
- **Footer** discreto: registro OEPM en curso · Barcelona · email

### 3. Captura de waitlist (Lovable Cloud)

- Tabla `waitlist` en Lovable Cloud (Supabase) con email, source, locale, created_at
- Server function valida email + inserta + envía confirmación (Resend, opcional fase posterior)
- Endpoint público `/api/public/waitlist-count` para mostrar el contador
- Anti-spam básico (rate-limit por IP, honeypot field)
- Export CSV para ti vía Lovable Cloud

### 4. Kit de redes sociales

Genero como artefactos descargables en `/mnt/documents/`:

- **9 plantillas Instagram** (1080×1350) en los 3 colores: manifesto frase, desglose de coste, comparativa Decathlon/Nike/Auba, "lo que Auba no es", anti-olor explicado, fabricante Portugal, lista de espera CTA, antes-de-comprar checklist, frase mediterránea
- **3 stories** (1080×1920): countdown waitlist, behind-the-scenes muestra, recordatorio
- **Avatar + cover** Instagram, LinkedIn, X
- **Bio templates** ES/EN para cada plataforma
- Todo en `auba-social-kit.zip`

### 5. Identidad visual del sitio (fiel al manual)

- **Colores**: solo los tres del manual — blanco roto base, verde musgo accent, negro grafito texto. Tonos derivados solo para bordes
- **Tipografía**: Outfit (headlines, minúsculas siempre) + DM Mono (datos, precios, etiquetas técnicas)
- **Layout**: mucho espacio en blanco, tipografía como protagonista, máximo tres colores por pieza, datos concretos antes que narrativa
- **Fotografía**: placeholders honestos hasta tener producto real (negro grafito sobre verde musgo, sin stock)
- **Microcopy**: frases cortas, sin "premium" ni "revolucionario"

## Lo que NO se hace en esta fase (intencionado)

- **No checkout / no Shopify aún** — tu manual dice Shopify en Fase 2, después de validar la waitlist. Construirlo ahora es desperdiciar los 1.500€ del presupuesto antes de saber si hay demanda
- **No paid ads / pixels** — Fase 1 es orgánica
- **No retail / marketplaces** — explícitamente excluidos en el manual
- **No fundador visible** — el manual lo pide así en Fase 1

## Detalles técnicos

- Stack actual: TanStack Start + Tailwind v4 + Lovable Cloud
- Rutas separadas (no SPA con anchors) para SSR + SEO
- Fuentes Outfit + DM Mono cargadas como `@font-face` self-hosted (no Google Fonts CDN, coherente con la sobriedad de la marca)
- Tokens en `src/styles.css`: `--color-bone #f4f1ea`, `--color-moss #5a6b4a`, `--color-graphite #1a1a1a`, más `--color-moss-pale` y `--color-stone` para sombras suaves
- i18n ligera: ES por defecto + toggle EN, contenido en archivo TS (no librería pesada para 6 páginas)
- `og:image` por ruta generada con la paleta del manual
- Waitlist: zod input validation, server function con `.inputValidator().handler()`, RLS desactivada para insert público pero con rate-limit

## Orden de implementación

1. Tokens de color + fuentes + layout base (root + nav minimal)
2. Home con waitlist form (mock count primero)
3. Tabla `waitlist` en Lovable Cloud + server functions + contador real
4. Páginas /producto, /transparencia, /manifiesto, /sobre
5. Toggle ES/EN
6. Kit redes sociales generado a `/mnt/documents/auba-social-kit.zip`
7. SEO: head por ruta + sitemap + robots

## Preguntas antes de empezar

1. **Idiomas**: ¿lanzo solo ES, o ES+EN desde el día 1? (el manual menciona expansión europea en año 2, pero EN ayuda con microinfluencers)
2. **Email confirmación waitlist**: ¿activo Resend ya (necesita API key) o de momento solo guardo el email y mando un único correo manual cuando lances?
3. **Dominio**: ¿tienes ya `auba.cat` / `auba.com` reservado, o el sitio vive de momento en el subdominio Lovable?
4. **Fotografía**: ¿tienes ya alguna muestra/render del producto, o uso composiciones tipográficas + fotografía de contexto neutro (manos, tejido, Mediterráneo) hasta tener la prenda?
