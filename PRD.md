# PRD - Dentista Monterotondo Lead Generation Site

## Obiettivo
Sito SEO locale per catturare lead (pazienti) che cercano un dentista a Monterotondo e dintorni. Ogni lead viene inviato a rec.monterotondo@smiledoc.it con tracciamento della sorgente.

## UVP (Unique Value Proposition)
"Il dentista a Monterotondo dove tecnologia e accoglienza si incontrano"
- NON diciamo "siamo i migliori" - lo facciamo capire con: tecnologie, numeri, esperienza, recensioni
- Tono: professionale, rassicurante, autorevole
- NO parole vietate: gratis, gratuito, promozione, offerta, sconto

## Target
- Residenti Monterotondo, Mentana, Fonte Nuova, Guidonia, Fiano Romano, Roma Nord
- Chi cerca: dentista, implantologia, ortodonzia, igiene, estetica, pediatrica, endodonzia
- Pain points: paura del dentista, costi, qualità, tecnologia, tempi

## Architettura Pagine

### 1. Homepage (/)
- Hero con UVP + form lead capture above the fold
- Social proof (numeri, recensioni)
- Servizi con link interni
- Tecnologie differenzianti
- Zone servite per SEO locale
- CTA telefono + form
- FAQ strutturate

### 2. Pagine Servizi (6 pagine)
- /implantologia
- /ortodonzia
- /igiene-dentale
- /estetica-dentale
- /endodonzia
- /odontoiatria-pediatrica
Ogni pagina: contenuto SEO lungo + sidebar con form lead capture + CTA telefono

### 3. Blog (/blog + articoli)
Articoli SEO per long-tail keywords:
- /blog/quanto-costa-dentista-monterotondo
- /blog/migliore-dentista-monterotondo-come-scegliere
- /blog/implantologia-dentale-cosa-sapere
- /blog/ortodonzia-invisibile-adulti
- /blog/paura-del-dentista-come-superarla
- /blog/igiene-orale-bambini-consigli
- /blog/sbiancamento-denti-funziona
- /blog/quando-togliere-dente-del-giudizio

## Lead Capture System
- Form presente su OGNI pagina (sidebar + CTA sections)
- Campi: Nome, Telefono, Servizio interessato (select), Messaggio (opzionale)
- Hidden field: pagina di provenienza (source tracking)
- Submit invia email a: rec.monterotondo@smiledoc.it
- Subject email: "[DentistaMonterotondo] Nuova richiesta - {servizio} da {pagina}"
- Implementazione: Nuxt server route /api/contact che invia via SMTP o servizio esterno
- Fallback: formsubmit.co o formspree per invio senza backend

## SEO Strategy
- Title pattern: "{Servizio} Monterotondo | Dentista {keyword} | Studio Dentistico"
- H1 con keyword principale
- Schema.org: Dentist, MedicalProcedure, FAQPage, BlogPosting, BreadcrumbList
- Internal linking tra servizi e blog
- Sitemap con tutte le pagine
- Geo targeting meta tags

## Componenti Riutilizzabili
- LeadForm.vue - Form di contatto con source tracking
- ServicePage.vue layout pattern
- BlogCard.vue - Card per listing blog
- CtaSection.vue - CTA con form o telefono
- Breadcrumb.vue

## Compliance Pubblicità Sanitaria
- NO "gratis/gratuito" → "senza impegno", "inclusa nella prima visita"
- NO "migliori" → Lasciare che numeri e tecnologie parlino
- NO "promozione/offerta/sconto" → Focus su valore e qualità
- NO claims medici non verificabili
- SI: tecnologie certificate, esperienza, formazione continua, approccio personalizzato
