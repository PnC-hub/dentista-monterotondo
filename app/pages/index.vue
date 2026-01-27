<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <NuxtLink to="/">
            <span class="logo-text">SMILEDOC</span>
            <span class="logo-sub">Clinica Dentale Monterotondo</span>
          </NuxtLink>
        </div>
        <nav class="nav" :class="{ 'nav-open': menuOpen }">
          <a href="#tecnologie">Tecnologie</a>
          <a href="#servizi">Servizi</a>
          <a href="#trattamenti">Trattamenti</a>
          <a href="#dove-siamo">Dove Siamo</a>
          <a href="https://pazienti.geniusmile.com/paziente/" target="_blank" class="nav-portal">Area Pazienti</a>
        </nav>
        <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="/prenota" class="header-cta">Prima Visita</a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Dentista Monterotondo</h1>
        <p class="tagline">Sorridi senza pensieri</p>
        <p class="hero-text">
          <strong>Smiledoc</strong> è la clinica dentale di riferimento a <strong>Monterotondo</strong>,
          dove accoglienza e tecnologia digitale si fondono per offrirti risultati eccellenti.
        </p>
        <div class="hero-buttons">
          <a href="tel:+3906906239936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Chiama Ora
          </a>
          <a href="/prenota" class="btn btn-secondary">Prenota Online</a>
        </div>
        <p class="hero-phone">
          <a href="tel:+3906906239936">06 906 23 936</a>
        </p>
      </div>
    </section>

    <!-- Tecnologie Innovative -->
    <section class="tech-section" id="tecnologie">
      <div class="container">
        <h2>Tecnologie Innovative</h2>
        <p class="section-subtitle">Strumenti all'avanguardia per diagnosi precise e trattamenti indolori</p>
        <div class="tech-grid">
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3>Diagnosi Carie senza Raggi X</h3>
            <p>Tecnologia laser per rilevare le carie in fase iniziale, senza radiazioni.</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <h3>TAC Cone Beam 3D</h3>
            <p>Imaging tridimensionale in sede per pianificazione implantare di precisione.</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3>Terapia Laser</h3>
            <p>Trattamenti minimamente invasivi per gengive e tessuti molli.</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Impronte Digitali</h3>
            <p>Scanner intraorale per impronte precise e confortevoli, senza paste.</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            </div>
            <h3>Metodo Indolore</h3>
            <p>Protocollo esclusivo per trattamenti senza dolore e ansia.</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3>Chirurgia Guidata</h3>
            <p>Implantologia computer-guidata per massima precisione e sicurezza.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Servizi Principali -->
    <section class="services-section" id="servizi">
      <div class="container">
        <h2>I Nostri Servizi a Monterotondo</h2>
        <div class="services-grid">
          <article class="service-card">
            <div class="service-image implantologia"></div>
            <div class="service-content">
              <h3>Implantologia Computer Guidata</h3>
              <p>
                <strong>Implantologia a Monterotondo</strong> con tecnologia 3D per risultati
                predicibili e interventi mini-invasivi. Sostituzione denti mancanti con impianti in titanio.
              </p>
              <a href="/implantologia" class="service-link">Scopri di più →</a>
            </div>
          </article>
          <article class="service-card">
            <div class="service-image ortodonzia"></div>
            <div class="service-content">
              <h3>Ortodonzia e Allineatori</h3>
              <p>
                <strong>Ortodontista a Monterotondo</strong> per adulti e bambini.
                Allineatori trasparenti, ortodonzia estetica e funzionale per un sorriso perfetto.
              </p>
              <a href="/ortodonzia" class="service-link">Scopri di più →</a>
            </div>
          </article>
          <article class="service-card">
            <div class="service-image igiene"></div>
            <div class="service-content">
              <h3>Igiene Dentale Professionale</h3>
              <p>
                Pulizia dentale professionale, sbiancamento e prevenzione.
                La base per un sorriso sano con i nostri <strong>igienisti a Monterotondo</strong>.
              </p>
              <a href="/igiene-dentale" class="service-link">Scopri di più →</a>
            </div>
          </article>
          <article class="service-card">
            <div class="service-image estetica"></div>
            <div class="service-content">
              <h3>Estetica del Sorriso</h3>
              <p>
                Faccette dentali, sbiancamento professionale e ricostruzioni estetiche
                per un sorriso luminoso e naturale.
              </p>
              <a href="/estetica" class="service-link">Scopri di più →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Trattamenti Specifici -->
    <section class="treatments-section" id="trattamenti">
      <div class="container">
        <h2>Trattamenti Specifici</h2>
        <div class="treatments-grid">
          <a href="/parodontologia" class="treatment-item">
            <span class="treatment-icon">🦷</span>
            <span>Parodontologia</span>
          </a>
          <a href="/protesi" class="treatment-item">
            <span class="treatment-icon">👄</span>
            <span>Protesi Dentali</span>
          </a>
          <a href="/endodonzia" class="treatment-item">
            <span class="treatment-icon">🔬</span>
            <span>Endodonzia</span>
          </a>
          <a href="/chirurgia-orale" class="treatment-item">
            <span class="treatment-icon">⚕️</span>
            <span>Chirurgia Orale</span>
          </a>
          <a href="/ortodonzia-pediatrica" class="treatment-item">
            <span class="treatment-icon">👶</span>
            <span>Ortodonzia Pediatrica</span>
          </a>
          <a href="/protocollo-salva-denti" class="treatment-item">
            <span class="treatment-icon">💪</span>
            <span>Protocollo Salva Denti</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Perché Sceglierci -->
    <section class="why-section">
      <div class="container">
        <h2>Perché Scegliere Smiledoc a Monterotondo</h2>
        <div class="why-grid">
          <div class="why-item">
            <div class="why-number">01</div>
            <h3>Tecnologia Digitale</h3>
            <p>TAC 3D, laser, scanner intraorale e chirurgia guidata per trattamenti di precisione.</p>
          </div>
          <div class="why-item">
            <div class="why-number">02</div>
            <h3>Metodo Indolore</h3>
            <p>Protocollo esclusivo per eliminare dolore e ansia durante ogni trattamento.</p>
          </div>
          <div class="why-item">
            <div class="why-number">03</div>
            <h3>Team Specializzato</h3>
            <p>Equipe di specialisti in ogni branca dell'odontoiatria moderna.</p>
          </div>
          <div class="why-item">
            <div class="why-number">04</div>
            <h3>Prima Visita Gratuita</h3>
            <p>Consulenza completa con piano di trattamento personalizzato senza impegno.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Prenota la Tua Prima Visita</h2>
        <p>Consulenza gratuita con piano di trattamento personalizzato</p>
        <div class="cta-buttons">
          <a href="tel:+3906906239936" class="btn btn-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            06 906 23 936
          </a>
          <a href="/prenota" class="btn btn-outline-white">Prenota Online</a>
        </div>
      </div>
    </section>

    <!-- Dove Siamo -->
    <section class="location-section" id="dove-siamo">
      <div class="container">
        <h2>Dove Siamo - Dentista Monterotondo</h2>
        <div class="location-grid">
          <div class="location-info">
            <h3>Clinica Dentale Smiledoc</h3>
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <strong>Indirizzo</strong>
                <p>Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
              </div>
            </div>
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div>
                <strong>Telefono</strong>
                <p><a href="tel:+3906906239936">06 906 23 936</a></p>
              </div>
            </div>
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <div>
                <strong>Orari</strong>
                <p>Lun - Ven: 10:00 - 19:00</p>
              </div>
            </div>
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@smiledoc.it">info@smiledoc.it</a></p>
              </div>
            </div>
            <a href="https://pazienti.geniusmile.com/paziente/" target="_blank" class="portal-link">
              Accedi all'Area Pazienti →
            </a>
          </div>
          <div class="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5!2d12.618!3d42.053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f8c1d6c5a1%3A0x8f8f8f8f8f8f8f8f!2sVia+Monte+Circeo+12%2C+00015+Monterotondo+RM!5e0!3m2!1sit!2sit!4v1706000000000"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              title="Mappa Smiledoc Monterotondo">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">SMILEDOC</div>
            <p>Clinica Dentale Monterotondo</p>
            <p class="footer-tagline">Sorridi senza pensieri</p>
            <div class="social-links">
              <a href="https://www.facebook.com/smiledoc.it" target="_blank" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/smiledoc_monterotondo" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Tecnologie</h4>
            <ul>
              <li><a href="/tac-dentale">TAC Cone Beam</a></li>
              <li><a href="/terapia-laser">Terapia Laser</a></li>
              <li><a href="/impronte-digitali">Impronte Digitali</a></li>
              <li><a href="/metodo-indolore">Metodo Indolore</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Servizi</h4>
            <ul>
              <li><a href="/implantologia">Implantologia</a></li>
              <li><a href="/ortodonzia">Ortodonzia</a></li>
              <li><a href="/igiene-dentale">Igiene Dentale</a></li>
              <li><a href="/estetica">Estetica del Sorriso</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Zone Servite</h4>
            <ul>
              <li>Monterotondo</li>
              <li>Mentana</li>
              <li>Fonte Nuova</li>
              <li>Roma Nord</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Smiledoc Clinica Dentale Monterotondo - P.IVA 12345678901</p>
          <p>
            <a href="/privacy">Privacy Policy</a> |
            <a href="/cookie">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

