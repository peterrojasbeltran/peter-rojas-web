# Peter Rojas — Personal Website v1.7.5

Web personal/profesional en Next.js para posicionamiento como CTO, AI Engineering, Cloud/Data Architecture y Tech Leadership.

## Requisitos

Antes de iniciar, valida que tengas Node.js y npm:

```bash
node -v
npm -v
```

Recomendado: Node.js 18 o superior.

## Ejecutar localmente en Antigravity

1. Descomprime el ZIP.
2. Abre la carpeta `peter-rojas-web-v1` en Antigravity.
3. Instala dependencias:

```bash
npm install
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

5. Abre en navegador:

```bash
http://localhost:3000
```

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Entra a Vercel.
3. Importa el repositorio.
4. Framework detectado: Next.js.
5. Deploy.
6. Luego puedes conectar un dominio personalizado como `peterrojas.dev`.

## Versionado sugerido

- `v1.0`: Primera versión funcional.
- `v1.1`: GitHub real, WhatsApp Perú con mensaje prellenado, mejoras UX, CTA de contacto y pulido SEO.
- `v1.2`: Logos reales en ventures, testimonios reales seleccionados, favicon, versión visible en footer y README actualizado.
- `v1.2.1`: Corrección visual de logos en Ventures y mensaje de WhatsApp dinámico por idioma.
- `v2.0`: Blog, CMS o backend.


## Cambios v1.1

- GitHub actualizado: https://github.com/peterrojasbeltran
- WhatsApp Perú con mensaje prellenado.
- CTA principal ajustado a conversión: “Let’s work together”.
- Modal de ventures con CTA interno.
- Mejoras de hover, mobile y accesibilidad básica.
- Meta description optimizada.


## Cambios v1.2

- Se integraron logos reales para Ventures:
  - Baruj Equipetrol
  - Juicy Burger
  - HidraJamaica
  - Invictus SCZ
- Los logos se muestran con tratamiento visual consistente mediante CSS.
- Se reemplazaron los 2 testimonios resumidos por 5 testimonios seleccionados desde recomendaciones reales de LinkedIn.
- Se agregó favicon básico con las iniciales PR.
- Se agregó versión visible en footer: `v1.2`.
- Se mejoró la experiencia mobile de la sección Testimonials con scroll horizontal.
- Se mantuvo intacta la estructura, colores, narrativa y stack de v1.1.

## Historial de versiones

- `v1.0`: Primera versión funcional con estructura base, secciones principales, diseño responsive y SEO básico.
- `v1.1`: GitHub real, WhatsApp Perú con mensaje prellenado, mejoras UX, CTA de contacto y pulido SEO.
- `v1.2`: Logos reales en ventures, testimonios reales seleccionados, favicon, versión visible en footer y README actualizado.
- `v1.2.1`: Corrección visual de logos en Ventures y mensaje de WhatsApp dinámico por idioma.


## Cambios v1.2.1

- Se corrigió el CSS de los logos en Ventures para que no se conviertan en bloques negros.
- Se removió el filtro monocromo forzado en logos y modal de ventures.
- El mensaje de WhatsApp ahora cambia según el idioma activo:
  - EN: mensaje en inglés.
  - ES: mensaje en español.
- Se actualizó la versión visible en footer a `v1.2.1`.


## Cambios v1.4

- Se reemplazaron los logos de Ventures por versiones PNG originales en color.
- Se ajustaron tamaños por marca:
  - Baruj Equipetrol: formato horizontal.
  - Juicy Burger: formato cuadrado.
  - HidraJamaica: formato circular.
  - Invictus SCZ: formato vertical/cuadrado.
- Se removieron filtros visuales agresivos sobre logos.
- Se actualizó la versión visible en footer a `v1.4`.
- Se mantuvo intacta la estructura, contenido principal y diseño general de v1.2.1.

## Historial agregado

- `v1.4`: Logos PNG originales en color y sistema de tamaños por marca.

- `v1.4`: Ajuste de posicionamiento en Hero con mensaje más ejecutivo y orientado a negocio.


## Cambios v1.5

- Se agregó la sección `How I can help` / `Cómo puedo ayudar` para mejorar conversión.
- Se reforzó el copy de About con propuesta de valor más clara.
- Se mantuvo el headline ejecutivo de v1.4.
- Se mejoró el CTA principal en inglés a `Work with me`.
- Se agregaron líneas de impacto en Ventures.
- Se reforzó la jerarquía visual de Testimonials.
- Se añadieron mejoras de spacing y lectura en mobile.
- Se actualizó la versión visible en footer a `v1.5`.
- Se actualizó `package.json` a `1.5.0`.

## QA funcional v1.5

Checklist ejecutado:

- Validación de estructura principal de archivos.
- Validación de contenido bilingüe EN/ES.
- Validación de links principales: LinkedIn, GitHub, Email, WhatsApp.
- Validación de cambio dinámico del mensaje de WhatsApp según idioma.
- Validación de logos de Ventures.
- Validación de footer con versión `v1.5`.
- Validación de CSS responsive para desktop, tablet y mobile.
- Validación de navegación por anchors.
- Validación de README actualizado.

## Historial agregado

- `v1.5`: Upgrade UX orientado a conversión, sección How I can help, impacto en Ventures, mejoras mobile y QA funcional.


## Cambios v1.5.1

- Se mejoró la sección Testimonials para que los testimonios se sientan más humanos y menos genéricos.
- Cada testimonio ahora tiene:
  - frase de impacto
  - contexto breve basado en la recomendación real
- Se ajustó la jerarquía visual de los testimonios.
- Se actualizó el footer a `v1.5.1`.
- Se actualizó `package.json` a `1.5.1`.
- No se modificaron Hero, Ventures, How I can help, estructura general ni diseño base.


## Cambios v1.5.2 FIX limpio

- Se corrigieron los testimonios en inglés agregando la segunda línea de contexto.
- Se mantuvo intacta la estructura de `lib/content.ts`.
- Se evitó reemplazar bloques completos para no introducir errores de sintaxis.
- Se actualizó footer a `v1.5.2`.
- Se actualizó `package.json` a `1.5.2`.
- Se ejecutó QA estático de sintaxis, contenido bilingüe, responsive y assets.


## Cambios v1.5.3

- Se corrigió el error de build en Vercel causado por el tipado estricto de Ventures.
- El tipo `Venture` ahora acepta contenido bilingüe EN/ES sin comparar literales como `Partner` vs `Socio`.
- Se actualizó el footer a `v1.5.3`.
- Se actualizó `package.json` a `1.5.3`.

## Causa del error en Vercel

TypeScript estaba infiriendo el tipo de `selectedVenture` solo desde la versión inglesa de `content`.
Cuando el usuario cambiaba a español, el objeto de Venture tenía `role: "Socio"`, pero el tipo esperaba literalmente `role: "Partner"`.


## Cambios v1.6

- Se actualizó la metadata SEO para el dominio oficial `https://peterrojas.dev`.
- Se agregó Open Graph optimizado para LinkedIn, WhatsApp y redes sociales.
- Se creó `public/og.png` en formato 1200x630 para previews sociales.
- Se actualizó `app/sitemap.ts` con la URL canónica.
- Se actualizó `app/robots.ts` para permitir indexación y referenciar sitemap.
- Se agregó `twitter.card = summary_large_image`.
- Se actualizó la versión visible en footer a `v1.6`.
- Se actualizó `package.json` a `1.6.0`.
- No se modificaron diseño, testimonios, ventures ni estructura visual.

