# PRD — Upgrade Lead Generation & SEO: dentistamonterotondo.com

## Obiettivo
Massimizzare lead generation (contatti/appuntamenti) e traffico organico SEO per lo studio dentistico Smiledoc di Monterotondo.

## Analisi Stato Attuale

### Punti di Forza
- 20 pagine SSR pre-renderizzate
- 8 articoli blog SEO
- Form lead funzionante con SMTP
- GDPR compliant (cookie banner, privacy)
- Schema.org Dentist + FAQPage

### Criticità (da risolvere)

| # | Problema | Impatto | Soluzione |
|---|---------|---------|-----------|
| 1 | ZERO immagini (public/ vuoto) | Nessun visual trust, og:image broken | Generare immagini AI professionali |
| 2 | Nessun exit popup | Perdita visitatori che escono | ExitPopup.vue con offerta |
| 3 | Nessun sticky CTA mobile | Mobile users non vedono CTA scrollando | StickyCta.vue barra fissa bottom |
| 4 | Nessun WhatsApp button | Canale contatto più usato in Italia | WhatsAppButton.vue floating |
| 5 | Nessuna recensione reale | Social proof debole | Sezione testimonial con recensioni Google reali |
| 6 | Hero senza immagine | Zero impatto visivo | Hero image studio professionale |
| 7 | og:image inesistente | Condivisione social senza preview | Generare og-image.jpg |
| 8 | Nessun breadcrumb schema su servizi | SEO strutturale debole | BreadcrumbList JSON-LD |
| 9 | Nessuna urgency/scarcity | Basso tasso conversione | Micro-copy urgency nel form |
| 10 | Nessun tracking eventi form | Non si sa il conversion rate | Event tracking GA4 |

## Deliverables

### FASE 1: Immagini Professionali (AI Generated)
- `public/img/hero-studio.jpg` — Interno studio dentistico moderno e luminoso
- `public/img/team-smiledoc.jpg` — Team medico professionale
- `public/img/og-image.jpg` — Open Graph image per social sharing
- `public/img/sala-operatoria.jpg` — Sala con tecnologie avanzate
- `public/img/reception.jpg` — Reception accogliente
- `public/img/dott-civero.jpg` — Ritratto professionale dottore

### FASE 2: Nuovi Componenti Lead Generation
- `ExitPopup.vue` — Exit intent popup con form compatto
- `StickyCta.vue` — Barra mobile fissa bottom (chiama + prenota)
- `WhatsAppButton.vue` — Bottone WhatsApp floating

### FASE 3: Sezione Testimonianze Homepage
- 3 recensioni reali Google Smiledoc
- Rating stars + nome + trattamento
- Schema.org Review aggregate

### FASE 4: SEO Enhancement
- Breadcrumb schema JSON-LD su tutte le pagine servizio
- Fix og:image con immagine reale
- Aggiunta 4 nuovi comuni in areaServed (Palombara Sabina, Capena, Morlupo, Riano)
- Event tracking form submit per GA4

### FASE 5: UX Conversion Optimization
- Hero con background image e overlay gradient
- Urgency micro-copy ("Posti limitati questa settimana")
- Counter animato nelle stats
- CTA più prominenti con contrasto maggiore

## Vincoli
- MAI usare "gratis/gratuito/promozione/sconto/offerta"
- Direttore Sanitario sempre indicato
- GDPR compliance
- Performance: LCP < 2.5s, CLS < 0.1