useHead({
  title: 'Dentista Monterotondo | Smiledoc Clinica Dentale | Implantologia e Ortodonzia',
  meta: [
    {
      name: 'description',
      content: 'Cerchi un dentista a Monterotondo? Smiledoc: clinica dentale con tecnologie digitali avanzate. Implantologia computer-guidata, ortodonzia, igiene dentale. Prima visita gratuita. Tel: 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'Dentist',
    name: 'Smiledoc Clinica Dentale Monterotondo',
    image: 'https://dentistamonterotondo.com/images/clinica.jpg',
    telephone: '+39 06 906 23 936',
    email: 'info@smiledoc.it',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Monte Circeo 12',
      addressLocality: 'Monterotondo',
      addressRegion: 'RM',
      postalCode: '00015',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.0533,
      longitude: 12.6186
    },
    url: 'https://dentistamonterotondo.com',
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156'
    },
    sameAs: [
      'https://www.facebook.com/smiledoc.it',
      'https://www.instagram.com/smiledoc_monterotondo'
    ]
  },
  {
    '@type': 'LocalBusiness',
    '@id': 'https://dentistamonterotondo.com/#localbusiness',
    name: 'Dentista Monterotondo - Smiledoc',
    description: 'Clinica dentale a Monterotondo con tecnologie digitali avanzate. Implantologia computer-guidata, ortodonzia estetica, igiene dentale professionale.',
    areaServed: [
      { '@type': 'City', name: 'Monterotondo' },
      { '@type': 'City', name: 'Mentana' },
      { '@type': 'City', name: 'Fonte Nuova' },
      { '@type': 'City', name: 'Roma' }
    ]
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto costa una visita dal dentista a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Presso Smiledoc la prima visita e il preventivo sono gratuiti. I costi dei trattamenti variano in base alle necessità del paziente.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali tecnologie usa lo studio dentistico Smiledoc?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smiledoc utilizza TAC Cone Beam 3D, laser per diagnosi e terapia, scanner intraorale per impronte digitali, e chirurgia implantare computer-guidata.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali sono gli orari dello studio dentistico a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lo studio è aperto dal lunedì al venerdì dalle 10:00 alle 19:00 con orario continuato.'
        }
      }
    ]
  }
])
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