## Verificación SEO

Después del deploy, revisar:

```bash
https://peterrojas.dev/sitemap.xml
https://peterrojas.dev/robots.txt
https://peterrojas.dev/og.png
```

Validar preview en LinkedIn:

```text
https://www.linkedin.com/post-inspector/
```

Pegar:

```text
https://peterrojas.dev
```

## Historial agregado

- `v1.6`: SEO + Open Graph + dominio oficial + sitemap/robots actualizados.


## Cambios v1.6.2

- Se corrigió la identidad de marca para que el nombre propio no se traduzca:
  - `Peter Rojas` se mantiene igual en español e inglés.
- Se revisó que los nombres de Ventures y empresas no sean traducidos:
  - Baruj Equipetrol
  - Juicy Burger
  - HidraJamaica
  - Invictus SCZ
- Se ajustó el posicionamiento para incluir roles CTO, VP de Tecnología / VP Engineering y liderazgo estratégico.
- Se actualizó el bloque final de contacto:
  - ES: CTO, VP de Tecnología o liderazgo estratégico.
  - EN: CTO, VP of Technology or strategic technology leadership.
- Se reforzó el hero/subtítulo con liderazgo CTO/VP-level.
- Se actualizó el servicio Fractional CTO para incluir liderazgo tecnológico VP-level.
- Se agregaron keywords SEO relacionadas a VP Technology, VP Engineering y Technology Leadership.
- Se actualizó la versión visible en footer a `v1.6.2`.
- Se actualizó `package.json` a `1.6.2`.

## QA v1.6.2

Checklist:
- No aparece la traducción incorrecta del nombre.
- `Peter Rojas` se mantiene en ES/EN.
- Ventures mantienen nombres propios.
- Copy CTO/VP aparece en ES/EN.
- Metadata SEO incluye VP Technology / VP Engineering.
- Responsive y estructura visual no fueron modificados.
- sitemap, robots y og.png se mantienen desde v1.6.


## Cambios v1.7

- Performance:
  - Se reemplazaron imágenes HTML `<img>` por `next/image`.
  - Se priorizó la imagen principal del Hero.
  - Logos de Ventures y modal usan `Image` optimizado.
- Credibilidad:
  - Se agregó la sección `Companies I’ve worked with` / `Empresas con las que he trabajado`.
  - Empresas incluidas: Globant, Tottus, Belcorp, Auna, Teamcore y Sapiens.
- Micro UX:
  - Se mejoraron hover states, spacing y visual polish en la nueva sección.
  - Se mantuvo intacto el diseño base.
- Tracking:
  - Se integró `@vercel/analytics`.
  - Se integró `@vercel/speed-insights`.
- SEO avanzado:
  - Se agregó JSON-LD tipo `Person`.
  - Se reforzaron keywords de CTO, VP Technology, VP Engineering, AI Engineering y Cloud/Data.
- Versionado:
  - Footer actualizado a `v1.7`.
  - `package.json` actualizado a `1.7.0`.

## QA v1.7

Checklist:
- Build-ready structure.
- No uso de `<img>` en `app/page.tsx`.
- `next/image` importado y usado.
- Analytics y Speed Insights integrados en `layout.tsx`.
- JSON-LD `Person` presente.
- Nueva sección de credibilidad presente en ES/EN.
- Responsive desktop/mobile mantenido.
- sitemap, robots y og.png mantenidos desde v1.6.


## Cambios v1.7.1

- Se corrigió error de build en Vercel causado por `next/image` y el tipo opcional `logo?: string`.
- El tipo `Venture.logo` ahora es obligatorio porque todos los Ventures tienen logo.
- Se actualizó el footer a `v1.7.1`.
- Se actualizó `package.json` a `1.7.1`.
- No se modificó diseño, contenido ni layout.


## Cambios v1.7.3

- Se mantuvo la verificación de Google Search Console en `metadata.verification.google`.
- Se corrigió el Hero en mobile después del cambio a `next/image`.
- La imagen principal ahora usa `fill` y `objectFit: cover`.
- Se reforzó el contenedor `.hero-photo-card` con `position: relative` y altura mobile.
- Se actualizó el footer a `v1.7.3`.
- Se actualizó `package.json` a `1.7.3`.
- No se modificaron textos, Ventures, testimonios ni estructura general.


## Cambios v1.7.4

- Se corrigió la carga de la imagen principal en desktop después del cambio a `next/image` con `fill`.
- Se agregó altura explícita al contenedor `.hero-photo-card` en desktop, tablet y mobile.
- Se mantiene `object-fit: cover` para conservar proporción y llenar el card.
- Se actualizó el footer a `v1.7.4`.
- Se actualizó `package.json` a `1.7.4`.
- No se modificaron textos, SEO, Ventures, testimonios ni estructura general.