:root {
  --primary: #2ea3f2;
  --primary-dark: #1a8cd8;
  --secondary: #34495e;
  --text: #333;
  --text-light: #666;
  --bg: #fff;
  --bg-light: #f8f9fa;
  --bg-dark: #1a1a2e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 1px;
}

.logo-sub {
  font-size: 0.7rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav a {
  color: var(--text);
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--primary);
}

.nav-portal {
  color: var(--primary) !important;
}

.header-cta {
  background: var(--primary);
  color: white !important;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s, transform 0.2s;
}

.header-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: var(--text);
  transition: 0.3s;
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  text-align: center;
  padding: 100px 20px 60px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(46,163,242,0.1)" stroke-width="0.5"/></svg>');
  background-size: 200px;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff 0%, #2ea3f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-text {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(46,163,242,0.4);
  color: white;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.hero-phone a {
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
}

.hero-phone a:hover {
  color: white;
}

/* Tech Section */
.tech-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.tech-section h2,
.services-section h2,
.treatments-section h2,
.why-section h2,
.location-section h2 {
  text-align: center;
  font-size: 2.2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.tech-icon {
  color: var(--primary);
  margin-bottom: 1rem;
}

.tech-card h3 {
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.tech-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* Services Section */
.services-section {
  padding: 80px 0;
}

.services-section h2 {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.service-image {
  height: 180px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
}

.service-content {
  padding: 1.5rem;
}

.service-content h3 {
  font-size: 1.2rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.service-content p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.service-link {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Treatments Section */
.treatments-section {
  padding: 60px 0;
  background: var(--bg-light);
}

.treatments-section h2 {
  margin-bottom: 2rem;
}

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.treatment-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: var(--text);
  font-weight: 600;
  transition: all 0.2s;
}

.treatment-item:hover {
  background: var(--primary);
  color: white;
  transform: translateX(5px);
}

.treatment-icon {
  font-size: 1.5rem;
}

/* Why Section */
.why-section {
  padding: 80px 0;
}

.why-section h2 {
  margin-bottom: 3rem;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.why-item {
  text-align: center;
  padding: 2rem;
}

.why-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 0.5rem;
}

.why-item h3 {
  font-size: 1.2rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.why-item p {
  color: var(--text-light);
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-white {
  background: white;
  color: var(--primary);
}

.btn-white:hover {
  background: rgba(255,255,255,0.9);
  color: var(--primary-dark);
}

.btn-outline-white {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline-white:hover {
  background: white;
  color: var(--primary);
}

/* Location Section */
.location-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.location-section h2 {
  margin-bottom: 3rem;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.location-info {
  background: white;
  padding: 2rem;
  border-radius: 15px;
}

.location-info h3 {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.info-item svg {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.info-item strong {
  display: block;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.info-item p {
  color: var(--text-light);
  margin: 0;
}

.portal-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary);
  font-weight: 600;
}

.location-map iframe {
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.1);
}

/* Footer */
.footer {
  background: var(--bg-dark);
  color: rgba(255,255,255,0.7);
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.footer-tagline {
  color: var(--primary);
  margin-top: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  color: rgba(255,255,255,0.5);
  transition: color 0.2s;
}

.social-links a:hover {
  color: var(--primary);
}

.footer-links h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
}

.footer-bottom a {
  color: rgba(255,255,255,0.5);
}

/* Responsive */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .menu-toggle {
    display: flex;
  }

  .header-cta {
    display: none;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .location-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
